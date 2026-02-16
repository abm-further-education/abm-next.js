'use client';

import Link from 'next/link';
import { SettingsIcon, PencilIcon } from 'lucide-react';
import { useEditMode } from '@/contexts/EditModeContext';

interface AdminBarProps {
  userEmail: string;
}

export default function AdminBar({ userEmail }: AdminBarProps) {
  const editMode = useEditMode();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-bk text-white px-4 py-16 text-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Logged in:</span>
          <span className="font-medium">{userEmail}</span>
          {editMode && (
            <button
              type="button"
              onClick={editMode.toggleEditMode}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                editMode.isEditMode
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <PencilIcon className="w-14 h-14" />
              Edit Mode: {editMode.isEditMode ? 'ON' : 'OFF'}
            </button>
          )}
        </div>
        <Link
          href="/admin"
          className="px-8 py-4 bg-primary hover:bg-white rounded text-white text-xs font-medium transition-colors flex items-center"
        >
          <SettingsIcon className="w-14 h-14 mr-2" />
          Admin Settings
        </Link>
      </div>
    </div>
  );
}
