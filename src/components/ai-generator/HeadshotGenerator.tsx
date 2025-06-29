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
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  const [generationStatus, setGenerationStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [error, setError] = useState('');
  const imageUploadRef = useRef<any>(null);

  const handleGenerate = async () => {
    try {
      setError('');
      setGenerationStatus('generating');
      
      // TODO: Implement actual generation logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setResult({
        id: '1',
        url: '/demo/result.png',
        style: selectedStyle,
        ratio: selectedRatio,
        createdAt: new Date()
      });
      setGenerationStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed, please try again');
      setGenerationStatus('error');
    }
  };

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
              disabled={generationStatus === 'generating'}
              className="w-full h-10 text-base"
            >
              {generationStatus === 'generating' ? 'Generating...' : 'Generate'}
            </Button>

            {/* 错误信息 */}
            {error && (
              <div className="p-2 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}
          </div>

          {/* 右侧预览面板 */}
          <Card className="flex items-center justify-center bg-muted/10 border-2 border-dashed">
            <div className="w-full h-full flex items-center justify-center p-3">
              {generationStatus === 'generating' ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3"></div>
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
          </Card>
        </div>
      </Card>
    </div>
  );
}