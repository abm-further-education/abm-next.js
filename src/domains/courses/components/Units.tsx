'use client';

import React from 'react';
import { useEditMode } from '@/contexts/EditModeContext';
import type { CourseUnitGroup } from '@/types/course';
import UnitsEditable from './UnitsEditable';
import {
  ADVANCED_BUSINESS_UNITS,
  ADVANCED_HR_UNITS,
  ADVANCED_PROJECT_UNITS,
  CERTIII_FITNESS_UNITS,
  CERTIV_BUSINESS_UNITS,
  CERTIV_FITNESS_FAST_UNITS,
  CERTIV_FITNESS_UNITS,
  CERTIV_HR_UNITS,
  CERTIV_PROJECT_UNITS,
  DIPLOMA_BUSINESS_UNITS,
  DIPLOMA_HR_UNITS,
  DIPLOMA_PROJECT_UNITS,
  DIPLOMA_SPORT_UNITS,
  GRADUATE_MANAGEMENT_UNITS,
  HEALTH_SERVICES_ASSISTANCE_UNITS,
  HM_UNITS_1,
  HM_UNITS_2,
  KM_UNITS,
} from '@/lib/units';

interface UnitsProps {
  id: string;
  data?: CourseUnitGroup[] | null;
}

const staticMappingCourseUnits: {
  [key: string]:
    | { [key: string]: string | number }[]
    | { [key: string]: string | number }[][];
} = {
  'sit40521-certificate-iv-in-kitchen-management': KM_UNITS,
  'sit50422-diploma-of-hospitality-management': [HM_UNITS_1, HM_UNITS_2],
  'sis40221-certificate-iv-in-fitness': CERTIV_FITNESS_UNITS,
  'sis30321-certificate-iii-in-fitness': CERTIII_FITNESS_UNITS,
  'certificate-iv-in-fitness-fast-track': CERTIV_FITNESS_UNITS,
  'sis50321-diploma-of-sport': DIPLOMA_SPORT_UNITS,
  'certificate-iii-in-fitness-fast-track': CERTIV_FITNESS_FAST_UNITS,
  'bsb40120-certificate-iv-in-business': CERTIV_BUSINESS_UNITS,
  'bsb50120-diploma-of-business': DIPLOMA_BUSINESS_UNITS,
  'bsb60120-advanced-diploma-of-business': ADVANCED_BUSINESS_UNITS,
  'bsb80120-graduate-diploma-of-management': GRADUATE_MANAGEMENT_UNITS,
  'bsb40920-certificate-iv-in-project-management-practice':
    CERTIV_PROJECT_UNITS,
  'bsb50820-diploma-of-project-management-practice': DIPLOMA_PROJECT_UNITS,
  'bsb60720-advanced-diploma-of-program-management': ADVANCED_PROJECT_UNITS,
  'bsb40420-certificate-iv-in-human-resource-management': CERTIV_HR_UNITS,
  'bsb50320-diploma-of-human-resource-management': DIPLOMA_HR_UNITS,
  'bsb60320-advanced-diploma-of-human-resource-management': ADVANCED_HR_UNITS,
  'hlt33115-certificate-iii-in-health-services-assistance':
    HEALTH_SERVICES_ASSISTANCE_UNITS,
};

function Units({ id, data }: UnitsProps) {
  const editMode = useEditMode();

  if (editMode?.isEditMode) {
    const editData = data || convertStaticToGroups(id);
    return <UnitsEditable courseId={id} initialData={editData || []} />;
  }

  // Use DB data if available
  if (data && data.length > 0) {
    return <UnitsFromGroups groups={data} />;
  }

  // Fallback to static data
  const unitsData = staticMappingCourseUnits[id];
  if (!unitsData) return null;

  const isArrayOfArrays =
    Array.isArray(unitsData) && Array.isArray(unitsData[0]);

  return (
    <div>
      {isArrayOfArrays ? (
        <div className="gap-8">
          {(unitsData as { [key: string]: string | number }[][]).map(
            (unitGroup, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-lg font-bold my-8">
                  {groupIndex !== 0
                    ? 'Packaged with Kitchen Management Course'
                    : 'Standalone Food & Beverage Stream'}
                </h3>
                <UnitTable units={unitGroup as UnitRow[]} bordered />
              </div>
            ),
          )}
        </div>
      ) : (
        <UnitTable units={unitsData as UnitRow[]} bordered={false} />
      )}
    </div>
  );
}

