'use client';

import React from 'react';
import { COUNTRIES } from '@/lib/countries';

interface CountrySelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function CountrySelectField({
  label,
  value,
  onChange,
}: CountrySelectFieldProps) {
  return (
    <div>
      <label className="block font-semibold mb-4" htmlFor="country-of-birth">
        {label}
      </label>
      <select
        id="country-of-birth"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-10 py-8 text-sm bg-white"
      >
        <option value="">Select a country</option>
        {COUNTRIES.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
