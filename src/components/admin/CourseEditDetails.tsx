'use client';

import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import {
  upsertCourseDetailAction,
  deleteCourseDetailAction,
} from '@/app/admin/courses/actions';
import DescriptionBlockEditor, {
  toItems,
} from '@/domains/courses/components/DescriptionBlockEditor';
import type { DbCourseDetail, DescriptionItem, FaqItem } from '@/types/course';
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

function toPayload(items: DescriptionItem[]): string | string[] | DescriptionItem[] {
  if (items.length === 0) return '';
  if (items.length === 1 && typeof items[0] === 'string') return items[0];
  const allStrings = items.every((v) => typeof v === 'string');
  if (allStrings) return items as string[];
  return items;
}

function isFaqArray(val: unknown): val is FaqItem[] {
  if (!Array.isArray(val) || val.length === 0) return false;
  return val.every(
    (v) =>
      v != null &&
      typeof v === 'object' &&
      typeof (v as FaqItem).question === 'string' &&
      typeof (v as FaqItem).answer === 'string',
  );
}

interface CourseEditDetailsProps {
  courseId: string;
  details: DbCourseDetail[];
}

export default function CourseEditDetails({
  courseId,
  details,
}: CourseEditDetailsProps) {
  const [activeLocale, setActiveLocale] = useState<Locale>('en');
  const [adding, setAdding] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);
  const [newSection, setNewSection] = useState({
    sectionKey: '',
    title: '',
    contentType: 'blocks' as 'blocks' | 'faq',
    items: ['' as DescriptionItem],
    faqItems: [{ question: '', answer: '' }] as FaqItem[],
  });

  const countByLocale = useMemo(() => {
    const map: Record<string, number> = {};
    for (const d of details) {
      map[d.locale] = (map[d.locale] || 0) + 1;
    }
    return map;
  }, [details]);

  const filteredDetails = useMemo(
    () => details.filter((d) => d.locale === activeLocale),
    [details, activeLocale],
  );

  const handleSave = async (
    sectionKey: string,
    title: string,
    items: DescriptionItem[],
    displayOrder: number,
  ) => {
    setSaving(sectionKey);
    try {
      const payload = toPayload(items);
      const descriptionJson =
        typeof payload === 'string' ? payload : JSON.stringify(payload);
      await upsertCourseDetailAction(
        courseId,
        activeLocale,
        sectionKey,
        title,
        descriptionJson,
        displayOrder,
      );
      toast.success('Section saved');
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setSaving(null);
    }
  };

  const handleSaveFaq = async (
    sectionKey: string,
    title: string,
    faqItems: FaqItem[],
    displayOrder: number,
  ) => {
    setSaving(sectionKey);
    try {
      await upsertCourseDetailAction(
        courseId,
        activeLocale,
        sectionKey,
        title,
        JSON.stringify(faqItems),
        displayOrder,
      );
      toast.success('Section saved');
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setSaving(null);
    }
  };

  const handleAddNew = async () => {
    if (!newSection.sectionKey.trim()) {
      toast.error('Section Key is required');
      return;
    }
    setSaving('new');
    try {
      let descriptionJson: string;
      if (newSection.contentType === 'faq') {
        descriptionJson = JSON.stringify(newSection.faqItems);
      } else {
        const payload = toPayload(newSection.items);
        descriptionJson =
          typeof payload === 'string' ? payload : JSON.stringify(payload);
      }
      await upsertCourseDetailAction(
        courseId,
        activeLocale,
        newSection.sectionKey.trim(),
        newSection.title,
        descriptionJson,
        filteredDetails.length,
      );
      toast.success('Section added');
      setAdding(false);
      setNewSection({
        sectionKey: '',
        title: '',
        contentType: 'blocks',
        items: ['' as DescriptionItem],
        faqItems: [{ question: '', answer: '' }],
      });
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setSaving(null);
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
      {/* Locale Tabs */}
      <div className="flex gap-1 border-b overflow-x-auto">
        {LOCALES.map((l) => {
          const count = countByLocale[l.code] || 0;
          const isActive = activeLocale === l.code;
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setActiveLocale(l.code);
                setAdding(false);
              }}
              className={`relative px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                isActive
                  ? 'border-b-2 border-primary-bk font-medium text-gray-900'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {l.label}
              {count > 0 && (
                <span
                  className={`ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs rounded-full ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Sections for active locale */}
      {filteredDetails.length === 0 && !adding && (
        <p className="text-gray-500 text-sm py-2">
          No sections for{' '}
          <span className="font-medium">
            {LOCALES.find((l) => l.code === activeLocale)?.label}
          </span>
          . Click below to add one.
        </p>
      )}

      {filteredDetails.map((d, idx) =>
        isFaqArray(d.description) ? (
          <FaqSectionCard
            key={d.id}
            detail={d}
            displayOrder={idx}
            saving={saving === d.section_key}
            onSave={(title, faqItems) =>
              handleSaveFaq(d.section_key, title, faqItems, idx)
            }
            onDelete={() => handleDelete(d.locale, d.section_key)}
          />
        ) : (
          <SectionCard
            key={d.id}
            detail={d}
            displayOrder={idx}
            saving={saving === d.section_key}
            onSave={(title, items) =>
              handleSave(d.section_key, title, items, idx)
            }
            onDelete={() => handleDelete(d.locale, d.section_key)}
          />
        ),
      )}

      {/* Add Section Form */}
      {adding ? (
        <div className="border rounded p-4 space-y-3 bg-gray-50">
          <h4 className="text-sm font-medium text-gray-700">
            Add section —{' '}
            {LOCALES.find((l) => l.code === activeLocale)?.label}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Section Key
              </label>
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
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Content Type
              </label>
              <select
                value={newSection.contentType}
                onChange={(e) =>
                  setNewSection((s) => ({
                    ...s,
                    contentType: e.target.value as 'blocks' | 'faq',
                  }))
                }
                className="w-full px-2 py-1 border rounded"
              >
                <option value="blocks">Text / Link / Table</option>
                <option value="faq">FAQ (Q&A)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Title</label>
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
            <label className="block text-sm text-gray-600 mb-1">
              Content
            </label>
            {newSection.contentType === 'faq' ? (
              <FaqEditor
                items={newSection.faqItems}
                onChange={(faqItems) =>
                  setNewSection((s) => ({ ...s, faqItems }))
                }
              />
            ) : (
              <DescriptionBlockEditor
                items={newSection.items}
                onChange={(items) => setNewSection((s) => ({ ...s, items }))}
              />
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleAddNew}
              disabled={saving === 'new'}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:opacity-50"
            >
              {saving === 'new' ? 'Saving...' : 'Save'}
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
          className="px-4 py-2 border border-dashed rounded text-gray-600 hover:bg-gray-50 w-full"
        >
          + Add Section
        </button>
      )}
    </div>
  );
}

/* ───── Section Card (Text / Link / Table blocks) ───── */

function SectionCard({
  detail,
  displayOrder,
  saving,
  onSave,
  onDelete,
}: {
  detail: DbCourseDetail;
  displayOrder: number;
  saving: boolean;
  onSave: (title: string, items: DescriptionItem[]) => void;
  onDelete: () => void;
}) {
  const initial = toItems(detail.description);
  const [editTitle, setEditTitle] = useState(detail.title);
  const [editItems, setEditItems] = useState<DescriptionItem[]>(
    initial.length > 0 ? initial : [''],
  );
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded bg-white overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer select-none"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs font-mono text-gray-400 shrink-0">
            {detail.section_key}
          </span>
          <span className="font-medium text-sm truncate">{detail.title}</span>
          <span className="text-xs text-gray-400">
            ({Array.isArray(detail.description) ? `${(detail.description as unknown[]).length} items` : 'text'})
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
          <span className="text-gray-400 text-sm">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {expanded && (
        <div className="p-4 space-y-3 border-t">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Title</label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              disabled={saving}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Content
            </label>
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
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      )}
    </div>
  );
}

/* ───── FAQ Section Card ───── */

function FaqSectionCard({
  detail,
  displayOrder,
  saving,
  onSave,
  onDelete,
}: {
  detail: DbCourseDetail;
  displayOrder: number;
  saving: boolean;
  onSave: (title: string, faqItems: FaqItem[]) => void;
  onDelete: () => void;
}) {
  const initial = isFaqArray(detail.description) ? detail.description : [];
  const [editTitle, setEditTitle] = useState(detail.title);
  const [editItems, setEditItems] = useState<FaqItem[]>(
    initial.length > 0 ? initial : [{ question: '', answer: '' }],
  );
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded bg-white overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer select-none"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs font-mono text-gray-400 shrink-0">
            {detail.section_key}
          </span>
          <span className="font-medium text-sm truncate">{detail.title}</span>
          <span className="text-xs text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">
            FAQ · {editItems.length} items
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
          <span className="text-gray-400 text-sm">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {expanded && (
        <div className="p-4 space-y-3 border-t">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Title</label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              disabled={saving}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              FAQ Items
            </label>
            <FaqEditor
              items={editItems}
              onChange={setEditItems}
              disabled={saving}
            />
          </div>
          <button
            type="button"
            onClick={() => onSave(editTitle, editItems)}
            disabled={saving}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      )}
    </div>
  );
}

