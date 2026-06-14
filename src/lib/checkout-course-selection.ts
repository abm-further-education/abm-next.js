export const CHECKOUT_COURSE_SELECTION_OPTIONS = [
  { id: 'rsa', label: 'NSW Responsible Service of Alcohol (RSA)' },
  { id: 'fss-first-time', label: 'NSW Food Safety Supervisor (First Time)' },
  {
    id: 'fss-recertification',
    label: 'NSW Food Safety Supervisor (Recertification)',
  },
] as const;

export const CHECKOUT_COURSE_PRICE_MAP: Record<string, number> = {
  rsa: 210,
  'fss-first-time': 180,
  'fss-recertification': 110,
};

export function buildCheckoutCourseDisplayName(
  selectedCourseIds: string[],
  fallbackTitle?: string,
): string {
  const labels = selectedCourseIds.flatMap((id) => {
    const option = CHECKOUT_COURSE_SELECTION_OPTIONS.find(
      (entry) => entry.id === id,
    );
    return option ? [option.label] : [];
  });

  if (labels.length > 0) {
    return labels.join(' + ');
  }

  const fallback = fallbackTitle?.trim();
  if (fallback && fallback !== 'ABM Short Course Bundle') {
    return fallback;
  }

  return fallback || 'Short course';
}
