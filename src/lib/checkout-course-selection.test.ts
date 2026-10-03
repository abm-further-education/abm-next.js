import { describe, expect, it } from 'vitest';
import {
  CHECKOUT_SURCHARGE_RATE,
  courseCheckoutAppliesSurcharge,
  getCheckoutPayableAmount,
} from './checkout-course-selection';

describe('checkout surcharge', () => {
  it('does not apply surcharge to RSA or FSS', () => {
    expect(courseCheckoutAppliesSurcharge('rsa')).toBe(false);
    expect(courseCheckoutAppliesSurcharge('fss')).toBe(false);
    expect(getCheckoutPayableAmount('rsa', 210)).toBe(210);
    expect(getCheckoutPayableAmount('fss', 180)).toBe(180);
  });

  it('applies surcharge to other short courses', () => {
    expect(courseCheckoutAppliesSurcharge('barista')).toBe(true);
    expect(getCheckoutPayableAmount('barista', 100)).toBe(
      parseFloat((100 * CHECKOUT_SURCHARGE_RATE).toFixed(2)),
    );
  });
});
