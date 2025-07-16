import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts markdown-style bold syntax (**text**) to HTML strong tags
 * @param text - The text containing markdown bold syntax
 * @returns JSX elements with strong tags
 */
export function parseBoldText(text: string): React.ReactNode[] {
  // First split by <br /> tags to preserve them
  const brParts = text.split(/(<br\s*\/?>)/g);

  return brParts
    .map((brPart, brIndex) => {
      if (brPart.match(/<br\s*\/?>/)) {
        // Return the <br /> tag as is
        return React.createElement('br', { key: `br-${brIndex}` });
      }

      // Then split by bold markers
      const parts = brPart.split(/(\*\*.*?\*\*)/g);

      return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Remove the ** markers and wrap in strong tag
          const boldText = part.slice(2, -2);
          return React.createElement(
            'strong',
            { key: `${brIndex}-${index}` },
            boldText
          );
        }
        return part;
      });
    })
    .flat();
}
