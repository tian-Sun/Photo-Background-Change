"use client";

<<<<<<< HEAD
import React, { useState, useCallback, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
=======
import React, { useState, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
>>>>>>> peng
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
<<<<<<< HEAD
  base64?: string;
=======
>>>>>>> peng
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
<<<<<<< HEAD
  getBase64Image: () => string | null;
  hasImage: () => boolean;
  clearImages: () => void;
}, ImageUploadProps>(function ImageUpload({ 
  onImagesChange, 
  maxImages = 1, 
=======
  clearImages: () => void;
}, ImageUploadProps>(function ImageUpload({ 
  onImagesChange, 
  maxImages = 2, 
>>>>>>> peng
  disabled = false,
  onError
}: ImageUploadProps, ref) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

<<<<<<< HEAD
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

=======
>>>>>>> peng
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
<<<<<<< HEAD
    getBase64Image: () => {
      const firstImage = uploadedImages.find(img => img.base64 && !img.isUploading && !img.error);
      return firstImage?.base64 || null;
    },
    hasImage: () => uploadedImages.length > 0 && uploadedImages.some(img => !img.isUploading && !img.error),
=======
>>>>>>> peng
    clearImages: () => {
      uploadedImages.forEach(img => {
        if (img.url.startsWith('blob:')) {
          URL.revokeObjectURL(img.url);
        }
      });
      setUploadedImages([]);
    }
  }));

<<<<<<< HEAD
  // 将文件转换为base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

=======
>>>>>>> peng
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

<<<<<<< HEAD
  const handleImageUpload = useCallback(async (files: FileList | null) => {
=======
  const handleImageUpload = useCallback((files: FileList | null) => {
>>>>>>> peng
    if (!files) return;
    
    const newFiles = Array.from(files);
    if (newFiles.length + uploadedImages.length > maxImages) {
<<<<<<< HEAD
      onError?.(`Only ${maxImages} images can be uploaded`);
=======
      onError?.(`最多只能上传 ${maxImages} 张图片`);
>>>>>>> peng
      return;
    }

    const validFiles = newFiles.filter(file => {
      if (!file.type.startsWith('image/')) {
<<<<<<< HEAD
        onError?.('Please upload image files only');
        return false;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB限制
=======
        onError?.('只能上传图片文件');
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
>>>>>>> peng
        onError?.('Image size cannot exceed 2MB');
        return false;
      }
      return true;
    });

<<<<<<< HEAD
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
=======
    const newImages = validFiles.map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      file: file,
      preview: URL.createObjectURL(file)
    }));

>>>>>>> peng
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
<<<<<<< HEAD
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple={maxImages > 1}
          className="hidden"
          onChange={(e) => handleImageUpload(e.target.files)}
          disabled={disabled}
        />
        
=======
>>>>>>> peng
        {uploadedImages.length === 0 ? (
          <div className="py-8">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-1">
              Drag and drop images here, or click to upload
            </p>
            <p className="text-xs text-muted-foreground">
<<<<<<< HEAD
              Supported formats: JPG, PNG, WebP (Max 2MB)
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-4">
=======
              Supported formats: JPG, PNG, WebP 
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 py-4">
>>>>>>> peng
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
<<<<<<< HEAD
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
=======
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(image.id);
                  }}
                >
                    ×
                  </button>
                )}
              </div>
          ))}
        </div>
      )}
>>>>>>> peng
      </div>
    </div>
  );
});

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload; 