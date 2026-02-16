'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';
import { toast } from 'react-toastify';
import {
  createCourseAction,
  updateCourseAction,
} from '@/app/admin/courses/actions';
import { courseCategories, courseTypes, courseLevels } from '@/lib/courseData';
import type { DbCourse, DbCourseTranslation, CourseCategory, CourseType } from '@/types/course';

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'kr', label: 'Korean' },
  { code: 'sp', label: 'Spanish' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'jp', label: 'Japanese' },
  { code: 'tl', label: 'Tagalog' },
  { code: 'zh', label: 'Chinese' },
  { code: 'id', label: 'Indonesian' },
] as const;

type LocaleCode = (typeof LOCALES)[number]['code'];

interface CourseFormProps {
  mode: 'create' | 'edit';
  course?: DbCourse & { translations: DbCourseTranslation[] };
}

export default function CourseForm({ mode, course }: CourseFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'basic' | 'translations'>('basic');
  const [activeLocale, setActiveLocale] = useState<LocaleCode>('en');
  const [id, setId] = useState(course?.id || '');
  const [category, setCategory] = useState(course?.category || 'cookery');
  const [type, setType] = useState(course?.type || 'full-course');
  const [level, setLevel] = useState(course?.level || '');
  const [duration, setDuration] = useState(course?.duration || '');
  const [price, setPrice] = useState(course?.price?.toString() || '');
  const [image, setImage] = useState(course?.image || '');
  const [link, setLink] = useState(course?.link || '');
  const [tags, setTags] = useState(course?.tags?.join(', ') || '');
  const [isActive, setIsActive] = useState(course?.is_active ?? true);
  const [displayOrder, setDisplayOrder] = useState(course?.display_order?.toString() || '0');
  const [translations, setTranslations] = useState<Record<LocaleCode, { title: string; description: string }>>(() => {
    const init: Record<string, { title: string; description: string }> = {};
    for (const loc of LOCALES) {
      const tr = course?.translations?.find((t) => t.locale === loc.code);
      init[loc.code] = { title: tr?.title || '', description: tr?.description || '' };
    }
    return init as Record<LocaleCode, { title: string; description: string }>;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('category', category);
      formData.append('type', type);
      formData.append('level', level);
      formData.append('duration', duration);
      formData.append('price', price);
      formData.append('image', image);
      formData.append('link', link);
      formData.append('tags', tags);
      formData.append('is_active', isActive.toString());
      formData.append('display_order', displayOrder);
      for (const loc of LOCALES) {
        formData.append(`translation_${loc.code}_title`, translations[loc.code].title);
        formData.append(`translation_${loc.code}_description`, translations[loc.code].description);
      }

      if (mode === 'create') {
        await createCourseAction(formData);
        toast.success('Course created');
        router.push('/admin/courses');
      } else {
        await updateCourseAction(course!.id, formData);
        toast.success('Course updated');
        router.refresh();
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setLoading(false);
    }
  };

  const categoriesForSelect = courseCategories.filter((c) => c.value !== 'all');
  const typesForSelect = courseTypes.filter((t) => t.value !== 'all');
  const levelsForSelect = courseLevels.filter((l) => l.value !== 'all');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-2 border-b mb-4">
        <button
          type="button"
          onClick={() => setActiveTab('basic')}
          className={`px-4 py-2 ${activeTab === 'basic' ? 'border-b-2 border-primary-bk font-medium' : ''}`}
        >
          Basic Info
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('translations')}
          className={`px-4 py-2 ${activeTab === 'translations' ? 'border-b-2 border-primary-bk font-medium' : ''}`}
        >
          Translations
        </button>
      </div>

      {activeTab === 'basic' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course ID *</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              disabled={mode === 'edit'}
              className="w-full px-4 py-2 border rounded-md disabled:bg-gray-100"
              placeholder="e.g. kitchen-management"
            />
            {mode === 'edit' && (
              <p className="text-xs text-gray-500 mt-1">ID cannot be changed after creation.</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CourseCategory)}
                required
                className="w-full px-4 py-2 border rounded-md"
              >
                {categoriesForSelect.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as CourseType)}
                required
                className="w-full px-4 py-2 border rounded-md"
              >
                {typesForSelect.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">None</option>
                {levelsForSelect.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="e.g. 78 weeks"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Optional"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
              <input
                type="number"
                value={displayOrder}
                onChange={(e) => setDisplayOrder(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image *</label>
            <ImageUpload
              value={image}
              onChange={setImage}
              directory="courses"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Link *</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="/cookery-and-hospitality-courses/sit40521-certificate-iv-in-kitchen-management"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="kitchen, management, culinary"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_active"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="is_active">Active (visible on site)</label>
          </div>
        </div>
      )}

      {activeTab === 'translations' && (
        <div className="space-y-4">
          {/* Locale sub-tabs */}
          <div className="flex gap-1 border-b overflow-x-auto">
            {LOCALES.map((loc) => {
              const hasContent = !!(translations[loc.code].title || translations[loc.code].description);
              const isActive = activeLocale === loc.code;
              return (
                <button
                  key={loc.code}
                  type="button"
                  onClick={() => setActiveLocale(loc.code)}
                  className={`relative px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? 'border-b-2 border-primary-bk font-medium text-gray-900'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {loc.label}
                  {hasContent && (
                    <span
                      className={`ml-1.5 inline-block w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-gray-800' : 'bg-green-500'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active locale form */}
          {(() => {
            const loc = LOCALES.find((l) => l.code === activeLocale)!;
            return (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Title</label>
                  <input
                    type="text"
                    value={translations[loc.code].title}
                    onChange={(e) =>
                      setTranslations((prev) => ({
                        ...prev,
                        [loc.code]: { ...prev[loc.code], title: e.target.value },
                      }))
                    }
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder={`Title in ${loc.label}`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Description</label>
                  <textarea
                    value={translations[loc.code].description}
                    onChange={(e) =>
                      setTranslations((prev) => ({
                        ...prev,
                        [loc.code]: { ...prev[loc.code], description: e.target.value },
                      }))
                    }
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder={`Description in ${loc.label}`}
                  />
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-bk text-white rounded-md hover:bg-primary disabled:opacity-50"
        >
          {loading ? 'Saving...' : mode === 'create' ? 'Create Course' : 'Update Course'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
