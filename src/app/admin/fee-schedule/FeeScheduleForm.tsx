'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Plus, Trash2 } from 'lucide-react';
import { createFeeScheduleAction, updateFeeScheduleAction } from './actions';
import type {
  FeeSchedulePageWithAllTranslations,
  FeeSchedulePageTranslation,
  FeeScheduleFeeTranslation,
} from '@/lib/fee-schedule-db';

const LOCALES = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'] as const;
const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  kr: '한국어',
  sp: 'Español',
  pt: 'Português',
  jp: '日本語',
  tl: 'Filipino',
  zh: '中文',
  id: 'Bahasa',
};

type PageTransFields = Omit<
  FeeSchedulePageTranslation,
  'id' | 'page_id' | 'locale' | 'created_at' | 'updated_at'
>;

const emptyPageTrans: PageTransFields = {
  page_title: '',
  banner_title: '',
  banner_subtitle: '',
  promotion_title: '',
  promotion_description: '',
  download_button_text: '',
  payment_title: '',
  payment_description: '',
  contact_text: '',
  instalment_link_text: '',
  other_fees_title: '',
  non_refundable_note: '',
};

interface FeeItem {
  display_order: number;
  translations: Record<string, { fee_name: string; fee_amount: string }>;
}

interface FeeScheduleFormProps {
  initialData?: FeeSchedulePageWithAllTranslations;
}

