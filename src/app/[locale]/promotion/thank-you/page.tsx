import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import ThankYouPage from '@/domains/promotion/components/ThankYouPage';

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ThankYouPageRoute({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  const searchParamsData = await searchParams;

  // URL에서 폼 데이터 추출
  const formData = {
    date: (searchParamsData.date as string) || '',
    name: (searchParamsData.name as string) || '',
    email: (searchParamsData.email as string) || '',
    phone: (searchParamsData.phone as string) || '',
    howDidYouFindUs: (searchParamsData.howDidYouFindUs as string) || '',
    goal: (searchParamsData.goal as string) || '',
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouPage formData={formData} />
    </Suspense>
  );
}
