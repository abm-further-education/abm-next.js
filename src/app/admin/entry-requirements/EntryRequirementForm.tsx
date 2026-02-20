'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  createEntryRequirementAction,
  updateEntryRequirementAction,
} from './actions';
import type {
  EntryRequirementPageWithAllTranslations,
  EntryRequirementPageTranslation,
  EntryRequirementCourseTranslation,
  EntryRequirementElicosPartnerTranslation,
} from '@/lib/entry-requirement-db';

const LOCALES = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'] as const;
const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  kr: '한국어',
  sp: 'Español',
  pt: 'Português',
  jp: '日本語',
  tl: 'Filipino',
  zh: '中文',
  id: 'Bahasa',
};

type PageTransFields = Omit<
  EntryRequirementPageTranslation,
  'id' | 'page_id' | 'locale' | 'created_at' | 'updated_at'
>;

const emptyPageTrans: PageTransFields = {
  meta_title: '',
  meta_description: '',
  banner_title: '',
  banner_subtitle: '',
  intro_title: '',
  intro_description: '',
  general_requirements_title: '',
  general_cards: [],
  course_table_title: '',
  course_table_description: '',
  english_entry_title: '',
  english_entry_description: '',
  english_evidence_items: [],
  pte_title: '',
  pte_description: '',
  pte_table_note: '',
  pte_scores: [],
  competency_title: '',
  competency_description: '',
  competency_items: [],
  english_note: '',
  elicos_title: '',
  application_process_title: '',
  application_steps: [],
  contact_title: '',
  contact_description: '',
  contact_button_text: '',
};

interface CourseItem {
  display_order: number;
  translations: Record<string, { course_code: string; requirement: string }>;
}

interface PartnerItem {
  partner_url: string;
  display_order: number;
  translations: Record<string, { partner_name: string; courses: string }>;
}

