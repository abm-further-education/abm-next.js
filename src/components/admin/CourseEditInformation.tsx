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

interface LocationItem {
  type: string;
  address: string;
}

interface StartingDateGroup {
  title: string;
  dates: string[];
}

interface TableItem {
  headers: string[];
  rows: string[][];
}

interface PartnerItem {
  name: string;
  desc: string;
}

interface FormState {
  course_code: string;
  cricos_code: string;
  description: string;
  duration: string;
  entry_requirements: string[];
  delivery_mode_title: string;
  delivery_mode_mode: string;
  delivery_site_title: string;
  delivery_site_locations: LocationItem[];
  additional_info_description: string;
  additional_info_linkText: string;
  additional_info_linkUrl: string;
  starting_dates: StartingDateGroup[];
  tables: TableItem[];
  partners: PartnerItem[];
}

function buildForm(info?: DbCourseInformation): FormState {
  const entryReq = info?.entry_requirement;
  const reqs = Array.isArray(entryReq)
    ? entryReq
    : typeof entryReq === 'string' && entryReq
      ? [entryReq]
      : [];

  return {
    course_code: info?.course_code || '',
    cricos_code: info?.cricos_code || '',
    description: info?.description || '',
    duration: info?.duration || '',
    entry_requirements: reqs,
    delivery_mode_title: info?.delivery_mode?.title || '',
    delivery_mode_mode: info?.delivery_mode?.mode || '',
    delivery_site_title: info?.delivery_site?.title || '',
    delivery_site_locations: info?.delivery_site?.locations?.length
      ? info.delivery_site.locations.map((l) => ({ ...l }))
      : [],
    additional_info_description: info?.additional_info?.description || '',
    additional_info_linkText: info?.additional_info?.linkText || '',
    additional_info_linkUrl: info?.additional_info?.linkUrl || '',
    starting_dates: info?.starting_dates?.length
      ? info.starting_dates.map((sd) => ({
          title: sd.title || '',
          dates: sd.dates?.length ? [...sd.dates] : [],
        }))
      : [],
    tables: info?.tables?.length
      ? info.tables.map((t) => ({
          headers: [...t.headers],
          rows: t.rows.map((r) => [...r]),
        }))
      : [],
    partners: info?.partners?.length
      ? info.partners.map((p) => ({ ...p }))
      : [],
  };
}

const btnAdd = 'text-sm text-blue-600 hover:text-blue-800';
const btnRemove = 'text-sm text-red-500 hover:text-red-700';
const inputCls = 'w-full px-2 py-1 border rounded text-sm';
const labelCls = 'block text-sm font-medium text-gray-600 mb-1';
const sectionCls = 'border rounded-lg p-4 space-y-3 bg-gray-50';

