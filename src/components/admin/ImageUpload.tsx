'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

interface ImageUploadProps {
  value: string;
  onChange: (path: string) => void;
  directory?: string;
  placeholder?: string;
  required?: boolean;
}

export default function ImageUpload({
  value,
  onChange,
  directory = 'courses',
  placeholder = 'Upload or enter image path',
  required = false,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string>(value || '');

  const getPreviewUrl = useCallback(async (path: string): Promise<string> => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
      return path;
    }
    if (path.startsWith('data:')) return path;
    try {
      const res = await fetch(`/api/r2/get-url?key=${encodeURIComponent(path)}`);
      const data = await res.json();
      return data.url || path;
    } catch {
      return path;
    }
  }, []);

  useEffect(() => {
    if (value) {
      getPreviewUrl(value).then(setPreview);
    } else {
      setPreview('');
    }
  }, [value, getPreviewUrl]);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', directory);

      const res = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');

      onChange(data.imagePath);
      const url = await getPreviewUrl(data.imagePath);
      setPreview(url);
      toast.success('Image uploaded');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Only image files allowed');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File must be 10MB or less');
      return;
    }
    handleUpload(file);
  };

  const handlePathChange = async (path: string) => {
    onChange(path);
    const url = await getPreviewUrl(path);
    setPreview(url);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => handlePathChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
          {uploading ? 'Uploading...' : 'Upload'}
        </label>
      </div>
      {preview && (
        <div className="relative w-48 h-32 border rounded overflow-hidden">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
            unoptimized={preview.startsWith('data:') || preview.startsWith('http')}
          />
        </div>
      )}
    </div>
  );
}
