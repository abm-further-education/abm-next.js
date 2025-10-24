import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// コース別 詳細情報データ（日本語版）
export const courseDetailsData_jp: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate IV in Kitchen Management」は総期間18か月（78週間、うち休暇18週間）で提供されます。10週間×6学期に分割して実施します。',
    },
    workPlacement: {
      title: '実習（ワークプレースメント）',
      description: '600時間',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• ABMは出願前に「入学申込書」および「事前評価フォーム」を通じて学習支援の必要性を評価します。',
        '• 例：LLN支援、支援技術、追加チュートリアル、オンライン学習ツールの使用支援など。',
        '• 追加費用や制約がある場合は、入学前に通知します。',
        '• 提供が難しい支援については、学生の自己負担で外部機関を案内する場合があります。',
        '• 適切な学習環境を提供できない場合、入学を見送る旨を学生に伝え、他機関を案内する場合があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: ['シェフ', 'シェフ・ド・パルティ（部門シェフ）'],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'SIT50422 Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」を必ずご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: '受講期間（Kitchen Management とのパッケージ）',
      description: [
        'ABMでSIT40521 Certificate IV in Kitchen Managementを修了した学生は20ユニットの単位認定を受けられます。これにより、SIT50422 Diploma of Hospitality Managementは26週間に短縮され、10週間×2学期（計20週間）の授業期間＋6週間の休暇で構成されます（時間割に準拠）。',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: '受講期間（フード＆ビバレッジ専攻）',
      description:
        '総期間78週間：授業期間60週間（10週間×6学期）＋休暇18週間（時間割どおり）。',
    },
    courseStructure1: {
      title: 'カリキュラム構成（Kitchen Management とパッケージ）',
      description: [
        {
          type: 'table' as const,
          headers: [
            'ユニット数',
            'コード',
            'ユニット名（公式名）',
            '必修／選択',
          ],
          rows: [
            ['1', 'SITXFIN010', 'Prepare and monitor budgets', '必修'],
            [
              '2',
              'SITXWHS006',
              'Identify hazards, assess and control safety risks',
              '',
            ],
            ['3', 'SITXINV008', 'Control stock', 'グループC'],
            [
              '4',
              'SITXMGT005',
              'Establish and conduct business relationships',
              '必修',
            ],
            [
              '5',
              'SITXGLC002',
              'Identify and manage legal risks and comply with law',
              '必修',
            ],
            ['6', 'SITXCCS015', 'Enhance customer service experiences', '必修'],
            ['7', 'SITXCCS010', 'Provide visitor information', 'グループC'],
            [
              '8',
              'SITXCCS016',
              'Develop and manage quality customer service practices',
              '必修',
            ],
          ],
        },
      ],
    },
    courseStructure2: {
      title: 'カリキュラム構成（単体：フード＆ビバレッジ専攻）',
      description: [
        {
          type: 'table' as const,
          headers: [
            'ユニット数',
            'コード',
            'ユニット名（公式名）',
            '必修／選択',
          ],
          rows: [
            ['1', 'SITXCCS015', 'Enhance customer service experiences', '必修'],
            [
              '2',
              'SITXCCS016',
              'Develop and manage quality customer service practices',
              '必修',
            ],
            ['3', 'SITXCOM010', 'Manage conflict', '必修'],
            ['4', 'SITXFIN009', 'Manage finances within a budget', '必修'],
            ['5', 'SITXFIN010', 'Prepare and monitor budgets', '必修'],
            [
              '6',
              'SITXGLC002',
              'Identify and manage legal risks and comply with law',
              '必修',
            ],
            ['7', 'SITXHRM008', 'Roster staff', '必修'],
            ['8', 'SITXHRM009', 'Lead and manage people', '必修'],
            ['9', 'SITXMGT004', 'Monitor work operations', '必修'],
            [
              '10',
              'SITXMGT005',
              'Establish and conduct business relationships',
              '必修',
            ],
            [
              '11',
              'SITXWHS007',
              'Implement and monitor work health and safety practices',
              '必修',
            ],
            [
              '12',
              'SITXFSA005',
              'Use hygienic practices for food safety',
              'グループA',
            ],
            [
              '13',
              'SITHIND008',
              'Work effectively in the Hospitality service',
              'グループB',
            ],
            [
              '14',
              'SITXHRM010',
              'Recruit, select and induct staff',
              'グループD',
            ],
            ['15', 'SITHFAB030*', 'Prepare and serve cocktails', 'グループC'],
            ['16', 'SITXINV008', 'Control stock', 'グループC'],
            [
              '17',
              'SITHKOP014',
              'Plan catering for events or functions',
              'グループC',
            ],
            ['18', 'BSBCMM411', 'Make presentations', 'グループD'],
            [
              '19',
              'BSBSUS511',
              'Develop workplace policies and procedures for sustainability',
              'グループD',
            ],
            ['20', 'BSBTWK501', 'Lead diversity and inclusion', 'グループD'],
            [
              '21',
              'SITHFAB021',
              'Provide responsible service of alcohol',
              'グループC',
            ],
            ['22', 'SITHFAB023', 'Operate a bar', 'グループC'],
            [
              '23',
              'SITXFSA006',
              'Participate in safe food handling practices',
              'グループC',
            ],
            [
              '24',
              'SITXFSA008*',
              'Develop and implement a food safety program',
              'グループC',
            ],
            [
              '25',
              'SITHFAB025',
              'Prepare and serve espresso coffee',
              'グループC',
            ],
            [
              '26',
              'SITHIND006',
              'Source and use information on the hospitality industry',
              'グループC',
            ],
            ['27', 'SITXCCS010', 'Provide visitor information', 'グループC'],
            [
              '28',
              'SITXCCS012',
              'Provide lost and found services',
              'グループC',
            ],
          ],
        },
      ],
    },
    workPlacement: {
      title: '実習（フード＆ビバレッジ専攻のみ）',
      description: [
        '285時間（* Kitchen Managementとのパッケージ時は適用外）',
        '\n**実習（職場）コンポーネント**',
        '本資格には職場実習ユニットが含まれており、訓練パッケージの要件（要素・パフォーマンス基準）に沿ったタスクの達成が必要です。',
        '\nABMから日誌（ログブック）が配布され、実習中の活動・タスクを毎日記録します。ABMアセッサーが計画訪問にてモニタリングを行い、各日の活動は職場スーパーバイザーの署名が必要です。',
        {
          type: 'table' as const,
          headers: ['学期', '週番号', '時間数'],
          rows: [
            [
              '学期5',
              '週1–10：SITHIND008 Work effectively in the hospitality service – 5時間×30シフト（全57シフトのうち）',
              '150',
            ],
            [
              '学期6',
              '週1–9：SITHIND008 Work effectively in the hospitality service – 5時間×27シフト（全57シフトのうち）',
              '135',
            ],
            ['', '合計（最小時間）', '285'],
          ],
        },
        '* 実際のシフト長は事業都合により変動する場合があります。ABMは業界標準に基づき1シフトあたり約5時間を想定しています。必要に応じて所定の285時間に達するまで追加勤務が必要になる場合があります。\n\n',
        '**実習手配について**',
        '• 実習先は学生が選定可能ですが、SITHIND008の要件を満たす設備・環境があるかをトレーナー／アセッサーが確認します。',
        '• 実習中はABMのトレーナー／アセッサーが指導・評価します。',
        '• 実習先が見つからない場合、ABMが手配します。',
        '• 実習契約書は関係者間で締結します（ABMが提供）。',
        '• ログブックの記入方法はトレーナー／アセッサーが指導します。',
        '• ABMは、実習先訪問・手配・ログブック指導等を第三者に委託する場合があります。',
      ],
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• ABMは出願前に学習支援の必要性を評価します（入学申込書・事前評価フォーム）。',
        '• 例：LLN支援、支援技術、追加チュートリアル、オンライン学習ツールの支援など。',
        '• 追加費用や制約がある場合は事前に通知します。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りを案内する場合があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'ホテル／モーテルマネージャー',
        'レストランマネージャー',
        'カフェマネージャー',
        'フード＆ビバレッジ・スーパーバイザー',
        'バー・マネージャー',
        'リゾート・マネージャー',
        'ケータリング・マネージャー',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'SIT60322 – Advanced Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Advanced Diploma of Hospitality Management」は総期間24か月（104週間、うち休暇24週間）。10週間×8学期に分割して実施します。',
    },
    courseStructure1: {
      title:
        'カリキュラム構成（Certificate IV in Kitchen Management & Diploma of Hospitality Management とのパッケージ）',
      description: [
        'ABMで両資格を修了した学生は25ユニットの単位認定が受けられます。',
        '• SIT40521 Certificate IV in Kitchen Management',
        '• SIT50422 Diploma of Hospitality Management',
        '上記を前提とする場合、本コースは2学期（26週間）で修了可能です。',
      ],
    },
    courseStructure2: {
      title:
        'カリキュラム構成（Diploma of Hospitality Management とのパッケージ）',
      description: [
        {
          type: 'table' as const,
          headers: [
            'ユニット数',
            'コード',
            'ユニット名（公式名）',
            '必修／選択',
          ],
          rows: [
            ['1', 'BSBFIN601', 'Manage organisational finances', '必修'],
            ['2', 'BSBOPS601', 'Develop and implement business plans', '必修'],
            ['3', 'SITXFIN011', 'Manage physical assets', '必修'],
            ['4', 'SITXHRM012', 'Monitor staff performance', '必修'],
            [
              '5',
              'SITXMPR014',
              'Develop and implement marketing strategies',
              '必修',
            ],
            [
              '6',
              'SITXWHS008',
              'Establish and maintain a work health and safety system',
              '必修',
            ],
            ['7', 'SITHFAB027', 'Serve food and beverage', 'グループC'],
            [
              '8',
              'SITHFAB024',
              'Prepare and serve non-alcoholic beverages',
              'グループC',
            ],
          ],
        },
        '**ABMでSIT50422を修了済みの学生は25ユニットの単位認定により、2学期（26週間）で修了可能です。**',
      ],
    },
    workPlacement: {
      title: '実習（ワークプレースメント）',
      description: [
        '単体（Advanced Diploma of Hospitality Management のみ）：285時間',
        'Kitchen Management & Diploma とのパッケージ：追加の実習時間なし',
        'Diploma とのパッケージ：追加の実習時間なし',
      ],
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前に学習支援の必要性を評価（入学申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習ツールの支援など。',
        '• 追加費用／制約は事前に通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合、入学を見送る旨を通知する場合があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'ホテル／リゾート・マネージャー',
        'レストラン・マネージャー',
        'イベント・マネージャー',
        'フロントオフィス・マネージャー',
        'ハウスキーピング・マネージャー',
        'ケータリング・マネージャー',
        'オペレーション・マネージャー',
        'ゼネラル・マネージャー',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        'ホスピタリティ業界の各分野で部門責任者や中小事業のマネージャーとしての就業が想定されます。',
        '\n修了後は高等教育課程への進学も可能です。',
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description: [
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
      ],
    },
  },

  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate III in Fitness」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'ジム・インストラクター',
        'グループフィットネス・インストラクター',
        'フィットネス・インストラクター',
      ],
    },
    pathways: {
      title: '進学の道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'SIS40221 Certificate IV in Fitness',
          url: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate IV in Fitness」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'パーソナルトレーナー',
        '上級フィットネス・インストラクター',
        'アウトドア・トレーナー',
        '企業／職域トレーナー',
        'オンライン・パーソナルトレーナー',
        'フィットネス・スタジオのオーナー／マネージャー',
      ],
    },
    pathways: {
      title: '進学の道',
      description: [
        '修了後は以下の資格等へ進学可能です：',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
        'SIS50122 Diploma of Sport, Aquatics and Recreation Management、SIS50421 Diploma of Outdoor Leadership、その他の高等教育課程など。',
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate III in Fitness（短期集中）」は総期間3か月（12週間）で、実務経験と1年間のジム会員権を含みます。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'ジム・インストラクター',
        'グループフィットネス・インストラクター',
        'フィットネス・インストラクター',
      ],
    },
    pathways: {
      title: '進学の道',
      description: [
        '修了後は以下の資格等へ進学可能です：',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate IV in Fitness（短期集中）」は総期間3か月（12週間）で、実務経験と1年間のジム会員権を含みます。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'パーソナルトレーナー',
        '上級フィットネス・インストラクター',
        'アウトドア・トレーナー',
        '企業／職域トレーナー',
        'オンライン・パーソナルトレーナー',
        'フィットネス・スタジオのオーナー／マネージャー',
      ],
    },
    pathways: {
      title: '進学の道',
      description: [
        '修了後は以下の資格等へ進学可能です：',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate IV in Business」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'アドミニストレーション・オフィサー',
        'アシスタント・ビジネスアナリスト',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB50120 Diploma of Business',
          url: '/business-and-management-courses/bsb50120-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Diploma of Business」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: ['ビジネス・マネージャー', 'チーフ・データ・オフィサー'],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB60120 Advanced Diploma of Business',
          url: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Diploma of Sport」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'スポーツ・トレーナー',
        'スポーツ・マネージャー',
        'パーソナルトレーナー',
        'フィットネス・トレーナー',
        'ストレングスコーチ',
        'コーチング・スタッフ',
        'ジムのゼネラルマネージャー',
        'スポーツクラブの各種コーチ（例：テニス、スイミング、フットボール）',
        '受付／セールス',
      ],
    },
    pathways: {
      title: '進学の道',
      description: ['修了後は多様な高等教育課程への進学が可能です。'],
    },
  },

  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Advanced Diploma of Business」は総期間18か月（78週間、うち休暇18週間）。10週間×6学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        '上級管理職／管理者',
        'シニア・エグゼクティブ',
        'エグゼクティブ・マネージャー／ディレクター',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '各業界分野の管理職としての就業が想定されます。',
        '修了後は BSB80120 Graduate Diploma of Management (Learning) や、ビジネス・マネジメント分野の高等教育課程への進学が可能です。',
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Graduate Diploma of Management (Learning)」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: ['ビジネス・マネージャー', 'ビジネス・ディレクター'],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '学習を通じて組織能力を高める分野におけるリーダー／マネージャーとしての就業が想定されます。',
        '修了後は組織学習・人材開発分野の高等教育課程へ進学が可能です。',
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate IV in Project Management Practice」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        '契約担当者',
        'プロジェクト・アドミニストレーター',
        '品質管理担当',
        'スモールビジネス・オーナー',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB50820 – Diploma of Project Management Practice',
          url: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Diploma of Project Management Practice」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'プロジェクト・オフィサー',
        'プロジェクト・コーディネーター',
        'プロジェクト・マネージャー',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB60720 Advanced Diploma of Program Management',
          url: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Advanced Diploma of Project Management Practice」は総期間18か月（78週間、うち休暇18週間）。10週間×6学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'プログラム・マネージャー',
        '上級プロジェクト・マネージャー',
        'プログラム・リーダー',
        'プログラム・コーディネーター',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: ['修了後は多様な高等教育課程への進学が可能です。'],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb40420-certificate-iv-in-human-resource-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate IV in Human Resource Management」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        'HRアシスタント',
        'リクルートメント・コンサルタント',
        '労働安全衛生（WHS）担当者',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB50320 – Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Diploma of Human Resource Management」は総期間12か月（52週間、うち休暇12週間）。10週間×4学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        '人事マネージャー',
        '人事担当者',
        'リクルートメント・コンサルタント',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB60320 – Advanced Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Advanced Diploma of Human Resource Management」は総期間18か月（78週間、うち休暇18週間）。10週間×6学期に分割して実施します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前の支援ニーズ評価（申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        '人事プラクティショナー',
        '人事（Personnel）オフィサー',
        '労使関係（IR）マネージャー',
        '人材開発プラクティショナー',
        'HRマネージャー',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '本資格取得後は、次の上位資格への進学が可能です：',
        {
          type: 'link',
          text: 'BSB80120 – Graduate Diploma of Management (Learning)',
          url: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: '追加情報',
      description:
        '出願前に「学生ハンドブック」をご確認ください。詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
    },
  },

  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseDuration: {
      title: '受講期間',
      description:
        '「Certificate III in Health Services Assistance」は総期間4か月（16週間）。シドニー校での対面授業を含みます。',
    },
    workPlacement: {
      title: '実習（ワークプレースメント）',
      description:
        '医療現場での実習80時間を実施します。実習中に HLTINF006（感染予防と管理）、HLTAIN001（急性期ケアにおける看護補助）、CHCCCS031（個別化支援の提供）を修得します。実習契約の手配、資格を持つトレーナー／アセッサーによる指導、ログブックの記入支援、事業都合に応じた柔軟なシフトなどのサポートを提供します。',
    },
    studentSupport: {
      title: '学生サポート',
      description: [
        '• 出願前に学習支援の必要性を評価（入学申込書・事前評価フォーム）。',
        '• LLN支援、支援技術、追加チュートリアル、オンライン学習支援など。',
        '• 追加費用／制約は事前通知。',
        '• 提供困難な支援は外部機関を案内（自己負担）。',
        '• 適切な学習環境の提供が難しい場合は入学見送りの可能性があります。',
      ],
    },
    jobRoles: {
      title: '想定職種',
      description: [
        '看護助手（AIN）',
        'ヘルスサービス・アシスタント',
        'パーソナルケア・アシスタント',
        '病院オーダリー',
        '患者サポート・アシスタント',
        'サポートワーカー',
        'ケアワーカー',
      ],
    },
    pathways: {
      title: '進学／キャリアの道',
      description: [
        '修了後は以下への進学が可能です：',
        '• HLT54115 Diploma of Nursing',
        '• CHC33015 Certificate III in Individual Support',
        '• CHC43115 Certificate IV in Disability',
        '• CHC52015 Diploma of Community Services',
        '• HLT47321 Certificate IV in Health Administration',
        'その他、医療系資格など。',
      ],
    },
    additionalInfo: {
      title: 'プログラムの特長',
      description: [
        '• サポートの行き届いた対面授業',
        '• 医療現場で使える専門英語の習得',
        '• 国内認定資格の取得',
        '• 実際の医療機関での実習80時間',
        '• 医療未経験者から経験者まで幅広く対象',
        '• 受講全体を通した手厚いサポート',
        '詳細は info@abm.edu.au までメール、または +61 (02) 9160 4507 へお電話ください。',
      ].join('\n'),
    },
  },
};
