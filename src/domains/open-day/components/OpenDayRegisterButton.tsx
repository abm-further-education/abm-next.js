'use client';

import Button from '@/components/common/Button';
import { OPEN_DAY_REGISTRATION_FORM_URL } from '@/domains/open-day/constants';

type Props = {
  label: string;
  className?: string;
};

export default function OpenDayRegisterButton({ label, className }: Props) {
  return (
    <Button
      className={
        className ??
        'w-full bg-black text-white hover:bg-primary py-14 text-base font-semibold'
      }
      onClick={() => {
        window.open(OPEN_DAY_REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
      }}
    >
      {label}
    </Button>
  );
}