function StringListEditor({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className={labelCls}>{label}</label>
        <button
          type="button"
          onClick={() => onChange([...items, ''])}
          className={btnAdd}
        >
          + Add
        </button>
      </div>
      {items.length === 0 && (
        <p className="text-sm text-gray-400 italic">No items</p>
      )}
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 mb-1">
          <input
            type="text"
            value={item}
            onChange={(e) => {
              const next = [...items];
              next[i] = e.target.value;
              onChange(next);
            }}
            placeholder={placeholder}
            className={inputCls}
          />
          <button
            type="button"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className={btnRemove}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

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

  const infoByLocale = information.reduce(
    (acc, i) => {
      acc[i.locale] = i;
      return acc;
    },
    {} as Record<Locale, DbCourseInformation>,
  );

  const [form, setForm] = useState<FormState>(() => buildForm(infoByLocale['en']));

  const switchLocale = (locale: Locale) => {
    setActiveLocale(locale);
    setForm(buildForm(infoByLocale[locale]));
  };

  const updateForm = (patch: Partial<FormState>) => {
    setForm((prev) => ({ ...prev, ...patch }));
  };

  const addLocation = () => {
    updateForm({
      delivery_site_locations: [
        ...form.delivery_site_locations,
        { type: '', address: '' },
      ],
    });
  };

  const removeLocation = (idx: number) => {
    updateForm({
      delivery_site_locations: form.delivery_site_locations.filter(
        (_, i) => i !== idx,
      ),
    });
  };

  const updateLocation = (idx: number, patch: Partial<LocationItem>) => {
    const next = [...form.delivery_site_locations];
    next[idx] = { ...next[idx], ...patch };
    updateForm({ delivery_site_locations: next });
  };

  const addStartingDateGroup = () => {
    updateForm({
      starting_dates: [...form.starting_dates, { title: '', dates: [''] }],
    });
  };

  const removeStartingDateGroup = (idx: number) => {
    updateForm({
      starting_dates: form.starting_dates.filter((_, i) => i !== idx),
    });
  };

  const updateStartingDateGroup = (
    idx: number,
    patch: Partial<StartingDateGroup>,
  ) => {
    const next = [...form.starting_dates];
    next[idx] = { ...next[idx], ...patch };
    updateForm({ starting_dates: next });
  };

  const addTable = () => {
    updateForm({
      tables: [...form.tables, { headers: ['Column 1'], rows: [['']] }],
    });
  };

  const removeTable = (idx: number) => {
    updateForm({ tables: form.tables.filter((_, i) => i !== idx) });
  };

  const updateTableHeader = (tIdx: number, hIdx: number, val: string) => {
    const next = [...form.tables];
    const headers = [...next[tIdx].headers];
    headers[hIdx] = val;
    next[tIdx] = { ...next[tIdx], headers };
    updateForm({ tables: next });
  };

  const addTableColumn = (tIdx: number) => {
    const next = [...form.tables];
    const t = next[tIdx];
    next[tIdx] = {
      headers: [...t.headers, ''],
      rows: t.rows.map((r) => [...r, '']),
    };
    updateForm({ tables: next });
  };

  const removeTableColumn = (tIdx: number, cIdx: number) => {
    const next = [...form.tables];
    const t = next[tIdx];
    if (t.headers.length <= 1) return;
    next[tIdx] = {
      headers: t.headers.filter((_, i) => i !== cIdx),
      rows: t.rows.map((r) => r.filter((_, i) => i !== cIdx)),
    };
    updateForm({ tables: next });
  };

  const addTableRow = (tIdx: number) => {
    const next = [...form.tables];
    const t = next[tIdx];
    next[tIdx] = { ...t, rows: [...t.rows, t.headers.map(() => '')] };
    updateForm({ tables: next });
  };

  const removeTableRow = (tIdx: number, rIdx: number) => {
    const next = [...form.tables];
    next[tIdx] = {
      ...next[tIdx],
      rows: next[tIdx].rows.filter((_, i) => i !== rIdx),
    };
    updateForm({ tables: next });
  };

  const updateTableCell = (
    tIdx: number,
    rIdx: number,
    cIdx: number,
    val: string,
  ) => {
    const next = [...form.tables];
    const rows = next[tIdx].rows.map((r) => [...r]);
    rows[rIdx][cIdx] = val;
    next[tIdx] = { ...next[tIdx], rows };
    updateForm({ tables: next });
  };

  const addPartner = () => {
    updateForm({ partners: [...form.partners, { name: '', desc: '' }] });
  };

  const removePartner = (idx: number) => {
    updateForm({ partners: form.partners.filter((_, i) => i !== idx) });
  };

  const updatePartner = (idx: number, patch: Partial<PartnerItem>) => {
    const next = [...form.partners];
    next[idx] = { ...next[idx], ...patch };
    updateForm({ partners: next });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('course_code', form.course_code);
      formData.append('cricos_code', form.cricos_code);
      formData.append('description', form.description);
      formData.append('duration', form.duration);

      const entryReqs = form.entry_requirements.filter((r) => r.trim());
      formData.append(
        'entry_requirement',
        entryReqs.length > 0 ? JSON.stringify(entryReqs) : '',
      );

      if (form.delivery_mode_title || form.delivery_mode_mode) {
        formData.append(
          'delivery_mode',
          JSON.stringify({
            title: form.delivery_mode_title,
            mode: form.delivery_mode_mode,
          }),
        );
      } else {
        formData.append('delivery_mode', '');
      }

      const locs = form.delivery_site_locations.filter(
        (l) => l.type.trim() || l.address.trim(),
      );
      if (form.delivery_site_title || locs.length > 0) {
        formData.append(
          'delivery_site',
          JSON.stringify({
            title: form.delivery_site_title,
            locations: locs,
          }),
        );
      } else {
        formData.append('delivery_site', '');
      }

      if (
        form.additional_info_description ||
        form.additional_info_linkText ||
        form.additional_info_linkUrl
      ) {
        const ai: Record<string, string> = {};
        if (form.additional_info_description)
          ai.description = form.additional_info_description;
        if (form.additional_info_linkText)
          ai.linkText = form.additional_info_linkText;
        if (form.additional_info_linkUrl)
          ai.linkUrl = form.additional_info_linkUrl;
        formData.append('additional_info', JSON.stringify(ai));
      } else {
        formData.append('additional_info', '');
      }

      const sds = form.starting_dates
        .map((sd) => ({
          title: sd.title,
          dates: sd.dates.filter((d) => d.trim()),
        }))
        .filter((sd) => sd.title || sd.dates.length > 0);
      formData.append(
        'starting_dates',
        sds.length > 0 ? JSON.stringify(sds) : '',
      );

      const tbls = form.tables.filter((t) => t.headers.some((h) => h.trim()));
      formData.append('tables', tbls.length > 0 ? JSON.stringify(tbls) : '');

      const pts = form.partners.filter(
        (p) => p.name.trim() || p.desc.trim(),
      );
      formData.append('partners', pts.length > 0 ? JSON.stringify(pts) : '');

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

      {/* Form */}
      <div className="space-y-5">
        {/* Basic fields */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Course Code</label>
            <input
              type="text"
              value={form.course_code}
              onChange={(e) => updateForm({ course_code: e.target.value })}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>CRICOS Code</label>
            <input
              type="text"
              value={form.cricos_code}
              onChange={(e) => updateForm({ cricos_code: e.target.value })}
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Description</label>
          <textarea
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
            rows={4}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Duration</label>
          <input
            type="text"
            value={form.duration}
            onChange={(e) => updateForm({ duration: e.target.value })}
            className={inputCls}
          />
        </div>

        {/* Entry Requirements */}
        <div className={sectionCls}>
          <StringListEditor
            label="Entry Requirements"
            items={form.entry_requirements}
            onChange={(items) => updateForm({ entry_requirements: items })}
            placeholder="e.g. IELTS 5.5 or equivalent"
          />
        </div>

        {/* Delivery Mode */}
        <div className={sectionCls}>
          <h3 className="text-sm font-semibold text-gray-700">
            Delivery Mode
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Title</label>
              <input
                type="text"
                value={form.delivery_mode_title}
                onChange={(e) =>
                  updateForm({ delivery_mode_title: e.target.value })
                }
                placeholder="e.g. Delivery Mode"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>Mode</label>
              <input
                type="text"
                value={form.delivery_mode_mode}
                onChange={(e) =>
                  updateForm({ delivery_mode_mode: e.target.value })
                }
                placeholder="e.g. Face to Face"
                className={inputCls}
              />
            </div>
          </div>
        </div>

        {/* Delivery Site */}
        <div className={sectionCls}>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Delivery Site
            </h3>
            <button type="button" onClick={addLocation} className={btnAdd}>
              + Add Location
            </button>
          </div>
          <div>
            <label className={labelCls}>Title</label>
            <input
              type="text"
              value={form.delivery_site_title}
              onChange={(e) =>
                updateForm({ delivery_site_title: e.target.value })
              }
              placeholder="e.g. Delivery Site"
              className={inputCls}
            />
          </div>
          {form.delivery_site_locations.length === 0 && (
            <p className="text-sm text-gray-400 italic">No locations</p>
          )}
          {form.delivery_site_locations.map((loc, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="flex-1 grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={loc.type}
                  onChange={(e) => updateLocation(i, { type: e.target.value })}
                  placeholder="Type (e.g. Campus)"
                  className={inputCls}
                />
                <input
                  type="text"
                  value={loc.address}
                  onChange={(e) =>
                    updateLocation(i, { address: e.target.value })
                  }
                  placeholder="Address"
                  className={inputCls}
                />
              </div>
              <button
                type="button"
                onClick={() => removeLocation(i)}
                className={btnRemove}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={sectionCls}>
          <h3 className="text-sm font-semibold text-gray-700">
            Additional Info
          </h3>
          <div>
            <label className={labelCls}>Description</label>
            <textarea
              value={form.additional_info_description}
              onChange={(e) =>
                updateForm({ additional_info_description: e.target.value })
              }
              rows={2}
              className={inputCls}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Link Text</label>
              <input
                type="text"
                value={form.additional_info_linkText}
                onChange={(e) =>
                  updateForm({ additional_info_linkText: e.target.value })
                }
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>Link URL</label>
              <input
                type="text"
                value={form.additional_info_linkUrl}
                onChange={(e) =>
                  updateForm({ additional_info_linkUrl: e.target.value })
                }
                className={inputCls}
              />
            </div>
          </div>
        </div>

        {/* Starting Dates */}
        <div className={sectionCls}>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Starting Dates
            </h3>
            <button
              type="button"
              onClick={addStartingDateGroup}
              className={btnAdd}
            >
              + Add Group
            </button>
          </div>
          {form.starting_dates.length === 0 && (
            <p className="text-sm text-gray-400 italic">
              No starting date groups
            </p>
          )}
          {form.starting_dates.map((group, gIdx) => (
            <div key={gIdx} className="border rounded p-3 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <label className={labelCls}>Group Title</label>
                <button
                  type="button"
                  onClick={() => removeStartingDateGroup(gIdx)}
                  className={btnRemove}
                >
                  Remove Group
                </button>
              </div>
              <input
                type="text"
                value={group.title}
                onChange={(e) =>
                  updateStartingDateGroup(gIdx, { title: e.target.value })
                }
                placeholder="e.g. 2025 Intake"
                className={inputCls}
              />
              <StringListEditor
                label="Dates"
                items={group.dates}
                onChange={(dates) =>
                  updateStartingDateGroup(gIdx, { dates })
                }
                placeholder="e.g. 3 March 2025"
              />
            </div>
          ))}
        </div>

        {/* Tables */}
        <div className={sectionCls}>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">Tables</h3>
            <button type="button" onClick={addTable} className={btnAdd}>
              + Add Table
            </button>
          </div>
          {form.tables.length === 0 && (
            <p className="text-sm text-gray-400 italic">No tables</p>
          )}
          {form.tables.map((table, tIdx) => (
            <div
              key={tIdx}
              className="border rounded p-3 bg-white space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Table {tIdx + 1}
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => addTableColumn(tIdx)}
                    className={btnAdd}
                  >
                    + Column
                  </button>
                  <button
                    type="button"
                    onClick={() => addTableRow(tIdx)}
                    className={btnAdd}
                  >
                    + Row
                  </button>
                  <button
                    type="button"
                    onClick={() => removeTable(tIdx)}
                    className={btnRemove}
                  >
                    Remove Table
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="border p-1">
                          <div className="flex gap-1">
                            <input
                              type="text"
                              value={h}
                              onChange={(e) =>
                                updateTableHeader(tIdx, hIdx, e.target.value)
                              }
                              placeholder="Header"
                              className="w-full px-1 py-0.5 border rounded text-sm font-semibold"
                            />
                            {table.headers.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeTableColumn(tIdx, hIdx)}
                                className={btnRemove}
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        </th>
                      ))}
                      <th className="w-8" />
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="border p-1">
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) =>
                                updateTableCell(
                                  tIdx,
                                  rIdx,
                                  cIdx,
                                  e.target.value,
                                )
                              }
                              className="w-full px-1 py-0.5 border rounded text-sm"
                            />
                          </td>
                        ))}
                        <td className="p-1">
                          <button
                            type="button"
                            onClick={() => removeTableRow(tIdx, rIdx)}
                            className={btnRemove}
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className={sectionCls}>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">Partners</h3>
            <button type="button" onClick={addPartner} className={btnAdd}>
              + Add Partner
            </button>
          </div>
          {form.partners.length === 0 && (
            <p className="text-sm text-gray-400 italic">No partners</p>
          )}
          {form.partners.map((p, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="flex-1 grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={p.name}
                  onChange={(e) => updatePartner(i, { name: e.target.value })}
                  placeholder="Partner name"
                  className={inputCls}
                />
                <input
                  type="text"
                  value={p.desc}
                  onChange={(e) => updatePartner(i, { desc: e.target.value })}
                  placeholder="Description"
                  className={inputCls}
                />
              </div>
              <button
                type="button"
                onClick={() => removePartner(i)}
                className={btnRemove}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Save */}
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
