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
import React from 'react';

function Units({ id }: { id: string }) {
  const mappingCourseUnits: {
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

  if (!mappingCourseUnits[id]) {
    return;
  }

  const unitsData = mappingCourseUnits[id];
  const isArrayOfArrays =
    Array.isArray(unitsData) && Array.isArray(unitsData[0]);

  return (
    <div>
      {isArrayOfArrays ? (
        // 2단 구조로 표시
        <div className="gap-8">
          {(unitsData as { [key: string]: string | number }[][]).map(
            (unitGroup, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-lg font-bold mb-4">
                  {groupIndex === 0
                    ? 'Packaged with Kitchen Management Course'
                    : 'Standalone Food & Beverage Stream'}
                </h3>
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
                    {unitGroup.map(({ no, code, title, type }) => (
                      <tr key={code} className="even:bg-white odd:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">
                          {no}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {code}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {title}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      ) : (
        // 단일 테이블로 표시
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
            {(unitsData as { [key: string]: string | number }[]).map(
              ({ no, code, title, type }) => (
                <tr key={code} className="even:bg-white odd:bg-gray-50">
                  <td className="px-4 py-2 border-b border-gray-200">{no}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{code}</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {title}
                  </td>
                  <td className="px-2 border-b border-gray-200">{type}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Units;
