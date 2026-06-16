import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  PDFDocument,
  StandardFonts,
  rgb,
  type PDFPage,
  type PDFFont,
} from 'pdf-lib';

export interface PostPaymentFormPaymentDetails {
  courseSlug?: string;
  courseName?: string;
  selectedDate?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  amountPaid?: number;
}

export interface PostPaymentFormData {
  gender: string;
  completedFoodSafetyUnits: string;
  usi: string;
  streetAddress: string;
  suburb: string;
  state: string;
  postcode: string;
  australianCitizen: string;
  countryOfBirth: string;
  aboriginalOrTorresStraitIslander: string;
  englishProficiency: string;
  hasDisability: string;
  disabilityTypes: string[];
  disabilityOther: string;
  highestCompletedSchoolLevel: string;
  stillAttendingSchool: string;
  highestQualificationCompleted: string;
  currentEmploymentStatus: string;
  mainReasonForCourse: string;
  currentOrFormerAbmStudent: string;
  abmStudentId: string;
  acceptedPrivacyNoticeAndDeclaration: boolean;
  signature: string;
  signatureDate: string;
}

export interface BuildPostPaymentFormPdfInput {
  sessionId: string;
  paymentDetails: PostPaymentFormPaymentDetails;
  formData: PostPaymentFormData;
}

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const PAGE_MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE_MARGIN * 2;
const BODY_FONT_SIZE = 11;
const SMALL_FONT_SIZE = 10;
const LINE_HEIGHT = 16;
const SANITIZED_TEXT_CACHE = new Map<string, string>();
const LOGO_BOX_HEIGHT = 88;
const LOGO_MAX_WIDTH = 240;
const LOGO_MAX_HEIGHT = 54;
const BODY_TEXT_COLOR = rgb(51 / 255, 50 / 255, 50 / 255);

export function formatAudPaymentAmount(amount?: number | null): string | null {
  if (amount == null || Number.isNaN(amount) || amount <= 0) {
    return null;
  }
  return `$${amount.toFixed(2)} AUD`;
}

export function buildPostPaymentPdfTitle(courseName?: string) {
  const normalizedCourseName = (courseName || '')
    .replace(/[^\p{L}\p{N}\p{P}\p{Zs}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!normalizedCourseName) {
    return 'ABM booking form';
  }

  return `${normalizedCourseName} booking form`;
}

export function buildPostPaymentPdfSummaryRows(sessionId: string) {
  void sessionId;
  return [
    {
      label: 'Generated',
      value: new Date().toLocaleString('en-AU'),
    },
  ];
}

function toDisplayValue(value: string | number | boolean | undefined) {
  if (value === undefined || value === '' || value === false) {
    return 'Not provided';
  }
  if (value === true) {
    return 'Yes';
  }
  return String(value);
}

function sanitizePdfText(text: string, font: PDFFont, size: number) {
  const cacheKey = `${size}:${text}`;
  const cached = SANITIZED_TEXT_CACHE.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }

  const normalizedText = text
    .replace(/\u00A0/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/\uFE0F/g, '');

  let sanitized = '';
  for (const char of normalizedText) {
    if (char === '\n' || char === '\r' || char === '\t') {
      sanitized += char;
      continue;
    }

    try {
      font.widthOfTextAtSize(char, size);
      sanitized += char;
    } catch {
      // Drop characters the built-in WinAnsi font cannot encode, such as emoji.
    }
  }

  SANITIZED_TEXT_CACHE.set(cacheKey, sanitized);
  return sanitized;
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const paragraphs = sanitizePdfText(text, font, size).split('\n');
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      lines.push('');
      continue;
    }

    let currentLine = words[0];
    for (let i = 1; i < words.length; i += 1) {
      const nextLine = `${currentLine} ${words[i]}`;
      if (font.widthOfTextAtSize(nextLine, size) <= maxWidth) {
        currentLine = nextLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
  }

  return lines;
}

function drawWrappedText(
  page: PDFPage,
  text: string,
  x: number,
  y: number,
  font: PDFFont,
  size: number,
  maxWidth: number,
  color = BODY_TEXT_COLOR,
) {
  const lines = wrapText(text, font, size, maxWidth);
  lines.forEach((line, index) => {
    page.drawText(line, {
      x,
      y: y - index * LINE_HEIGHT,
      size,
      font,
      color,
    });
  });

  return y - lines.length * LINE_HEIGHT;
}

