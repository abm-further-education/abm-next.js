'use client';

import React, { useState, useCallback } from 'react';
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
  'specialOffer',
  'courseType',
  'whoShouldAttend',
  'whatYoullLearn',
  'takeHomeMessage',
  'dressCode',
  'callToAction',
  'whatYoullMake',
  'instructor',
  'whatYoullExperience',
  'whyThisCourse',
  'whyLearnToMake',
  'antipastoMessage',
  'courseOverview',
  'keyUnits',
  'activities',
  'whoNeedsFSS',
  'whyYouNeedRSA',
  'whatToBring',
  'howToEnrol',
  'whyTrainWithABM',
  'courseFormat',
  'faq1',
  'faq2',
  'faq3',
  'faq4',
  'faq5',
  'courseDeliveryLabel',
  'courseDelivery',
  'locationLabel',
  'timeLabel',
  'time',
  'addressLabel',
  'address',
  'specialOfferLabel',
  'selectDateLabel',
  'selectDateOptionLabel',
] as const;

const FIELD_LABELS: Record<string, string> = {
  specialOffer: 'Special Offer',
  courseType: 'Course Type',
  whoShouldAttend: 'Who Should Attend',
  whatYoullLearn: "What You'll Learn",
  takeHomeMessage: 'Take Home Message',
  dressCode: 'Dress Code',
  callToAction: 'Call to Action',
  whatYoullMake: "What You'll Make",
  instructor: 'Instructor',
  whatYoullExperience: "What You'll Experience",
  whyThisCourse: 'Why This Course',
  whyLearnToMake: 'Why Learn to Make',
  antipastoMessage: 'Antipasto Message',
  courseOverview: 'Course Overview',
  keyUnits: 'Key Units',
  activities: 'Activities',
  whoNeedsFSS: 'Who Needs FSS',
  whyYouNeedRSA: 'Why You Need RSA',
  whatToBring: 'What to Bring',
  howToEnrol: 'How to Enrol',
  whyTrainWithABM: 'Why Train with ABM',
  courseFormat: 'Course Format',
  faq1: 'FAQ 1',
  faq2: 'FAQ 2',
  faq3: 'FAQ 3',
  faq4: 'FAQ 4',
  faq5: 'FAQ 5',
  courseDeliveryLabel: 'Course Delivery Label',
  courseDelivery: 'Course Delivery',
  locationLabel: 'Location Label',
  timeLabel: 'Time Label',
  time: 'Time',
  addressLabel: 'Address Label',
  address: 'Address',
  specialOfferLabel: 'Special Offer Label',
  selectDateLabel: 'Select Date Label',
  selectDateOptionLabel: 'Select Date Option Label',
};

const LONG_TEXT_KEYS = new Set([
  'takeHomeMessage',
  'callToAction',
  'whyThisCourse',
  'antipastoMessage',
  'courseOverview',
  'whyTrainWithABM',
  'dressCode',
]);

const STRING_ARRAY_KEYS = new Set([
  'whoShouldAttend',
  'whatYoullLearn',
  'whatYoullMake',
  'whatYoullExperience',
  'whyLearnToMake',
  'whoNeedsFSS',
  'whyYouNeedRSA',
  'whatToBring',
  'howToEnrol',
]);

const FAQ_KEYS = new Set(['faq1', 'faq2', 'faq3', 'faq4', 'faq5']);

function extractContent(data: ShortCourseData): Record<string, unknown> {
  const content: Record<string, unknown> = {};
  const dataRecord = data as unknown as Record<string, unknown>;
  for (const key of CONTENT_KEYS) {
    const val = dataRecord[key];
    if (val !== undefined) content[key] = val;
  }
  return content;
}

/* ── Sub-editors ───────────────────────────────────────────────── */

function ListEditor({
  items,
  onChange,
}: {
  items: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className="text-xs text-gray-400 mt-2.5 w-5 text-right shrink-0">
            {i + 1}.
          </span>
          <textarea
            value={item}
            onChange={(e) => {
              const next = [...items];
              next[i] = e.target.value;
              onChange(next);
            }}
            rows={1}
            className="flex-1 px-3 py-2 border rounded text-sm resize-y"
          />
          <button
            type="button"
            onClick={() => onChange(items.filter((_, j) => j !== i))}
            className="px-2 py-2 text-red-400 hover:text-red-600 text-sm shrink-0"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, ''])}
        className="text-sm text-blue-600 hover:text-blue-800 ml-7"
      >
        + Add item
      </button>
    </div>
  );
}

