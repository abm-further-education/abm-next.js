'use client';

import React, { Fragment } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MonitorPlay,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEditMode } from '@/contexts/EditModeContext';
import CourseDetailEditable from './CourseDetailEditable';
import {
  renderCourseDetailDescription,
  titleStyle,
} from './courseDetailRender';
import type { CourseDetailInfo } from '@/types/course';

export const FITNESS_ONLINE_COURSE_IDS = [
  'certificate-iii-in-fitness-online',
  'certificate-iv-in-fitness-online',
] as const;

const LEARNING_PATHWAY_STAGES: Record<
  (typeof FITNESS_ONLINE_COURSE_IDS)[number],
  readonly { stage: number; title: string }[]
> = {
  'certificate-iii-in-fitness-online': [
    { stage: 1, title: 'Industry Foundations' },
    { stage: 2, title: 'Safe Practice & Communication' },
    { stage: 3, title: 'Client Training Skills' },
    { stage: 4, title: 'Group Training & Service' },
  ],
  'certificate-iv-in-fitness-online': [
    { stage: 1, title: 'Personal Training Foundations' },
    { stage: 2, title: 'Specialised Training' },
    { stage: 3, title: 'Strength & Conditioning' },
    { stage: 4, title: 'Advanced Practice' },
  ],
};

const PATHWAY_STEPS: {
  courseId: (typeof FITNESS_ONLINE_COURSE_IDS)[number];
  code: string;
  title: string;
}[] = [
  {
    courseId: 'certificate-iii-in-fitness-online',
    code: 'SIS30321',
    title: 'Certificate III in Fitness (Online)',
  },
  {
    courseId: 'certificate-iv-in-fitness-online',
    code: 'SIS40221',
    title: 'Certificate IV in Fitness (Online)',
  },
];

