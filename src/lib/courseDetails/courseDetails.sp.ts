import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// Datos de información detallada por curso
export const courseDetailsData_sp: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'El Certificado IV en Gestión de Cocina se ofrece durante 18 meses, equivalente a 78 semanas, incluyendo 18 semanas de vacaciones. Esto se dividirá en seis términos de 10 semanas.',
    },
    workPlacement: {
      title: 'Prácticas Laborales',
      description: '600 horas',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: ['Chef', 'Chef de partie'],
    },
    pathways: {
      title: 'Rutas de Estudio Adicional / Oportunidades Profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'SIT50422 DIPLOMA DE GESTIÓN HOTELERA',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
        'Los títulos de trabajo posibles incluyen:',
        'Chef',
        'Chef de partie',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: 'Duración del Curso – Empaquetado con Curso de Gestión de Cocina',
      description: [
        'Este curso tiene una duración de 26 semanas.\n\nLos estudiantes que completaron un SIT40521 Certificado IV en Gestión de Cocina con ABM Further Education recibirán 20 unidades de transferencia de crédito. Esto reducirá el curso SIT50422 Diploma de Gestión Hotelera a 2 términos de estudio (20 semanas excluyendo las vacaciones).\nCada término consiste en 10 semanas de capacitación y evaluaciones, seguidas de unas vacaciones de 3 semanas.',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: 'Duración del Curso – Modalidad de Alimentos y Bebidas',
      description:
        'El Diploma de Gestión Hotelera se ofrece durante 18 meses, equivalente a 78 semanas, incluyendo 18 semanas de vacaciones. Esto se dividirá en seis términos de 10 semanas.',
    },
    courseStructure1: {
      title:
        'Estructura del Curso – Empaquetado con Certificado IV en Gestión de Cocina',
      description: [
        'Es aplicable SOLO para aquellos que completaron SIT40521 Cert IV Gestión de Cocina con ABM Further education\nPrácticas laborales: N/A\nDuración del curso: 26 semanas (2 términos)\n\n',
        '**Término 1**',
        {
          type: 'table' as const,
          headers: ['Número de semanas', 'Código de unidad y título'],
          rows: [
            ['3 semanas', 'SITXFIN010 Preparar y monitorear presupuestos'],
            [
              '2 semanas',
              'SITXWHS006 Identificar peligros, evaluar y controlar riesgos de seguridad',
            ],
            ['3 semanas', 'SITXINV008 Controlar inventario'],
            [
              '2 semanas',
              'SITXMGT005 Establecer y llevar a cabo relaciones comerciales',
            ],
          ],
        },
        '**3 semanas de descanso**',
        '\n**Término 2**',
        {
          type: 'table' as const,
          headers: ['Número de semanas', 'Código de unidad y título'],
          rows: [
            [
              '3 semanas',
              'SITXGLC002 Identificar y gestionar riesgos legales y cumplir con la ley',
            ],
            [
              '2 semanas',
              'SITXCCS015 Mejorar experiencias de servicio al cliente',
            ],
            [
              '3 semanas',
              'SITXCCS010 Proporcionar información para visitantes',
            ],
            [
              '2 semanas',
              'SITXCCS016 Desarrollar y gestionar prácticas de servicio al cliente de calidad',
            ],
          ],
        },
      ],
    },
    courseStructure2: {
      title:
        'Estructura del Curso – Modalidad Independiente de Alimentos y Bebidas',
      description: [
        {
          type: 'table' as const,
          headers: [
            'Número de unidades',
            'Código',
            'Título',
            'Núcleo/Electivo',
          ],
          rows: [
            [
              '1',
              'SITXCCS015',
              'Mejorar experiencias de servicio al cliente',
              'Núcleo',
            ],
            [
              '2',
              'SITXCCS016',
              'Desarrollar y gestionar prácticas de servicio al cliente de calidad',
              'Núcleo',
            ],
            ['3', 'SITXCOM010', 'Gestionar conflictos', 'Núcleo'],
            [
              '4',
              'SITXFIN009',
              'Gestionar finanzas dentro de un presupuesto',
              'Núcleo',
            ],
            ['5', 'SITXFIN010', 'Preparar y monitorear presupuestos', 'Núcleo'],
            [
              '6',
              'SITXGLC002',
              'Identificar y gestionar riesgos legales y cumplir con la ley',
              'Núcleo',
            ],
            ['7', 'SITXHRM008', 'Programar personal', 'Núcleo'],
            ['8', 'SITXHRM009', 'Liderar y gestionar personas', 'Núcleo'],
            ['9', 'SITXMGT004', 'Monitorear operaciones de trabajo', 'Núcleo'],
            [
              '10',
              'SITXMGT005',
              'Establecer y llevar a cabo relaciones comerciales',
              'Núcleo',
            ],
            [
              '11',
              'SITXWHS007',
              'Implementar y monitorear prácticas de salud y seguridad laboral',
              'Núcleo',
            ],
            [
              '12',
              'SITXFSA005',
              'Usar prácticas higiénicas para la seguridad alimentaria',
              'Grupo Electivo A',
            ],
            [
              '13',
              'SITHIND008',
              'Trabajar efectivamente en el servicio de Hostelería',
              'Grupo Electivo B',
            ],
            [
              '14',
              'SITXHRM010',
              'Reclutar, seleccionar e inducir personal',
              'Grupo D',
            ],
            ['15', 'SITHFAB030*', 'Preparar y servir cócteles', 'Grupo C'],
            ['16', 'SITXINV008', 'Controlar inventario', 'Grupo C'],
            [
              '17',
              'SITHKOP014',
              'Planificar catering para eventos o funciones',
              'Grupo C',
            ],
            ['18', 'BSBCMM411', 'Hacer presentaciones', 'Grupo D'],
            [
              '19',
              'BSBSUS511',
              'Desarrollar políticas y procedimientos de sostenibilidad en el lugar de trabajo',
              'Grupo D',
            ],
            ['20', 'BSBTWK501', 'Liderar diversidad e inclusión', 'Grupo D'],
            [
              '21',
              'SITHFAB021',
              'Proporcionar servicio responsable de alcohol',
              'Grupo C',
            ],
            ['22', 'SITHFAB023', 'Operar un bar', 'Grupo C'],
            [
              '23',
              'SITXFSA006',
              'Participar en prácticas seguras de manipulación de alimentos',
              'Grupo C',
            ],
            [
              '24',
              'SITXFSA008*',
              'Desarrollar e implementar un programa de seguridad alimentaria',
              'Grupo C',
            ],
            ['25', 'SITHFAB025', 'Preparar y servir café espresso', 'Grupo C'],
            [
              '26',
              'SITHIND006',
              'Obtener y usar información sobre la industria hotelera',
              'Grupo C',
            ],
            [
              '27',
              'SITXCCS010',
              'Proporcionar información para visitantes',
              'Grupo C',
            ],
            [
              '28',
              'SITXCCS012',
              'Proporcionar servicios de objetos perdidos',
              'Grupo C',
            ],
          ],
        },
      ],
    },
    workPlacement: {
      title: 'Prácticas Laborales - Solo Modalidad de Alimentos y Bebidas',
      description: [
        '285 horas (* no aplicable cuando está empaquetado con el curso de Certificado IV en Gestión de Cocina)',
        '\n**Componente de Lugar de Trabajo**',
        'Es importante notar que una unidad de lugar de trabajo forma parte de esta calificación y los estudiantes deben completar las tareas descritas en los elementos del paquete de capacitación y criterios de desempeño.',
        '\nABM proporcionará un libro de registro del lugar de trabajo y los estudiantes deben mantener diariamente un registro de actividades/tareas realizadas durante las prácticas laborales. Esto será monitoreado por el evaluador de lugar de trabajo de ABM durante visitas programadas al sitio. Las actividades diarias/entradas del libro de registro deben ser firmadas por el supervisor del lugar de trabajo cada día.',
        {
          type: 'table' as const,
          headers: ['Término', 'Número de semana', 'Horas'],
          rows: [
            [
              'Término 5',
              'Semana 1-10 SITHIND008 Trabajar efectivamente en el servicio de hostelería – 30 turnos de 5 horas de un total de 57 turnos',
              '150',
            ],
            [
              'Término 6',
              'Semana 1-9 SITHIND008 Trabajar efectivamente en el servicio de hostelería – 27 turnos de 5 horas de un total de 57 turnos',
              '135',
            ],
            ['TOTAL Horas mínimas', '', '285'],
          ],
        },
        '*Por favor note que los turnos de Hostelería pueden variar en tiempo debido a las necesidades del negocio. ABM ha asignado aproximadamente 5 horas por turno basado en estándares de la industria. ABM entiende que algunos turnos pueden ser ligeramente más cortos o más largos basándose en las necesidades individuales del negocio. Los estudiantes pueden necesitar hacer períodos de servicio adicionales para alcanzar las 285 horas de lugar de trabajo.\n\n',
        '**Arreglos de prácticas laborales**',
        '- Los estudiantes pueden elegir sus ubicaciones de prácticas laborales. Sin embargo, será verificado por los Capacitadores/Evaluadores para asegurar que tenga todas las instalaciones y equipos que cumplan con los requisitos de SITHIND008 Trabajar efectivamente en el servicio de hostelería.',
        '- Los estudiantes serían supervisados/evaluados mientras están en prácticas por los Capacitadores/Evaluadores de ABM.',
        '- ABM organizaría ubicaciones de prácticas laborales si los estudiantes no pueden gestionarlo por sí mismos.',
        '- El acuerdo de prácticas laborales debe ser completado por las partes relevantes. ABM proporcionaría el acuerdo a los estudiantes.',
        '- Los Capacitadores y Evaluadores instruirían a los estudiantes sobre cómo completar el libro de registro.',
        '- ABM puede contratar a un tercero para gestionar las prácticas laborales para los estudiantes, lo que incluye visitar los lugares de prácticas laborales, organizar ubicaciones de prácticas laborales para los estudiantes e instruir a los estudiantes para completar el libro de registro según los requisitos.',
      ],
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.\n\n',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.\n\n',
        'Cuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        'Cuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.\n\n',
        'Cuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Gerente de Hotel o Motel',
        'Gerente de Restaurante',
        'Gerente de Recepción',
        'Gerente de Cafetería',
        'Coordinador de Eventos',
        'Supervisor de Limpieza',
        'Supervisor de Alimentos y Bebidas',
        'Supervisor de Banquetes',
        'Gerente de Turno',
        'Gerente de Bar',
        'Gerente de Resort',
        'Gerente de Catering',
        'Supervisor de Operaciones',
        'Gerente de Servicios al Huésped',
        'Coordinador de Conferencias y Eventos',
      ],
    },
    pathways: {
      title: 'Rutas de Estudio Adicional / Oportunidades Profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior ',
        {
          type: 'link',
          text: 'SIT60322 – Diploma Avanzado de Gestión Hotelera',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'El Diploma Avanzado de Gestión Hotelera se ofrece durante 104 semanas, incluyendo 80 semanas de capacitación y evaluación distribuidas en 8 términos de 10 semanas cada uno y 24 semanas de vacaciones.',
    },
    courseStructure1: {
      title:
        'Estructura del Curso – Empaquetado con Certificado IV en Gestión de Cocina y Diploma de Gestión Hotelera',
      description: [
        'Los estudiantes que han completado ambas calificaciones por ABM Further Education son elegibles para 25 Transferencias de Crédito',
        '- SIT40521 Certificado IV en Gestión de Cocina',
        '- SIT50422 Diploma de Gestión Hotelera',
        'El curso de Diploma Avanzado de Gestión Hotelera puede completarse dentro de dos términos (26 semanas)',
        'La asignación de unidades es la siguiente:',
        '**Término 1**',
        {
          type: 'table' as const,
          headers: ['Número de semanas', 'Código de unidad y título'],
          rows: [
            [
              '3 semanas',
              'BSBOPS601 Desarrollar e implementar planes de negocio',
            ],
            ['2 semanas', 'BSBFIN601 Gestionar finanzas organizacionales'],
            ['3 semanas', 'SITHFAB027* Servir alimentos y bebidas'],
            [
              '2 semanas',
              'SITHFAB024* Preparar y servir bebidas no alcohólicas',
            ],
          ],
        },
        '\n**Término 2**',
        {
          type: 'table' as const,
          headers: ['Número de semanas', 'Código de unidad y título'],
          rows: [
            ['3 semanas', 'SITXFIN011 Gestionar activos físicos'],
            ['2 semanas', 'SITXHRM012 Monitorear desempeño del personal'],
            [
              '3 semanas',
              'SITXMPR014 Desarrollar e implementar estrategias de marketing',
            ],
            [
              '2 semanas',
              'SITXWHS008 Establecer y mantener un sistema de salud y seguridad laboral',
            ],
          ],
        },
        '**Duración del curso: 26 semanas (2 términos)**',
      ],
    },
    courseStructure2: {
      title:
        'Estructura del Curso – Empaquetado con Diploma de Gestión Hotelera',
      description: [
        {
          type: 'table' as const,
          headers: ['Número de Unidades', 'Unidades', 'Núcleo/Electivos'],
          rows: [
            ['1', 'BSBFIN601 Gestionar finanzas organizacionales', 'Núcleo'],
            [
              '2',
              'BSBOPS601 Desarrollar e implementar planes de negocio',
              'Núcleo',
            ],
            ['3', 'SITXFIN011 Gestionar activos físicos', 'Núcleo'],
            ['4', 'SITXHRM012 Monitorear desempeño del personal', 'Núcleo'],
            [
              '5',
              'SITXMPR014 Desarrollar e implementar estrategias de marketing',
              'Núcleo',
            ],
            [
              '6',
              'SITXWHS008 Establecer y mantener un sistema de salud y seguridad laboral',
              'Núcleo',
            ],
            [
              '7',
              'SITHFAB027, Servir alimentos y bebidas',
              'Electivos- Grupo C',
            ],
            [
              '8',
              'SITHFAB024, Preparar y servir bebidas no alcohólicas',
              'Electivos- Grupo C',
            ],
          ],
        },
        '**Los estudiantes que han completado SIT50422 en ABM further education son elegibles para 25 transferencias de crédito, y pueden completar el curso en dos términos (26 semanas).**',
        '\n**Término 1**',
        {
          type: 'table' as const,
          headers: ['Número de semanas', 'Código de unidad y título'],
          rows: [
            [
              '3 semanas',
              'BSBOPS601 Desarrollar e implementar planes de negocio',
            ],
            ['2 semanas', 'BSBFIN601 Gestionar finanzas organizacionales'],
            ['3 semanas', 'SITHFAB027* Servir alimentos y bebidas'],
            [
              '2 semanas',
              'SITHFAB024* Preparar y servir bebidas no alcohólicas',
            ],
          ],
        },
        '\n**Término 2**',
        {
          type: 'table' as const,
          headers: ['Número de semanas', 'Código de unidad y título'],
          rows: [
            ['3 semanas', 'SITXFIN011 Gestionar activos físicos'],
            ['2 semanas', 'SITXHRM012 Monitorear desempeño del personal'],
            [
              '3 semanas',
              'SITXMPR014 Desarrollar e implementar estrategias de marketing',
            ],
            [
              '2 semanas',
              'SITXWHS008 Establecer y mantener un sistema de salud y seguridad laboral',
            ],
          ],
        },
      ],
    },
    workPlacement: {
      title: 'Prácticas Laborales',
      description: [
        'Independiente - Diploma Avanzado de Gestión Hotelera = 285 horas',
        'Empaquetado con – Certificado IV en Gestión de Cocina y Diploma de Gestión Hotelera = sin horas adicionales de componente de trabajo',
        'Empaquetado con – Diploma de Gestión Hotelera = sin horas adicionales de componente de trabajo',
      ],
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Gerente de Hotel o Resort',
        'Gerente de Restaurante',
        'Gerente de Eventos',
        'Gerente de Recepción',
        'Gerente de Limpieza',
        'Gerente de Catering',
        'Gerente de Operaciones',
        'Gerente General',
      ],
    },
    pathways: {
      title: 'Rutas de Estudio Adicional / Oportunidades Profesionales',
      description: [
        'Las opciones de empleo potenciales están en cualquier sector de la industria hotelera como gerente departamental o de pequeña empresa. Vea también los posibles roles de título de trabajo indicados en la descripción de la calificación.',
        '\nLos estudiantes que completen este curso pueden desear continuar su educación en una gama de calificaciones de Educación Superior.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description: [
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
      ],
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Este curso tiene una duración de 52 semanas que consiste en 4 x términos de 10 semanas de capacitación y evaluación, cada uno seguido de un receso vacacional de 3 semanas.\n\nCada semana del término incluye: 2 x días de 7.5 horas de instrucción cara a cara + 5 horas de tutoría',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyo de Lenguaje, Alfabetización y Aritmética (LLN)',
        '- Tecnología Asistiva',
        '- Tutorías Adicionales, y/o',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Instructor de Gimnasio',
        'Instructor de Fitness Grupal',
        'Instructor de Fitness',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'SIS40221 Certificado IV en Fitness',
          url: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Este curso tiene una duración de 52 semanas que consiste en 4 x términos de 10 semanas de capacitación y evaluación, cada uno seguido de un receso vacacional de 3 semanas.\n\nCada semana del término incluye:\n\n2 x días de 7.5 horas de instrucción cara a cara\n5 horas de tutoría',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Entrenador Personal',
        'Instructor de Fitness (Avanzado)',
        'Entrenador al Aire Libre',
        'Entrenador Corporativo o de Lugar de Trabajo',
        'Entrenador Personal en Línea',
        'Propietario/Gerente de Estudio de Fitness',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional',
      description: [
        'Los estudiantes que completen este curso pueden desear continuar su educación en la industria del fitness con calificaciones como el:',
        {
          type: 'link',
          text: 'SIS50122 Diploma de Gestión de Deportes, Acuáticos y Recreación',
          url: '/fitness-instructor-personal-trainer-courses/diploma-of-sport',
        },
        {
          type: 'link',
          text: 'SIS50321 Diploma de Deportes',
          url: '/fitness-instructor-personal-trainer-courses/diploma-of-sport',
        },
        'SIS50421 Diploma de Liderazgo al Aire Libre o continuar su educación en una gama de calificaciones de Educación Superior.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Horario de Entrega a Tiempo Completo – 12 Semanas + Experiencia laboral + 1 año de membresía de gimnasio incluida\nHorario de Entrega a Tiempo Parcial – 24 Semanas + Experiencia laboral',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Instructor de Gimnasio',
        'Instructor de Fitness Grupal',
        'Instructor de Fitness',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional',
      description: [
        'Los estudiantes que completen este curso pueden desear continuar su educación en la industria del fitness con calificaciones como el SIS50122 Diploma de Gestión de Deportes, Acuáticos y Recreación, SIS50321 Diploma de Deportes, SIS50421 Diploma de Liderazgo al Aire Libre.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Horario de Entrega a Tiempo Completo – 12 Semanas + Experiencia laboral + 1 año de membresía de gimnasio incluida\nHorario de Entrega a Tiempo Parcial – 24 Semanas + Experiencia laboral',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Entrenador Personal',
        'Instructor de Fitness (Avanzado)',
        'Entrenador al Aire Libre',
        'Entrenador Corporativo o de Lugar de Trabajo',
        'Entrenador Personal en Línea',
        'Propietario/Gerente de Estudio de Fitness',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional',
      description: [
        'Los estudiantes que completen este curso pueden desear continuar su educación en la industria del fitness con calificaciones como el SIS50122 Diploma de Gestión de Deportes, Acuáticos y Recreación, SIS50321 Diploma de Deportes, SIS50421 Diploma de Liderazgo al Aire Libre.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'El Certificado IV en Negocios se ofrece durante 12 meses, equivalente a 52 semanas, incluyendo 12 semanas de vacaciones. Esto se dividirá en cuatro términos de 10 semanas. Recibirás una orientación de tu capacitador dentro de una semana de tu inscripción.',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Oficial Administrativo',
        'Asistente de Analista de Negocios',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB50120 Diploma de Negocios',
          url: '/business-and-management-courses/diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'El Diploma de Negocios se ofrece durante 12 meses, equivalente a 52 semanas, incluyendo 12 semanas de vacaciones. Esto se dividirá en cuatro términos de 10 semanas. Recibirás una orientación de tu capacitador dentro de una semana de tu inscripción.',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: ['Gerente de Negocios', 'Director de Datos Principal'],
    },
    pathways: {
      title: 'Rutas de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB60120 Diploma Avanzado de Negocios',
          url: '/business-and-management-courses/advanced-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Este curso tiene una duración de 52 semanas que consiste en 4 x términos de 10 semanas de capacitación y evaluación, cada uno seguido de un receso vacacional de 3 semanas.\n\nCada semana del término incluye:\n\n2 x días de 7.5 horas de instrucción cara a cara\n5 horas de tutoría',
    },

    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Entrenador Deportivo',
        'Gerente Deportivo',
        'Entrenador Personal',
        'Entrenador de Fitness',
        'Entrenador de Fuerza',
        'Personal de Entrenamiento',
        'Gerentes Generales de gimnasios',
        'Roles de entrenamiento en clubes deportivos ej. entrenador de tenis, entrenador de natación y entrenador de fútbol',
        'Recepción/Ventas',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional',
      description: [
        'Los estudiantes que completen este curso pueden desear continuar su educación en una gama de calificaciones de Educación Superior.',
      ],
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'El Diploma Avanzado de Negocios se ofrece durante 18 meses, equivalente a 78 semanas, incluyendo 18 semanas de vacaciones. Esto se dividirá en seis términos de 10 semanas. Recibirás una orientación de tu capacitador dentro de una semana de tu inscripción.',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Administrador Senior',
        'Ejecutivo Senior',
        'Gerente Ejecutivo / Director',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Las opciones de empleo potenciales son como gerente en una gama de áreas de la industria.',
        'Los estudiantes que completen este curso pueden desear continuar su educación en BSB80120 Diploma de Graduado de Gestión (Aprendizaje), así como calificaciones de educación superior en negocios o gestión.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre el RTO. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'El Diploma de Graduado de Gestión (Aprendizaje) se ofrece durante 12 meses, equivalente a 52 semanas, incluyendo 12 semanas de vacaciones. Esto se dividirá en cuatro términos de 10 semanas. Recibirás una orientación de tu capacitador dentro de una semana de tu inscripción.',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: ['Gerente de Negocios', 'Director de Negocios'],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Las opciones de empleo potenciales son como Líder o Gerente en organizaciones donde el aprendizaje se usa para construir capacidad organizacional en una gama de áreas de la industria.',
        'Los estudiantes que completen este curso pueden desear continuar su educación en una gama de calificaciones de educación superior en aprendizaje y desarrollo organizacional.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Duración: 52 Semanas (40 semanas de capacitación y evaluación + 12 semanas de vacaciones)',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Oficial de Contratos',
        'Administrador de Proyectos',
        'Oficial de Calidad',
        'Propietario de Pequeña Empresa',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB50820 – Diploma de Gestión de Proyectos',
          url: '/project-and-program-management-courses/diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Duración: 52 Semanas (40 semanas de capacitación y evaluación + 12 semanas de vacaciones)',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Oficial de Proyectos',
        'Coordinador de Proyectos',
        'Gerente de Proyectos',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB60720 Diploma Avanzado de Gestión de Programas',
          url: '/project-and-program-management-courses/advanced-diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: 'Duración del Curso',
      description:
        'Duración: 78 semanas (60 semanas de capacitación y evaluación + 18 semanas de vacaciones)',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Gerente de Programas',
        'Gerente Senior de Proyectos',
        'Líder de Programas',
        'Coordinador de Programas',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Los estudiantes que completen este curso pueden desear continuar su educación en una gama de calificaciones de Educación Superior.',
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    entryRequirement: {
      title: 'Requisito de Ingreso',
      description: [
        'ABM Further Education tiene los siguientes requisitos de ingreso:',
        'Los estudiantes deben ser mayores de 18 años.',
        'Los estudiantes deben haber completado un equivalente extranjero del Año 10 o calificación superior.',
        'Los estudiantes deben tener un puntaje IELTS de 5.5 total o superior sin banda menor a 5.0 o equivalente.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Asistente de RR.HH.',
        'Consultor de Reclutamiento',
        'Oficial de Salud y Seguridad en el Lugar de Trabajo',
      ],
    },
    packagingRules: {
      title: 'Reglas de empaquetado',
      description: [
        'Se requieren seis (6) unidades núcleo y seis (6) unidades electivas para el otorgamiento del BSB40420 – Certificado IV en Gestión de Recursos Humanos. Las unidades han sido seleccionadas de acuerdo con las reglas de empaquetado y son relevantes para el resultado del trabajo, requisitos de la industria local y nivel de calificación.',
        'La versión más reciente de la calificación y reglas de empaquetado se puede encontrar en el siguiente enlace:',
        {
          type: 'link',
          text: 'https://training.gov.au/Training/Details/BSB40420',
          url: 'https://training.gov.au/Training/Details/BSB40420',
        },
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB50320 – Diploma de Gestión de Recursos Humanos',
          url: '/human-resources-courses/diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Duración del Curso',
      description: '52 semanas',
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Gerente de Recursos Humanos',
        'Oficial de Recursos Humanos',
        'Consultor de Reclutamiento',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB60320 – Diploma Avanzado de Gestión de Recursos Humanos',
          url: '/human-resources-courses/advanced-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Duración del Curso',
      description: '78 semanas',
    },
    packagingRules: {
      title: 'Reglas de empaquetado',
      description: [
        'Se requieren seis (6) núcleo y ocho (4) unidades electivas para el otorgamiento del BSB60320 – Diploma Avanzado de Gestión de Recursos Humanos. Las unidades han sido seleccionadas de acuerdo con las reglas de empaquetado y son relevantes para el resultado del trabajo, requisitos de la industria local y nivel de calificación.',
        'La versión más reciente de la calificación y reglas de empaquetado se puede encontrar en el siguiente enlace:',
        {
          type: 'link',
          text: 'training.gov.au – BSB60320 – Diploma Avanzado de Gestión de Recursos Humanos',
          url: 'https://training.gov.au/Training/Details/BSB60320',
        },
      ],
    },
    whyChooseABM: {
      title: '¿Por qué Elegir ABM?',
      description: [
        'Participa en aprendizaje cara a cara para un viaje educativo personalizado.',
        'Currículo enfocado en la industria diseñado para cumplir con los requisitos locales.',
        'Capacitadores experimentados te guían a través de escenarios del mundo real.',
        'Obtén calificaciones reconocidas internacionalmente con capacitación práctica.',
      ],
    },
    studentSupport: {
      title: 'Apoyo Estudiantil',
      description: [
        'Para maximizar las posibilidades de que los estudiantes completen exitosamente su capacitación, ABM identificará cualquier apoyo que los estudiantes individuales necesiten antes de su inscripción y proporcionará acceso a ese apoyo durante toda su capacitación. Esto se hará utilizando tanto el Formulario de Inscripción como un Formulario de Pre-Inscripción, que los estudiantes deben completar.',
        'El objetivo de ambos documentos es proporcionar cualquier apoyo que pueda ser requerido. Esto podría incluir:',
        '- Apoyos de Lenguaje, Alfabetización y Aritmética (LLN).',
        '- Tecnologías Asistivas.',
        '- Tutorías Adicionales, y/o.',
        '- Otros mecanismos, como asistencia en el uso de tecnología para componentes de entrega en línea.',
        '\nCuando este apoyo implique un costo adicional para el estudiante, ABM lo aclarará antes de aceptar la inscripción del estudiante. Si hay limitaciones en el apoyo que ABM puede proporcionar, estas limitaciones se aclararán en la información proporcionada a un estudiante potencial.',
        '\nCuando ABM identifique apoyo requerido, como alfabetización o aritmética, barreras del idioma inglés u otros idiomas o capacidades físicas, y no pueda proporcionar dicho apoyo directamente, remitirá al estudiante a un tercero. Los costos de dicho apoyo de terceros serán responsabilidad del individuo.',
        '\nCuando ABM no sea capaz de ofrecer un ambiente adecuado para las necesidades de un estudiante con necesidades específicas identificadas, lo informará en consecuencia y puede dirigir al estudiante a un proveedor que pueda hacerlo, y por lo tanto no procesará su inscripción.',
      ],
    },
    jobRoles: {
      title: 'Roles Laborales',
      description: [
        'Profesional de Recursos Humanos.',
        'Oficial de Personal.',
        'Gerente de Relaciones Industriales.',
        'Profesional de Desarrollo de Recursos Humanos.',
        'Gerente de RR.HH.',
      ],
    },
    pathways: {
      title: 'Ruta de estudio adicional / oportunidades profesionales',
      description: [
        'Después de lograr esta calificación, los graduados pueden emprender la siguiente calificación superior:',
        {
          type: 'link',
          text: 'BSB80120 – Diploma de Graduado de Gestión (Aprendizaje)',
          url: '/business-and-management-courses/graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Información Adicional',
      description:
        'Por favor, lea el Manual del Estudiante antes de la inscripción ya que contiene información valiosa sobre ABM. Para más información, por favor contacte a ABM enviando un email a info@abm.edu.au o llámenos al +61 (02) 9160 4507.',
    },
  },
};
