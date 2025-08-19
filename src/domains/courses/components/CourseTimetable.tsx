import React from 'react';
import { getTimetableByCode } from '@/lib/timetableData';
import { titleStyle } from './CourseDetail';

interface CourseTimetableProps {
  courseCode: string;
}

function CourseTimetable({ courseCode }: CourseTimetableProps) {
  const timetableData = getTimetableByCode(courseCode);

  if (!timetableData || timetableData.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      <h3 className={`${titleStyle} mb-6`}>Class Timetable</h3>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-primary-bk text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold border-r">
                {courseCode === 'SIT40521' ? 'Intake' : 'Course'}
              </th>
              <th className="px-6 py-4 text-center font-semibold">Monday</th>
              <th className="px-6 py-4 text-center font-semibold">Tuesday</th>
              <th className="px-6 py-4 text-center font-semibold">Wednesday</th>
              <th className="px-6 py-4 text-center font-semibold">Thursday</th>
              <th className="px-6 py-4 text-center font-semibold">Friday</th>
              {timetableData.some((entry) => entry.tutorial) && (
                <th className="px-6 py-4 text-center font-semibold">
                  Tutorial
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {timetableData.map((entry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-3 py-2 border-b border-r border-gray-200 font-medium text-gray-800">
                  {courseCode === 'SIT40521' ? entry.intake : '-'}
                </td>
                <td className="px-3 py-2 border-b border-gray-200 text-center">
                  <span
                    className={`px-2 py-1 text-xs  ${
                      entry.mon ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {entry.mon || '-'}
                  </span>
                </td>
                <td className="px-3 py-2 border-b border-gray-200 text-center">
                  <span
                    className={`px-2 py-1 text-xs  ${
                      entry.tue ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {entry.tue || '-'}
                  </span>
                </td>
                <td className="px-3 py-2 border-b border-gray-200 text-center">
                  <span
                    className={`px-2 py-1 text-xs  ${
                      entry.wed ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {entry.wed || '-'}
                  </span>
                </td>
                <td className="px-3 py-2 border-b border-gray-200 text-center">
                  <span
                    className={`px-2 py-1 text-xs  ${
                      entry.thu ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {entry.thu || '-'}
                  </span>
                </td>
                <td className="px-3 py-2 border-b border-gray-200 text-center">
                  <span
                    className={`px-2 py-1 text-xs  ${
                      entry.fri ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {entry.fri || '-'}
                  </span>
                </td>
                {timetableData.some((entry) => entry.tutorial) && (
                  <td className="px-3 py-2 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-xs  ${
                        entry.tutorial ? 'text-gray-800' : 'text-gray-400'
                      }`}
                    >
                      {entry.tutorial || '-'}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseTimetable;
