"use client";

import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// 导入可复用组件
import ImageUpload from './src/components/ai-generator/ImageUpload';
import { StyleSelector } from './src/components/ai-generator/StyleSelector';
import { AspectRatioSelector } from './src/components/ai-generator/AspectRatioSelector';
import { ImageDisplayPanel } from './ImageDisplayPanel';
import { ResultSection } from './ResultSection';

interface GenerationResult {
  id: string;
  url: string;
  prompt: string;
  model?: string;
  style?: string;
  ratio?: string;
  createdAt: Date;
}

export function AIGeneratorExample() {
  // 状态管理
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('default');
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  const [generationStatus, setGenerationStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [error, setError] = useState<string>('');
  
  // 图片上传引用
  const imageUploadRef = useRef<{
    getFormattedUploadedImages: () => string | null;
    getUploadedImagesData: () => any[];
    clearImages: () => void;
  }>(null);

  // 模拟生成过程
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setGenerationStatus('generating');
    setProgress(0);
    setError('');

    // 模拟进度更新
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 20;
      });
    }, 500);

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      clearInterval(progressInterval);
      setProgress(100);

      // 模拟生成结果
      const mockResult: GenerationResult = {
        id: Date.now().toString(),
        url: 'https://picsum.photos/512/512?random=' + Date.now(),
        prompt: prompt,
        model: 'Mock AI Model',
        style: selectedStyle,
        ratio: selectedRatio,
        createdAt: new Date()
      };

      setResult(mockResult);
      setGenerationStatus('success');
      
    } catch (err) {
      clearInterval(progressInterval);
      setError('Generation failed. Please try again.');
      setGenerationStatus('error');
    }
  };

  const handleRegenerate = () => {
    setGenerationStatus('idle');
    setResult(null);
    setProgress(0);
    setError('');
  };

  const handleImageUploadError = (message: string) => {
    setError(message);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-2rem)] max-h-[900px]">
        {/* 左侧配置面板 */}
        <div className="flex flex-col gap-4">
          {/* 图片上传区域 */}
          <Card className="p-4 aspect-[4/3]">
            <div className="h-full flex flex-col">
              <Label className="text-base font-semibold mb-3">Upload Image</Label>
              <div className="flex-1 flex items-center justify-center">
              <ImageUpload
                ref={imageUploadRef}
                  maxImages={1}
                disabled={generationStatus === 'generating'}
                onError={handleImageUploadError}
              />
            </div>
            </div>
          </Card>

          {/* 风格选择 */}
          <Card className="p-4">
            <div className="space-y-3">
              <Label className="text-base font-semibold">Style</Label>
              <StyleSelector
                value={selectedStyle}
                onChange={setSelectedStyle}
              />
            </div>
          </Card>

          {/* 比例选择 */}
          <Card className="p-4">
            <div className="space-y-3">
              <Label className="text-base font-semibold">Aspect Ratio</Label>
              <AspectRatioSelector
                value={selectedRatio}
                onChange={setSelectedRatio}
              />
            </div>
          </Card>

          {/* 生成按钮 */}
          <Button 
            onClick={handleGenerate}
            disabled={generationStatus === 'generating'}
            className="w-full h-12 text-lg"
            size="lg"
          >
            {generationStatus === 'generating' ? 'Generating...' : 'Generate'}
          </Button>

          {/* 错误信息 */}
          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}
        </div>

        {/* 右侧预览面板 */}
        <div className="h-full bg-muted/30 rounded-lg overflow-hidden">
          <div className="h-full flex items-center justify-center">
            {generationStatus === 'generating' ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Generating...</p>
              </div>
            ) : result ? (
              <img
                src={result.url}
                alt="Generated image"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <p className="text-muted-foreground">Result Preview</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 