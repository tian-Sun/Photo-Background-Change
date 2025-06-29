// 职业头像生成相关的类型定义

export type StyleType = 'business' | 'classic' | 'workplace';

export type AspectRatioType = 'auto' | '1:1' | '4:5' | '3:4' | '2:3' | '5:4';

export interface HeadshotRequest {
  input_image: string;           // 图片的base64或URL
  style: StyleType;              // 风格选择
  aspect_ratio?: AspectRatioType; // 尺寸比例，默认为auto
}

export interface HeadshotResponse {
  success: boolean;
  result?: string;               // 生成的图片URL或base64
  error?: string;                // 错误信息
  message?: string;              // 额外信息（如演示模式提示）
}

export interface StyleOption {
  id: StyleType;
  name: string;                  // 中文显示名称
  description: string;           // 风格描述
  preview?: string;              // 预览图片URL（可选）
}

export interface AspectRatioOption {
  id: AspectRatioType;
  name: string;                  // 显示名称
  description: string;           // 描述
}

// 预定义的风格选项
export const STYLE_OPTIONS: StyleOption[] = [
  {
    id: 'business',
    name: '商务',
    description: '专业商务风格，适合企业高管和商务场合'
  },
  {
    id: 'classic',
    name: '经典',
    description: '经典正装风格，适合传统职业和正式场合'
  },
  {
    id: 'workplace',
    name: '职场',
    description: '现代职场风格，适合日常工作和职业环境'
  }
];

// 预定义的尺寸比例选项
export const ASPECT_RATIO_OPTIONS: AspectRatioOption[] = [
  {
    id: 'auto',
    name: '自动',
    description: '保持原图比例'
  },
  {
    id: '1:1',
    name: '1:1',
    description: '正方形，适合头像使用'
  },
  {
    id: '4:5',
    name: '4:5',
    description: '竖版，适合证件照'
  },
  {
    id: '3:4',
    name: '3:4',
    description: '标准竖版比例'
  },
  {
    id: '2:3',
    name: '2:3',
    description: '经典竖版比例'
  },
  {
    id: '5:4',
    name: '5:4',
    description: '略宽比例，适合横版展示'
  }
]; 