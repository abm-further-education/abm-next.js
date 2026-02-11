'use client';

import React, { useState } from 'react';
import { Trash2, GripVertical, Link2, Table2, Type } from 'lucide-react';
import type { DescriptionItem, TableData, LinkData } from '@/types/course';

// Normalize description to DescriptionItem[]
function toItems(val: unknown): DescriptionItem[] {
  if (val == null) return [];
  if (typeof val === 'string') return val ? [val] : [];
  if (Array.isArray(val)) {
    if (val.length === 0) return [];
    const first = val[0];
    if (typeof first === 'string') return val as string[];
    if (first && typeof first === 'object' && 'type' in first) return val as DescriptionItem[];
    return [];
  }
  return [];
}

function isTableData(v: DescriptionItem): v is TableData {
  return typeof v === 'object' && v !== null && (v as TableData).type === 'table';
}

function isLinkData(v: DescriptionItem): v is LinkData {
  return typeof v === 'object' && v !== null && (v as LinkData).type === 'link';
}

interface DescriptionBlockEditorProps {
  items: DescriptionItem[];
  onChange: (items: DescriptionItem[]) => void;
  disabled?: boolean;
}

export default function DescriptionBlockEditor({
  items,
  onChange,
  disabled = false,
}: DescriptionBlockEditorProps) {
  const updateItem = (index: number, item: DescriptionItem) => {
    const next = [...items];
    next[index] = item;
    onChange(next);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const addItem = (type: 'text' | 'link' | 'table') => {
    if (type === 'text') onChange([...items, '']);
    if (type === 'link') onChange([...items, { type: 'link', text: '', url: '' }]);
    if (type === 'table') onChange([...items, { type: 'table', headers: ['', ''], rows: [['', '']] }]);
  };

  const moveItem = (from: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const next = [...items];
    const [removed] = next.splice(from, 1);
    next.splice(to, 0, removed);
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <BlockCard
          key={index}
          item={item}
          onUpdate={(v) => updateItem(index, v)}
          onRemove={() => removeItem(index)}
          onMoveUp={index > 0 ? () => moveItem(index, index - 1) : undefined}
          onMoveDown={index < items.length - 1 ? () => moveItem(index, index + 1) : undefined}
          disabled={disabled}
        />
      ))}
      {!disabled && (
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => addItem('text')}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-amber-300 rounded hover:bg-amber-50"
          >
            <Type className="w-4 h-4" /> 텍스트 추가
          </button>
          <button
            type="button"
            onClick={() => addItem('link')}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-amber-300 rounded hover:bg-amber-50"
          >
            <Link2 className="w-4 h-4" /> 링크 추가
          </button>
          <button
            type="button"
            onClick={() => addItem('table')}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-amber-300 rounded hover:bg-amber-50"
          >
            <Table2 className="w-4 h-4" /> 표 추가
          </button>
        </div>
      )}
    </div>
  );
}