function SpecialOfferEditor({
  value,
  onChange,
}: {
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
}) {
  const fields = [
    { key: 'textBeforeCode', label: 'Text Before Code' },
    { key: 'code', label: 'Code' },
    { key: 'textAfterCode', label: 'Text After Code' },
    { key: 'discount', label: 'Discount' },
    { key: 'validUntil', label: 'Valid Until' },
    { key: 'note', label: 'Note' },
  ];
  return (
    <div className="space-y-2 pl-4 border-l-2 border-amber-200">
      {fields.map((f) => (
        <div key={f.key}>
          <label className="block text-xs text-gray-500 mb-0.5">
            {f.label}
          </label>
          <input
            type="text"
            value={(value[f.key] as string) || ''}
            onChange={(e) => onChange({ ...value, [f.key]: e.target.value })}
            className="w-full px-3 py-1.5 border rounded text-sm"
          />
        </div>
      ))}
    </div>
  );
}

function CourseTypeEditor({
  value,
  onChange,
}: {
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
}) {
  const options = (value.options as string[]) || [];
  return (
    <div className="space-y-2 pl-4 border-l-2 border-amber-200">
      <div>
        <label className="block text-xs text-gray-500 mb-0.5">Label</label>
        <input
          type="text"
          value={(value.label as string) || ''}
          onChange={(e) => onChange({ ...value, label: e.target.value })}
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-0.5">
          Select Label
        </label>
        <input
          type="text"
          value={(value.selectLabel as string) || ''}
          onChange={(e) => onChange({ ...value, selectLabel: e.target.value })}
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-0.5">Options</label>
        <ListEditor
          items={options}
          onChange={(v) => onChange({ ...value, options: v })}
        />
      </div>
    </div>
  );
}

