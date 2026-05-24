import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CountrySelectField from './CountrySelectField';

describe('CountrySelectField', () => {
  it('renders a select with common countries including Australia', () => {
    render(
      <CountrySelectField
        label="Country of Birth"
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText('Country of Birth')).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Australia' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'South Korea' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBeGreaterThan(150);
  });
});
