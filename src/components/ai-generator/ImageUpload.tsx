"use client";

import React, { useState, useCallback, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';

interface UploadedImageData {
  url: string;
  upload_time: string;
  file_size: number;
  file_name: string;
  upload_id: string;
}

interface UploadedImage {
  id: string;
  url: string;
  file: File;
  data?: UploadedImageData;
  isUploading?: boolean;
  uploadProgress?: number;
  error?: string;
  preview: string;
  base64?: string;
}

interface ImageUploadProps {
  onImagesChange?: (images: UploadedImageData[]) => void;
  maxImages?: number;
  disabled?: boolean;
  onError?: (message: string) => void;
}

const ImageUpload = forwardRef<{
  getFormattedUploadedImages: () => string | null;
  getUploadedImagesData: () => UploadedImageData[];
  getBase64Image: () => string | null;
  hasImage: () => boolean;
  clearImages: () => void;
}, ImageUploadProps>(function ImageUpload({ 
  onImagesChange, 
  maxImages = 1, 
  disabled = false,
  onError
}: ImageUploadProps, ref) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 当图片列表变化时，通知父组件
  useEffect(() => {
    if (onImagesChange) {
      const validImages = uploadedImages.filter(img => !img.isUploading && !img.error);
      const imageData = validImages.map(img => ({
        url: img.url,
        upload_time: new Date().toISOString(),
        file_size: img.file.size,
        file_name: img.file.name,
        upload_id: img.id
      }));
      onImagesChange(imageData);
    }
  }, [uploadedImages, onImagesChange]);

  useImperativeHandle(ref, () => ({
    getFormattedUploadedImages: () => {
      const successfulUploads = uploadedImages
        .filter(img => img.data && !img.isUploading && !img.error)
        .map(img => img.data!);
      
      return formatUploadedImagesForDatabase(successfulUploads);
    },
    getUploadedImagesData: () => uploadedImages
      .filter(img => img.data && !img.isUploading && !img.error)
      .map(img => img.data!),
    getBase64Image: () => {
      const firstImage = uploadedImages.find(img => img.base64 && !img.isUploading && !img.error);
      return firstImage?.base64 || null;
    },
    hasImage: () => uploadedImages.length > 0 && uploadedImages.some(img => !img.isUploading && !img.error),
    clearImages: () => {
      uploadedImages.forEach(img => {
        if (img.url.startsWith('blob:')) {
          URL.revokeObjectURL(img.url);
        }
      });
      setUploadedImages([]);
    }
  }));

  // 将文件转换为base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // 格式化上传图片数据
  const formatUploadedImagesForDatabase = (images: UploadedImageData[]): string | null => {
    if (!images || images.length === 0) {
      return null;
    }

    const imagesObject: Record<string, any> = {};
    images.forEach((imageData, index) => {
      imagesObject[`img_url_${index + 1}`] = {
        url: imageData.url,
        upload_time: imageData.upload_time,
        file_size: imageData.file_size
      };
    });

    return JSON.stringify(imagesObject);
  };

  const handleImageUpload = useCallback(async (files: FileList | null) => {
    if (!files) return;
    
    const newFiles = Array.from(files);
    if (newFiles.length + uploadedImages.length > maxImages) {
      onError?.(`Only ${maxImages} images can be uploaded`);
      return;
    }

    const validFiles = newFiles.filter(file => {
      if (!file.type.startsWith('image/')) {
        onError?.('Please upload image files only');
        return false;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB限制
        onError?.('Image size cannot exceed 2MB');
        return false;
      }
      return true;
    });

    // 处理每个文件，转换为base64
    const processFiles = validFiles.map(async (file) => {
      try {
        const base64 = await fileToBase64(file);
        return {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          url: URL.createObjectURL(file),
          file: file,
          preview: URL.createObjectURL(file),
          base64: base64
        };
      } catch (error) {
        onError?.('Image processing failed');
        return null;
      }
    });

    const newImages = (await Promise.all(processFiles)).filter(Boolean) as UploadedImage[];
    setUploadedImages(prev => [...prev, ...newImages]);
  }, [maxImages, uploadedImages.length, onError]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleImageUpload(e.dataTransfer.files);
  }, [handleImageUpload]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const removeImage = (imageId: string) => {
    const imageToRemove = uploadedImages.find(img => img.id === imageId);
    if (imageToRemove && imageToRemove.url.startsWith('blob:')) {
      URL.revokeObjectURL(imageToRemove.url);
    }
    
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-lg p-4 text-center ${
          isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/20'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple={maxImages > 1}
          className="hidden"
          onChange={(e) => handleImageUpload(e.target.files)}
          disabled={disabled}
        />
        
        {uploadedImages.length === 0 ? (
          <div className="py-8">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-1">
              Drag and drop images here, or click to upload
            </p>
            <p className="text-xs text-muted-foreground">
              Supported formats: JPG, PNG, WebP (Max 2MB)
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src={image.preview}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
                {!disabled && (
                  <button
                    className="absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(image.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload; 