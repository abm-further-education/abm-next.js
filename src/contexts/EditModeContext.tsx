'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface EditModeContextValue {
  isEditMode: boolean;
  setIsEditMode: (value: boolean) => void;
  toggleEditMode: () => void;
  refreshData: () => void;
}

const EditModeContext = createContext<EditModeContextValue | null>(null);

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);

  const refreshData = useCallback(() => {
    router.refresh();
  }, [router]);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => {
      const next = !prev;
      router.refresh();
      return next;
    });
  }, [router]);

  return (
    <EditModeContext.Provider value={{ isEditMode, setIsEditMode, toggleEditMode, refreshData }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const ctx = useContext(EditModeContext);
  return ctx;
}
