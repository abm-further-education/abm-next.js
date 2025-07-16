import Banner from '@/components/common/Banner';

type Term = {
  label: string;
  date: string;
};

type YearCalendar = {
  year: number;
  terms: Term[];
};

const calendars: YearCalendar[] = [
  {
    year: 2025,
    terms: [
      { label: 'Term 1 Intake 1', date: '06 Jan – 09 Feb' },
      { label: 'Term 1 Intake 2', date: '10 Feb – 16 Mar' },
      { label: 'Holiday 1', date: '17 Mar – 06 Apr' },
      { label: 'Term 2 Intake 1', date: '07 Apr – 11 May' },
      { label: 'Term 2 Intake 2', date: '12 May – 15 Jun' },
      { label: 'Holiday 2', date: '16 Jun – 06 Jul' },
      { label: 'Term 3 Intake 1', date: '07 Jul – 10 Aug' },
      { label: 'Term 3 Intake 2', date: '11 Aug – 14 Sep' },
      { label: 'Holiday 3', date: '15 Sep – 05 Oct' },
      { label: 'Term 4 Intake 1', date: '06 Oct – 09 Nov' },
      { label: 'Term 4 Intake 2', date: '10 Nov – 14 Dec' },
      { label: 'Christmas Holiday', date: '15 Dec – 04 Jan 2026' },
    ],
  },
  {
    year: 2026,
    terms: [
      { label: 'Term 1 Intake 1', date: '05 Jan – 08 Feb' },
      { label: 'Term 1 Intake 2', date: '09 Feb – 15 Mar' },
      { label: 'Holiday 1', date: '16 Mar – 05 Apr' },
      { label: 'Term 2 Intake 1', date: '06 Apr – 10 May' },
      { label: 'Term 2 Intake 2', date: '11 May – 14 Jun' },
      { label: 'Holiday 2', date: '15 Jun – 05 Jul' },
      { label: 'Term 3 Intake 1', date: '06 Jul – 09 Aug' },
      { label: 'Term 3 Intake 2', date: '10 Aug – 13 Sep' },
      { label: 'Holiday 3', date: '14 Sep – 04 Oct' },
      { label: 'Term 4 Intake 1', date: '05 Oct – 08 Nov' },
      { label: 'Term 4 Intake 2', date: '09 Nov – 13 Dec' },
      { label: 'Christmas Holiday', date: '14 Dec – 08 Jan 2027' },
    ],
  },
  {
    year: 2027,
    terms: [
      { label: 'Term 1 Intake 1', date: '11 Jan – 14 Feb' },
      { label: 'Term 1 Intake 2', date: '15 Feb – 21 Mar' },
      { label: 'Holiday 1', date: '22 Mar – 11 Apr' },
      { label: 'Term 2 Intake 1', date: '12 Apr – 16 May' },
      { label: 'Term 2 Intake 2', date: '17 May – 20 Jun' },
      { label: 'Holiday 2', date: '21 Jun – 11 Jul' },
      { label: 'Term 3 Intake 1', date: '12 Jul – 15 Aug' },
      { label: 'Term 3 Intake 2', date: '16 Aug – 19 Sep' },
      { label: 'Holiday 3', date: '20 Sep – 10 Oct' },
      { label: 'Term 4 Intake 1', date: '11 Oct – 14 Nov' },
      { label: 'Term 4 Intake 2', date: '15 Nov – 19 Dec' },
      { label: 'Christmas Holiday', date: '20 Dec – 09 Jan 2028' },
    ],
  },
];

export default function AcademicCalendar() {
  return (
    <section className="">
      <Banner
        slides={[
          {
            imgPath: '/academic_calendar.png',
            title: 'Academic Calendar',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/70 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <h2 className="text-3xl font-bold mb-10 text-center mt-100">
        Academic Calendar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-32 px-16 max-w-7xl mx-auto">
        {calendars.map((calendar) => (
          <div key={calendar.year} className="bg-white p-14">
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              {calendar.year}
            </h3>
            <table className="w-full text-sm">
              <tbody>
                {calendar.terms.map((term, i) => (
                  <tr key={i} className="border-b border-gray-100 py-6">
                    <td className="py-3 pr-4 font-medium text-gray-700">
                      {term.label}
                    </td>
                    <td className="py-1 text-gray-500">{term.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
