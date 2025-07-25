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
  KM_UNITS,
} from '@/lib/units';
import React from 'react';

function Units({ params }: { params: { id: string } }) {
  const { id } = params;
  const mappingCourseUnits: {
    [key: string]: { [key: string]: string | number }[];
  } = {
    'sit40521-certificate-iv-in-kitchen-management': KM_UNITS,
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
    'bsb60720-advanced-diploma-of-project-management-practice':
      ADVANCED_PROJECT_UNITS,
    'bsb40420-certificate-iv-in-human-resource-management': CERTIV_HR_UNITS,
    'bsb50320-diploma-of-human-resource-management': DIPLOMA_HR_UNITS,
    'bsb60320-advanced-diploma-of-human-resource-management': ADVANCED_HR_UNITS,
  };

  if (!mappingCourseUnits[id]) {
    return;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Course Structure</h1>
      <table className="min-w-full border-b border-gray-300 text-sm text-left text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-8 py-8 border-b border-gray-300 font-semibold">
              No. of unit
            </th>
            <th className="px-8 py-8 border-b border-gray-300 font-semibold">
              Code
            </th>
            <th className="px-8 py-8 border-b border-gray-300 font-semibold">
              Title
            </th>
            <th className="px-8 py-8 border-b border-gray-300 font-semibold">
              Core or Elective
            </th>
          </tr>
        </thead>
        <tbody>
          {mappingCourseUnits[id].map(({ no, code, title, type }) => (
            <tr key={code} className="even:bg-white odd:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{no}</td>
              <td className="px-4 py-2 border-b border-gray-200">{code}</td>
              <td className="px-4 py-2 border-b border-gray-200">{title}</td>
              <td className="px-4 py-2 border-b border-gray-200">{type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Units;
