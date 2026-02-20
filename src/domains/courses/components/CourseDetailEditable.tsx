'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  upsertCourseDetailAction,
  deleteCourseDetailAction,
} from '@/app/admin/courses/actions';
import { toast } from 'react-toastify';
import { useEditMode } from '@/contexts/EditModeContext';
import DescriptionBlockEditor, { toItems } from './DescriptionBlockEditor';
import type { CourseDetailInfo, DescriptionItem } from '@/types/course';
import type { Locale, FaqItem } from '@/types/course';

interface CourseDetailEditableProps {
  courseId: string;
  locale: string;
  courseInfo: CourseDetailInfo;
}

function toPayload(
  items: DescriptionItem[],
): string | string[] | DescriptionItem[] {
  if (items.length === 0) return '';
  if (items.length === 1 && typeof items[0] === 'string') return items[0];
  const allStrings = items.every((v) => typeof v === 'string');
  if (allStrings) return items as string[];
  return items;
}

function toFaqItems(description: unknown): FaqItem[] {
  if (!Array.isArray(description)) return [];
  return description
    .filter(
      (v): v is FaqItem =>
        v != null &&
        typeof v === 'object' &&
        typeof (v as FaqItem).question === 'string' &&
        typeof (v as FaqItem).answer === 'string',
    )
    .map((v) => ({ question: v.question, answer: v.answer }));
}