function UnitsFromGroups({ groups }: { groups: CourseUnitGroup[] }) {
  const hasMultipleGroups =
    groups.length > 1 || (groups.length === 1 && groups[0].groupTitle);

  return (
    <div>
      {hasMultipleGroups ? (
        <div className="gap-8">
          {groups.map((group) => (
            <div key={group.groupIndex}>
              {group.groupTitle && (
                <h3 className="text-lg font-bold my-8">{group.groupTitle}</h3>
              )}
              <UnitTable units={group.units as UnitRow[]} bordered />
            </div>
          ))}
        </div>
      ) : groups.length === 1 ? (
        <UnitTable units={groups[0].units as UnitRow[]} bordered={false} />
      ) : null}
    </div>
  );
}

type UnitRow = {
  no: string | number;
  code: string | number;
  title: string | number;
  type: string | number;
  [key: string]: string | number;
};

function UnitTable({
  units,
  bordered,
}: {
  units: UnitRow[];
  bordered: boolean;
}) {
  return (
    <table className="min-w-full border border-gray-300 text-[10px] text-left text-gray-700">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border border-gray-300 font-semibold">
            No. of unit
          </th>
          <th className="px-4 py-2 border border-gray-300 font-semibold">
            Code
          </th>
          <th className="px-4 py-2 border border-gray-300 font-semibold">
            Title
          </th>
          <th className="px-4 py-2 border border-gray-300 font-semibold">
            Core or Elective
          </th>
        </tr>
      </thead>
      <tbody>
        {units.map(({ no, code, title, type }) => (
          <tr key={`${code}-${no}`} className="even:bg-white odd:bg-gray-50">
            <td
              className={`px-4 py-2 ${bordered ? 'border border-gray-200' : 'border-b border-gray-200'}`}
            >
              {no}
            </td>
            <td
              className={`px-4 py-2 ${bordered ? 'border border-gray-200' : 'border-b border-gray-200'}`}
            >
              {code}
            </td>
            <td
              className={`px-4 py-2 ${bordered ? 'border border-gray-200' : 'border-b border-gray-200'}`}
            >
              {title}
            </td>
            <td
              className={`px-2 ${bordered ? 'border border-gray-200' : 'border-b border-gray-200'}`}
            >
              {type}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function convertStaticToGroups(id: string): CourseUnitGroup[] | null {
  const unitsData = staticMappingCourseUnits[id];
  if (!unitsData) return null;

  const isArrayOfArrays =
    Array.isArray(unitsData) && Array.isArray(unitsData[0]);

  if (isArrayOfArrays) {
    const titles = [
      'Standalone Food & Beverage Stream',
      'Packaged with Kitchen Management Course',
    ];
    return (unitsData as { [key: string]: string | number }[][]).map(
      (group, idx) => ({
        groupTitle: titles[idx] || '',
        groupIndex: idx,
        units: group.map((u) => ({
          no: u.no as number,
          code: u.code as string,
          title: u.title as string,
          type: u.type as string,
        })),
      }),
    );
  }

  return [
    {
      groupTitle: '',
      groupIndex: 0,
      units: (unitsData as { [key: string]: string | number }[]).map((u) => ({
        no: u.no as number,
        code: u.code as string,
        title: u.title as string,
        type: u.type as string,
      })),
    },
  ];
}

export default Units;
