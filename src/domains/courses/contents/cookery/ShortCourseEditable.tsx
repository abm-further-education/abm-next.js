'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { updateShortCourseTranslationAction } from '@/app/admin/courses/actions';
import { useEditMode } from '@/contexts/EditModeContext';
import { toast } from 'react-toastify';
import type { ShortCourseData } from '@/lib/shortCourseData/shortCourseData.en';
import type { Locale } from '@/types/course';

interface ShortCourseEditableProps {
  courseId: string;
  locale: string;
  data: ShortCourseData;
}

const CONTENT_KEYS = [
  'specialOffer', 'courseType', 'whoShouldAttend', 'whatYoullLearn',
  'takeHomeMessage', 'dressCode', 'callToAction', 'whatYoullMake',
  'instructor', 'whatYoullExperience', 'whyThisCourse', 'whyLearnToMake',
  'antipastoMessage', 'courseOverview', 'keyUnits', 'activities',
  'whoNeedsFSS', 'whyYouNeedRSA', 'whatToBring', 'howToEnrol',
  'whyTrainWithABM', 'courseFormat', 'faq1', 'faq2', 'faq3', 'faq4', 'faq5',
  'courseDeliveryLabel', 'courseDelivery', 'locationLabel', 'timeLabel',
  'time', 'addressLabel', 'address', 'specialOfferLabel',
  'selectDateLabel', 'selectDateOptionLabel',
] as const;

function extractContent(data: ShortCourseData): Record<string, unknown> {
  const content: Record<string, unknown> = {};
  const dataRecord = data as unknown as Record<string, unknown>;
  for (const key of CONTENT_KEYS) {
    const val = dataRecord[key];
    if (val !== undefined) content[key] = val;
  }
  return content;
}

export default function ShortCourseEditable({
  courseId,
  locale,
  data,
}: ShortCourseEditableProps) {
  const editMode = useEditMode();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(data.title || '');
  const [description, setDescription] = useState(data.description || '');
  const [contentJson, setContentJson] = useState(() =>
    JSON.stringify(extractContent(data), null, 2)
  );

  const handleSave = async () => {
    setSaving(true);
    try {
      let content: Record<string, unknown> = {};
      try {
        content = JSON.parse(contentJson);
      } catch {
        toast.error('Invalid JSON in content');
        setSaving(false);
        return;
      }
      await updateShortCourseTranslationAction(courseId, locale as Locale, {
        title,
        description,
        content,
      });
      toast.success('Saved');
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container max-w-[1400px] mx-auto px-20 py-40 md:px-80">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-amber-900">Edit Mode: {courseId.toUpperCase()}</h2>
          <div className="flex gap-2">
            <Link
              href={`/admin/courses/short-courses/${courseId}/edit`}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Full Edit (Admin)
            </Link>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content (JSON)</label>
            <p className="text-xs text-gray-500 mb-1">
              specialOffer, keyUnits, activities, whoNeedsFSS, faq1 등
            </p>
            <textarea
              value={contentJson}
              onChange={(e) => setContentJson(e.target.value)}
              rows={12}
              className="w-full px-3 py-2 border rounded font-mono text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
