'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Upload, FileText, Trash2 } from 'lucide-react';

interface PolicyDocumentFormProps {
  mode: 'create' | 'edit';
  initialData?: {
    id: string;
    title: string;
    description: string | null;
    filename: string;
    file_url: string;
    display_order: number;
    is_active: boolean;
  };
  onSubmit: (formData: FormData) => Promise<{ success: boolean }>;
  onDelete?: () => Promise<{ success: boolean }>;
}

export default function PolicyDocumentForm({
  mode,
  initialData,
  onSubmit,
  onDelete,
}: PolicyDocumentFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(
    initialData?.description || ''
  );
  const [filename, setFilename] = useState(initialData?.filename || '');
  const [fileUrl, setFileUrl] = useState(initialData?.file_url || '');
  const [displayOrder, setDisplayOrder] = useState(
    initialData?.display_order || 0
  );
  const [isActive, setIsActive] = useState(initialData?.is_active ?? true);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // PDF 파일만 허용
    if (file.type !== 'application/pdf') {
      toast.error('Only PDF files are allowed.');
      return;
    }

    // 파일 크기 제한 (50MB)
    if (file.size > 50 * 1024 * 1024) {
      toast.error('File size must not exceed 50MB.');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', 'policies');

      const res = await fetch('/api/upload-file', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');

      setFileUrl(data.filePath);
      setFilename(file.name);
      toast.success('File uploaded successfully.');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !filename || !fileUrl) {
      toast.error('Please fill in all required fields and upload a file.');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('filename', filename);
      formData.append('file_url', fileUrl);
      formData.append('display_order', displayOrder.toString());
      formData.append('is_active', isActive.toString());

      const result = await onSubmit(formData);
      if (result.success) {
        toast.success(
          mode === 'create'
            ? 'Policy document created successfully.'
            : 'Policy document updated successfully.'
        );
        router.push('/admin/policies');
        router.refresh();
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'An error occurred.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!onDelete) return;

    const confirmed = window.confirm(
      'Are you sure you want to delete this policy document? This action cannot be undone.'
    );
    if (!confirmed) return;

    setLoading(true);
    try {
      const result = await onDelete();
      if (result.success) {
        toast.success('Policy document deleted successfully.');
        router.push('/admin/policies');
        router.refresh();
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to delete.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. International Student Handbook"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Brief description of the document"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          PDF File <span className="text-red-500">*</span>
        </label>

        {fileUrl ? (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-md">
            <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-green-800 truncate">
                {filename}
              </p>
              <p className="text-xs text-green-600 truncate">{fileUrl}</p>
            </div>
            <label className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md cursor-pointer hover:bg-green-700 transition-colors flex-shrink-0">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
              {uploading ? 'Uploading...' : 'Replace'}
            </label>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 mb-3">
              Click to upload or drag and drop a PDF file
            </p>
            <label className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md cursor-pointer hover:bg-blue-700 transition-colors">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
              {uploading ? 'Uploading...' : 'Select PDF File'}
            </label>
          </div>
        )}
      </div>

      {/* File URL (manual input) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          File URL (auto-filled after upload, or enter manually)
        </label>
        <input
          type="text"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="policies/filename.pdf or full URL"
        />
      </div>

      {/* Filename */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Display Filename
        </label>
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. International-student-handbook-V23.2.pdf"
        />
      </div>

      {/* Display Order */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Display Order
        </label>
        <input
          type="number"
          value={displayOrder}
          onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 0)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
        <p className="text-xs text-gray-500 mt-1">
          Lower numbers appear first. Documents with the same order are sorted
          by creation date.
        </p>
      </div>

      {/* Active Status */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="is_active"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
          Active (visible on the public page)
        </label>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading || uploading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? 'Saving...'
              : mode === 'create'
              ? 'Create Document'
              : 'Update Document'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/policies')}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>

        {mode === 'edit' && onDelete && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
