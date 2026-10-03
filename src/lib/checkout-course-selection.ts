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

export const CHECKOUT_SURCHARGE_RATE = 1.0193;

const NO_SURCHARGE_COURSE_SLUGS = new Set(['rsa', 'fss']);

export function courseCheckoutAppliesSurcharge(courseSlug: string): boolean {
  return !NO_SURCHARGE_COURSE_SLUGS.has(courseSlug);
}

export function getCheckoutPayableAmount(
  courseSlug: string,
  discountedPrice: number,
): number {
  const payable = courseCheckoutAppliesSurcharge(courseSlug)
    ? discountedPrice * CHECKOUT_SURCHARGE_RATE
    : discountedPrice;
  return parseFloat(payable.toFixed(2));
}

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
