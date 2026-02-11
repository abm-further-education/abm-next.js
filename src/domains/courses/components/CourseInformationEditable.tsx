'use client';

import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { useTranslations } from 'next-intl';
import { Calendar, Info } from 'lucide-react';
import { upsertCourseInfoAction } from '@/app/admin/courses/actions';
import { toast } from 'react-toastify';
import { useEditMode } from '@/contexts/EditModeContext';
import TablesEditor, { type SimpleTable } from './TablesEditor';
import type { CourseInformationInfo } from './CourseInformation';
import type { Locale } from '@/types/course';

interface CourseInformationEditableProps {
  courseId: string;
  locale: string;
  courseInfo: CourseInformationInfo;
  hideButtons?: boolean;
}

// Parse plain text back to object for saving
function parseForSave(
  text: string,
  field: 'entryRequirement' | 'deliveryMode' | 'deliverySite' | 'additionalInfo' | 'startingDates' | 'tables' | 'partners'
): unknown {
  const t = text.trim();
  if (!t) return null;

  if (field === 'entryRequirement') {
    if (t.includes('\n')) return t.split('\n').map((s) => s.trim()).filter(Boolean);
    return t;
  }

  if (field === 'deliveryMode') {
    const lines = t.split('\n');
    return {
      title: lines[0]?.trim() || 'Delivery mode:',
      mode: lines[1]?.trim() || lines[0]?.trim() || '',
    };
  }

  if (field === 'deliverySite') {
    const lines = t.split('\n').filter(Boolean);
    const title = lines[0]?.startsWith('•') ? 'Delivery site:' : (lines[0] || 'Delivery site:');
    const locLines = lines[0]?.startsWith('•') ? lines : lines.slice(1);
    const locations = locLines.map((line: string) => {
      const s = String(line).replace(/^[•\s-]+/, '');
      const match = s.match(/^(.+?):\s*(.+)$/);
      return match ? { type: match[1].trim(), address: match[2].trim() } : { type: s, address: '' };
    }).filter((l: { type: string }) => l.type);
    return { title, locations };
  }

  if (field === 'additionalInfo') {
    const lines = t.split('\n');
    return {
      description: lines[0]?.trim() || '',
      linkText: lines[1]?.trim() || '',
      linkUrl: lines[2]?.trim() || '',
    };
  }

  if (field === 'partners') {
    return t.split('\n').filter(Boolean).map((line) => {
      const idx = line.indexOf(':');
      if (idx > 0) return { name: line.slice(0, idx).trim(), desc: line.slice(idx + 1).trim() };
      return { name: line, desc: '' };
    });
  }

  if (field === 'startingDates') {
    if (t.startsWith('[')) {
      try {
        return JSON.parse(t);
      } catch {
        return null;
      }
    }
    const blocks: { title?: string; dates?: string[] }[] = [];
    const groups = t.split(/\n\s*\n/).filter(Boolean);
    for (const g of groups) {
      const lines = g.split('\n').filter(Boolean);
      const title = lines[0];
      const datesStr = lines.slice(1).join(', ') || lines[0];
      const dates = datesStr.includes(',') ? datesStr.split(',').map((d) => d.trim()) : [datesStr];
      blocks.push({ title, dates });
    }
    return blocks.length ? blocks : null;
  }

  if (field === 'tables') {
    if (t.startsWith('[') || t.startsWith('{')) {
      try {
        return JSON.parse(t);
      } catch {
        return null;
      }
    }
    return null;
  }

  return t;
}

function toEditableText(val: unknown, field: string): string {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  if (Array.isArray(val)) {
    if (field === 'entryRequirement' && val.every((v) => typeof v === 'string')) {
      return val.join('\n');
    }
    if (field === 'partners' && val.every((v) => v && typeof v === 'object' && 'name' in v)) {
      return val.map((v: { name?: string; desc?: string }) => `${v.name}: ${v.desc || ''}`).join('\n');
    }
    if (field === 'startingDates' && val.every((v) => v && typeof v === 'object')) {
      return val
        .map((b: { title?: string; dates?: string[] }) => {
          const title = b.title || '';
          const dates = Array.isArray(b.dates) ? b.dates.join(', ') : '';
          return [title, dates].filter(Boolean).join('\n');
        })
        .join('\n\n');
    }
    return JSON.stringify(val, null, 2);
  }
  if (typeof val === 'object') {
    const o = val as Record<string, unknown>;
    if (field === 'deliveryMode' && o.title != null && o.mode != null) {
      return `${o.title}\n${o.mode}`;
    }
    if (field === 'deliverySite' && o.locations) {
      const locs = o.locations as Array<{ type: string; address: string }>;
      const title = (o.title as string) || '';
      return [title, ...locs.map((l) => `• ${l.type}: ${l.address}`)].join('\n').trim();
    }
    if (field === 'additionalInfo') {
      const a = o as { description?: string; linkText?: string; linkUrl?: string };
      return [a.description || '', a.linkText || '', a.linkUrl || ''].join('\n');
    }
    return JSON.stringify(val, null, 2);
  }
  return String(val);
}

