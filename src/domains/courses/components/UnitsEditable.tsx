'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useEditMode } from '@/contexts/EditModeContext';
import {
  upsertCourseUnitsAction,
  deleteCourseUnitGroupAction,
} from '@/app/admin/courses/actions';
import type { CourseUnitGroup, CourseUnitItem } from '@/types/course';

interface UnitsEditableProps {
  courseId: string;
  initialData: CourseUnitGroup[];
}

export default function UnitsEditable({
  courseId,
  initialData,
}: UnitsEditableProps) {
  const editMode = useEditMode();
  const [groups, setGroups] = useState<CourseUnitGroup[]>(
    initialData.length > 0
      ? initialData
      : [{ groupTitle: '', groupIndex: 0, units: [emptyUnit(1)] }],
  );
  const [saving, setSaving] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);

  const handleSaveGroup = async (groupIndex: number) => {
    const group = groups.find((g) => g.groupIndex === groupIndex);
    if (!group) return;

    setSaving(groupIndex);
    try {
      await upsertCourseUnitsAction(
        courseId,
        group.groupIndex,
        group.groupTitle,
        JSON.stringify(group.units),
      );
      toast.success(`Unit group saved`);
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(null);
    }
  };

  const handleDeleteGroup = async (groupIndex: number) => {
    if (!confirm('Delete this unit group?')) return;
    try {
      await deleteCourseUnitGroupAction(courseId, groupIndex);
      setGroups((prev) => prev.filter((g) => g.groupIndex !== groupIndex));
      toast.success('Unit group deleted');
      editMode?.refreshData?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Delete failed');
    }
  };

  const handleAddGroup = () => {
    const nextIndex =
      groups.length > 0
        ? Math.max(...groups.map((g) => g.groupIndex)) + 1
        : 0;
    setGroups((prev) => [
      ...prev,
      { groupTitle: '', groupIndex: nextIndex, units: [emptyUnit(1)] },
    ]);
    setAdding(false);
  };

  const updateGroupTitle = (groupIndex: number, title: string) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.groupIndex === groupIndex ? { ...g, groupTitle: title } : g,
      ),
    );
  };

  const updateUnit = (
    groupIndex: number,
    unitIdx: number,
    field: keyof CourseUnitItem,
    value: string | number,
  ) => {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.groupIndex !== groupIndex) return g;
        const newUnits = [...g.units];
        newUnits[unitIdx] = { ...newUnits[unitIdx], [field]: value };
        return { ...g, units: newUnits };
      }),
    );
  };

  const addUnit = (groupIndex: number) => {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.groupIndex !== groupIndex) return g;
        const nextNo =
          g.units.length > 0
            ? Math.max(...g.units.map((u) => u.no)) + 1
            : 1;
        return { ...g, units: [...g.units, emptyUnit(nextNo)] };
      }),
    );
  };

  const removeUnit = (groupIndex: number, unitIdx: number) => {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.groupIndex !== groupIndex) return g;
        if (g.units.length <= 1) return g;
        return { ...g, units: g.units.filter((_, i) => i !== unitIdx) };
      }),
    );
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-amber-700">Units (Editable)</h3>

      {groups.map((group) => (
        <div
          key={group.groupIndex}
          className="border border-amber-200 rounded p-4 bg-white"
        >
          <div className="flex justify-between items-start mb-3">
            <span className="text-sm font-mono text-gray-500">
              Group #{group.groupIndex}
            </span>
            <button
              type="button"
              onClick={() => handleDeleteGroup(group.groupIndex)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete Group
            </button>
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-600 mb-1">
              Group Title (leave empty for single-group courses)
            </label>
            <input
              type="text"
              value={group.groupTitle}
              onChange={(e) =>
                updateGroupTitle(group.groupIndex, e.target.value)
              }
              placeholder="e.g. Standalone Food & Beverage Stream"
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-xs">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1 border border-gray-300 w-16">No</th>
                  <th className="px-2 py-1 border border-gray-300 w-40">
                    Code
                  </th>
                  <th className="px-2 py-1 border border-gray-300">Title</th>
                  <th className="px-2 py-1 border border-gray-300 w-36">
                    Core/Elective
                  </th>
                  <th className="px-2 py-1 border border-gray-300 w-16"></th>
                </tr>
              </thead>
              <tbody>
                {group.units.map((unit, unitIdx) => (
                  <tr key={unitIdx} className="even:bg-white odd:bg-gray-50">
                    <td className="px-1 py-1 border border-gray-200">
                      <input
                        type="number"
                        value={unit.no}
                        onChange={(e) =>
                          updateUnit(
                            group.groupIndex,
                            unitIdx,
                            'no',
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="w-full px-1 py-0.5 border rounded text-xs text-center"
                      />
                    </td>
                    <td className="px-1 py-1 border border-gray-200">
                      <input
                        type="text"
                        value={unit.code}
                        onChange={(e) =>
                          updateUnit(
                            group.groupIndex,
                            unitIdx,
                            'code',
                            e.target.value,
                          )
                        }
                        className="w-full px-1 py-0.5 border rounded text-xs"
                      />
                    </td>
                    <td className="px-1 py-1 border border-gray-200">
                      <input
                        type="text"
                        value={unit.title}
                        onChange={(e) =>
                          updateUnit(
                            group.groupIndex,
                            unitIdx,
                            'title',
                            e.target.value,
                          )
                        }
                        className="w-full px-1 py-0.5 border rounded text-xs"
                      />
                    </td>
                    <td className="px-1 py-1 border border-gray-200">
                      <input
                        type="text"
                        value={unit.type}
                        onChange={(e) =>
                          updateUnit(
                            group.groupIndex,
                            unitIdx,
                            'type',
                            e.target.value,
                          )
                        }
                        className="w-full px-1 py-0.5 border rounded text-xs"
                      />
                    </td>
                    <td className="px-1 py-1 border border-gray-200 text-center">
                      {group.units.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeUnit(group.groupIndex, unitIdx)
                          }
                          className="text-red-500 hover:text-red-700 text-xs"
                        >
                          ✕
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 mt-3">
            <button
              type="button"
              onClick={() => addUnit(group.groupIndex)}
              className="px-2 py-1 text-xs border border-dashed border-amber-400 rounded text-amber-700"
            >
              + Add Unit
            </button>
            <button
              type="button"
              onClick={() => handleSaveGroup(group.groupIndex)}
              disabled={saving === group.groupIndex}
              className="px-3 py-1 bg-amber-500 text-white rounded text-xs"
            >
              {saving === group.groupIndex ? 'Saving...' : 'Save Group'}
            </button>
          </div>
        </div>
      ))}

      {adding ? (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleAddGroup}
            className="px-3 py-1 bg-amber-500 text-white rounded text-sm"
          >
            Confirm Add Group
          </button>
          <button
            type="button"
            onClick={() => setAdding(false)}
            className="px-3 py-1 bg-gray-300 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleAddGroup}
          className="px-4 py-2 border border-dashed border-blue-400 rounded text-blue-700 bg-blue-50 hover:bg-blue-100 text-sm"
        >
          + Add Unit Group
        </button>
      )}
    </div>
  );
}

function emptyUnit(no: number): CourseUnitItem {
  return { no, code: '', title: '', type: 'Core' };
}
