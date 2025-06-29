export type Language = 'en' | 'zh';

export const languages: Record<Language, string> = {
  en: 'English',
  zh: '中文',
};

export const translations = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      signIn: 'Sign In',
    },
    hero: {
      badge: '2025 🎉 Create Professional Headshots in Seconds',
      title: 'Transform Your Selfie into Studio-Quality Headshots with Our AI Headshot Generator',
      titleHighlight: '',
      description: `Try our AI headshot generator and transform any selfie into three studio-quality headshots in minutes. No photographer needed, fully private, perfect for LinkedIn and résumés.`,
      cta: 'Generate Headshots Now!',
    },
    login: {
      title: 'Welcome to AI Headshot Generator',
      subtitle: 'Sign in with Google to access our AI headshot generator',
      googleButton: 'Continue with Google',
      terms: 'By signing in, you agree to our Terms of Service and Privacy Policy',
      backToHome: '← Back to AI Headshot Generator',
    },
  },
  zh: {
    nav: {
      features: '功能',
      pricing: '价格',
      signIn: '登录',
    },
    hero: {
      badge: 'AI驱动',
      title: '将您的照片转换为',
      titleHighlight: 'Minecraft 风格艺术',
      description: '使用我们的 AI 工具，将您的照片转换为独特的 Minecraft 风格像素艺术。只需上传照片，让 AI 为您创造魔法！',
      cta: '立即体验',
      before: '原图',
      after: '效果图',
    },
    login: {
      title: '欢迎登录',
      subtitle: '使用 Google 账户快速登录开始使用我们的服务',
      googleButton: '使用 Google 登录',
      terms: '登录即表示您同意我们的服务条款和隐私政策',
      backToHome: '← 返回首页',
    },
  },
}; 