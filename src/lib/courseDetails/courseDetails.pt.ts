import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// Detalhes do curso (versão em português)
export const courseDetailsData_pt: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate IV em Gestão de Cozinha é oferecido ao longo de 18 meses, totalizando 78 semanas, incluindo 18 semanas de recesso. Isso será dividido em seis termos de 10 semanas cada.',
    },
    workPlacement: {
      title: 'Estágio',
      description: '600 horas',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN (Linguagem, Alfabetização e Numeracia), tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, ela informará o aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: ['Chef', 'Chef de partie'],
    },
    pathways: {
      title: 'Caminhos para Estudos Adicionais / Oportunidades de Carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'SIT50422 Diploma de Gestão em Hospitalidade',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes de se inscrever, pois ele contém informações importantes sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: 'Duração do Curso – Empacotado com Curso de Gestão de Cozinha',
      description: [
        'Estudantes que concluíram o SIT40521 Certificate IV em Gestão de Cozinha com a ABM Further Education receberão 20 unidades de transferência de crédito. Isso reduzirá o curso SIT50422 Diploma de Gestão em Hospitalidade para 26 semanas, consistindo em: dois (2) termos de 10 semanas cada (20 semanas no total) de período letivo. Férias somando 6 semanas (conforme horário).',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: 'Duração do Curso – Fluxo de Alimentos & Bebidas',
      description:
        'A qualificação é oferecida ao longo de 78 semanas compreendendo:\nSeis (6) termos de 10 semanas cada (60 semanas no total) de período letivo.\nFérias somando 18 semanas (conforme o cronograma)',
    },
    courseStructure1: {
      title:
        'Estrutura do Curso – Empacotado com Certificate IV em Gestão de Cozinha',
      description: [
        {
          type: 'table' as const,
          headers: ['Número de unidades', 'Código', 'Título', 'Core/Eletiva'],
          rows: [
            ['1', 'SITXFIN010', 'Preparar e monitorar orçamentos', 'Core'],
            [
              '2',
              'SITXWHS006',
              'Identificar riscos, avaliar e controlar segurança',
              '',
            ],
            ['3', 'SITXINV008', 'Controlar estoque', 'Grupo C'],
            [
              '4',
              'SITXMGT005',
              'Estabelecer e conduzir relações de negócios',
              'Core',
            ],
            [
              '5',
              'SITXGLC002',
              'Identificar e gerenciar riscos legais e observar lei',
              'Core',
            ],
            [
              '6',
              'SITXCCS015',
              'Melhorar experiências de atendimento ao cliente',
              'Core',
            ],
            ['7', 'SITXCCS010', 'Fornecer informações ao visitante', 'Grupo C'],
            [
              '8',
              'SITXCCS016',
              'Desenvolver e gerenciar práticas de serviço ao cliente de qualidade',
              'Core',
            ],
          ],
        },
      ],
    },
    courseStructure2: {
      title: 'Estrutura do Curso – Fluxo independente de Alimentos & Bebidas',
      description: [
        {
          type: 'table' as const,
          headers: ['Número de unidades', 'Código', 'Título', 'Core/Eletiva'],
          rows: [
            [
              '1',
              'SITXCCS015',
              'Melhorar experiências de atendimento ao cliente',
              'Core',
            ],
            [
              '2',
              'SITXCCS016',
              'Desenvolver e gerenciar práticas de serviço de qualidade',
              'Core',
            ],
            ['3', 'SITXCOM010', 'Gerenciar conflitos', 'Core'],
            [
              '4',
              'SITXFIN009',
              'Gerenciar finanças dentro de um orçamento',
              'Core',
            ],
            ['5', 'SITXFIN010', 'Preparar e monitorar orçamentos', 'Core'],
            [
              '6',
              'SITXGLC002',
              'Identificar e gerenciar riscos legais e observar lei',
              'Core',
            ],
            ['7', 'SITXHRM008', 'Elencar funcionários', 'Core'],
            ['8', 'SITXHRM009', 'Liderar e gerenciar pessoas', 'Core'],
            ['9', 'SITXMGT004', 'Monitorar operações de trabalho', 'Core'],
            [
              '10',
              'SITXMGT005',
              'Estabelecer e conduzir relações de negócio',
              'Core',
            ],
            [
              '11',
              'SITXWHS007',
              'Implementar e monitorar práticas de saúde e segurança no trabalho',
              'Core',
            ],
            [
              '12',
              'SITXFSA005',
              'Usar práticas higiênicas para segurança alimentar',
              'Grupo A',
            ],
            [
              '13',
              'SITHIND008',
              'Trabalhar eficazmente no serviço de hospitalidade',
              'Grupo B',
            ],
            [
              '14',
              'SITXHRM010',
              'Recrutar, selecionar e induzir funcionários',
              'Grupo D',
            ],
            ['15', 'SITHFAB030*', 'Preparar e servir coquetéis', 'Grupo C'],
            ['16', 'SITXINV008', 'Controlar estoque', 'Grupo C'],
            [
              '17',
              'SITHKOP014',
              'Planejar catering para eventos ou funções',
              'Grupo C',
            ],
            ['18', 'BSBCMM411', 'Fazer apresentações', 'Grupo D'],
            [
              '19',
              'BSBSUS511',
              'Desenvolver políticas e procedimentos sustentáveis no trabalho',
              'Grupo D',
            ],
            ['20', 'BSBTWK501', 'Liderar diversidade e inclusão', 'Grupo D'],
            [
              '21',
              'SITHFAB021',
              'Fornecer serviço responsável de álcool',
              'Grupo C',
            ],
            ['22', 'SITHFAB023', 'Operar um bar', 'Grupo C'],
            [
              '23',
              'SITXFSA006',
              'Participar em práticas seguras de manipulação de alimentos',
              'Grupo C',
            ],
            [
              '24',
              'SITXFSA008*',
              'Desenvolver e implementar programa de segurança alimentar',
              'Grupo C',
            ],
            ['25', 'SITHFAB025', 'Preparar e servir café expresso', 'Grupo C'],
            [
              '26',
              'SITHIND006',
              'Obter e usar informação da indústria de hospitalidade',
              'Grupo C',
            ],
            [
              '27',
              'SITXCCS010',
              'Fornecer informações ao visitante',
              'Grupo C',
            ],
            [
              '28',
              'SITXCCS012',
              'Fornecer serviço de achados e perdidos',
              'Grupo C',
            ],
          ],
        },
      ],
    },
    workPlacement: {
      title: 'Estágio • Apenas para fluxo de Alimentos e Bebidas',
      description: [
        '285 horas (* não é aplicável quando empacotado com o curso Certificate IV em Gestão de Cozinha)',
        '\n**Componente de Local de Trabalho**',
        'É importante notar que uma unidade de trabalho faz parte desta qualificação e os aprendizes são obrigados a completar tarefas definidas nos elementos e critérios de desempenho do pacote de treinamento.',
        '\nUm diário de bordo será fornecido pela ABM e os estudantes devem manter diariamente registro das atividades / tarefas realizadas durante o estágio. Isso será monitorado pelo avaliador da ABM durante visitas programadas ao local. Atividades diárias / entradas do diário devem ser assinadas pelo supervisor do local a cada dia.',
        {
          type: 'table' as const,
          headers: ['Termo', 'Semana número', 'Horas'],
          rows: [
            [
              'Termo 5',
              'Semanas 1-10 SITHIND008 Trabalhar eficazmente no serviço de hospitalidade – 30 turnos de 5 horas de um total de 57 turnos',
              '150',
            ],
            [
              'Termo 6',
              'Semanas 1-9 SITHIND008 Trabalhar eficazmente no serviço de hospitalidade – 27 turnos de 5 horas de um total de 57 turnos',
              '135',
            ],
            ['', 'TOTAL Horas mínimas', '285'],
          ],
        },
        '*Observe que os turnos de hospitalidade podem variar em duração conforme necessidade do negócio. A ABM alocou aproximadamente 5 horas por turno com base em padrões da indústria. Alguns turnos podem ser ligeiramente mais curtos ou longos com base nas necessidades individuais do negócio. Os alunos podem precisar fazer períodos de serviço adicionais para alcançar as 285 horas de trabalho no local.\n\n',
        '**Disposições do estágio**',
        '• Os alunos podem escolher seus locais de estágio. No entanto, será verificado por Treinadores/Avaliadores que o local possua todas as instalações e equipamentos que atendem aos requisitos de SITHIND008 Trabalhar eficazmente no serviço de hospitalidade.',
        '• Os alunos serão supervisionados/avaliados durante o estágio pelos Treinadores/Avaliadores da ABM.',
        '• A ABM organizará locais de estágio para alunos que não conseguirem por conta própria.',
        '• Um acordo de estágio precisa ser preenchido pelas partes envolvidas. A ABM fornecerá o acordo aos alunos.',
        '• Os Treinadores e Avaliadores instruirão os alunos sobre como preencher o diário de bordo.',
        '• A ABM poderá contratar um terceiro para gerenciar estágios para os alunos, o que inclui visitar locais de estágio, organizar locais de estágio para os alunos e instruir os alunos a preencher o diário conforme exigido.',
      ],
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Gerente de Hotel ou Motel',
        'Gerente de Restaurante',
        'Gerente de Café',
        'Supervisor de Alimentos e Bebidas',
        'Gerente de Bar',
        'Gerente de Resort',
        'Gerente de Catering',
      ],
    },
    pathways: {
      title: 'Caminhos para Estudos Adicionais / Oportunidades de Carreira',
      description: [
        'Após obter esta qualificação, os graduados podem prosseguir para a próxima qualificação:',
        {
          type: 'link',
          text: 'SIT60322 – Diploma Avançado de Gestão de Hospitalidade',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais informações, entre em contato com a ABM enviando um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma Avançado de Gestão em Hospitalidade é oferecido ao longo de 24 meses, totalizando 104 semanas, incluindo 24 semanas de recesso. Isso será dividido em oito termos de 10 semanas cada.',
    },
    courseStructure1: {
      title:
        'Estrutura do Curso – Empacotado com Certificate IV em Gestão de Cozinha & Diploma de Gestão em Hospitalidade',
      description: [
        'Estudantes que concluíram ambas as qualificações pela ABM Further Education são elegíveis a 25 unidades de Transferência de Crédito',
        '• SIT40521 Certificate IV em Gestão de Cozinha',
        '• SIT50422 Diploma de Gestão em Hospitalidade',
        'O curso Advanced Diploma of Hospitality Management pode ser concluído em dois termos (26 semanas)',
      ],
    },
    courseStructure2: {
      title:
        'Estrutura do Curso – Empacotado com Diploma de Gestão em Hospitalidade',
      description: [
        {
          type: 'table' as const,
          headers: ['Número de unidades', 'Código', 'Título', 'Core/Eletivas'],
          rows: [
            ['1', 'BSBFIN601', 'Gerenciar finanças organizacionais', 'Core'],
            [
              '2',
              'BSBOPS601',
              'Desenvolver e implementar planos de negócio',
              'Core',
            ],
            ['3', 'SITXFIN011', 'Gerenciar ativos físicos', 'Core'],
            ['4', 'SITXHRM012', 'Monitorar desempenho de pessoal', 'Core'],
            [
              '5',
              'SITXMPR014',
              'Desenvolver e implementar estratégias de marketing',
              'Core',
            ],
            [
              '6',
              'SITXWHS008',
              'Estabelecer e manter sistema de saúde e segurança no trabalho',
              'Core',
            ],
            ['7', 'SITHFAB027', 'Servir alimentos e bebidas', 'Grupo C'],
            [
              '8',
              'SITHFAB024',
              'Preparar e servir bebidas não alcoólicas',
              'Grupo C',
            ],
          ],
        },
        '**Estudantes que concluíram SIT50422 na ABM Further Education são elegíveis a 25 Transferências de Crédito e podem concluir o curso em dois termos (26 semanas).**',
      ],
    },
    workPlacement: {
      title: 'Estágio',
      description: [
        'Standalone – Diploma Avançado de Gestão em Hospitalidade = 285 horas',
        'Empacotado com – Certificate IV em Gestão de Cozinha & Diploma de Gestão em Hospitalidade = sem horas adicionais de componente de trabalho',
        'Empacotado com – Diploma de Gestão em Hospitalidade = sem horas adicionais de componente de trabalho',
      ],
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Gerente de Hotel ou Resort',
        'Gerente de Restaurante',
        'Gerente de Eventos',
        'Gerente de Recepção',
        'Gerente de Governança',
        'Gerente de Catering',
        'Gerente de Operações',
        'Gerente Geral',
      ],
    },
    pathways: {
      title: 'Caminhos para Estudos Adicionais / Oportunidades de Carreira',
      description: [
        'Opções de emprego potenciais estão em qualquer setor da hospitalidade como gestor departamental ou de pequeno negócio. Veja também os cargos indicados na descrição da qualificação.',
        'Estudantes que concluírem este curso podem desejar continuar seus estudos em diversas qualificações de Ensino Superior.',
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description: [
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais informações, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
      ],
    },
  },

  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate III em Fitness é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Instrutor de Academia',
        'Instrutor de Fitness em Grupo',
        'Instrutor de Fitness',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'SIS40221 Certificate IV em Fitness',
          url: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate IV em Fitness é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Personal Trainer',
        'Instrutor de Fitness (Avançado)',
        'Treinador ao ar livre',
        'Treinador Corporativo ou no Local de Trabalho',
        'Personal Trainer Online',
        'Proprietário / Gerente de Estúdio de Fitness',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais',
      description: [
        'Estudantes que concluírem este curso podem continuar seus estudos na indústria de fitness com qualificações como:',
        {
          type: 'link',
          text: 'SIS50321 Diploma de Esporte',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
        'SIS50122 Diploma de Esporte, Aquáticos e Gestão de Recreação, SIS50421 Diploma de Liderança ao Ar Livre ou continuar seus estudos em diversas qualificações de Ensino Superior.',
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate III em Fitness (Rota Rápida) é oferecido em 3 meses, totalizando 12 semanas, incluindo experiência prática e 1 ano de associação na academia.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Instrutor de Academia',
        'Instrutor de Fitness em Grupo',
        'Instrutor de Fitness',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais',
      description: [
        'Estudantes que concluírem este curso podem continuar seus estudos na indústria de fitness com qualificações como:',
        {
          type: 'link',
          text: 'SIS50321 Diploma de Esporte',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate IV em Fitness (Rota Rápida) é oferecido em 3 meses, totalizando 12 semanas, incluindo experiência prática e 1 ano de associação na academia.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Personal Trainer',
        'Instrutor de Fitness (Avançado)',
        'Treinador ao ar livre',
        'Treinador Corporativo ou no Local de Trabalho',
        'Personal Trainer Online',
        'Proprietário / Gerente de Estúdio de Fitness',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais',
      description: [
        'Estudantes que concluírem este curso podem continuar seus estudos na indústria de fitness com qualificações como:',
        {
          type: 'link',
          text: 'SIS50321 Diploma de Esporte',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate IV em Negócios é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Oficial Administrativo',
        'Analista de Negócios Assistente',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB50120 Diploma de Negócios',
          url: '/business-and-management-courses/bsb50120-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma de Negócios é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: ['Gerente de Negócios', 'Diretor de Dados'],
    },
    pathways: {
      title: 'Caminhos para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB60120 Diploma Avançado de Negócios',
          url: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma de Esporte é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },

    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Treinador Esportivo',
        'Gerente Esportivo',
        'Personal Trainer',
        'Treinador de Fitness',
        'Treinador de Força',
        'Parte da equipe de coaching',
        'Gerente Geral de academias',
        'Funções de coaching em clubes esportivos, por exemplo: treinador de tênis, natação ou futebol',
        'Recepção / Vendas',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais',
      description: [
        'Estudantes que concluírem este curso podem continuar sua educação em diversas qualificações de Ensino Superior.',
      ],
    },
  },

  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma Avançado de Negócios é oferecido ao longo de 18 meses, totalizando 78 semanas, incluindo 18 semanas de recesso. Isso será dividido em seis termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Administrador Sênior',
        'Executivo Sênior',
        'Gerente Executivo / Diretor',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Opções de emprego potenciais são como gestor em diversas áreas industriais.',
        'Estudantes que concluírem este curso podem prosseguir para o BSB80120 Graduate Diploma of Management (Learning), bem como qualificações de nível superior em negócios ou gestão.',
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre o RTO. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Graduate Diploma of Management (Learning) é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: ['Gerente de Negócios', 'Diretor de Negócios'],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Opções de emprego potenciais são como líder ou gestor em organizações que usam aprendizado para desenvolver capacidade organizacional em vários setores.',
        'Estudantes que concluírem este curso podem continuar sua educação em diversas qualificações de ensino superior em aprendizado e desenvolvimento organizacional.',
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate IV em Prática de Gestão de Projetos é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Oficial de Contrato',
        'Administrador de Projetos',
        'Analista de Qualidade',
        'Proprietário de Pequena Empresa',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB50820 – Diploma de Prática de Gestão de Projetos',
          url: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma de Prática de Gestão de Projetos é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Agente de Projetos',
        'Coordenador de Projetos',
        'Gerente de Projetos',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB60720 Diploma Avançado de Gestão de Programas',
          url: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma Avançado de Gestão de Programas é oferecido ao longo de 18 meses, totalizando 78 semanas, incluindo 18 semanas de recesso. Isso será dividido em seis termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Gerente de Programas',
        'Gerente de Projetos Sênior',
        'Líder de Programas',
        'Coordenador de Programas',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais',
      description: [
        'Estudantes que concluírem este curso podem continuar sua educação em diversas qualificações de Ensino Superior.',
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb40420-certificate-iv-in-human-resource-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate IV em Gestão de Recursos Humanos é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Assistente de RH',
        'Consultor de Recrutamento',
        'Oficial de Saúde e Segurança no Trabalho',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB50320 Diploma de Gestão de Recursos Humanos',
          url: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma de Gestão de Recursos Humanos é oferecido ao longo de 12 meses, totalizando 52 semanas, incluindo 12 semanas de recesso. Isso será dividido em quatro termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Gerente de Recursos Humanos',
        'Oficial de Recursos Humanos',
        'Consultor de Recrutamento',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB60320 Diploma Avançado de Gestão de Recursos Humanos',
          url: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Diploma Avançado de Gestão de Recursos Humanos é oferecido ao longo de 18 meses, totalizando 78 semanas, incluindo 18 semanas de recesso. Isso será dividido em seis termos de 10 semanas cada.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de trabalho',
      description: [
        'Profissional de Recursos Humanos',
        'Oficial de Pessoal',
        'Gerente de Relações Trabalistas',
        'Profissional de Desenvolvimento de RH',
        'Gerente de RH',
      ],
    },
    pathways: {
      title: 'Caminho para estudos adicionais / oportunidades de carreira',
      description: [
        'Após obter esta qualificação, os graduados podem cursar a próxima qualificação:',
        {
          type: 'link',
          text: 'BSB80120 Graduate Diploma of Management (Learning)',
          url: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informações Adicionais',
      description:
        'Por favor, leia o Manual do Estudante antes da matrícula, pois ele contém informações valiosas sobre a ABM. Para mais detalhes, envie um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
    },
  },

  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseDuration: {
      title: 'Duração do Curso',
      description:
        'O Certificate III em Assistência a Serviços de Saúde é oferecido ao longo de 4 meses, totalizando 16 semanas, incluindo aulas presenciais em nosso campus de Sydney.',
    },
    workPlacement: {
      title: 'Estágio',
      description:
        '80 horas de estágio em ambientes reais de saúde. Durante o estágio, você completará HLTINF006 (Prevenção e controle de infecções), HLTAIN001 (Auxiliar no cuidado de enfermagem em ambiente de cuidados agudos) e CHCCCS031 (Prestar suporte individualizado). O suporte inclui acordo de estágio, supervisão por treinadores/avaliadores qualificados, instrução e suporte no uso do diário de bordo e turnos flexíveis conforme necessidade do negócio.',
    },
    studentSupport: {
      title: 'Apoio ao Estudante',
      description: [
        '• A ABM avalia as necessidades de apoio ao aluno antes da matrícula por meio de Formulários de Inscrição e Pré-inscrição.',
        '• Possíveis apoios incluem assistência em LLN, tecnologia assistiva, tutorias adicionais e ajuda com ferramentas de aprendizado online.',
        '• Custos adicionais ou limitações são comunicados antes da matrícula.',
        '• Se a ABM não puder fornecer certo apoio, os alunos serão encaminhados a provedores terceiros por sua conta.',
        '• Se a ABM não puder oferecer um ambiente de aprendizagem adequado, informará ao aluno e poderá encaminhá-lo a outro provedor em vez de matriculá-lo.',
      ],
    },
    jobRoles: {
      title: 'Cargos de Trabalho',
      description: [
        'Assistente de Enfermagem (AIN)',
        'Assistente de Serviços de Saúde',
        'Assistente de Cuidados Pessoais',
        'Ordenança Hospitalar',
        'Assistente de Apoio ao Paciente',
        'Assistente de Apoio',
        'Cuidador',
      ],
    },
    pathways: {
      title: 'Caminhos para Estudos Adicionais / Oportunidades de Carreira',
      description: [
        'Após a conclusão, você pode ser elegível para progredir para:',
        '• HLT54115 Diploma de Enfermagem',
        '• CHC33015 Certificado III em Suporte Individual',
        '• CHC43115 Certificado IV em Deficiência',
        '• CHC52015 Diploma de Serviços Comunitários',
        '• HLT47321 Certificado IV em Administração em Saúde',
        'E outras qualificações no setor de saúde.',
      ],
    },
    additionalInfo: {
      title: 'Destaques do Programa',
      description: [
        '• Aprenda em um ambiente de sala de aula presencial e suporte',
        '• Desenvolva inglês especializado para comunicação em saúde',
        '• Obtenha uma qualificação reconhecida nacionalmente',
        '• Complete 80 horas de estágio em ambientes reais de saúde',
        '• Adequado para quem tem ou não experiência prévia em saúde',
        '• Suporte abrangente ao longo do programa',
        'Para mais informações, entre em contato com a ABM enviando um e-mail para info@abm.edu.au ou ligue para +61 (02) 9160 4507.',
      ].join('\n'),
    },
    faq: {
      title: 'Perguntas Frequentes',
      description: [
        { question: 'Quanto custa o curso de assistente de enfermagem?', answer: 'Consulte nossa lista de preços oficial para obter as informações mais atualizadas sobre mensalidades.' },
        { question: 'Qual visto me permite me matricular?', answer: 'Este curso é adequado para estudantes com visto de Working Holiday ou qualquer tipo de visto que permita estudar por 16 semanas sem uma Confirmação de Matrícula (CoE). Não fornecemos orientação sobre vistos. Verifique as condições do seu visto ou consulte um agente de migração registrado se tiver dúvidas.' },
        { question: 'E quanto ao estágio e suporte para treinamento clínico?', answer: 'A ABM fornece 80 horas de estágio como parte do curso, organizado através de nossos parceiros confiáveis do setor. Após a conclusão, também oferecemos oportunidades de emprego remunerado para graduados elegíveis, apoiando sua transição suave para a força de trabalho em saúde.' },
        { question: 'Posso conseguir emprego com esta qualificação?', answer: 'Sim, nossos graduados frequentemente garantem funções em hospitais privados, centros médicos e centros de cuidados para idosos.' },
        { question: 'E se minhas habilidades em inglês forem insuficientes?', answer: 'O requisito mínimo de entrada é IELTS 5.5 ou equivalente. Se você atualmente tem IELTS 4.5 ou equivalente, pode se matricular no curso com Plus Nursing English, que fornece suporte adicional de idioma voltado para ambientes de saúde. Se você não tem resultado de teste de inglês, pode ter sua proficiência avaliada através do Teste de Colocação em Inglês da ABM.' },
      ],
    },
  },
};
