import React from 'react';
import Banner from '@/components/common/Banner';
import PriceListDownloadButton from '@/components/common/PriceListDownloadButton';

export default async function StudentAccommodationPage() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Banner
        slides={[
          {
            imgPath: '/student-accomodation.png',
            title: 'Student Accommodation',
            content:
              'Safe and comfortable accommodation for students and travellers',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      {/* Student Accommodation Information Section */}
      <section className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
        <div className="mb-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-30 text-center">
            Studentstay Australia
          </h1>
          <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">
            Studentstay Australia is a long-standing provider of short-long term
            accommodation for students and travellers. Our houses are located in
            quiet suburban streets close to transport and city, and are equipped
            with all necessities for new arrivals to have a safe and comfortable
            place for those initial weeks/months until they get used to the life
            in Sydney.
          </p>
        </div>

        {/* Price List Section */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-30 gap-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
              2stay OFFSHORE PRICE LIST 2026
            </h2>
            <div className="flex justify-center md:justify-end">
              <PriceListDownloadButton />
            </div>
          </div>

          {/* Main Price Table */}
          <div className="overflow-x-auto mb-40">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="p-15 bg-primary-bk text-white border border-gray-300 text-left font-semibold">
                    Accommodation Type
                  </th>
                  <th className="p-15 bg-primary-bk text-white border border-gray-300 text-center font-semibold">
                    Sydney
                  </th>
                  <th className="p-15 bg-primary-bk text-white border border-gray-300 text-center font-semibold">
                    Melbourne
                  </th>
                  <th className="p-15 bg-primary-bk text-white border border-gray-300 text-center font-semibold">
                    Brisbane
                  </th>
                  <th className="p-15 bg-primary-bk text-white border border-gray-300 text-center font-semibold">
                    Gold Coast
                  </th>
                  <th className="p-15 bg-primary-bk text-white border border-gray-300 text-center font-semibold">
                    Perth
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Studio */}
                <tr>
                  <td className="p-15 bg-primary text-white border border-gray-300 font-semibold">
                    Studio
                    <br />
                    <span className="text-sm font-normal">
                      Up to two guests
                    </span>
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $650 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center bg-gray-50">
                    N/A
                  </td>
                  <td className="p-15 border border-gray-300 text-center bg-gray-50">
                    N/A
                  </td>
                  <td className="p-15 border border-gray-300 text-center bg-gray-50">
                    N/A
                  </td>
                  <td className="p-15 border border-gray-300 text-center bg-gray-50">
                    N/A
                  </td>
                </tr>

                {/* Student Residence - Single Room */}
                <tr>
                  <td className="p-15 bg-primary text-white border border-gray-300 font-semibold">
                    Student Residence
                    <br />
                    <span className="text-sm font-normal">Single room</span>
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $460 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $460 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $460 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $460 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center bg-gray-50">
                    N/A
                  </td>
                </tr>

                {/* Student Residence - Twin Room */}
                <tr>
                  <td className="p-15 bg-primary text-white border border-gray-300 font-semibold">
                    Student Residence
                    <br />
                    <span className="text-sm font-normal">Twin room</span>
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $310 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $310 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $310 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $310 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center bg-gray-50">
                    N/A
                  </td>
                </tr>

                {/* Homestay Plus - Single Room */}
                <tr>
                  <td className="p-15 bg-primary-bk text-white border border-gray-300 font-semibold">
                    Homestay Plus
                    <br />
                    <span className="text-sm font-normal">Single room</span>
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $415 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $415 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $415 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $415 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $415 p/w
                  </td>
                </tr>

                {/* Homestay Plus - Twin Room */}
                <tr>
                  <td className="p-15 bg-primary-bk text-white border border-gray-300 font-semibold">
                    Homestay Plus
                    <br />
                    <span className="text-sm font-normal">Twin room</span>
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $390 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $390 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $390 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $390 p/w
                  </td>
                  <td className="p-15 border border-gray-300 text-center">
                    $390 p/w
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Fees and Information */}
          <div className="grid md:grid-cols-3 gap-20 mb-40">
            {/* Booking and Cleaning Fees */}
            <div className="bg-white p-20 border border-gray-300">
              <h3 className="text-xl font-bold mb-15">
                Booking & Cleaning Fees
              </h3>
              <div className="space-y-10">
                <div>
                  <p className="font-semibold">CozzyStay Booking Fee:</p>
                  <p>$250</p>
                </div>
                <div>
                  <p className="font-semibold">
                    CozzyStay Check-out Cleaning Fee:
                  </p>
                  <p>Student Residence: $90 per person</p>
                  <p>Studio: $150</p>
                </div>
                <div>
                  <p className="font-semibold">Homestay Plus Booking Fee:</p>
                  <p>$340</p>
                </div>
              </div>
            </div>

            {/* Minimum Stay */}
            <div className="bg-primary text-white p-20 border border-gray-300 flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-10 text-center">
                MINIMUM STAY
              </h3>
              <p className="text-3xl font-bold">4 WEEKS</p>
            </div>

            {/* Extra Services */}
            <div className="border border-primary p-20">
              <h3 className="text-xl font-bold mb-15 text-neutral-800">
                Extra Services
              </h3>
              <div className="space-y-10 text-neutral-800">
                <div>
                  <p>Airport transfer: $170 per person</p>
                </div>
                <div>
                  <p>Transfer Brisbane &gt; Gold Coast: $200 per person</p>
                </div>
                <div>
                  <p>CozzyStay Comfort Blanket: $120 per person</p>
                </div>
                <div>
                  <p>Homestay Plus - Special Dietary: $60 p/w</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




