import { CourseInformationInfo } from '@/domains/courses/components/CourseInformation';

// CourseInformation 데이터 매핑
export const courseInformationData: { [key: string]: CourseInformationInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseCode: 'SIT40521',
    cricosCode: '109578H',
    description:
      '该资格证书（于2022年6月9日从SIT40516 - 商业烹饪四级证书更新）适用于担任监督或团队领导角色的厨师和厨工。他们独立工作或在有限的指导下工作，解决非常规问题。\n\n它为学生准备在餐厅、酒店、俱乐部、酒吧、咖啡馆、咖啡店工作，或在这些领域经营小型企业。\n\n技能必须根据澳大利亚法律、标准和行业规范使用。\n\n在发布时，该资格证书没有许可或认证要求。',
    duration: '78周',
    entryRequirement: '学生必须完成相当于10年级的学历',
    deliveryMode: {
      title: '授课方式：',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM厨房',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseCode: 'BSB40120',
    cricosCode: '107906B',
    description:
      '参加商业四级证书的学生将专注于建立有效的领导能力和解决问题的能力，这对于在各种商业服务工作岗位取得成功至关重要。追求商业导向职业道路的学生将具备完成专业和中等复杂行政或运营任务所需的技能，这将需要高级的自我发展技能。完成商业四级证书后，您将能够实施有效的沟通和解决问题的技能，这将对他们在所选领域的成功至关重要。学生将学习和实施高水平的技能和广泛的知识，以将解决方案应用于一定范围的不可预测的复杂情况，并能够简明地指导团队通过提出的任何解决方案。',
    duration: '52周',
    entryRequirement: '学生必须完成相当于10年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB40120',
    },
  },
  'bsb50120-diploma-of-business': {
    courseCode: 'BSB50120',
    cricosCode: '107904D',
    description:
      '该资格证书反映了在各种企业和行业背景下应用专业知识和技能以及领导和管理经验的个人角色。\n\n该级别的个人在规划、组织、实施和监控自己的工作量和他人的工作量时表现出主动性和判断力。他们使用沟通技巧来支持个人和团队满足组织或企业的要求。\n\n他们可能会规划、设计、应用和评估不可预测问题的解决方案，并从各种来源识别、分析和综合信息。',
    duration: '52周',
    entryRequirement: '学生必须完成相当于12年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB50120',
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseCode: 'BSB60120',
    cricosCode: '107905C',
    description:
      '希望提高领导能力、学习关键问题解决程序并参与团队环境的个人应该选择ABM的商业高级文凭。该课程的毕业生将具备在其专业领域处理高度复杂任务所需的所有必要工具。ABM的商业高级文凭将为学生提供在所选领域专业化和进入商业环境所需的关键基础。\n\n在整个课程中，学生将参与旨在协助复杂问题解决、制定和实施商业计划、制定组织战略并为战略劳动力规划做出贡献的练习——所有这些都是在您专业工作领域出类拔萃所必需的技能。',
    duration: '78周',
    entryRequirement:
      '学生必须完成BSB培训包的文凭级别课程（AQF 5级）或高级文凭级别课程（AQF 6级）。',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB60120',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseCode: 'BSB80120',
    cricosCode: '107907A',
    description:
      '该资格证书反映了应用高度专业化管理知识和技能来领导和影响复杂动态管理环境变革的个人角色。\n\n该级别的个人使用认知和沟通技巧来识别、分析、综合和处理来自各种来源的信息，并将知识和技能传授给他人。\n\n他们运用创造性、概念性和分析技能来制定和评估复杂想法或启动变革。他们展示了知识和技能的自主应用，在复杂情况下具有很大的个人责任和自主权。',
    duration: '52周',
    entryRequirement: '学生必须完成高级文凭级别课程（AQF 6级）或更高。',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB80120',
    },
  },
  'industry-placement-work-placement': {
    courseCode: 'SIT40521 + SIT50422',
    description:
      '您准备好将烹饪技能提升到新的水平了吗？\n\n在ABM Further Education，我们认识到真正的行业经验与厨房中的理论和实践学习同样重要。\n\n厨房管理四级证书通过将课堂学习与广泛的实践经验相结合，为学生准备在商业厨房中担任监督和领导角色。学生将有机会在真实的酒店环境中接受培训，如餐厅、酒店和养老院，由经验丰富的行业专业人士指导。\n\n为了加强就业能力并确保职业准备，该课程现在包括600小时的结构化行业实习，从第三学期开始。\n\n从第三学期开始，学生每周可以完成多达16小时的额外时间，从第六学期开始，每周可以完成多达20小时的额外时间作为行业实习的一部分。',
    deliveryMode: {
      title: '授课方式',
      mode: '面授 + 行业实习',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM厨房',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
        {
          type: '行业实习',
          address: '各种商业厨房、餐厅、酒店和养老设施',
        },
      ],
    },
    additionalInfo: {
      description:
        '我们鼓励您找到适合您兴趣和目标的工作实习，但如果您需要任何帮助，我们也会在这里支持您。我们与各种行业合作伙伴有着密切的联系，他们一直在寻找像您这样有才华和积极性的学生。\n\n我们相信这次工作实习是您课程的关键组成部分，将为您准备应对烹饪行业的挑战和机遇。',
    },
    tables: [
      {
        headers: ['学期', '', '行业实习时间'],
        rows: [
          ['第1学期', '理论 + 实践课', '无'],
          ['第2学期', '理论 + 实践课', '无'],
          ['第3学期', '理论 + 实践课', '每周额外16小时'],
          ['第4学期', '理论 + 实践课', '每周额外16小时'],
          ['第5学期', '理论 + 实践课', '每周额外16小时'],
          ['第6学期', '-', '每周20小时'],
          ['总计', '理论 + 实践课', '600小时'],
        ],
      },
    ],
    partners: [
      {
        name: 'Accor',
        desc: 'Accor是一家总部位于法国的领先跨国酒店集团，专门从事酒店和服务管理。',
      },
      {
        name: 'AMA Hospitality',
        desc: 'AMA Hospitality是一家餐饮和活动管理公司，专门为客户提供难忘和个性化的体验。',
      },
      {
        name: 'Bills',
        desc: 'Bills是一家受欢迎的连锁餐厅，以轻松友好的氛围供应新鲜美味的食物。',
      },
      {
        name: 'Catering HQ',
        desc: 'Catering HQ是一家在各种场所运营的餐饮公司，如俱乐部、酒吧和宴会中心。',
      },
      {
        name: 'Grand Royale',
        desc: 'Grand Royale是一家豪华酒店，提供优雅舒适的住宿、精致餐饮和水疗设施。',
      },
      {
        name: "Hurricane's Grill",
        desc: "Hurricane's Grill是一家牛排馆和酒吧，供应美味多汁的牛排、排骨、汉堡和沙拉。",
      },
      {
        name: 'ICC Sydney',
        desc: '悉尼国际会议中心（ICC Sydney）是澳大利亚顶级的会议、展览和活动场所。',
      },
      {
        name: 'Industry Placement Solutions',
        desc: 'Industry Placement Solutions是一家招聘和安置机构，帮助学生在酒店行业找到合适且有价值的工作实习。',
      },
      {
        name: 'Liverpool Catholic Club',
        desc: 'Liverpool Catholic Club是一家社区俱乐部，提供各种娱乐、餐饮和休闲选择。',
      },
      {
        name: 'Primi Italian',
        desc: 'Primi Italian是一家家族经营的餐厅，供应正宗美味的意大利菜肴。',
      },
      {
        name: 'Kuon Omakase',
        desc: 'Kuon Omakase是一家日本餐厅，提供独特精致的用餐体验。',
      },
    ],
  },
  'industry-placement-hospitality-management': {
    courseCode: 'SIT50422',
    description:
      '通过实践经验将您的酒店管理职业提升到新高度！\n\n在ABM Education，我们致力于为酒店管理学生提供全面的行业经验。我们的工作实习计划共285小时，是课程的重要组成部分，使学生能够在真实的酒店环境中获得实践经验。\n\n工作场所组成部分：\n重要的是要注意，工作场所单元是该资格的组成部分。学生需要完成培训包要素和绩效标准中列出的任务。',
    deliveryMode: {
      title: '授课方式',
      mode: '面授 + 行业实习',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM厨房',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: '行业实习',
          address:
            '各种酒店场所，包括酒店、餐厅、俱乐部、酒吧、咖啡馆和宴会中心',
        },
      ],
    },
    additionalInfo: {
      description:
        '我们鼓励您找到适合您兴趣和目标的工作实习，但如果您需要任何帮助，我们也会在这里支持您。我们与各种行业合作伙伴有着密切的联系，他们一直在寻找像您这样有才华和积极性的学生。',
    },
    tables: [
      {
        headers: ['单元代码', '单元名称', '服务期数', '总时数'],
        rows: [
          [
            'SITHIND008',
            'Work effectively in hospitality service',
            '57',
            '285小时',
          ],
        ],
      },
      {
        headers: ['资格名称', '学期', '学习方式', '行业实习时间'],
        rows: [
          ['酒店管理文凭', '第1学期', '第1-10周：理论课 + 实践课', '无'],
          ['酒店管理文凭', '第2学期', '第1-10周：理论课 + 实践课', '无'],
          ['酒店管理文凭', '第3学期', '第1-10周：理论课 + 实践课', '无'],
          ['酒店管理文凭', '第4学期', '第1-10周：理论课 + 实践课', '无'],
          [
            '酒店管理文凭',
            '第5学期',
            '第1-10周：每周1天面授课 + 每周3天工作实习（5小时 x 3班）',
            'SITHIND008 在酒店服务中有效工作\n• 第1-10周 = 150小时',
          ],
          [
            '酒店管理文凭',
            '第6学期',
            '第1-9周：每周1天面授课 + 每周3天工作实习（5小时 x 3班）\n第10周：理论 + 实践课',
            'SITHIND008 在酒店服务中有效工作\n• 第1-9周 = 135小时',
          ],
          ['总计', '', '60周教学期 + 18周学期休息（总计：78周）', ''],
          ['酒店管理高级文凭', '第7学期', '10周', '无'],
          ['酒店管理高级文凭', '第8学期', '10周', '无'],
          [
            '总计',
            '',
            '20周教学期 + 6周学期休息（总计：26周）',
            '总计 – 0小时',
          ],
        ],
      },
    ],
    partners: [
      {
        name: 'Accor',
        desc: 'Accor是一家总部位于法国的领先跨国酒店集团，专门从事酒店和服务管理。',
      },
      {
        name: 'AMA Hospitality',
        desc: 'AMA Hospitality是一家餐饮和活动管理公司，专门为客户提供难忘和个性化的体验。',
      },
      {
        name: 'Bills',
        desc: 'Bills是一家受欢迎的连锁餐厅，以轻松友好的氛围供应新鲜美味的食物。',
      },
      {
        name: 'Catering HQ',
        desc: 'Catering HQ是一家在各种场所运营的餐饮公司。',
      },
      {
        name: 'Grand Royale',
        desc: 'Grand Royale是一家豪华酒店，提供优雅舒适的住宿、精致餐饮和水疗设施。',
      },
      {
        name: "Hurricane's Grill",
        desc: "Hurricane's Grill是一家牛排馆和酒吧，供应美味多汁的牛排、排骨、汉堡和沙拉。",
      },
      {
        name: 'ICC Sydney',
        desc: '悉尼国际会议中心（ICC Sydney）是澳大利亚顶级的会议、展览和活动场所。',
      },
      {
        name: 'Industry Placement Solutions',
        desc: 'Industry Placement Solutions是一家招聘和安置机构，帮助学生在酒店行业找到合适且有价值的工作实习。',
      },
      {
        name: 'Liverpool Catholic Club',
        desc: 'Liverpool Catholic Club是一家社区俱乐部，提供各种娱乐、餐饮和休闲选择。',
      },
      {
        name: 'Primi Italian',
        desc: 'Primi Italian是一家家族经营的餐厅，供应正宗美味的意大利菜肴。',
      },
      {
        name: 'Kuon Omakase',
        desc: 'Kuon Omakase是一家日本餐厅，提供独特精致的用餐体验。',
      },
    ],
  },
  'sit50422-diploma-of-hospitality-management': {
    courseCode: 'SIT50422',
    cricosCode: '111165M',
    description:
      '该资格证书反映了高技能高级操作员的角色，他们结合使用广泛的酒店技能、管理技能和扎实的行业知识来协调酒店运营。\n\n他们独立运营，对他人负责并做出一系列运营业务决策。\n\n该资格证书提供了在任何酒店行业部门担任部门或小企业经理的途径。雇主的多样性包括餐厅、酒店、汽车旅馆、餐饮运营、俱乐部、酒吧、咖啡馆和咖啡店。',
    duration: '76周 / 102周',
    entryRequirement: '学生必须完成相当于12年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM厨房',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/SIT50422',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseCode: 'SIT60322',
    cricosCode: '111166K',
    description:
      '适合我们酒店管理高级文凭的个人是那些希望追求利用广泛酒店技能的职业，结合专业管理技能和大量行业知识来协调和监控酒店运营的人。该领域的学生将以高度自主性运营，并负责创建和实施战略业务管理决策。',
    duration: '104周',
    entryRequirement: '学生必须完成相当于12年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM厨房',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT60322?distanceFilter=25',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseCode: 'BSB40920',
    cricosCode: '112545B',
    description:
      '该资格证书反映了在各种项目管理流程中拥有良好技能的个人角色。\n\n他们将项目管理知识和技能应用于特定范围的情境，并负责项目成果，其中有限的、非常规的或应急措施和解决方案。\n\n该资格证书适合在团队环境中工作、支持或负责项目活动和成果的个人。它可以适用于任何行业或社区背景。',
    duration: '52周',
    entryRequirement: '学生必须完成相当于10年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB40920',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseCode: 'BSB50820',
    cricosCode: '112361K',
    description:
      '该资格证书反映了在各种情境和多个行业部门应用项目管理技能和知识的个人角色。与该资格证书相关的职位可能包括项目经理和项目团队负责人。这些角色的个人具有项目领导和管理角色，并负责实现项目目标。他们拥有扎实的理论知识基础，并使用一系列专业、技术和管理能力来启动、计划、执行和评估自己的工作和/或他人的工作。',
    duration: '52周',
    entryRequirement: '学生必须完成相当于12年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授（每周20小时）',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description:
        '该资格证书采用面授培训模式。所有基于课堂的培训将在ABM Further Education的教室进行。',
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseCode: 'BSB60720',
    cricosCode: '112362J',
    description:
      '该资格证书反映了在各种情境和多个行业部门应用项目管理技能和知识的个人角色。与该资格证书相关的职位可能包括项目经理和项目团队负责人。\n\n这些角色的个人具有项目领导和管理角色，并负责实现项目目标。',
    duration: '78周',
    entryRequirement: [
      '已完成以下资格之一',
      '• BSB50820项目管理文凭',
      '• BSB51415项目管理文凭（或被取代的等效版本）。',
    ],
    deliveryMode: {
      title: '授课方式',
      mode: '面授（每周20小时）',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description:
        '该资格证书采用面授培训模式。所有基于课堂的培训将在ABM Further Education的教室进行。',
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    courseCode: 'BSB40420',
    cricosCode: '113476B',
    description:
      '该资格证书描述了人力资源（HR）角色工作者的技能和知识，他们运用广泛的能力，使用一定的判断力、判断和相关的理论知识。\n\n他们可能为团队提供技术建议和支持。\n\n与该资格证书相关的职位包括人力资源专员、人力资源助理、招聘专员和学习与发展专员。',
    duration: '52周',
    entryRequirement: '学生必须完成相当于10年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB40420',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseCode: 'BSB50320',
    cricosCode: '113477A',
    description:
      '该资格证书描述了人力资源专业角色工作者的技能和知识，他们运用广泛的能力，使用判断力、判断和相关的理论知识。\n\n他们可能为团队提供技术建议和支持，并对初级员工的工作成果负责。\n\n与该资格证书相关的职位包括人力资源顾问、人力资源协调员、劳动关系顾问、学习与发展协调员、招聘顾问和职业健康安全顾问。',
    duration: '52周',
    entryRequirement: [
      '已完成以下单元：',
      '• BSBHRM411 管理绩效发展流程',
      '• BSBHRM412 支持员工和劳资关系',
      '• BSBHRM415 协调招聘和入职',
      '• BSBHRM417 支持人力资源职能和流程',
      '',
      '等效能力是这些单元的前身，已被映射为等效。',
    ],
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB50320',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseCode: 'BSB60320',
    cricosCode: '113479K',
    description:
      '该资格证书描述了高级人力资源专家或通才角色工作者的技能和知识，他们运用高级的广泛能力，使用判断力、判断和相关的理论知识。\n\n他们可能为他人提供领导和指导，并负责做出一系列运营和战略决策。\n\n与该资格证书相关的职位包括人力资源经理、学习与发展经理、劳动关系经理、招聘经理和职业健康安全经理。',
    duration: '78周',
    entryRequirement: [
      '已完成以下资格之一',
      '• BSB50320人力资源管理文凭',
      '• BSB50618人力资源管理文凭（或被取代的等效版本）。',
    ],
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/BSB60320',
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseCode: 'SIS30321',
    cricosCode: '116599M',
    description:
      '该资格证书反映了在健身行业从事各种活动和职能的个人角色。\n\n拥有该资格证书的个人能够提供健身服务，包括健身指导和健康筛查、健身指导、团体运动指导和健身房指导。\n\n工作在受控环境中进行，如健身中心、健身房、水上中心、社区中心、工作场所健身设施和户外健身场所。个人通常在受控环境中独立工作，具有一定程度的自主权。',
    duration: '52周',
    entryRequirement: '学生必须完成相当于10年级的学历',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: '实践',
          address: '私人健身房用于实践培训和评估',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl: 'https://www.yourcareer.gov.au/learn-and-train/courses/SIS30321',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseCode: 'SIS40221',
    cricosCode: '116600A',
    description:
      'SIS40221健身四级证书非常适合任何想成为私人教练的人。您将学习如何为希望实现健身目标的健康客户设计、指导和评估运动计划。如果客户有更严重的健康问题，您将把他们转介给医疗专业人员。\n\n本课程提供了在健身房、健身中心、休闲设施、客户工作场所、家庭甚至户外担任私人教练的途径。您可以培训个人或团体，也可以提供在线服务。',
    duration: '52周',
    entryRequirement: [
      '已完成以下单元：',
      '• HLTAID011 提供急救（或取代此单元的单元）',
      '• HLTWHS001 参与工作场所健康与安全',
      '• SISFFIT032 完成运动前筛查和服务指导',
      '• SISFFIT033 完成客户体能评估',
      '• SISFFIT035 计划团体锻炼课程',
      '• SISFFIT036 指导团体锻炼课程',
      '• SISFFIT040 为个人客户开发和指导健身房锻炼计划',
      '• SISFFIT047 运用解剖学和生理学知识支持安全有效的锻炼',
      '• SISFFIT052 提供健康饮食信息',
      '',
      '学生必须完成相当于12年级的学历',
    ],
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: '实践',
          address: '私人健身房用于实践培训和评估',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIS40221?distanceFilter=25',
    },
  },
  'sis50321-diploma-of-sport': {
    courseCode: 'SIS50321',
    cricosCode: '117762H',
    description:
      '在澳大利亚体育和健身行业建立您的未来\n\n体育文凭（教练）为学生提供在澳大利亚体育部门担任各种角色所需的实践技能和知识。无论您的目标是教练、领导团队还是支持社区体育组织，该资格证书都为成功奠定了坚实的基础。\n\n本课程适合谁？\n\n本课程非常适合以下国际学生：\n- 希望在体育或健身行业开始或推进职业生涯\n- 改变职业道路或进入新领域\n- 已经持有健身三级或四级证书并希望提升技能\n- 对更高级别的体育资格证书感兴趣',
    duration: '52周',
    entryRequirement: '参加课程入学面试以确定课程适合性和学生需求。',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: '实践',
          address: '私人健身房用于实践培训和评估',
        },
      ],
    },
    additionalInfo: {
      description: '* 更多信息请访问',
      linkText: 'My Skills网站。',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIS50321?distanceFilter=25',
    },
  },
  'certificate-iii-in-fitness-fast-track': {
    courseCode: 'SIS30321',
    description:
      '开启您的健身教练职业生涯\n\nSIS30321健身三级证书专为那些希望成为团体运动教练或健身房教练的人设计。该资格证书为您提供计划和提供团体运动课程以及为个人创建健身房计划的技能。\n\n您将在结构化和受监督的环境中工作，如健身中心、健身房和社区休闲设施。\n\n这个资格证书可以带您去哪里？\n本课程提供直接就业途径：\n– 健身中心和健身房\n– 休闲和社区中心\n– 健康与保健俱乐部',
    duration: '12周或24周',
    entryRequirement: '您能够参加健身活动。',
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: '实践',
          address: '私人健身房用于实践培训和评估',
        },
      ],
    },
    additionalInfo: {
      description:
        '法规与标准\n该资格证书中获得的技能必须根据联邦和州/领地立法、澳大利亚行业标准和行业规范进行应用。\n\n今天就迈出健身职业的第一步！\n\n* 入学日期将于2026年4月公布。',
    },
  },
  'certificate-iv-in-fitness-fast-track': {
    courseCode: 'SIS40221',
    description:
      '开启您的健身教练职业生涯\n\nSIS40221健身四级证书专为那些希望成为私人教练和高级健身教练的人设计。该资格证书为您提供计划和提供团体运动课程以及为个人创建健身房计划的技能。\n\n这个资格证书可以带您去哪里？\n本课程提供直接就业途径：\n– 健身中心和健身房\n– 休闲和社区中心\n– 健康与保健俱乐部',
    duration: '12周或24周',
    entryRequirement: [
      '已完成以下单元：',
      '• HLTAID011 提供急救（或取代此单元的单元）',
      '• HLTWHS001 参与工作场所健康与安全',
      '• SISFFIT032 完成运动前筛查和服务指导',
      '• SISFFIT033 完成客户体能评估',
      '• SISFFIT035 计划团体锻炼课程',
      '• SISFFIT036 指导团体锻炼课程',
      '• SISFFIT040 为个人客户开发和指导健身房锻炼计划',
      '• SISFFIT047 运用解剖学和生理学知识支持安全有效的锻炼',
      '• SISFFIT052 提供健康饮食信息',
    ],
    deliveryMode: {
      title: '授课方式',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: '实践',
          address: '私人健身房用于实践培训和评估',
        },
      ],
    },
    additionalInfo: {
      description:
        '法规与标准\n该资格证书中获得的技能必须根据联邦和州/领地立法、澳大利亚行业标准和行业规范进行应用。\n\n今天就迈出健身职业的第一步！\n\n请在此处查看灵活的付款选项！\n\n* 入学日期将于2026年4月公布。',
    },
  },
  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseCode: 'HLT33115',
    description:
      '护理支持职业通道：英语 + 健康服务助理三级证书 + 工作实习\n\n包括：HLT33115健康服务助理三级证书（急性护理中的护理工作辅助）\n\n通过ABM的护理支持职业通道，迈出医疗保健职业生涯的第一步。这个综合项目专为国际学生或医疗保健行业新人设计，希望成为医院和养老设施中熟练的支持工作者。',
    duration: '16周（每周2天 + 1天辅导）+ 80小时工作实习',
    entryRequirement: [
      '学生在课程开始时必须年满18岁。',
      '雅思5.5或同等水平，如果学生通过ABM EPT测试达到雅思4.5或同等水平，可报名Plus护理英语课程。',
      '学生必须完成相当于10年级的学历',
    ],
    deliveryMode: {
      title: '授课方式：',
      mode: '面授',
    },
    deliverySite: {
      title: '授课地点：',
      locations: [
        {
          type: 'ABM校区',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    startingDates: [
      {
        title: '2026年',
        dates: [
          '1月12日',
          '2月9日',
          '3月9日',
          '4月13日',
          '5月11日',
          '6月8日',
          '7月13日',
          '8月10日',
          '9月7日',
        ],
      },
      {
        title: '2027年',
        dates: [
          '1月11日',
          '2月15日',
          '3月15日',
          '4月12日',
          '5月17日',
          '6月14日',
          '7月12日',
          '8月16日',
          '9月13日',
        ],
      },
    ],
  },
};