export default function CourseDetailEditable({
  courseId,
  locale,
  courseInfo,
}: CourseDetailEditableProps) {
  const t = useTranslations('courseDetail');
  const editMode = useEditMode();
  const [saving, setSaving] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [newSection, setNewSection] = useState({
    key: '',
    title: '',
    items: ['' as DescriptionItem],
  });

  const sections = Object.entries(courseInfo).filter(
    ([key]) => !key.startsWith('courseStructure'),
  );

  const handleSave = async (
    sectionKey: string,
    title: string,
    items: DescriptionItem[],
  ) => {
    setSaving(sectionKey);
    try {
      const payload = toPayload(items);
      const descriptionPayload =
        typeof payload === 'string' ? payload : JSON.stringify(payload);
      await upsertCourseDetailAction(
        courseId,
        locale as Locale,
        sectionKey,
        title,
        descriptionPayload,
        sections.findIndex(([k]) => k === sectionKey),
      );
      toast.success(`Saved ${sectionKey}`);
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(null);
    }
  };

  const handleAdd = async () => {
    if (!newSection.key.trim()) {
      toast.error('Section key required');
      return;
    }
    setSaving('new');
    try {
      const payload = toPayload(newSection.items);
      const descriptionPayload =
        typeof payload === 'string' ? payload : JSON.stringify(payload);
      await upsertCourseDetailAction(
        courseId,
        locale as Locale,
        newSection.key.trim(),
        newSection.title,
        descriptionPayload,
        sections.length,
      );
      toast.success('Section added');
      setNewSection({ key: '', title: '', items: ['' as DescriptionItem] });
      setAdding(false);
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setSaving(null);
    }
  };

  const handleDelete = async (sectionKey: string) => {
    if (!confirm(`Delete section "${sectionKey}"?`)) return;
    try {
      await deleteCourseDetailAction(courseId, locale as Locale, sectionKey);
      toast.success('Section deleted');
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    }
  };

  const handleSaveFaq = async (
    sectionKey: string,
    title: string,
    faqItems: FaqItem[],
  ) => {
    setSaving(sectionKey);
    try {
      const descriptionPayload = JSON.stringify(faqItems);
      await upsertCourseDetailAction(
        courseId,
        locale as Locale,
        sectionKey,
        title,
        descriptionPayload,
        sections.findIndex(([k]) => k === sectionKey),
      );
      toast.success(`Saved ${sectionKey}`);
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(null);
    }
  };

  return (
    <section className="py-20 bg-amber-50/50">
      <div className="max-w-[1600px] mx-auto px-20 py-5 md:px-80">
        <h1 className="text-2xl md:text-3xl font-bold mb-10">
          {t('title')} (Editable)
        </h1>

        <div className="space-y-6">
          {sections.map(([sectionKey, sectionData]) =>
            sectionKey === 'faq' ? (
              <FaqSectionEditor
                key={sectionKey}
                sectionKey={sectionKey}
                title={sectionData.title}
                faqItems={toFaqItems(sectionData.description)}
                onSave={(title, items) =>
                  handleSaveFaq(sectionKey, title, items)
                }
                onDelete={() => handleDelete(sectionKey)}
                saving={saving === sectionKey}
              />
            ) : (
              <SectionEditor
                key={sectionKey}
                sectionKey={sectionKey}
                title={sectionData.title}
                items={(() => {
                  const i = toItems(sectionData.description);
                  return i.length ? i : [''];
                })()}
                onSave={(title, items) => handleSave(sectionKey, title, items)}
                onDelete={() => handleDelete(sectionKey)}
                saving={saving === sectionKey}
              />
            ),
          )}

          {adding ? (
            <div className="border border-amber-300 rounded p-4 bg-white space-y-2">
              <input
                type="text"
                placeholder="Section key (e.g. courseDuration)"
                value={newSection.key}
                onChange={(e) =>
                  setNewSection((s) => ({ ...s, key: e.target.value }))
                }
                className="w-full px-2 py-1 border rounded"
              />
              <input
                type="text"
                placeholder="Title"
                value={newSection.title}
                onChange={(e) =>
                  setNewSection((s) => ({ ...s, title: e.target.value }))
                }
                className="w-full px-2 py-1 border rounded"
              />
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Description
                </label>
                <DescriptionBlockEditor
                  items={newSection.items}
                  onChange={(items) => setNewSection((s) => ({ ...s, items }))}
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={saving === 'new'}
                  className="px-3 py-1 bg-amber-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setAdding(false)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setAdding(true)}
              className="px-4 py-2 border border-dashed border-blue-400 rounded text-blue-700 bg-blue-50 hover:bg-blue-100"
            >
              + Add Section
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionEditor({
  sectionKey,
  title,
  items,
  onSave,
  onDelete,
  saving,
}: {
  sectionKey: string;
  title: string;
  items: DescriptionItem[];
  onSave: (title: string, items: DescriptionItem[]) => void;
  onDelete: () => void;
  saving: boolean;
}) {
  const [editTitle, setEditTitle] = useState(title);
  const [editItems, setEditItems] = useState<DescriptionItem[]>(items);

  return (
    <div className="border border-amber-200 rounded p-4 bg-white">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-mono text-gray-500">{sectionKey}</span>
        <button
          type="button"
          onClick={onDelete}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
      <div className="space-y-2">
        <label className="block text-sm text-gray-600">Title</label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Description
          </label>
          <p className="text-xs text-gray-500 mb-1">
            Add and edit text, links, and tables as blocks
          </p>
          <DescriptionBlockEditor
            items={editItems}
            onChange={setEditItems}
            disabled={saving}
          />
        </div>
        <button
          type="button"
          onClick={() => onSave(editTitle, editItems)}
          disabled={saving}
          className="px-3 py-1 bg-amber-500 text-white rounded text-sm"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}

function FaqSectionEditor({
  sectionKey,
  title,
  faqItems,
  onSave,
  onDelete,
  saving,
}: {
  sectionKey: string;
  title: string;
  faqItems: FaqItem[];
  onSave: (title: string, items: FaqItem[]) => void;
  onDelete: () => void;
  saving: boolean;
}) {
  const [editTitle, setEditTitle] = useState(title);
  const [editItems, setEditItems] = useState<FaqItem[]>(
    faqItems.length > 0 ? faqItems : [{ question: '', answer: '' }],
  );

  const updateItem = (
    index: number,
    field: 'question' | 'answer',
    value: string,
  ) => {
    const next = [...editItems];
    next[index] = { ...next[index], [field]: value };
    setEditItems(next);
  };

  const addItem = () => {
    setEditItems([...editItems, { question: '', answer: '' }]);
  };

  const removeItem = (index: number) => {
    if (editItems.length <= 1) return;
    setEditItems(editItems.filter((_, i) => i !== index));
  };

  return (
    <div className="border border-amber-200 rounded p-4 bg-white">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-mono text-gray-500">{sectionKey}</span>
        <button
          type="button"
          onClick={onDelete}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
      <div className="space-y-2">
        <label className="block text-sm text-gray-600">Title</label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
        <div>
          <label className="block text-sm text-gray-600 mb-1">FAQ items</label>
          <p className="text-xs text-gray-500 mb-1">
            Question and answer pairs
          </p>
          <div className="space-y-3">
            {editItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded p-3 bg-gray-50 space-y-2"
              >
                <input
                  type="text"
                  placeholder="Question"
                  value={item.question}
                  onChange={(e) =>
                    updateItem(index, 'question', e.target.value)
                  }
                  className="w-full px-2 py-1 border rounded text-sm"
                />
                <textarea
                  placeholder="Answer"
                  value={item.answer}
                  onChange={(e) => updateItem(index, 'answer', e.target.value)}
                  className="w-full px-2 py-1 border rounded text-sm min-h-[60px]"
                  rows={2}
                />
                {editItems.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:underline text-xs"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addItem}
              className="px-2 py-1 text-sm border border-dashed border-amber-400 rounded text-amber-700"
            >
              + Add FAQ item
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onSave(editTitle, editItems)}
          disabled={saving}
          className="px-3 py-1 bg-amber-500 text-white rounded text-sm"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}