function BlockCard({
  item,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  disabled,
}: {
  item: DescriptionItem;
  onUpdate: (item: DescriptionItem) => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  disabled: boolean;
}) {
  const [collapsed, setCollapsed] = useState(false);

  if (typeof item === 'string') {
    return (
      <div className="border border-gray-200 rounded-lg bg-gray-50/50 overflow-hidden">
        <BlockHeader
          label="텍스트"
          icon={<Type className="w-4 h-4" />}
          onRemove={onRemove}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          collapsed={collapsed}
          onToggleCollapsed={() => setCollapsed((c) => !c)}
          disabled={disabled}
        />
        {!collapsed && (
          <div className="p-3">
            <textarea
              value={item}
              onChange={(e) => onUpdate(e.target.value)}
              rows={3}
              placeholder="내용 입력..."
              className="w-full px-2 py-1 border rounded text-sm"
              disabled={disabled}
            />
          </div>
        )}
      </div>
    );
  }

  if (isLinkData(item)) {
    return (
      <div className="border border-blue-200 rounded-lg bg-blue-50/30 overflow-hidden">
        <BlockHeader
          label="링크"
          icon={<Link2 className="w-4 h-4" />}
          onRemove={onRemove}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          collapsed={collapsed}
          onToggleCollapsed={() => setCollapsed((c) => !c)}
          disabled={disabled}
        />
        {!collapsed && (
          <div className="p-3 space-y-2">
            <div>
              <label className="block text-xs text-gray-600 mb-0.5">링크 텍스트</label>
              <input
                type="text"
                value={item.text}
                onChange={(e) => onUpdate({ ...item, text: e.target.value })}
                placeholder="표시할 텍스트"
                className="w-full px-2 py-1 border rounded text-sm"
                disabled={disabled}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-0.5">URL</label>
              <input
                type="text"
                value={item.url}
                onChange={(e) => onUpdate({ ...item, url: e.target.value })}
                placeholder="/courses/..."
                className="w-full px-2 py-1 border rounded text-sm font-mono"
                disabled={disabled}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  if (isTableData(item)) {
    return (
      <TableBlockEditor
        data={item}
        onUpdate={onUpdate}
        onRemove={onRemove}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed((c) => !c)}
        disabled={disabled}
      />
    );
  }

  return null;
}

function BlockHeader({
  label,
  icon,
  onRemove,
  onMoveUp,
  onMoveDown,
  collapsed,
  onToggleCollapsed,
  disabled,
}: {
  label: string;
  icon: React.ReactNode;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white/80 border-b border-gray-200">
      <GripVertical className="w-4 h-4 text-gray-400" />
      <span className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
        {icon} {label}
      </span>
      <div className="flex-1" />
      {!disabled && (
        <>
          {onMoveUp && (
            <button type="button" onClick={onMoveUp} className="p-1 text-gray-500 hover:bg-gray-100 rounded">
              ↑
            </button>
          )}
          {onMoveDown && (
            <button type="button" onClick={onMoveDown} className="p-1 text-gray-500 hover:bg-gray-100 rounded">
              ↓
            </button>
          )}
          <button type="button" onClick={onToggleCollapsed} className="p-1 text-gray-500 hover:bg-gray-100 rounded text-xs">
            {collapsed ? '펼치기' : '접기'}
          </button>
          <button type="button" onClick={onRemove} className="p-1 text-red-500 hover:bg-red-50 rounded">
            <Trash2 className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}

function TableBlockEditor({
  data,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  collapsed,
  onToggleCollapsed,
  disabled,
}: {
  data: TableData;
  onUpdate: (item: DescriptionItem) => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  disabled: boolean;
}) {
  const updateHeader = (colIndex: number, value: string) => {
    const next = [...data.headers];
    next[colIndex] = value;
    onUpdate({ ...data, headers: next });
  };

  const addHeader = () => onUpdate({ ...data, headers: [...data.headers, ''] });

  const removeHeader = (colIndex: number) => {
    if (data.headers.length <= 1) return;
    const nextHeaders = data.headers.filter((_, i) => i !== colIndex);
    const nextRows = data.rows.map((row) => row.filter((_, i) => i !== colIndex));
    onUpdate({ ...data, headers: nextHeaders, rows: nextRows });
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const next = data.rows.map((r, i) =>
      i === rowIndex ? r.map((c, j) => (j === colIndex ? value : c)) : r
    );
    onUpdate({ ...data, rows: next });
  };

  const addRow = () => {
    const cols = data.headers.length;
    onUpdate({ ...data, rows: [...data.rows, Array(cols).fill('')] });
  };

  const removeRow = (rowIndex: number) => {
    if (data.rows.length <= 1) return;
    onUpdate({ ...data, rows: data.rows.filter((_, i) => i !== rowIndex) });
  };

  return (
    <div className="border border-emerald-200 rounded-lg bg-emerald-50/30 overflow-hidden">
      <BlockHeader
        label="표"
        icon={<Table2 className="w-4 h-4" />}
        onRemove={onRemove}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        collapsed={collapsed}
        onToggleCollapsed={onToggleCollapsed}
        disabled={disabled}
      />
      {!collapsed && (
        <div className="p-3 overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr>
                {data.headers.map((h, i) => (
                  <th key={i} className="border border-gray-300 p-1 bg-gray-100">
                    <input
                      type="text"
                      value={h}
                      onChange={(e) => updateHeader(i, e.target.value)}
                      placeholder={`헤더 ${i + 1}`}
                      className="w-full min-w-[80px] px-1 py-0.5 text-sm"
                      disabled={disabled}
                    />
                    {!disabled && data.headers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeHeader(i)}
                        className="ml-1 text-red-500 text-xs hover:underline"
                      >
                        ×
                      </button>
                    )}
                  </th>
                ))}
                {!disabled && (
                  <th className="border border-gray-300 p-1 w-8">
                    <button type="button" onClick={addHeader} className="text-green-600 hover:underline text-sm">
                      +
                    </button>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-gray-300 p-1">
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => updateCell(ri, ci, e.target.value)}
                        className="w-full min-w-[80px] px-1 py-0.5 text-sm"
                        disabled={disabled}
                      />
                    </td>
                  ))}
                  {!disabled && (
                    <td className="border border-gray-300 p-1 w-8">
                      <button
                        type="button"
                        onClick={() => removeRow(ri)}
                        className="text-red-500 hover:underline text-sm"
                      >
                        ×
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {!disabled && (
            <button
              type="button"
              onClick={addRow}
              className="mt-2 px-2 py-1 text-sm border border-emerald-300 rounded hover:bg-emerald-50"
            >
              + 행 추가
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export { toItems };
