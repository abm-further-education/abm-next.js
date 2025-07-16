import React from 'react';
import Image from 'next/image';

function IndustryPlacement() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-20">
        Are you ready to take your cookery skills to the next level?
      </h2>
      <p>
        At ABM Further Education, we offer a certificate IV in Kitchen
        Management that combines academic learning with practical experience.
        You will have the opportunity to work in real commercial kitchens, such
        as restaurants, hotels, and aged care facilities, and learn from the
        best in the industry.
      </p>
      <p>
        As part of your course, you will need to complete a mandatory work
        placement at the end of term 5 and throughout term 6. This is not just a
        requirement, but a chance for you to apply what you have learned in the
        classroom and gain valuable insights into the culinary world. You will
        be able to work the required hours in addition to your student visa
        requirements, so you don’t have to worry about that.
      </p>
      <p>
        During the work placement period, you will need to complete 60 shifts
        and a total of 30 hours per week. You will also need to complete two
        units of competency that will help you work effectively as a cook and
        coordinate cooking operations. Here is a breakdown of the units and the
        hours you need to complete:
      </p>
      <div className="overflow-x-auto my-20">
        <table className="min-w-full table-fixed border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Unit Code
              </th>
              <th className="w-1/2 px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Unit Name
              </th>
              <th className="w-1/6 px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Number of Service Periods
              </th>
              <th className="w-1/6 px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Total hours
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                SITHCCC043
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                Work effectively as a cook
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                48
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                288 hours
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800">SITHKOP013</td>
              <td className="px-4 py-3 text-sm text-gray-800">
                Coordinate cooking operations
              </td>
              <td className="px-4 py-3 text-sm text-gray-800">12</td>
              <td className="px-4 py-3 text-sm text-gray-800">72 hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-40">
        <table className="min-w-full table-auto shadow-md rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-9 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Course
              </th>
              <th className="w-1/4 px-4 py-9 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Term
              </th>
              <th className="w-1/4 px-4 py-9 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Learning Method
              </th>
              <th className="w-1/4 px-4 py-9 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Industry Placement Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Certificate IV Rows */}
            <tr className="bg-white">
              <td
                rowSpan={6}
                className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 font-semibold"
              >
                Certificate IV in Kitchen Management
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 1
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Week 1–10: Theory + Practical Class
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                Nil
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 2
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Week 1–10: Theory + Practical Class
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                Nil
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 3
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Week 1–10: Theory + Practical Class
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                Nil
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 4
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Week 1–10: Theory + Practical Class
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                Nil
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 5
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                <strong>Week 9:</strong> Induction & Theory (5h) + Work
                Placement (6h × 5)
                <br />
                <strong>Week 10:</strong> Work Placement (6h × 5)
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                <strong>(SITHCCC043)</strong> Work effectively as a cook
                <br />
                • Week 9 = 30h
                <br />• Week 10 = 30h
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 6
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Week 1–10: Work Placement (6h × 5 shifts)
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                <strong>(SITHCCC043)</strong> Work effectively as a cook: 38 × 6
                = 228h
                <br />
                <strong>(SITHKOP013)</strong> Plan cooking operations: 12 × 6 =
                72h
              </td>
            </tr>
            <tr className="bg-gray-50 font-semibold">
              <td
                colSpan={2}
                className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 text-center"
              >
                Total
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                60 weeks teaching period + 18 weeks break ={' '}
                <strong>78 weeks</strong>
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                <strong>Total: 360 hours</strong>
              </td>
            </tr>

            {/* Diploma of Hospitality Management Rows */}
            <tr className="bg-white">
              <td
                rowSpan={2}
                className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 font-semibold"
              >
                Diploma of Hospitality Management
              </td>
              <td className="px-4 py-2 border border-gray-300">Term 7</td>
              <td className="px-4 py-2 border border-gray-300">10 weeks</td>
              <td className="px-4 py-2 border-b border-gray-300">N/A</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">Term 8</td>
              <td className="px-4 py-2 border border-gray-300">10 weeks</td>
              <td className="px-4 py-2 border-b border-gray-300">N/A</td>
            </tr>
            <tr className="bg-gray-50 font-semibold">
              <td
                colSpan={2}
                className="px-4 py-2 border-b border-gray-300 text-center"
              >
                Total
              </td>
              <td className="px-4 py-2 border border-gray-300">
                20 weeks teaching period + 6 weeks break ={' '}
                <strong>26 weeks</strong>
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                <strong>Total: 0 hours</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        We encourage you to find your own work placement that suits your
        interests and goals, but we are also here to support you if you need any
        assistance. We have strong connections with various industry partners
        who are always looking for talented and motivated students like you.
      </p>
      <p className="my-20">
        We believe that this work placement is a key component of your course
        that will prepare you for the challenges and opportunities of the
        cookery industry. You will not only improve your culinary skills, but
        also develop your confidence, communication, and teamwork abilities.
        This is your chance to shine and show the world what you can do!
      </p>
      <p>
        At ABM Further Education, we are proud of our strong connections with
        various industry partners who are always on the lookout for talented and
        motivated students like you. You can work with some of the best names in
        the hospitality industry, such as:
      </p>

      <ul className="space-y-4 text-gray-800 text-sm leading-relaxed">
        <li>
          <strong className="text-gray-900">Accor</strong>{' '}
          <em className="text-gray-600">(Accor A&amp;R)</em>: Accor is a leading
          multinational hospitality group based in France, specializing in hotel
          and service management. With a diverse portfolio of brands spanning
          luxury to economy, Accor operates globally, providing accommodations
          and related services.
        </li>

        <li>
          <strong className="text-gray-900">AMA Hospitality</strong>: AMA
          Hospitality is a catering and event management company that
          specialises in delivering memorable and personalised experiences to
          their clients.
        </li>

        <li>
          <strong className="text-gray-900">Bills</strong>: Bills is a popular
          restaurant chain that serves fresh and delicious food with a relaxed
          and friendly vibe.
        </li>

        <li>
          <strong className="text-gray-900">Catering HQ</strong>: Catering HQ is
          a food and beverage company that operates in various venues, such as
          clubs, pubs, and function centres.
        </li>

        <li>
          <strong className="text-gray-900">Grand Royale</strong>: Grand Royale
          is a luxury hotel that offers elegant and comfortable accommodation,
          fine dining, and spa facilities.
        </li>

        <li>
          <strong className="text-gray-900">Hurricane’s Grill</strong>:
          Hurricane’s Grill is a steakhouse and bar that serves mouth-watering
          and succulent steaks, ribs, burgers, and salads.
        </li>

        <li>
          <strong className="text-gray-900">ICC Sydney</strong>: The
          International Convention Centre Sydney (ICC Sydney) is Australia’s top
          venue for conventions, exhibitions, and events. Located in Darling
          Harbour, it offers state-of-the-art facilities and versatile event
          spaces with stunning waterfront views. Renowned for sustainability and
          exceptional service, ICC Sydney is perfect for events of all sizes.
          Its prime location provides easy access to Sydney’s main attractions.
        </li>

        <li>
          <strong className="text-gray-900">
            Industry Placement Solutions
          </strong>
          : Industry Placement Solutions is a recruitment and placement agency
          that helps students find suitable and rewarding work placements in the
          hospitality industry.
        </li>

        <li>
          <strong className="text-gray-900">Liverpool Catholic Club</strong>:
          Liverpool Catholic Club is a community club that offers a range of
          entertainment, dining, and leisure options, such as gaming, sports,
          and function rooms.
        </li>

        <li>
          <strong className="text-gray-900">Primi Italian</strong>: Primi
          Italian is a family-owned restaurant that serves authentic and
          delicious Italian cuisine, such as pizza, pasta, and gelato.
        </li>

        <li>
          <strong className="text-gray-900">Kuon Omakase</strong>: Kuon Omakase
          is a Japanese restaurant that offers a unique and exquisite dining
          experience, where the chef prepares and serves a series of dishes
          based on the freshest and finest ingredients available on the day.
        </li>
      </ul>

      <Image
        src="/courses/cookery/partners.png"
        alt="partners"
        width={900}
        height={400}
      />
    </div>
  );
}

export default IndustryPlacement;
