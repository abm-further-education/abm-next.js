'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { CourseUnitGroup } from '@/types/course';

interface UnitsProps {
  id?: string;
  data?: CourseUnitGroup[] | null;
}

// Props are kept so existing callers still type-check; the booklet CTA needs none.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Units(_props: UnitsProps) {
  const t = useTranslations('units');

  return (
    <div className="flex flex-col items-start justify-center gap-20 py-20">
      <Image
        src="/courses/course_guide_cover.webp"
        alt="International Student Course Guide"
        width={2000}
        height={1369}
        className="w-full max-w-[500px] h-auto"
      />
      <h3 className="text-xl font-bold text-gray-800">{t('bookletTitle')}</h3>
      <Link
        href="/contact"
        className="bg-primary-bk text-white px-20 py-10 hover:bg-primary hover:text-white! transition-all font-[family-name:var(--font-montserrat)]"
      >
        {t('bookletButton')}
      </Link>
    </div>
  );
}

export default Units;
