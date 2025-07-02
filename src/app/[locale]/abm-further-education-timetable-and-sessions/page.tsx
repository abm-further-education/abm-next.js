import React from 'react';
import Banner from '@/components/common/Banner';
import { getTranslations } from 'next-intl/server';
import { allTimetableData } from '@/lib/timetableData';

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

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('pageTitle')}
          </h2>

          <div className="bg-blue-50 border border-blue-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              {t('importantInfo')}
            </h3>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>{t('selfPacedLearning')}</li>
              <li>{t('schedule')}</li>
              <li>{t('subjectToChange')}</li>
            </ul>
            <p className="text-sm text-blue-600 mt-4 italic">
              {t('studyHours')}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto shadow-lg">
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-primary text-white">
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
              {allTimetableData.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-3 border-b border-gray-200">
                    <div>
                      <div className="font-semibold text-gray-800">
                        [{entry.code}] {entry.qualification}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-600">
                    {entry.intake}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-sm ${
                        entry.mon
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {entry.mon || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-sm ${
                        entry.tue
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {entry.tue || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-sm ${
                        entry.wed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {entry.wed || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-sm ${
                        entry.thu
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {entry.thu || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-sm ${
                        entry.fri
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {entry.fri || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-2 py-1 text-sm ${
                        entry.tutorial
                          ? 'bg-blue-100 text-gray-800'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {entry.tutorial || '-'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">
            {t('note')}
          </h3>
          <p className="text-yellow-700">{t('noteDescription')}</p>
        </div>
      </section>
    </div>
  );
}

export default TimetablePage;
