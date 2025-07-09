'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';

function FSS() {
  const [type, setType] = useState('');
  return (
    <div className="container max-w-1000 mx-auto py-40">
      <h2 className="text-2xl font-bold mb-20">
        NSW Food Safety Supervisor Certificate (FSS)
      </h2>
      <div className="flex gap-20">
        <Image
          src="/short-course/fss_1.png"
          alt="FSS"
          width={500}
          height={500}
          className="object-cover object-center"
        />
        <div>
          <div className="flex flex-col mb-10">
            <p className="font-semibold">Course Delivery:</p>
            <p>Face to Face. Participants will engage in hands-on activities</p>
          </div>
          <div className="flex gap-10 mb-10">
            <p className="font-semibold">Time:</p>
            <p>9:00am - 5:00pm</p>
          </div>
          <div className="flex flex-col mb-10">
            <p className="font-semibold">Special Offer:</p>
            <p>
              Use code <strong>ABMFSS15</strong> at checkout for a{' '}
              <span className="bg-orange-100 text-orange-700 font-semibold">
                15% discount until 30 June!
              </span>
              (New customers only)
            </p>
          </div>
          <div className="w-full max-w-sm mt-20">
            <label
              htmlFor="course-date"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Choose the course
            </label>
            <select
              id="course-date"
              name="course-date"
              className="w-full px-8 py-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select a type</option>
              <option value="certificate">Certificate</option>
              <option value="recertificate">Recertificate</option>
            </select>
          </div>

          <div className="w-full max-w-sm mt-20">
            <label
              htmlFor="course-date"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Course Date (Face to Face)
            </label>
            <select
              id="course-date"
              name="course-date"
              className="w-full px-8 py-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="">Select a date</option>
              <option value="2024-05-02">2nd May</option>
              <option value="2024-05-30">30th May</option>
              <option value="2024-06-05">5th June</option>
            </select>
            <div className="font-bold text-2xl mt-20 text-primary">
              ${type === 'recertificate' ? 110 : 180}
            </div>
            <Button className="bg-black text-white w-full mt-20">
              Enrol Now
            </Button>
          </div>
        </div>
      </div>
      <p className="mt-20">
        <span className="font-bold">SITSS00069</span> – At ABM Further
        Education, our Food Safety Supervisor (FSS) course equips you with
        essential skills to ensure food safety in your workplace. This course is
        ideal for those working in food-related industries, such as cafes,
        restaurants, and catering services, where high hygiene standards are
        crucial.
      </p>
      <h3 className="mt-20 font-bold text-xl">Key Units</h3>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full table-auto shadow-sm rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                Unit Code & Title
              </th>
              <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-medium">
                SITXFSA005 – Use Hygienic Practices for Food Safety
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Learn hygiene practices and handling food safety to prevent food
                contamination.
              </td>
            </tr>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-medium">
                SITXFSA006 – Participate in Safe Food Handling Practices
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Understand and implement safe food handling to meet legal
                requirements.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-20 font-bold text-xl">Activities</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto shadow-sm rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                Occasion
              </th>
              <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-medium">
                Occasion 1 (A)
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Proper use of uniform, personal protective equipment,
                hand-washing, and hygiene practices.
              </td>
            </tr>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-medium">
                Occasion 2 (B/C)
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Receiving and storing food, and calibrating temperature probes.
              </td>
            </tr>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-medium">
                Occasion 3 (D/E)
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Safe food preparation, display, serving, packaging, and
                transport.
              </td>
            </tr>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-medium">
                Occasion 4 (F/G)
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Cleaning, disposing of food, and hazard identification.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full mt-20 mx-auto rounded-lg bg-white">
        {/* Section 1 */}
        <Disclosure>
          {({ open }) => (
            <div>
              <DisclosureButton className="flex w-full justify-between items-center bg-orange-400 px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                <span className="text-lg">
                  Who Needs NSW Food Safety Supervisor Certificate (FSS)?
                </span>
                <ChevronUpIcon
                  className={`h-24 w-24 transform transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Café and restaurant managers</li>
                  <li>Food business owners</li>
                  <li>Catering staff</li>
                  <li>Supervisors managing food safety practices</li>
                </ul>
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>

        {/* Section 2 */}
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full justify-between items-center bg-orange-400 px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                <span className="text-lg">Why Is It Important?</span>
                <ChevronUpIcon
                  className={`h-24 w-24 transform transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                The{' '}
                <strong>NSW Food Safety Supervisor Certificate (FSS)</strong>{' '}
                helps protect customers and businesses from foodborne illnesses,
                ensuring safe food handling and preparation. It also enhances
                your credibility and shows your commitment to food safety.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default FSS;
