'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  upsertCourseDetailAction,
  deleteCourseDetailAction,
} from '@/app/admin/courses/actions';
import type { DbCourseDetail } from '@/types/course';
import type { Locale } from '@/types/course';

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'kr', label: 'Korean' },
  { code: 'sp', label: 'Spanish' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'jp', label: 'Japanese' },
  { code: 'tl', label: 'Tagalog' },
  { code: 'zh', label: 'Chinese' },
  { code: 'id', label: 'Indonesian' },
];

interface CourseEditDetailsProps {
  courseId: string;
  details: DbCourseDetail[];
}

export default function CourseEditDetails({ courseId, details }: CourseEditDetailsProps) {
  const [adding, setAdding] = useState(false);
  const [newSection, setNewSection] = useState({ locale: 'en' as Locale, sectionKey: '', title: '', description: '{}' });

  const handleUpsert = async () => {
    try {
      await upsertCourseDetailAction(
        courseId,
        newSection.locale,
        newSection.sectionKey,
        newSection.title,
        newSection.description,
        details.filter((d) => d.locale === newSection.locale).length
      );
      toast.success('Section saved');
      setAdding(false);
      setNewSection({ locale: 'en', sectionKey: '', title: '', description: '{}' });
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    }
  };

  const handleDelete = async (locale: Locale, sectionKey: string) => {
    if (!confirm('Delete this section?')) return;
    try {
      await deleteCourseDetailAction(courseId, locale, sectionKey);
      toast.success('Section deleted');
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    }
  };

  return (
    <div className="space-y-4">
      {details.length === 0 && !adding && (
        <p className="text-gray-500 text-sm">No course details yet. Add sections below.</p>
      )}

      {details.map((d) => (
        <div
          key={d.id}
          className="border rounded p-4 flex justify-between items-start"
        >
          <div>
            <div className="font-medium">
              [{d.locale}] {d.section_key} - {d.title}
            </div>
            <pre className="text-xs text-gray-600 mt-2 max-h-24 overflow-auto">
              {typeof d.description === 'string'
                ? d.description
                : JSON.stringify(d.description, null, 2)}
            </pre>
          </div>
          <button
            type="button"
            onClick={() => handleDelete(d.locale, d.section_key)}
            className="text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      ))}

      {adding ? (
        <div className="border rounded p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm text-gray-600">Locale</label>
              <select
                value={newSection.locale}
                onChange={(e) =>
                  setNewSection((s) => ({ ...s, locale: e.target.value as Locale }))
                }
                className="w-full px-2 py-1 border rounded"
              >
                {LOCALES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Section Key</label>
              <input
                type="text"
                value={newSection.sectionKey}
                onChange={(e) =>
                  setNewSection((s) => ({ ...s, sectionKey: e.target.value }))
                }
                placeholder="e.g. courseDuration"
                className="w-full px-2 py-1 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Title</label>
            <input
              type="text"
              value={newSection.title}
              onChange={(e) =>
                setNewSection((s) => ({ ...s, title: e.target.value }))
              }
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              Description (JSON: string, array, or object)
            </label>
            <textarea
              value={newSection.description}
              onChange={(e) =>
                setNewSection((s) => ({ ...s, description: e.target.value }))
              }
              rows={6}
              className="w-full px-2 py-1 border rounded font-mono text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleUpsert}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setAdding(false)}
              className="px-3 py-1 bg-gray-300 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setAdding(true)}
          className="px-4 py-2 border border-dashed rounded text-gray-600 hover:bg-gray-50"
        >
          + Add Section
        </button>
      )}
    </div>
  );
}
