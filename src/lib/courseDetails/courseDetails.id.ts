import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// 코스별 상세 정보 데이터
export const courseDetailsData: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate IV in Kitchen Management ditawarkan selama 18 bulan, setara dengan 78 minggu, termasuk 18 minggu libur. Ini akan dibagi menjadi enam term 10 minggu.',
    },
    workPlacement: {
      title: 'Penempatan Kerja',
      description: '600 jam',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Chef', 'Chef de partie'],
    },
    pathways: {
      title: 'Jalur Studi Lanjutan / Peluang Karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'SIT50422 Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum mendaftar, karena berisi informasi penting tentang ABM. Untuk detail lebih lanjut, email info@abm.edu.au atau hubungi +61 (02) 9160 4507.',
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: 'Durasi Kursus – Paket dengan Kitchen Management Course',
      description: [
        'Mahasiswa yang telah menyelesaikan SIT40521 Certificate IV in Kitchen Management di ABM Further Education akan menerima 20 unit transfer kredit. Ini akan mengurangi kursus SIT50422 Diploma of Hospitality Management menjadi 26 minggu yang terdiri dari: Dua (2) term masing-masing 10 minggu (total 20 minggu) periode pengajaran. Jeda libur sebanyak 6 minggu (sesuai jadwal).',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: 'Durasi Kursus – Food & Beverage Stream',
      description:
        'Kualifikasi ini diberikan selama 78 minggu yang terdiri dari:\nEnam (6) term masing-masing 10 minggu (total 60 minggu) periode pengajaran.\nJeda libur sebanyak 18 minggu (sesuai jadwal)',
    },
    courseStructure1: {
      title: 'Struktur Kursus – Paket dengan Certificate IV in Kitchen Management',
      description: [
        {
          type: 'table' as const,
          headers: ['Jumlah unit', 'Kode', 'Judul', 'Core/Elective'],
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
      title: 'Struktur Kursus – Standalone Food & Beverage Stream',
      description: [
        {
          type: 'table' as const,
          headers: ['Jumlah unit', 'Kode', 'Judul', 'Core/Elective'],
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
      title: 'Penempatan Kerja • Hanya Food and Beverage Stream',
      description: [
        '285 jam (* tidak berlaku jika dipaketkan dengan kursus Certificate IV in Kitchen Management)',
        '\n**Komponen Tempat Kerja**',
        'Penting untuk dicatat bahwa unit tempat kerja merupakan bagian dari kualifikasi ini dan peserta didik diharuskan menyelesaikan tugas yang diuraikan dalam elemen paket pelatihan dan kriteria kinerja.',
        '\nBuku log tempat kerja akan disediakan oleh ABM dan mahasiswa diharuskan memelihara catatan harian aktivitas / tugas yang dilakukan selama penempatan kerja. Ini akan dipantau oleh penilai tempat kerja ABM selama kunjungan lokasi terjadwal. Aktivitas harian / entri buku log harus ditandatangani oleh supervisor tempat kerja setiap hari.',
        {
          type: 'table' as const,
          headers: ['Term', 'Nomor Minggu', 'Jam'],
          rows: [
            ['Term 5', 'Minggu 1-10 SITHIND008 Work effectively in the hospitality service – 30 shift @ 5 jam dari total 57 shift', '150'],
            ['Term 6', 'Minggu 1-9 SITHIND008 Work effectively in the hospitality service – 27 shift @ 5 jam dari total 57 shift', '135'],
            ['', 'TOTAL Jam Minimum', '285'],
          ],
        },
      ],
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Hotel atau Motel Manager',
        'Restaurant Manager',
        'Café Manager',
        'Food and Beverage Supervisor',
        'Bar Manager',
        'Resort Manager',
        'Catering Manager',
      ],
    },
    pathways: {
      title: 'Jalur Studi Lanjutan / Peluang Karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'SIT60322 – Advanced Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Advanced Diploma of Hospitality Management ditawarkan selama 24 bulan, setara dengan 104 minggu, termasuk 24 minggu libur. Ini akan dibagi menjadi delapan term 10 minggu.',
    },
    courseStructure1: {
      title: 'Struktur Kursus – Paket dengan Certificate IV in Kitchen Management & Diploma of Hospitality Management',
      description: [
        'Mahasiswa yang telah menyelesaikan kedua kualifikasi di ABM Further Education memenuhi syarat untuk 25 Transfer Kredit',
        '• SIT40521 Certificate IV in Kitchen Management',
        '• SIT50422 Diploma of Hospitality Management',
        'Kursus Advanced Diploma of Hospitality Management dapat diselesaikan dalam dua term (26 minggu)',
      ],
    },
    courseStructure2: {
      title: 'Struktur Kursus – Paket dengan Diploma of Hospitality Management',
      description: [
        {
          type: 'table' as const,
          headers: ['Jumlah Unit', 'Kode', 'Judul', 'Core/Electives'],
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
        '**Mahasiswa yang telah menyelesaikan SIT50422 di ABM further education memenuhi syarat untuk 25 credit Transfer, dan dapat menyelesaikan kursus dalam dua term (26 minggu).**',
      ],
    },
    workPlacement: {
      title: 'Penempatan Kerja',
      description: [
        'Mandiri - Advanced Diploma of Hospitality Management = 285 jam',
        'Dipaketkan dengan – Certificate IV in Kitchen Management & Diploma of Hospitality Management = tidak ada jam komponen kerja tambahan',
        'Dipaketkan dengan – Diploma of Hospitality Management = tidak ada jam komponen kerja tambahan',
      ],
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Hotel atau Resort Manager',
        'Restaurant Manager',
        'Event Manager',
        'Front Office Manager',
        'Housekeeping Manager',
        'Catering Manager',
        'Operations Manager',
        'General Manager',
      ],
    },
    pathways: {
      title: 'Jalur Studi Lanjutan / Peluang Karier',
      description: [
        'Pilihan pekerjaan potensial ada di sektor industri perhotelan mana pun sebagai manajer departemen atau bisnis kecil. Lihat juga kemungkinan peran jabatan yang ditunjukkan dalam deskripsi kualifikasi.',
        '\nMahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka ke berbagai kualifikasi Pendidikan Tinggi.',
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description: [
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
      ],
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate III in Fitness ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Instruktur Gym', 'Instruktur Fitness Grup', 'Instruktur Fitness'],
    },
    pathways: {
      title: 'Jalur studi lanjutan',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'SIS40221 Certificate IV in Fitness',
          url: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate IV in Fitness ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Personal Trainer',
        'Instruktur Fitness (Lanjutan)',
        'Pelatih Outdoor',
        'Pelatih Korporat atau Tempat Kerja',
        'Personal Trainer Online',
        'Pemilik/Manajer Studio Fitness',
      ],
    },
    pathways: {
      title: 'Jalur studi lanjutan',
      description: [
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka di industri fitness dengan kualifikasi seperti:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
        'SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50421 Diploma of Outdoor Leadership atau melanjutkan pendidikan mereka ke berbagai kualifikasi Pendidikan Tinggi.',
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate III in Fitness (Fast Track) ditawarkan selama 3 bulan, setara dengan 12 minggu, termasuk pengalaman kerja dan keanggotaan gym 1 tahun.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Instruktur Gym', 'Instruktur Fitness Grup', 'Instruktur Fitness'],
    },
    pathways: {
      title: 'Jalur studi lanjutan',
      description: [
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka di industri fitness dengan kualifikasi seperti:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate IV in Fitness (Fast Track) ditawarkan selama 3 bulan, setara dengan 12 minggu, termasuk pengalaman kerja dan keanggotaan gym 1 tahun.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Personal Trainer',
        'Instruktur Fitness (Lanjutan)',
        'Pelatih Outdoor',
        'Pelatih Korporat atau Tempat Kerja',
        'Personal Trainer Online',
        'Pemilik/Manajer Studio Fitness',
      ],
    },
    pathways: {
      title: 'Jalur studi lanjutan',
      description: [
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka di industri fitness dengan kualifikasi seperti:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate IV in Business ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Administrative Officer', 'Assistant Business Analyst'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB50120 Diploma of Business',
          url: '/business-and-management-courses/bsb50120-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Diploma of Business ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Business Manager', 'Chief Data Officer'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB60120 Advanced Diploma of Business',
          url: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Diploma of Sport ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Pelatih Olahraga',
        'Manajer Olahraga',
        'Personal Trainer',
        'Pelatih Fitness',
        'Pelatih Kekuatan',
        'Staf pelatih',
        'General Manager gym',
        'Peran pelatih klub olahraga misalnya pelatih tenis, pelatih renang dan pelatih sepak bola',
        'Resepsionis/Sales',
      ],
    },
    pathways: {
      title: 'Jalur studi lanjutan',
      description: [
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka ke berbagai kualifikasi Pendidikan Tinggi.',
      ],
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Advanced Diploma of Business ditawarkan selama 18 bulan, setara dengan 78 minggu, termasuk 18 minggu libur. Ini akan dibagi menjadi enam term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Senior Administrator', 'Senior Executive', 'Executive Manager / Director'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Pilihan pekerjaan potensial adalah sebagai manajer di berbagai bidang industri.',
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka ke BSB80120 Graduate Diploma of Management (Learning), serta kualifikasi pendidikan tinggi di bidang bisnis atau manajemen.',
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang RTO. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Graduate Diploma of Management (Learning) ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Business Manager', 'Business Director'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Pilihan pekerjaan potensial adalah sebagai Pemimpin atau Manajer di organisasi di mana pembelajaran digunakan untuk membangun kapabilitas organisasi di berbagai bidang industri.',
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka ke berbagai kualifikasi pendidikan tinggi dalam pembelajaran dan pengembangan organisasi.',
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate IV in Project Management Practice ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Contract Officer', 'Project Administrator', 'Quality Officer', 'Pemilik Usaha Kecil'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB50820 – Diploma of Project Management Practice',
          url: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Diploma of Project Management Practice ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Project Officer', 'Project Coordinator', 'Project Manager'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB60720 Advanced Diploma of Program Management',
          url: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Advanced Diploma of Program Management ditawarkan selama 18 bulan, setara dengan 78 minggu, termasuk 18 minggu libur. Ini akan dibagi menjadi enam term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Program Manager', 'Senior Project Manager', 'Program Leader', 'Program Coordinator'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Mahasiswa yang menyelesaikan kursus ini mungkin ingin melanjutkan pendidikan mereka ke berbagai kualifikasi Pendidikan Tinggi.',
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate IV in Human Resource Management ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['HR Assistant', 'Recruitment Consultant', 'Workplace Health and Safety Officer'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB50320 – Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Diploma of Human Resource Management ditawarkan selama 12 bulan, setara dengan 52 minggu, termasuk 12 minggu libur. Ini akan dibagi menjadi empat term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: ['Human Resources Manager', 'Human Resources Officer', 'Recruitment Consultant'],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB60320 – Advanced Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Advanced Diploma of Human Resource Management ditawarkan selama 18 bulan, setara dengan 78 minggu, termasuk 18 minggu libur. Ini akan dibagi menjadi enam term 10 minggu.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Praktisi Sumber Daya Manusia.',
        'Personnel Officer.',
        'Industrial Relations Manager.',
        'Praktisi Pengembangan Sumber Daya Manusia.',
        'HR Manager.',
      ],
    },
    pathways: {
      title: 'Jalur studi lanjutan / peluang karier',
      description: [
        'Setelah mencapai kualifikasi ini, lulusan dapat mengambil kualifikasi berikutnya:',
        {
          type: 'link',
          text: 'BSB80120 – Graduate Diploma of Management (Learning)',
          url: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Informasi Tambahan',
      description:
        'Silakan baca Buku Panduan Mahasiswa sebelum pendaftaran karena berisi informasi berharga tentang ABM. Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
    },
  },
  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseDuration: {
      title: 'Durasi Kursus',
      description:
        'Certificate III in Health Services Assistance ditawarkan selama 4 bulan, setara dengan 16 minggu, termasuk pengajaran tatap muka di kampus Sydney kami.',
    },
    workPlacement: {
      title: 'Penempatan Kerja',
      description:
        '80 jam penempatan kerja di lingkungan kesehatan nyata. Selama penempatan kerja Anda, Anda akan menyelesaikan HLTINF006 (Pencegahan dan pengendalian infeksi), HLTAIN001 (Membantu perawatan keperawatan di lingkungan perawatan akut), dan CHCCCS031 (Memberikan dukungan individual). Dukungan termasuk perjanjian penempatan kerja, pengawasan oleh trainer/assessor yang berkualifikasi, instruksi dan dukungan buku log, dan shift fleksibel berdasarkan kebutuhan bisnis.',
    },
    studentSupport: {
      title: 'Dukungan Mahasiswa',
      description: [
        '• ABM menilai kebutuhan dukungan mahasiswa sebelum pendaftaran melalui Formulir Pendaftaran dan Pra-Pendaftaran.',
        '• Dukungan yang mungkin termasuk bantuan LLN, teknologi bantu, tutorial tambahan, dan bantuan dengan alat pembelajaran online.',
        '• Biaya tambahan atau batasan dikomunikasikan sebelum pendaftaran.',
        '• Jika ABM tidak dapat menyediakan dukungan tertentu, mahasiswa dirujuk ke penyedia pihak ketiga dengan biaya sendiri.',
        '• Jika ABM tidak dapat menawarkan lingkungan belajar yang sesuai, ABM akan menginformasikan mahasiswa dan mungkin merujuk mereka ke penyedia lain alih-alih mendaftarkan mereka.',
      ],
    },
    jobRoles: {
      title: 'Peran Pekerjaan',
      description: [
        'Asisten Perawat (AIN)',
        'Asisten Layanan Kesehatan',
        'Asisten Perawatan Pribadi',
        'Petugas Rumah Sakit',
        'Asisten Dukungan Pasien',
        'Pekerja Dukungan',
        'Pekerja Perawatan',
      ],
    },
    pathways: {
      title: 'Jalur Studi Lanjutan / Peluang Karier',
      description: [
        'Setelah selesai, Anda mungkin memenuhi syarat untuk melanjutkan ke:',
        '• HLT54115 Diploma of Nursing',
        '• CHC33015 Certificate III in Individual Support',
        '• CHC43115 Certificate IV in Disability',
        '• CHC52015 Diploma of Community Services',
        '• HLT47321 Certificate IV in Health Administration',
        'Dan lebih banyak kualifikasi kesehatan.',
      ],
    },
    additionalInfo: {
      title: 'Sorotan Program',
      description: [
        '• Belajar di lingkungan kelas tatap muka yang mendukung',
        '• Bangun kemampuan Bahasa Inggris khusus untuk komunikasi kesehatan',
        '• Dapatkan kualifikasi yang diakui secara nasional',
        '• Selesaikan 80 jam penempatan kerja di lingkungan kesehatan nyata',
        '• Cocok untuk mereka dengan atau tanpa pengalaman kesehatan sebelumnya',
        '• Dukungan komprehensif sepanjang program',
        'Untuk informasi lebih lanjut, silakan hubungi ABM dengan mengirim email ke info@abm.edu.au atau hubungi kami di +61 (02) 9160 4507.',
      ].join('\n'),
    },
    faq: {
      title: 'Pertanyaan yang Sering Diajukan',
      description: [
        { question: 'Berapa biaya kursus asisten keperawatan?', answer: 'Silakan merujuk ke daftar harga resmi kami untuk informasi biaya kuliah terbaru.' },
        { question: 'Visa mana yang memungkinkan saya mendaftar?', answer: 'Kursus ini cocok untuk siswa dengan Working Holiday Visa atau jenis visa apa pun yang memungkinkan Anda belajar selama 16 minggu tanpa Confirmation of Enrolment (CoE). Kami tidak memberikan saran visa. Silakan periksa kondisi visa Anda atau konsultasikan dengan agen migrasi terdaftar jika Anda tidak yakin.' },
        { question: 'Bagaimana dengan penempatan dan dukungan untuk pelatihan klinis?', answer: 'ABM menyediakan 80 jam penempatan kerja sebagai bagian dari kursus, diatur melalui mitra industri tepercaya kami. Setelah selesai, kami juga menawarkan peluang pekerjaan berbayar untuk lulusan yang memenuhi syarat, mendukung transisi Anda yang mulus ke tenaga kerja kesehatan.' },
        { question: 'Bisakah saya mencari pekerjaan dengan kualifikasi ini?', answer: 'Ya, lulusan kami sering mendapatkan peran di Rumah Sakit Swasta, Pusat Medis, Pusat Perawatan Lansia.' },
        { question: 'Bagaimana jika kemampuan Bahasa Inggris saya tidak cukup?', answer: 'Persyaratan masuk minimum adalah IELTS 5.5 atau setara. Jika Anda saat ini memiliki IELTS 4.5 atau setara, Anda dapat mendaftar kursus dengan Plus Nursing English, yang menyediakan dukungan bahasa tambahan yang disesuaikan dengan lingkungan kesehatan. Jika Anda tidak memiliki hasil tes Bahasa Inggris, Anda dapat dinilai kemahiran Bahasa Inggris Anda melalui Tes Penempatan Bahasa Inggris ABM.' },
      ],
    },
  },
};
