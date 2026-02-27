'use client';

import { useState, useRef } from 'react';
import { Image, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ImageDropZoneProps {
  /** Called when user selects or drops an image file */
  onFileChange: (file: File) => void | Promise<void>;
  /** Optional preview URL (data URL or image path) */
  previewUrl?: string;
  /** Show loading state during upload */
  uploading?: boolean;
  /** Disable interactions */
  disabled?: boolean;
  /** Accepted file types (default: image/*) */
  accept?: string;
  /** Max file size in bytes (default: 10MB) */
  maxSize?: number;
  /** Input id for form association */
  id?: string;
  /** Supported formats text (e.g. "JPG, PNG, WebP") */
  supportedFormats?: string;
  /** Custom class for the container */
  className?: string;
}

const DEFAULT_MAX_SIZE = 10 * 1024 * 1024; // 10MB
const DEFAULT_ACCEPT = 'image/jpeg,image/jp2,image/png,image/webp';

export default function ImageDropZone({
  onFileChange,
  previewUrl,
  uploading = false,
  disabled = false,
  accept = DEFAULT_ACCEPT,
  maxSize = DEFAULT_MAX_SIZE,
  id = 'image-dropzone',
  supportedFormats = 'JPG, JPEG2000, PNG, WebP',
  className,
}: ImageDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!file.type.startsWith('image/')) {
      return 'Only image files can be uploaded.';
    }
    if (file.size > maxSize) {
      return `File must be ${Math.round(maxSize / 1024 / 1024)}MB or less.`;
    }
    return null;
  };

  const processFile = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    await onFileChange(file);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && !uploading) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (disabled || uploading) return;

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    await processFile(file);
  };

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processFile(file);
    e.target.value = '';
  };

  const handleBrowseClick = () => {
    if (disabled || uploading) return;
    inputRef.current?.click();
  };

  const isDisabled = disabled || uploading;

  return (
    <div className={cn('space-y-2', className)}>
      <div
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleBrowseClick();
          }
        }}
        className={cn(
          'relative rounded-lg border-2 border-dashed transition-all duration-200',
          'min-h-[180px] flex flex-col items-center justify-center p-6',
          'bg-sky-50/50 border-sky-200',
          isDragging && 'border-sky-400 bg-sky-100/70 scale-[1.01]',
          isDisabled && 'opacity-60 cursor-not-allowed',
          !isDisabled && 'cursor-pointer hover:border-sky-300 hover:bg-sky-50'
        )}
        aria-label="Drop your image here or click to browse"
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          onChange={handleFileInputChange}
          disabled={isDisabled}
          className="sr-only"
          aria-hidden
        />

        {uploading ? (
          <div className="flex flex-col items-center gap-2 text-sky-600">
            <Loader2 className="h-10 w-10 text-sky-500 animate-spin" />
            <p className="text-sm font-medium">Uploading image...</p>
          </div>
        ) : previewUrl ? (
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="relative w-32 h-32 rounded-md overflow-hidden border border-sky-200 bg-white">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-sky-600">
              Click or drop to replace image
            </p>
          </div>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-center">
              <Image className="w-14 h-14 text-sky-400" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Drop your image here, or{' '}
              <span className="font-medium text-sky-600 underline underline-offset-2">
                browse
              </span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Supports: {supportedFormats}
            </p>
          </>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
