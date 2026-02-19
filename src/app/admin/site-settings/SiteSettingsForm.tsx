'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Plus, Trash2, Upload, FileText, ExternalLink } from 'lucide-react';
import {
  createSiteSettingAction,
  updateSiteSettingAction,
  deleteSiteSettingAction,
} from './actions';
import type { SiteSetting } from '@/lib/site-settings-db';

const VALUE_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'url', label: 'URL' },
  { value: 'file', label: 'File (R2)' },
];

const CATEGORIES = [
  { value: 'general', label: 'General' },
  { value: 'navigation', label: 'Navigation' },
  { value: 'contact', label: 'Contact' },
  { value: 'social', label: 'Social Media' },
];

interface SiteSettingsFormProps {
  initialSettings: SiteSetting[];
}

export default function SiteSettingsForm({
  initialSettings,
}: SiteSettingsFormProps) {
  const router = useRouter();
  const [settings, setSettings] = useState<SiteSetting[]>(initialSettings);
  const [saving, setSaving] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [showNewForm, setShowNewForm] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [previewing, setPreviewing] = useState<string | null>(null);

  const [newSetting, setNewSetting] = useState({
    key: '',
    value: '',
    label: '',
    description: '',
    category: 'general',
    value_type: 'text',
  });

  const handlePreview = async (settingId: string, r2Key: string) => {
    setPreviewing(settingId);
    try {
      const res = await fetch(
        `/api/r2/get-url?key=${encodeURIComponent(r2Key)}`
      );
      const data = await res.json();
      if (data.url) {
        window.open(data.url, '_blank');
      } else {
        toast.error('Failed to get file URL');
      }
    } catch {
      toast.error('Failed to get file URL');
    } finally {
      setPreviewing(null);
    }
  };

  const handleFileUpload = async (
    settingId: string,
    file: File,
    settingIndex: number,
  ) => {
    setUploading(settingId);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', 'common');

      const response = await fetch('/api/upload-file', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const data = await response.json();

      const updated = [...settings];
      updated[settingIndex] = {
        ...updated[settingIndex],
        value: data.filePath,
      };
      setSettings(updated);

      toast.success('File uploaded successfully');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to upload file',
      );
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async (setting: SiteSetting) => {
    setSaving(setting.id);
    try {
      const formData = new FormData();
      formData.set('value', setting.value);
      formData.set('label', setting.label);
      formData.set('description', setting.description || '');
      formData.set('category', setting.category);
      formData.set('value_type', setting.value_type);

      await updateSiteSettingAction(setting.id, formData);
      toast.success(`Setting "${setting.label}" saved successfully.`);
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to save setting',
      );
    } finally {
      setSaving(null);
    }
  };

  const handleCreate = async () => {
    if (!newSetting.key || !newSetting.label) {
      toast.error('Key and Label are required.');
      return;
    }

    setSaving('new');
    try {
      const formData = new FormData();
      formData.set('key', newSetting.key);
      formData.set('value', newSetting.value);
      formData.set('label', newSetting.label);
      formData.set('description', newSetting.description);
      formData.set('category', newSetting.category);
      formData.set('value_type', newSetting.value_type);

      await createSiteSettingAction(formData);
      toast.success('New setting created successfully.');
      setShowNewForm(false);
      setNewSetting({
        key: '',
        value: '',
        label: '',
        description: '',
        category: 'general',
        value_type: 'text',
      });
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to create setting',
      );
    } finally {
      setSaving(null);
    }
  };

  const handleDelete = async (setting: SiteSetting) => {
    if (
      !confirm(
        `Are you sure you want to delete "${setting.label}"? This cannot be undone.`,
      )
    ) {
      return;
    }

    setDeleting(setting.id);
    try {
      await deleteSiteSettingAction(
        setting.id,
        setting.value_type,
        setting.value,
      );
      setSettings(settings.filter((s) => s.id !== setting.id));
      toast.success('Setting deleted successfully.');
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to delete setting',
      );
    } finally {
      setDeleting(null);
    }
  };

  const updateField = (
    index: number,
    field: keyof SiteSetting,
    value: string,
  ) => {
    const updated = [...settings];
    updated[index] = { ...updated[index], [field]: value };
    setSettings(updated);
  };

  const groupedSettings = settings.reduce(
    (acc, setting) => {
      const cat = setting.category || 'general';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(setting);
      return acc;
    },
    {} as Record<string, SiteSetting[]>,
  );

  return (
    <div className="space-y-8">
      {Object.entries(groupedSettings).map(([category, catSettings]) => (
        <div key={category}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
            {CATEGORIES.find((c) => c.value === category)?.label || category}
          </h2>
          <div className="space-y-6">
            {catSettings.map((setting) => {
              const idx = settings.findIndex((s) => s.id === setting.id);
              return (
                <div
                  key={setting.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-gray-900">
                        {setting.label}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {setting.key}
                      </div>
                      {setting.description && (
                        <div className="text-sm text-gray-500 mt-1">
                          {setting.description}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {setting.value_type}
                      </span>
                    </div>
                  </div>

                  {setting.value_type === 'file' ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={settings[idx].value}
                          onChange={(e) =>
                            updateField(idx, 'value', e.target.value)
                          }
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="R2 file key (e.g., common/file.pdf)"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition-colors text-sm">
                          <Upload className="w-16 h-16" />
                          {uploading === setting.id
                            ? 'Uploading...'
                            : 'Upload New File'}
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.xlsx,.xls"
                            disabled={uploading === setting.id}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleFileUpload(setting.id, file, idx);
                              }
                            }}
                          />
                        </label>
                        {settings[idx].value && (
                          <button
                            type="button"
                            disabled={previewing === setting.id}
                            onClick={() =>
                              handlePreview(setting.id, settings[idx].value)
                            }
                            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50"
                          >
                            <FileText className="w-16 h-16" />
                            {previewing === setting.id
                              ? 'Opening...'
                              : 'Preview'}
                            <ExternalLink className="w-16 h-16" />
                          </button>
                        )}
                      </div>
                    </div>
                  ) : setting.value_type === 'url' ? (
                    <div className="flex items-center gap-3">
                      <input
                        type="url"
                        value={settings[idx].value}
                        onChange={(e) =>
                          updateField(idx, 'value', e.target.value)
                        }
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://..."
                      />
                      {settings[idx].value && (
                        <a
                          href={settings[idx].value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={settings[idx].value}
                      onChange={(e) =>
                        updateField(idx, 'value', e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}

                  <div className="flex items-center justify-end gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => handleDelete(setting)}
                      disabled={deleting === setting.id}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      {deleting === setting.id ? 'Deleting...' : 'Delete'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSave(settings[idx])}
                      disabled={saving === setting.id}
                      className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {saving === setting.id ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {settings.length === 0 && !showNewForm && (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          No site settings found. Click &quot;Add New Setting&quot; to create
          one.
        </div>
      )}

      {showNewForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Add New Setting
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key *
                </label>
                <input
                  type="text"
                  value={newSetting.key}
                  onChange={(e) =>
                    setNewSetting({
                      ...newSetting,
                      key: e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9_]/g, '_'),
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                  placeholder="e.g., brochure_url"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Label *
                </label>
                <input
                  type="text"
                  value={newSetting.label}
                  onChange={(e) =>
                    setNewSetting({ ...newSetting, label: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., International Student Guide PDF"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={newSetting.description}
                onChange={(e) =>
                  setNewSetting({
                    ...newSetting,
                    description: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="What this setting is used for"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newSetting.category}
                  onChange={(e) =>
                    setNewSetting({ ...newSetting, category: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Value Type
                </label>
                <select
                  value={newSetting.value_type}
                  onChange={(e) =>
                    setNewSetting({
                      ...newSetting,
                      value_type: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {VALUE_TYPES.map((vt) => (
                    <option key={vt.value} value={vt.value}>
                      {vt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Value
              </label>
              <input
                type="text"
                value={newSetting.value}
                onChange={(e) =>
                  setNewSetting({ ...newSetting, value: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Setting value"
              />
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowNewForm(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreate}
                disabled={saving === 'new'}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {saving === 'new' ? 'Creating...' : 'Create Setting'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowNewForm(true)}
          disabled={showNewForm}
          className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Add New Setting
        </button>
      </div>
    </div>
  );
}
