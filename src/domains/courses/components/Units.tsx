import {
  AHM_UNITS,
  CERTIII_FITNESS_UNITS,
  CERTIV_FITNESS_FAST_UNITS,
  CERTIV_FITNESS_UNITS,
  HM_UNITS,
  KM_UNITS,
} from '@/lib/constants';
import React from 'react';

function Units({ params }: { params: { id: string } }) {
  const { id } = params;
  const mappingCourseUnits: {
    [key: string]: { [key: string]: string | number }[];
  } = {
    'sit40521-certificate-iv-in-kitchen-management': KM_UNITS,
    'industry-placement-work-placement': HM_UNITS,
    fss: KM_UNITS,
    'sit50422-diploma-of-hospitality-management': HM_UNITS,
    'advanced-diploma-of-hospitality-management': AHM_UNITS,
    'industry-placement-hospitality-management': KM_UNITS,
    'sis30321-certificate-iv-in-fitness': CERTIV_FITNESS_UNITS,
    'sis40221-certificate-iii-in-fitness': CERTIII_FITNESS_UNITS,
    'certificate-iv-in-sport-fast-track': CERTIV_FITNESS_UNITS,
    'certificate-iii-in-sport-fast-track': CERTIV_FITNESS_FAST_UNITS,
    'bsb40120-certificate-iv-in-business': KM_UNITS,
    'bsb50120-diploma-of-business': KM_UNITS,
    'bsb60120-advanced-diploma-of-business': KM_UNITS,
    'bsb80120-graduate-diploma-of-management': KM_UNITS,
    'bsb40920-certificate-iv-in-project-management-practice': KM_UNITS,
    'bsb50820-diploma-of-project-management-practice': KM_UNITS,
    'bsb60820-advanced-diploma-of-project-management-practice': KM_UNITS,
    'bsb40420-certificate-iv-in-human-resource-management': KM_UNITS,
    'bsb50320-diploma-of-human-resource-management': KM_UNITS,
    'bsb60320-advanced-diploma-of-human-resource-management': KM_UNITS,
  };
  return (
    <div>
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
