'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { upsertCourseInfoAction } from '@/app/admin/courses/actions';
import type { DbCourseInformation } from '@/types/course';
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

interface CourseEditInformationProps {
  courseId: string;
  information: DbCourseInformation[];
}

export default function CourseEditInformation({
  courseId,
  information,
}: CourseEditInformationProps) {
  const [activeLocale, setActiveLocale] = useState<Locale>('en');
  const [saving, setSaving] = useState(false);

  const infoByLocale = information.reduce((acc, i) => {
    acc[i.locale] = i;
    return acc;
  }, {} as Record<Locale, DbCourseInformation>);

  const buildForm = (locale: Locale) => {
    const info = infoByLocale[locale];
    return {
      course_code: info?.course_code || '',
      cricos_code: info?.cricos_code || '',
      description: info?.description || '',
      duration: info?.duration || '',
      entry_requirement: info?.entry_requirement
        ? JSON.stringify(info.entry_requirement, null, 2)
        : '',
      delivery_mode: info?.delivery_mode
        ? JSON.stringify(info.delivery_mode, null, 2)
        : '',
      delivery_site: info?.delivery_site
        ? JSON.stringify(info.delivery_site, null, 2)
        : '',
      additional_info: info?.additional_info
        ? JSON.stringify(info.additional_info, null, 2)
        : '',
      starting_dates: info?.starting_dates
        ? JSON.stringify(info.starting_dates, null, 2)
        : '',
      tables: info?.tables ? JSON.stringify(info.tables, null, 2) : '',
      partners: info?.partners ? JSON.stringify(info.partners, null, 2) : '',
    };
  };

  const [form, setForm] = useState(() => buildForm('en'));

  const switchLocale = (locale: Locale) => {
    setActiveLocale(locale);
    setForm(buildForm(locale));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('course_code', form.course_code);
      formData.append('cricos_code', form.cricos_code);
      formData.append('description', form.description);
      formData.append('duration', form.duration);
      formData.append('entry_requirement', form.entry_requirement || '');
      formData.append('delivery_mode', form.delivery_mode || '');
      formData.append('delivery_site', form.delivery_site || '');
      formData.append('additional_info', form.additional_info || '');
      formData.append('starting_dates', form.starting_dates || '');
      formData.append('tables', form.tables || '');
      formData.append('partners', form.partners || '');

      await upsertCourseInfoAction(courseId, activeLocale, formData);
      toast.success('Information saved');
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Locale Tabs */}
      <div className="flex gap-1 border-b overflow-x-auto">
        {LOCALES.map((loc) => {
          const hasData = !!infoByLocale[loc.code];
          const isActive = activeLocale === loc.code;
          return (
            <button
              key={loc.code}
              type="button"
              onClick={() => switchLocale(loc.code)}
              className={`relative px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                isActive
                  ? 'border-b-2 border-primary-bk font-medium text-gray-900'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {loc.label}
              {hasData && (
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

      {/* Form for active locale */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm text-gray-600">Course Code</label>
            <input
              type="text"
              value={form.course_code}
              onChange={(e) => setForm((f) => ({ ...f, course_code: e.target.value }))}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">CRICOS Code</label>
            <input
              type="text"
              value={form.cricos_code}
              onChange={(e) => setForm((f) => ({ ...f, cricos_code: e.target.value }))}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={4}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Duration</label>
          <input
            type="text"
            value={form.duration}
            onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Entry Requirement (JSON)</label>
          <textarea
            value={form.entry_requirement}
            onChange={(e) => setForm((f) => ({ ...f, entry_requirement: e.target.value }))}
            rows={3}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Delivery Mode (JSON)</label>
          <textarea
            value={form.delivery_mode}
            onChange={(e) => setForm((f) => ({ ...f, delivery_mode: e.target.value }))}
            rows={2}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Delivery Site (JSON)</label>
          <textarea
            value={form.delivery_site}
            onChange={(e) => setForm((f) => ({ ...f, delivery_site: e.target.value }))}
            rows={4}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Additional Info (JSON)</label>
          <textarea
            value={form.additional_info}
            onChange={(e) => setForm((f) => ({ ...f, additional_info: e.target.value }))}
            rows={2}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Starting Dates (JSON)</label>
          <textarea
            value={form.starting_dates}
            onChange={(e) => setForm((f) => ({ ...f, starting_dates: e.target.value }))}
            rows={6}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Tables (JSON)</label>
          <textarea
            value={form.tables}
            onChange={(e) => setForm((f) => ({ ...f, tables: e.target.value }))}
            rows={4}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Partners (JSON)</label>
          <textarea
            value={form.partners}
            onChange={(e) => setForm((f) => ({ ...f, partners: e.target.value }))}
            rows={4}
            className="w-full px-2 py-1 border rounded font-mono text-sm"
          />
        </div>
        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
