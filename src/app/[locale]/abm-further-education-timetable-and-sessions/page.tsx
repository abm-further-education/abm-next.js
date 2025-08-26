import React from 'react';
import Banner from '@/components/common/Banner';
import { getTranslations } from 'next-intl/server';
import { allTimetableData, TimetableEntry } from '@/lib/timetableData';

// 데이터를 그룹화하는 함수
function groupTimetableData(data: TimetableEntry[]) {
  const grouped: { [key: string]: TimetableEntry[] } = {};

  data.forEach((entry) => {
    const key = `${entry.code}-${entry.qualification}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(entry);
  });

  return Object.values(grouped);
}

async function TimetablePage() {
  const t = await getTranslations('timetable');

  return (
    <div className="min-h-screen">
      <Banner
        slides={[
          {
            imgPath: '/home/home.png',
            title: t('title'),
            content: t('subtitle'),
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <section className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('pageTitle')}
          </h2>

          <div className="p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {t('importantInfo')}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('selfPacedLearning')}</li>
              <li>{t('schedule')}</li>
              <li>{t('subjectToChange')}</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              {t('studyHours')}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto shadow-lg">
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-primary-bk text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  {t('qualification')}
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  {t('intake')}
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  {t('monday')}
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  {t('tuesday')}
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  {t('wednesday')}
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  {t('thursday')}
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  {t('friday')}
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  {t('tutorial')}
                </th>
              </tr>
            </thead>
            <tbody>
              {groupTimetableData(allTimetableData).map((group, groupIndex) =>
                group.map((entry, entryIndex) => (
                  <tr
                    key={`${groupIndex}-${entryIndex}`}
                    className={groupIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    {entryIndex === 0 ? (
                      <td
                        className="px-4 py-3 border-b border-gray-200 font-semibold text-gray-800"
                        rowSpan={group.length}
                      >
                        {entry.code} {entry.qualification}
                      </td>
                    ) : null}
                    <td className="px-4 py-3 border-b border-gray-200 text-gray-600">
                      {entry.code === 'SIT40521' ? entry.intake : '-'}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <span
                        className={`px-2 py-1 text-sm ${
                          entry.mon ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {entry.mon || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <span
                        className={`px-2 py-1 text-sm ${
                          entry.tue ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {entry.tue || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <span
                        className={`px-2 py-1 text-sm ${
                          entry.wed ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {entry.wed || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <span
                        className={`px-2 py-1 text-sm ${
                          entry.thu ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {entry.thu || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <span
                        className={`px-2 py-1 text-sm ${
                          entry.fri ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {entry.fri || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <span
                        className={`px-2 py-1 text-sm ${
                          entry.tutorial ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {entry.tutorial || '-'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-orange-50 border border-orange-200 p-6">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">
            {t('note')}
          </h3>
          <p className="text-orange-700">{t('noteDescription')}</p>
        </div>
      </section>
    </div>
  );
}

export default TimetablePage;