export default function CourseInformationEditable({
  courseId,
  locale,
  courseInfo,
  hideButtons = false,
}: CourseInformationEditableProps) {
  const t = useTranslations('courseInformation');
  const editMode = useEditMode();
  const [saving, setSaving] = useState(false);
  const [description, setDescription] = useState(courseInfo.description || '');
  const [courseCode, setCourseCode] = useState(courseInfo.courseCode || '');
  const [cricosCode, setCricosCode] = useState(courseInfo.cricosCode || '');
  const [duration, setDuration] = useState(courseInfo.duration || '');
  const [entryRequirement, setEntryRequirement] = useState(
    toEditableText(courseInfo.entryRequirement, 'entryRequirement')
  );
  const [deliveryMode, setDeliveryMode] = useState(
    toEditableText(courseInfo.deliveryMode, 'deliveryMode')
  );
  const [deliverySite, setDeliverySite] = useState(
    toEditableText(courseInfo.deliverySite, 'deliverySite')
  );
  const [additionalInfo, setAdditionalInfo] = useState(
    toEditableText(courseInfo.additionalInfo, 'additionalInfo')
  );
  const [startingDates, setStartingDates] = useState(
    toEditableText(courseInfo.startingDates, 'startingDates')
  );
  const [tables, setTables] = useState<SimpleTable[]>(() => {
    const t = courseInfo.tables;
    if (!t || !Array.isArray(t)) return [];
    return t.map((tb) => ({
      headers: Array.isArray(tb.headers) ? tb.headers : ['', ''],
      rows: Array.isArray(tb.rows) ? tb.rows : [['', '']],
    }));
  });
  const [partners, setPartners] = useState(toEditableText(courseInfo.partners, 'partners'));

  const handleSave = async () => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('course_code', courseCode);
      formData.append('cricos_code', cricosCode);
      formData.append('description', description);
      formData.append('duration', duration);
      formData.append('entry_requirement', JSON.stringify(parseForSave(entryRequirement, 'entryRequirement')));
      formData.append('delivery_mode', JSON.stringify(parseForSave(deliveryMode, 'deliveryMode')));
      formData.append('delivery_site', JSON.stringify(parseForSave(deliverySite, 'deliverySite')));
      formData.append('additional_info', JSON.stringify(parseForSave(additionalInfo, 'additionalInfo')));
      formData.append('starting_dates', JSON.stringify(parseForSave(startingDates, 'startingDates')));
      formData.append('tables', JSON.stringify(tables.length ? tables : null));
      formData.append('partners', JSON.stringify(parseForSave(partners, 'partners')));
      await upsertCourseInfoAction(courseId, locale as Locale, formData);
      toast.success('Saved');
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Course Information'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-60 text-base">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-10">{t('title')}</h1>
          <label className="block text-sm text-gray-600 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={8}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="border p-20 border-amber-200 bg-amber-50/30 space-y-4">
          <h2 className="text-xl font-bold mb-10">{t('overview')} (Editable)</h2>

          <div className="flex items-center gap-5">
            <Info className="w-22 h-22 text-primary" />
            <div className="flex-1">
              <label className="block text-sm text-gray-600">CRICOS Code</label>
              <input
                type="text"
                value={cricosCode}
                onChange={(e) => setCricosCode(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Calendar className="w-22 h-22 text-primary" />
            <div className="flex-1">
              <label className="block text-sm text-gray-600">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Course Code</label>
            <input
              type="text"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Entry Requirement</label>
            <p className="text-xs text-gray-500 mb-1">One line or multiple lines (each line as a bullet)</p>
            <textarea
              value={entryRequirement}
              onChange={(e) => setEntryRequirement(e.target.value)}
              rows={4}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Delivery Mode</label>
            <p className="text-xs text-gray-500 mb-1">Line 1: Title, Line 2: Mode (e.g. Face to Face)</p>
            <textarea
              value={deliveryMode}
              onChange={(e) => setDeliveryMode(e.target.value)}
              rows={2}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Delivery Site</label>
            <p className="text-xs text-gray-500 mb-1">Line 1: Title, then: • Location name: Address</p>
            <textarea
              value={deliverySite}
              onChange={(e) => setDeliverySite(e.target.value)}
              rows={5}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Additional Info</label>
            <p className="text-xs text-gray-500 mb-1">Line 1: Description, Line 2: Link text, Line 3: URL</p>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={3}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Starting Dates</label>
            <p className="text-xs text-gray-500 mb-1">Each block: Title line + dates (comma-separated). Separate blocks with blank lines</p>
            <textarea
              value={startingDates}
              onChange={(e) => setStartingDates(e.target.value)}
              rows={6}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Tables</label>
            <p className="text-xs text-gray-500 mb-1">Add tables and edit cells directly</p>
            <TablesEditor tables={tables} onChange={setTables} />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Partners</label>
            <p className="text-xs text-gray-500 mb-1">One per line: Name: Description</p>
            <textarea
              value={partners}
              onChange={(e) => setPartners(e.target.value)}
              rows={4}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          {!hideButtons && (
            <Button
              className="w-1/2 bg-primary hover:bg-primary-bk text-white mt-20"
              onClick={() => {
                window.open(
                  'https://form.jotform.com/ABMonlineforms/abm-further-education-application-f',
                  '_blank'
                );
              }}
            >
              Enrol Now
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