function KeyUnitsEditor({
  value,
  onChange,
}: {
  value: { code: string; title: string; description: string }[];
  onChange: (
    v: { code: string; title: string; description: string }[],
  ) => void;
}) {
  const update = (index: number, field: string, val: string) => {
    onChange(
      value.map((item, i) =>
        i === index ? { ...item, [field]: val } : item,
      ),
    );
  };
  return (
    <div className="space-y-3">
      {value.map((unit, i) => (
        <div key={i} className="pl-4 border-l-2 border-amber-200 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-500">
              Unit {i + 1}
            </span>
            <button
              type="button"
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              className="text-xs text-red-400 hover:text-red-600"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-0.5">
                Code
              </label>
              <input
                type="text"
                value={unit.code}
                onChange={(e) => update(i, 'code', e.target.value)}
                className="w-full px-2 py-1.5 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-0.5">
                Title
              </label>
              <input
                type="text"
                value={unit.title}
                onChange={(e) => update(i, 'title', e.target.value)}
                className="w-full px-2 py-1.5 border rounded text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-0.5">
              Description
            </label>
            <textarea
              value={unit.description}
              onChange={(e) => update(i, 'description', e.target.value)}
              rows={2}
              className="w-full px-2 py-1.5 border rounded text-sm resize-y"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          onChange([...value, { code: '', title: '', description: '' }])
        }
        className="text-sm text-blue-600 hover:text-blue-800 ml-4"
      >
        + Add unit
      </button>
    </div>
  );
}

function ActivitiesEditor({
  value,
  onChange,
}: {
  value: { occasion: string; description: string }[];
  onChange: (v: { occasion: string; description: string }[]) => void;
}) {
  const update = (index: number, field: string, val: string) => {
    onChange(
      value.map((item, i) =>
        i === index ? { ...item, [field]: val } : item,
      ),
    );
  };
  return (
    <div className="space-y-3">
      {value.map((act, i) => (
        <div key={i} className="pl-4 border-l-2 border-amber-200 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-500">
              Activity {i + 1}
            </span>
            <button
              type="button"
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              className="text-xs text-red-400 hover:text-red-600"
            >
              Remove
            </button>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-0.5">
              Occasion
            </label>
            <input
              type="text"
              value={act.occasion}
              onChange={(e) => update(i, 'occasion', e.target.value)}
              className="w-full px-2 py-1.5 border rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-0.5">
              Description
            </label>
            <textarea
              value={act.description}
              onChange={(e) => update(i, 'description', e.target.value)}
              rows={2}
              className="w-full px-2 py-1.5 border rounded text-sm resize-y"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          onChange([...value, { occasion: '', description: '' }])
        }
        className="text-sm text-blue-600 hover:text-blue-800 ml-4"
      >
        + Add activity
      </button>
    </div>
  );
}

function FaqEditor({
  value,
  onChange,
}: {
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
}) {
  const question = (value.question as string) || '';
  const answerList = value.answerList as string[] | undefined;
  const answer = value.answer;
  const isArrayAnswer = Array.isArray(answer);
  const hasAnswerList = Array.isArray(answerList);

  return (
    <div className="space-y-2 pl-4 border-l-2 border-amber-200">
      <div>
        <label className="block text-xs text-gray-500 mb-0.5">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => onChange({ ...value, question: e.target.value })}
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>
      {hasAnswerList && (
        <div>
          <label className="block text-xs text-gray-500 mb-0.5">
            Answer List
          </label>
          <ListEditor
            items={answerList}
            onChange={(v) => onChange({ ...value, answerList: v })}
          />
        </div>
      )}
      {answer !== undefined && !isArrayAnswer && (
        <div>
          <label className="block text-xs text-gray-500 mb-0.5">Answer</label>
          <textarea
            value={(answer as string) || ''}
            onChange={(e) => onChange({ ...value, answer: e.target.value })}
            rows={2}
            className="w-full px-3 py-1.5 border rounded text-sm resize-y"
          />
        </div>
      )}
      {isArrayAnswer && (
        <div>
          <label className="block text-xs text-gray-500 mb-0.5">
            Answer Items
          </label>
          <ListEditor
            items={answer as string[]}
            onChange={(v) => onChange({ ...value, answer: v })}
          />
        </div>
      )}
    </div>
  );
}

/* ── Main Component ────────────────────────────────────────────── */

export default function ShortCourseEditable({
  courseId,
  locale,
  data,
}: ShortCourseEditableProps) {
  const editMode = useEditMode();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(data.title || '');
  const [description, setDescription] = useState(data.description || '');
  const [content, setContent] = useState<Record<string, unknown>>(() =>
    extractContent(data),
  );

  const updateField = useCallback((key: string, value: unknown) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
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

  const activeKeys = CONTENT_KEYS.filter(
    (key) => content[key] !== undefined,
  );

  const renderField = (key: string) => {
    const value = content[key];
    const label = FIELD_LABELS[key] || key;

    if (typeof value === 'string') {
      const isLong = LONG_TEXT_KEYS.has(key);
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          {isLong ? (
            <textarea
              value={value}
              onChange={(e) => updateField(key, e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border rounded text-sm resize-y"
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => updateField(key, e.target.value)}
              className="w-full px-3 py-2 border rounded text-sm"
            />
          )}
        </div>
      );
    }

    if (
      STRING_ARRAY_KEYS.has(key) ||
      (key === 'courseFormat' && Array.isArray(value))
    ) {
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <ListEditor
            items={(value as string[]) || []}
            onChange={(v) => updateField(key, v)}
          />
        </div>
      );
    }

    if (key === 'specialOffer' && typeof value === 'object' && value !== null) {
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <SpecialOfferEditor
            value={value as Record<string, unknown>}
            onChange={(v) => updateField(key, v)}
          />
        </div>
      );
    }

    if (key === 'courseType' && typeof value === 'object' && value !== null) {
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <CourseTypeEditor
            value={value as Record<string, unknown>}
            onChange={(v) => updateField(key, v)}
          />
        </div>
      );
    }

    if (key === 'keyUnits' && Array.isArray(value)) {
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <KeyUnitsEditor
            value={
              value as { code: string; title: string; description: string }[]
            }
            onChange={(v) => updateField(key, v)}
          />
        </div>
      );
    }

    if (key === 'activities' && Array.isArray(value)) {
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <ActivitiesEditor
            value={value as { occasion: string; description: string }[]}
            onChange={(v) => updateField(key, v)}
          />
        </div>
      );
    }

    if (FAQ_KEYS.has(key) && typeof value === 'object' && value !== null) {
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <FaqEditor
            value={value as Record<string, unknown>}
            onChange={(v) => updateField(key, v)}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container max-w-[1400px] mx-auto px-20 py-40 md:px-80">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-amber-900">
            Edit Mode: {courseId.toUpperCase()}
          </h2>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {activeKeys.length > 0 && (
            <div className="border-t border-amber-200 pt-4 mt-4 space-y-4">
              <h3 className="text-sm font-semibold text-amber-800">
                Content Fields
              </h3>
              {activeKeys.map((key) => renderField(key))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
