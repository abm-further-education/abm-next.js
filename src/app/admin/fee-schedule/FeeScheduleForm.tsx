'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Plus, Trash2 } from 'lucide-react';
import { createFeeScheduleAction, updateFeeScheduleAction } from './actions';
import type { FeeSchedulePageWithFees } from '@/lib/fee-schedule-db';

interface FeeItem {
  fee_name: string;
  fee_amount: string;
  display_order: number;
}

interface FeeScheduleFormProps {
  initialData?: FeeSchedulePageWithFees;
}

export default function FeeScheduleForm({ initialData }: FeeScheduleFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [year, setYear] = useState(initialData?.year || new Date().getFullYear());
  const [isActive, setIsActive] = useState(initialData?.is_active ?? true);
  const [pageTitle, setPageTitle] = useState(initialData?.page_title || '');
  const [bannerImage, setBannerImage] = useState(initialData?.banner_image || '/fees.png');
  const [bannerTitle, setBannerTitle] = useState(initialData?.banner_title || '');
  const [bannerSubtitle, setBannerSubtitle] = useState(initialData?.banner_subtitle || '');
  const [promotionTitle, setPromotionTitle] = useState(initialData?.promotion_title || '');
  const [promotionDescription, setPromotionDescription] = useState(initialData?.promotion_description || '');
  const [downloadButtonText, setDownloadButtonText] = useState(initialData?.download_button_text || '');
  const [paymentTitle, setPaymentTitle] = useState(initialData?.payment_title || '');
  const [paymentDescription, setPaymentDescription] = useState(initialData?.payment_description || '');
  const [contactText, setContactText] = useState(initialData?.contact_text || '');
  const [contactEmail, setContactEmail] = useState(initialData?.contact_email || '');
  const [instalmentLink, setInstalmentLink] = useState(initialData?.instalment_link || '');
  const [instalmentLinkText, setInstalmentLinkText] = useState(initialData?.instalment_link_text || '');
  const [otherFeesTitle, setOtherFeesTitle] = useState(initialData?.other_fees_title || '');
  const [nonRefundableNote, setNonRefundableNote] = useState(initialData?.non_refundable_note || '');

  const [fees, setFees] = useState<FeeItem[]>(
    initialData?.fee_schedule_fees?.map((f) => ({
      fee_name: f.fee_name,
      fee_amount: f.fee_amount,
      display_order: f.display_order,
    })) || [{ fee_name: '', fee_amount: '', display_order: 1 }]
  );

  const addFee = () => {
    const maxOrder = fees.length > 0 ? Math.max(...fees.map((f) => f.display_order)) : 0;
    setFees([...fees, { fee_name: '', fee_amount: '', display_order: maxOrder + 1 }]);
  };

  const removeFee = (index: number) => {
    if (fees.length <= 1) return;
    setFees(fees.filter((_, i) => i !== index));
  };

  const updateFee = (index: number, field: keyof FeeItem, value: string | number) => {
    const updated = [...fees];
    updated[index] = { ...updated[index], [field]: value };
    setFees(updated);
  };

  const moveFee = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === fees.length - 1)
    )
      return;
    const updated = [...fees];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    const tempOrder = updated[index].display_order;
    updated[index].display_order = updated[swapIndex].display_order;
    updated[swapIndex].display_order = tempOrder;
    [updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]];
    setFees(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const formData = new FormData();
      formData.set('year', year.toString());
      formData.set('is_active', isActive.toString());
      formData.set('page_title', pageTitle);
      formData.set('banner_image', bannerImage);
      formData.set('banner_title', bannerTitle);
      formData.set('banner_subtitle', bannerSubtitle);
      formData.set('promotion_title', promotionTitle);
      formData.set('promotion_description', promotionDescription);
      formData.set('download_button_text', downloadButtonText);
      formData.set('payment_title', paymentTitle);
      formData.set('payment_description', paymentDescription);
      formData.set('contact_text', contactText);
      formData.set('contact_email', contactEmail);
      formData.set('instalment_link', instalmentLink);
      formData.set('instalment_link_text', instalmentLinkText);
      formData.set('other_fees_title', otherFeesTitle);
      formData.set('non_refundable_note', nonRefundableNote);
      formData.set('fees', JSON.stringify(fees));

      if (initialData) {
        await updateFeeScheduleAction(initialData.id, formData);
        toast.success('Fee schedule updated successfully.');
      } else {
        await createFeeScheduleAction(formData);
        toast.success('Fee schedule created successfully.');
      }

      router.push('/admin/fee-schedule');
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to save fee schedule.'
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Basic Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value) || 2026)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
            <input
              type="text"
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Fee Schedule 2026"
              required
            />
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Active</span>
            </label>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Banner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Banner Image Path</label>
            <input
              type="text"
              value={bannerImage}
              onChange={(e) => setBannerImage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="/fees.png"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Banner Title</label>
            <input
              type="text"
              value={bannerTitle}
              onChange={(e) => setBannerTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Fee Schedule 2026"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Banner Subtitle</label>
            <input
              type="text"
              value={bannerSubtitle}
              onChange={(e) => setBannerSubtitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Complete fee information for ABM Further Education"
            />
          </div>
        </div>
      </div>

      {/* Promotion Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Promotion Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Title</label>
            <input
              type="text"
              value={promotionTitle}
              onChange={(e) => setPromotionTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Limited-Time Promotion!"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Description</label>
            <textarea
              value={promotionDescription}
              onChange={(e) => setPromotionDescription(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Promotion description..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Download Button Text</label>
            <input
              type="text"
              value={downloadButtonText}
              onChange={(e) => setDownloadButtonText(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Download Promotion Details"
            />
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Payment Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Title</label>
            <input
              type="text"
              value={paymentTitle}
              onChange={(e) => setPaymentTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Payment Options"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Description</label>
            <textarea
              value={paymentDescription}
              onChange={(e) => setPaymentDescription(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Payment description..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Text</label>
              <input
                type="text"
                value={contactText}
                onChange={(e) => setContactText(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="For enquiries, please contact..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="accounts@abm.edu.au"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instalment Plan Link</label>
              <input
                type="url"
                value={instalmentLink}
                onChange={(e) => setInstalmentLink(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instalment Link Text</label>
              <input
                type="text"
                value={instalmentLinkText}
                onChange={(e) => setInstalmentLinkText(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="View Direct Debit Instalment Plan Details"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fee Items */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {otherFeesTitle || 'Other Fees'}
          </h2>
          <button
            type="button"
            onClick={addFee}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Fee
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input
              type="text"
              value={otherFeesTitle}
              onChange={(e) => setOtherFeesTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Other Fees"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
            <input
              type="text"
              value={nonRefundableNote}
              onChange={(e) => setNonRefundableNote(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="* Non-refundable fees apply..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-600 w-10">#</th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Fee Name</th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Fee Amount</th>
                <th className="px-3 py-2 text-center font-medium text-gray-600 w-28">Order</th>
                <th className="px-3 py-2 text-center font-medium text-gray-600 w-16">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fees.map((fee, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-500">{index + 1}</td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      value={fee.fee_name}
                      onChange={(e) => updateFee(index, 'fee_name', e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Fee name"
                      required
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      value={fee.fee_amount}
                      onChange={(e) => updateFee(index, 'fee_amount', e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="$000"
                      required
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
                        {fee.display_order}
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
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push('/admin/fee-schedule')}
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
