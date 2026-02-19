'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useEditMode } from '@/contexts/EditModeContext';
import {
  updateTrainerAction,
  createTrainerAction,
  deleteTrainerAction,
} from '@/app/admin/trainers/actions';
import { toast } from 'react-toastify';
import { courseCategories } from '@/lib/trainerData';
import type { DbTrainer } from '@/lib/trainer-db';
import { Pencil, Trash2, Plus, X, Save } from 'lucide-react';

interface TrainersEditableProps {
  trainers: DbTrainer[];
}

type CourseCategory =
  | 'cookery'
  | 'business'
  | 'fitness'
  | 'hr'
  | 'project'
  | 'health';

interface TrainerFormState {
  name: string;
  email: string;
  image: string;
  course_category: CourseCategory;
  bio: string;
}

const emptyForm: TrainerFormState = {
  name: '',
  email: '',
  image: '',
  course_category: 'cookery',
  bio: '',
};

function TrainerEditCard({
  trainer,
  onSaved,
  onDeleted,
}: {
  trainer: DbTrainer;
  onSaved: () => void;
  onDeleted: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [form, setForm] = useState<TrainerFormState>({
    name: trainer.name,
    email: trainer.email,
    image: trainer.image,
    course_category: trainer.course_category,
    bio: trainer.bio || '',
  });

  const categoryLabel =
    courseCategories.find((c) => c.value === trainer.course_category)?.label ||
    trainer.course_category;

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateTrainerAction(trainer.id, {
        name: form.name,
        email: form.email,
        image: form.image,
        course_category: form.course_category,
        bio: form.bio || null,
      });
      toast.success('Trainer updated');
      setEditing(false);
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this trainer?')) return;
    setDeleting(true);
    try {
      await deleteTrainerAction(trainer.id);
      toast.success('Trainer deleted');
      onDeleted();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setDeleting(false);
    }
  };

  if (!editing) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden relative group">
        <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setEditing(true)}
            className="p-1.5 bg-white/90 rounded-full shadow hover:bg-amber-50"
          >
            <Pencil className="w-14 h-14 text-amber-600" />
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="p-1.5 bg-white/90 rounded-full shadow hover:bg-red-50"
          >
            <Trash2 className="w-14 h-14 text-red-500" />
          </button>
        </div>

        <div className="relative h-300 w-full">
          <Image
            src={trainer.image}
            alt={trainer.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{trainer.name}</h3>
          <p className="text-sm text-gray-500">{trainer.email}</p>
          <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-gray-100 rounded">
            {categoryLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-amber-900">Edit Trainer</h4>
        <button
          onClick={() => setEditing(false)}
          className="p-1 hover:bg-amber-100 rounded"
        >
          <X className="w-16 h-16" />
        </button>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-0.5">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-0.5">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-0.5">
          Image (R2 key, e.g. trainers/name.png)
        </label>
        <input
          type="text"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-0.5">Category</label>
        <select
          value={form.course_category}
          onChange={(e) =>
            setForm({
              ...form,
              course_category: e.target.value as CourseCategory,
            })
          }
          className="w-full px-3 py-1.5 border rounded text-sm"
        >
          {courseCategories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-0.5">Bio</label>
        <textarea
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
          rows={3}
          className="w-full px-3 py-1.5 border rounded text-sm resize-y"
        />
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-1 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 disabled:opacity-50 text-sm"
        >
          <Save className="w-14 h-14" />
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button
          onClick={() => setEditing(false)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function TrainersEditable({ trainers }: TrainersEditableProps) {
  const editMode = useEditMode();
  const [showAddForm, setShowAddForm] = useState(false);
  const [adding, setAdding] = useState(false);
  const [newTrainer, setNewTrainer] = useState<TrainerFormState>({ ...emptyForm });

  const handleRefresh = () => {
    editMode?.refreshData?.();
  };

  const handleAdd = async () => {
    if (!newTrainer.name || !newTrainer.email || !newTrainer.image) {
      toast.error('Name, email, and image are required');
      return;
    }

    setAdding(true);
    try {
      await createTrainerAction({
        name: newTrainer.name,
        email: newTrainer.email,
        image: newTrainer.image,
        course_category: newTrainer.course_category,
        bio: newTrainer.bio || null,
        courses: null,
        sort_order: trainers.length + 1,
      });
      toast.success('Trainer added');
      setNewTrainer({ ...emptyForm });
      setShowAddForm(false);
      handleRefresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to add trainer');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-amber-900">
            Edit Mode: Trainers ({trainers.length})
          </h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 text-sm"
          >
            <Plus className="w-14 h-14" />
            Add Trainer
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-green-900">New Trainer</h4>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-1 hover:bg-green-100 rounded"
            >
              <X className="w-16 h-16" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-0.5">
                Name *
              </label>
              <input
                type="text"
                value={newTrainer.name}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, name: e.target.value })
                }
                className="w-full px-3 py-1.5 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-0.5">
                Email *
              </label>
              <input
                type="email"
                value={newTrainer.email}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, email: e.target.value })
                }
                className="w-full px-3 py-1.5 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-0.5">
                Image (R2 key) *
              </label>
              <input
                type="text"
                value={newTrainer.image}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, image: e.target.value })
                }
                placeholder="trainers/name.png"
                className="w-full px-3 py-1.5 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-0.5">
                Category
              </label>
              <select
                value={newTrainer.course_category}
                onChange={(e) =>
                  setNewTrainer({
                    ...newTrainer,
                    course_category: e.target.value as CourseCategory,
                  })
                }
                className="w-full px-3 py-1.5 border rounded text-sm"
              >
                {courseCategories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-0.5">Bio</label>
            <textarea
              value={newTrainer.bio}
              onChange={(e) =>
                setNewTrainer({ ...newTrainer, bio: e.target.value })
              }
              rows={2}
              className="w-full px-3 py-1.5 border rounded text-sm resize-y"
            />
          </div>

          <button
            onClick={handleAdd}
            disabled={adding}
            className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 text-sm"
          >
            <Plus className="w-14 h-14" />
            {adding ? 'Adding...' : 'Add Trainer'}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {trainers.map((trainer) => (
          <TrainerEditCard
            key={trainer.id}
            trainer={trainer}
            onSaved={handleRefresh}
            onDeleted={handleRefresh}
          />
        ))}
      </div>
    </div>
  );
}
