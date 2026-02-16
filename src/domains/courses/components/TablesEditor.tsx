'use client';

import React from 'react';
import { Plus, Trash2, Table2 } from 'lucide-react';

export interface SimpleTable {
  headers: string[];
  rows: string[][];
}

interface TablesEditorProps {
  tables: SimpleTable[];
  onChange: (tables: SimpleTable[]) => void;
  disabled?: boolean;
}

export default function TablesEditor({
  tables,
  onChange,
  disabled = false,
}: TablesEditorProps) {
  const updateTable = (index: number, table: SimpleTable) => {
    const next = [...tables];
    next[index] = table;
    onChange(next);
  };

  const removeTable = (index: number) => {
    onChange(tables.filter((_, i) => i !== index));
  };

  const addTable = () => {
    onChange([...tables, { headers: ['', ''], rows: [['', '']] }]);
  };

  return (
    <div className="space-y-3">
      {tables.map((table, index) => (
        <div
          key={index}
          className="border border-emerald-200 rounded-lg bg-emerald-50/30 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-white/80 border-b border-gray-200">
            <Table2 className="w-4 h-4" />
            <span className="text-sm font-medium text-gray-700">
              Table {index + 1}
            </span>
            <div className="flex-1" />
            {!disabled && (
              <button
                type="button"
                onClick={() => removeTable(index)}
                className="p-1 text-red-500 hover:bg-red-50 rounded"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="p-3 overflow-x-auto">
            <SimpleTableEditor
              table={table}
              onChange={(t) => updateTable(index, t)}
              disabled={disabled}
            />
          </div>
        </div>
      ))}
      {!disabled && (
        <button
          type="button"
          onClick={addTable}
          className="flex items-center gap-1 px-3 py-1.5 text-sm border border-emerald-300 rounded hover:bg-emerald-50"
        >
          <Plus className="w-4 h-4" /> Add table
        </button>
      )}
    </div>
  );
}

function SimpleTableEditor({
  table,
  onChange,
  disabled,
}: {
  table: SimpleTable;
  onChange: (table: SimpleTable) => void;
  disabled: boolean;
}) {
  const updateHeader = (colIndex: number, value: string) => {
    const next = [...table.headers];
    next[colIndex] = value;
    onChange({ ...table, headers: next });
  };

  const addHeader = () =>
    onChange({
      ...table,
      headers: [...table.headers, ''],
      rows: table.rows.map((r) => [...r, '']),
    });

  const removeHeader = (colIndex: number) => {
    if (table.headers.length <= 1) return;
    const nextHeaders = table.headers.filter((_, i) => i !== colIndex);
    const nextRows = table.rows.map((row) =>
      row.filter((_, i) => i !== colIndex),
    );
    onChange({ ...table, headers: nextHeaders, rows: nextRows });
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const next = table.rows.map((r, i) =>
      i === rowIndex ? r.map((c, j) => (j === colIndex ? value : c)) : r,
    );
    onChange({ ...table, rows: next });
  };

  const addRow = () =>
    onChange({
      ...table,
      rows: [...table.rows, Array(table.headers.length).fill('')],
    });

  const removeRow = (rowIndex: number) => {
    if (table.rows.length <= 1) return;
    onChange({ ...table, rows: table.rows.filter((_, i) => i !== rowIndex) });
  };

  return (
    <div>
      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th key={i} className="border border-gray-300 p-1 bg-gray-100">
                <input
                  type="text"
                  value={h}
                  onChange={(e) => updateHeader(i, e.target.value)}
                  placeholder={`Header ${i + 1}`}
                  className="w-full min-w-[80px] px-1 py-0.5 text-sm"
                  disabled={disabled}
                />
                {!disabled && table.headers.length > 1 && (
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
                <button
                  type="button"
                  onClick={addHeader}
                  className="text-green-600 hover:underline text-sm"
                >
                  +
                </button>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
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
          + Add row
        </button>
      )}
    </div>
  );
}
