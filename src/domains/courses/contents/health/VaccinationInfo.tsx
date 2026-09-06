import React from 'react';
import { Syringe, DollarSign, ListOrdered, AlertCircle } from 'lucide-react';

function VaccinationInfo() {
  return (
    <div className="w-full mt-40 mx-auto space-y-32">
      {/* Regarding Vaccinations */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat flex items-center gap-8">
          <Syringe className="w-20 h-20 text-primary shrink-0" />
          Regarding Vaccinations
        </h3>
        <div className="text-sm text-gray-700 space-y-12">
          <p>
            It is mandatory to have received the vaccinations listed below and
            to have the required antibodies before commencing your placement.
          </p>
          <p>
            We recommend bringing the following documents that can prove your
            vaccination history:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Maternal and Child Health Handbook</li>
            <li>
              COVID-19 vaccination certificate (either paper or electronic
              format is acceptable)
            </li>
            <li>
              Hepatitis B vaccination certificate (certificates issued when
              you received group vaccinations at school, etc. are also valid)
            </li>
            <li>
              Hospital health check-up results (if you are a nurse currently
              working at a hospital and have health check-up results that
              include the antibody results listed below, and the results are
              from within the past six months to one year, please bring them
              with you.)
            </li>
          </ul>
          <p>
            Overseas vaccination records issued in English can be used as
            evidence. However, some hospitals may require translated
            documents to be certified before accepting them as evidence.
          </p>
          <p>
            If you need help finding a GP who speaks your language, please
            contact us.
          </p>
          <p>
            This can also help you avoid additional costs for translating
            documents during your medical consultation.
          </p>
        </div>
      </div>

      {/* List of Required Vaccinations */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat">
          List of Required Vaccinations
        </h3>
        <div className="space-y-12 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">
              dTpa (Diphtheria, Tetanus, Pertussis / Whooping Cough)
            </span>
            <br />
            One adult dose within the past 10 years is required. In Japan,
            this vaccination is not routinely given to adults, so many people
            receive an additional dose after arriving in Australia.
          </p>
          <p>
            <span className="font-semibold text-gray-900">Hepatitis B</span>
            <br />
            Three doses of the vaccine plus a blood test showing Anti-HBs ≥ 10
            mIU/mL are required.
          </p>
          <p>
            <span className="font-semibold text-gray-900">
              MMR (Measles, Mumps, Rubella)
            </span>
            <br />
            Two doses at least one month apart, or a positive antibody test
            result, are required.
          </p>
          <p>
            <span className="font-semibold text-gray-900">
              Varicella / Chickenpox
            </span>
            <br />
            Two doses of the vaccine, or antibody results showing immunity,
            are required.
          </p>
          <p>
            <span className="font-semibold text-gray-900">
              Tuberculosis (TB)
            </span>
            <br />
            The requirements vary depending on your country of birth,
            residential history, travel history, etc.
          </p>
          <p>
            <span className="font-semibold text-gray-900">Influenza</span>
            <br />
            As the circulating strains vary from country to country,
            vaccination can be obtained inexpensively at a pharmacy or similar
            after arriving in Australia.
          </p>
        </div>
      </div>

      {/* Regarding Vaccination Costs */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat flex items-center gap-8">
          <DollarSign className="w-20 h-20 text-primary shrink-0" />
          Regarding Vaccination Costs
        </h3>
        <div className="text-sm text-gray-700 space-y-12">
          <p>
            The cost of vaccinations varies greatly depending on each
            individual&apos;s circumstances.
          </p>
          <p>The average cost for students is at least AUD 300.</p>
          <p>
            If you do not have sufficient vaccination records or antibody
            results, the cost may be close to AUD 1,000, so students should
            take this into consideration when preparing their budget.
          </p>
        </div>
      </div>

      {/* Vaccination Process */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat flex items-center gap-8">
          <ListOrdered className="w-20 h-20 text-primary shrink-0" />
          Vaccination Process
        </h3>
        <p className="text-sm text-gray-600 italic mb-12">
          (This is only an example and the actual process may differ.)
        </p>
        <ol className="list-decimal list-inside space-y-8 text-sm text-gray-700">
          <li>
            After arriving in Australia, please visit the clinic you have
            made an appointment with and bring the necessary documents. We
            will provide you with information on how to make the clinic
            appointment after you arrive in Australia.
          </li>
          <li>
            At the initial consultation, you will receive the dTpa
            vaccination and have a blood test to check your antibody levels.
          </li>
          <li>
            You will have another consultation once the blood test results
            are available.
          </li>
          <li>
            After that, if additional vaccinations are required, you will
            receive them as necessary.
          </li>
        </ol>
      </div>

      {/* Additional HSA-related costs */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat">
          Other Requirements & Costs
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto shadow-sm text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  Requirement
                </th>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  Volunteer Cost
                </th>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  Paid Worker / Employment Cost
                </th>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  Additional Details
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-4 py-8 border-b border-gray-200 align-top font-semibold text-gray-900">
                  Working with Children Check (WWCC)
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  Free
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $112 <span className="italic">(NSW pricing)</span>
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  Valid for 5 years. Fees vary by state (e.g., Victoria is
                  ~$136.60).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 border-b border-gray-200 align-top font-semibold text-gray-900">
                  National Police Check
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $25 – $35
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $52 – $77
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  Applying directly via the{' '}
                  <a
                    href="https://www.police.nsw.gov.au/online_services/national_police_checks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-black transition"
                  >
                    NSW Police Force Portal
                  </a>{' '}
                  costs $55.80, while private accredited online providers
                  charge between $52.90 and $76.90.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 border-b border-gray-200 align-top font-semibold text-gray-900">
                  First Aid Course{' '}
                  <span className="italic font-normal">(HLTAID011)</span>
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $80 – $220
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $80 – $220
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  Commercial RTOs (like{' '}
                  <a
                    href="https://www.australiawidefirstaid.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-black transition"
                  >
                    Australia Wide First Aid
                  </a>
                  ) charge $80 – $120, while premium providers like St John
                  Ambulance or the{' '}
                  <a
                    href="https://www.redcross.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-black transition"
                  >
                    Red Cross
                  </a>{' '}
                  charge $195 – $220.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-20 mt-12">
          <div className="flex items-start gap-12">
            <AlertCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
            <p className="text-sm text-gray-700">
              Prices above are indicative only and may change. Please check
              with the relevant provider for current pricing before
              proceeding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaccinationInfo;