function sectionDomId(sectionKey: string) {
  return `fitness-online-section-${sectionKey.replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

function LearningPathwayOverview({ courseId }: { courseId?: string }) {
  if (
    courseId !== 'certificate-iii-in-fitness-online' &&
    courseId !== 'certificate-iv-in-fitness-online'
  ) {
    return null;
  }
  const stages = LEARNING_PATHWAY_STAGES[courseId];

  return (
    <div
      className="mb-10 md:mb-12 py-10"
      aria-labelledby="learning-pathway-overview-heading"
    >
      <h2
        id="learning-pathway-overview-heading"
        className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6 md:mb-8 md:text-left font-[family-name:var(--font-montserrat)]"
      >
        Learning pathway overview
      </h2>

      {/* Mobile / narrow: vertical flow with arrow connectors */}
      <ol className="relative md:hidden space-y-0 list-none pl-0 pt-6 md:pt-0">
        {stages.map((item, index) => (
          <li key={item.stage} className="relative flex gap-12">
            <div className="flex w-9 shrink-0 flex-col items-center">
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-primary bg-primary text-xs font-bold text-white tabular-nums">
                {item.stage}
              </span>
              {index < stages.length - 1 ? (
                <span
                  className="my-1 flex min-h-10 flex-1 flex-col items-center gap-0.5 py-1"
                  aria-hidden
                >
                  <span className="h-full w-px flex-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 min-h-8" />
                  {/* <ChevronDown
                    className="h-5 w-5 shrink-0 text-primary"
                    strokeWidth={2.5}
                  /> */}
                </span>
              ) : null}
            </div>
            <div className="min-w-0 pb-8 last:pb-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                Stage {item.stage}
              </p>
              <p className="mt-0.5 text-sm font-bold leading-snug text-neutral-900">
                {item.title}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal pipeline with arrow-shaped connectors */}
      <ol className="hidden md:flex list-none flex-row flex-nowrap items-stretch overflow-x-auto pb-2 pl-0 [scrollbar-width:thin]">
        {stages.map((item, index) => (
          <Fragment key={item.stage}>
            <li className="flex min-w-[148px] shrink-0 flex-[1_1_0] flex-col justify-center border-2 border-primary/25 bg-gradient-to-b from-white to-neutral-50/80 px-3 py-4 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-primary">
                Stage {item.stage}
              </span>
              <span className="mt-1.5 text-sm font-bold leading-tight text-neutral-900">
                {item.title}
              </span>
            </li>
            {index < stages.length - 1 ? (
              <li
                className="flex shrink-0 items-center justify-center self-center"
                aria-hidden
              >
                <ArrowRight
                  className="h-24 w-24 shrink-0 text-primary"
                  strokeWidth={2.25}
                />
              </li>
            ) : null}
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

interface FitnessOnlineCourseDetailProps {
  courseInfo: CourseDetailInfo;
  courseId?: string;
}

export default function FitnessOnlineCourseDetail({
  courseInfo,
  courseId,
}: FitnessOnlineCourseDetailProps) {
  const t = useTranslations('courseDetail');
  const params = useParams();
  const editMode = useEditMode();
  let locale = 'en';
  if (params?.locale) {
    locale = Array.isArray(params.locale) ? params.locale[0] : params.locale;
  }

  if (editMode?.isEditMode && courseId) {
    return (
      <CourseDetailEditable
        courseId={courseId}
        locale={locale}
        courseInfo={courseInfo}
      />
    );
  }

  const sections = Object.entries(courseInfo).filter(
    ([key]) => !key.startsWith('courseStructure') && key !== 'faq',
  );

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50/90 via-white to-gray-50/80">
      <div className="max-w-[1600px] mx-auto px-20 md:px-80">
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-orange-50 px-12 py-1.5 text-xs font-medium text-orange-800 mb-4">
            <MonitorPlay className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>100% online</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
            {t('title')}
          </h1>
        </div>

        <div className="mb-12 md:mb-14 py-10">
          <p className="font-semibold uppercase tracking-wider text-neutral-500 mb-4 font-[family-name:var(--font-montserrat)]">
            Your online pathway
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
            {PATHWAY_STEPS.map((step, index) => {
              const isCurrent = courseId === step.courseId;
              const href = `/${locale}/fitness-instructor-personal-trainer-courses/${step.courseId}`;

              const card = (
                <div
                  className={cn(
                    'flex h-full flex-1 flex-col border p-12',
                    isCurrent
                      ? 'border-red-300 bg-gradient-to-br from-red-50/80 to-white ring-2 ring-orange-200/80'
                      : 'border-gray-200/90 bg-white hover:border-gray-300',
                  )}
                >
                  <div className="mb-1 text-sm font-semibold text-neutral-700">
                    {step.code}
                  </div>
                  <div className="font-bold text-neutral-900 leading-snug">
                    {step.title}
                  </div>
                  {isCurrent ? (
                    <span className="mt-3 inline-flex w-fit items-center rounded-md bg-primary px-6 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      Current page
                    </span>
                  ) : (
                    <span className="mt-3 text-xs text-neutral-500">
                      View this course
                    </span>
                  )}
                </div>
              );

              return (
                <Fragment key={step.courseId}>
                  {index > 0 && (
                    <>
                      <div
                        className="hidden items-center justify-center px-1 text-gray-300 md:flex"
                        aria-hidden
                      >
                        <ChevronRight className="h-6 w-6" />
                      </div>
                      <div
                        className="flex items-center justify-center py-0.5 text-gray-300 md:hidden"
                        aria-hidden
                      >
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </>
                  )}
                  {isCurrent ? (
                    <div className="min-w-0 flex-1">{card}</div>
                  ) : (
                    <Link
                      href={href}
                      className="min-w-0 flex-1 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                      {card}
                    </Link>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

        <LearningPathwayOverview courseId={courseId} />

        <div className="xl:grid xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-12 xl:items-start">
          <nav
            className="mb-10 hidden xl:block"
            aria-label="Course detail sections"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              On this page
            </p>
            <ul className="space-y-1.5 border-l-2 border-gray-200 pl-3">
              {sections.map(([sectionKey, sectionData]) => {
                const id = sectionDomId(sectionKey);
                return (
                  <li
                    key={sectionKey}
                    className="flex items-center gap-2 text-xs"
                  >
                    <ChevronRight className="h-14 w-14" />
                    <a
                      href={`#${id}`}
                      className="block py-1 text-left text-sm text-neutral-600 hover:text-primary leading-snug transition-all hover:underline"
                    >
                      {sectionData.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-5 md:space-y-6 min-w-0">
            {sections.map(([sectionKey, sectionData]) => {
              const id = sectionDomId(sectionKey);
              return (
                <article
                  key={sectionKey}
                  id={id}
                  className="scroll-mt-24 p-5 sm:p-7 md:p-8"
                >
                  <h3
                    className={cn(
                      titleStyle,
                      'text-base md:text-lg text-neutral-900 mb-4 md:mb-5',
                    )}
                  >
                    {sectionData.title}
                  </h3>
                  <div className="min-w-0 [&_a]:break-words [&_table]:max-w-full">
                    {renderCourseDetailDescription(sectionData.description)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function isFitnessOnlineCourseDetail(id: string): boolean {
  return (
    id === 'certificate-iii-in-fitness-online' ||
    id === 'certificate-iv-in-fitness-online'
  );
}
