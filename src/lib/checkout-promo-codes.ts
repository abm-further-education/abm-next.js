export type CheckoutPromoType = 'percentage' | 'fixed';

export interface CheckoutPromoDefinition {
  discount: number;
  label: string;
  type: CheckoutPromoType;
  /** When set, the code only applies to these short-course slugs */
  allowedSlugs?: string[];
}

export const CHECKOUT_PROMO_CODES: Record<string, CheckoutPromoDefinition> = {
  ASC10: { discount: 0.1, label: '10% OFF', type: 'percentage' },
  ASC20: { discount: 0.2, label: '20% OFF', type: 'percentage' },
  ELSISABM2025AUG: { discount: 1, label: '100% OFF', type: 'percentage' },
  ELICOS15: { discount: 15, label: '$15 OFF', type: 'fixed' },
  ABM3A25: { discount: 10, label: '$10 OFF', type: 'fixed' },
  ABM4A25: { discount: 20, label: '$20 OFF', type: 'fixed' },
  NMABMSS: { discount: 0.2, label: '20% OFF', type: 'percentage' },
  ABMTEST100: { discount: 1, label: '100% OFF', type: 'percentage' },
  OPENDAY20ABM: {
    discount: 20,
    label: '$20 OFF',
    type: 'fixed',
    allowedSlugs: ['rsa', 'fss'],
  },
};

function discountedPrice(
  basePrice: number,
  discount: number,
  type: CheckoutPromoType
): number {
  if (type === 'percentage') {
    return Math.round(basePrice * (1 - discount));
  }
  return Math.max(0, basePrice - discount);
}

export type CheckoutPromoEvaluation =
  | { kind: 'empty' }
  | { kind: 'invalid' }
  | { kind: 'wrong_course'; message: string }
  | {
      kind: 'applied';
      code: string;
      label: string;
      discount: number;
      discountType: CheckoutPromoType;
      discountedPrice: number;
    };

export function evaluateCheckoutPromotion(
  rawCode: string,
  courseSlug: string,
  basePrice: number
): CheckoutPromoEvaluation {
  const code = rawCode.trim().toUpperCase();
  if (!code) return { kind: 'empty' };

  const def = CHECKOUT_PROMO_CODES[code];
  if (!def) return { kind: 'invalid' };

  if (def.allowedSlugs && !def.allowedSlugs.includes(courseSlug)) {
    return {
      kind: 'wrong_course',
      message:
        'This promotion code is only valid for RSA or FSS courses.',
    };
  }

  return {
    kind: 'applied',
    code,
    label: def.label,
    discount: def.discount,
    discountType: def.type,
    discountedPrice: discountedPrice(basePrice, def.discount, def.type),
  };
}
