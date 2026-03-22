'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  Upload,
  FileText,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  History,
} from 'lucide-react';

export interface PolicyArchiveListItem {
  id: string;
  filename: string;
  archived_at: string;
}

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
  /** Public site origin e.g. https://www.example.com — for copyable stable links */
  publicSiteOrigin?: string;
  policyArchives?: PolicyArchiveListItem[];
  onSubmit: (formData: FormData) => Promise<{ success: boolean }>;
  onDelete?: () => Promise<{ success: boolean }>;
}

export default function PolicyDocumentForm({
  mode,
  initialData,
  publicSiteOrigin,
  policyArchives = [],
  onSubmit,
  onDelete,
}: PolicyDocumentFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(
    initialData?.description || '',
  );
  const [filename, setFilename] = useState(initialData?.filename || '');
  const [fileUrl, setFileUrl] = useState(initialData?.file_url || '');
  const [displayOrder, setDisplayOrder] = useState(
    initialData?.display_order || 0,
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
            : 'Policy document updated successfully.',
        );
        router.push('/admin/policies');
        router.refresh();
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'An error occurred.',
      );
    } finally {
      setLoading(false);
    }
  };

  const siteBaseForCopy = () =>
    publicSiteOrigin ||
    (typeof window !== 'undefined' ? window.location.origin : '');

  const copyText = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(label);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      window.prompt('Copy this link:', text);
    }
  };

  const handleDelete = async () => {
    if (!onDelete) return;

    const confirmed = window.confirm(
      'Are you sure you want to delete this policy document? This action cannot be undone.',
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
      toast.error(error instanceof Error ? error.message : 'Failed to delete.');
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
        {mode === 'edit' && (
          <p className="text-xs text-gray-600 mb-2 leading-relaxed">
            This is the <span className="font-medium">current</span> file visitors
            see after you save. If you use <span className="font-medium">Replace</span>{' '}
            and then <span className="font-medium">Update Document</span>, today&apos;s
            file is kept as a previous version in the list below.
          </p>
        )}

        {fileUrl ? (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-md">
            <FileText className="w-16 h-16 text-green-600 flex-shrink-0" />
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

      {/* Previous versions (same document — edit only) */}
      {mode === 'edit' && initialData?.id && (
        <div className="rounded-md border border-amber-200 bg-amber-50/90 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <h3 className="text-sm font-semibold text-amber-950">
              Previous versions of this policy
            </h3>
          </div>
          <p className="text-xs text-amber-900/85 leading-relaxed">
            Each row is an older PDF that was replaced by a newer upload. Open or
            copy the link to share that exact file; it stays available but is not
            listed on the public policies page.
          </p>
          {policyArchives.length === 0 ? (
            <p className="text-sm text-amber-900/75 bg-white/60 border border-amber-100 rounded px-3 py-2">
              No previous versions yet. They appear here after you replace the
              PDF and save.
            </p>
          ) : (
            <ul className="space-y-2">
              {policyArchives.map((row) => {
                const path = `/api/policy-documents/${initialData.id}/archive/${row.id}/file`;
                const fullUrl = `${siteBaseForCopy()}${path}`;
                return (
                  <li
                    key={row.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm bg-white border border-amber-100 rounded-md p-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {row.filename}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Replaced{' '}
                        {new Date(row.archived_at).toLocaleString(undefined, {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => copyText(row.id, fullUrl)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs bg-gray-800 text-white rounded-md hover:bg-gray-900"
                      >
                        {copiedKey === row.id ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                        Copy link
                      </button>
                      <a
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-amber-900 border border-amber-300 rounded-md hover:bg-amber-100"
                      >
                        <ExternalLink size={14} />
                        Open PDF
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

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

      {/* Stable public link for current file (edit) */}
      {mode === 'edit' && initialData?.id && (
        <div className="rounded-md border border-blue-200 bg-blue-50/80 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-blue-900">
            Share link for the current PDF
          </h3>
          <p className="text-xs text-blue-900/85 leading-relaxed">
            This address always points at the <span className="font-medium">latest</span>{' '}
            saved file. Prefer it over raw storage URLs (they expire).
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <code className="text-xs bg-white px-2 py-1 rounded border border-blue-100 break-all max-w-full">
              {(publicSiteOrigin || '(your site)') +
                `/api/policy-documents/${initialData.id}/file`}
            </code>
            <button
              type="button"
              onClick={() =>
                copyText(
                  'current',
                  `${siteBaseForCopy()}/api/policy-documents/${initialData.id}/file`
                )
              }
              className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {copiedKey === 'current' ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
              Copy link
            </button>
            <a
              href={`/api/policy-documents/${initialData.id}/file`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-700 hover:underline"
            >
              <ExternalLink size={14} />
              Test
            </a>
          </div>
        </div>
      )}

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
          className="w-16 h-16 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label
          htmlFor="is_active"
          className="text-sm font-medium text-gray-700"
        >
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
