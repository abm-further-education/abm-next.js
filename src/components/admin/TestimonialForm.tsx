'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  createTestimonialAction,
  updateTestimonialAction,
} from '@/app/admin/testimonials/actions';
import type { Testimonial } from '@/lib/testimonial-types';

interface TestimonialFormProps {
  mode: 'create' | 'edit';
  testimonial?: Testimonial;
}

export default function TestimonialForm({
  mode,
  testimonial,
}: TestimonialFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imagePath, setImagePath] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number | ''>('');
  const [course, setCourse] = useState<'cookery&hospitality' | 'fitness'>(
    'cookery&hospitality'
  );

  // Edit 모드일 때 초기값 설정
  useEffect(() => {
    if (mode === 'edit' && testimonial) {
      setName(testimonial.name);
      setImagePath(testimonial.image);
      setMessage(testimonial.message || '');
      setRating(testimonial.rating || '');
      setCourse(testimonial.course);
      // 기존 이미지 경로를 미리보기로 설정
      setImagePreview(testimonial.image);
    }
  }, [mode, testimonial]);

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', 'testimonials'); // testimonial 이미지는 testimonials 디렉토리에 저장

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image.');
      }

      setImagePath(data.imagePath);
      return data.imagePath;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'An error occurred while uploading the image.';
      setError(errorMessage);
      throw err;
    } finally {
      setUploading(false);
    }
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // 이미지 파일인지 확인
    if (!file.type.startsWith('image/')) {
      setError('Only image files can be uploaded.');
      return;
    }

    setError('');

    // 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // 즉시 업로드
    try {
      await handleImageUpload(file);
    } catch (err) {
      // 에러는 handleImageUpload에서 이미 처리됨
      console.error('Image upload failed:', err);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 이미지 경로가 필수
      if (!imagePath) {
        throw new Error('Please upload an image.');
      }

      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', imagePath);
      formData.append('message', message);
      formData.append('rating', rating ? rating.toString() : '');
      formData.append('course', course);

      if (mode === 'create') {
        await createTestimonialAction(formData);
      } else if (mode === 'edit' && testimonial) {
        await updateTestimonialAction(testimonial.id, formData);
      }

      router.push('/admin/testimonials');
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : mode === 'create'
          ? 'An error occurred while creating the testimonial.'
          : 'An error occurred while updating the testimonial.'
      );
    } finally {
      setLoading(false);
    }
  }

  const isCreateMode = mode === 'create';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Name *
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the testimonial name"
        />
      </div>

      <div>
        <label
          htmlFor="course"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Course *
        </label>
        <select
          id="course"
          value={course}
          onChange={(e) =>
            setCourse(e.target.value as 'cookery&hospitality' | 'fitness')
          }
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="cookery&hospitality">Cookery & Hospitality</option>
          <option value="fitness">Fitness</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Image *
        </label>
        {isCreateMode ? (
          <>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!imagePath}
              disabled={uploading}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {uploading && (
              <p className="mt-2 text-sm text-blue-600">Uploading image...</p>
            )}
            {imagePreview && (
              <div className="mt-4">
                <div className="relative max-w-md h-auto">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={400}
                    height={300}
                    className="rounded-md border border-gray-300"
                  />
                </div>
                {imagePath && (
                  <p className="mt-2 text-sm text-green-600">
                    Upload complete: {imagePath}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                You can enter the image path directly or upload a new image.
              </p>
              <input
                id="image"
                type="text"
                value={imagePath}
                onChange={(e) => setImagePath(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="testimonials/image.png"
              />
            </div>
            <div>
              <label
                htmlFor="image-file"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Or upload a new image
              </label>
              <input
                id="image-file"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={uploading}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {uploading && (
                <p className="mt-2 text-sm text-blue-600">Uploading image...</p>
              )}
            </div>
            {imagePreview && (
              <div className="mt-4">
                <div className="relative max-w-md h-auto">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={400}
                    height={300}
                    className="rounded-md border border-gray-300"
                  />
                </div>
                {imagePath && (
                  <p className="mt-2 text-sm text-green-600">
                    {isCreateMode ? 'Upload complete' : 'Current image'}:{' '}
                    {imagePath}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the testimonial message"
        />
      </div>

      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Rating (optional, 1-5)
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) =>
            setRating(e.target.value ? parseInt(e.target.value, 10) : '')
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">No rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading || uploading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading || uploading
            ? isCreateMode
              ? 'Saving...'
              : 'Updating...'
            : isCreateMode
            ? 'Save'
            : 'Update'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