export default function EntryRequirementForm({
  initialData,
}: {
  initialData?: EntryRequirementPageWithAllTranslations;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeLocale, setActiveLocale] = useState<string>('en');

  // Structural fields
  const [isActive, setIsActive] = useState(initialData?.is_active ?? true);
  const [bannerImage, setBannerImage] = useState(
    initialData?.banner_image || '/entry_requirement.png',
  );
  const [contactButtonLink, setContactButtonLink] = useState(
    initialData?.contact_button_link || '/contact',
  );

  // Build page translations map
  const buildPageTransMap = (): Record<string, PageTransFields> => {
    const map: Record<string, PageTransFields> = {};
    for (const locale of LOCALES) {
      const existing = initialData?.entry_requirement_page_translations?.find(
        (t) => t.locale === locale,
      );
      if (existing) {
        const {
          id,
          page_id,
          locale: _l,
          created_at,
          updated_at,
          ...rest
        } = existing;
        void id;
        void page_id;
        void _l;
        void created_at;
        void updated_at;
        map[locale] = rest;
      } else {
        map[locale] = {
          ...emptyPageTrans,
          general_cards: [],
          english_evidence_items: [],
          pte_scores: [],
          competency_items: [],
          application_steps: [],
        };
      }
    }
    return map;
  };

  // Build courses
  const buildCoursesFromInitial = (): CourseItem[] => {
    if (!initialData?.entry_requirement_courses) return [];
    return initialData.entry_requirement_courses.map((course) => {
      const translations: Record<
        string,
        { course_code: string; requirement: string }
      > = {};
      for (const locale of LOCALES) {
        const existing = course.entry_requirement_course_translations?.find(
          (t: EntryRequirementCourseTranslation) => t.locale === locale,
        );
        translations[locale] = {
          course_code: existing?.course_code || '',
          requirement: existing?.requirement || '',
        };
      }
      return { display_order: course.display_order, translations };
    });
  };

  // Build partners
  const buildPartnersFromInitial = (): PartnerItem[] => {
    if (!initialData?.entry_requirement_elicos_partners) return [];
    return initialData.entry_requirement_elicos_partners.map((partner) => {
      const translations: Record<
        string,
        { partner_name: string; courses: string }
      > = {};
      for (const locale of LOCALES) {
        const existing =
          partner.entry_requirement_elicos_partner_translations?.find(
            (t: EntryRequirementElicosPartnerTranslation) =>
              t.locale === locale,
          );
        translations[locale] = {
          partner_name: existing?.partner_name || '',
          courses: existing?.courses || '',
        };
      }
      return {
        partner_url: partner.partner_url,
        display_order: partner.display_order,
        translations,
      };
    });
  };

  const [pageTransMap, setPageTransMap] =
    useState<Record<string, PageTransFields>>(buildPageTransMap);
  const [courses, setCourses] = useState<CourseItem[]>(buildCoursesFromInitial);
  const [partners, setPartners] = useState<PartnerItem[]>(
    buildPartnersFromInitial,
  );

  const updatePageTransField = (
    locale: string,
    field: keyof PageTransFields,
    value: unknown,
  ) => {
    setPageTransMap((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const currentTrans = pageTransMap[activeLocale] || emptyPageTrans;

  // General cards helpers
  const addGeneralCard = () => {
    const cards = [
      ...(currentTrans.general_cards as Array<{
        icon: string;
        title: string;
        description: string;
      }>),
      { icon: '', title: '', description: '' },
    ];
    updatePageTransField(activeLocale, 'general_cards', cards);
  };
  const removeGeneralCard = (index: number) => {
    const cards = (
      currentTrans.general_cards as Array<{
        icon: string;
        title: string;
        description: string;
      }>
    ).filter((_, i) => i !== index);
    updatePageTransField(activeLocale, 'general_cards', cards);
  };
  const updateGeneralCard = (index: number, field: string, value: string) => {
    const cards = [
      ...(currentTrans.general_cards as Array<{
        icon: string;
        title: string;
        description: string;
      }>),
    ];
    cards[index] = { ...cards[index], [field]: value };
    updatePageTransField(activeLocale, 'general_cards', cards);
  };

  // English evidence items helpers
  const addEvidenceItem = () => {
    updatePageTransField(activeLocale, 'english_evidence_items', [
      ...(currentTrans.english_evidence_items as string[]),
      '',
    ]);
  };
  const removeEvidenceItem = (index: number) => {
    updatePageTransField(
      activeLocale,
      'english_evidence_items',
      (currentTrans.english_evidence_items as string[]).filter(
        (_, i) => i !== index,
      ),
    );
  };
  const updateEvidenceItem = (index: number, value: string) => {
    const items = [...(currentTrans.english_evidence_items as string[])];
    items[index] = value;
    updatePageTransField(activeLocale, 'english_evidence_items', items);
  };

  // PTE scores helpers
  const addPteScore = () => {
    updatePageTransField(activeLocale, 'pte_scores', [
      ...(currentTrans.pte_scores as Array<{
        skill: string;
        minimum_score: string;
      }>),
      { skill: '', minimum_score: '' },
    ]);
  };
  const removePteScore = (index: number) => {
    updatePageTransField(
      activeLocale,
      'pte_scores',
      (
        currentTrans.pte_scores as Array<{
          skill: string;
          minimum_score: string;
        }>
      ).filter((_, i) => i !== index),
    );
  };
  const updatePteScore = (index: number, field: string, value: string) => {
    const scores = [
      ...(currentTrans.pte_scores as Array<{
        skill: string;
        minimum_score: string;
      }>),
    ];
    scores[index] = { ...scores[index], [field]: value };
    updatePageTransField(activeLocale, 'pte_scores', scores);
  };

  // Competency items helpers
  const addCompetencyItem = () => {
    updatePageTransField(activeLocale, 'competency_items', [
      ...(currentTrans.competency_items as string[]),
      '',
    ]);
  };
  const removeCompetencyItem = (index: number) => {
    updatePageTransField(
      activeLocale,
      'competency_items',
      (currentTrans.competency_items as string[]).filter((_, i) => i !== index),
    );
  };
  const updateCompetencyItem = (index: number, value: string) => {
    const items = [...(currentTrans.competency_items as string[])];
    items[index] = value;
    updatePageTransField(activeLocale, 'competency_items', items);
  };

  // Application steps helpers
  const addApplicationStep = () => {
    updatePageTransField(activeLocale, 'application_steps', [
      ...(currentTrans.application_steps as Array<{
        step: string;
        title: string;
        description: string;
      }>),
      { step: '', title: '', description: '' },
    ]);
  };
  const removeApplicationStep = (index: number) => {
    updatePageTransField(
      activeLocale,
      'application_steps',
      (
        currentTrans.application_steps as Array<{
          step: string;
          title: string;
          description: string;
        }>
      ).filter((_, i) => i !== index),
    );
  };
  const updateApplicationStep = (
    index: number,
    field: string,
    value: string,
  ) => {
    const steps = [
      ...(currentTrans.application_steps as Array<{
        step: string;
        title: string;
        description: string;
      }>),
    ];
    steps[index] = { ...steps[index], [field]: value };
    updatePageTransField(activeLocale, 'application_steps', steps);
  };

  // Course helpers
  const addCourse = () => {
    const translations: Record<
      string,
      { course_code: string; requirement: string }
    > = {};
    for (const locale of LOCALES) {
      translations[locale] = { course_code: '', requirement: '' };
    }
    setCourses([...courses, { display_order: courses.length, translations }]);
  };
  const removeCourse = (index: number) =>
    setCourses(courses.filter((_, i) => i !== index));
  const updateCourseTranslation = (
    ci: number,
    locale: string,
    field: 'course_code' | 'requirement',
    value: string,
  ) => {
    const newCourses = [...courses];
    newCourses[ci] = {
      ...newCourses[ci],
      translations: {
        ...newCourses[ci].translations,
        [locale]: { ...newCourses[ci].translations[locale], [field]: value },
      },
    };
    setCourses(newCourses);
  };

  // Partner helpers
  const addPartner = () => {
    const translations: Record<
      string,
      { partner_name: string; courses: string }
    > = {};
    for (const locale of LOCALES) {
      translations[locale] = { partner_name: '', courses: '' };
    }
    setPartners([
      ...partners,
      { partner_url: '', display_order: partners.length, translations },
    ]);
  };
  const removePartner = (index: number) =>
    setPartners(partners.filter((_, i) => i !== index));
  const updatePartnerUrl = (index: number, value: string) => {
    const newPartners = [...partners];
    newPartners[index] = { ...newPartners[index], partner_url: value };
    setPartners(newPartners);
  };
  const updatePartnerTranslation = (
    pi: number,
    locale: string,
    field: 'partner_name' | 'courses',
    value: string,
  ) => {
    const newPartners = [...partners];
    newPartners[pi] = {
      ...newPartners[pi],
      translations: {
        ...newPartners[pi].translations,
        [locale]: { ...newPartners[pi].translations[locale], [field]: value },
      },
    };
    setPartners(newPartners);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.set('is_active', isActive.toString());
      formData.set('banner_image', bannerImage);
      formData.set('contact_button_link', contactButtonLink);
      formData.set('page_translations', JSON.stringify(pageTransMap));
      formData.set(
        'courses',
        JSON.stringify(
          courses.map((c, i) => ({
            display_order: i,
            translations: c.translations,
          })),
        ),
      );
      formData.set(
        'partners',
        JSON.stringify(
          partners.map((p, i) => ({
            partner_url: p.partner_url,
            display_order: i,
            translations: p.translations,
          })),
        ),
      );

      if (initialData) {
        await updateEntryRequirementAction(initialData.id, formData);
        toast.success('Entry requirement updated successfully.');
      } else {
        await createEntryRequirementAction(formData);
        toast.success('Entry requirement created successfully.');
      }

      router.push('/admin/entry-requirements');
      router.refresh();
    } catch (error) {
      console.error('Error saving entry requirement:', error);
      toast.error('Failed to save. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Locale Tabs */}
      <div className="border-b border-gray-200">
        <nav
          className="-mb-px flex space-x-4 overflow-x-auto"
          aria-label="Locale tabs"
        >
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => setActiveLocale(locale)}
              className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
                activeLocale === locale
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {LOCALE_LABELS[locale]}
            </button>
          ))}
        </nav>
      </div>

      {/* Structural Fields */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Page Settings</h2>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="h-16 w-16"
          />
          <label className="text-sm font-medium text-gray-700">Active</label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Banner Image
          </label>
          <input
            type="text"
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Button Link
          </label>
          <input
            type="text"
            value={contactButtonLink}
            onChange={(e) => setContactButtonLink(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* Meta & Banner */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Meta & Banner — {LOCALE_LABELS[activeLocale]}
        </h2>
        {[
          { label: 'Meta Title', field: 'meta_title' as keyof PageTransFields },
          {
            label: 'Meta Description',
            field: 'meta_description' as keyof PageTransFields,
          },
          {
            label: 'Banner Title',
            field: 'banner_title' as keyof PageTransFields,
          },
          {
            label: 'Banner Subtitle',
            field: 'banner_subtitle' as keyof PageTransFields,
          },
        ].map(({ label, field }) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="text"
              value={(currentTrans[field] as string) || ''}
              onChange={(e) =>
                updatePageTransField(activeLocale, field, e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
        ))}
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Introduction — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Intro Title
          </label>
          <input
            type="text"
            value={currentTrans.intro_title || ''}
            onChange={(e) =>
              updatePageTransField(activeLocale, 'intro_title', e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Intro Description
          </label>
          <textarea
            value={currentTrans.intro_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'intro_description',
                e.target.value,
              )
            }
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* General Requirements */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          General Requirements — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Section Title
          </label>
          <input
            type="text"
            value={currentTrans.general_requirements_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'general_requirements_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">Cards</h3>
          <button
            type="button"
            onClick={addGeneralCard}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Card
          </button>
        </div>
        {(
          currentTrans.general_cards as Array<{
            icon: string;
            title: string;
            description: string;
          }>
        )?.map((card, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Card #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => removeGeneralCard(i)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
            <input
              placeholder="Icon"
              value={card.icon}
              onChange={(e) => updateGeneralCard(i, 'icon', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              placeholder="Title"
              value={card.title}
              onChange={(e) => updateGeneralCard(i, 'title', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <textarea
              placeholder="Description"
              value={card.description}
              onChange={(e) =>
                updateGeneralCard(i, 'description', e.target.value)
              }
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        ))}
      </div>

      {/* Course Table */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Course Table — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Section Title
          </label>
          <input
            type="text"
            value={currentTrans.course_table_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'course_table_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={currentTrans.course_table_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'course_table_description',
                e.target.value,
              )
            }
            rows={2}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">Courses</h3>
          <button
            type="button"
            onClick={addCourse}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Course
          </button>
        </div>
        {courses.map((course, i) => {
          const ct = course.translations[activeLocale] || {
            course_code: '',
            requirement: '',
          };
          return (
            <div key={i} className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Course #{i + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeCourse(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Course Code
                  </label>
                  <input
                    type="text"
                    value={ct.course_code}
                    onChange={(e) =>
                      updateCourseTranslation(
                        i,
                        activeLocale,
                        'course_code',
                        e.target.value,
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Requirement
                  </label>
                  <input
                    type="text"
                    value={ct.requirement}
                    onChange={(e) =>
                      updateCourseTranslation(
                        i,
                        activeLocale,
                        'requirement',
                        e.target.value,
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* English Entry Requirements */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          English Entry Requirements — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={currentTrans.english_entry_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'english_entry_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={currentTrans.english_entry_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'english_entry_description',
                e.target.value,
              )
            }
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">Evidence Items</h3>
          <button
            type="button"
            onClick={addEvidenceItem}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Item
          </button>
        </div>
        {(currentTrans.english_evidence_items as string[])?.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateEvidenceItem(i, e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => removeEvidenceItem(i)}
              className="text-red-500 text-sm px-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* PTE Requirements */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          PTE Requirements — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={currentTrans.pte_title || ''}
            onChange={(e) =>
              updatePageTransField(activeLocale, 'pte_title', e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={currentTrans.pte_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'pte_description',
                e.target.value,
              )
            }
            rows={2}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Table Note
          </label>
          <input
            type="text"
            value={currentTrans.pte_table_note || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'pte_table_note',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">PTE Scores</h3>
          <button
            type="button"
            onClick={addPteScore}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Score
          </button>
        </div>
        {(
          currentTrans.pte_scores as Array<{
            skill: string;
            minimum_score: string;
          }>
        )?.map((score, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              placeholder="Skill"
              value={score.skill}
              onChange={(e) => updatePteScore(i, 'skill', e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              placeholder="Minimum Score"
              value={score.minimum_score}
              onChange={(e) =>
                updatePteScore(i, 'minimum_score', e.target.value)
              }
              className="w-32 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => removePteScore(i)}
              className="text-red-500 text-sm px-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Competency in English */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Competency in English — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={currentTrans.competency_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'competency_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={currentTrans.competency_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'competency_description',
                e.target.value,
              )
            }
            rows={2}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">
            Competency Items
          </h3>
          <button
            type="button"
            onClick={addCompetencyItem}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Item
          </button>
        </div>
        {(currentTrans.competency_items as string[])?.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateCompetencyItem(i, e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => removeCompetencyItem(i)}
              className="text-red-500 text-sm px-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* English Note */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          English Note — {LOCALE_LABELS[activeLocale]}
        </h2>
        <textarea
          value={currentTrans.english_note || ''}
          onChange={(e) =>
            updatePageTransField(activeLocale, 'english_note', e.target.value)
          }
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      {/* ELICOS Partners */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            ELICOS Partners — {LOCALE_LABELS[activeLocale]}
          </h2>
          <button
            type="button"
            onClick={addPartner}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Partner
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ELICOS Section Title
          </label>
          <input
            type="text"
            value={currentTrans.elicos_title || ''}
            onChange={(e) =>
              updatePageTransField(activeLocale, 'elicos_title', e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        {partners.map((partner, i) => {
          const pt = partner.translations[activeLocale] || {
            partner_name: '',
            courses: '',
          };
          return (
            <div key={i} className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Partner #{i + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removePartner(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
              <input
                placeholder="Partner URL"
                value={partner.partner_url}
                onChange={(e) => updatePartnerUrl(i, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Partner Name
                  </label>
                  <input
                    type="text"
                    value={pt.partner_name}
                    onChange={(e) =>
                      updatePartnerTranslation(
                        i,
                        activeLocale,
                        'partner_name',
                        e.target.value,
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Courses
                  </label>
                  <input
                    type="text"
                    value={pt.courses}
                    onChange={(e) =>
                      updatePartnerTranslation(
                        i,
                        activeLocale,
                        'courses',
                        e.target.value,
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Process */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Application Process — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Section Title
          </label>
          <input
            type="text"
            value={currentTrans.application_process_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'application_process_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">Steps</h3>
          <button
            type="button"
            onClick={addApplicationStep}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Add Step
          </button>
        </div>
        {(
          currentTrans.application_steps as Array<{
            step: string;
            title: string;
            description: string;
          }>
        )?.map((step, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Step #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => removeApplicationStep(i)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
            <input
              placeholder="Step Number"
              value={step.step}
              onChange={(e) => updateApplicationStep(i, 'step', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              placeholder="Title"
              value={step.title}
              onChange={(e) =>
                updateApplicationStep(i, 'title', e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <textarea
              placeholder="Description"
              value={step.description}
              onChange={(e) =>
                updateApplicationStep(i, 'description', e.target.value)
              }
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Contact — {LOCALE_LABELS[activeLocale]}
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Title
          </label>
          <input
            type="text"
            value={currentTrans.contact_title || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'contact_title',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Description
          </label>
          <textarea
            value={currentTrans.contact_description || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'contact_description',
                e.target.value,
              )
            }
            rows={2}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Button Text
          </label>
          <input
            type="text"
            value={currentTrans.contact_button_text || ''}
            onChange={(e) =>
              updatePageTransField(
                activeLocale,
                'contact_button_text',
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push('/admin/entry-requirements')}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}