/* ───── FAQ Editor (reusable) ───── */

function FaqEditor({
  items,
  onChange,
  disabled = false,
}: {
  items: FaqItem[];
  onChange: (items: FaqItem[]) => void;
  disabled?: boolean;
}) {
  const updateItem = (
    index: number,
    field: 'question' | 'answer',
    value: string,
  ) => {
    const next = [...items];
    next[index] = { ...next[index], [field]: value };
    onChange(next);
  };

  const addItem = () => {
    onChange([...items, { question: '', answer: '' }]);
  };

  const removeItem = (index: number) => {
    if (items.length <= 1) return;
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded p-3 bg-white space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">
              Q&A #{index + 1}
            </span>
            {!disabled && items.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-500 hover:underline text-xs"
              >
                Remove
              </button>
            )}
          </div>
          <input
            type="text"
            placeholder="Question"
            value={item.question}
            onChange={(e) => updateItem(index, 'question', e.target.value)}
            className="w-full px-2 py-1 border rounded text-sm"
            disabled={disabled}
          />
          <textarea
            placeholder="Answer"
            value={item.answer}
            onChange={(e) => updateItem(index, 'answer', e.target.value)}
            className="w-full px-2 py-1 border rounded text-sm min-h-[60px]"
            rows={2}
            disabled={disabled}
          />
        </div>
      ))}
      {!disabled && (
        <button
          type="button"
          onClick={addItem}
          className="px-3 py-1.5 text-sm border border-dashed border-gray-300 rounded text-gray-600 hover:bg-gray-50"
        >
          + Add Q&A
        </button>
      )}
    </div>
  );
}
