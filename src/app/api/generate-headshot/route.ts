import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// 风格提示词映射
const STYLE_PROMPTS = {
  business: "Transform this person into a professional corporate head-shot: change clothing to a soft-structured dove-gray blazer with patch pockets, layered over a white Mandarin-collar shirt for a contemporary formal look, replace background with a softly defocused gradient of cool gray tones, hinting at a sleek corporate environment while keeping all attention on the subject, use neutral daylight, keep the exact same face, hairstyle, pose and camera angle, preserve natural skin texture, DSLR-level realism.",
  
  classic: "Transform this person into a professional corporate head-shot: change clothing to a fitted dark blazer over a crisp white shirt, replace background with a softly blurred modern office interior, use neutral daylight, keep the exact same face, hairstyle, pose and camera angle, preserve natural skin texture, DSLR-level realism.",
  
  workplace: "Transform this female into a professional corporate head-shot: change clothing to a school-uniform-style blazer in charcoal gray with a narrow lapel, paired with a light-blue pinpoint shirt, replace background with a softly blurred modern office interior, use neutral daylight, keep the exact same face, hairstyle, pose and camera angle, preserve natural skin texture, DSLR-level realism."
};

// 有效的风格类型
type StyleType = keyof typeof STYLE_PROMPTS;

// 有效的尺寸比例
const VALID_ASPECT_RATIOS = ['auto', '1:1', '4:5', '3:4', '2:3', '5:4'] as const;
type AspectRatioType = typeof VALID_ASPECT_RATIOS[number];

function isReadableStream(obj: any): obj is ReadableStream {
  return obj && typeof obj.getReader === "function";
}

async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}

export async function POST(request: Request) {
  console.log("🚀 开始处理职业头像生成请求");
  
  try {
    const { input_image, style, aspect_ratio } = await request.json();

    if (!input_image) {
      console.log("❌ 未提供图片");
      return NextResponse.json(
        { success: false, error: "No image provided" },
        { status: 400 }
      );
    }

    if (!style || !STYLE_PROMPTS[style as StyleType]) {
      console.log("❌ 无效的风格参数:", style);
      return NextResponse.json(
        { success: false, error: "Invalid style. Must be one of: business, classic, workplace" },
        { status: 400 }
      );
    }

    const selectedAspectRatio = aspect_ratio || 'auto';
    if (!VALID_ASPECT_RATIOS.includes(selectedAspectRatio)) {
      console.log("❌ 无效的尺寸比例:", aspect_ratio);
      return NextResponse.json(
        { success: false, error: `Invalid aspect ratio. Must be one of: ${VALID_ASPECT_RATIOS.join(', ')}` },
        { status: 400 }
      );
    }

    console.log("📝 请求参数:", {
      style,
      aspect_ratio: selectedAspectRatio,
      has_image: !!input_image
    });

    // 如果没有配置 API token，返回演示模式响应
    if (!process.env.REPLICATE_API_TOKEN) {
      console.log("⚠️ 未配置 REPLICATE_API_TOKEN，使用演示模式");
      return NextResponse.json({
        success: true,
        result: "/demo/result.png",
        message: "Running in demo mode - using sample image",
      });
    }

    // 获取对应风格的提示词
    const prompt = STYLE_PROMPTS[style as StyleType];
    console.log("🎨 使用提示词:", prompt.substring(0, 100) + "...");

    // 调用 Flux Kontext Pro API
    console.log("🔄 正在调用 Flux Kontext Pro API...");
    
    const input: any = {
      input_image: input_image,
      prompt: prompt
    };

    // 只有当aspect_ratio不是auto时才添加到请求中
    if (selectedAspectRatio !== 'auto') {
      input.aspect_ratio = selectedAspectRatio;
    }

    const output = await replicate.run(
      "black-forest-labs/flux-kontext-pro",
      { input }
    ) as unknown;

    console.log("📡 API 响应类型:", typeof output);

    // 处理不同类型的输出
    if (typeof output === "string") {
      // 直接返回字符串（图片 URL）
      console.log("✅ 收到图片URL");
      return NextResponse.json({ 
        success: true, 
        result: output 
      });
    }

    if (isReadableStream(output)) {
      // 处理 ReadableStream（图片流转 base64）
      console.log("📥 处理图片流...");
      const buffer = await streamToBuffer(output);
      const base64 = buffer.toString("base64");
      const dataUrl = `data:image/png;base64,${base64}`;
      
      return NextResponse.json({ 
        success: true, 
        result: dataUrl 
      });
    }

    // 处理其他格式
    console.error("❌ Flux Kontext Pro 返回异常格式:", typeof output);
    throw new Error("Unexpected output format from Flux Kontext Pro API");

  } catch (error) {
    console.error("❌ 职业头像生成错误:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Professional headshot generation failed" 
      },
      { status: 500 }
    );
  }
} 