-- ============================================
-- Entry Requirement Seed SQL
-- Generated from /messages/*.json
-- ============================================
-- Run this in Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)
-- This will DELETE existing entry requirement data and re-create it from messages.
-- ============================================

BEGIN;

-- 0) Clean up existing data (cascades to translations, courses, partners)
DELETE FROM entry_requirement_pages;

-- 1) Create entry_requirement_pages
INSERT INTO entry_requirement_pages (id, is_active, banner_image, contact_button_link)
VALUES (
  gen_random_uuid(),
  true,
  '/entry_requirement.png',
  '/contact'
);

-- Get the page id
DO $$
DECLARE
  v_page_id uuid;

  v_course_0_id uuid;
  v_course_1_id uuid;
  v_course_2_id uuid;
  v_course_3_id uuid;
  v_course_4_id uuid;
  v_course_5_id uuid;
  v_course_6_id uuid;
  v_course_7_id uuid;
  v_course_8_id uuid;
  v_course_9_id uuid;
  v_course_10_id uuid;
  v_course_11_id uuid;
  v_course_12_id uuid;
  v_course_13_id uuid;
  v_course_14_id uuid;
  v_course_15_id uuid;
  v_course_16_id uuid;
  v_course_17_id uuid;
  v_course_18_id uuid;
  v_partner_0_id uuid;
  v_partner_1_id uuid;
  v_partner_2_id uuid;
  v_partner_3_id uuid;
  v_partner_4_id uuid;
  v_partner_5_id uuid;
  v_partner_6_id uuid;
  v_partner_7_id uuid;
  v_partner_8_id uuid;
  v_partner_9_id uuid;
  v_partner_10_id uuid;
BEGIN

  SELECT id INTO v_page_id FROM entry_requirement_pages ORDER BY created_at DESC LIMIT 1;

  -- 2) Insert page translations for all locales
  -- en
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'en', 'Course Entry Requirements - ABM Further Education', 'Learn about the entry requirements for ABM courses including academic requirements, English language requirements, and application process.',
    'Course Entry Requirements', 'Everything you need to know about enrolling in ABM courses', 'Entry Requirements for ABM Courses', 'To ensure the best learning experience and outcomes, ABM has specific entry requirements for all our courses. These requirements help us maintain high educational standards and ensure students are well-prepared for their studies.',
    'General Requirements', '[{"icon":"","title":"Age Requirement","description":"Students must be at least 18 years of age at the time of course commencement."},{"icon":"","title":"English Language Proficiency","description":"All students must demonstrate English language proficiency to ensure they can successfully complete their studies. This applies to both domestic and international students."}]'::jsonb,
    'Specific Course Entry Requirements', 'Below are the specific entry requirements for each course offered at ABM:',
    'English Entry Requirements', 'Have an IELTS* score of 5.5 with no band less than 5.0 (test results must be no more than 2 years old). English language competence can also be demonstrated through documented evidence of any of the following:', '["Educated for 5 years in an English-speaking country; or","Completed at least 6 months of a Certificate IV level course in an Australian RTO; or","Successful completion of an ABM English Placement Test","Successful completion of an English course with exit level equivalent to IELTS overall 5.5 from one of our ELICOS Pathway partners"]'::jsonb,
    'For PTE', 'Have a PTE score of 45.4 (IELTS 5.5) or higher with no band less than (Listening – 42.7, Reading – 47.9, Speaking – 51, Writing – 42.2)', 'PTE equivalent to 5.5 IELTS per band', '[{"skill":"PTE -A Listening","minimum_score":"42.7"},{"skill":"PTE – A Reading","minimum_score":"47.9"},{"skill":"PTE – A Speaking","minimum_score":"51"},{"skill":"PTE – A Writing","minimum_score":"42.2"}]'::jsonb,
    'Competency in English', 'If one of the following applies, you do not need to provide evidence of an English test score with your visa application:', '["You are enrolled in full-time school studies as a principal course including in a secondary exchange programme, a postgraduate research course, a standalone English Language Intensive Course for Overseas Students (ELICOS), and Foreign Affairs or Defence sponsored students.","You have completed at least five years study in one or more of the following countries: Australia, UK, USA, Canada, New Zealand, South Africa, or the Republic of Ireland.","You are a citizen and hold a passport from UK, USA, Canada, NZ or Republic of Ireland.","In the two years before applying for the student visa, you completed, in Australia and in English language, either the Senior Secondary Certificate of Education or a substantial component of a course leading to a qualification from the Australian Qualifications Framework at the Certificate IV or higher level, while you held a student visa."]'::jsonb,
    '*Note that other English language tests such as PTE and TOEFL can be accepted. Students are required to provide their results so that it can be confirmed they are equivalent to IELTS 5.5.', 'ELICOS Pathway Partners',
    'Application Process', '[{"step":"1","title":"Step 1: Course Selection","description":"Choose your course and check entry requirements."},{"step":"2","title":"Step 2: Document Preparation","description":"Gather required documents and transcripts."},{"step":"3","title":"Step 3: Application Submission","description":"Submit your application with all documents."},{"step":"4","title":"Step 4: Assessment and Offer","description":"Receive assessment results and enrollment offer."}]'::jsonb,
    'Need Help with Your Application?', 'Our friendly admissions team is here to help you through the application process.
Contact us for personalised assistance.', 'Contact Us'
  );

  -- kr
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'kr', '과정 입학 요건 - ABM 고등교육', 'ABM 과정의 입학 요건에 대해 알아보세요. 학업 요건, 영어 요건, 지원 절차를 포함합니다.',
    '과정 입학 요건', 'ABM 과정 등록에 필요한 모든 정보', 'ABM 과정 입학 요건', '최고의 학습 경험과 성과를 보장하기 위해 ABM은 모든 과정에 특정한 입학 요건을 가지고 있습니다. 이러한 요건은 높은 교육 기준을 유지하고 학생들이 학업에 잘 준비되도록 도와줍니다.',
    '일반 요건', '[{"icon":"","title":"연령 요건","description":"학생은 과정 시작 시 최소 18세 이상이어야 합니다. 18세 미만 학생의 경우 부모 동의와 추가 서류가 필요할 수 있습니다."},{"icon":"","title":"영어 능력","description":"모든 학생은 학업을 성공적으로 완료할 수 있도록 영어 능력을 입증해야 합니다. 이는 국내 및 국제 학생 모두에게 적용됩니다."}]'::jsonb,
    '구체적인 과정 입학 요건', '아래는 ABM에서 제공하는 각 과정의 구체적인 입학 요건입니다:',
    '영어 입학 요건', 'IELTS* 점수 5.5 이상 (각 영역 5.0 이상, 시험 결과는 2년 이내여야 함). 영어 능력은 다음 중 하나의 문서화된 증거를 통해 입증할 수도 있습니다:', '["영어권 국가에서 5년간 교육을 받은 경우; 또는","호주 RTO에서 수료증 IV 수준 과정을 최소 6개월 완료한 경우; 또는","영어 배치 시험 성공적 완료","우리 영어 진학 파트너 중 하나에서 IELTS 전체 5.5에 상응하는 종료 수준의 영어 과정 성공적 완료"]'::jsonb,
    'PTE의 경우', 'PTE 점수 45.4 (IELTS 5.5) 이상 (각 영역 최소 점수: 듣기 – 42.7, 읽기 – 47.9, 말하기 – 51, 쓰기 – 42.2)', '각 영역별 5.5 IELTS에 상응하는 PTE', '[{"skill":"PTE -A 듣기","minimum_score":"42.7"},{"skill":"PTE – A 읽기","minimum_score":"47.9"},{"skill":"PTE – A 말하기","minimum_score":"51"},{"skill":"PTE – A 쓰기","minimum_score":"42.2"}]'::jsonb,
    '영어 능력', '다음 중 하나에 해당하는 경우, 비자 신청 시 영어 시험 점수 증거를 제공할 필요가 없습니다:', '["중등 교환 프로그램, 대학원 연구 과정, 독립형 해외 학생 영어 집중 과정(ELICOS), 외교부 또는 국방부 지원 학생을 포함한 주 과정으로 전일제 학교 학습에 등록되어 있습니다.","다음 국가 중 하나 이상에서 최소 5년간 학습을 완료했습니다: 호주, 영국, 미국, 캐나다, 뉴질랜드, 남아프리카, 또는 아일랜드 공화국.","영국, 미국, 캐나다, 뉴질랜드 또는 아일랜드 공화국의 시민권자이며 여권을 소지하고 있습니다.","학생 비자 신청 전 2년 내에, 학생 비자를 소지한 상태에서 호주에서 영어로 고등학교 졸업장 또는 수료증 IV 이상 수준의 호주 자격 체계 자격을 위한 과정의 상당 부분을 완료했습니다."]'::jsonb,
    '*PTE 및 TOEFL과 같은 다른 영어 시험도 인정될 수 있습니다. 학생들은 IELTS 5.5에 상응함을 확인할 수 있도록 결과를 제공해야 합니다.', 'ELICOS 진학 파트너',
    '지원 절차', '[{"step":"1","title":"1단계: 과정 선택","description":"선호하는 과정을 선택하고 입학 요건을 검토하세요. 질문이 있다면 언제든 입학팀에 문의하세요."},{"step":"2","title":"2단계: 서류 준비","description":"학업 성적표, 영어 시험 결과, 신분증, 과정별 추가 요건을 포함한 모든 필수 서류를 준비하세요."},{"step":"3","title":"3단계: 지원서 제출","description":"모든 필수 서류와 함께 지원서를 제출하세요."},{"step":"4","title":"4단계: 평가 및 제안","description":"지원서는 입학팀에서 평가됩니다. 성공하면 등록 지침과 함께 제안서를 받게 됩니다."}]'::jsonb,
    '지원에 도움이 필요하신가요?', '친절한 입학팀이 지원 절차를 도와드립니다. 궁금하신 점이 있다면 언제든 문의하세요.', '문의하기'
  );

  -- sp
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'sp', 'Requisitos de Ingreso a Cursos - ABM Educación Superior', 'Conoce los requisitos de ingreso para los cursos de ABM incluyendo requisitos académicos, requisitos de inglés y proceso de aplicación.',
    'Requisitos de Ingreso a Cursos', 'Todo lo que necesitas saber para inscribirte en los cursos de ABM', 'Requisitos de Ingreso para Cursos ABM', 'Para asegurar la mejor experiencia de aprendizaje y resultados, ABM tiene requisitos específicos de ingreso para todos nuestros cursos. Estos requisitos nos ayudan a mantener altos estándares educativos y asegurar que los estudiantes estén bien preparados para sus estudios.',
    'Requisitos Generales', '[{"icon":"","title":"Requisito de Edad","description":"Los estudiantes deben tener al menos 18 años al momento del inicio del curso. Para estudiantes menores de 18 años, se puede requerir consentimiento parental y documentación adicional."},{"icon":"","title":"Competencia en Inglés","description":"Todos los estudiantes deben demostrar competencia en inglés para asegurar que puedan completar exitosamente sus estudios. Esto aplica tanto a estudiantes nacionales como internacionales."}]'::jsonb,
    'Requisitos Específicos de Ingreso por Curso', 'A continuación se muestran los requisitos específicos de ingreso para cada curso ofrecido en ABM:',
    'Requisitos de Inglés para la Admisión', 'Tener una puntuación IELTS* de 5.5 con ninguna banda menos de 5.0 (los resultados de la prueba no deben tener más de 2 años de antigüedad). La competencia en inglés también puede demostrarse a través de evidencia documentada de cualquiera de los siguientes:', '["Educado durante 5 años en un país de habla inglesa; o","Completado al menos 6 meses de un curso de nivel Certificado IV en un RTO australiano; o","Finalización exitosa de una Prueba de Colocación de Inglés","Finalización exitosa de un curso de inglés con nivel de salida equivalente a IELTS general 5.5 de uno de nuestros Socios de Vía de Inglés"]'::jsonb,
    'Para PTE', 'Tener una puntuación PTE de 45.4 (IELTS 5.5) o superior con ninguna banda menos de (Escucha – 42.7, Lectura – 47.9, Habla – 51, Escritura – 42.2)', 'PTE equivalente a 5.5 IELTS por banda', '[{"skill":"PTE -A Escucha","minimum_score":"42.7"},{"skill":"PTE – A Lectura","minimum_score":"47.9"},{"skill":"PTE – A Habla","minimum_score":"51"},{"skill":"PTE – A Escritura","minimum_score":"42.2"}]'::jsonb,
    'Competencia en Inglés', 'Si se aplica uno de los siguientes, no necesitas proporcionar evidencia de una puntuación de prueba de inglés con tu aplicación de visa:', '["Estás inscrito en estudios escolares a tiempo completo como curso principal incluyendo en un programa de intercambio secundario, un curso de investigación de posgrado, un curso independiente de Inglés Intensivo para Estudiantes Extranjeros (ELICOS), y estudiantes patrocinados por Asuntos Exteriores o Defensa.","Has completado al menos cinco años de estudio en uno o más de los siguientes países: Australia, Reino Unido, Estados Unidos, Canadá, Nueva Zelanda, Sudáfrica, o la República de Irlanda.","Eres ciudadano y tienes un pasaporte del Reino Unido, Estados Unidos, Canadá, Nueva Zelanda o República de Irlanda.","En los dos años antes de aplicar para la visa de estudiante, completaste, en Australia y en idioma inglés, ya sea el Certificado de Educación Secundaria Superior o un componente sustancial de un curso que lleva a una calificación del Marco de Calificaciones de Australia a nivel Certificado IV o superior, mientras tenías una visa de estudiante."]'::jsonb,
    '*Nota que otras pruebas de idioma inglés como PTE y TOEFL pueden ser aceptadas. Los estudiantes deben proporcionar sus resultados para que se pueda confirmar que son equivalentes a IELTS 5.5.', 'Socios de Vía ELICOS',
    'Proceso de Aplicación', '[{"step":"1","title":"Paso 1: Selección de Curso","description":"Elige tu curso preferido y revisa los requisitos de ingreso. Contacta a nuestro equipo de admisiones si tienes preguntas sobre la idoneidad del curso."},{"step":"2","title":"Paso 2: Preparación de Documentos","description":"Reúne todos los documentos requeridos incluyendo transcripciones académicas, resultados de pruebas de inglés, documentos de identificación y cualquier requisito adicional específico de tu curso."},{"step":"3","title":"Paso 3: Envío de Aplicación","description":"Envía tu aplicación en línea o en persona con todos los documentos requeridos. Asegúrate de que toda la información sea precisa y completa."},{"step":"4","title":"Paso 4: Evaluación y Oferta","description":"Tu aplicación será evaluada por nuestro equipo de admisiones. Si es exitosa, recibirás una carta de oferta con instrucciones de inscripción."}]'::jsonb,
    '¿Necesitas Ayuda con tu Aplicación?', 'Nuestro amigable equipo de admisiones está aquí para ayudarte durante el proceso de aplicación. Contáctanos para asistencia personalizada.', 'Contáctanos'
  );

  -- pt
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'pt', 'Requisitos de Ingresso nos Cursos - ABM Further Education', 'Saiba mais sobre os requisitos de ingresso dos cursos da ABM, incluindo requisitos acadêmicos, de inglês e processo de inscrição.',
    'Requisitos de Ingresso', 'Tudo o que você precisa saber para se inscrever nos cursos da ABM', 'Requisitos de Ingresso nos Cursos da ABM', 'Para garantir a melhor experiência e resultados de aprendizagem, a ABM possui requisitos específicos de ingresso para todos os cursos. Esses requisitos nos ajudam a manter altos padrões educacionais e asseguram que os alunos estejam bem preparados para os estudos.',
    'Requisitos Gerais', '[{"icon":"","title":"Idade Mínima","description":"Os alunos devem ter pelo menos 18 anos na data de início do curso."},{"icon":"","title":"Proficiência em Inglês","description":"Todos os alunos devem demonstrar proficiência em inglês para garantir que possam concluir seus estudos com sucesso. Isso se aplica a alunos domésticos e internacionais."}]'::jsonb,
    'Requisitos Específicos por Curso', 'Abaixo estão os requisitos específicos de ingresso para cada curso oferecido pela ABM:',
    'Requisitos de Entrada em Inglês', 'Ter nota IELTS* 5.5 sem nenhuma banda abaixo de 5.0 (resultado com no máximo 2 anos). A competência em inglês também pode ser demonstrada por evidências documentadas de qualquer um dos seguintes:', '["Educado por 5 anos em um país de língua inglesa; ou","Conclusão de pelo menos 6 meses de um curso de Certificate IV em um RTO australiano; ou","Conclusão bem-sucedida do Teste de Nivelamento de Inglês da ABM","Conclusão bem-sucedida de um curso de inglês com nível de saída equivalente ao IELTS 5.5 de um de nossos parceiros ELICOS"]'::jsonb,
    'Para PTE', 'Ter pontuação PTE de 45,4 (equivalente ao IELTS 5.5) ou superior, sem banda inferior a (Listening – 42,7, Reading – 47,9, Speaking – 51, Writing – 42,2)', 'PTE equivalente ao IELTS 5.5 por banda', '[{"skill":"PTE-A Listening","minimum_score":"42.7"},{"skill":"PTE-A Reading","minimum_score":"47.9"},{"skill":"PTE-A Speaking","minimum_score":"51"},{"skill":"PTE-A Writing","minimum_score":"42.2"}]'::jsonb,
    'Competência em Inglês', 'Se algum dos itens a seguir se aplicar, você não precisa fornecer evidências de teste de inglês com sua solicitação de visto:', '["Você está matriculado em estudos escolares em tempo integral como curso principal, incluindo programa de intercâmbio, curso de pesquisa de pós-graduação, curso ELICOS independente, ou estudantes patrocinados por Relações Exteriores ou Defesa.","Você concluiu pelo menos cinco anos de estudo em um ou mais dos seguintes países: Austrália, Reino Unido, EUA, Canadá, Nova Zelândia, África do Sul ou República da Irlanda.","Você é cidadão e possui passaporte do Reino Unido, EUA, Canadá, Nova Zelândia ou República da Irlanda.","Nos dois anos anteriores à solicitação do visto de estudante, você concluiu, na Austrália e em inglês, o Senior Secondary Certificate of Education ou parte substancial de um curso levando a uma qualificação do AQF no nível Certificate IV ou superior, enquanto possuía visto de estudante."]'::jsonb,
    '*Observe que outros testes de inglês, como PTE e TOEFL, podem ser aceitos. Os alunos devem fornecer os resultados para confirmar equivalência ao IELTS 5.5.', 'Parceiros ELICOS',
    'Processo de Inscrição', '[{"step":"1","title":"Etapa 1: Seleção do Curso","description":"Escolha seu curso e verifique os requisitos de ingresso."},{"step":"2","title":"Etapa 2: Preparação de Documentos","description":"Reúna documentos e históricos necessários."},{"step":"3","title":"Etapa 3: Envio da Inscrição","description":"Envie sua inscrição com toda a documentação."},{"step":"4","title":"Etapa 4: Análise e Oferta","description":"Receba o resultado da análise e a oferta de matrícula."}]'::jsonb,
    'Precisa de Ajuda com a Inscrição?', 'Nossa equipe de admissões está pronta para ajudar em todo o processo.
Entre em contato para um atendimento personalizado.', 'Fale Conosco'
  );

  -- jp
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'jp', '入学要件 - ABM Further Education', 'ABMの各コースの入学要件（学歴・英語力・申請手順）についてご案内します。',
    '入学要件', 'ABMコース出願に必要な情報', 'ABMコースの入学要件', '最良の学習体験と成果のため、各コースに入学要件を設定しています。学習準備度を担保し、高い教育水準を維持します。',
    '共通要件', '[{"icon":"","title":"年齢要件","description":"入学時点で18歳以上であること。"},{"icon":"","title":"英語力要件","description":"国内生・留学生を問わず、学修達成に必要な英語力の証明が必要です。"}]'::jsonb,
    'コース別入学要件', 'ABMが提供する各コースの要件は以下の通りです。',
    '英語力の証明方法', 'IELTS 5.5（各5.0以上、2年以内）相当。以下の書類でも代替可：', '["英語圏での5年以上の就学歴","豪州RTOにてCertificate IVレベルを6か月以上修了","ABM英語プレースメントテストの合格","ELICOSパートナーの英語コースでIELTS5.5相当の修了"]'::jsonb,
    'PTE基準', '総合45.4以上（IELTS5.5相当）。各バンド：Listening 42.7／Reading 47.9／Speaking 51／Writing 42.2 以上。', 'IELTS5.5相当のPTEバンド', '[{"skill":"PTE‑A Listening","minimum_score":"42.7"},{"skill":"PTE‑A Reading","minimum_score":"47.9"},{"skill":"PTE‑A Speaking","minimum_score":"51"},{"skill":"PTE‑A Writing","minimum_score":"42.2"}]'::jsonb,
    'ビザ申請で英語証明が不要な場合', '以下のいずれかに該当する場合、英語試験結果の提出が免除されます：', '["交換留学・研究課程・ELICOS単独等の特定コースに在籍","豪・英・米・加・NZ・南ア・アイルランドで5年以上の就学歴","英・米・加・NZ・アイルランドのパスポートを所持","学生ビザ下で、直近2年以内に豪州で英語によるCertificate IV以上の資格取得に必要な相当部分を修了"]'::jsonb,
    '* PTE・TOEFL等、他試験もIELTS5.5相当であれば可。成績票の提出が必要です。', 'ELICOS パスウェイ提携校',
    '出願プロセス', '[{"step":"1","title":"ステップ1：コース選択","description":"希望コースと要件を確認。"},{"step":"2","title":"ステップ2：書類準備","description":"必要書類・成績証明等を準備。"},{"step":"3","title":"ステップ3：出願","description":"必要書類を添付して出願。"},{"step":"4","title":"ステップ4：審査・合格通知","description":"審査結果と入学許可を受領。"}]'::jsonb,
    '出願サポートが必要ですか？', '入学事務局が申請を丁寧にサポートします。
お気軽にお問い合わせください。', 'お問い合わせ'
  );

  -- tl
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'tl', 'Mga Kinakailangan sa Pagpasok sa Kurso - ABM Further Education', 'Alamin ang mga kinakailangan sa pagpasok para sa mga kurso ng ABM kasama ang mga akademikong kinakailangan, English language requirements, at proseso ng aplikasyon.',
    'Mga Kinakailangan sa Pagpasok sa Kurso', 'Lahat ng kailangan mong malaman tungkol sa pag-enroll sa mga kurso ng ABM', 'Mga Kinakailangan sa Pagpasok para sa mga Kurso ng ABM', 'Upang matiyak ang pinakamahusay na karanasan sa pag-aaral at mga resulta, ang ABM ay may mga tiyak na kinakailangan sa pagpasok para sa lahat ng aming mga kurso. Ang mga kinakailangang ito ay tumutulong sa amin na mapanatili ang mataas na pamantayan ng edukasyon at matiyak na ang mga estudyante ay handa sa kanilang pag-aaral.',
    'Pangkalahatang Kinakailangan', '[{"icon":"","title":"Kinakailangan sa Edad","description":"Ang mga estudyante ay dapat ay hindi bababa sa 18 taong gulang sa panahon ng pagsisimula ng kurso."},{"icon":"","title":"Kasanayan sa Wikang Ingles","description":"Lahat ng estudyante ay dapat magpakita ng kasanayan sa wikang Ingles upang matiyak na matagumpay nilang makumpleto ang kanilang pag-aaral. Ito ay naaangkop sa parehong domestic at international students."}]'::jsonb,
    'Mga Tiyak na Kinakailangan sa Pagpasok ng Kurso', 'Nasa ibaba ang mga tiyak na kinakailangan sa pagpasok para sa bawat kurso na inaalok sa ABM:',
    'Mga Kinakailangan sa Pagpasok para sa Ingles', 'Magkaroon ng IELTS* score na 5.5 na walang band na mas mababa sa 5.0 (ang mga resulta ng test ay dapat hindi hihigit sa 2 taon ang edad). Ang kasanayan sa wikang Ingles ay maaari ring ipakita sa pamamagitan ng dokumentadong ebidensya ng alinman sa mga sumusunod:', '["Nag-aral ng 5 taon sa isang English-speaking country; o","Nakumpleto ang hindi bababa sa 6 buwan ng Certificate IV level course sa isang Australian RTO; o","Matagumpay na nakumpleto ang ABM English Placement Test","Matagumpay na nakumpleto ang English course na may exit level na katumbas ng IELTS overall 5.5 mula sa isa sa aming ELICOS Pathway partners"]'::jsonb,
    'Para sa PTE', 'Magkaroon ng PTE score na 45.4 (IELTS 5.5) o mas mataas na walang band na mas mababa sa (Listening – 42.7, Reading – 47.9, Speaking – 51, Writing – 42.2)', 'PTE na katumbas ng 5.5 IELTS bawat band', '[{"skill":"PTE -A Listening","minimum_score":"42.7"},{"skill":"PTE – A Reading","minimum_score":"47.9"},{"skill":"PTE – A Speaking","minimum_score":"51"},{"skill":"PTE – A Writing","minimum_score":"42.2"}]'::jsonb,
    'Kasanayan sa Ingles', 'Kung isa sa mga sumusunod ang naaangkop, hindi mo na kailangang magbigay ng ebidensya ng English test score sa iyong visa application:', '["Ikaw ay naka-enroll sa full-time school studies bilang pangunahing kurso kasama ang secondary exchange programme, postgraduate research course, standalone English Language Intensive Course for Overseas Students (ELICOS), at Foreign Affairs o Defence sponsored students.","Nakumpleto mo ang hindi bababa sa limang taon ng pag-aaral sa isa o higit pa sa mga sumusunod na bansa: Australia, UK, USA, Canada, New Zealand, South Africa, o Republic of Ireland.","Ikaw ay mamamayan at may hawak na pasaporte mula sa UK, USA, Canada, NZ o Republic of Ireland.","Sa dalawang taon bago mag-apply para sa student visa, nakumpleto mo, sa Australia at sa wikang Ingles, alinman sa Senior Secondary Certificate of Education o isang malaking bahagi ng kurso na humahantong sa kwalipikasyon mula sa Australian Qualifications Framework sa Certificate IV o mas mataas na antas, habang may hawak kang student visa."]'::jsonb,
    '*Tandaan na ang ibang English language tests gaya ng PTE at TOEFL ay maaaring tanggapin. Ang mga estudyante ay kinakailangang magbigay ng kanilang mga resulta upang makumpirma na ang mga ito ay katumbas ng IELTS 5.5.', 'Mga ELICOS Pathway Partner',
    'Proseso ng Aplikasyon', '[{"step":"1","title":"Hakbang 1: Pagpili ng Kurso","description":"Piliin ang iyong kurso at suriin ang mga kinakailangan sa pagpasok."},{"step":"2","title":"Hakbang 2: Paghahanda ng Dokumento","description":"Ipunin ang mga kinakailangang dokumento at transcript."},{"step":"3","title":"Hakbang 3: Pagsusumite ng Aplikasyon","description":"Isumite ang iyong aplikasyon kasama ang lahat ng dokumento."},{"step":"4","title":"Hakbang 4: Pagsusuri at Alok","description":"Tanggapin ang mga resulta ng pagsusuri at alok ng enrollment."}]'::jsonb,
    'Kailangan ng Tulong sa Iyong Aplikasyon?', 'Ang aming friendly na admissions team ay narito upang tulungan ka sa proseso ng aplikasyon.
Makipag-ugnayan sa amin para sa personalized na tulong.', 'Makipag-ugnayan sa Amin'
  );

  -- zh
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'zh', '课程入学要求 - ABM Further Education', '了解ABM课程的入学要求，包括学术要求、英语语言要求和申请流程。',
    '课程入学要求', '关于报读ABM课程您需要了解的一切', 'ABM课程入学要求', '为确保最佳的学习体验和成果，ABM对所有课程都有特定的入学要求。这些要求帮助我们保持高教育标准，并确保学生为学习做好充分准备。',
    '一般要求', '[{"icon":"","title":"年龄要求","description":"学生在课程开始时必须年满18岁。"},{"icon":"","title":"英语语言能力","description":"所有学生必须证明其英语语言能力，以确保能够成功完成学业。这适用于国内和国际学生。"}]'::jsonb,
    '具体课程入学要求', '以下是ABM各课程的具体入学要求：',
    '英语入学要求', '雅思*成绩5.5，各项不低于5.0（测试成绩不超过2年）。英语语言能力也可以通过以下任何一项的书面证据来证明：', '["在英语国家接受5年教育；或","在澳大利亚RTO完成至少6个月的四级证书课程；或","成功完成ABM英语分班测试","成功完成我们ELICOS合作伙伴的英语课程，出口水平相当于雅思总分5.5"]'::jsonb,
    'PTE要求', 'PTE成绩45.4（雅思5.5）或更高，各项不低于（听力 – 42.7，阅读 – 47.9，口语 – 51，写作 – 42.2）', 'PTE各项相当于雅思5.5', '[{"skill":"PTE-A 听力","minimum_score":"42.7"},{"skill":"PTE-A 阅读","minimum_score":"47.9"},{"skill":"PTE-A 口语","minimum_score":"51"},{"skill":"PTE-A 写作","minimum_score":"42.2"}]'::jsonb,
    '英语能力', '如果以下情况之一适用，您不需要在签证申请中提供英语测试成绩证明：', '["您作为主要课程注册全日制学校学习，包括中学交换项目、研究生研究课程、独立的海外学生英语强化课程(ELICOS)以及外交事务或国防部资助的学生。","您在以下一个或多个国家完成了至少五年的学习：澳大利亚、英国、美国、加拿大、新西兰、南非或爱尔兰共和国。","您是英国、美国、加拿大、新西兰或爱尔兰共和国的公民并持有该国护照。","在申请学生签证前的两年内，您在澳大利亚以英语完成了高中毕业证书或澳大利亚资格框架四级证书或更高级别课程的大部分内容，同时持有学生签证。"]'::jsonb,
    '*请注意，PTE和托福等其他英语语言测试也可以接受。学生需要提供其成绩以确认其相当于雅思5.5。', 'ELICOS合作伙伴',
    '申请流程', '[{"step":"1","title":"第一步：课程选择","description":"选择您的课程并检查入学要求。"},{"step":"2","title":"第二步：文件准备","description":"收集所需文件和成绩单。"},{"step":"3","title":"第三步：提交申请","description":"提交您的申请及所有文件。"},{"step":"4","title":"第四步：评估与录取","description":"收到评估结果和录取通知。"}]'::jsonb,
    '申请需要帮助？', '我们友好的招生团队随时帮助您完成申请流程。
联系我们获取个性化帮助。', '联系我们'
  );

  -- id
  INSERT INTO entry_requirement_page_translations (
    page_id, locale, meta_title, meta_description,
    banner_title, banner_subtitle, intro_title, intro_description,
    general_requirements_title, general_cards,
    course_table_title, course_table_description,
    english_entry_title, english_entry_description, english_evidence_items,
    pte_title, pte_description, pte_table_note, pte_scores,
    competency_title, competency_description, competency_items,
    english_note, elicos_title,
    application_process_title, application_steps,
    contact_title, contact_description, contact_button_text
  ) VALUES (
    v_page_id, 'id', 'Persyaratan Masuk Kursus - ABM Further Education', 'Pelajari tentang persyaratan masuk untuk kursus ABM termasuk persyaratan akademik, persyaratan bahasa Inggris, dan proses aplikasi.',
    'Persyaratan Masuk Kursus', 'Semua yang perlu Anda ketahui tentang mendaftar di kursus ABM', 'Persyaratan Masuk untuk Kursus ABM', 'Untuk memastikan pengalaman dan hasil belajar terbaik, ABM memiliki persyaratan masuk khusus untuk semua kursus kami. Persyaratan ini membantu kami menjaga standar pendidikan tinggi dan memastikan siswa siap untuk studi mereka.',
    'Persyaratan Umum', '[{"icon":"","title":"Persyaratan Usia","description":"Siswa harus berusia minimal 18 tahun pada saat kursus dimulai."},{"icon":"","title":"Kemampuan Bahasa Inggris","description":"Semua siswa harus menunjukkan kemampuan bahasa Inggris untuk memastikan mereka dapat berhasil menyelesaikan studi mereka. Ini berlaku untuk siswa domestik dan internasional."}]'::jsonb,
    'Persyaratan Masuk Kursus Khusus', 'Berikut adalah persyaratan masuk khusus untuk setiap kursus yang ditawarkan di ABM:',
    'Persyaratan Masuk Bahasa Inggris', 'Memiliki skor IELTS* 5.5 dengan tidak ada band kurang dari 5.0 (hasil tes tidak boleh lebih dari 2 tahun). Kompetensi bahasa Inggris juga dapat ditunjukkan melalui bukti terdokumentasi dari salah satu hal berikut:', '["Dididik selama 5 tahun di negara berbahasa Inggris; atau","Menyelesaikan minimal 6 bulan kursus level Certificate IV di RTO Australia; atau","Berhasil menyelesaikan Tes Penempatan Bahasa Inggris ABM","Berhasil menyelesaikan kursus bahasa Inggris dengan level keluar setara dengan IELTS overall 5.5 dari salah satu mitra ELICOS Pathway kami"]'::jsonb,
    'Untuk PTE', 'Memiliki skor PTE 45.4 (IELTS 5.5) atau lebih tinggi dengan tidak ada band kurang dari (Listening – 42.7, Reading – 47.9, Speaking – 51, Writing – 42.2)', 'PTE setara dengan 5.5 IELTS per band', '[{"skill":"PTE -A Listening","minimum_score":"42.7"},{"skill":"PTE – A Reading","minimum_score":"47.9"},{"skill":"PTE – A Speaking","minimum_score":"51"},{"skill":"PTE – A Writing","minimum_score":"42.2"}]'::jsonb,
    'Kompetensi dalam Bahasa Inggris', 'Jika salah satu hal berikut berlaku, Anda tidak perlu memberikan bukti skor tes bahasa Inggris dengan aplikasi visa Anda:', '["Anda terdaftar dalam studi sekolah penuh waktu sebagai kursus utama termasuk dalam program pertukaran menengah, kursus penelitian pascasarjana, English Language Intensive Course for Overseas Students (ELICOS) mandiri, dan siswa yang disponsori Urusan Luar Negeri atau Pertahanan.","Anda telah menyelesaikan minimal lima tahun studi di satu atau lebih negara berikut: Australia, UK, USA, Kanada, Selandia Baru, Afrika Selatan, atau Republik Irlandia.","Anda adalah warga negara dan memegang paspor dari UK, USA, Kanada, NZ atau Republik Irlandia.","Dalam dua tahun sebelum mengajukan visa pelajar, Anda telah menyelesaikan, di Australia dan dalam bahasa Inggris, baik Sertifikat Pendidikan Menengah Atas atau komponen substansial dari kursus yang mengarah ke kualifikasi dari Australian Qualifications Framework pada level Certificate IV atau lebih tinggi, saat Anda memegang visa pelajar."]'::jsonb,
    '*Perhatikan bahwa tes bahasa Inggris lainnya seperti PTE dan TOEFL dapat diterima. Siswa diminta untuk memberikan hasil mereka agar dapat dikonfirmasi bahwa mereka setara dengan IELTS 5.5.', 'Mitra ELICOS Pathway',
    'Proses Aplikasi', '[{"step":"1","title":"Langkah 1: Pemilihan Kursus","description":"Pilih kursus Anda dan periksa persyaratan masuk."},{"step":"2","title":"Langkah 2: Persiapan Dokumen","description":"Kumpulkan dokumen dan transkrip yang diperlukan."},{"step":"3","title":"Langkah 3: Pengajuan Aplikasi","description":"Ajukan aplikasi Anda dengan semua dokumen."},{"step":"4","title":"Langkah 4: Penilaian dan Penawaran","description":"Terima hasil penilaian dan penawaran pendaftaran."}]'::jsonb,
    'Butuh Bantuan dengan Aplikasi Anda?', 'Tim penerimaan kami yang ramah siap membantu Anda melalui proses aplikasi.
Hubungi kami untuk bantuan yang dipersonalisasi.', 'Hubungi Kami'
  );

  -- 3) Insert courses
  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIT40521 Certificate IV in Kitchen Management', 'Student must have completed an equivalent of Year 10', 0)
  RETURNING id INTO v_course_0_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIT50422 Diploma of Hospitality Management', 'Student must have completed an equivalent of Year 12', 1)
  RETURNING id INTO v_course_1_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIT60322 Advanced Diploma of Hospitality Management', 'Student must have completed an equivalent of Year 12', 2)
  RETURNING id INTO v_course_2_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIS30321 Certificate III in Fitness', 'Student must have completed an equivalent of Year 10', 3)
  RETURNING id INTO v_course_3_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIS30321 Certificate III in Fitness (Fast Track)', 'You are able to participate in fitness activities.', 4)
  RETURNING id INTO v_course_4_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIS40221 Certificate IV in Fitness', 'Have complete the following units:
• HLTAID011 Provide First Aid (or a unit that supersedes this unit)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information

Student must have completed an equivalent of Year 12', 5)
  RETURNING id INTO v_course_5_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIS40221 Certificate IV in Fitness (Fast Track)', 'Have complete the following units:
• HLTAID011 Provide First Aid (or a unit that supersedes this unit)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information', 6)
  RETURNING id INTO v_course_6_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'SIS50321 Diploma of Sport (Coaching)', 'Participate in a course entry interview to determine suitability for the course and student needs.', 7)
  RETURNING id INTO v_course_7_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB40120 Certificate IV in Business', 'Student must have completed an equivalent of Year 10', 8)
  RETURNING id INTO v_course_8_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB50120 Diploma of Business', 'Student must have completed an equivalent of Year 12', 9)
  RETURNING id INTO v_course_9_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB60120 Advanced Diploma of Business', 'Students must have completed a Diploma level course (AQF Level 5) or Advanced Diploma level course (AQF Level 6) from the BSB training package.', 10)
  RETURNING id INTO v_course_10_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB40420 Certificate IV in Human Resource Management', 'Student must have completed an equivalent of Year 10', 11)
  RETURNING id INTO v_course_11_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB50320 Diploma of Human Resource Management', 'Have complete the following units:
• BSBHRM411 Administer performance development processes
• BSBHRM412 Support employee and industrial relations
• BSBHRM415 Coordinate recruitment and onboarding
• BSBHRM417 Support human resource functions and processes

Equivalent competencies are predecessors to these units, which have been mapped as equivalent.', 12)
  RETURNING id INTO v_course_12_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB60320 Advance Diploma of Human Resource Management', 'Have completed one of the following qualifications: BSB50320 Diploma of Human Resource Management, BSB50618 Diploma of Human Resources Management (or a superseded equivalent version).', 13)
  RETURNING id INTO v_course_13_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB40920 Certificate IV in Project Management Practice', 'Student must have completed an equivalent of Year 10', 14)
  RETURNING id INTO v_course_14_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB50820 Diploma of Project Management', 'Student must have completed an equivalent of Year 12', 15)
  RETURNING id INTO v_course_15_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB60720 Advance Diploma of Program Management', 'Have completed one of the following qualifications: BSB50820 Diploma of Project Management, BSB51415 Diploma of Project Management (or a superseded equivalent version).', 16)
  RETURNING id INTO v_course_16_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'BSB80120 Graduate Diploma of Management (Learning)', 'Students must have completed Advanced Diploma level course (AQF Level 6) or higher.', 17)
  RETURNING id INTO v_course_17_id;

  INSERT INTO entry_requirement_courses (page_id, course_code, requirement, display_order)
  VALUES (v_page_id, 'HLT33115 Certificate III in Health Services Assistance', 'Students must be at least 18 years of age at the time of course commencement.
IELTS 5.5 or equivalent, if student has IELTS 4.5 or equivalent through ABM EPT, enrol with Plus Nursing English.
Student must have completed an equivalent of Year 10', 18)
  RETURNING id INTO v_course_18_id;

  -- 4) Insert course translations
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'en', 'SIT40521 Certificate IV in Kitchen Management', 'Student must have completed an equivalent of Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'kr', 'SIT40521 키친 매니지먼트 수료증 IV', '학생은 10학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'sp', 'SIT40521 Certificado IV en Gestión de Cocina', 'El estudiante debe haber completado el equivalente al Año 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'pt', 'SIT40521 Certificate IV in Kitchen Management', 'O aluno deve ter concluído o equivalente ao Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'jp', 'SIT40521 Certificate IV in Kitchen Management', 'Year 10 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'tl', 'SIT40521 Certificate IV in Kitchen Management', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'zh', 'SIT40521 四级厨房管理证书', '学生必须完成相当于10年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_0_id, 'id', 'SIT40521 Certificate IV in Kitchen Management', 'Siswa harus telah menyelesaikan setara dengan Year 10');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'en', 'SIT50422 Diploma of Hospitality Management', 'Student must have completed an equivalent of Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'kr', 'SIT50422 호스피탈리티 매니지먼트 디플로마', '학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'sp', 'SIT50422 Diploma en Gestión de Hospitalidad', 'El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'pt', 'SIT50422 Diploma of Hospitality Management', 'O aluno deve ter concluído o equivalente ao Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'jp', 'SIT50422 Diploma of Hospitality Management', 'Year 12 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'tl', 'SIT50422 Diploma of Hospitality Management', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'zh', 'SIT50422 酒店管理文凭', '学生必须完成相当于12年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_1_id, 'id', 'SIT50422 Diploma of Hospitality Management', 'Siswa harus telah menyelesaikan setara dengan Year 12');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'en', 'SIT60322 Advanced Diploma of Hospitality Management', 'Student must have completed an equivalent of Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'kr', 'SIT60322 호스피탈리티 매니지먼트 고급 디플로마', '학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'sp', 'SIT60322 Diploma Avanzado en Gestión de Hospitalidad', 'El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'pt', 'SIT60322 Advanced Diploma of Hospitality Management', 'O aluno deve ter concluído o equivalente ao Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'jp', 'SIT60322 Advanced Diploma of Hospitality Management', 'Year 12 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'tl', 'SIT60322 Advanced Diploma of Hospitality Management', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'zh', 'SIT60322 酒店管理高级文凭', '学生必须完成相当于12年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_2_id, 'id', 'SIT60322 Advanced Diploma of Hospitality Management', 'Siswa harus telah menyelesaikan setara dengan Year 12');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'en', 'SIS30321 Certificate III in Fitness', 'Student must have completed an equivalent of Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'kr', 'SIS30321 피트니스 수료증 III', '학생은 10학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'sp', 'SIS30321 Certificado III en Fitness', 'El estudiante debe haber completado el equivalente al Año 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'pt', 'SIS30321 Certificate III in Fitness', 'O aluno deve ter concluído o equivalente ao Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'jp', 'SIS30321 Certificate III in Fitness', 'Year 10 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'tl', 'SIS30321 Certificate III in Fitness', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'zh', 'SIS30321 三级健身证书', '学生必须完成相当于10年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_3_id, 'id', 'SIS30321 Certificate III in Fitness', 'Siswa harus telah menyelesaikan setara dengan Year 10');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'en', 'SIS30321 Certificate III in Fitness (Fast Track)', 'You are able to participate in fitness activities.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'kr', 'SIS30321 피트니스 수료증 III (패스트 트랙)', '피트니스 활동에 참여할 수 있어야 합니다.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'sp', 'SIS30321 Certificado III en Fitness (Vía Rápida)', 'Debes ser capaz de participar en actividades de fitness.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'pt', 'SIS30321 Certificate III in Fitness (Fast Track)', 'Você está apto a participar de atividades de fitness.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'jp', 'SIS30321 Certificate III in Fitness (Fast Track)', 'フィットネス活動に参加できること');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'tl', 'SIS30321 Certificate III in Fitness (Fast Track)', 'Ikaw ay kayang lumahok sa mga fitness activities.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'zh', 'SIS30321 三级健身证书（快速班）', '您能够参加健身活动。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_4_id, 'id', 'SIS30321 Certificate III in Fitness (Fast Track)', 'Anda dapat berpartisipasi dalam aktivitas kebugaran.');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'en', 'SIS40221 Certificate IV in Fitness', 'Have complete the following units:
• HLTAID011 Provide First Aid (or a unit that supersedes this unit)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information

Student must have completed an equivalent of Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'kr', 'SIS40221 피트니스 수료증 IV', '다음 단위들을 완료해야 합니다: HLTAID011 응급처치 제공 (또는 이 단위를 대체하는 단위), HLTWHS001 직장 건강 및 안전 참여, SISFFIT032 운동 전 검사 및 서비스 오리엔테이션 완료, SISFFIT033 고객 피트니스 평가 완료, SISFFIT035 그룹 운동 세션 계획, SISFFIT036 그룹 운동 세션 지도, SISFFIT040 개별 고객을 위한 체육관 기반 운동 프로그램 개발 및 지도, SISFFIT047 안전하고 효과적인 운동을 지원하기 위한 해부학 및 생리학 지식 활용, SISFFIT052 건강한 식습관 정보 제공. 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'sp', 'SIS40221 Certificado IV en Fitness', 'Haber completado las siguientes unidades: HLTAID011 Proporcionar Primeros Auxilios (o una unidad que reemplace esta unidad), HLTWHS001 Participar en salud y seguridad en el lugar de trabajo, SISFFIT032 Completar evaluación previa al ejercicio y orientación de servicio, SISFFIT033 Completar evaluaciones de fitness del cliente, SISFFIT035 Planificar sesiones de ejercicio grupal, SISFFIT036 Instruir sesiones de ejercicio grupal, SISFFIT040 Desarrollar e instruir programas de ejercicio basados en gimnasio para clientes individuales, SISFFIT047 Usar conocimiento de anatomía y fisiología para apoyar ejercicio seguro y efectivo, SISFFIT052 Proporcionar información sobre alimentación saludable. El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'pt', 'SIS40221 Certificate IV in Fitness', 'Concluir as seguintes unidades:
• HLTAID011 Provide First Aid (ou unidade que a substitua)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information

O aluno deve ter concluído o equivalente ao Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'jp', 'SIS40221 Certificate IV in Fitness', '以下のユニット修了：
• HLTAID011 Provide First Aid（後継可）
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 事前スクリーニング等
• SISFFIT033 フィットネス評価
• SISFFIT035 グループ運動計画
• SISFFIT036 グループ運動指導
• SISFFIT040 個別ジムプログラム
• SISFFIT047 解剖生理の活用
• SISFFIT052 健康的な食習慣の情報提供

加えて Year 12 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'tl', 'SIS40221 Certificate IV in Fitness', 'Nakumpleto ang mga sumusunod na unit:
• HLTAID011 Provide First Aid (o unit na pumalit sa unit na ito)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information

Dapat nakumpleto ng estudyante ang katumbas ng Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'zh', 'SIS40221 四级健身证书', '已完成以下单元：
• HLTAID011 提供急救（或取代此单元的单元）
• HLTWHS001 参与工作场所健康与安全
• SISFFIT032 完成运动前筛查和服务指导
• SISFFIT033 完成客户体能评估
• SISFFIT035 计划团体锻炼课程
• SISFFIT036 指导团体锻炼课程
• SISFFIT040 为个人客户开发和指导健身房锻炼计划
• SISFFIT047 运用解剖学和生理学知识支持安全有效的锻炼
• SISFFIT052 提供健康饮食信息

学生必须完成相当于12年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_5_id, 'id', 'SIS40221 Certificate IV in Fitness', 'Telah menyelesaikan unit berikut:
• HLTAID011 Provide First Aid (atau unit yang menggantikan unit ini)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information

Siswa harus telah menyelesaikan setara dengan Year 12');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'en', 'SIS40221 Certificate IV in Fitness (Fast Track)', 'Have complete the following units:
• HLTAID011 Provide First Aid (or a unit that supersedes this unit)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'kr', 'SIS40221 피트니스 수료증 IV (패스트 트랙)', '다음 단위들을 완료해야 합니다: HLTAID011 응급처치 제공 (또는 이 단위를 대체하는 단위), HLTWHS001 직장 건강 및 안전 참여, SISFFIT032 운동 전 검사 및 서비스 오리엔테이션 완료, SISFFIT033 고객 피트니스 평가 완료, SISFFIT035 그룹 운동 세션 계획, SISFFIT036 그룹 운동 세션 지도, SISFFIT040 개별 고객을 위한 체육관 기반 운동 프로그램 개발 및 지도, SISFFIT047 안전하고 효과적인 운동을 지원하기 위한 해부학 및 생리학 지식 활용, SISFFIT052 건강한 식습관 정보 제공');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'sp', 'SIS40221 Certificado IV en Fitness (Vía Rápida)', 'Haber completado las siguientes unidades: HLTAID011 Proporcionar Primeros Auxilios (o una unidad que reemplace esta unidad), HLTWHS001 Participar en salud y seguridad en el lugar de trabajo, SISFFIT032 Completar evaluación previa al ejercicio y orientación de servicio, SISFFIT033 Completar evaluaciones de fitness del cliente, SISFFIT035 Planificar sesiones de ejercicio grupal, SISFFIT036 Instruir sesiones de ejercicio grupal, SISFFIT040 Desarrollar e instruir programas de ejercicio basados en gimnasio para clientes individuales, SISFFIT047 Usar conocimiento de anatomía y fisiología para apoyar ejercicio seguro y efectivo, SISFFIT052 Proporcionar información sobre alimentación saludable');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'pt', 'SIS40221 Certificate IV in Fitness (Fast Track)', 'Concluir as seguintes unidades:
• HLTAID011 Provide First Aid (ou unidade que a substitua)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'jp', 'SIS40221 Certificate IV in Fitness (Fast Track)', '以下のユニット修了：
• HLTAID011 Provide First Aid（後継可）
• HLTWHS001 ほか、上記と同様');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'tl', 'SIS40221 Certificate IV in Fitness (Fast Track)', 'Nakumpleto ang mga sumusunod na unit:
• HLTAID011 Provide First Aid (o unit na pumalit sa unit na ito)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'zh', 'SIS40221 四级健身证书（快速班）', '已完成以下单元：
• HLTAID011 提供急救（或取代此单元的单元）
• HLTWHS001 参与工作场所健康与安全
• SISFFIT032 完成运动前筛查和服务指导
• SISFFIT033 完成客户体能评估
• SISFFIT035 计划团体锻炼课程
• SISFFIT036 指导团体锻炼课程
• SISFFIT040 为个人客户开发和指导健身房锻炼计划
• SISFFIT047 运用解剖学和生理学知识支持安全有效的锻炼
• SISFFIT052 提供健康饮食信息');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_6_id, 'id', 'SIS40221 Certificate IV in Fitness (Fast Track)', 'Telah menyelesaikan unit berikut:
• HLTAID011 Provide First Aid (atau unit yang menggantikan unit ini)
• HLTWHS001 Participate in workplace health and safety
• SISFFIT032 Complete pre-exercise screening and service orientation
• SISFFIT033 Complete client fitness assessments
• SISFFIT035 Plan group exercise sessions
• SISFFIT036 Instruct group exercise sessions
• SISFFIT040 Develop and instruct gym-based exercise programs for individual clients
• SISFFIT047 Use anatomy and physiology knowledge to support safe and effective exercise
• SISFFIT052 Provide healthy eating information');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'en', 'SIS50321 Diploma of Sport (Coaching)', 'Participate in a course entry interview to determine suitability for the course and student needs.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'kr', 'SIS50321 스포츠 디플로마 (코칭)', '과정 적합성과 학생 요구사항을 결정하기 위한 입학 면접에 참여해야 합니다. 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'sp', 'SIS50321 Diploma en Deporte (Entrenamiento)', 'Participar en una entrevista de ingreso al curso para determinar la idoneidad para el curso y las necesidades del estudiante. El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'pt', 'SIS50321 Diploma of Sport (Coaching)', 'Participar de entrevista de entrada para avaliar adequação ao curso e necessidades do aluno.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'jp', 'SIS50321 Diploma of Sport (Coaching)', 'コース適性確認のためのエントリー面談に参加');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'tl', 'SIS50321 Diploma of Sport (Coaching)', 'Lumahok sa course entry interview upang matukoy ang pagiging angkop para sa kurso at mga pangangailangan ng estudyante.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'zh', 'SIS50321 体育文凭（教练）', '参加课程入学面试以确定课程适合性和学生需求。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_7_id, 'id', 'SIS50321 Diploma of Sport (Coaching)', 'Berpartisipasi dalam wawancara masuk kursus untuk menentukan kesesuaian untuk kursus dan kebutuhan siswa.');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'en', 'BSB40120 Certificate IV in Business', 'Student must have completed an equivalent of Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'kr', 'BSB40120 비즈니스 수료증 IV', '위의 학업 입학 요건을 참조하세요. 학생은 10학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'sp', 'BSB40120 Certificado IV en Negocios', 'Ver requisitos académicos de ingreso arriba. El estudiante debe haber completado el equivalente al Año 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'pt', 'BSB40120 Certificate IV in Business', 'O aluno deve ter concluído o equivalente ao Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'jp', 'BSB40120 Certificate IV in Business', 'Year 10 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'tl', 'BSB40120 Certificate IV in Business', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'zh', 'BSB40120 四级商业证书', '学生必须完成相当于10年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_8_id, 'id', 'BSB40120 Certificate IV in Business', 'Siswa harus telah menyelesaikan setara dengan Year 10');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'en', 'BSB50120 Diploma of Business', 'Student must have completed an equivalent of Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'kr', 'BSB50120 비즈니스 디플로마', '위의 학업 입학 요건을 참조하세요. 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'sp', 'BSB50120 Diploma en Negocios', 'Ver requisitos académicos de ingreso arriba. El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'pt', 'BSB50120 Diploma of Business', 'O aluno deve ter concluído o equivalente ao Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'jp', 'BSB50120 Diploma of Business', 'Year 12 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'tl', 'BSB50120 Diploma of Business', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'zh', 'BSB50120 商业文凭', '学生必须完成相当于12年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_9_id, 'id', 'BSB50120 Diploma of Business', 'Siswa harus telah menyelesaikan setara dengan Year 12');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'en', 'BSB60120 Advanced Diploma of Business', 'Students must have completed a Diploma level course (AQF Level 5) or Advanced Diploma level course (AQF Level 6) from the BSB training package.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'kr', 'BSB60120 비즈니스 고급 디플로마', '학생들은 BSB 훈련 패키지에서 디플로마 수준 과정(AQF 레벨 5) 또는 고급 디플로마 수준 과정(AQF 레벨 6)을 완료해야 합니다. 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'sp', 'BSB60120 Diploma Avanzado en Negocios', 'Los estudiantes deben haber completado un curso de nivel Diploma (Nivel AQF 5) o un curso de nivel Diploma Avanzado (Nivel AQF 6) del paquete de entrenamiento BSB. El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'pt', 'BSB60120 Advanced Diploma of Business', 'Os alunos devem ter concluído um curso de nível Diploma (AQF Nível 5) ou Advanced Diploma (AQF Nível 6) do pacote BSB.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'jp', 'BSB60120 Advanced Diploma of Business', 'BSBパッケージのDiploma（AQF5）またはAdvanced Diploma（AQF6）の修了');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'tl', 'BSB60120 Advanced Diploma of Business', 'Ang mga estudyante ay dapat nakumpleto ang Diploma level course (AQF Level 5) o Advanced Diploma level course (AQF Level 6) mula sa BSB training package.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'zh', 'BSB60120 商业高级文凭', '学生必须完成BSB培训包的文凭级别课程（AQF 5级）或高级文凭级别课程（AQF 6级）。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_10_id, 'id', 'BSB60120 Advanced Diploma of Business', 'Siswa harus telah menyelesaikan kursus level Diploma (AQF Level 5) atau kursus level Advanced Diploma (AQF Level 6) dari paket pelatihan BSB.');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'en', 'BSB40420 Certificate IV in Human Resource Management', 'Student must have completed an equivalent of Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'kr', 'BSB40420 인적자원관리 수료증 IV', '학생은 10학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'sp', 'BSB40420 Certificado IV en Gestión de Recursos Humanos', 'El estudiante debe haber completado el equivalente al Año 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'pt', 'BSB40420 Certificate IV in Human Resource Management', 'O aluno deve ter concluído o equivalente ao Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'jp', 'BSB40420 Certificate IV in Human Resource Management', 'Year 10 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'tl', 'BSB40420 Certificate IV in Human Resource Management', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'zh', 'BSB40420 四级人力资源管理证书', '学生必须完成相当于10年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_11_id, 'id', 'BSB40420 Certificate IV in Human Resource Management', 'Siswa harus telah menyelesaikan setara dengan Year 10');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'en', 'BSB50320 Diploma of Human Resource Management', 'Have complete the following units:
• BSBHRM411 Administer performance development processes
• BSBHRM412 Support employee and industrial relations
• BSBHRM415 Coordinate recruitment and onboarding
• BSBHRM417 Support human resource functions and processes

Equivalent competencies are predecessors to these units, which have been mapped as equivalent.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'kr', 'BSB50320 인적자원관리 디플로마', '다음 단위들을 완료해야 합니다: BSBHRM411 성과 개발 과정 관리, BSBHRM412 직원 및 산업 관계 지원, BSBHRM415 채용 및 온보딩 조정, BSBHRM417 인적자원 기능 및 과정 지원. 동등한 역량은 이 단위들의 전임자로, 동등한 것으로 매핑되었습니다. 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'sp', 'BSB50320 Diploma en Gestión de Recursos Humanos', 'Haber completado las siguientes unidades: BSBHRM411 Administrar procesos de desarrollo de rendimiento, BSBHRM412 Apoyar relaciones laborales e industriales, BSBHRM415 Coordinar reclutamiento y incorporación, BSBHRM417 Apoyar funciones y procesos de recursos humanos. Las competencias equivalentes son predecesoras de estas unidades, que han sido mapeadas como equivalentes. El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'pt', 'BSB50320 Diploma of Human Resource Management', 'Concluir as seguintes unidades:
• BSBHRM411 Administer performance development processes
• BSBHRM412 Support employee and industrial relations
• BSBHRM415 Coordinate recruitment and onboarding
• BSBHRM417 Support human resource functions and processes

Competências equivalentes são predecessoras dessas unidades, mapeadas como equivalentes.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'jp', 'BSB50320 Diploma of Human Resource Management', '以下のユニット修了（または同等）：
• BSBHRM411, 412, 415, 417');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'tl', 'BSB50320 Diploma of Human Resource Management', 'Nakumpleto ang mga sumusunod na unit:
• BSBHRM411 Administer performance development processes
• BSBHRM412 Support employee and industrial relations
• BSBHRM415 Coordinate recruitment and onboarding
• BSBHRM417 Support human resource functions and processes

Ang katumbas na competencies ay mga predecessor sa mga unit na ito, na nai-map bilang katumbas.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'zh', 'BSB50320 人力资源管理文凭', '已完成以下单元：
• BSBHRM411 管理绩效发展流程
• BSBHRM412 支持员工和劳资关系
• BSBHRM415 协调招聘和入职
• BSBHRM417 支持人力资源职能和流程

等效能力是这些单元的前身，已被映射为等效。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_12_id, 'id', 'BSB50320 Diploma of Human Resource Management', 'Telah menyelesaikan unit berikut:
• BSBHRM411 Administer performance development processes
• BSBHRM412 Support employee and industrial relations
• BSBHRM415 Coordinate recruitment and onboarding
• BSBHRM417 Support human resource functions and processes

Kompetensi setara adalah pendahulu dari unit ini, yang telah dipetakan sebagai setara.');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'en', 'BSB60320 Advance Diploma of Human Resource Management', 'Have completed one of the following qualifications: BSB50320 Diploma of Human Resource Management, BSB50618 Diploma of Human Resources Management (or a superseded equivalent version).');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'kr', 'BSB60320 인적자원관리 고급 디플로마', '다음 자격 중 하나를 완료해야 합니다: BSB50320 인적자원관리 디플로마, BSB50618 인적자원관리 디플로마 (또는 대체된 동등한 버전). 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'sp', 'BSB60320 Diploma Avanzado en Gestión de Recursos Humanos', 'Haber completado una de las siguientes calificaciones: BSB50320 Diploma en Gestión de Recursos Humanos, BSB50618 Diploma en Gestión de Recursos Humanos (o una versión equivalente reemplazada). El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'pt', 'BSB60320 Advance Diploma of Human Resource Management', 'Ter concluído uma das seguintes qualificações: BSB50320 Diploma of Human Resource Management, BSB50618 Diploma of Human Resources Management (ou versão equivalente substituída).');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'jp', 'BSB60320 Advance Diploma of Human Resource Management', 'BSB50320 または BSB50618（あるいは後継同等）の修了');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'tl', 'BSB60320 Advance Diploma of Human Resource Management', 'Nakumpleto ang isa sa mga sumusunod na kwalipikasyon: BSB50320 Diploma of Human Resource Management, BSB50618 Diploma of Human Resources Management (o superseded equivalent version).');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'zh', 'BSB60320 人力资源管理高级文凭', '已完成以下资格之一：BSB50320人力资源管理文凭、BSB50618人力资源管理文凭（或被取代的等效版本）。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_13_id, 'id', 'BSB60320 Advance Diploma of Human Resource Management', 'Telah menyelesaikan salah satu kualifikasi berikut: BSB50320 Diploma of Human Resource Management, BSB50618 Diploma of Human Resources Management (atau versi setara yang digantikan).');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'en', 'BSB40920 Certificate IV in Project Management Practice', 'Student must have completed an equivalent of Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'kr', 'BSB40920 프로젝트 매니지먼트 실습 수료증 IV', '학생은 10학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'sp', 'BSB40920 Certificado IV en Práctica de Gestión de Proyectos', 'El estudiante debe haber completado el equivalente al Año 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'pt', 'BSB40920 Certificate IV in Project Management Practice', 'O aluno deve ter concluído o equivalente ao Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'jp', 'BSB40920 Certificate IV in Project Management Practice', 'Year 10 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'tl', 'BSB40920 Certificate IV in Project Management Practice', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'zh', 'BSB40920 四级项目管理实践证书', '学生必须完成相当于10年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_14_id, 'id', 'BSB40920 Certificate IV in Project Management Practice', 'Siswa harus telah menyelesaikan setara dengan Year 10');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'en', 'BSB50820 Diploma of Project Management', 'Student must have completed an equivalent of Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'kr', 'BSB50820 프로젝트 매니지먼트 디플로마', '학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'sp', 'BSB50820 Diploma en Gestión de Proyectos', 'El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'pt', 'BSB50820 Diploma of Project Management', 'O aluno deve ter concluído o equivalente ao Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'jp', 'BSB50820 Diploma of Project Management', 'Year 12 修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'tl', 'BSB50820 Diploma of Project Management', 'Dapat nakumpleto ng estudyante ang katumbas ng Year 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'zh', 'BSB50820 项目管理文凭', '学生必须完成相当于12年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_15_id, 'id', 'BSB50820 Diploma of Project Management', 'Siswa harus telah menyelesaikan setara dengan Year 12');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'en', 'BSB60720 Advance Diploma of Program Management', 'Have completed one of the following qualifications: BSB50820 Diploma of Project Management, BSB51415 Diploma of Project Management (or a superseded equivalent version).');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'kr', 'BSB60720 프로그램 매니지먼트 고급 디플로마', '다음 자격 중 하나를 완료해야 합니다: BSB50820 프로젝트 매니지먼트 디플로마, BSB51415 프로젝트 매니지먼트 디플로마 (또는 대체된 동등한 버전). 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'sp', 'BSB60720 Diploma Avanzado en Gestión de Programas', 'Haber completado una de las siguientes calificaciones: BSB50820 Diploma en Gestión de Proyectos, BSB51415 Diploma en Gestión de Proyectos (o una versión equivalente reemplazada). El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'pt', 'BSB60720 Advance Diploma of Program Management', 'Ter concluído uma das seguintes qualificações: BSB50820 Diploma of Project Management, BSB51415 Diploma of Project Management (ou versão equivalente substituída).');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'jp', 'BSB60720 Advance Diploma of Program Management', 'BSB50820 または BSB51415（後継同等）の修了');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'tl', 'BSB60720 Advance Diploma of Program Management', 'Nakumpleto ang isa sa mga sumusunod na kwalipikasyon: BSB50820 Diploma of Project Management, BSB51415 Diploma of Project Management (o superseded equivalent version).');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'zh', 'BSB60720 计划管理高级文凭', '已完成以下资格之一：BSB50820项目管理文凭、BSB51415项目管理文凭（或被取代的等效版本）。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_16_id, 'id', 'BSB60720 Advance Diploma of Program Management', 'Telah menyelesaikan salah satu kualifikasi berikut: BSB50820 Diploma of Project Management, BSB51415 Diploma of Project Management (atau versi setara yang digantikan).');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'en', 'BSB80120 Graduate Diploma of Management (Learning)', 'Students must have completed Advanced Diploma level course (AQF Level 6) or higher.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'kr', 'BSB80120 매니지먼트 대학원 디플로마 (학습)', '학생들은 고급 디플로마 수준 과정(AQF 레벨 6) 이상을 완료해야 합니다. 학생은 12학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'sp', 'BSB80120 Diploma de Posgrado en Gestión (Aprendizaje)', 'Los estudiantes deben haber completado un curso de nivel Diploma Avanzado (Nivel AQF 6) o superior. El estudiante debe haber completado el equivalente al Año 12');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'pt', 'BSB80120 Graduate Diploma of Management (Learning)', 'Os alunos devem ter concluído curso de nível Advanced Diploma (AQF Nível 6) ou superior.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'jp', 'BSB80120 Graduate Diploma of Management (Learning)', 'Advanced Diploma（AQF6）以上の修了');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'tl', 'BSB80120 Graduate Diploma of Management (Learning)', 'Ang mga estudyante ay dapat nakumpleto ang Advanced Diploma level course (AQF Level 6) o mas mataas.');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'zh', 'BSB80120 管理学研究生文凭（学习）', '学生必须完成高级文凭级别课程（AQF 6级）或更高。');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_17_id, 'id', 'BSB80120 Graduate Diploma of Management (Learning)', 'Siswa harus telah menyelesaikan kursus level Advanced Diploma (AQF Level 6) atau lebih tinggi.');

  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'en', 'HLT33115 Certificate III in Health Services Assistance', 'Students must be at least 18 years of age at the time of course commencement.
IELTS 5.5 or equivalent, if student has IELTS 4.5 or equivalent through ABM EPT, enrol with Plus Nursing English.
Student must have completed an equivalent of Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'kr', 'HLT33115 헬스 서비스 어시스턴트 수료증 III', '학생은 과정 시작 시 최소 18세 이상이어야 합니다.
IELTS 5.5 또는 이에 상응하는 점수, 학생이 ABM EPT를 통해 IELTS 4.5 또는 이에 상응하는 점수를 받은 경우, Plus Nursing English와 함께 등록해야 합니다.
학생은 10학년 또는 이에 상응하는 학력을 완료해야 합니다');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'sp', 'HLT33115 Certificate III in Health Services Assistance', 'Los estudiantes deben tener al menos 18 años al momento del inicio del curso.
IELTS 5.5 o equivalente, si el estudiante tiene IELTS 4.5 o equivalente a través de ABM EPT, inscribirse con Plus Nursing English.
El estudiante debe haber completado el equivalente al Año 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'pt', 'HLT33115 Certificate III in Health Services Assistance', 'Os alunos devem ter pelo menos 18 anos na data de início do curso.
IELTS 5.5 ou equivalente, se o aluno tiver IELTS 4.5 ou equivalente através do ABM EPT, matricular-se com Plus Nursing English.
O aluno deve ter concluído o equivalente ao Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'jp', 'HLT33115 Certificate III in Health Services Assistance', '入学時点で18歳以上であること。
IELTS 5.5相当、ABM EPTでIELTS 4.5相当の場合はPlus Nursing Englishと併せて登録。
Year 10修了相当');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'tl', 'HLT33115 Certificate III in Health Services Assistance', 'Ang mga estudyante ay dapat ay hindi bababa sa 18 taong gulang sa panahon ng pagsisimula ng kurso.
IELTS 5.5 o katumbas, kung ang estudyante ay may IELTS 4.5 o katumbas sa pamamagitan ng ABM EPT, mag-enroll na may Plus Nursing English.
Dapat nakumpleto ng estudyante ang katumbas ng Year 10');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'zh', 'HLT33115 三级健康服务助理证书', '学生在课程开始时必须年满18岁。
雅思5.5或同等水平，如果学生通过ABM EPT测试达到雅思4.5或同等水平，可报名Plus护理英语课程。
学生必须完成相当于10年级的学历');
  INSERT INTO entry_requirement_course_translations (course_id, locale, course_code, requirement)
  VALUES (v_course_18_id, 'id', 'HLT33115 Certificate III in Health Services Assistance', 'Siswa harus berusia minimal 18 tahun pada saat kursus dimulai.
IELTS 5.5 atau setara, jika siswa memiliki IELTS 4.5 atau setara melalui ABM EPT, daftar dengan Plus Nursing English.
Siswa harus telah menyelesaikan setara dengan Year 10');

  -- 5) Insert ELICOS partners
  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'http://ctic.com.au/', 'CTIC English', '• EAP with exit level Credit
• IELTS Preparation with exit level Grade C
• Real English, General English, Cambridge with exit level B2', 0)
  RETURNING id INTO v_partner_0_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'http://www.elc.edu.au/english', 'ELC', '• English for Academic Purposes: Min. 10 weeks of Academic English with a successful exit results of EAP 1
• Cambridge English: Min. complete course (10-12weeks) of Cambridge B2 First (Min grade C)
• IELTS Preparation: Min. 10 weeks of IELTS Preparation with a successful predicted results of 5.5', 1)
  RETURNING id INTO v_partner_1_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://www.eca.edu.au/courses-colleges-partners/elsis-english-language-school/', 'ELSIS', '• Completion of General English Upper Intermediate level
• Completion of EAP 1', 2)
  RETURNING id INTO v_partner_2_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://eu.edu.au/', 'English Unlimited', '• General English (Everyday English teaching method – Upper intermediate level)
• EAP (B+ from level B)', 3)
  RETURNING id INTO v_partner_3_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://www.greenwichcollege.edu.au/your-campus/sydney', 'Greenwich College', '• General English (Upper intermediate level) with minimum 8 weeks
• IELTS Preparation with exit score 5.5-7.0+
• Cambridge Preparation PET, FCE, CAE with exit score 5.5 +
• English for Business (Cambridge Linguaskill Business) with exit score 5.5
• English for Vocational Studies (EVS) (Pass)
• EAP with exit level Pass', 4)
  RETURNING id INTO v_partner_4_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'http://ilsc.com', 'ILSC Language Schools', '• General English with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.
• English for Academic Purposes with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.
• IELTS Preparation with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.
• Cambridge FCE Preparation and Cambridge CAE Preparation with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.', 5)
  RETURNING id INTO v_partner_5_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://www.inus.edu.au/', 'INUS', '• Completion of General English or EAP [Upper Intermediate level] with exit level equivalency of IELTS 5.5 or higher.
• Completion of EAP Advanced [Advanced level].', 6)
  RETURNING id INTO v_partner_6_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://www.lalingua.com/', 'LA LINGUA', '• IELTS Preparation with exit level equivalent to IELTS 5.5', 7)
  RETURNING id INTO v_partner_7_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://www.navitasenglish.edu.au/', 'NAVITAS English', '• Academic English 2: 60% pass with no sub skill below 55%
• IELTS Preparation: Successful completion of 10 weeks
• Cambridge Preparation – B2 First : Successful completion of 10 or 12 weeks
• General English: Successful completion of 10 weeks of Upper Intermediate', 8)
  RETURNING id INTO v_partner_8_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://scic.nsw.edu.au/', 'Sunshine Coast International College', '• English for Academic Purposes (EAP3): EAP 3 certificate (Upper Intermediate: CEFR = B2)
• General English: Successful completion of Upper Intermediate or higher (CEFR=B2)', 9)
  RETURNING id INTO v_partner_9_id;

  INSERT INTO entry_requirement_elicos_partners (page_id, partner_url, partner_name, courses, display_order)
  VALUES (v_page_id, 'https://uec.edu.au/', 'Universal English College (UEC)', '• General English with Upper Intermediate exit level
• IELTS Preparation with exit level equivalent to IELTS 5.5
• Academic English Program with exit level equivalent to IELTS 5.5', 10)
  RETURNING id INTO v_partner_10_id;

  -- 6) Insert ELICOS partner translations
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'en', 'CTIC English', '• EAP with exit level Credit
• IELTS Preparation with exit level Grade C
• Real English, General English, Cambridge with exit level B2');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'kr', 'CTIC English', '• 종료 수준 Credit의 EAP
• 종료 수준 Grade C의 IELTS 준비
• 종료 수준 B2의 Real English, General English, Cambridge');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'sp', 'CTIC English', '• EAP con nivel de salida Crédito
• Preparación IELTS con nivel de salida Grado C
• Inglés Real, Inglés General, Cambridge con nivel de salida B2');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'pt', 'CTIC English', '• EAP com nível de saída Credit
• Preparatório IELTS com nível de saída Grau C
• Real English, General English, Cambridge com nível de saída B2');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'jp', 'CTIC English', '• EAP（成績：Credit）
• IELTS対策（成績：C）
• Real English／General English／Cambridge（B2相当）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'tl', 'CTIC English', '• EAP na may exit level Credit
• IELTS Preparation na may exit level Grade C
• Real English, General English, Cambridge na may exit level B2');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'zh', 'CTIC English', '• EAP出口水平Credit
• 雅思备考出口水平C级
• Real English、General English、Cambridge出口水平B2');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_0_id, 'id', 'CTIC English', '• EAP dengan level keluar Credit
• IELTS Preparation dengan level keluar Grade C
• Real English, General English, Cambridge dengan level keluar B2');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'en', 'ELC', '• English for Academic Purposes: Min. 10 weeks of Academic English with a successful exit results of EAP 1
• Cambridge English: Min. complete course (10-12weeks) of Cambridge B2 First (Min grade C)
• IELTS Preparation: Min. 10 weeks of IELTS Preparation with a successful predicted results of 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'kr', 'ELC', '• 학술 목적 영어: 최소 10주간의 학술 영어와 EAP 1의 성공적인 종료 결과
• Cambridge English: 최소 완전한 과정(10-12주)의 Cambridge B2 First (최소 Grade C)
• IELTS 준비: 최소 10주간의 IELTS 준비와 5.5의 성공적인 예측 결과');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'sp', 'ELC', '• Inglés para Propósitos Académicos: Mín. 10 semanas de Inglés Académico con resultados de salida exitosos de EAP 1
• Cambridge English: Mín. curso completo (10-12 semanas) de Cambridge B2 First (Mín. grado C)
• Preparación IELTS: Mín. 10 semanas de Preparación IELTS con resultados predichos exitosos de 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'pt', 'ELC', '• English for Academic Purposes: Mín. 10 semanas de Inglês Acadêmico com saída EAP 1
• Cambridge English: Conclusão (10–12 semanas) do B2 First (mín. Grau C)
• Preparatório IELTS: Mín. 10 semanas com resultado previsto de 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'jp', 'ELC', '• EAP：EAP1修了（最短10週間）
• Cambridge：B2 First修了（10–12週間／成績C以上）
• IELTS対策：予測5.5（最短10週間）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'tl', 'ELC', '• English for Academic Purposes: Min. 10 linggo ng Academic English na may matagumpay na exit results ng EAP 1
• Cambridge English: Min. complete course (10-12 linggo) ng Cambridge B2 First (Min grade C)
• IELTS Preparation: Min. 10 linggo ng IELTS Preparation na may matagumpay na predicted results ng 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'zh', 'ELC', '• 学术英语：至少10周学术英语，成功通过EAP 1
• 剑桥英语：至少完成10-12周的Cambridge B2 First课程（至少C级）
• 雅思备考：至少10周雅思备考，预测成绩5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_1_id, 'id', 'ELC', '• English for Academic Purposes: Min. 10 minggu Academic English dengan hasil keluar sukses EAP 1
• Cambridge English: Min. complete course (10-12 minggu) Cambridge B2 First (Min grade C)
• IELTS Preparation: Min. 10 minggu IELTS Preparation dengan hasil prediksi sukses 5.5');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'en', 'ELSIS', '• Completion of General English Upper Intermediate level
• Completion of EAP 1');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'kr', 'ELSIS', '• General English Upper Intermediate 수준 완료
• EAP 1 완료');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'sp', 'ELSIS', '• Finalización de Inglés General nivel Intermedio Superior
• Finalización de EAP 1');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'pt', 'ELSIS', '• Conclusão de General English nível Upper Intermediate
• Conclusão de EAP 1');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'jp', 'ELSIS', '• General English Upper‑Intermediate修了
• EAP1修了');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'tl', 'ELSIS', '• Nakumpleto ang General English Upper Intermediate level
• Nakumpleto ang EAP 1');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'zh', 'ELSIS', '• 完成General English中高级水平
• 完成EAP 1');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_2_id, 'id', 'ELSIS', '• Menyelesaikan General English Upper Intermediate level
• Menyelesaikan EAP 1');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'en', 'English Unlimited', '• General English (Everyday English teaching method – Upper intermediate level)
• EAP (B+ from level B)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'kr', 'English Unlimited', '• General English (일상 영어 교수법 – Upper intermediate 수준)
• EAP (B 수준에서 B+)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'sp', 'English Unlimited', '• Inglés General (método de enseñanza de inglés cotidiano – nivel Intermedio Superior)
• EAP (B+ del nivel B)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'pt', 'English Unlimited', '• General English (método Everyday English – nível Upper Intermediate)
• EAP (B+ a partir do nível B)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'jp', 'English Unlimited', '• General English（Everyday English法／Upper‑Intermediate）
• EAP（B以上でB+）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'tl', 'English Unlimited', '• General English (Everyday English teaching method – Upper intermediate level)
• EAP (B+ mula sa level B)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'zh', 'English Unlimited', '• General English（日常英语教学法 – 中高级水平）
• EAP（B级B+）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_3_id, 'id', 'English Unlimited', '• General English (Everyday English teaching method – Upper intermediate level)
• EAP (B+ dari level B)');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'en', 'Greenwich College', '• General English (Upper intermediate level) with minimum 8 weeks
• IELTS Preparation with exit score 5.5-7.0+
• Cambridge Preparation PET, FCE, CAE with exit score 5.5 +
• English for Business (Cambridge Linguaskill Business) with exit score 5.5
• English for Vocational Studies (EVS) (Pass)
• EAP with exit level Pass');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'kr', 'Greenwich College', '• 최소 8주간의 General English (Upper intermediate 수준)
• 종료 점수 5.5-7.0+의 IELTS 준비
• 종료 점수 5.5+의 Cambridge 준비 PET, FCE, CAE
• 종료 점수 5.5의 English for Business (Cambridge Linguaskill Business)
• English for Vocational Studies (EVS) (합격)
• 종료 수준 Pass의 EAP');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'sp', 'Greenwich College', '• Inglés General (nivel Intermedio Superior) con mínimo 8 semanas
• Preparación IELTS con puntuación de salida 5.5-7.0+
• Preparación Cambridge PET, FCE, CAE con puntuación de salida 5.5 +
• Inglés para Negocios (Cambridge Linguaskill Business) con puntuación de salida 5.5
• Inglés para Estudios Vocacionales (EVS) (Aprobado)
• EAP con nivel de salida Aprobado');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'pt', 'Greenwich College', '• General English (Upper Intermediate) com mínimo de 8 semanas
• Preparatório IELTS com nota de saída 5.5–7.0+
• Preparatório Cambridge PET, FCE, CAE com nota de saída 5.5+
• English for Business (Cambridge Linguaskill Business) com nota de saída 5.5
• English for Vocational Studies (EVS) (Aprovado)
• EAP com nível de saída Aprovado');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'jp', 'Greenwich College', '• General English Upper‑Intermediate（8週以上）
• IELTS 5.5–7.0+
• Cambridge PET／FCE／CAE 5.5+
• English for Business（Linguaskill）5.5
• EVS（合格）
• EAP（合格）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'tl', 'Greenwich College', '• General English (Upper intermediate level) na may minimum 8 linggo
• IELTS Preparation na may exit score 5.5-7.0+
• Cambridge Preparation PET, FCE, CAE na may exit score 5.5 +
• English for Business (Cambridge Linguaskill Business) na may exit score 5.5
• English for Vocational Studies (EVS) (Pass)
• EAP na may exit level Pass');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'zh', 'Greenwich College', '• General English（中高级水平）至少8周
• 雅思备考出口分数5.5-7.0+
• 剑桥备考PET、FCE、CAE出口分数5.5+
• 商务英语（Cambridge Linguaskill Business）出口分数5.5
• 职业英语(EVS)（通过）
• EAP出口水平通过');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_4_id, 'id', 'Greenwich College', '• General English (Upper intermediate level) dengan minimum 8 minggu
• IELTS Preparation dengan skor keluar 5.5-7.0+
• Cambridge Preparation PET, FCE, CAE dengan skor keluar 5.5 +
• English for Business (Cambridge Linguaskill Business) dengan skor keluar 5.5
• English for Vocational Studies (EVS) (Pass)
• EAP dengan level keluar Pass');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'en', 'ILSC Language Schools', '• General English with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.
• English for Academic Purposes with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.
• IELTS Preparation with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.
• Cambridge FCE Preparation and Cambridge CAE Preparation with exit level that are equivalent to IELTS Band 5.5 (with no individual score below Band 5) or higher.');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'kr', 'ILSC Language Schools', '• IELTS Band 5.5에 상응하는 종료 수준의 General English (개별 점수 Band 5 미만 없음) 또는 그 이상.
• IELTS Band 5.5에 상응하는 종료 수준의 English for Academic Purposes (개별 점수 Band 5 미만 없음) 또는 그 이상.
• IELTS Band 5.5에 상응하는 종료 수준의 IELTS 준비 (개별 점수 Band 5 미만 없음) 또는 그 이상.
• IELTS Band 5.5에 상응하는 종료 수준의 Cambridge FCE 준비 및 Cambridge CAE 준비 (개별 점수 Band 5 미만 없음) 또는 그 이상.');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'sp', 'ILSC Language Schools', '• Inglés General con nivel de salida que son equivalentes a IELTS Band 5.5 (sin puntuación individual por debajo de Band 5) o superior.
• Inglés para Propósitos Académicos con nivel de salida que son equivalentes a IELTS Band 5.5 (sin puntuación individual por debajo de Band 5) o superior.
• Preparación IELTS con nivel de salida que son equivalentes a IELTS Band 5.5 (sin puntuación individual por debajo de Band 5) o superior.
• Preparación Cambridge FCE y Preparación Cambridge CAE con nivel de salida que son equivalentes a IELTS Band 5.5 (sin puntuación individual por debajo de Band 5) o superior.');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'pt', 'ILSC Language Schools', '• General English com nível de saída equivalente ao IELTS 5.5 (sem banda abaixo de 5)
• English for Academic Purposes com nível de saída equivalente ao IELTS 5.5 (sem banda abaixo de 5)
• Preparatório IELTS com nível de saída equivalente ao IELTS 5.5 (sem banda abaixo de 5)
• Preparatórios Cambridge FCE e CAE com nível de saída equivalente ao IELTS 5.5 (sem banda abaixo de 5).');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'jp', 'ILSC Language Schools', '• General English（IELTS5.5相当、各5以上）
• EAP（IELTS5.5相当、各5以上）
• IELTS対策（IELTS5.5相当、各5以上）
• Cambridge FCE／CAE（IELTS5.5相当、各5以上）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'tl', 'ILSC Language Schools', '• General English na may exit level na katumbas ng IELTS Band 5.5 (na walang individual score na mas mababa sa Band 5) o mas mataas.
• English for Academic Purposes na may exit level na katumbas ng IELTS Band 5.5 (na walang individual score na mas mababa sa Band 5) o mas mataas.
• IELTS Preparation na may exit level na katumbas ng IELTS Band 5.5 (na walang individual score na mas mababa sa Band 5) o mas mataas.
• Cambridge FCE Preparation at Cambridge CAE Preparation na may exit level na katumbas ng IELTS Band 5.5 (na walang individual score na mas mababa sa Band 5) o mas mataas.');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'zh', 'ILSC Language Schools', '• General English出口水平相当于雅思5.5（各项不低于5）或更高。
• 学术英语出口水平相当于雅思5.5（各项不低于5）或更高。
• 雅思备考出口水平相当于雅思5.5（各项不低于5）或更高。
• 剑桥FCE备考和剑桥CAE备考出口水平相当于雅思5.5（各项不低于5）或更高。');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_5_id, 'id', 'ILSC Language Schools', '• General English dengan level keluar yang setara dengan IELTS Band 5.5 (tanpa skor individual di bawah Band 5) atau lebih tinggi.
• English for Academic Purposes dengan level keluar yang setara dengan IELTS Band 5.5 (tanpa skor individual di bawah Band 5) atau lebih tinggi.
• IELTS Preparation dengan level keluar yang setara dengan IELTS Band 5.5 (tanpa skor individual di bawah Band 5) atau lebih tinggi.
• Cambridge FCE Preparation dan Cambridge CAE Preparation dengan level keluar yang setara dengan IELTS Band 5.5 (tanpa skor individual di bawah Band 5) atau lebih tinggi.');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'en', 'INUS', '• Completion of General English or EAP [Upper Intermediate level] with exit level equivalency of IELTS 5.5 or higher.
• Completion of EAP Advanced [Advanced level].');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'kr', 'INUS', '• IELTS 5.5 이상에 상응하는 종료 수준의 General English 또는 EAP [Upper Intermediate 수준] 완료.
• EAP Advanced [Advanced 수준] 완료.');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'sp', 'INUS', '• Finalización de Inglés General o EAP [nivel Intermedio Superior] con equivalencia de nivel de salida de IELTS 5.5 o superior.
• Finalización de EAP Avanzado [nivel Avanzado].');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'pt', 'INUS', '• Conclusão de General English ou EAP [Upper Intermediate] com equivalência de saída IELTS 5.5 ou superior.
• Conclusão de EAP Advanced [nível Avançado].');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'jp', 'INUS', '• General English／EAP［Upper‑Intermediate］修了（IELTS5.5相当以上）
• EAP Advanced［Advanced］修了');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'tl', 'INUS', '• Nakumpleto ang General English o EAP [Upper Intermediate level] na may exit level equivalency ng IELTS 5.5 o mas mataas.
• Nakumpleto ang EAP Advanced [Advanced level].');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'zh', 'INUS', '• 完成General English或EAP [中高级水平]，出口水平相当于雅思5.5或更高。
• 完成EAP Advanced [高级水平]。');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_6_id, 'id', 'INUS', '• Menyelesaikan General English atau EAP [Upper Intermediate level] dengan kesetaraan level keluar IELTS 5.5 atau lebih tinggi.
• Menyelesaikan EAP Advanced [Advanced level].');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'en', 'LA LINGUA', '• IELTS Preparation with exit level equivalent to IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'kr', 'LA LINGUA', '• IELTS 5.5에 상응하는 종료 수준의 IELTS 준비');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'sp', 'LA LINGUA', '• Preparación IELTS con nivel de salida equivalente a IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'pt', 'LA LINGUA', '• Preparatório IELTS com nível de saída equivalente ao IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'jp', 'LA LINGUA', '• IELTS対策（IELTS5.5相当）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'tl', 'LA LINGUA', '• IELTS Preparation na may exit level na katumbas ng IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'zh', 'LA LINGUA', '• 雅思备考出口水平相当于雅思5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_7_id, 'id', 'LA LINGUA', '• IELTS Preparation dengan level keluar setara IELTS 5.5');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'en', 'NAVITAS English', '• Academic English 2: 60% pass with no sub skill below 55%
• IELTS Preparation: Successful completion of 10 weeks
• Cambridge Preparation – B2 First : Successful completion of 10 or 12 weeks
• General English: Successful completion of 10 weeks of Upper Intermediate');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'kr', 'NAVITAS English', '• Academic English 2: 55% 미만의 하위 기술 없이 60% 합격
• IELTS 준비: 10주 성공적 완료
• Cambridge 준비 – B2 First: 10주 또는 12주 성공적 완료
• General English: Upper Intermediate 10주 성공적 완료');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'sp', 'NAVITAS English', '• Inglés Académico 2: 60% aprobado sin habilidad secundaria por debajo de 55%
• Preparación IELTS: Finalización exitosa de 10 semanas
• Preparación Cambridge – B2 First: Finalización exitosa de 10 o 12 semanas
• Inglés General: Finalización exitosa de 10 semanas de Intermedio Superior');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'pt', 'NAVITAS English', '• Academic English 2: 60% de aproveitamento, sem sub-habilidade abaixo de 55%
• Preparatório IELTS: Conclusão bem-sucedida de 10 semanas
• Preparatório Cambridge – B2 First: Conclusão bem-sucedida de 10 ou 12 semanas
• General English: Conclusão bem-sucedida de 10 semanas de Upper Intermediate');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'jp', 'NAVITAS English', '• Academic English 2：60%合格（各55%以上）
• IELTS対策：10週間修了
• Cambridge B2 First：10–12週間修了
• General English Upper‑Intermediate：10週間修了');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'tl', 'NAVITAS English', '• Academic English 2: 60% pass na walang sub skill na mas mababa sa 55%
• IELTS Preparation: Matagumpay na nakumpleto ang 10 linggo
• Cambridge Preparation – B2 First : Matagumpay na nakumpleto ang 10 o 12 linggo
• General English: Matagumpay na nakumpleto ang 10 linggo ng Upper Intermediate');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'zh', 'NAVITAS English', '• Academic English 2：60%通过，各项技能不低于55%
• 雅思备考：成功完成10周
• 剑桥备考 – B2 First：成功完成10或12周
• General English：成功完成10周中高级');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_8_id, 'id', 'NAVITAS English', '• Academic English 2: 60% pass tanpa sub skill di bawah 55%
• IELTS Preparation: Berhasil menyelesaikan 10 minggu
• Cambridge Preparation – B2 First : Berhasil menyelesaikan 10 atau 12 minggu
• General English: Berhasil menyelesaikan 10 minggu Upper Intermediate');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'en', 'Sunshine Coast International College', '• English for Academic Purposes (EAP3): EAP 3 certificate (Upper Intermediate: CEFR = B2)
• General English: Successful completion of Upper Intermediate or higher (CEFR=B2)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'kr', 'Sunshine Coast International College', '• 학술 목적 영어 (EAP3): EAP 3 인증서 (Upper Intermediate: CEFR = B2)
• General English: Upper Intermediate 이상 성공적 완료 (CEFR=B2)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'sp', 'Sunshine Coast International College', '• Inglés para Propósitos Académicos (EAP3): Certificado EAP 3 (Intermedio Superior: CEFR = B2)
• Inglés General: Finalización exitosa de Intermedio Superior o superior (CEFR=B2)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'pt', 'Sunshine Coast International College', '• EAP3: Certificado EAP 3 (Upper Intermediate: CEFR = B2)
• General English: Conclusão bem-sucedida de Upper Intermediate ou superior (CEFR = B2)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'jp', 'Sunshine Coast International College', '• EAP3（Upper‑Intermediate：CEFR B2）
• General English Upper‑Intermediate以上（CEFR B2）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'tl', 'Sunshine Coast International College', '• English for Academic Purposes (EAP3): EAP 3 certificate (Upper Intermediate: CEFR = B2)
• General English: Matagumpay na nakumpleto ang Upper Intermediate o mas mataas (CEFR=B2)');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'zh', 'Sunshine Coast International College', '• 学术英语(EAP3)：EAP 3证书（中高级：CEFR = B2）
• General English：成功完成中高级或更高（CEFR=B2）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_9_id, 'id', 'Sunshine Coast International College', '• English for Academic Purposes (EAP3): Sertifikat EAP 3 (Upper Intermediate: CEFR = B2)
• General English: Berhasil menyelesaikan Upper Intermediate atau lebih tinggi (CEFR=B2)');

  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'en', 'Universal English College (UEC)', '• General English with Upper Intermediate exit level
• IELTS Preparation with exit level equivalent to IELTS 5.5
• Academic English Program with exit level equivalent to IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'kr', 'Universal English College (UEC)', '• Upper Intermediate 종료 수준의 General English
• IELTS 5.5에 상응하는 종료 수준의 IELTS 준비
• IELTS 5.5에 상응하는 종료 수준의 Academic English Program');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'sp', 'Universal English College (UEC)', '• Inglés General con nivel de salida Intermedio Superior
• Preparación IELTS con nivel de salida equivalente a IELTS 5.5
• Programa de Inglés Académico con nivel de salida equivalente a IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'pt', 'Universal English College (UEC)', '• General English com nível de saída Upper Intermediate
• Preparatório IELTS com nível de saída equivalente ao IELTS 5.5
• Academic English Program com nível de saída equivalente ao IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'jp', 'Universal English College (UEC)', '• General English Upper‑Intermediate修了
• IELTS対策（IELTS5.5相当）
• Academic English Program（IELTS5.5相当）');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'tl', 'Universal English College (UEC)', '• General English na may Upper Intermediate exit level
• IELTS Preparation na may exit level na katumbas ng IELTS 5.5
• Academic English Program na may exit level na katumbas ng IELTS 5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'zh', 'Universal English College (UEC)', '• General English中高级出口水平
• 雅思备考出口水平相当于雅思5.5
• 学术英语课程出口水平相当于雅思5.5');
  INSERT INTO entry_requirement_elicos_partner_translations (partner_id, locale, partner_name, courses)
  VALUES (v_partner_10_id, 'id', 'Universal English College (UEC)', '• General English dengan level keluar Upper Intermediate
• IELTS Preparation dengan level keluar setara IELTS 5.5
• Academic English Program dengan level keluar setara IELTS 5.5');

END $$;

COMMIT;

-- Done! Check: SELECT * FROM entry_requirement_pages;
