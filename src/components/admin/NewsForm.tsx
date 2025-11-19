'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createNewsAction, updateNewsAction } from '@/app/admin/news/actions';
import TiptapEditor from '@/components/admin/TiptapEditor';
import type { NewsItem } from '@/lib/news-db';

interface NewsFormProps {
  mode: 'create' | 'edit';
  news?: NewsItem;
}

export default function NewsForm({ mode, news }: NewsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imagePath, setImagePath] = useState('');
  const [category, setCategory] = useState('ABM');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [link, setLink] = useState('');
  const [published, setPublished] = useState(true);

  // Edit 모드일 때 초기값 설정
  useEffect(() => {
    if (mode === 'edit' && news) {
      setTitle(news.title);
      setDescription(news.description);
      setContent(news.content || '');
      setImagePath(news.image);
      setCategory(news.category);
      setDate(news.date.includes('T') ? news.date.split('T')[0] : news.date);
      setLink(news.link || '');
      setPublished(news.published);
      // 기존 이미지 경로를 미리보기로 설정
      setImagePreview(news.image);
    }
  }, [mode, news]);

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
        credentials: 'include', // 쿠키를 포함하여 전송
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
      // Create 모드일 때는 이미지 경로가 필수
      if (mode === 'create' && !imagePath) {
        throw new Error('Please upload an image.');
      }

      // Edit 모드일 때도 이미지 경로가 없으면 에러
      if (mode === 'edit' && !imagePath) {
        throw new Error('Please enter or upload an image path.');
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('content', content);
      formData.append('image', imagePath);
      formData.append('category', category);
      formData.append('date', date);
      formData.append('link', link);
      formData.append('published', published.toString());

      if (mode === 'create') {
        await createNewsAction(formData);
      } else if (mode === 'edit' && news) {
        await updateNewsAction(news.id, formData);
      }

      router.push('/admin/news');
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : mode === 'create'
          ? 'An error occurred while creating the news.'
          : 'An error occurred while updating the news.'
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
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Title *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the news title"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description *
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the news description"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Content
        </label>
        <TiptapEditor
          content={content}
          onChange={setContent}
          placeholder="Write the news content..."
        />
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
                placeholder="/news/image.png"
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
                <p className="mt-2 text-sm text-blue-600">
                  이미지 업로드 중...
                </p>
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category *
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ABM">ABM</option>
            <option value="Event">Event</option>
            <option value="Announcement">Announcement</option>
            <option value="News">News</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Date *
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Link (optional)
        </label>
        <input
          id="link"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://..."
        />
      </div>

      <div className="flex items-center">
        <input
          id="published"
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-20 w-20 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
          Publish immediately
        </label>
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
