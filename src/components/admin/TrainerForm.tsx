'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  createTrainerAction,
  updateTrainerAction,
} from '@/app/admin/trainers/actions';
import { courseCategories } from '@/lib/trainerData';
import type { DbTrainer } from '@/lib/trainer-db';

type CourseCategory =
  | 'cookery'
  | 'business'
  | 'fitness'
  | 'hr'
  | 'project'
  | 'health';

interface TrainerFormProps {
  mode: 'create' | 'edit';
  trainer?: DbTrainer;
  totalTrainers?: number;
}

export default function TrainerForm({
  mode,
  trainer,
  totalTrainers = 0,
}: TrainerFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [courseCategory, setCourseCategory] =
    useState<CourseCategory>('cookery');
  const [bio, setBio] = useState('');
  const [sortOrder, setSortOrder] = useState(totalTrainers + 1);

  useEffect(() => {
    if (mode === 'edit' && trainer) {
      setName(trainer.name);
      setEmail(trainer.email);
      setImagePath(trainer.image);
      setImagePreview(trainer.image);
      setCourseCategory(trainer.course_category);
      setBio(trainer.bio || '');
      setSortOrder(trainer.sort_order);
    }
  }, [mode, trainer]);

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', 'trainers');

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        let errorMessage = 'Failed to upload image.';

        if (contentType && contentType.includes('application/json')) {
          try {
            const data = await response.json();
            errorMessage = data.error || errorMessage;
          } catch {
            errorMessage = `Server returned ${response.status}`;
          }
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setImagePath(data.imagePath);
      return data.imagePath;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Image upload failed.';
      setError(errorMessage);
      throw err;
    } finally {
      setUploading(false);
    }
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Only image files can be uploaded.');
      return;
    }

    setError('');

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    try {
      await handleImageUpload(file);
    } catch (err) {
      console.error('Image upload failed:', err);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!name || !email) {
        throw new Error('Name and email are required.');
      }

      if (!imagePath) {
        throw new Error('Please provide an image path or upload an image.');
      }

      const input = {
        name,
        email,
        image: imagePath,
        course_category: courseCategory,
        bio: bio || null,
        courses: null as string[] | null,
        sort_order: sortOrder,
      };

      if (mode === 'create') {
        await createTrainerAction(input);
      } else if (mode === 'edit' && trainer) {
        await updateTrainerAction(trainer.id, input);
      }

      router.push('/admin/trainers');
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : mode === 'create'
            ? 'Failed to create trainer.'
            : 'Failed to update trainer.',
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
          placeholder="Enter the trainer's name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="trainer@abm.edu.au"
        />
      </div>

      <div>
        <label
          htmlFor="courseCategory"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Course Category *
        </label>
        <select
          id="courseCategory"
          value={courseCategory}
          onChange={(e) => setCourseCategory(e.target.value as CourseCategory)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {courseCategories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Image *
        </label>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Enter the R2 image key directly (e.g. trainers/name.png) or upload
              a new image.
            </p>
            <input
              id="image"
              type="text"
              value={imagePath}
              onChange={(e) => {
                setImagePath(e.target.value);
                setImagePreview(e.target.value);
              }}
              required={isCreateMode && !imagePath}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="trainers/name.png"
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
              <div className="relative w-48 h-48">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="rounded-md border border-gray-300 object-cover"
                />
              </div>
              {imagePath && (
                <p className="mt-2 text-sm text-green-600">
                  {isCreateMode ? 'Image path' : 'Current image'}: {imagePath}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Bio (optional)
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a short bio for the trainer"
        />
      </div>

      <div>
        <label
          htmlFor="sortOrder"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Sort Order
        </label>
        <input
          id="sortOrder"
          type="number"
          value={sortOrder}
          onChange={(e) => setSortOrder(parseInt(e.target.value, 10) || 0)}
          min={1}
          className="w-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-xs text-gray-500">
          Lower numbers appear first.
        </p>
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
