'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  createShortCourseAction,
  updateShortCourseAction,
  upsertShortCourseDateAction,
  deleteShortCourseDateAction,
} from '@/app/admin/courses/actions';
import type { DbShortCourse, DbShortCourseTranslation, DbShortCourseDate } from '@/types/course';

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

interface ShortCourseFormProps {
  mode: 'create' | 'edit';
  data?: {
    course: DbShortCourse;
    translations: DbShortCourseTranslation[];
    dates: DbShortCourseDate[];
  };
}

export default function ShortCourseForm({ mode, data }: ShortCourseFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'basic' | 'translations' | 'dates'>('basic');
  const [id, setId] = useState(data?.course.id || '');
  const [imagesStr, setImagesStr] = useState(
    data?.course.images?.join(', ') || ''
  );
  const [location, setLocation] = useState(data?.course.location || '');
  const [price, setPrice] = useState(data?.course.price?.toString() || '');
  const [duration, setDuration] = useState(data?.course.duration || '');
  const [maxParticipants, setMaxParticipants] = useState(
    data?.course.max_participants || ''
  );
  const [isActive, setIsActive] = useState(data?.course.is_active ?? true);
  const [displayOrder, setDisplayOrder] = useState(
    data?.course.display_order?.toString() || '0'
  );
  const [translations, setTranslations] = useState<
    Record<
      LocaleCode,
      { title: string; description: string; content: string }
    >
  >(() => {
    const init: Record<string, { title: string; description: string; content: string }> = {};
    for (const loc of LOCALES) {
      const tr = data?.translations?.find((t) => t.locale === loc.code);
      init[loc.code] = {
        title: tr?.title || '',
        description: tr?.description || '',
        content: tr?.content ? JSON.stringify(tr.content, null, 2) : '{}',
      };
    }
    return init as Record<
      LocaleCode,
      { title: string; description: string; content: string }
    >;
  });

  const [newDate, setNewDate] = useState({
    date: '',
    displayDate: '',
    time: '',
    available: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('images', imagesStr);
      formData.append('location', location);
      formData.append('price', price);
      formData.append('duration', duration);
      formData.append('max_participants', maxParticipants);
      formData.append('is_active', isActive.toString());
      formData.append('display_order', displayOrder);
      for (const loc of LOCALES) {
        formData.append(`translation_${loc.code}_title`, translations[loc.code].title);
        formData.append(`translation_${loc.code}_description`, translations[loc.code].description);
        formData.append(`translation_${loc.code}_content`, translations[loc.code].content);
      }

      if (mode === 'create') {
        await createShortCourseAction(formData);
        toast.success('Short course created');
        router.push('/admin/courses/short-courses');
      } else {
        await updateShortCourseAction(data!.course.id, formData);
        toast.success('Short course updated');
        router.refresh();
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setLoading(false);
    }
  };

  const handleAddDate = async () => {
    if (!newDate.date || !newDate.displayDate || !newDate.time || !data) return;
    try {
      await upsertShortCourseDateAction(
        data.course.id,
        newDate.date,
        newDate.displayDate,
        newDate.time,
        newDate.available
      );
      toast.success('Date added');
      setNewDate({ date: '', displayDate: '', time: '', available: true });
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    }
  };

  const handleDeleteDate = async (dateId: string) => {
    if (!data || !confirm('Delete this date?')) return;
    try {
      await deleteShortCourseDateAction(data.course.id, dateId);
      toast.success('Date deleted');
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    }
  };

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
        {mode === 'edit' && (
          <button
            type="button"
            onClick={() => setActiveTab('dates')}
            className={`px-4 py-2 ${activeTab === 'dates' ? 'border-b-2 border-primary-bk font-medium' : ''}`}
          >
            Dates
          </button>
        )}
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
              placeholder="e.g. fss, rsa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Images (comma-separated paths, or upload below)
            </label>
            <input
              type="text"
              value={imagesStr}
              onChange={(e) => setImagesStr(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="/short-course/fss_1.png, /short-course/fss_2.png"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload to R2 then paste path, or use ImageUpload for single image
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="e.g. 1 day"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
              <input
                type="text"
                value={maxParticipants}
                onChange={(e) => setMaxParticipants(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
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
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_active"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="is_active">Active</label>
          </div>
        </div>
      )}

      {activeTab === 'translations' && (
        <div className="space-y-6">
          {LOCALES.map((loc) => (
            <div key={loc.code} className="border rounded-lg p-4">
              <h3 className="font-medium mb-3">{loc.label} ({loc.code})</h3>
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
                    rows={3}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Content (JSON)</label>
                  <textarea
                    value={translations[loc.code].content}
                    onChange={(e) =>
                      setTranslations((prev) => ({
                        ...prev,
                        [loc.code]: { ...prev[loc.code], content: e.target.value },
                      }))
                    }
                    rows={8}
                    className="w-full px-4 py-2 border rounded-md font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'dates' && mode === 'edit' && data && (
        <div className="space-y-4">
          <div className="border rounded p-4 space-y-2">
            <h4 className="font-medium">Add Date</h4>
            <div className="grid grid-cols-4 gap-2">
              <input
                type="date"
                value={newDate.date}
                onChange={(e) => setNewDate((d) => ({ ...d, date: e.target.value }))}
                className="px-2 py-1 border rounded"
              />
              <input
                type="text"
                value={newDate.displayDate}
                onChange={(e) => setNewDate((d) => ({ ...d, displayDate: e.target.value }))}
                placeholder="Display (e.g. Sat 15 Mar)"
                className="px-2 py-1 border rounded"
              />
              <input
                type="text"
                value={newDate.time}
                onChange={(e) => setNewDate((d) => ({ ...d, time: e.target.value }))}
                placeholder="Time (e.g. 9:00 AM)"
                className="px-2 py-1 border rounded"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="available"
                  checked={newDate.available}
                  onChange={(e) => setNewDate((d) => ({ ...d, available: e.target.checked }))}
                />
                <label htmlFor="available" className="ml-1 text-sm">Available</label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleAddDate}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
            >
              Add Date
            </button>
          </div>
          <div>
            <h4 className="font-medium mb-2">Existing Dates</h4>
            {data.dates.length === 0 ? (
              <p className="text-gray-500 text-sm">No dates yet.</p>
            ) : (
              <div className="space-y-2">
                {data.dates.map((d) => (
                  <div
                    key={d.id}
                    className="flex justify-between items-center border rounded p-2"
                  >
                    <span>
                      {d.date} - {d.display_date} @ {d.time}
                      {!d.available && ' (unavailable)'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteDate(d.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-bk text-white rounded-md hover:bg-primary disabled:opacity-50"
        >
          {loading ? 'Saving...' : mode === 'create' ? 'Create' : 'Update'}
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
