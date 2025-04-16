import { KM_UNITS } from '@/lib/constants';
import React from 'react';

function Units() {
  return (
    <div>
      <table className="min-w-full border border-gray-300 text-sm text-left text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 font-semibold">
              No. of unit
            </th>
            <th className="px-4 py-2 border-b border-gray-300 font-semibold">
              Code
            </th>
            <th className="px-4 py-2 border-b border-gray-300 font-semibold">
              Title
            </th>
            <th className="px-4 py-2 border-b border-gray-300 font-semibold">
              Core or Elective
            </th>
          </tr>
        </thead>
        <tbody>
          {KM_UNITS.map(({ no, code, title, type }) => (
            <tr key={no} className="even:bg-white odd:bg-gray-50">
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
