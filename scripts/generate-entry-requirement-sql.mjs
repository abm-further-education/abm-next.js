/**
 * Generates SQL INSERT statements for entry requirement data
 * from /messages/*.json files.
 *
 * Usage:
 *   node scripts/generate-entry-requirement-sql.mjs
 *
 * Copy the output and paste into Supabase SQL Editor to run.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const LOCALES = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];

function esc(str) {
  if (str == null) return "''";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function jsonEsc(obj) {
  return "'" + JSON.stringify(obj).replace(/'/g, "''") + "'::jsonb";
}

// Read all messages
const msgs = {};
for (const locale of LOCALES) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  msgs[locale] = content.courseEntryRequirements || {};
}

const enMsg = msgs['en'];
const courseKeys = Object.keys(enMsg.courses || {});
const partnerKeys = Object.keys(enMsg.elicosPartners || {});

// Start generating SQL
const lines = [];

lines.push('-- ============================================');
lines.push('-- Entry Requirement Seed SQL');
lines.push('-- Generated from /messages/*.json');
lines.push('-- ============================================');
lines.push('-- Run this in Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)');
lines.push('-- This will DELETE existing entry requirement data and re-create it from messages.');
lines.push('-- ============================================');
lines.push('');
lines.push('BEGIN;');
lines.push('');

// 0. Clean up
lines.push('-- 0) Clean up existing data (cascades to translations, courses, partners)');
lines.push('DELETE FROM entry_requirement_pages;');
lines.push('');

// 1. Insert page
lines.push('-- 1) Create entry_requirement_pages');
lines.push(`INSERT INTO entry_requirement_pages (id, is_active, banner_image, contact_button_link)`);
lines.push(`VALUES (`);
lines.push(`  gen_random_uuid(),`);
lines.push(`  true,`);
lines.push(`  '/entry_requirement.png',`);
lines.push(`  '/contact'`);
lines.push(`);`);
lines.push('');

// Get page id for subsequent inserts
lines.push('-- Get the page id');
lines.push(`DO $$`);
lines.push(`DECLARE`);
lines.push(`  v_page_id uuid;`);
lines.push('');

// Course and partner id vars
for (let i = 0; i < courseKeys.length; i++) {
  lines.push(`  v_course_${i}_id uuid;`);
}
for (let i = 0; i < partnerKeys.length; i++) {
  lines.push(`  v_partner_${i}_id uuid;`);
}

lines.push('BEGIN');
lines.push('');
lines.push(`  SELECT id INTO v_page_id FROM entry_requirement_pages ORDER BY created_at DESC LIMIT 1;`);
lines.push('');

// 2. Insert page translations
lines.push('  -- 2) Insert page translations for all locales');
for (const locale of LOCALES) {
  const m = msgs[locale];

  const generalCards = [
    { icon: '', title: m.ageRequirementTitle || '', description: m.ageRequirementDescription || '' },
    { icon: '', title: m.englishRequirementTitle || '', description: m.englishRequirementDescription || '' },
  ];

  const englishEvidenceItems = [
    m.englishEvidence1, m.englishEvidence2, m.englishEvidence3, m.englishEvidence4,
  ].filter(Boolean);

  const pteScores = [
    { skill: m.pteListening || '', minimum_score: m.pteListeningScore || '' },
    { skill: m.pteReading || '', minimum_score: m.pteReadingScore || '' },
    { skill: m.pteSpeaking || '', minimum_score: m.pteSpeakingScore || '' },
    { skill: m.pteWriting || '', minimum_score: m.pteWritingScore || '' },
  ];

  const competencyItems = [
    m.competency1, m.competency2, m.competency3, m.competency4,
  ].filter(Boolean);

  const applicationSteps = [
    { step: '1', title: m.step1Title || '', description: m.step1Description || '' },
    { step: '2', title: m.step2Title || '', description: m.step2Description || '' },
    { step: '3', title: m.step3Title || '', description: m.step3Description || '' },
    { step: '4', title: m.step4Title || '', description: m.step4Description || '' },
  ];

  lines.push(`  -- ${locale}`);
  lines.push(`  INSERT INTO entry_requirement_page_translations (`);
  lines.push(`    page_id, locale, meta_title, meta_description,`);
  lines.push(`    banner_title, banner_subtitle, intro_title, intro_description,`);
  lines.push(`    general_requirements_title, general_cards,`);
  lines.push(`    course_table_title, course_table_description,`);
  lines.push(`    english_entry_title, english_entry_description, english_evidence_items,`);
  lines.push(`    pte_title, pte_description, pte_table_note, pte_scores,`);
  lines.push(`    competency_title, competency_description, competency_items,`);
  lines.push(`    english_note, elicos_title,`);
  lines.push(`    application_process_title, application_steps,`);
  lines.push(`    contact_title, contact_description, contact_button_text`);
  lines.push(`  ) VALUES (`);
  lines.push(`    v_page_id, ${esc(locale)}, ${esc(m.metaTitle)}, ${esc(m.metaDescription)},`);
  lines.push(`    ${esc(m.bannerTitle)}, ${esc(m.bannerSubtitle)}, ${esc(m.introTitle)}, ${esc(m.introDescription)},`);
  lines.push(`    ${esc(m.generalRequirementsTitle)}, ${jsonEsc(generalCards)},`);
  lines.push(`    ${esc(m.courseRequirementsTableTitle)}, ${esc(m.courseRequirementsTableDescription)},`);
  lines.push(`    ${esc(m.englishEntryRequirementsTitle)}, ${esc(m.englishEntryRequirementsDescription)}, ${jsonEsc(englishEvidenceItems)},`);
  lines.push(`    ${esc(m.pteRequirementsTitle)}, ${esc(m.pteRequirementsDescription)}, ${esc(m.pteTableTitle)}, ${jsonEsc(pteScores)},`);
  lines.push(`    ${esc(m.competencyInEnglishTitle)}, ${esc(m.competencyDescription)}, ${jsonEsc(competencyItems)},`);
  lines.push(`    ${esc(m.englishNote)}, ${esc(m.elicosPathwayPartnersTitle)},`);
  lines.push(`    ${esc(m.applicationProcessTitle)}, ${jsonEsc(applicationSteps)},`);
  lines.push(`    ${esc(m.needHelpTitle)}, ${esc(m.needHelpDescription)}, ${esc(m.contactUsButton)}`);
  lines.push(`  );`);
  lines.push('');
}

// 3. Insert courses (with course_code & requirement on main table)
lines.push('  -- 3) Insert courses');
for (let i = 0; i < courseKeys.length; i++) {
  const key = courseKeys[i];
  const enCourse = enMsg.courses[key];
  lines.push(`  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)`);
  lines.push(`  VALUES (v_page_id, ${esc(enCourse?.code || '')}, ${esc(enCourse?.requirement || '')}, ${i})`);
  lines.push(`  RETURNING id INTO v_course_${i}_id;`);
  lines.push('');
}

// 4. Insert course translations
lines.push('  -- 4) Insert course translations');
for (let i = 0; i < courseKeys.length; i++) {
  const key = courseKeys[i];
  for (const locale of LOCALES) {
    const m = msgs[locale];
    const course = (m.courses || {})[key];
    const code = course?.code || enMsg.courses[key]?.code || '';
    const requirement = course?.requirement || enMsg.courses[key]?.requirement || '';
    lines.push(`  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)`);
    lines.push(`  VALUES (v_course_${i}_id, ${esc(locale)}, ${esc(code)}, ${esc(requirement)});`);
  }
  lines.push('');
}

// 5. Insert ELICOS partners (with partner_name & courses on main table)
lines.push('  -- 5) Insert ELICOS partners');
for (let i = 0; i < partnerKeys.length; i++) {
  const key = partnerKeys[i];
  const enPartner = enMsg.elicosPartners[key];
  lines.push(`  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)`);
  lines.push(`  VALUES (v_page_id, ${esc(enPartner?.url || '')}, ${esc(enPartner?.name || '')}, ${esc(enPartner?.courses || '')}, ${i})`);
  lines.push(`  RETURNING id INTO v_partner_${i}_id;`);
  lines.push('');
}

// 6. Insert partner translations
lines.push('  -- 6) Insert ELICOS partner translations');
for (let i = 0; i < partnerKeys.length; i++) {
  const key = partnerKeys[i];
  const enPartner = enMsg.elicosPartners[key];
  for (const locale of LOCALES) {
    const m = msgs[locale];
    const partner = (m.elicosPartners || {})[key];
    const name = partner?.name || enPartner?.name || '';
    const courses = partner?.courses || enPartner?.courses || '';
    lines.push(`  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)`);
    lines.push(`  VALUES (v_partner_${i}_id, ${esc(locale)}, ${esc(name)}, ${esc(courses)});`);
  }
  lines.push('');
}

lines.push('END $$;');
lines.push('');
lines.push('COMMIT;');
lines.push('');
lines.push('-- Done! Check: SELECT * FROM entry_requirement_pages;');

console.log(lines.join('\n'));