export default function FeeScheduleForm({ initialData }: FeeScheduleFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [activeLocale, setActiveLocale] = useState<string>('en');

  // Structural (non-translatable) fields
  const [year, setYear] = useState(
    initialData?.year || new Date().getFullYear(),
  );
  const [isActive, setIsActive] = useState(initialData?.is_active ?? true);
  const [bannerImage, setBannerImage] = useState(
    initialData?.banner_image || '/fees.png',
  );
  const [contactEmail, setContactEmail] = useState(
    initialData?.contact_email || '',
  );
  const [instalmentLink, setInstalmentLink] = useState(
    initialData?.instalment_link || '',
  );

  // Build page translations map
  const buildPageTransMap = (): Record<string, PageTransFields> => {
    const map: Record<string, PageTransFields> = {};
    for (const locale of LOCALES) {
      const existing = initialData?.fee_schedule_page_translations?.find(
        (t) => t.locale === locale,
      );
      if (existing) {
        const {
          id: _id,
          page_id: _pid,
          locale: _l,
          created_at: _ca,
          updated_at: _ua,
          ...rest
        } = existing;
        void _id;
        void _pid;
        void _l;
        void _ca;
        void _ua;
        map[locale] = rest;
      } else {
        map[locale] = { ...emptyPageTrans };
      }
    }
    return map;
  };

  // Build fees from initial data
  const buildFeesFromInitial = (): FeeItem[] => {
    if (!initialData?.fee_schedule_fees) return [];
    return initialData.fee_schedule_fees.map((fee) => {
      const translations: Record<
        string,
        { fee_name: string; fee_amount: string }
      > = {};
      for (const locale of LOCALES) {
        const existing = fee.fee_schedule_fee_translations?.find(
          (t: FeeScheduleFeeTranslation) => t.locale === locale,
        );
        translations[locale] = {
          fee_name: existing?.fee_name || fee.fee_name || '',
          fee_amount: existing?.fee_amount || fee.fee_amount || '',
        };
      }
      return { display_order: fee.display_order, translations };
    });
  };

  const [pageTransMap, setPageTransMap] =
    useState<Record<string, PageTransFields>>(buildPageTransMap);
  const [fees, setFees] = useState<FeeItem[]>(() => {
    const initial = buildFeesFromInitial();
    if (initial.length > 0) return initial;
    const translations: Record<
      string,
      { fee_name: string; fee_amount: string }
    > = {};
    for (const locale of LOCALES) {
      translations[locale] = { fee_name: '', fee_amount: '' };
    }
    return [{ display_order: 0, translations }];
  });

  const updatePageTransField = (
    locale: string,
    field: keyof PageTransFields,
    value: string,
  ) => {
    setPageTransMap((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const currentTrans = pageTransMap[activeLocale] || emptyPageTrans;

  // Fee helpers
  const addFee = () => {
    const translations: Record<
      string,
      { fee_name: string; fee_amount: string }
    > = {};
    for (const locale of LOCALES) {
      translations[locale] = { fee_name: '', fee_amount: '' };
    }
    setFees([...fees, { display_order: fees.length, translations }]);
  };

  const removeFee = (index: number) => {
    if (fees.length <= 1) return;
    setFees(fees.filter((_, i) => i !== index));
  };

  const updateFeeTranslation = (
    fi: number,
    locale: string,
    field: 'fee_name' | 'fee_amount',
    value: string,
  ) => {
    const newFees = [...fees];
    newFees[fi] = {
      ...newFees[fi],
      translations: {
        ...newFees[fi].translations,
        [locale]: { ...newFees[fi].translations[locale], [field]: value },
      },
    };
    setFees(newFees);
  };

  const moveFee = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === fees.length - 1)
    )
      return;
    const updated = [...fees];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    [updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]];
    setFees(updated.map((f, i) => ({ ...f, display_order: i })));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const formData = new FormData();
      formData.set('year', year.toString());
      formData.set('is_active', isActive.toString());
      formData.set('banner_image', bannerImage);
      formData.set('contact_email', contactEmail);
      formData.set('instalment_link', instalmentLink);
      formData.set('page_translations', JSON.stringify(pageTransMap));
      formData.set(
        'fees',
        JSON.stringify(
          fees.map((f, i) => ({
            display_order: i,
            translations: f.translations,
          })),
        ),
      );

      if (initialData) {
        await updateFeeScheduleAction(initialData.id, formData);
        toast.success('Fee schedule updated successfully.');
      } else {
        await createFeeScheduleAction(formData);
        toast.success('Fee schedule created successfully.');
      }

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to save fee schedule.',
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Locale Tabs */}
      <div className="border-b border-gray-200">
        <nav
          className="-mb-px flex space-x-4 overflow-x-auto"
          aria-label="Locale tabs"
        >
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => setActiveLocale(locale)}
              className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
                activeLocale === locale
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {LOCALE_LABELS[locale]}
            </button>
          ))}
        </nav>
      </div>

      {/* Page Settings (non-translatable) */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Page Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value) || 2026)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Banner Image Path
            </label>
            <input
              type="text"
              value={bannerImage}
              onChange={(e) => setBannerImage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="/fees.png"
            />
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="w-16 h-16 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Active</span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="accounts@abm.edu.au"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instalment Plan Link
            </label>
            <input
              type="url"
              value={instalmentLink}
              onChange={(e) => setInstalmentLink(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      {/* Banner & Title — per locale */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Banner & Title — {LOCALE_LABELS[activeLocale]}
        </h2>
        {(
          [
            {
              label: 'Page Title',
              field: 'page_title' as keyof PageTransFields,
            },
            {
              label: 'Banner Title',
              field: 'banner_title' as keyof PageTransFields,
            },
            {
              label: 'Banner Subtitle',
              field: 'banner_subtitle' as keyof PageTransFields,
            },
          ] as const
        ).map(({ label, field }) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="text"
              value={(currentTrans[field] as string) || ''}
              onChange={(e) =>
                updatePageTransField(activeLocale, field, e.target.value)
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Promotion Section — per locale */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Promotion Section — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Promotion Title
          </label>
          <input
            type="text"
            value={currentTrans.promotion_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'promotion_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Promotion Description
          </label>
          <textarea
            value={currentTrans.promotion_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'promotion_description',
                e.target.value,
              )
            }
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Download Button Text
          </label>
          <input
            type="text"
            value={currentTrans.download_button_text || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'download_button_text',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Payment Section — per locale */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Payment Section — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Title
          </label>
          <input
            type="text"
            value={currentTrans.payment_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'payment_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Description
          </label>
          <textarea
            value={currentTrans.payment_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'payment_description',
                e.target.value,
              )
            }
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Text
          </label>
          <input
            type="text"
            value={currentTrans.contact_text || ''}
            onChange={(e) =>
              updatePageTransField(activeLocale, 'contact_text', e.target.value)
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instalment Link Text
          </label>
          <input
            type="text"
            value={currentTrans.instalment_link_text || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'instalment_link_text',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Fee Items — per locale */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Fee Items — {LOCALE_LABELS[activeLocale]}
          </h2>
          <button
            type="button"
            onClick={addFee}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
          >
            <Plus className="w-16 h-16" /> Add Fee
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section Title
            </label>
            <input
              type="text"
              value={currentTrans.other_fees_title || ''}
              onChange={(e) =>
                updatePageTransField(
                  activeLocale,
                  'other_fees_title',
                  e.target.value,
                )
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Other Fees"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Note
            </label>
            <input
              type="text"
              value={currentTrans.non_refundable_note || ''}
              onChange={(e) =>
                updatePageTransField(
                  activeLocale,
                  'non_refundable_note',
                  e.target.value,
                )
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="* Non-refundable fees apply..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-600 w-10">
                  #
                </th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">
                  Fee Name
                </th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">
                  Fee Amount
                </th>
                <th className="px-3 py-2 text-center font-medium text-gray-600 w-28">
                  Order
                </th>
                <th className="px-3 py-2 text-center font-medium text-gray-600 w-16">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fees.map((fee, index) => {
                const ft = fee.translations[activeLocale] || {
                  fee_name: '',
                  fee_amount: '',
                };
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-gray-500">{index + 1}</td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={ft.fee_name}
                        onChange={(e) =>
                          updateFeeTranslation(
                            index,
                            activeLocale,
                            'fee_name',
                            e.target.value,
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Fee name"
                        required={activeLocale === 'en'}
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={ft.fee_amount}
                        onChange={(e) =>
                          updateFeeTranslation(
                            index,
                            activeLocale,
                            'fee_amount',
                            e.target.value,
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="$000"
                        required={activeLocale === 'en'}
                      />
                    </td>
                    <td className="px-3 py-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => moveFee(index, 'up')}
                          disabled={index === 0}
                          className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                        >
                          &#9650;
                        </button>
                        <span className="text-xs text-gray-500 w-6 text-center">
                          {index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => moveFee(index, 'down')}
                          disabled={index === fees.length - 1}
                          className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                        >
                          &#9660;
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => removeFee(index)}
                        disabled={fees.length <= 1}
                        className="p-1 text-red-400 hover:text-red-600 disabled:opacity-30"
                      >
                        <Trash2 className="w-16 h-16" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className="px-6 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {saving
            ? 'Saving...'
            : initialData
              ? 'Update Fee Schedule'
              : 'Create Fee Schedule'}
        </button>
      </div>
    </form>
  );
}
