import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// 코스별 상세 정보 데이터
export const courseDetailsData: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate IV in Kitchen Management课程为期18个月，共78周，包括18周假期。将分为六个10周学期。',
    },
    workPlacement: {
      title: '实习安排',
      description: '600小时',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['厨师', '部门主厨'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'SIT50422 Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多详情，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507。',
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: '课程时长 – 与厨房管理课程打包',
      description: [
        '在ABM Further Education完成SIT40521 Certificate IV in Kitchen Management的学生将获得20个学分转移单元。这将把SIT50422 Diploma of Hospitality Management课程缩短至26周，包括：两(2)个学期，每学期10周（共20周）教学期间。假期共6周（按时间表规定）。',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: '课程时长 – 餐饮服务方向',
      description:
        '该资格课程为期78周，包括：\n六(6)个学期，每学期10周（共60周）教学期间。\n假期共18周（按时间表规定）',
    },
    courseStructure1: {
      title: '课程结构 – 与Certificate IV in Kitchen Management打包',
      description: [
        {
          type: 'table' as const,
          headers: ['单元数量', '代码', '名称', '核心/选修'],
          rows: [
            ['1', 'SITXFIN010', 'Prepare and monitor budgets', 'Core'],
            ['2', 'SITXWHS006', 'Identify hazards, assess and control safety risks', ''],
            ['3', 'SITXINV008', 'Control stock', 'Group C'],
            ['4', 'SITXMGT005', 'Establish and conduct business relationships', 'Core'],
            ['5', 'SITXGLC002', 'Identify and manage legal risks and comply with law', 'Core'],
            ['6', 'SITXCCS015', 'Enhance customer service experiences', 'Core'],
            ['7', 'SITXCCS010', 'Provide visitor information', 'Group C'],
            ['8', 'SITXCCS016', 'Develop and manage quality customer service practices', 'Core'],
          ],
        },
      ],
    },
    courseStructure2: {
      title: '课程结构 – 独立餐饮服务方向',
      description: [
        {
          type: 'table' as const,
          headers: ['单元数量', '代码', '名称', '核心/选修'],
          rows: [
            ['1', 'SITXCCS015', 'Enhance customer service experiences', 'Core'],
            ['2', 'SITXCCS016', 'Develop and manage quality customer service practices', 'Core'],
            ['3', 'SITXCOM010', 'Manage conflict', 'Core'],
            ['4', 'SITXFIN009', 'Manage finances within a budget', 'Core'],
            ['5', 'SITXFIN010', 'Prepare and monitor budgets', 'Core'],
            ['6', 'SITXGLC002', 'Identify and manage legal risks and comply with law', 'Core'],
            ['7', 'SITXHRM008', 'Roster staff', 'Core'],
            ['8', 'SITXHRM009', 'Lead and manage people', 'Core'],
            ['9', 'SITXMGT004', 'Monitor work operations', 'Core'],
            ['10', 'SITXMGT005', 'Establish and conduct business relationships', 'Core'],
            ['11', 'SITXWHS007', 'Implement and monitor work health and safety practices', 'Core'],
            ['12', 'SITXFSA005', 'Use hygienic practices for food safety', 'Group A'],
            ['13', 'SITHIND008', 'Work effectively in the Hospitality service', 'Group B'],
            ['14', 'SITXHRM010', 'Recruit, select and induct staff', 'Group D'],
            ['15', 'SITHFAB030*', 'Prepare and serve cocktails', 'Group C'],
            ['16', 'SITXINV008', 'Control stock', 'Group C'],
            ['17', 'SITHKOP014', 'Plan catering for events or functions', 'Group C'],
            ['18', 'BSBCMM411', 'Make presentations', 'Group D'],
            ['19', 'BSBSUS511', 'Develop workplace policies and procedures for sustainability', 'Group D'],
            ['20', 'BSBTWK501', 'Lead diversity and inclusion', 'Group D'],
            ['21', 'SITHFAB021', 'Provide responsible service of alcohol', 'Group C'],
            ['22', 'SITHFAB023', 'Operate a bar', 'Group C'],
            ['23', 'SITXFSA006', 'Participate in safe food handling practices', 'Group C'],
            ['24', 'SITXFSA008*', 'Develop and implement a food safety program', 'Group C'],
            ['25', 'SITHFAB025', 'Prepare and serve espresso coffee', 'Group C'],
            ['26', 'SITHIND006', 'Source and use information on the hospitality industry', 'Group C'],
            ['27', 'SITXCCS010', 'Provide visitor information', 'Group C'],
            ['28', 'SITXCCS012', 'Provide lost and found services', 'Group C'],
          ],
        },
      ],
    },
    workPlacement: {
      title: '实习安排 • 仅限餐饮服务方向',
      description: [
        '285小时（*与Certificate IV in Kitchen Management课程打包时不适用）',
        '\n**工作场所组成部分**',
        '需要注意的是，工作场所单元是本资格的一部分，学生需要完成培训包要素和绩效标准中规定的任务。',
        '\nABM将提供工作场所日志，学生需要每天记录实习期间执行的活动/任务。ABM工作场所评估员将在预定的现场访问期间进行监督。每日活动/日志条目需由工作场所主管每天签字。',
        {
          type: 'table' as const,
          headers: ['学期', '周数', '小时'],
          rows: [
            ['第5学期', '第1-10周 SITHIND008 有效地在酒店服务中工作 – 共57个班次中的30个班次，每班5小时', '150'],
            ['第6学期', '第1-9周 SITHIND008 有效地在酒店服务中工作 – 共57个班次中的27个班次，每班5小时', '135'],
            ['', '最低总小时数', '285'],
          ],
        },
      ],
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '酒店或汽车旅馆经理',
        '餐厅经理',
        '咖啡馆经理',
        '餐饮主管',
        '酒吧经理',
        '度假村经理',
        '宴会经理',
      ],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'SIT60322 – Advanced Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Advanced Diploma of Hospitality Management课程为期24个月，共104周，包括24周假期。将分为八个10周学期。',
    },
    courseStructure1: {
      title: '课程结构 – 与Certificate IV in Kitchen Management和Diploma of Hospitality Management打包',
      description: [
        '在ABM Further Education完成以下两个资格的学生有资格获得25个学分转移',
        '• SIT40521 Certificate IV in Kitchen Management',
        '• SIT50422 Diploma of Hospitality Management',
        'Advanced Diploma of Hospitality Management课程可在两个学期内完成（26周）',
      ],
    },
    courseStructure2: {
      title: '课程结构 – 与Diploma of Hospitality Management打包',
      description: [
        {
          type: 'table' as const,
          headers: ['单元数量', '代码', '名称', '核心/选修'],
          rows: [
            ['1', 'BSBFIN601', 'Manage organisational finances', 'Core'],
            ['2', 'BSBOPS601', 'Develop and implement business plans', 'Core'],
            ['3', 'SITXFIN011', 'Manage physical assets', 'Core'],
            ['4', 'SITXHRM012', 'Monitor staff performance', 'Core'],
            ['5', 'SITXMPR014', 'Develop and implement marketing strategies', 'Core'],
            ['6', 'SITXWHS008', 'Establish and maintain a work health and safety system', 'Core'],
            ['7', 'SITHFAB027', 'Serve food and beverage', 'Group C'],
            ['8', 'SITHFAB024', 'Prepare and serve non-alcoholic beverages', 'Group C'],
          ],
        },
        '**在ABM Further Education完成SIT50422的学生有资格获得25个学分转移，可在两个学期内完成课程（26周）。**',
      ],
    },
    workPlacement: {
      title: '实习安排',
      description: [
        '独立 - Advanced Diploma of Hospitality Management = 285小时',
        '与Certificate IV in Kitchen Management和Diploma of Hospitality Management打包 = 无额外工作组成部分小时数',
        '与Diploma of Hospitality Management打包 = 无额外工作组成部分小时数',
      ],
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '酒店或度假村经理',
        '餐厅经理',
        '活动经理',
        '前台经理',
        '客房部经理',
        '宴会经理',
        '运营经理',
        '总经理',
      ],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '潜在的就业选择是在任何酒店行业部门担任部门或小型企业经理。另请参阅资格描述中列出的可能职位。',
        '\n完成本课程的学生可能希望继续接受各种高等教育资格教育。',
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description: [
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
      ],
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate III in Fitness课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['健身房教练', '团体健身教练', '健身教练'],
    },
    pathways: {
      title: '进修途径',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'SIS40221 Certificate IV in Fitness',
          url: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate IV in Fitness课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '私人教练',
        '健身教练（高级）',
        '户外教练',
        '企业或职场教练',
        '在线私人教练',
        '健身工作室业主/经理',
      ],
    },
    pathways: {
      title: '进修途径',
      description: [
        '完成本课程的学生可能希望继续在健身行业深造，如：',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
        'SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50421 Diploma of Outdoor Leadership或继续接受各种高等教育资格教育。',
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate III in Fitness（快速班）课程为期3个月，共12周，包括工作经验和1年健身房会员资格。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['健身房教练', '团体健身教练', '健身教练'],
    },
    pathways: {
      title: '进修途径',
      description: [
        '完成本课程的学生可能希望继续在健身行业深造，如：',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate IV in Fitness（快速班）课程为期3个月，共12周，包括工作经验和1年健身房会员资格。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '私人教练',
        '健身教练（高级）',
        '户外教练',
        '企业或职场教练',
        '在线私人教练',
        '健身工作室业主/经理',
      ],
    },
    pathways: {
      title: '进修途径',
      description: [
        '完成本课程的学生可能希望继续在健身行业深造，如：',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate IV in Business课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['行政主管', '助理业务分析师'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB50120 Diploma of Business',
          url: '/business-and-management-courses/bsb50120-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: '课程时长',
      description:
        'Diploma of Business课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['业务经理', '首席数据官'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB60120 Advanced Diploma of Business',
          url: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: '课程时长',
      description:
        'Diploma of Sport课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '运动训练师',
        '体育经理',
        '私人教练',
        '健身教练',
        '体能教练',
        '教练组成员',
        '健身房总经理',
        '体育俱乐部教练角色，如网球教练、游泳教练和足球教练',
        '前台/销售',
      ],
    },
    pathways: {
      title: '进修途径',
      description: ['完成本课程的学生可能希望继续接受各种高等教育资格教育。'],
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: '课程时长',
      description:
        'Advanced Diploma of Business课程为期18个月，共78周，包括18周假期。将分为六个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['高级行政人员', '高级主管', '执行经理/总监'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '潜在的就业选择是在各种行业领域担任经理。',
        '完成本课程的学生可能希望继续接受BSB80120 Graduate Diploma of Management (Learning)以及商业或管理方面的高等教育资格教育。',
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关RTO的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Graduate Diploma of Management (Learning)课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['业务经理', '业务总监'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '潜在的就业选择是在利用学习建立组织能力的各行业领域担任领导者或经理。',
        '完成本课程的学生可能希望继续接受组织学习和发展方面的各种高等教育资格教育。',
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate IV in Project Management Practice课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['合同官', '项目管理员', '质量官', '小型企业主'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB50820 – Diploma of Project Management Practice',
          url: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: '课程时长',
      description:
        'Diploma of Project Management Practice课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['项目官', '项目协调员', '项目经理'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB60720 Advanced Diploma of Program Management',
          url: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Advanced Diploma of Program Management课程为期18个月，共78周，包括18周假期。将分为六个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['项目群经理', '高级项目经理', '项目群负责人', '项目群协调员'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: ['完成本课程的学生可能希望继续接受各种高等教育资格教育。'],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate IV in Human Resource Management课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['人力资源助理', '招聘顾问', '职业健康安全官'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB50320 – Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Diploma of Human Resource Management课程为期12个月，共52周，包括12周假期。将分为四个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: ['人力资源经理', '人力资源官', '招聘顾问'],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB60320 – Advanced Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: '课程时长',
      description:
        'Advanced Diploma of Human Resource Management课程为期18个月，共78周，包括18周假期。将分为六个10周学期。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '人力资源从业者',
        '人事官',
        '劳资关系经理',
        '人力资源发展从业者',
        '人力资源经理',
      ],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '获得此资格后，毕业生可以继续攻读以下资格：',
        {
          type: 'link',
          text: 'BSB80120 – Graduate Diploma of Management (Learning)',
          url: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: '附加信息',
      description:
        '请在入学前阅读学生手册，因为其中包含有关ABM的重要信息。如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
    },
  },
  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseDuration: {
      title: '课程时长',
      description:
        'Certificate III in Health Services Assistance课程为期4个月，共16周，在我们的悉尼校区进行面授教学。',
    },
    workPlacement: {
      title: '实习安排',
      description:
        '在真实医疗环境中进行80小时的实习。在实习期间，您将完成HLTINF006（感染预防与控制）、HLTAIN001（在急性护理环境中协助护理）和CHCCCS031（提供个性化支持）。支持包括实习协议、合格培训师/评估师的监督、日志指导和支持，以及根据业务需求灵活安排班次。',
    },
    studentSupport: {
      title: '学生支持',
      description: [
        '• ABM在入学前通过入学和预入学表格评估学生的支持需求。',
        '• 可能的支持包括LLN援助、辅助技术、额外辅导以及在线学习工具帮助。',
        '• 入学前会告知额外费用或限制。',
        '• 如果ABM无法提供某些支持，学生将被转介至第三方提供商，费用自理。',
        '• 如果ABM无法提供合适的学习环境，将告知学生并可能将其转介至其他提供商，而非让其入学。',
      ],
    },
    jobRoles: {
      title: '就业岗位',
      description: [
        '护理助理（AIN）',
        '健康服务助理',
        '个人护理助理',
        '医院勤务员',
        '患者支持助理',
        '支持工作者',
        '护理工作者',
      ],
    },
    pathways: {
      title: '进修途径/职业机会',
      description: [
        '完成后，您可能有资格继续攻读：',
        '• HLT54115 Diploma of Nursing',
        '• CHC33015 Certificate III in Individual Support',
        '• CHC43115 Certificate IV in Disability',
        '• CHC52015 Diploma of Community Services',
        '• HLT47321 Certificate IV in Health Administration',
        '以及更多医疗保健资格。',
      ],
    },
    additionalInfo: {
      title: '项目亮点',
      description: [
        '• 在支持性的面对面课堂环境中学习',
        '• 培养专业的医疗沟通英语能力',
        '• 获得国家认可的资格',
        '• 在真实医疗环境中完成80小时实习',
        '• 适合有或没有医疗保健经验的人士',
        '• 全程提供综合支持',
        '如需更多信息，请发送电子邮件至info@abm.edu.au或致电+61 (02) 9160 4507联系ABM。',
      ].join('\n'),
    },
  },
};