export async function buildPostPaymentFormPdf({
  sessionId,
  paymentDetails,
  formData,
}: BuildPostPaymentFormPdfInput) {
  const pdfDoc = await PDFDocument.create();
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let cursorY = PAGE_HEIGHT - PAGE_MARGIN;

  const ensureSpace = (requiredHeight: number) => {
    if (cursorY - requiredHeight < PAGE_MARGIN) {
      page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      cursorY = PAGE_HEIGHT - PAGE_MARGIN;
    }
  };

  const drawSectionTitle = (title: string) => {
    cursorY -= 14;
    ensureSpace(44);
    page.drawText(sanitizePdfText(title, boldFont, 14), {
      x: PAGE_MARGIN,
      y: cursorY,
      size: 14,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    cursorY -= 24;
  };

  const drawField = (label: string, value: string) => {
    ensureSpace(40);
    const safeLabel = sanitizePdfText(`${label}:`, boldFont, BODY_FONT_SIZE);
    page.drawText(safeLabel, {
      x: PAGE_MARGIN,
      y: cursorY,
      size: BODY_FONT_SIZE,
      font: boldFont,
      color: BODY_TEXT_COLOR,
    });
    const labelWidth = boldFont.widthOfTextAtSize(safeLabel, BODY_FONT_SIZE);
    cursorY = drawWrappedText(
      page,
      value,
      PAGE_MARGIN + labelWidth + 8,
      cursorY,
      regularFont,
      BODY_FONT_SIZE,
      CONTENT_WIDTH - labelWidth - 8,
    );
    cursorY -= 6;
  };

  page.drawRectangle({
    x: PAGE_MARGIN,
    y: cursorY - LOGO_BOX_HEIGHT + 8,
    width: CONTENT_WIDTH,
    height: LOGO_BOX_HEIGHT,
    color: rgb(0, 0, 0),
  });

  try {
    const logoPath = path.join(process.cwd(), 'public', 'abm_logo.png');
    const logoBytes = await readFile(logoPath);
    const logo = await pdfDoc.embedPng(logoBytes);
    const scale = Math.min(
      LOGO_MAX_WIDTH / logo.width,
      LOGO_MAX_HEIGHT / logo.height,
    );
    const width = logo.width * scale;
    const height = logo.height * scale;

    page.drawImage(logo, {
      x: PAGE_MARGIN + 16,
      y: cursorY - height - 8,
      width,
      height,
    });
  } catch {
    // Keep PDF generation working even if the logo cannot be read.
  }

  cursorY -= LOGO_BOX_HEIGHT + 20;

  page.drawText(
    sanitizePdfText(
      buildPostPaymentPdfTitle(paymentDetails.courseName),
      boldFont,
      16,
    ),
    {
      x: PAGE_MARGIN,
      y: cursorY,
      size: 16,
      font: boldFont,
      color: rgb(0, 0, 0),
    },
  );
  cursorY -= 30;

  const summaryRows = buildPostPaymentPdfSummaryRows(sessionId);
  summaryRows.forEach((row) => drawField(row.label, row.value));

  drawSectionTitle('Payment Details');
  drawField('Student Name', toDisplayValue(paymentDetails.customerName));
  drawField('Course', toDisplayValue(paymentDetails.courseName));
  drawField('Course Slug', toDisplayValue(paymentDetails.courseSlug));
  drawField('Selected Date', toDisplayValue(paymentDetails.selectedDate));
  drawField('Customer Email', toDisplayValue(paymentDetails.customerEmail));
  drawField('Mobile Number', toDisplayValue(paymentDetails.customerPhone));
  drawField(
    'Amount Paid',
    paymentDetails.amountPaid
      ? `$${paymentDetails.amountPaid}`
      : 'Not provided',
  );

  drawSectionTitle('Student Information');
  drawField('Gender', toDisplayValue(formData.gender));
  drawField(
    'Completed SITXFSA005 & SITXFSA006',
    toDisplayValue(formData.completedFoodSafetyUnits),
  );
  drawField('USI', toDisplayValue(formData.usi));
  drawField('Street', toDisplayValue(formData.streetAddress));
  drawField('Suburb', toDisplayValue(formData.suburb));
  drawField('State', toDisplayValue(formData.state));
  drawField('Postcode', toDisplayValue(formData.postcode));
  drawField('Australian Citizen', toDisplayValue(formData.australianCitizen));
  drawField('Country of Birth', toDisplayValue(formData.countryOfBirth));
  drawField(
    'Aboriginal or Torres Strait Islander origin',
    toDisplayValue(formData.aboriginalOrTorresStraitIslander),
  );
  drawField('English Proficiency', toDisplayValue(formData.englishProficiency));
  drawField(
    'Disability or long-term condition',
    toDisplayValue(formData.hasDisability),
  );
  drawField(
    'Disability types',
    formData.disabilityTypes.length > 0
      ? formData.disabilityTypes.join(', ')
      : 'Not provided',
  );
  if (formData.disabilityOther) {
    drawField('Other disability details', formData.disabilityOther);
  }

  drawSectionTitle('Education & Employment');
  drawField(
    'Highest completed school level',
    toDisplayValue(formData.highestCompletedSchoolLevel),
  );
  drawField(
    'Still attending school',
    toDisplayValue(formData.stillAttendingSchool),
  );
  drawField(
    'Highest qualification completed',
    toDisplayValue(formData.highestQualificationCompleted),
  );
  drawField(
    'Current employment status',
    toDisplayValue(formData.currentEmploymentStatus),
  );
  drawField(
    'Main reason for course',
    toDisplayValue(formData.mainReasonForCourse),
  );

  drawSectionTitle('ABM Status & Declaration');
  drawField(
    'Current or former ABM student',
    toDisplayValue(formData.currentOrFormerAbmStudent),
  );
  drawField('ABM Student ID', toDisplayValue(formData.abmStudentId));
  drawField(
    'Accepted privacy notice and declaration',
    formData.acceptedPrivacyNoticeAndDeclaration ? 'Yes' : 'No',
  );
  drawField('Signature Date', toDisplayValue(formData.signatureDate));

  if (formData.signature.startsWith('data:image/')) {
    ensureSpace(180);
    page.drawText(sanitizePdfText('Signature:', boldFont, BODY_FONT_SIZE), {
      x: PAGE_MARGIN,
      y: cursorY,
      size: BODY_FONT_SIZE,
      font: boldFont,
      color: BODY_TEXT_COLOR,
    });
    cursorY -= 18;

    const [, mimeSection = '', base64Data = ''] =
      formData.signature.match(/^data:(image\/[a-zA-Z+.-]+);base64,(.*)$/) ||
      [];

    if (base64Data) {
      const imageBytes = Uint8Array.from(Buffer.from(base64Data, 'base64'));
      const image =
        mimeSection === 'image/jpeg' || mimeSection === 'image/jpg'
          ? await pdfDoc.embedJpg(imageBytes)
          : await pdfDoc.embedPng(imageBytes);

      const maxWidth = 220;
      const maxHeight = 100;
      const scale = Math.min(maxWidth / image.width, maxHeight / image.height);
      const width = image.width * scale;
      const height = image.height * scale;

      page.drawRectangle({
        x: PAGE_MARGIN,
        y: cursorY - maxHeight - 10,
        width: maxWidth + 16,
        height: maxHeight + 16,
        borderColor: rgb(0.8, 0.8, 0.8),
        borderWidth: 1,
      });

      page.drawImage(image, {
        x: PAGE_MARGIN + 8,
        y: cursorY - height - 8,
        width,
        height,
      });

      cursorY -= maxHeight + 28;
    }
  }

  ensureSpace(40);
  page.drawText(
    sanitizePdfText(
      'Generated by ABM short course booking workflow.',
      regularFont,
      SMALL_FONT_SIZE,
    ),
    {
      x: PAGE_MARGIN,
      y: cursorY,
      size: SMALL_FONT_SIZE,
      font: regularFont,
      color: BODY_TEXT_COLOR,
    },
  );

  return pdfDoc.save();
}
