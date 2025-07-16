import { useEffect, useState } from 'react';

export default function CheckEmoji() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setChecked(true), 300); // optional delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-80 h-80 flex items-center justify-center">
      <svg
        className="w-80 h-80 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
        <path
          d="M6 12l4 4 8-8"
          className={`stroke-current ${checked ? 'animate-draw' : 'opacity-0'}`}
        />
      </svg>

      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dasharray: 0 100;
          }
          to {
            stroke-dasharray: 24 100;
          }
        }

        .animate-draw {
          stroke-dasharray: 24 100;
          stroke-dashoffset: 0;
          animation: draw 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
