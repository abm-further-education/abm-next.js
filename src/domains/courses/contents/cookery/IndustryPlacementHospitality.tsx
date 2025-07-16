import React from 'react';
import Image from 'next/image';
import { parseBoldText } from '@/lib/utils';

// Helper component to render text with bold parsing
const BoldText: React.FC<{ children: string }> = ({ children }) => {
  return <>{parseBoldText(children)}</>;
};

function IndustryPlacementHospitality() {
  return (
    <div>
      <h2 className="text-xl font-bold my-20">
        Take Your Hospitality Career to New Heights with Practical Experience!
      </h2>
      <p>
        <BoldText>
          At ABM Education, we&apos;re committed to providing our Hospitality
          Management students with comprehensive industry experience. Our Work
          Placement program, consisting of 285 hours, is an essential part of
          our curriculum, enabling students to gain hands-on experience in
          real-world hospitality settings.
        </BoldText>
      </p>
      <h2 className="text-xl font-bold my-20">
        Take Your Hospitality Career to New Heights with Practical Experience!
      </h2>
      <p>
        <BoldText>
          As part of your course, you will need to complete a mandatory work
          placement at the end of term 5 and throughout term 6. This is not just
          a requirement, but a chance for you to apply what you have learned in
          the classroom and gain valuable insights into the culinary world. You
          will be able to work the required hours in addition to your student
          visa requirements, so you don&apos;t have to worry about that.
        </BoldText>
      </p>
      <p>
        <BoldText>
          During the work placement period, you will need to complete 60 shifts
          and a total of 30 hours per week. You will also need to complete two
          units of competency that will help you work effectively as a cook and
          coordinate cooking operations. Here is a breakdown of the units and
          the hours you need to complete:
        </BoldText>
      </p>
      <h2 className="text-xl font-bold my-20">Workplace Component:</h2>
      <p>
        <BoldText>
          It’s important to note that a workplace unit is an integral part of
          this qualification. Learners are required to complete tasks outlined
          in the training package elements and performance criteria. ABM
          Education provides a workplace logbook for students to maintain a
          daily record of activities and tasks performed during their work
          placement. This logbook will be closely monitored by ABM’s Workplace
          Assessor during scheduled site visits. Each day, students are required
          to have their daily activities and logbook entries signed by their
          workplace supervisor. This comprehensive workplace component ensures
          that students receive practical training aligned with industry
          standards, preparing them for successful careers in hospitality
          management. Ready to begin your hospitality journey? Enrol now and
          experience the difference with ABM Education!
        </BoldText>
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
                SITHIND008
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                Work effectively in hospitality service
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                57
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                285 hours
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-40">
        <table className="min-w-full table-auto shadow-md rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-9 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
                Qualification Name
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
            {/* Diploma of Hospitality Management Rows */}
            <tr className="bg-white">
              <td
                rowSpan={6}
                className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 font-semibold"
              >
                Diploma of Hospitality Management
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 1
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                <strong>Week 1 – 10: </strong>Theory class + Practical Class
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
                <strong>Week 1 – 10: </strong>Theory class + Practical Class
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
                <strong>Week 1 – 10: </strong>Theory class + Practical Class
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
                <strong>Week 1 – 10: </strong>Theory class + Practical Class
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
                <strong>Week 1 – 10: </strong>1 day per week Face to Face class
                + 3 days per week Work Placement (5 hours x 3 shifts)
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                <strong>
                  SITHIND008 Work effectively in hospitality service
                </strong>
                <br />• Week 1 – 10 = 150 hours
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 6
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                <strong>Week 1 – 9: </strong>1 day per week Face to Face class +
                3 days per week Work Placement (5 hours x 3 shifts)
                <br />
                <strong>Week 10: </strong>Theory + Practical Class
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                <strong>
                  SITHIND008 Work effectively in hospitality service
                </strong>
                <br />• Week 1 – 9 = 135 hours
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
                <strong>
                  60 weeks teaching period + 18 weeks Term break (Total: 78
                  weeks)
                </strong>
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                &nbsp;
              </td>
            </tr>

            {/* Advanced Diploma of Hospitality Management Rows */}
            <tr className="bg-white">
              <td
                rowSpan={2}
                className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 font-semibold"
              >
                Advanced Diploma of Hospitality Management
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 7
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                10 weeks
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                N/A
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                Term 8
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">
                10 weeks
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                N/A
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
                <strong>
                  20 weeks teaching period + 6 weeks Term break (Total: 26
                  weeks)
                </strong>
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                <strong>Total – 0 hours</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <BoldText>
          We encourage you to find your own work placement that suits your
          interests and goals, but we are also here to support you if you need
          any assistance. We have strong connections with various industry
          partners who are always looking for talented and motivated students
          like you.
        </BoldText>
      </p>
      <p className="my-20">
        <BoldText>
          We believe that this work placement is a key component of your course
          that will prepare you for the challenges and opportunities of the
          cookery industry. You will not only improve your culinary skills, but
          also develop your confidence, communication, and teamwork abilities.
          This is your chance to shine and show the world what you can do!
        </BoldText>
      </p>
      <p>
        <BoldText>
          At ABM Further Education, we are proud of our strong connections with
          various industry partners who are always on the lookout for talented
          and motivated students like you. You can work with some of the best
          names in the hospitality industry, such as:
        </BoldText>
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

export default IndustryPlacementHospitality;
