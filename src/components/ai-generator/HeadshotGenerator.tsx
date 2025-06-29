"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import ImageUpload from './ImageUpload';
import StyleSelector from './StyleSelector';
import AspectRatioSelector from './AspectRatioSelector';

interface GenerationResult {
  id: string;
  url: string;
  style?: string;
  ratio?: string;
  createdAt: Date;
}

export default function HeadshotGenerator() {
  const [selectedStyle, setSelectedStyle] = useState('business');
  const [selectedRatio, setSelectedRatio] = useState('auto');
  const [generationStatus, setGenerationStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [error, setError] = useState('');
  const imageUploadRef = useRef<any>(null);

  const handleGenerate = async () => {
    try {
      setError('');
      
      // 检查是否有上传的图片
      if (!imageUploadRef.current?.hasImage()) {
        setError('Please upload an image first');
        return;
      }

      // 获取base64图片数据
      const base64Image = imageUploadRef.current?.getBase64Image();
      if (!base64Image) {
        setError('Image processing failed, please re-upload');
        return;
      }

      setGenerationStatus('generating');
      setResult(null);

      // 调用API
      const response = await fetch('/api/generate-headshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_image: base64Image,
          style: selectedStyle,
          aspect_ratio: selectedRatio,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Generation failed');
      }

      if (data.success && data.result) {
        setResult({
          id: Date.now().toString(),
          url: data.result,
          style: selectedStyle,
          ratio: selectedRatio,
          createdAt: new Date()
        });
        setGenerationStatus('success');
      } else {
        throw new Error(data.error || 'No result returned');
      }

    } catch (err) {
      console.error('Generation error:', err);
      setError(err instanceof Error ? err.message : 'Generation failed, please try again');
      setGenerationStatus('error');
    }
  };

  const canGenerate = imageUploadRef.current?.hasImage() && selectedStyle && generationStatus !== 'generating';

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <Card className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[500px]">
          {/* 左侧配置面板 */}
          <div className="space-y-3">
            {/* 图片上传区域 */}
            <Card className="p-3 border-2 border-dashed">
              <div className="space-y-2">
                <Label className="text-base font-semibold">Upload Image</Label>
                <ImageUpload
                  ref={imageUploadRef}
                  maxImages={1}
                  disabled={generationStatus === 'generating'}
                  onError={setError}
                />
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-3">
              {/* 风格选择 */}
              <Card className="p-3">
                <div className="space-y-2">
                  <Label className="text-base font-semibold">Style</Label>
                  <StyleSelector
                    value={selectedStyle}
                    onChange={setSelectedStyle}
                  />
                </div>
              </Card>

              {/* 比例选择 */}
              <Card className="p-3">
                <div className="space-y-2">
                  <Label className="text-base font-semibold">Aspect Ratio</Label>
                  <AspectRatioSelector
                    selectedRatio={selectedRatio}
                    onRatioChange={setSelectedRatio}
                  />
                </div>
              </Card>
            </div>

            {/* 生成按钮 */}
            <Button 
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="w-full h-10 text-base"
            >
              {generationStatus === 'generating' ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                'Generate'
              )}
            </Button>

            {/* 错误信息 */}
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}
          </div>

          {/* 右侧预览面板 */}
          <Card className="flex items-center justify-center bg-muted/10 border-2 border-dashed">
            <div className="w-full h-full flex items-center justify-center p-4">
              {generationStatus === 'generating' ? (
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"></div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-foreground">Generating...</p>
                    <p className="text-sm text-muted-foreground">Your image is being generated, please wait...</p>
                  </div>
                </div>
              ) : result ? (
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={result.url}
                      alt="Generated headshot"
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = result.url;
                        link.download = `headshot-${result.style}-${Date.now()}.png`;
                        link.click();
                      }}
                      className="w-full"
                    >
                      Download Image
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <p className="text-lg font-medium text-muted-foreground">Result Preview</p>
                  <p className="text-sm text-muted-foreground">Generated image will be displayed here</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}