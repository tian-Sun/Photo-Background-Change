# AI Professional Headshot Generator

一个基于AI的专业头像生成工具，使用 Next.js、TypeScript 和 Flux Kontext Pro API 构建。

## 功能特点

- 🎨 **三种专业风格**: 商务、经典、职场
- 📐 **多种尺寸比例**: 自动、1:1、4:5、3:4、2:3、5:4
- 🔒 **用户认证**: Google OAuth 登录
- 💳 **使用限制**: 每日免费次数 + 付费订阅
- 🎯 **AI驱动**: 使用 Flux Kontext Pro 生成高质量职业头像
- 📱 **响应式设计**: 支持桌面和移动设备

## 技术栈

- **前端**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **后端**: Next.js API Routes, Replicate API
- **认证**: NextAuth.js with Google Provider
- **数据库**: Supabase (PostgreSQL)
- **AI模型**: black-forest-labs/flux-kontext-pro
- **部署**: Vercel

## 环境配置

创建 `.env.local` 文件并配置以下环境变量：

```bash
# Replicate API Configuration
REPLICATE_API_TOKEN=your_replicate_api_token_here

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 数据库设置

在 Supabase 中执行 `database/schema.sql` 文件来创建必要的数据表：

```sql
-- 执行 database/schema.sql 中的所有 SQL 语句
```

## 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd Photo-Background-Change
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量（见上方）

4. 启动开发服务器
```bash
npm run dev
```

5. 打开浏览器访问 `http://localhost:3000`

## API 接口

### POST /api/generate-headshot

生成专业头像的主要接口。

**请求参数:**
```typescript
{
  input_image: string;           // 图片的base64或URL
  style: 'business' | 'classic' | 'workplace'; // 风格选择
  aspect_ratio?: 'auto' | '1:1' | '4:5' | '3:4' | '2:3' | '5:4'; // 尺寸比例
}
```

**响应格式:**
```typescript
{
  success: boolean;
  result?: string;               // 生成的图片URL或base64
  error?: string;                // 错误信息
  message?: string;              // 额外信息
}
```

### GET/POST /api/remaining

获取和更新用户剩余使用次数。

## 风格说明

### 商务风格 (Business)
- 适合企业高管和商务场合
- 浅灰色西装外套 + 白色立领衬衫
- 冷灰色渐变背景，营造现代企业环境

### 经典风格 (Classic)  
- 适合传统职业和正式场合
- 深色西装外套 + 纯白衬衫
- 现代办公室内景背景，柔和模糊处理

### 职场风格 (Workplace)
- 适合日常工作和职业环境
- 炭灰色学院风西装 + 浅蓝色衬衫
- 现代办公室背景，专业而亲和

## 部署

项目配置了 Vercel 部署，推送到 GitHub 后自动部署。

确保在 Vercel 中配置所有必要的环境变量。

## 注意事项

- 图片大小限制: 2MB
- 支持格式: JPEG, PNG, WebP
- 建议上传清晰的人物正面照片以获得最佳效果
- 需要稳定的网络连接以调用 AI API

## 许可证

MIT License
