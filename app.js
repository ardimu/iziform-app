/**
 * iziForm 3.0 — Luxury Open-Canvas Interactive Engine
 * Bespoke corporate landing form experience with hotkeys & multi-themes.
 */

const state = {
  currentTheme: 'silicon',
  currentFont: 'Plus Jakarta Sans',
  currentLanguage: 'id',
  view: 'dashboard',
  activePanel: '',
  activePresetKey: 'recruit',
  currentStepIndex: 0,
  userResponses: {},
  googleEmail: '',
  gformUrl: '',
  webhookUrl: '',
  paymentMethod: 'idr',
  paymentMethodManuallySet: false,
  isSimulation: false,
  cvParse: null,
  hrRequirement: null,
  hrCardboxSettings: {},
  hrActiveSide: 'a',
  hrCompanyName: 'PT Digital Nusantara Indonesia',
  hrCompanyProfile: { industry: 'Teknologi & Digital', description: 'Perusahaan digital yang membangun produk kerja modern untuk tim Indonesia.', website: 'https://iziform.app' },
  hrCompanyLogo: '',
  hrCompanyBanner: '',
  hrUiTemplate: 'clean01',
  hrUiTier: 'free',
  hrFontPairOverrides: {},
  hrTemplateKey: 'tech',
  hrSelectionStatus: 'new',
  hrLastCandidate: null,
  qrisImageUrl: '',
  qrisPaymentPlan: '',
  qrisMerchant: '',
  supportMethod: 'qris',
  presets: {
    recruit: {
      companyName: 'PT Digital Nusantara Indonesia',
      subText: 'Official Career Portal • Talenta Teknologi 2026 • Data tersambung aman ke Google Sheet',
      logo: '🏢',
      categoryTag: 'OFFICIAL CAREER PORTAL',
      categoryLabel: 'Rekrutmen & Lamaran Kerja',
      categoryDesc: 'Form lamaran kandidat, portofolio, dan jadwal interview.',
      categoryIcon: '💼',
      coverImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      slug: 'rekrutmen-digital-2026',
      questions: [
        {
          id: 'recruit_name',
          category: '01 • IDENTITAS KANDIDAT',
          title: 'Siapa nama lengkap Anda?',
          subtitle: 'Masukkan nama resmi Anda sesuai yang tertera pada resume atau KTP.',
          type: 'text',
          placeholder: 'Ketik nama lengkap Anda di sini...',
          defaultValue: 'Nadia Utami'
        },
        {
          id: 'recruit_wa',
          category: '02 • KONTAK LANGSUNG',
          title: 'Berapa nomor WhatsApp aktif Anda?',
          subtitle: 'Tim People & Culture kami akan mengabari jadwal interview via WhatsApp.',
          type: 'tel',
          placeholder: '0812-xxxx-xxxx',
          defaultValue: '0812-3456-7890'
        },
        {
          id: 'recruit_role',
          category: '03 • POSISI PILIHAN',
          title: 'Pilih spesialisasi posisi yang ingin Anda lamar:',
          subtitle: 'Pilih salah satu posisi yang paling relevan dengan pengalaman terbaik Anda.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '💻', title: 'Lead Fullstack Developer', desc: 'React, Node.js, Go & Arsitektur Microservices' },
            { hotkey: 'B', icon: '👩‍💼', title: 'HR Talent Acquisition Lead', desc: 'End-to-end Tech Recruitment, KPI & Employer Branding' },
            { hotkey: 'C', icon: '🚀', title: 'Growth Marketing Lead', desc: 'Performance Ads, ROAS Analytics & User Acquisition' }
          ],
          defaultIndex: 0
        },
        {
          id: 'recruit_start_date',
          category: '04 • KESIAPAN BERGABUNG',
          title: 'Kapan tanggal mulai Anda tersedia?',
          subtitle: 'Tanggal awal kerja atau tanggal Anda siap bergabung dengan tim.',
          type: 'date',
          defaultValue: '2026-12-01'
        },
        {
          id: 'recruit_cv',
          category: '05 • DOKUMEN PENDUKUNG',
          title: 'Unggah CV atau tempel link dokumen Anda:',
          subtitle: 'Pilih file dari perangkat atau berikan link Google Drive/portfolio.',
          type: 'file',
          placeholder: 'https://drive.google.com/...'
        }
      ]
    },

    event: {
      companyName: 'Jakarta Sunset 10K Event 2026',
      subText: 'Official Event Registration Portal • Terhubung ke Google Sheet Panitia',
      logo: '🏃‍♂️',
      categoryTag: 'EVENT REGISTRATION 2026',
      categoryLabel: 'Registrasi Event & Lomba',
      categoryDesc: 'Pendaftaran lari, seminar, komunitas, dan tiket digital.',
      categoryIcon: '🏃',
      coverImg: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
      slug: 'event-sunset-run-jakarta',
      questions: [
        {
          id: 'event_name',
          category: '01 • DATA PESERTA',
          title: 'Siapa nama lengkap Anda untuk sertifikat?',
          subtitle: 'Nama ini akan dicetak resmi pada Nomor Dada (BIB) dan E-Finisher Medal.',
          type: 'text',
          placeholder: 'Nama lengkap peserta...',
          defaultValue: 'Budi Pratama'
        },
        {
          id: 'event_wa',
          category: '02 • KONFIRMASI E-TIKET',
          title: 'Nomor WhatsApp untuk pengiriman tiket event:',
          subtitle: 'QR Code pengambilan Race Pack Finisher akan dikirimkan langsung ke nomor ini.',
          type: 'tel',
          placeholder: '0813-xxxx-xxxx',
          defaultValue: '0813-9988-7766'
        },
        {
          id: 'event_category',
          category: '03 • KATEGORI TANTANGAN',
          title: 'Pilih jarak tantangan event Anda:',
          subtitle: 'Semua peserta yang finish sebelum Cut-Off Time berhak atas Medali Resmi.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '👟', title: '5K Fun Run', desc: 'Rute santai & ramah pemula (COT: 60 Menit)' },
            { hotkey: 'B', icon: '🏅', title: '10K Challenge Run', desc: 'Rute kompetitif resmi (COT: 120 Menit)' },
            { hotkey: 'C', icon: '⚡', title: '21K Half Marathon', desc: 'Tantangan endurance peserta terlatih (COT: 3 Jam)' }
          ],
          defaultIndex: 1
        },
        {
          id: 'event_birth_date',
          category: '04 • TANGGAL LAHIR',
          title: 'Kapan tanggal lahir Anda?',
          subtitle: 'Dipakai untuk validasi kategori usia dan penerbitan sertifikat.',
          type: 'date',
          defaultValue: '1994-08-15'
        },
        {
          id: 'event_experience',
          category: '05 • PENGALAMAN LARI',
          title: 'Seberapa sering Anda berlari? (1–5)',
          subtitle: '1 = pemula, 5 = rutin berlari lebih dari 3 kali seminggu.',
          type: 'rating',
          defaultValue: 3
        }
      ]
    },

    order: {
      companyName: 'Ruang Kreasi Pre-Order & Pesanan',
      subText: 'Portal Pesanan & Pre-Order • Langsung Tercatat di Google Sheet',
      logo: '📦',
      categoryTag: 'PRE-ORDER & ORDER',
      categoryLabel: 'Pesanan & Pre-Order (PO)',
      categoryDesc: 'Order produk, pre-order, booking, dan konfirmasi pembayaran.',
      categoryIcon: '🛍️',
      coverImg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      slug: 'pesanan-pre-order',
      questions: [
        {
          id: 'order_name',
          category: '01 • IDENTITAS PEMESAN',
          title: 'Siapa nama pemesan atau bisnis Anda?',
          subtitle: 'Nama ini dipakai untuk identitas pesanan dan invoice.',
          type: 'text',
          placeholder: 'contoh: Nadia Creative Studio',
          defaultValue: 'Nadia Creative Studio'
        },
        {
          id: 'order_item',
          category: '02 • JENIS PESANAN',
          title: 'Pilih produk atau layanan yang ingin dipesan:',
          subtitle: 'Pilih satu pesanan utama yang paling sesuai dengan kebutuhan Anda.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '🎨', title: 'Desain Brand & Logo', desc: 'Identity kit, panduan brand, dan aset dasar' },
            { hotkey: 'B', icon: '📦', title: 'Kemasan Produk', desc: 'Desain box, label, dan mockup siap cetak' },
            { hotkey: 'C', icon: '📱', title: 'Konten Digital & Kampanye', desc: 'Feed Instagram, banner, dan materi iklan' }
          ],
          defaultIndex: 0
        },
        {
          id: 'order_brief',
          category: '03 • DETAIL PESANAN',
          title: 'Ceritakan detail pesanan Anda:',
          subtitle: 'Jelaskan jumlah, ukuran, preferensi, dan catatan khusus untuk penjual.',
          type: 'textarea',
          placeholder: 'Contoh: 50 box kemasan kopi, finishing matte, ada stiker logo di bagian depan...',
          defaultValue: 'Ingin kemasan ramah lingkungan untuk produk kopi specialty dengan kesan modern dan hangat.'
        },
        {
          id: 'order_deadline',
          category: '04 • TARGET PENGIRIMAN',
          title: 'Kapan tanggal target pengiriman pesanan?',
          subtitle: 'Kami akan menyesuaikan jadwal produksi berdasarkan tanggal ini.',
          type: 'date',
          defaultValue: '2026-12-15'
        },
        {
          id: 'order_reference',
          category: '05 • REFERENSI PESANAN',
          title: 'Unggah referensi atau tempel link dokumen:',
          subtitle: 'Boleh file gambar/PDF atau link Drive/Figma yang sudah Anda siapkan.',
          type: 'file',
          placeholder: 'https://drive.google.com/...'
        }
      ]
    },

    class: {
      companyName: 'Akademi Kreatif Nusantara',
      subText: 'Pendaftaran Kelas & Pelatihan • Tersambung ke Google Sheet',
      logo: '🎓',
      categoryTag: 'CLASS REGISTRATION 2026',
      categoryLabel: 'Pendaftaran Kelas / Kursus',
      categoryDesc: 'Pendaftaran kelas, pelatihan, workshop, dan program belajar.',
      categoryIcon: '📚',
      coverImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      slug: 'pendaftaran-kelas-2026',
      questions: [
        {
          id: 'class_name',
          category: '01 • DATA PESERTA',
          title: 'Siapa nama lengkap calon peserta?',
          subtitle: 'Nama ini akan tercantum pada sertifikat dan daftar kelas.',
          type: 'text',
          placeholder: 'Nama lengkap peserta...',
          defaultValue: 'Raka Pratama'
        },
        {
          id: 'class_wa',
          category: '02 • KONTAK PESERTA',
          title: 'Nomor WhatsApp untuk info jadwal kelas:',
          subtitle: 'Pengumuman kelas dan materi akan dikirimkan ke nomor ini.',
          type: 'tel',
          placeholder: '0812-xxxx-xxxx',
          defaultValue: '0812-2222-3333'
        },
        {
          id: 'class_program',
          category: '03 • PROGRAM PILIHAN',
          title: 'Pilih program belajar yang ingin diikuti:',
          subtitle: 'Setiap program memiliki mentor, modul, dan studi kasus berbeda.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '🎨', title: 'UI/UX Design Fundamentals', desc: 'Riset, wireframe, prototype, dan desain visual' },
            { hotkey: 'B', icon: '💻', title: 'Fullstack Development', desc: 'Frontend, backend, database, dan deployment' },
            { hotkey: 'C', icon: '📈', title: 'Digital Marketing', desc: 'SEO, iklan berbayar, analytics, dan konten' }
          ],
          defaultIndex: 0
        },
        {
          id: 'class_start_date',
          category: '04 • MULAI BELAJAR',
          title: 'Kapan Anda ingin mulai belajar?',
          subtitle: 'Kami akan menempatkan Anda pada angkatan terdekat.',
          type: 'date',
          defaultValue: '2026-12-05'
        },
        {
          id: 'class_motivation',
          category: '05 • MOTIVASI BELAJAR',
          title: 'Ceritakan singkat target belajar Anda:',
          subtitle: 'Ceritakan yang ingin Anda capai setelah mengikuti program ini.',
          type: 'textarea',
          placeholder: 'Contoh: ingin membangun portofolio UI/UX dan siap melamar kerja...',
          defaultValue: 'Ingin menguasai desain produk digital dan membangun portofolio profesional.'
        }
      ]
    },

    survey: {
      companyName: 'Tim Riset & Pengalaman Pelanggan',
      subText: 'Survei Singkat & Masukan Pelanggan • Data masuk Google Sheet',
      logo: '📊',
      categoryTag: 'CUSTOMER INSIGHT SURVEY',
      categoryLabel: 'Survei & Masukan Pelanggan',
      categoryDesc: 'Feedback, ulasan, survei singkat, dan pengukuran kepuasan.',
      categoryIcon: '💬',
      coverImg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      slug: 'survei-masukan-pelanggan',
      questions: [
        {
          id: 'survey_name',
          category: '01 • IDENTITAS RESPONDEN',
          title: 'Nama responden (boleh anonim):',
          subtitle: 'Isi dengan nama panggilan atau biarkan kosong jika ingin anonim.',
          type: 'text',
          placeholder: 'Contoh: Pelanggan Setia',
          defaultValue: 'Pelanggan Setia'
        },
        {
          id: 'survey_channel',
          category: '02 • SUMBER INFORMASI',
          title: 'Dari mana Anda pertama kali mengenal kami?',
          subtitle: 'Pilih satu sumber yang paling mengingat Anda.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '📱', title: 'Media Sosial', desc: 'Instagram, TikTok, atau platform serupa' },
            { hotkey: 'B', icon: '🤝', title: 'Rekomendasi Teman', desc: 'Cerita dari teman, keluarga, atau rekan kerja' },
            { hotkey: 'C', icon: '📧', title: 'Iklan / Email', desc: 'Iklan digital, newsletter, atau promosi email' },
            { hotkey: 'D', icon: '✨', title: 'Lainnya', desc: 'Sumber lain yang tidak tercantum di sini' }
          ],
          defaultIndex: 0
        },
        {
          id: 'survey_rating',
          category: '03 • PENILAIAN',
          title: 'Seberapa puas Anda dengan layanan kami? (1–5)',
          subtitle: '1 = kurang memuaskan, 5 = sangat memuaskan.',
          type: 'rating',
          defaultValue: 4
        },
        {
          id: 'survey_visit_date',
          category: '04 • TANGGAL KUNJUNGAN',
          title: 'Kapan terakhir kali Anda menggunakan layanan kami?',
          subtitle: 'Membantu kami mengaitkan masukan dengan periode tertentu.',
          type: 'date',
          defaultValue: '2026-11-20'
        },
        {
          id: 'survey_comment',
          category: '05 • MASUKAN TERBUKA',
          title: 'Apa yang bisa kami perbaiki?',
          subtitle: 'Ceritakan pengalaman Anda dengan bahasa sendiri.',
          type: 'textarea',
          placeholder: 'Tulis masukan, saran, atau apresiasi Anda di sini...',
          defaultValue: 'Pelayanan ramah dan proses cepat. Semakin banyak variasi menu akan lebih baik.'
        }
      ]
    },

    brief: {
      companyName: 'Studio Brief & Jasa Kreatif',
      subText: 'Portal Brief Proyek & Permintaan Jasa • Tersambung ke Google Sheet',
      logo: '✍️',
      categoryTag: 'CLIENT BRIEF PORTAL',
      categoryLabel: 'Client Brief & Permintaan Jasa',
      categoryDesc: 'Brief proyek, permintaan layanan jasa, dan target pesanan klien.',
      categoryIcon: '🧾',
      coverImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      slug: 'client-brief-jasa',
      questions: [
        {
          id: 'brief_name',
          category: '01 • KONTAK KLIEN',
          title: 'Siapa nama Anda?',
          subtitle: 'Nama ini dipakai untuk komunikasi tindak lanjut proyek.',
          type: 'text',
          placeholder: 'Nama lengkap atau panggilan...',
          defaultValue: 'Dimas Kreatif'
        },
        {
          id: 'brief_company',
          category: '02 • NAMA BISNIS',
          title: 'Apa nama bisnis atau brand Anda?',
          subtitle: 'Isi dengan nama brand, usaha, atau organisasi Anda.',
          type: 'text',
          placeholder: 'Contoh: Kopi Senja Roastery',
          defaultValue: 'Studio Dimas'
        },
        {
          id: 'brief_service',
          category: '03 • JENIS LAYANAN',
          title: 'Pilih layanan jasa yang dibutuhkan:',
          subtitle: 'Pilih satu layanan utama sebagai fokus pengerjaan.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '🎨', title: 'Brand & Logo', desc: 'Identitas visual, panduan brand, dan aset dasar' },
            { hotkey: 'B', icon: '🌐', title: 'Website & Landing Page', desc: 'Desain dan pengembangan web responsif' },
            { hotkey: 'C', icon: '📣', title: 'Konten & Kampanye', desc: 'Materi promosi, feed, dan iklan digital' }
          ],
          defaultIndex: 0
        },
        {
          id: 'brief_deadline',
          category: '04 • TARGET SELESAI',
          title: 'Kapan target pengiriman proyek?',
          subtitle: 'Kami akan menyesuaikan estimasi dan jadwal produksi.',
          type: 'date',
          defaultValue: '2026-12-20'
        },
        {
          id: 'brief_description',
          category: '05 • DETAIL BRIEF',
          title: 'Ceritakan kebutuhan proyek Anda:',
          subtitle: 'Jelaskan tujuan, audiens, gaya, dan hal yang harus dihindari.',
          type: 'textarea',
          placeholder: 'Contoh: ingin identitas brand minimalis untuk produk kopi lokal...',
          defaultValue: 'Membutuhkan identitas brand minimalis untuk produk kopi lokal dengan kesan hangat dan modern.'
        },
        {
          id: 'brief_attachment',
          category: '06 • LAMPIRAN BRIEF',
          title: 'Unggah lampiran atau tempel link referensi:',
          subtitle: 'Boleh file PDF/gambar atau link Drive/Figma berisi referensi.',
          type: 'file',
          placeholder: 'https://drive.google.com/...'
        }
      ]
    },

    custom: {
      companyName: 'Form Pilihan Sendiri',
      subText: 'Buat judul, tujuan, dan detail form Anda sendiri • Data langsung ke Google Sheet',
      logo: 'iF',
      categoryTag: 'CUSTOM FORM BUILDER',
      categoryLabel: 'Pilihan Sendiri',
      categoryDesc: 'Tentukan judul, tujuan, dan pertanyaan kustom Anda sendiri.',
      categoryIcon: '✦',
      coverImg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
      slug: 'pilihan-sendiri',
      questions: [
        {
          id: 'custom_title',
          category: '01 • JUDUL FORM',
          title: 'Apa judul form kustom Anda?',
          subtitle: 'Judul ini akan tampil sebagai identitas utama form Anda.',
          type: 'text',
          placeholder: 'Contoh: Form Pendaftaran Komunitas',
          defaultValue: 'Form Kustom Saya'
        },
        {
          id: 'custom_purpose',
          category: '02 • TUJUAN FORM',
          title: 'Apa tujuan utama form ini?',
          subtitle: 'Jelaskan singkat mengapa form ini dibuat dan siapa yang mengisi.',
          type: 'textarea',
          placeholder: 'Contoh: Mengumpulkan peserta dan masukan komunitas...',
          defaultValue: 'Mengumpulkan peserta dan masukan dari audiens saya.'
        },
        {
          id: 'custom_contact',
          category: '03 • KONTAK KOORDINATOR',
          title: 'Nomor kontak yang bisa dihubungi:',
          subtitle: 'Digunakan hanya sebagai informasi pendukung di ringkasan data.',
          type: 'tel',
          placeholder: '0812-xxxx-xxxx',
          defaultValue: '0812-0000-0000'
        },
        {
          id: 'custom_needed_date',
          category: '04 • WAKTU PENGGUNAAN',
          title: 'Kapan form ini dibutuhkan?',
          subtitle: 'Tentukan tanggal mulai atau tenggat penggunaan form.',
          type: 'date',
          defaultValue: '2026-12-15'
        },
        {
          id: 'custom_details',
          category: '05 • DETAIL TAMBAHAN',
          title: 'Tambahkan detail penting lainnya:',
          subtitle: 'Isi instruksi khusus, kriteria, atau catatan untuk responden.',
          type: 'textarea',
          placeholder: 'Contoh: lamporkan pengalaman Anda dalam 2 paragraf...',
          defaultValue: 'Isi dengan instruksi khusus sesuai kebutuhan Anda.'
        }
      ]
    }
  }
};

const PRICING_PLANS = {
  free: {
    benefitKeys: ['pricing.freeBenefit1', 'pricing.freeBenefit2', 'pricing.freeBenefit3', 'pricing.freeBenefit4']
  },
  pro: {
    benefitKeys: ['pricing.proBenefit1', 'pricing.proBenefit2', 'pricing.proBenefit3', 'pricing.proBenefit4', 'pricing.proBenefit5'],
    methods: {
      idr: {
        oldPrice: 'Rp50rb',
        price: 'Rp29rb',
        periodKey: 'pricing.perForm',
        ctaKey: 'pricing.choosePro',
        checkoutUrl: ''
      },
      usd: {
        oldPrice: '$4',
        price: '$2',
        periodKey: 'pricing.perForm',
        ctaKey: 'pricing.choosePro',
        checkoutUrl: 'https://checkout.example.com/iziform-pro-usd'
      }
    }
  },
  business: {
    benefitKeys: ['pricing.businessBenefit1', 'pricing.businessBenefit2', 'pricing.businessBenefit3', 'pricing.businessBenefit4'],
    methods: {
      idr: {
        oldPrice: 'Rp150rb',
        price: 'Rp99rb',
        periodKey: 'pricing.perProject',
        ctaKey: 'pricing.chooseBusiness',
        checkoutUrl: ''
      },
      usd: {
        oldPrice: '$10',
        price: '$7',
        periodKey: 'pricing.perProject',
        ctaKey: 'pricing.chooseBusiness',
        checkoutUrl: 'https://checkout.example.com/iziform-business-usd'
      }
    }
  }
};

const CUSTOM_PRICING = {
  selfFree: { id: 'custom-self-free-price', idr: 'Rp0', usd: '$0' },
  selfPaid: { id: 'custom-self-paid-price', idr: 'Rp79rb', usd: '$6' },
  requestLight: { id: 'custom-request-light-price', idr: 'Rp149rb', usd: '$12' },
  requestComplex: { id: 'custom-request-complex-price', idr: 'Rp299rb', usd: '$24' }
};

const HR_BASE_COPY = {
  id: { industry: 'Teknologi & Digital', description: 'Perusahaan digital yang membangun produk kerja modern untuk tim Indonesia.', website: 'https://iziform.app', roleSummary: 'Memimpin inisiatif utama dan mengirimkan dampak yang terukur bagi tim.', responsibilities: 'Merancang solusi, berkolaborasi lintas fungsi, dan menjaga kualitas hasil akhir.', jobType: 'Full-time', mustHave: 'Pengalaman relevan, tools wajib sesuai posisi, dan domisili sesuai ketentuan.', qualification: 'Latar belakang profesional dengan portofolio atau pengalaman yang relevan.', certification: 'Sertifikasi relevan menjadi nilai tambah.', plusPoints: 'Pengalaman tim, komunikasi kuat, dan kemampuan belajar cepat.', benefit: '', customFields: [], cvRequired: true, matchThreshold: 'medium' },
  en: { industry: 'Technology & Digital', description: 'A digital company building modern work products for Indonesian teams.', website: 'https://iziform.app', roleSummary: 'Lead key initiatives and deliver measurable impact for the team.', responsibilities: 'Design solutions, collaborate cross-functionally, and protect final quality.', jobType: 'Full-time', mustHave: 'Relevant experience, required tools, and location that matches the rule.', qualification: 'Professional background with a relevant portfolio or track record.', certification: 'Relevant certification is an advantage.', plusPoints: 'Team experience, strong communication, and fast learning.', benefit: '', customFields: [], cvRequired: true, matchThreshold: 'medium' },
  zh: { industry: '科技与数字化', description: '一家为印尼团队打造现代工作产品的数字公司。', website: 'https://iziform.app', roleSummary: '主导关键项目，为团队带来可衡量的成果。', responsibilities: '设计解决方案、跨职能协作并把控最终质量。', jobType: 'Full-time', mustHave: '具备相关经验、指定工具，并符合所在地要求。', qualification: '具备相关专业背景及作品集或项目经历。', certification: '相关证书者优先。', plusPoints: '团队经验、沟通能力强、学习速度快。', benefit: '', customFields: [], cvRequired: true, matchThreshold: 'medium' }
};

const HR_COMPANY_PRESETS = {
  nusantara: {
    name: 'PT Digital Nusantara Indonesia',
    industry: { id: 'Teknologi & Digital', en: 'Technology & Digital', zh: '科技与数字化' },
    description: { id: 'Perusahaan digital yang membangun produk kerja modern untuk tim Indonesia.', en: 'A digital company building modern work products for Indonesian teams.', zh: '一家为印尼团队打造现代工作产品的数字公司。' },
    website: 'https://iziform.app'
  },
  aurora: {
    name: 'Aurora Retail Group',
    industry: { id: 'Retail & E-Commerce', en: 'Retail & E-Commerce', zh: '零售与电子商务' },
    description: { id: 'Grup retail omnichannel yang menghubungkan pengalaman digital dan toko fisik.', en: 'An omnichannel retail group connecting digital and physical store experiences.', zh: '连接数字与线下门店体验的全渠道零售集团。' },
    website: 'https://aurora.example.com'
  },
  monarch: {
    name: 'Monarch Education',
    industry: { id: 'Pendidikan & Pelatihan', en: 'Education & Training', zh: '教育与培训' },
    description: { id: 'Lembaga pendidikan modern yang mengembangkan talenta siap kerja.', en: 'A modern education institution developing job-ready talent.', zh: '培养职场-ready 人才的现代教育品牌。' },
    website: 'https://monarch.example.com'
  }
};

const HR_UI_TEMPLATES = [
  { key: 'clean01', tier: 'free', theme: 'clean', ornament: 'none', fontPair: 'clean', labelKey: 'hr.uiTemplate.clean01' },
  { key: 'clean02', tier: 'free', theme: 'paper-simple', ornament: 'none', fontPair: 'clean', labelKey: 'hr.uiTemplate.clean02' },
  { key: 'soft-dusk', tier: 'free', theme: 'soft-dusk', ornament: 'none', fontPair: 'clean', labelKey: 'hr.uiTemplate.softDusk' },
  { key: 'editorial02', tier: 'pro', theme: 'warm-editorial', ornament: 'batik', fontPair: 'editorial', labelKey: 'hr.uiTemplate.pro01' },
  { key: 'pro02', tier: 'pro', theme: 'studio-frame', ornament: 'frame', fontPair: 'studio', labelKey: 'hr.uiTemplate.pro02' },
  { key: 'pro03', tier: 'pro', theme: 'soft-executive', ornament: 'heritage', fontPair: 'executive', labelKey: 'hr.uiTemplate.pro03' },
  { key: 'business01', tier: 'business', theme: 'obsidian', ornament: 'executive', fontPair: 'executive', labelKey: 'hr.uiTemplate.business01' },
  { key: 'business02', tier: 'business', theme: 'ivory-champagne', ornament: 'filigree', fontPair: 'editorial', labelKey: 'hr.uiTemplate.business02' },
  { key: 'business03', tier: 'business', theme: 'nordic-cobalt', ornament: 'nordic', fontPair: 'studio', labelKey: 'hr.uiTemplate.business03' },
  { key: 'business04', tier: 'business', theme: 'deep-forest', ornament: 'forest', fontPair: 'heritage', labelKey: 'hr.uiTemplate.business04' }
];

const HR_FONT_PAIRS = {
  clean: { heading: 'var(--font-jakarta)', body: 'var(--font-jakarta)' },
  editorial: { heading: 'var(--font-playfair)', body: 'var(--font-jakarta)' },
  studio: { heading: 'var(--font-space)', body: 'var(--font-inter)' },
  executive: { heading: 'var(--font-playfair)', body: 'var(--font-inter)' },
  heritage: { heading: 'var(--font-playfair)', body: 'var(--font-outfit)' }
};

const HR_FONT_PAIR_KEYS = ['editorial', 'studio', 'executive', 'heritage'];

const HR_TEMPLATES = {
  tech: {
    id: { position: 'Lead Fullstack Developer', location: 'Jakarta / Hybrid', minYears: '5', skills: 'React, Node.js, Go, Microservices', education: 'S1 Informatika / Bootcamp + Portofolio GitHub', salary: 'Rp25–35 juta', noticePeriod: '30 hari', screening: 'Ceritakan pengalaman Anda membangun sistem produksi dan peran Anda di dalam tim.' },
    en: { position: 'Lead Fullstack Developer', location: 'Jakarta / Hybrid', minYears: '5', skills: 'React, Node.js, Go, Microservices', education: 'Bachelor in Informatics / Bootcamp + GitHub portfolio', salary: 'IDR 25–35 million', noticePeriod: '30 days', screening: 'Describe a production system you built and your role in the team.' },
    zh: { position: '全栈开发负责人', location: '雅加达 / 混合办公', minYears: '5', skills: 'React、Node.js、Go、微服务', education: '计算机本科 / 训练营 + GitHub 作品集', salary: '2500万–3500万印尼盾', noticePeriod: '30 天', screening: '请说明您参与构建的生产系统以及您在团队中的角色。' }
  },
  people: {
    id: { position: 'HR Talent Acquisition Lead', location: 'Jakarta / On-site', minYears: '4', skills: 'Sourcing, Interviewing, Employer Branding, HRIS', education: 'S1 Psikologi / Manajemen SDM + Sertifikasi HR', salary: 'Rp18–26 juta', noticePeriod: '30 hari', screening: 'Jelaskan strategi sourcing dan ukuran keberhasilan hiring yang pernah Anda jalankan.' },
    en: { position: 'HR Talent Acquisition Lead', location: 'Jakarta / On-site', minYears: '4', skills: 'Sourcing, Interviewing, Employer Branding, HRIS', education: 'Bachelor in Psychology / HR Management + HR certification', salary: 'IDR 18–26 million', noticePeriod: '30 days', screening: 'Explain your sourcing strategy and the hiring success metrics you owned.' },
    zh: { position: '人才招聘负责人', location: '雅加达 / 现场办公', minYears: '4', skills: '人才搜寻、面试、雇主品牌、HRIS', education: '心理学或人力资源管理本科 + HR 认证', salary: '1800万–2600万印尼盾', noticePeriod: '30 天', screening: '请说明您使用过的招聘策略以及您负责的招聘成功指标。' }
  },
  growth: {
    id: { position: 'Growth Marketing Lead', location: 'Remote / Indonesia', minYears: '3', skills: 'Meta Ads, Google Ads, Analytics, Experimentation', education: 'S1 Marketing / Bisnis + Portofolio Campaign', salary: 'Rp20–30 juta', noticePeriod: '45 hari', screening: 'Ceritakan eksperimen growth yang paling berdampak dan bagaimana Anda mengukurnya.' },
    en: { position: 'Growth Marketing Lead', location: 'Remote / Indonesia', minYears: '3', skills: 'Meta Ads, Google Ads, Analytics, Experimentation', education: 'Bachelor in Marketing / Business + campaign portfolio', salary: 'IDR 20–30 million', noticePeriod: '45 days', screening: 'Share your most impactful growth experiment and how you measured it.' },
    zh: { position: '增长营销负责人', location: '远程 / 印尼', minYears: '3', skills: 'Meta 广告、Google 广告、数据分析、实验', education: '市场营销或商科本科 +  campaign 作品集', salary: '2000万–3000万印尼盾', noticePeriod: '45 天', screening: '请分享影响最大的增长实验以及您的衡量方式。' }
  },
  custom: {
    id: { position: 'Posisi Custom HR', location: 'Sesuai kebutuhan HR', minYears: '1', skills: 'Diisi HR', education: 'Diisi HR', salary: 'Diisi HR', noticePeriod: 'Diisi HR', screening: 'Tambahkan pertanyaan penyaring utama Anda.' },
    en: { position: 'Custom HR Position', location: 'Set by HR', minYears: '1', skills: 'Set by HR', education: 'Set by HR', salary: 'Set by HR', noticePeriod: 'Set by HR', screening: 'Add your main screening question.' },
    zh: { position: '自定义 HR 职位', location: '由 HR 设置', minYears: '1', skills: '由 HR 设置', education: '由 HR 设置', salary: '由 HR 设置', noticePeriod: '由 HR 设置', screening: '请添加您的主要筛选问题。' }
  }
};

Object.values(HR_TEMPLATES).forEach((entry) => {
  Object.keys(entry).forEach((lang) => {
    entry[lang] = { ...(HR_BASE_COPY[lang] || HR_BASE_COPY.id), ...entry[lang] };
  });
});

const HR_PRICING = {
  idr: { old: 'Rp79.000', price: 'Rp49.000', businessOld: 'Rp150.000', businessPrice: 'Rp99.000' },
  usd: { old: '$6', price: '$4', businessOld: '$10', businessPrice: '$7' }
};

const HR_STATUS_KEYS = ['new', 'shortlist', 'interview', 'accepted', 'rejected'];

const HR_QUESTION_COPY = {
  id: (r) => [
    { id: 'recruit_name', category: '01 • IDENTITAS KANDIDAT', title: 'Nama lengkap sesuai CV Anda', subtitle: 'Isi nama resmi Anda sesuai dokumen dan CV.', type: 'text', placeholder: 'Nama lengkap', defaultValue: 'Nadia Utami' },
    { id: 'recruit_email', category: '02 • KONTAK', title: 'Email aktif Anda', subtitle: 'Digunakan untuk undangan interview dan status seleksi.', type: 'text', placeholder: 'nama@email.com', defaultValue: 'nadia@email.com' },
    { id: 'recruit_wa', category: '02 • KONTAK', title: 'Nomor WhatsApp aktif Anda', subtitle: 'Tim HR akan mengabari jadwal interview via WhatsApp.', type: 'tel', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-3456-7890' },
    { id: 'recruit_domisili', category: '03 • LOKASI', title: 'Domisili / lokasi kerja Anda', subtitle: `Sesuai requirement HR: ${r.location}.`, type: 'text', placeholder: 'Kota, provinsi', defaultValue: r.location },
    { id: 'recruit_experience', category: '04 • PENGALAMAN', title: `Pengalaman kerja Anda (minimal ${r.minYears} tahun)`, subtitle: 'Ringkas pengalaman relevan Anda.', type: 'textarea', placeholder: 'Contoh: 6 tahun sebagai Fullstack Engineer', defaultValue: `${r.minYears}+ tahun pengalaman relevan` },
    { id: 'recruit_education', category: '05 • PENDIDIKAN', title: 'Pendidikan / sertifikasi / portofolio Anda', subtitle: `Sesuai requirement HR: ${r.education}.`, type: 'text', placeholder: 'S1, sertifikasi, atau link portofolio', defaultValue: r.education },
    { id: 'recruit_skills', category: '06 • SKILL & TOOLS', title: 'Skill / tools utama Anda', subtitle: `Sesuai requirement HR: ${r.skills}.`, type: 'textarea', placeholder: 'Pisahkan dengan koma', defaultValue: r.skills },
    { id: 'recruit_salary', category: '07 • KOMPENSASI', title: 'Ekspektasi gaji Anda', subtitle: `Rentang HR: ${r.salary}.`, type: 'text', placeholder: 'Contoh: Rp25 juta', defaultValue: r.salary },
    { id: 'recruit_notice', category: '08 • KESIAPAN', title: 'Notice period / kesiapan bergabung', subtitle: `Sesuai requirement HR: ${r.noticePeriod}.`, type: 'text', placeholder: 'Contoh: 30 hari', defaultValue: r.noticePeriod },
    { id: 'recruit_screening', category: '09 • PERTANYAAN PENYARING', title: 'Pertanyaan penyaring HR', subtitle: r.screening, type: 'textarea', placeholder: 'Tulis jawaban ringkas', defaultValue: '' },
    { id: 'recruit_cv', category: '10 • DOKUMEN', title: 'Unggah CV PDF Anda', subtitle: 'PDF akan dibaca untuk auto-fill dan indikator kecocokan.', type: 'file', placeholder: 'https://drive.google.com/...' }
  ],
  en: (r) => [
    { id: 'recruit_name', category: '01 • CANDIDATE IDENTITY', title: 'Your full name as shown on your CV', subtitle: 'Enter your official name exactly as written in your documents.', type: 'text', placeholder: 'Full name', defaultValue: 'Nadia Utami' },
    { id: 'recruit_email', category: '02 • CONTACT', title: 'Your active email address', subtitle: 'Used for interview invitations and selection status updates.', type: 'text', placeholder: 'name@email.com', defaultValue: 'nadia@email.com' },
    { id: 'recruit_wa', category: '02 • CONTACT', title: 'Your active WhatsApp number', subtitle: 'The HR team will contact you about interviews via WhatsApp.', type: 'tel', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-3456-7890' },
    { id: 'recruit_domisili', category: '03 • LOCATION', title: 'Your current location / work location', subtitle: `HR requirement: ${r.location}.`, type: 'text', placeholder: 'City, province', defaultValue: r.location },
    { id: 'recruit_experience', category: '04 • EXPERIENCE', title: `Your work experience (minimum ${r.minYears} years)`, subtitle: 'Summarize your most relevant experience.', type: 'textarea', placeholder: 'Example: 6 years as a Fullstack Engineer', defaultValue: `${r.minYears}+ years of relevant experience` },
    { id: 'recruit_education', category: '05 • EDUCATION', title: 'Education / certification / portfolio', subtitle: `HR requirement: ${r.education}.`, type: 'text', placeholder: 'Degree, certification, or portfolio link', defaultValue: r.education },
    { id: 'recruit_skills', category: '06 • SKILLS & TOOLS', title: 'Your main skills / tools', subtitle: `HR requirement: ${r.skills}.`, type: 'textarea', placeholder: 'Separate with commas', defaultValue: r.skills },
    { id: 'recruit_salary', category: '07 • COMPENSATION', title: 'Your salary expectation', subtitle: `HR range: ${r.salary}.`, type: 'text', placeholder: 'Example: IDR 25 million', defaultValue: r.salary },
    { id: 'recruit_notice', category: '08 • AVAILABILITY', title: 'Notice period / joining availability', subtitle: `HR requirement: ${r.noticePeriod}.`, type: 'text', placeholder: 'Example: 30 days', defaultValue: r.noticePeriod },
    { id: 'recruit_screening', category: '09 • SCREENING QUESTION', title: 'HR screening question', subtitle: r.screening, type: 'textarea', placeholder: 'Write a concise answer', defaultValue: '' },
    { id: 'recruit_cv', category: '10 • DOCUMENT', title: 'Upload your PDF CV', subtitle: 'The PDF is read for autofill and a concise match indicator.', type: 'file', placeholder: 'https://drive.google.com/...' }
  ],
  zh: (r) => [
    { id: 'recruit_name', category: '01 • 候选人信息', title: '请填写简历上的全名', subtitle: '请按证件上的正式姓名填写。', type: 'text', placeholder: '全名', defaultValue: 'Nadia Utami' },
    { id: 'recruit_email', category: '02 • 联系方式', title: '您的常用邮箱', subtitle: '用于发送面试邀请和筛选状态通知。', type: 'text', placeholder: 'name@email.com', defaultValue: 'nadia@email.com' },
    { id: 'recruit_wa', category: '02 • 联系方式', title: '您的常用 WhatsApp 号码', subtitle: 'HR 团队会通过 WhatsApp 通知面试安排。', type: 'tel', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-3456-7890' },
    { id: 'recruit_domisili', category: '03 • 所在地', title: '您的现居地 / 工作地', subtitle: `HR 要求：${r.location}。`, type: 'text', placeholder: '城市、省份', defaultValue: r.location },
    { id: 'recruit_experience', category: '04 • 工作经验', title: `您的工作经验（至少 ${r.minYears} 年）`, subtitle: '请简要说明最相关的工作经历。', type: 'textarea', placeholder: '示例：6 年全栈工程师经验', defaultValue: `${r.minYears}+ 年相关经验` },
    { id: 'recruit_education', category: '05 • 教育背景', title: '您的学历 / 证书 / 作品集', subtitle: `HR 要求：${r.education}。`, type: 'text', placeholder: '学历、证书或作品集链接', defaultValue: r.education },
    { id: 'recruit_skills', category: '06 • 技能与工具', title: '您的主要技能 / 工具', subtitle: `HR 要求：${r.skills}。`, type: 'textarea', placeholder: '请用逗号分隔', defaultValue: r.skills },
    { id: 'recruit_salary', category: '07 • 薪资期望', title: '您的薪资期望', subtitle: `HR 范围：${r.salary}。`, type: 'text', placeholder: '示例：2500万印尼盾', defaultValue: r.salary },
    { id: 'recruit_notice', category: '08 • 到岗时间', title: '通知期 / 到岗准备情况', subtitle: `HR 要求：${r.noticePeriod}。`, type: 'text', placeholder: '示例：30 天', defaultValue: r.noticePeriod },
    { id: 'recruit_screening', category: '09 • 筛选问题', title: 'HR 筛选问题', subtitle: r.screening, type: 'textarea', placeholder: '请简要作答', defaultValue: '' },
    { id: 'recruit_cv', category: '10 • 文档', title: '上传 PDF 简历', subtitle: '系统会读取 PDF 以自动填写信息并给出匹配指标。', type: 'file', placeholder: 'https://drive.google.com/...' }
  ]
};

const PRESET_LOCALE = {
  en: {
    recruit: {
      companyName: 'PT Digital Nusantara Indonesia',
      subText: 'Official Career Portal • Technology Talent 2026 • Securely connected to Google Sheet',
      categoryTag: 'OFFICIAL CAREER PORTAL',
      categoryLabel: 'Recruitment & Job Application',
      categoryDesc: 'Candidate application, portfolio, and interview schedule.',
      slug: 'digital-recruitment-2026',
      questions: [
        { category: '01 • CANDIDATE IDENTITY', title: 'What is your full name?', subtitle: 'Enter your official name as shown on your resume or ID.', placeholder: 'Type your full name here...', defaultValue: 'Nadia Utami' },
        { category: '02 • DIRECT CONTACT', title: 'What is your active WhatsApp number?', subtitle: 'Our People & Culture team will contact you about the interview schedule via WhatsApp.', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-3456-7890' },
        { category: '03 • ROLE PREFERENCE', title: 'Choose the specialization you want to apply for:', subtitle: 'Pick the role most relevant to your strongest experience.', options: [
          { hotkey: 'A', icon: '💻', title: 'Lead Fullstack Developer', desc: 'React, Node.js, Go & microservices architecture' },
          { hotkey: 'B', icon: '👩‍💼', title: 'HR Talent Acquisition Lead', desc: 'End-to-end tech recruitment, KPIs & employer branding' },
          { hotkey: 'C', icon: '🚀', title: 'Growth Marketing Lead', desc: 'Performance ads, ROAS analytics & user acquisition' }
        ], defaultIndex: 0 },
        { category: '04 • JOINING AVAILABILITY', title: 'When can you start?', subtitle: 'Enter your first working day or the date you can join the team.', defaultValue: '2026-12-01' },
        { category: '05 • SUPPORTING DOCUMENT', title: 'Upload your CV or paste a document link:', subtitle: 'Choose a file from your device or provide a Google Drive/portfolio link.', placeholder: 'https://drive.google.com/...' }
      ]
    },
    event: {
      companyName: 'Jakarta Sunset 10K Event 2026',
      subText: 'Official Event Registration Portal • Connected to the committee Google Sheet',
      categoryTag: 'EVENT REGISTRATION 2026',
      categoryLabel: 'Event & Race Registration',
      categoryDesc: 'Runs, seminars, community events, and digital tickets.',
      slug: 'jakarta-sunset-run-2026',
      questions: [
        { category: '01 • PARTICIPANT DETAILS', title: 'What name should appear on your certificate?', subtitle: 'This name will be printed on your bib and finisher medal.', placeholder: 'Participant full name...', defaultValue: 'Budi Pratama' },
        { category: '02 • E-TICKET CONFIRMATION', title: 'WhatsApp number for event ticket delivery:', subtitle: 'The QR code for race pack collection will be sent to this number.', placeholder: '0813-xxxx-xxxx', defaultValue: '0813-9988-7766' },
        { category: '03 • CHALLENGE CATEGORY', title: 'Choose your event distance:', subtitle: 'All participants finishing before cut-off time receive an official medal.', options: [
          { hotkey: 'A', icon: '👟', title: '5K Fun Run', desc: 'Relaxed, beginner-friendly route (cut-off: 60 minutes)' },
          { hotkey: 'B', icon: '🏅', title: '10K Challenge Run', desc: 'Official competitive route (cut-off: 120 minutes)' },
          { hotkey: 'C', icon: '⚡', title: '21K Half Marathon', desc: 'Endurance challenge for trained participants (cut-off: 3 hours)' }
        ], defaultIndex: 1 },
        { category: '04 • DATE OF BIRTH', title: 'What is your date of birth?', subtitle: 'Used for age-category validation and certificate issuance.', defaultValue: '1994-08-15' },
        { category: '05 • RUNNING EXPERIENCE', title: 'How often do you run? (1–5)', subtitle: '1 = beginner, 5 = running more than three times a week.', defaultValue: 3 }
      ]
    },
    order: {
      companyName: 'Creative Studio Pre-Order & Orders',
      subText: 'Order & Pre-Order Portal • Recorded directly in Google Sheet',
      categoryTag: 'PRE-ORDER & ORDER',
      categoryLabel: 'Orders & Pre-Orders',
      categoryDesc: 'Product orders, pre-orders, bookings, and payment confirmation.',
      slug: 'orders-and-preorders',
      questions: [
        { category: '01 • CUSTOMER IDENTITY', title: 'What is your name or business name?', subtitle: 'This name is used for order identity and the invoice.', placeholder: 'Example: Nadia Creative Studio', defaultValue: 'Nadia Creative Studio' },
        { category: '02 • ORDER TYPE', title: 'Choose the product or service you want to order:', subtitle: 'Select one main order that best matches your need.', options: [
          { hotkey: 'A', icon: '🎨', title: 'Brand & Logo Design', desc: 'Identity kit, brand guide, and basic assets' },
          { hotkey: 'B', icon: '📦', title: 'Product Packaging', desc: 'Box design, labels, and print-ready mockups' },
          { hotkey: 'C', icon: '📱', title: 'Digital Content & Campaign', desc: 'Instagram feed, banners, and ad materials' }
        ], defaultIndex: 0 },
        { category: '03 • ORDER DETAILS', title: 'Tell us your order details:', subtitle: 'Explain the quantity, size, preferences, and special notes for the seller.', placeholder: 'Example: 50 coffee packaging boxes, matte finish, logo sticker on the front...', defaultValue: 'I want eco-friendly packaging for a specialty coffee product with a modern, warm feel.' },
        { category: '04 • DELIVERY TARGET', title: 'What is your target delivery date?', subtitle: 'We will adjust the production schedule based on this date.', defaultValue: '2026-12-15' },
        { category: '05 • ORDER REFERENCE', title: 'Upload a reference or paste a document link:', subtitle: 'You may use an image/PDF file or a Drive/Figma link you have prepared.', placeholder: 'https://drive.google.com/...' }
      ]
    },
    class: {
      companyName: 'Nusantara Creative Academy',
      subText: 'Class & Training Registration • Connected to Google Sheet',
      categoryTag: 'CLASS REGISTRATION 2026',
      categoryLabel: 'Class / Course Registration',
      categoryDesc: 'Class, training, workshop, and learning program registration.',
      slug: 'creative-class-registration-2026',
      questions: [
        { category: '01 • PARTICIPANT DETAILS', title: 'What is the participant’s full name?', subtitle: 'This name will appear on the certificate and class roster.', placeholder: 'Participant full name...', defaultValue: 'Raka Pratama' },
        { category: '02 • PARTICIPANT CONTACT', title: 'WhatsApp number for class schedule updates:', subtitle: 'Class announcements and materials will be sent to this number.', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-2222-3333' },
        { category: '03 • PROGRAM PREFERENCE', title: 'Choose the learning program you want to join:', subtitle: 'Each program has a different mentor, modules, and case studies.', options: [
          { hotkey: 'A', icon: '🎨', title: 'UI/UX Design Fundamentals', desc: 'Research, wireframes, prototypes, and visual design' },
          { hotkey: 'B', icon: '💻', title: 'Fullstack Development', desc: 'Frontend, backend, database, and deployment' },
          { hotkey: 'C', icon: '📈', title: 'Digital Marketing', desc: 'SEO, paid ads, analytics, and content' }
        ], defaultIndex: 0 },
        { category: '04 • START LEARNING', title: 'When do you want to start learning?', subtitle: 'We will place you in the nearest cohort.', defaultValue: '2026-12-05' },
        { category: '05 • LEARNING GOAL', title: 'Briefly describe your learning goal:', subtitle: 'Tell us what you want to achieve after joining this program.', placeholder: 'Example: build a UI/UX portfolio and be ready to apply for jobs...', defaultValue: 'I want to master digital product design and build a professional portfolio.' }
      ]
    },
    survey: {
      companyName: 'Customer Research & Experience Team',
      subText: 'Short Survey & Customer Feedback • Data goes to Google Sheet',
      categoryTag: 'CUSTOMER INSIGHT SURVEY',
      categoryLabel: 'Survey & Customer Feedback',
      categoryDesc: 'Feedback, reviews, short surveys, and satisfaction measurement.',
      slug: 'customer-feedback-survey',
      questions: [
        { category: '01 • RESPONDENT IDENTITY', title: 'Respondent name (may be anonymous):', subtitle: 'Use a nickname or leave it blank if you prefer to stay anonymous.', placeholder: 'Example: Loyal Customer', defaultValue: 'Loyal Customer' },
        { category: '02 • INFORMATION SOURCE', title: 'Where did you first hear about us?', subtitle: 'Pick the one source you remember most.', options: [
          { hotkey: 'A', icon: '📱', title: 'Social Media', desc: 'Instagram, TikTok, or similar platforms' },
          { hotkey: 'B', icon: '🤝', title: 'Friend Recommendation', desc: 'Stories from friends, family, or colleagues' },
          { hotkey: 'C', icon: '📧', title: 'Ad / Email', desc: 'Digital ads, newsletters, or email promotions' },
          { hotkey: 'D', icon: '✨', title: 'Other', desc: 'Any other source not listed here' }
        ], defaultIndex: 0 },
        { category: '03 • RATING', title: 'How satisfied are you with our service? (1–5)', subtitle: '1 = unsatisfied, 5 = very satisfied.', defaultValue: 4 },
        { category: '04 • VISIT DATE', title: 'When did you last use our service?', subtitle: 'This helps us link feedback to a specific period.', defaultValue: '2026-11-20' },
        { category: '05 • OPEN FEEDBACK', title: 'What could we improve?', subtitle: 'Describe your experience in your own words.', placeholder: 'Write your feedback, suggestions, or appreciation here...', defaultValue: 'Friendly service and a fast process. More menu variations would be even better.' }
      ]
    },
    brief: {
      companyName: 'Creative Brief & Services Studio',
      subText: 'Project Brief & Service Request Portal • Connected to Google Sheet',
      categoryTag: 'CLIENT BRIEF PORTAL',
      categoryLabel: 'Client Brief & Service Request',
      categoryDesc: 'Project briefs, service requests, and client order targets.',
      slug: 'client-brief-services',
      questions: [
        { category: '01 • CLIENT CONTACT', title: 'What is your name?', subtitle: 'This name is used for project follow-up communication.', placeholder: 'Full name or preferred name...', defaultValue: 'Dimas Creative' },
        { category: '02 • BUSINESS NAME', title: 'What is your business or brand name?', subtitle: 'Enter your brand, business, or organization name.', placeholder: 'Example: Kopi Senja Roastery', defaultValue: 'Studio Dimas' },
        { category: '03 • SERVICE TYPE', title: 'Choose the service you need:', subtitle: 'Select one main service as the focus of the work.', options: [
          { hotkey: 'A', icon: '🎨', title: 'Brand & Logo', desc: 'Visual identity, brand guide, and basic assets' },
          { hotkey: 'B', icon: '🌐', title: 'Website & Landing Page', desc: 'Responsive web design and development' },
          { hotkey: 'C', icon: '📣', title: 'Content & Campaign', desc: 'Promotional materials, feeds, and digital ads' }
        ], defaultIndex: 0 },
        { category: '04 • DELIVERY TARGET', title: 'What is your project delivery target?', subtitle: 'We will adjust estimates and the production schedule.', defaultValue: '2026-12-20' },
        { category: '05 • BRIEF DETAILS', title: 'Describe your project needs:', subtitle: 'Explain the goal, audience, style, and things to avoid.', placeholder: 'Example: a minimalist brand identity for a local coffee product...', defaultValue: 'I need a minimalist brand identity for a local coffee product with a warm, modern feel.' },
        { category: '06 • BRIEF ATTACHMENT', title: 'Upload an attachment or paste a reference link:', subtitle: 'Use a PDF/image file or a Drive/Figma link containing references.', placeholder: 'https://drive.google.com/...' }
      ]
    },
    custom: {
      companyName: 'Custom Form',
      subText: 'Set your own title, purpose, and form details • Data goes straight to Google Sheet',
      categoryTag: 'CUSTOM FORM BUILDER',
      categoryLabel: 'Custom',
      categoryDesc: 'Define your own form title, purpose, and questions.',
      slug: 'custom-form',
      questions: [
        { category: '01 • FORM TITLE', title: 'What is your custom form title?', subtitle: 'This title becomes the main identity of your form.', placeholder: 'Example: Community Registration Form', defaultValue: 'My Custom Form' },
        { category: '02 • FORM PURPOSE', title: 'What is the main purpose of this form?', subtitle: 'Briefly explain why it exists and who should fill it in.', placeholder: 'Example: collecting participants and community feedback...', defaultValue: 'Collecting participants and feedback from my audience.' },
        { category: '03 • COORDINATOR CONTACT', title: 'Contact number that can be reached:', subtitle: 'Used only as supporting information in the data summary.', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-0000-0000' },
        { category: '04 • USAGE DATE', title: 'When is this form needed?', subtitle: 'Set the start date or usage deadline for the form.', defaultValue: '2026-12-15' },
        { category: '05 • ADDITIONAL DETAILS', title: 'Add any other important details:', subtitle: 'Include special instructions, criteria, or notes for respondents.', placeholder: 'Example: describe your experience in two paragraphs...', defaultValue: 'Fill this with instructions specific to your needs.' }
      ]
    }
  },
  zh: {
    recruit: {
      companyName: 'PT Digital Nusantara Indonesia',
      subText: '官方招聘门户 • 2026 科技人才 • 安全连接至 Google Sheet',
      categoryTag: '官方招聘门户',
      categoryLabel: '招聘与求职申请',
      categoryDesc: '候选人申请、作品集与面试安排。',
      slug: '数字招聘-2026',
      questions: [
        { category: '01 • 候选人信息', title: '请问您的全名是？', subtitle: '请输入简历或身份证件上的正式姓名。', placeholder: '请在此输入全名...', defaultValue: 'Nadia Utami' },
        { category: '02 • 直接联系方式', title: '您的常用 WhatsApp 号码是？', subtitle: '我们的文化与人才团队会通过 WhatsApp 通知面试安排。', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-3456-7890' },
        { category: '03 • 职位意向', title: '请选择您想申请的专业方向：', subtitle: '请选择与您最强经历最相关的职位。', options: [
          { hotkey: 'A', icon: '💻', title: '全栈开发负责人', desc: 'React、Node.js、Go 与微服务架构' },
          { hotkey: 'B', icon: '👩‍💼', title: '人力资源招聘负责人', desc: '全流程科技招聘、KPI 与雇主品牌' },
          { hotkey: 'C', icon: '🚀', title: '增长营销负责人', desc: '效果广告、ROAS 分析与用户增长' }
        ], defaultIndex: 0 },
        { category: '04 • 到岗时间', title: '您什么时候可以开始工作？', subtitle: '请输入入职日期或可以加入团队的时间。', defaultValue: '2026-12-01' },
        { category: '05 • 支持文件', title: '上传简历或粘贴文档链接：', subtitle: '从设备选择文件，或提供 Google Drive/作品集链接。', placeholder: 'https://drive.google.com/...' }
      ]
    },
    event: {
      companyName: '2026 雅加达日落 10K 活动',
      subText: '官方活动报名门户 • 连接组委会 Google Sheet',
      categoryTag: '2026 活动报名',
      categoryLabel: '活动与赛事报名',
      categoryDesc: '跑步、研讨会、社群活动与电子门票。',
      slug: '雅加达日落跑-2026',
      questions: [
        { category: '01 • 参与者信息', title: '证书上应显示什么姓名？', subtitle: '该姓名将印在号码布和完赛奖牌上。', placeholder: '参与者全名...', defaultValue: 'Budi Pratama' },
        { category: '02 • 电子票确认', title: '用于接收活动门票的 WhatsApp 号码：', subtitle: '领取比赛包的二维码将发送至该号码。', placeholder: '0813-xxxx-xxxx', defaultValue: '0813-9988-7766' },
        { category: '03 • 挑战组别', title: '请选择活动距离：', subtitle: '在截止时间前完赛的选手均可获得官方奖牌。', options: [
          { hotkey: 'A', icon: '👟', title: '5K 欢乐跑', desc: '轻松、新手友好路线（截止：60 分钟）' },
          { hotkey: 'B', icon: '🏅', title: '10K 挑战跑', desc: '正式竞技路线（截止：120 分钟）' },
          { hotkey: 'C', icon: '⚡', title: '21K 半程马拉松', desc: '适合训练选手的耐力挑战（截止：3 小时）' }
        ], defaultIndex: 1 },
        { category: '04 • 出生日期', title: '您的出生日期是？', subtitle: '用于年龄组验证和证书发放。', defaultValue: '1994-08-15' },
        { category: '05 • 跑步经验', title: '您多久跑一次步？（1–5）', subtitle: '1 = 新手，5 = 每周跑步超过三次。', defaultValue: 3 }
      ]
    },
    order: {
      companyName: '创意工作室预售与订单',
      subText: '订单与预售门户 • 直接记录在 Google Sheet',
      categoryTag: '预售与订单',
      categoryLabel: '订单与预售',
      categoryDesc: '产品订单、预售、预约与付款确认。',
      slug: '订单与预售',
      questions: [
        { category: '01 • 订购人信息', title: '您的姓名或公司名称是？', subtitle: '该名称用于订单身份和发票。', placeholder: '示例：Nadia Creative Studio', defaultValue: 'Nadia Creative Studio' },
        { category: '02 • 订单类型', title: '请选择您想订购的产品或服务：', subtitle: '请选择最符合您需求的主要订单。', options: [
          { hotkey: 'A', icon: '🎨', title: '品牌与标志设计', desc: '视觉识别包、品牌指南与基础素材' },
          { hotkey: 'B', icon: '📦', title: '产品包装', desc: '包装盒、标签与可印刷样机' },
          { hotkey: 'C', icon: '📱', title: '数字内容与 campaign', desc: 'Instagram 图文、横幅与广告素材' }
        ], defaultIndex: 0 },
        { category: '03 • 订单详情', title: '请说明您的订单详情：', subtitle: '请说明数量、尺寸、偏好以及给卖家的特别备注。', placeholder: '示例：50 个咖啡包装盒，哑光工艺，正面有标志贴纸...', defaultValue: '我希望为精品咖啡产品制作环保包装，呈现现代而温暖的感觉。' },
        { category: '04 • 交付目标', title: '您的目标交付日期是？', subtitle: '我们会根据此日期调整生产安排。', defaultValue: '2026-12-15' },
        { category: '05 • 订单参考', title: '上传参考文件或粘贴文档链接：', subtitle: '可以使用图片/PDF 文件，或已准备好的 Drive/Figma 链接。', placeholder: 'https://drive.google.com/...' }
      ]
    },
    class: {
      companyName: '努山塔拉创意学院',
      subText: '课程与培训报名 • 连接 Google Sheet',
      categoryTag: '2026 课程报名',
      categoryLabel: '课程 / 培训班报名',
      categoryDesc: '课程、培训、工作坊与学习计划报名。',
      slug: '创意课程报名-2026',
      questions: [
        { category: '01 • 参与者信息', title: '学员全名是？', subtitle: '该姓名将出现在证书和班级名单上。', placeholder: '参与者全名...', defaultValue: 'Raka Pratama' },
        { category: '02 • 参与者联系方式', title: '用于接收课程安排通知的 WhatsApp 号码：', subtitle: '课程通知和资料将发送至该号码。', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-2222-3333' },
        { category: '03 • 课程意向', title: '请选择您想参加的学习项目：', subtitle: '每个项目的导师、模块和案例都不同。', options: [
          { hotkey: 'A', icon: '🎨', title: 'UI/UX 设计基础', desc: '调研、线框图、原型与视觉设计' },
          { hotkey: 'B', icon: '💻', title: '全栈开发', desc: '前端、后端、数据库与部署' },
          { hotkey: 'C', icon: '📈', title: '数字营销', desc: 'SEO、付费广告、数据分析与内容' }
        ], defaultIndex: 0 },
        { category: '04 • 开始学习', title: '您想什么时候开始学习？', subtitle: '我们会将您安排到最近的班级。', defaultValue: '2026-12-05' },
        { category: '05 • 学习目标', title: '请简要说明您的学习目标：', subtitle: '告诉我们您完成该项目后想达成什么。', placeholder: '示例：建立 UI/UX 作品集并为求职做好准备...', defaultValue: '我想掌握数字产品设计并建立专业作品集。' }
      ]
    },
    survey: {
      companyName: '客户研究与体验团队',
      subText: '简短问卷与客户反馈 • 数据进入 Google Sheet',
      categoryTag: '客户洞察问卷',
      categoryLabel: '问卷与客户反馈',
      categoryDesc: '反馈、评价、简短问卷与满意度测量。',
      slug: '客户反馈问卷',
      questions: [
        { category: '01 • 受访者信息', title: '受访者姓名（可匿名）：', subtitle: '可以填写昵称；如需匿名请留空。', placeholder: '示例：忠实客户', defaultValue: '忠实客户' },
        { category: '02 • 信息来源', title: '您第一次从哪里了解到我们？', subtitle: '请选择您印象最深的一个来源。', options: [
          { hotkey: 'A', icon: '📱', title: '社交媒体', desc: 'Instagram、TikTok 或类似平台' },
          { hotkey: 'B', icon: '🤝', title: '朋友推荐', desc: '来自朋友、家人或同事的分享' },
          { hotkey: 'C', icon: '📧', title: '广告 / 邮件', desc: '数字广告、新闻邮件或邮件促销' },
          { hotkey: 'D', icon: '✨', title: '其他', desc: '此处未列出的其他来源' }
        ], defaultIndex: 0 },
        { category: '03 • 评分', title: '您对我们的服务满意吗？（1–5）', subtitle: '1 = 不满意，5 = 非常满意。', defaultValue: 4 },
        { category: '04 • 访问日期', title: '您最近一次使用我们的服务是什么时候？', subtitle: '有助于我们将反馈关联到特定时间段。', defaultValue: '2026-11-20' },
        { category: '05 • 开放反馈', title: '我们可以改进什么？', subtitle: '请用您自己的语言描述体验。', placeholder: '请在此写下反馈、建议或肯定...', defaultValue: '服务友好、流程快速。如果菜单选择更多就更好了。' }
      ]
    },
    brief: {
      companyName: '创意 Brief 与服务工作室',
      subText: '项目 Brief 与服务请求门户 • 连接 Google Sheet',
      categoryTag: '客户 Brief 门户',
      categoryLabel: '客户 Brief 与服务请求',
      categoryDesc: '项目 brief、服务请求与客户订单目标。',
      slug: '客户-brief-服务',
      questions: [
        { category: '01 • 客户联系人', title: '请问您的姓名是？', subtitle: '该姓名用于项目后续沟通。', placeholder: '全名或称呼...', defaultValue: 'Dimas Creative' },
        { category: '02 • 企业名称', title: '您的企业或品牌名称是？', subtitle: '请填写品牌、企业或组织名称。', placeholder: '示例：Kopi Senja Roastery', defaultValue: 'Studio Dimas' },
        { category: '03 • 服务类型', title: '请选择您需要的服务：', subtitle: '请选择一项主要服务作为工作重点。', options: [
          { hotkey: 'A', icon: '🎨', title: '品牌与标志', desc: '视觉识别、品牌指南与基础素材' },
          { hotkey: 'B', icon: '🌐', title: '网站与落地页', desc: '响应式网站设计与开发' },
          { hotkey: 'C', icon: '📣', title: '内容与 campaign', desc: '推广素材、图文与数字广告' }
        ], defaultIndex: 0 },
        { category: '04 • 交付目标', title: '项目的交付目标是？', subtitle: '我们会据此调整预估和生产安排。', defaultValue: '2026-12-20' },
        { category: '05 • Brief 详情', title: '请描述您的项目需求：', subtitle: '请说明目标、受众、风格以及需要避免的事项。', placeholder: '示例：为本地咖啡产品打造极简品牌形象...', defaultValue: '我需要为本地咖啡产品打造极简品牌形象，呈现温暖而现代的感觉。' },
        { category: '06 • Brief 附件', title: '上传附件或粘贴参考链接：', subtitle: '可使用 PDF/图片文件或包含参考内容的 Drive/Figma 链接。', placeholder: 'https://drive.google.com/...' }
      ]
    },
    custom: {
      companyName: '自选表单',
      subText: '自行设置标题、目的和表单细节 • 数据直接进入 Google Sheet',
      categoryTag: '自定义表单构建器',
      categoryLabel: '自选',
      categoryDesc: '自定义表单标题、目的和问题。',
      slug: '自定义表单',
      questions: [
        { category: '01 • 表单标题', title: '您的自定义表单标题是什么？', subtitle: '该标题将成为表单的主要标识。', placeholder: '示例：社群报名表', defaultValue: '我的自定义表单' },
        { category: '02 • 表单目的', title: '这个表单的主要目的是什么？', subtitle: '简要说明为什么创建它以及谁应填写。', placeholder: '示例：收集参与者和社群反馈...', defaultValue: '收集参与者和受众反馈。' },
        { category: '03 • 协调人联系方式', title: '可联系的电话号码：', subtitle: '仅作为数据摘要中的辅助信息。', placeholder: '0812-xxxx-xxxx', defaultValue: '0812-0000-0000' },
        { category: '04 • 使用时间', title: '什么时候需要这个表单？', subtitle: '设置表单的开始日期或使用截止时间。', defaultValue: '2026-12-15' },
        { category: '05 • 其他详情', title: '添加其他重要细节：', subtitle: '填写给受访者的特别说明、标准或备注。', placeholder: '示例：请用两段话描述您的经历...', defaultValue: '请根据您的具体需求填写说明。' }
      ]
    }
  }
};

const MAIN_SECTION_IDS = ['top', 'kategori', 'harga', 'faq'];
const INFO_PANEL_IDS = {
  security: 'panel-keamanan',
  how: 'panel-cara',
  demo: 'panel-demo',
  custom: 'panel-custom',
  hrBuilder: 'panel-hr-builder'
};

const ROLE_KEYWORDS = {
  A: ['react', 'node', 'go', 'fullstack', 'frontend', 'backend', 'microservice'],
  B: ['recruitment', 'hr', 'talent', 'people', 'employer', 'kpi', 'culture'],
  C: ['growth', 'marketing', 'ads', 'roas', 'analytics', 'acquisition', 'campaign']
};

const I18N = {
  id: {
    'meta.title': 'iziForm — Form SaaS Multibahasa',
    'brand.tier': 'SaaS Studio',
    'nav.aria': 'Navigasi utama',
    'nav.categories': 'Kategori',
    'nav.security': 'Keamanan',
    'nav.how': 'Cara Pakai',
    'nav.demo': 'Demo',
    'nav.pricing': 'Harga',
    'nav.faq': 'FAQ',
    'panel.back': 'Kembali ke Kategori',
    'panel.demoDesc': 'Pilih alur interaktif di bawah untuk mencoba form dengan data contoh tanpa mengubah pengaturan Sheet Anda.',
    'header.settings': 'Pengaturan Sheet',
    'common.copy': 'Salin',
    'common.copyLink': 'Salin Link',
    'common.close': 'Tutup',
    'common.chooseFile': 'Choose File',
    'lang.label': 'Bahasa',
    'lang.aria': 'Pilih bahasa tampilan',
    'controls.display': 'Tampilan',
    'controls.displayAria': 'Buka pengaturan tampilan',
    'controls.theme': 'Aksen UI',
    'controls.font': 'Font',
    'controls.fontAria': 'Pilih font tampilan',
    'theme.silicon': 'Silicon Clean',
    'theme.midnight': 'Midnight Gold',
    'theme.cyber': 'Cyber Neo',
    'theme.terracotta': 'Terracotta',
    'font.jakarta': 'Jakarta Sans (Modern)',
    'font.outfit': 'Outfit (Tech Ceria)',
    'font.space': 'Space Grotesk (Trendy)',
    'font.playfair': 'Playfair (Mewah & Serif)',
    'hero.eyebrow': 'Form berkelas • Data otomatis • Sheet milik Anda',
    'hero.title': 'Mau bikin form untuk apa hari ini?',
    'hero.desc': 'Ubah pertanyaan yang kaku menjadi pengalaman form yang mewah dan menyenangkan. Setiap jawaban masuk langsung ke Google Sheet akun Anda sendiri.',
    'hero.choose': 'Pilih Kategori',
    'hero.connect': 'Hubungkan Sheet',
    'hero.proofCategories': '<b>7</b> kategori siap pakai',
    'hero.proofInputs': '<b>7</b> tipe input interaktif',
    'hero.proofThemes': '<b>4</b> tema premium',
    'hero.livePreview': 'LIVE PREVIEW',
    'hero.previewKicker': 'REKRUTMEN & LAMARAN KERJA',
    'hero.previewQuestion': 'Siapa nama lengkap Anda?',
    'hero.previewAnswer': 'Nadia Utami',
    'hero.previewOptionA': '<b>A</b> Lead Fullstack',
    'hero.previewOptionB': '<b>B</b> HR Talent Lead',
    'hero.previewOptionC': '<b>C</b> Growth Lead',
    'hero.previewSaved': 'Tersimpan otomatis',
    'hero.chipInteractive': 'Interaktif',
    'hero.chipSheet': 'Google Sheet',
    'categories.eyebrow': 'Pilih Kategori',
    'categories.title': 'Satu kategori, satu alur form yang utuh.',
    'categories.desc': 'Klik kartu untuk membuka form, atau gunakan Pratinjau Cepat untuk mencoba alurnya dulu. Termasuk kategori Pilihan Sendiri.',
    'categories.preview': 'Pratinjau Cepat',
    'categories.open': 'Buka Form',
    'pricing.startFrom': 'Mulai dari',
    'custom.eyebrow': 'Jalur Custom',
    'custom.title': 'Pilih jalur custom yang paling pas.',
    'custom.desc': 'Custom Sendiri dikerjakan mandiri; Custom Request memakai scope dan estimasi load yang terkunci sejak awal.',
    'custom.options': 'Lihat Opsi Custom',
    'custom.selfLabel': 'Custom Sendiri',
    'custom.selfTitle': 'Dikerjakan mandiri oleh pengguna',
    'custom.selfDesc': 'Pilih level dasar atau kapasitas mandiri yang lebih lengkap tanpa menunggu pengerjaan tim.',
    'custom.free': 'Free (dasar)',
    'custom.selfFreeDesc': 'Struktur field standar, 1 form aktif, dan 50 respon/bulan.',
    'custom.paid': 'Berbayar',
    'custom.selfPaidDesc': 'Field tambahan, kapasitas lebih besar, dan opsi branding mandiri.',
    'custom.requestLabel': 'Custom Request',
    'custom.requestTitle': 'Khusus berbayar dengan scope terkunci sejak awal',
    'custom.requestDesc': 'Cocok saat struktur data atau alur perlu disiapkan tim dengan batas scope yang jelas.',
    'custom.light': 'Ringan',
    'custom.lightDesc': 'Penyesuaian field & struktur kolom Google Sheet terarah.',
    'custom.lightBorder': 'Scope & revisi ringan: 1 putaran terarah.',
    'custom.load': 'Estimasi load',
    'custom.loadLight': '1–3 hari kerja',
    'custom.complex': 'Kompleks',
    'custom.complexDesc': 'Logika/alur form & struktur data lebih mendalam.',
    'custom.complexBorder': 'Scope terkunci di awal & revisi terarah 2 putaran.',
    'custom.loadComplex': '3–5 hari kerja / sesuai slot',
    'custom.bordering': 'Batas ruang lingkup',
    'custom.borderNote': 'Perubahan di luar scope yang disepakati akan masuk penyesuaian terpisah.',
    'custom.startSelf': 'Buka Custom Sendiri',
    'custom.preview': 'Pratinjau Form',
    'hr.builderEyebrow': 'HR Builder',
    'hr.builderTitle': 'Susun requirement, portal kandidat langsung menyesuaikan.',
    'hr.builderDesc': 'Atur detail lowongan dan batas requirement. Sisi B otomatis merefleksikan field, badge, dan pertanyaan penyaring.',
    'hr.builderOption': 'Buka HR Builder',
    'hr.companyName': 'Nama perusahaan',
    'hr.companyLogo': 'Logo / foto perusahaan',
    'hr.logoHint': 'Kosongkan untuk memakai inisial otomatis.',
    'hr.logoClear': 'Hapus Logo',
    'hr.openWorkspace': 'Buka Workspace HR',
    'hr.sideA': 'Sisi A · HR / Builder',
    'hr.sideB': 'Sisi B · Portal Kandidat',
    'hr.companyPresetLabel': 'Preset perusahaan sampel',
    'hr.block.identity': '1. Identitas & Profil Perusahaan',
    'hr.block.overview': '2. Job Overview',
    'hr.block.requirement': '3. Requirement',
    'hr.block.qualification': '4. Qualification',
    'hr.block.screening': '5. Screening Questions & Form Rules',
    'hr.block.benefit': '6. Benefit',
    'hr.block.cardbox': '7. Daftar Cardbox Isian Pelamar',
    'hr.industry': 'Industri / bidang usaha',
    'hr.description': 'Deskripsi singkat perusahaan',
    'hr.website': 'Website resmi',
    'hr.banner': 'Banner header',
    'hr.bannerHint': 'Kosongkan untuk memakai gradasi otomatis.',
    'hr.bannerClear': 'Hapus Banner',
    'hr.roleSummary': 'Ringkasan peran',
    'hr.responsibilities': 'Tanggung jawab utama',
    'hr.jobType': 'Tipe kerja',
    'hr.jobTypeFullTime': 'Full-time',
    'hr.jobTypeContract': 'Contract',
    'hr.jobTypeHybrid': 'Hybrid',
    'hr.jobTypeOnsite': 'On-site',
    'hr.jobTypePartTime': 'Part-time',
    'hr.jobTypeInternship': 'Internship',
    'hr.jobTypeRemote': 'Remote',
    'hr.mustHave': 'Syarat mutlak / wajib',
    'hr.qualification': 'Kualifikasi latar belakang',
    'hr.certification': 'Sertifikasi',
    'hr.plusPoints': 'Nilai plus',
    'hr.cvRequired': 'Wajib unggah CV PDF',
    'hr.matchThreshold': 'Batas kriteria Match Score',
    'hr.uiTemplateLabel': 'Template UI HR',
    'hr.uiPreviewLabel': 'Pratinjau langsung',
    'hr.uiTier': 'Tier',
    'hr.uiTemplate.clean01': 'Netral',
    'hr.uiTemplate.clean02': 'Free 2 — Kertas Simpel',
    'hr.uiTemplate.softDusk': 'Free 3 — Gelap Lembut',
    'hr.uiTemplateSelect': 'Pilih template UI',
    'hr.uiPreviewLarge': 'Preview besar',
    'hr.uiPreviewLargeTitle': 'Pratinjau template UI',
    'hr.uiApplyPortal': 'Terapkan ke Sisi B',
    'hr.uiPreviewTagline': 'Tampilan portal kandidat mengikuti template yang dipilih.',
    'hr.uiTemplate.pro01': 'Pro 1 — Warm Editorial Batik Accent',
    'hr.uiTemplate.pro02': 'Pro 2 — Crisp Studio Frame',
    'hr.uiTemplate.pro03': 'Pro 3 — Soft Executive Heritage',
    'hr.uiTemplate.business01': 'Business 1 — Obsidian Executive',
    'hr.uiTemplate.business02': 'Business 2 — Ivory & Champagne Atelier',
    'hr.uiTemplate.business03': 'Business 3 — Nordic Slate & Cobalt',
    'hr.uiTemplate.business04': 'Business 4 — Deep Forest & Brass Heritage',
    'hr.fontPairLabel': 'Font pairing Sisi B',
    'hr.fontPairTemplate': 'Ikuti template',
    'hr.fontPairEditorial': 'Editorial Serif + Clean Sans',
    'hr.fontPairStudio': 'Studio Grotesk + Sans Tajam',
    'hr.fontPairExecutive': 'Heritage Serif + Sans Rapi',
    'hr.fontPairHeritage': 'Serif Editorial + Soft Sans',
    'hr.fontPairLocked': 'Terkunci pada Free',
    'portal.applyNow': 'Lamar Sekarang',
    'portal.aboutCompany': 'Tentang Perusahaan',
    'portal.jobOverview': 'Ringkasan Posisi',
    'portal.requirements': 'Requirement',
    'portal.qualifications': 'Qualification',
    'portal.industryLabel': 'Industri',
    'portal.websiteLabel': 'Website',
    'portal.responsibilitiesLabel': 'Tanggung jawab',
    'portal.jobTypeLabel': 'Tipe kerja',
    'portal.mustHaveLabel': 'Syarat wajib',
    'portal.educationLabel': 'Pendidikan',
    'portal.certificationLabel': 'Sertifikasi',
    'portal.plusPointsLabel': 'Nilai plus',
    'portal.matchThresholdLabel': 'Minimum Match Score',
    'portal.cvDropTitle': 'Tarik & lepas CV PDF di sini',
    'portal.cvDropHint': 'atau klik untuk memilih berkas • auto-fill otomatis',
    'portal.cvDragActive': 'Lepaskan untuk memindai CV',
    'portal.applicationPanel': 'Formulir Lamaran',
    'portal.companyLabel': 'Perusahaan',
    'portal.companyProfile': 'Profil Perusahaan',
    'portal.positionApplied': 'Posisi yang dilamar',
    'portal.workLocation': 'Lokasi / tipe kerja',
    'hr.templateLabel': 'Template posisi cepat',
    'hr.templateTech': 'Teknologi',
    'hr.templatePeople': 'HR / People',
    'hr.templateGrowth': 'Growth',
    'hr.templateCustom': 'Custom',
    'hr.position': 'Nama posisi',
    'hr.location': 'Domisili / lokasi kerja',
    'hr.minYears': 'Minimal tahun pengalaman',
    'hr.skills': 'Skill / tools utama',
    'hr.education': 'Pendidikan / sertifikasi / portofolio',
    'hr.salary': 'Ekspektasi gaji',
    'hr.notice': 'Notice period',
    'hr.screening': 'Pertanyaan penyaring',
    'hr.previewTitle': 'Pratinjau rekap Google Sheet HR',
    'hr.previewDesc': 'Kolom ini yang masuk ke Sheet HR, termasuk kecocokan dan status seleksi kandidat.',
    'hr.sheetColumns': 'Kolom Sheet',
    'hr.statusLabel': 'Status seleksi',
    'hr.statusNew': 'Baru Masuk',
    'hr.statusShortlist': 'Shortlist',
    'hr.statusInterview': 'Interview',
    'hr.statusAccepted': 'Diterima',
    'hr.statusRejected': 'Ditolak',
    'hr.matchStatus': 'Status kecocokan',
    'hr.openPortal': 'Buka Portal Kandidat',
    'hr.demoPortal': 'Demo Portal Kandidat',
    'hr.priceDesc': 'Akses builder + portal kandidat sekali pakai.',
    'hr.pricingTitle': 'Paket HR & Rekrutmen',
    'hr.freeTry': 'Free tersedia · coba',
    'hr.freeNote': 'Mode dasar gratis tetap tersedia untuk mencoba alur Sisi A ↔ Sisi B.',
    'hr.starterName': 'Paket Mulai',
    'hr.benefit': 'Benefit / tunjangan',
    'hr.benefitPlaceholder': 'Contoh: BPJS, asuransi, flexible working, learning budget',
    'hr.benefitHint': 'Kosongkan untuk menyembunyikan bagian Benefit di portal kandidat.',
    'hr.noBenefit': 'Belum diisi',
    'hr.customFieldsTitle': 'Kolom tambahan pelamar',
    'hr.customFieldsDesc': 'Tambah field di luar standar; tampil otomatis di Sisi B dan rekap Sheet HR.',
    'hr.customFieldNew': 'Kolom baru',
    'hr.customFieldLabel': 'Nama label kolom',
    'hr.customFieldType': 'Jenis input',
    'hr.customFieldTypeText': 'Input teks',
    'hr.customFieldTypeNote': 'Catatan panjang',
    'hr.customFieldRequired': 'Wajib diisi',
    'hr.customFieldAdd': 'Tambah kolom',
    'hr.customFieldRemove': 'Hapus',
    'hr.customFieldsEmpty': 'Belum ada kolom tambahan.',
    'hr.cardboxReset': 'Reset tampilan',
    'hr.cardboxDesc': 'Semua cardbox yang diisi pelamar di Sisi B, lengkap dengan status tampil, wajib/opsional, sumber field, dan hubungannya dengan rekap Google Sheet HR.',
    'hr.cardboxFootnote': 'Perubahan di sini langsung diterapkan ke cardbox Sisi B dan payload Sheet HR. Status wajib CV tetap mengikuti Bagian 5.',
    'hr.cardboxCount': '{visible} dari {total} cardbox tampil di Sisi B',
    'hr.cardboxVisible': 'Tampil di Sisi B',
    'hr.cardboxHidden': 'Disembunyikan',
    'hr.cardboxSourceStandard': 'Field standar HR',
    'hr.cardboxSourceCustom': 'Kolom kustom HR',
    'hr.cardboxSheetIncluded': 'Masuk rekap & Sheet',
    'hr.cardboxSheetExcluded': 'Tidak masuk Sheet',
    'hr.cardboxCvRule': 'diatur di Bagian 5',
    'hr.cardboxShow': 'Tampil',
    'hr.cardboxAtLeastOne': 'Minimal satu cardbox harus tetap tampil di Sisi B.',
    'hr.cardboxResetDone': 'Status cardbox dikembalikan ke pengaturan awal',
    'hr.additionalQuestions': 'INFORMASI TAMBAHAN',
    'hr.customFieldInputPlaceholder': 'Tulis jawaban Anda',
    'hr.customFieldNotePlaceholder': 'Tulis jawaban Anda dengan detail',
    'hr.colBenefit': 'Benefit',
    'hr.colCustom': 'Kolom tambahan',
    'hr.benefitPortal': 'Portal lamaran Sisi B aktif',
    'hr.benefitCv': 'Auto-fill PDF CV + kecocokan Tinggi/Sedang/Rendah',
    'hr.benefitSheet': 'Rekap 1 Google Sheet HR',
    'hr.benefitMultiRole': 'Multi-posisi & tim HR',
    'hr.benefitBusinessTemplate': 'Template portal karier Business',
    'hr.benefitFilter': 'Rekap & penyaringan kandidat lebih leluasa',
    'hr.noCandidate': 'Belum ada kandidat masuk. Kirim link portal untuk mulai menerima lamaran.',
    'hr.colCandidate': 'Kandidat',
    'hr.colMatch': 'Kecocokan',
    'hr.colSelection': 'Seleksi',
    'portal.eyebrow': 'Portal Kandidat',
    'portal.title': 'Lamaran Anda, jelas dan terstruktur.',
    'portal.progress': 'Progres lamaran',
    'portal.cvTitle': 'CV PDF',
    'portal.cvDesc': 'Auto-fill data & indikator kecocokan ringkas.',
    'portal.cvReady': 'CV terbaca',
    'portal.cvEmpty': 'Belum ada CV diunggah',
    'portal.jumpCv': 'Isi CV',
    'portal.requirementLabel': 'Requirement posisi',
    'portal.matchLabel': 'Kecocokan',
    'cv.levelHigh': 'Tinggi',
    'cv.levelMedium': 'Sedang',
    'toast.hrTemplate': 'Template diterapkan',
    'toast.hrStatus': 'Status seleksi diperbarui',
    'showcase.hrBuilderTitle': 'Alur HR Builder',
    'showcase.hrBuilderDesc': 'Requirement HR otomatis tercermin di portal kandidat.',
    'sync.eyebrow': 'Google Account & Sheet Sync',
    'sync.title': 'Data Anda, Sheet Anda sendiri.',
    'sync.desc': 'Hubungkan email Google dan webhook Google Sheet Anda. Setiap submission dikirim sebagai payload JSON langsung ke sheet milik masing-masing pengguna.',
    'sync.googleEmail': 'Email Google',
    'sync.sheetWebhook': 'Sheet Webhook',
    'sync.webhookUrl': 'Google Sheet Webhook URL',
    'sync.gform': 'Link Google Form',
    'sync.gformOptional': 'Link Google Form (opsional)',
    'sync.emailPlaceholder': 'nama@email.com',
    'sync.webhookPlaceholder': 'https://script.google.com/macros/s/.../exec',
    'sync.gformPlaceholder': 'https://docs.google.com/forms/d/e/.../viewform',
    'sync.save': 'Simpan Koneksi',
    'sync.ownership': 'iziForm tidak menyimpan salinan permanen jawaban Anda. Sheet tetap berada di bawah akun dan kontrol Anda sendiri.',
    'sync.note': 'iziForm tidak meminta kata sandi Google. Cukup email untuk identitas akun dan URL webhook Apps Script yang Anda buat sendiri.',
    'sync.notConnected': 'Belum terhubung',
    'sync.googleFilled': 'Email terisi',
    'sync.googleEmpty': 'Belum diisi',
    'sync.sheetFilled': 'Webhook aktif',
    'sync.sheetEmpty': 'Belum diisi',
    'sync.hintReady': 'Status: webhook aktif — submission dikirim ke Sheet Anda.',
    'sync.hintSimulated': 'Status: webhook belum diisi — submission berjalan dalam mode simulasi lokal.',
    'sync.pasteActive': 'Webhook: aktif',
    'sync.pasteSimulated': 'Webhook: belum diisi (mode simulasi)',
    'sync.headerConnected': 'Google & Sheet terhubung',
    'sync.headerEmailOnly': 'Email Google terhubung',
    'sync.headerSheetOnly': 'Sheet terhubung',
    'sync.sendSimulated': 'Webhook belum diisi — data tersimpan sebagai simulasi lokal.',
    'sync.sendOk': 'Data JSON berhasil dikirim ke webhook Google Sheet.',
    'sync.sendHttpError': 'Gagal mengirim ke webhook (HTTP {status}).',
    'sync.sendUnreachable': 'Webhook tidak dapat dijangkau — periksa URL atau CORS.',
    'security.eyebrow': 'Keamanan Data',
    'security.title': 'Data tetap milik Anda, dari awal sampai akhir.',
    'security.desc': 'Alurnya sederhana dan transparan: jawaban dikirim langsung dari browser ke webhook Google Sheet yang Anda pasang sendiri.',
    'security.directTitle': 'Langsung ke Sheet Anda',
    'security.directDesc': 'Payload JSON dikirim ke URL webhook milik Anda. Tidak ada penyimpanan pusat yang tersembunyi di iziForm.',
    'security.controlTitle': 'Akses di tangan Anda',
    'security.controlDesc': 'Anda menentukan siapa yang bisa melihat atau mengubah Sheet, serta kapan akses dicabut.',
    'security.clearTitle': 'Transparan & dapat diaudit',
    'security.clearDesc': 'Setiap submission menampilkan status pengiriman. Jika webhook kosong, iziForm menyebutnya sebagai simulasi lokal.',
    'security.strip': 'Semua kategori memakai prinsip yang sama: email untuk identitas, webhook untuk penyimpanan, kontrol penuh di tangan Anda.',
    'how.eyebrow': 'Cara Penggunaan',
    'how.title': 'Tiga langkah dari ide ke Sheet terisi.',
    'how.desc': 'Tidak perlu coding, tidak perlu desain ulang. Cukup pilih, hubungkan, dan bagikan.',
    'how.step1Title': 'Pilih Kategori',
    'how.step1Desc': 'Pilih rekrutmen, event, pesanan, kelas, survei, brief, atau buat kategori Pilihan Sendiri.',
    'how.step2Title': 'Hubungkan Email & Sheet',
    'how.step2Desc': 'Isi email Google dan webhook Apps Script agar jawaban masuk ke sheet akun Anda.',
    'how.step3Title': 'Bagikan Link & Pantau Sheet',
    'how.step3Desc': 'Salin tautan unik kategori, lalu pantau setiap jawaban langsung di Google Sheet.',
    'showcase.eyebrow': 'Showcase Gallery',
    'showcase.title': 'Lihat hasilnya, bukan cuma bayangkan.',
    'showcase.desc': 'Kartu demo di bawah membuka alur form asli dengan data contoh. Pratinjau Cepat juga tersedia di setiap kartu kategori.',
    'showcase.demoLabel': 'Demo Interaktif',
    'showcase.recruitTitle': 'Alur Lamaran Kerja',
    'showcase.recruitDesc': 'Identitas kandidat, PDF CV, dan indikator kecocokan.',
    'showcase.eventTitle': 'Pendaftaran Event',
    'showcase.eventDesc': 'Pilih jarak lomba dan konfirmasi e-tiket.',
    'showcase.surveyTitle': 'Survei Pelanggan',
    'showcase.surveyDesc': 'Rating, masukan, dan ringkasan otomatis.',
    'pricing.eyebrow': 'Harga',
    'pricing.title': 'Bayar sekali, langsung pakai.',
    'pricing.desc': 'Fokus paket Sekali Pakai (Single Pass). Data tetap masuk ke Google Sheet akun Anda sendiri.',
    'pricing.compactNote': 'Sekali pakai tanpa langganan · Free tetap tersedia',
    'pricing.singlePass': 'Sekali Pakai',
    'pricing.promoBadge': 'PROMO NEW LAUNCHING',
    'pricing.perForm': '/form',
    'pricing.perProject': '/proyek',
    'pricing.freeRibbon': 'PAKET AWAL',
    'pricing.free': 'Free',
    'pricing.freeScope': 'PAKET AWAL',
    'pricing.freeNote': 'Untuk mencoba dan kebutuhan personal.',
    'pricing.freeBenefit1': '1 Form Aktif',
    'pricing.freeBenefit2': '50 respon/bulan',
    'pricing.freeBenefit3': 'Tersambung ke Google Sheet',
    'pricing.freeBenefit4': 'Watermark iziForm',
    'pricing.freeCta': 'Mulai Gratis',
    'pricing.proRibbon': 'Pro',
    'pricing.pro': 'Pro',
    'pricing.proBenefit1': 'Respon Tanpa Batas',
    'pricing.proBenefit2': 'Hapus Watermark iziForm',
    'pricing.proBenefit3': 'PDF CV Auto-Fill',
    'pricing.proBenefit4': 'Semua Tipe Input',
    'pricing.proBenefit5': 'Branding Kustom',
    'pricing.choosePro': 'Pilih Pro',
    'pricing.businessRibbon': 'Business',
    'pricing.business': 'Business',
    'pricing.businessBenefit1': 'Semua Fitur PRO + AI Candidate Match Score & Ranking',
    'pricing.businessBenefit2': 'Akses Multi-Admin/Tim',
    'pricing.businessBenefit3': 'Multi-Form 1 Proyek',
    'pricing.businessBenefit4': 'Prioritas Support',
    'pricing.chooseBusiness': 'Pilih Business',
    'payment.aria': 'Pilih metode pembayaran dan mata uang',
    'payment.idr': 'QRIS · IDR',
    'payment.usd': 'Global · USD',
    'checkout.eyebrow': 'Checkout Paket',
    'checkout.title': 'Pilih metode pembayaran',
    'checkout.desc': 'Ringkasan paket terpilih dan harga sesuai kurs aktif. Anda bisa mengganti metode di sini.',
    'checkout.webDesc': 'Lanjutkan pembayaran Global / USD melalui halaman checkout.',
    'checkout.webCta': 'Lanjutkan ke Web ($)',
    'toast.paymentMethod': 'Metode pembayaran: {name}',
    'qris.paymentEyebrow': 'Pembayaran QRIS',
    'qris.paymentTitle': 'Bayar paket iziForm',
    'qris.paymentDesc': 'Scan kode QRIS, transfer sesuai nominal, lalu konfirmasi. Bukti transfer opsional dan hanya disimpan di browser Anda.',
    'qris.paymentSummary': 'Ringkasan Pembayaran',
    'qris.paymentMerchant': 'Merchant / QMID',
    'qris.merchantFallback': 'IZIFORM-QRIS',
    'qris.proofLabel': 'Bukti transfer (opsional)',
    'qris.transferHint': 'Jika QRIS belum dipasang, atur gambar kode QRIS melalui menu Dukung Kami terlebih dahulu.',
    'qris.confirm': 'Saya sudah transfer',
    'toast.qrisPaymentConfirmed': 'Konfirmasi diterima untuk {plan}. Cek Google Sheet Anda setelah pembayaran diverifikasi.',
    'toast.qrisProofSaved': 'Bukti transfer dipilih: {name}',
    'toast.qrisMerchantSaved': 'Merchant QRIS tersimpan.',
    'support.aria': 'Pilih metode dukungan',
    'support.qris': 'QRIS (IDR)',
    'support.web': 'Web / Global ($)',
    'support.webDesc': 'Dukung kami lewat halaman Web / Global dengan kartu atau metode pembayaran internasional.',
    'support.webCta': 'Dukung via Web ($)',
    'support.webHint': 'Tautan ini adalah placeholder checkout sampai tautan pembayaran final tersedia.',
    'toast.supportMethod': 'Metode dukungan: {name}',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Pertanyaan yang paling sering ditanyakan.',
    'faq.q1': 'Apakah data tersimpan di Google Sheet saya sendiri?',
    'faq.a1': 'Ya. Anda menentukan sendiri email Google dan URL webhook Sheet. iziForm hanya mengirim payload JSON ke webhook tersebut saat responden menekan submit.',
    'faq.q2': 'Apakah perlu tahu coding untuk memakainya?',
    'faq.a2': 'Tidak. Pilih kategori, isi email dan webhook, lalu bagikan tautan. Tampilan form dan alur pertanyaannya sudah disiapkan.',
    'faq.q3': 'Bagaimana jika webhook belum diisi?',
    'faq.a3': 'Form tetap bisa dicoba. Submission akan berstatus simulasi lokal sampai Anda menyimpan webhook Google Sheet yang aktif.',
    'faq.q4': 'Bisakah mengganti tema dan bahasa?',
    'faq.a4': 'Bisa. Gunakan kontrol di bagian atas halaman untuk mengganti aksen tema serta bahasa Indonesia, Inggris, atau Mandarin Sederhana.',
    'faq.q5': 'Apa bedanya Pro dan Business?',
    'faq.a5': 'Pro fokus pada satu form atau satu batch. Business untuk tim serta kampanye/event besar, dengan multi-form, kolaborasi tim, dan kerapian operasional.',
    'faq.q6': 'Apakah Free benar-benar tetap tersedia?',
    'faq.a6': 'Ya. Free adalah paket awal tanpa biaya dan tetap tersedia saat Anda memilih paket Sekali Pakai untuk Pro atau Business.',
    'faq.q7': 'Apakah CV PDF dibaca di perangkat saya?',
    'faq.a7': 'Ya. Upaya pembacaan PDF dilakukan di browser. Jika teks tidak dapat diekstrak, iziForm menampilkan fallback agar data pelamar tetap bisa diisi manual.',
    'sim.badge': 'Mode Simulasi',
    'sim.desc': 'Data contoh sudah diisi. Anda bisa mengubahnya, lalu jalankan sampai selesai.',
    'sim.finish': 'Jalankan Sampai Selesai',
    'form.back': 'Kembali ke Dashboard',
    'form.backShort': 'Dashboard',
    'form.active': 'Form aktif:',
    'form.change': 'Ganti Kategori',
    'form.bannerAlt': 'Brand Banner',
    'form.ribbonTitle': 'Official Career Portal',
    'form.ribbonStatus': 'PT Digital Nusantara Indonesia • Talent Acquisition 2026',
    'form.open': 'Open Registration',
    'form.verified': 'Terverifikasi',
    'form.previous': 'Sebelumnya',
    'form.required': 'Wajib',
    'form.optional': 'Opsional',
    'form.continue': 'Lanjutkan',
    'form.submit': 'Kirim ke Google Sheet',
    'form.hint': 'Pilih kartu atau tekan',
    'form.questionCounter': 'Pertanyaan {current} dari {total}',
    'form.ratingSelect': 'Pilih rating',
    'form.noDocument': 'Belum ada dokumen dipilih',
    'form.linkPrefix': 'Link: {value}',
    'footer.desc': 'Form berkelas, data tetap di Google Sheet Anda.',
    'footer.copy': '© 2026 iziForm. Dibuat untuk form yang lebih manusiawi.',
    'modal.eyebrow': 'Pengaturan Akun & Sheet',
    'modal.title': 'Hubungkan Google Sheet Anda',
    'modal.desc': 'Isi identitas email Google, tautan form, dan webhook Apps Script. Data submission dikirim ke webhook ini.',
    'modal.save': 'Simpan Pengaturan',
    'success.title': 'Form berhasil dikirim!',
    'success.desc': 'Payload JSON jawaban responden dikirim ke webhook Google Sheet yang Anda simpan. Jika webhook kosong, statusnya adalah simulasi lokal.',
    'success.summary': 'Data Ringkasan:',
    'success.respondent': 'Responden: {name} • Form: {form}',
    'success.sending': 'Status sync: menyiapkan payload...',
    'success.statusPrefix': 'Status sync: ',
    'success.sent': 'Terkirim',
    'success.simulated': 'Simulasi',
    'success.failed': 'Gagal',
    'qris.supportButton': 'Dukung Kami',
    'qris.supportNote': 'Dukungan sukarela, tidak memengaruhi fitur.',
    'qris.eyebrow': 'Dukungan Sukarela',
    'qris.title': 'Dukung Kami',
    'qris.desc': 'Jika iziForm membantu pekerjaan Anda, Anda bisa memberi dukungan lewat QRIS atau tautan Web / Global. Sepenuhnya opsional dan tidak memengaruhi fitur apa pun.',
    'qris.empty': 'QRIS belum dipasang. Unggah gambar kode QRIS Anda.',
    'qris.merchant': 'Nama merchant / QMID',
    'qris.merchantPlaceholder': 'Contoh: IZIFORM-QRIS',
    'qris.image': 'Pasang gambar QRIS',
    'qris.hint': 'Gambar hanya ditampilkan di browser Anda untuk pratinjau; tidak diunggah ke server.',
    'cv.badge': 'Analisis CV',
    'cv.title': 'Indikator Kecocokan Kandidat',
    'cv.subtitle': 'Ringkasan kecocokan terhadap kriteria posisi yang dipilih.',
    'cv.uploadPrompt': 'Unggah CV PDF untuk mengisi data otomatis dan melihat skor kecocokan.',
    'cv.unreadable': 'PDF tidak terbaca sebagai teks. Silakan isi data pelamar secara manual.',
    'cv.scoreLabel': 'Skor kecocokan',
    'cv.levelExcellent': 'Sangat cocok',
    'cv.levelGood': 'Cocok',
    'cv.levelFair': 'Cukup relevan',
    'cv.levelLow': 'Rendah',
    'cv.matchedLabel': 'Kata kunci yang cocok',
    'cv.noMatch': 'Belum ada kata kunci yang terdeteksi',
    'cv.fieldsFilled': 'Field terisi otomatis',
    'cv.missingFields': 'Perlu dilengkapi manual',
    'cv.payloadLabel': 'Kecocokan CV',
    'toast.invalidEmail': 'Format email Google belum valid.',
    'toast.invalidUrl': 'URL harus diawali http:// atau https://.',
    'toast.settingsSavedWebhook': 'Pengaturan tersimpan. Webhook aktif — data dikirim saat submit.',
    'toast.settingsSavedSim': 'Pengaturan tersimpan. Webhook kosong — submission berstatus simulasi.',
    'toast.backDashboard': 'Kembali ke dashboard kategori',
    'toast.switchCategory': 'Beralih ke kategori: {name}',
    'toast.simulationStarted': 'Mode simulasi aktif — data contoh sudah diisi.',
    'toast.simulationFinished': 'Simulasi selesai. Periksa ringkasan pengiriman.',
    'toast.pdfReading': 'Membaca teks PDF CV di browser...',
    'toast.pdfAutofilled': 'CV terbaca. Data pelamar diisi otomatis.',
    'toast.pdfUnreadable': 'Teks PDF tidak terbaca. Silakan isi data manual.',
    'toast.pdfError': 'PDF gagal dibaca. Silakan isi data manual.',
    'toast.cvRequired': 'CV PDF wajib diunggah sebelum melanjutkan.',
    'toast.required': 'Field ini wajib diisi',
    'toast.requiredFieldsMissing': 'Lengkapi kolom wajib sebelum mengirim',
    'toast.hrFreeMode': 'Mode dasar Free aktif — template Netral dipilih.',
    'toast.theme': 'Tema UI diubah: {name}',
    'toast.font': 'Font aktif: {name}',
    'toast.language': 'Bahasa diubah: {name}',
    'toast.copied': 'Link tersalin: {url}',
    'toast.link': 'Link: {url}',
    'toast.copyFailed': 'Salin otomatis tidak tersedia. Gunakan link yang ditampilkan.'
  },
  en: {
    'meta.title': 'iziForm — Multilingual Form SaaS',
    'brand.tier': 'SaaS Studio',
    'nav.aria': 'Main navigation',
    'nav.categories': 'Categories',
    'nav.security': 'Security',
    'nav.how': 'How it works',
    'nav.demo': 'Demo',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'panel.back': 'Back to Categories',
    'panel.demoDesc': 'Choose an interactive flow below to try a form with sample data without changing your Sheet settings.',
    'header.settings': 'Sheet settings',
    'common.copy': 'Copy',
    'common.copyLink': 'Copy link',
    'common.close': 'Close',
    'common.chooseFile': 'Choose File',
    'lang.label': 'Language',
    'lang.aria': 'Choose display language',
    'controls.display': 'Appearance',
    'controls.displayAria': 'Open appearance settings',
    'controls.theme': 'UI accent',
    'controls.font': 'Font',
    'controls.fontAria': 'Choose display font',
    'theme.silicon': 'Silicon Clean',
    'theme.midnight': 'Midnight Gold',
    'theme.cyber': 'Cyber Neo',
    'theme.terracotta': 'Terracotta',
    'font.jakarta': 'Jakarta Sans (Modern)',
    'font.outfit': 'Outfit (Playful Tech)',
    'font.space': 'Space Grotesk (Trendy)',
    'font.playfair': 'Playfair (Luxury Serif)',
    'hero.eyebrow': 'Elegant forms • Automatic data • Your own Sheet',
    'hero.title': 'What form do you want to create today?',
    'hero.desc': 'Turn rigid questions into a polished, enjoyable form experience. Every answer goes straight into your own Google Sheet account.',
    'hero.choose': 'Choose a category',
    'hero.connect': 'Connect Sheet',
    'hero.proofCategories': '<b>7</b> ready categories',
    'hero.proofInputs': '<b>7</b> interactive input types',
    'hero.proofThemes': '<b>4</b> premium themes',
    'hero.livePreview': 'LIVE PREVIEW',
    'hero.previewKicker': 'RECRUITMENT & JOB APPLICATION',
    'hero.previewQuestion': 'What is your full name?',
    'hero.previewAnswer': 'Nadia Utami',
    'hero.previewOptionA': '<b>A</b> Lead Fullstack',
    'hero.previewOptionB': '<b>B</b> HR Talent Lead',
    'hero.previewOptionC': '<b>C</b> Growth Lead',
    'hero.previewSaved': 'Saved automatically',
    'hero.chipInteractive': 'Interactive',
    'hero.chipSheet': 'Google Sheet',
    'categories.eyebrow': 'Choose a category',
    'categories.title': 'One category, one complete form flow.',
    'categories.desc': 'Click a card to open the form, or use Quick Preview to try the flow first. Includes a Custom category.',
    'categories.preview': 'Quick preview',
    'categories.open': 'Open form',
    'pricing.startFrom': 'Start from',
    'custom.eyebrow': 'Custom Paths',
    'custom.title': 'Choose the custom path that fits.',
    'custom.desc': 'DIY Custom is self-served; Custom Request uses a locked scope and workload estimate from the start.',
    'custom.options': 'View Custom Options',
    'custom.selfLabel': 'DIY Custom',
    'custom.selfTitle': 'Completed by the user',
    'custom.selfDesc': 'Choose a basic level or a richer self-serve capacity without waiting for the team.',
    'custom.free': 'Free (basic)',
    'custom.selfFreeDesc': 'Standard fields, 1 active form, and 50 responses/month.',
    'custom.paid': 'Paid',
    'custom.selfPaidDesc': 'Extra fields, larger capacity, and self-serve branding options.',
    'custom.requestLabel': 'Custom Request',
    'custom.requestTitle': 'Paid only with scope locked from the start',
    'custom.requestDesc': 'For cases where the team prepares the data structure or flow within clear scope limits.',
    'custom.light': 'Light',
    'custom.lightDesc': 'Targeted field and Google Sheet column structure adjustments.',
    'custom.lightBorder': 'Scope & light revision: 1 focused round.',
    'custom.load': 'Estimated load',
    'custom.loadLight': '1–3 business days',
    'custom.complex': 'Complex',
    'custom.complexDesc': 'Deeper form logic/flow and data structure.',
    'custom.complexBorder': 'Scope locked up front & 2 focused revision rounds.',
    'custom.loadComplex': '3–5 business days / by slot',
    'custom.bordering': 'Scope boundary',
    'custom.borderNote': 'Changes outside the agreed scope are handled as a separate adjustment.',
    'custom.startSelf': 'Open DIY Custom',
    'custom.preview': 'Preview Form',
    'hr.builderEyebrow': 'HR Builder',
    'hr.builderTitle': 'Set the requirements once; the candidate portal follows.',
    'hr.builderDesc': 'Define job details and requirement limits. Side B automatically reflects fields, badges, and screening questions.',
    'hr.builderOption': 'Open HR Builder',
    'hr.companyName': 'Company name',
    'hr.companyLogo': 'Company logo / photo',
    'hr.logoHint': 'Leave empty to use automatic initials.',
    'hr.logoClear': 'Clear Logo',
    'hr.openWorkspace': 'Open HR Workspace',
    'hr.sideA': 'Side A · HR / Builder',
    'hr.sideB': 'Side B · Candidate Portal',
    'hr.companyPresetLabel': 'Sample company presets',
    'hr.block.identity': '1. Identity & Company Profile',
    'hr.block.overview': '2. Job Overview',
    'hr.block.requirement': '3. Requirement',
    'hr.block.qualification': '4. Qualification',
    'hr.block.screening': '5. Screening Questions & Form Rules',
    'hr.block.benefit': '6. Benefits',
    'hr.block.cardbox': '7. Candidate Form Cardbox List',
    'hr.industry': 'Industry / field',
    'hr.description': 'Company short description',
    'hr.website': 'Official website',
    'hr.banner': 'Header banner',
    'hr.bannerHint': 'Leave empty to use automatic gradient.',
    'hr.bannerClear': 'Clear Banner',
    'hr.roleSummary': 'Role summary',
    'hr.responsibilities': 'Key responsibilities',
    'hr.jobType': 'Work type',
    'hr.jobTypeFullTime': 'Full-time',
    'hr.jobTypeContract': 'Contract',
    'hr.jobTypeHybrid': 'Hybrid',
    'hr.jobTypeOnsite': 'On-site',
    'hr.jobTypePartTime': 'Part-time',
    'hr.jobTypeInternship': 'Internship',
    'hr.jobTypeRemote': 'Remote',
    'hr.mustHave': 'Must-have requirements',
    'hr.qualification': 'Background qualification',
    'hr.certification': 'Certification',
    'hr.plusPoints': 'Plus points',
    'hr.cvRequired': 'PDF CV upload required',
    'hr.matchThreshold': 'Match Score threshold',
    'hr.uiTemplateLabel': 'HR UI template',
    'hr.uiPreviewLabel': 'Live preview',
    'hr.uiTier': 'Tier',
    'hr.uiTemplate.clean01': 'Neutral',
    'hr.uiTemplate.clean02': 'Free 2 — Simple Paper',
    'hr.uiTemplate.softDusk': 'Free 3 — Soft Dusk',
    'hr.uiTemplateSelect': 'Choose UI template',
    'hr.uiPreviewLarge': 'Large preview',
    'hr.uiPreviewLargeTitle': 'UI template preview',
    'hr.uiApplyPortal': 'Apply to candidate portal',
    'hr.uiPreviewTagline': 'The candidate portal follows the selected template.',
    'hr.uiTemplate.pro01': 'Pro 1 — Warm Editorial Batik Accent',
    'hr.uiTemplate.pro02': 'Pro 2 — Crisp Studio Frame',
    'hr.uiTemplate.pro03': 'Pro 3 — Soft Executive Heritage',
    'hr.uiTemplate.business01': 'Business 1 — Obsidian Executive',
    'hr.uiTemplate.business02': 'Business 2 — Ivory & Champagne Atelier',
    'hr.uiTemplate.business03': 'Business 3 — Nordic Slate & Cobalt',
    'hr.uiTemplate.business04': 'Business 4 — Deep Forest & Brass Heritage',
    'hr.fontPairLabel': 'Candidate portal font pairing',
    'hr.fontPairTemplate': 'Follow template',
    'hr.fontPairEditorial': 'Editorial Serif + Clean Sans',
    'hr.fontPairStudio': 'Studio Grotesk + Sharp Sans',
    'hr.fontPairExecutive': 'Heritage Serif + Crisp Sans',
    'hr.fontPairHeritage': 'Editorial Serif + Soft Sans',
    'hr.fontPairLocked': 'Locked on Free',
    'portal.applyNow': 'Apply Now',
    'portal.aboutCompany': 'About the Company',
    'portal.jobOverview': 'Job Overview',
    'portal.requirements': 'Requirements',
    'portal.qualifications': 'Qualifications',
    'portal.industryLabel': 'Industry',
    'portal.websiteLabel': 'Website',
    'portal.responsibilitiesLabel': 'Responsibilities',
    'portal.jobTypeLabel': 'Work type',
    'portal.mustHaveLabel': 'Must-have',
    'portal.educationLabel': 'Education',
    'portal.certificationLabel': 'Certification',
    'portal.plusPointsLabel': 'Plus points',
    'portal.matchThresholdLabel': 'Minimum Match Score',
    'portal.cvDropTitle': 'Drag & drop your PDF CV here',
    'portal.cvDropHint': 'or click to choose a file • automatic auto-fill',
    'portal.cvDragActive': 'Release to scan the CV',
    'portal.applicationPanel': 'Application Form',
    'portal.companyLabel': 'Company',
    'portal.companyProfile': 'Company Profile',
    'portal.positionApplied': 'Applied position',
    'portal.workLocation': 'Location / work type',
    'hr.templateLabel': 'Quick role templates',
    'hr.templateTech': 'Technology',
    'hr.templatePeople': 'HR / People',
    'hr.templateGrowth': 'Growth',
    'hr.templateCustom': 'Custom',
    'hr.position': 'Position name',
    'hr.location': 'Domisili / work location',
    'hr.minYears': 'Minimum years of experience',
    'hr.skills': 'Main skills / tools',
    'hr.education': 'Education / certification / portfolio',
    'hr.salary': 'Salary expectation',
    'hr.notice': 'Notice period',
    'hr.screening': 'Screening question',
    'hr.previewTitle': 'HR Google Sheet recap preview',
    'hr.previewDesc': 'These are the columns saved to the HR Sheet, including candidate match and selection status.',
    'hr.sheetColumns': 'Sheet columns',
    'hr.statusLabel': 'Selection status',
    'hr.statusNew': 'New',
    'hr.statusShortlist': 'Shortlist',
    'hr.statusInterview': 'Interview',
    'hr.statusAccepted': 'Accepted',
    'hr.statusRejected': 'Rejected',
    'hr.matchStatus': 'Match status',
    'hr.openPortal': 'Open Candidate Portal',
    'hr.demoPortal': 'Candidate Portal Demo',
    'hr.priceDesc': 'One-time builder + candidate portal access.',
    'hr.pricingTitle': 'HR & Recruitment Plans',
    'hr.freeTry': 'Free available · try it',
    'hr.freeNote': 'The free basic mode still works for trying the Sisi A ↔ Sisi B flow.',
    'hr.starterName': 'Starter',
    'hr.benefit': 'Benefits / perks',
    'hr.benefitPlaceholder': 'Example: health insurance, flexible work, learning budget',
    'hr.benefitHint': 'Leave blank to hide the Benefits section on the candidate portal.',
    'hr.noBenefit': 'Not specified',
    'hr.customFieldsTitle': 'Additional applicant fields',
    'hr.customFieldsDesc': 'Add fields beyond the defaults; they appear on Sisi B and in the HR Sheet recap.',
    'hr.customFieldNew': 'New field',
    'hr.customFieldLabel': 'Field label',
    'hr.customFieldType': 'Input type',
    'hr.customFieldTypeText': 'Text input',
    'hr.customFieldTypeNote': 'Long note',
    'hr.customFieldRequired': 'Required',
    'hr.customFieldAdd': 'Add field',
    'hr.customFieldRemove': 'Remove',
    'hr.customFieldsEmpty': 'No additional fields yet.',
    'hr.cardboxReset': 'Reset view',
    'hr.cardboxDesc': 'Every cardbox filled by candidates on Side B, with visibility, required/optional status, field source, and its link to the HR Google Sheet recap.',
    'hr.cardboxFootnote': 'Changes here apply instantly to the Side B cardboxes and the Sheet payload. The CV required rule still follows Section 5.',
    'hr.cardboxCount': '{visible} of {total} cardboxes shown on Side B',
    'hr.cardboxVisible': 'Shown on Side B',
    'hr.cardboxHidden': 'Hidden',
    'hr.cardboxSourceStandard': 'Standard HR field',
    'hr.cardboxSourceCustom': 'HR custom field',
    'hr.cardboxSheetIncluded': 'In recap & Sheet',
    'hr.cardboxSheetExcluded': 'Excluded from Sheet',
    'hr.cardboxCvRule': 'set in Section 5',
    'hr.cardboxShow': 'Show',
    'hr.cardboxAtLeastOne': 'At least one cardbox must stay visible on Side B.',
    'hr.cardboxResetDone': 'Cardbox statuses restored to defaults',
    'hr.additionalQuestions': 'ADDITIONAL INFORMATION',
    'hr.customFieldInputPlaceholder': 'Write your answer',
    'hr.customFieldNotePlaceholder': 'Write your answer with details',
    'hr.colBenefit': 'Benefits',
    'hr.colCustom': 'Additional fields',
    'hr.benefitPortal': 'Sisi B application portal enabled',
    'hr.benefitCv': 'PDF CV auto-fill + High/Medium/Low match',
    'hr.benefitSheet': 'Recap in 1 HR Google Sheet',
    'hr.benefitMultiRole': 'Multiple roles & HR team support',
    'hr.benefitBusinessTemplate': 'Business career portal templates',
    'hr.benefitFilter': 'Flexible recap and candidate filtering',
    'hr.noCandidate': 'No candidate yet. Share the portal link to start receiving applications.',
    'hr.colCandidate': 'Candidate',
    'hr.colMatch': 'Match',
    'hr.colSelection': 'Selection',
    'portal.eyebrow': 'Candidate Portal',
    'portal.title': 'Your application, clear and structured.',
    'portal.progress': 'Application progress',
    'portal.cvTitle': 'PDF CV',
    'portal.cvDesc': 'Autofill details with a concise match indicator.',
    'portal.cvReady': 'CV read',
    'portal.cvEmpty': 'No CV uploaded yet',
    'portal.jumpCv': 'Fill CV',
    'portal.requirementLabel': 'Role requirement',
    'portal.matchLabel': 'Match',
    'cv.levelHigh': 'High',
    'cv.levelMedium': 'Medium',
    'toast.hrTemplate': 'Template applied',
    'toast.hrStatus': 'Selection status updated',
    'showcase.hrBuilderTitle': 'HR Builder flow',
    'showcase.hrBuilderDesc': 'HR requirements are reflected automatically in the candidate portal.',
    'sync.eyebrow': 'Google Account & Sheet Sync',
    'sync.title': 'Your data, your own Sheet.',
    'sync.desc': 'Connect your Google email and Google Sheet webhook. Each submission is sent as JSON directly to each user’s own sheet.',
    'sync.googleEmail': 'Google email',
    'sync.sheetWebhook': 'Sheet webhook',
    'sync.webhookUrl': 'Google Sheet webhook URL',
    'sync.gform': 'Google Form link',
    'sync.gformOptional': 'Google Form link (optional)',
    'sync.emailPlaceholder': 'name@email.com',
    'sync.webhookPlaceholder': 'https://script.google.com/macros/s/.../exec',
    'sync.gformPlaceholder': 'https://docs.google.com/forms/d/e/.../viewform',
    'sync.save': 'Save connection',
    'sync.ownership': 'iziForm keeps no permanent copy of your answers. Your Sheet stays under your own account and control.',
    'sync.note': 'iziForm never asks for your Google password. Only your email for identity and your own Apps Script webhook URL.',
    'sync.notConnected': 'Not connected',
    'sync.googleFilled': 'Email set',
    'sync.googleEmpty': 'Not set',
    'sync.sheetFilled': 'Webhook active',
    'sync.sheetEmpty': 'Not set',
    'sync.hintReady': 'Status: webhook active — submissions are sent to your Sheet.',
    'sync.hintSimulated': 'Status: webhook empty — submissions run in local simulation mode.',
    'sync.pasteActive': 'Webhook: active',
    'sync.pasteSimulated': 'Webhook: not set (simulation mode)',
    'sync.headerConnected': 'Google & Sheet connected',
    'sync.headerEmailOnly': 'Google email connected',
    'sync.headerSheetOnly': 'Sheet connected',
    'sync.sendSimulated': 'Webhook is empty — data is kept as a local simulation.',
    'sync.sendOk': 'JSON data was sent to the Google Sheet webhook.',
    'sync.sendHttpError': 'Failed to send to webhook (HTTP {status}).',
    'sync.sendUnreachable': 'Webhook is unreachable — check the URL or CORS.',
    'security.eyebrow': 'Data Security',
    'security.title': 'Your data stays yours, end to end.',
    'security.desc': 'The flow is simple and transparent: answers travel from the browser straight to the Google Sheet webhook you set up.',
    'security.directTitle': 'Straight to your Sheet',
    'security.directDesc': 'The JSON payload is sent to your webhook URL. iziForm has no hidden central storage of responses.',
    'security.controlTitle': 'Access stays with you',
    'security.controlDesc': 'You decide who can view or edit the Sheet, and when access is revoked.',
    'security.clearTitle': 'Transparent and auditable',
    'security.clearDesc': 'Every submission shows its delivery status. If the webhook is empty, iziForm clearly labels it a local simulation.',
    'security.strip': 'Every category follows the same rule: email for identity, webhook for storage, full control in your hands.',
    'how.eyebrow': 'How it works',
    'how.title': 'Three steps from idea to filled Sheet.',
    'how.desc': 'No coding, no redesign. Just pick, connect, and share.',
    'how.step1Title': 'Pick a category',
    'how.step1Desc': 'Choose recruitment, event, order, class, survey, brief, or create your own Custom category.',
    'how.step2Title': 'Connect email & Sheet',
    'how.step2Desc': 'Add your Google email and Apps Script webhook so answers land in your account.',
    'how.step3Title': 'Share the link & check the Sheet',
    'how.step3Desc': 'Copy the unique category link and monitor every answer directly in Google Sheet.',
    'showcase.eyebrow': 'Showcase Gallery',
    'showcase.title': 'See the result, not just the idea.',
    'showcase.desc': 'The demo cards below open real form flows with sample data. Quick Preview is also available on every category card.',
    'showcase.demoLabel': 'Interactive demo',
    'showcase.recruitTitle': 'Application flow',
    'showcase.recruitDesc': 'Candidate identity, PDF CV, and match indicator.',
    'showcase.eventTitle': 'Event registration',
    'showcase.eventDesc': 'Pick a race distance and confirm the e-ticket.',
    'showcase.surveyTitle': 'Customer survey',
    'showcase.surveyDesc': 'Rating, feedback, and automatic summary.',
    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Pay once, use it right away.',
    'pricing.desc': 'Focused on Single Pass packages. Your data still flows into your own Google Sheet account.',
    'pricing.compactNote': 'Single pass, no subscription · Free stays available',
    'pricing.singlePass': 'Single Pass',
    'pricing.promoBadge': 'PROMO NEW LAUNCHING',
    'pricing.perForm': '/form',
    'pricing.perProject': '/project',
    'pricing.freeRibbon': 'STARTER PLAN',
    'pricing.free': 'Free',
    'pricing.freeScope': 'STARTER PLAN',
    'pricing.freeNote': 'For trying iziForm and personal use.',
    'pricing.freeBenefit1': '1 Active Form',
    'pricing.freeBenefit2': '50 responses/month',
    'pricing.freeBenefit3': 'Connected to Google Sheet',
    'pricing.freeBenefit4': 'iziForm watermark',
    'pricing.freeCta': 'Start free',
    'pricing.proRibbon': 'Pro',
    'pricing.pro': 'Pro',
    'pricing.proBenefit1': 'Unlimited Responses',
    'pricing.proBenefit2': 'Remove iziForm Watermark',
    'pricing.proBenefit3': 'PDF CV Auto-Fill',
    'pricing.proBenefit4': 'All Input Types',
    'pricing.proBenefit5': 'Custom Branding',
    'pricing.choosePro': 'Choose Pro',
    'pricing.businessRibbon': 'Business',
    'pricing.business': 'Business',
    'pricing.businessBenefit1': 'All PRO features + AI Candidate Match Score & Ranking',
    'pricing.businessBenefit2': 'Multi-Admin/Team Access',
    'pricing.businessBenefit3': 'Multi-Form in 1 Project',
    'pricing.businessBenefit4': 'Priority Support',
    'pricing.chooseBusiness': 'Choose Business',
    'payment.aria': 'Choose payment method and currency',
    'payment.idr': 'QRIS · IDR',
    'payment.usd': 'Global · USD',
    'checkout.eyebrow': 'Package checkout',
    'checkout.title': 'Choose a payment method',
    'checkout.desc': 'Review your selected package and active-currency price. You can switch methods here.',
    'checkout.webDesc': 'Continue Global / USD payment on the checkout page.',
    'checkout.webCta': 'Continue to Web ($)',
    'toast.paymentMethod': 'Payment method: {name}',
    'qris.paymentEyebrow': 'QRIS Payment',
    'qris.paymentTitle': 'Pay for your iziForm package',
    'qris.paymentDesc': 'Scan the QRIS code, transfer the exact amount, then confirm. Payment proof is optional and stays in your browser.',
    'qris.paymentSummary': 'Payment Summary',
    'qris.paymentMerchant': 'Merchant / QMID',
    'qris.merchantFallback': 'IZIFORM-QRIS',
    'qris.proofLabel': 'Payment proof (optional)',
    'qris.transferHint': 'If QRIS is not set yet, install your QR code first from the Support Us menu.',
    'qris.confirm': 'I have transferred',
    'toast.qrisPaymentConfirmed': 'Confirmation received for {plan}. Check your Google Sheet after payment verification.',
    'toast.qrisProofSaved': 'Payment proof selected: {name}',
    'toast.qrisMerchantSaved': 'QRIS merchant saved.',
    'support.aria': 'Choose support method',
    'support.qris': 'QRIS (IDR)',
    'support.web': 'Web / Global ($)',
    'support.webDesc': 'Support us through the Web / Global page with a card or international payment method.',
    'support.webCta': 'Support via Web ($)',
    'support.webHint': 'This link is a checkout placeholder until the final payment link is available.',
    'toast.supportMethod': 'Support method: {name}',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions people ask most.',
    'faq.q1': 'Is my data stored in my own Google Sheet?',
    'faq.a1': 'Yes. You set your Google email and Sheet webhook yourself. iziForm only sends the JSON payload to that webhook when a respondent submits.',
    'faq.q2': 'Do I need to know how to code?',
    'faq.a2': 'No. Pick a category, fill in your email and webhook, then share the link. The form display and question flow are ready.',
    'faq.q3': 'What if the webhook is empty?',
    'faq.a3': 'The form still works. Submissions are labeled as a local simulation until you save an active Google Sheet webhook.',
    'faq.q4': 'Can I switch themes and language?',
    'faq.a4': 'Yes. Use the controls at the top to switch theme accents and between Indonesian, English, or Simplified Chinese.',
    'faq.q5': 'What is the difference between Pro and Business?',
    'faq.a5': 'Pro focuses on one form or one batch. Business is for teams and larger campaigns/events, with multi-form flows, team collaboration, and tidy operations.',
    'faq.q6': 'Is Free really still available?',
    'faq.a6': 'Yes. Free is the no-cost starting plan and stays available when you choose a Single Pass package for Pro or Business.',
    'faq.q7': 'Is the PDF CV read on my device?',
    'faq.a7': 'Yes. Text extraction is attempted in your browser. If the PDF cannot be read, iziForm shows a clear fallback so details can still be filled manually.',
    'sim.badge': 'Simulation mode',
    'sim.desc': 'Sample data is prefilled. You can edit it, then run the flow to completion.',
    'sim.finish': 'Run to completion',
    'form.back': 'Back to dashboard',
    'form.backShort': 'Dashboard',
    'form.active': 'Active form:',
    'form.change': 'Change category',
    'form.bannerAlt': 'Brand banner',
    'form.ribbonTitle': 'Official Career Portal',
    'form.ribbonStatus': 'PT Digital Nusantara Indonesia • Talent Acquisition 2026',
    'form.open': 'Open Registration',
    'form.verified': 'Verified',
    'form.previous': 'Previous',
    'form.required': 'Required',
    'form.optional': 'Optional',
    'form.continue': 'Continue',
    'form.submit': 'Send to Google Sheet',
    'form.hint': 'Pick a card or press',
    'form.questionCounter': 'Question {current} of {total}',
    'form.ratingSelect': 'Choose a rating',
    'form.noDocument': 'No document selected yet',
    'form.linkPrefix': 'Link: {value}',
    'footer.desc': 'Elegant forms, with data kept in your Google Sheet.',
    'footer.copy': '© 2026 iziForm. Built for more human forms.',
    'modal.eyebrow': 'Account & Sheet settings',
    'modal.title': 'Connect your Google Sheet',
    'modal.desc': 'Fill in your Google email, form link, and Apps Script webhook. Submission data is sent to this webhook.',
    'modal.save': 'Save settings',
    'success.title': 'Form submitted!',
    'success.desc': 'The respondent’s JSON payload is sent to the Google Sheet webhook you saved. If the webhook is empty, it stays a local simulation.',
    'success.summary': 'Summary data:',
    'success.respondent': 'Respondent: {name} • Form: {form}',
    'success.sending': 'Sync status: preparing payload...',
    'success.statusPrefix': 'Sync status: ',
    'success.sent': 'Sent',
    'success.simulated': 'Simulation',
    'success.failed': 'Failed',
    'qris.supportButton': 'Support Us',
    'qris.supportNote': 'Voluntary support, does not affect any feature.',
    'qris.eyebrow': 'Voluntary support',
    'qris.title': 'Support Us',
    'qris.desc': 'If iziForm helped your work, you can support it via QRIS or the Web / Global link. Completely optional and it never affects any feature.',
    'qris.empty': 'No QRIS installed yet. Upload your QR code image.',
    'qris.merchant': 'Merchant name / QMID',
    'qris.merchantPlaceholder': 'Example: IZIFORM-QRIS',
    'qris.image': 'Install QRIS image',
    'qris.hint': 'The image is previewed only in your browser; it is not uploaded to a server.',
    'cv.badge': 'CV analysis',
    'cv.title': 'Candidate match indicator',
    'cv.subtitle': 'A simple summary against the selected role criteria.',
    'cv.uploadPrompt': 'Upload a PDF CV to autofill details and see the match score.',
    'cv.unreadable': 'The PDF could not be read as text. Please fill in applicant details manually.',
    'cv.scoreLabel': 'Match score',
    'cv.levelExcellent': 'Excellent match',
    'cv.levelGood': 'Good match',
    'cv.levelFair': 'Somewhat relevant',
    'cv.levelLow': 'Low',
    'cv.matchedLabel': 'Matched keywords',
    'cv.noMatch': 'No keywords detected yet',
    'cv.fieldsFilled': 'Autofilled fields',
    'cv.missingFields': 'Needs manual completion',
    'cv.payloadLabel': 'CV match',
    'toast.invalidEmail': 'The Google email format is not valid.',
    'toast.invalidUrl': 'The URL must start with http:// or https://.',
    'toast.settingsSavedWebhook': 'Settings saved. Webhook active — data is sent on submit.',
    'toast.settingsSavedSim': 'Settings saved. Webhook empty — submissions stay in simulation mode.',
    'toast.backDashboard': 'Back to the category dashboard',
    'toast.switchCategory': 'Switched to category: {name}',
    'toast.simulationStarted': 'Simulation mode is on — sample data is prefilled.',
    'toast.simulationFinished': 'Simulation finished. Check the delivery summary.',
    'toast.pdfReading': 'Reading CV PDF text in your browser...',
    'toast.pdfAutofilled': 'CV read. Applicant details were autofilled.',
    'toast.pdfUnreadable': 'PDF text could not be read. Please fill in the details manually.',
    'toast.pdfError': 'The PDF could not be processed. Please fill in the details manually.',
    'toast.cvRequired': 'A PDF CV is required before continuing.',
    'toast.required': 'This field is required',
    'toast.requiredFieldsMissing': 'Complete the required fields before submitting',
    'toast.hrFreeMode': 'Free basic mode enabled — Neutral template selected.',
    'toast.theme': 'UI theme changed: {name}',
    'toast.font': 'Active font: {name}',
    'toast.language': 'Language changed: {name}',
    'toast.copied': 'Link copied: {url}',
    'toast.link': 'Link: {url}',
    'toast.copyFailed': 'Auto-copy is unavailable. Use the displayed link instead.'
  },
  zh: {
    'meta.title': 'iziForm — 多语言表单 SaaS',
    'brand.tier': 'SaaS 工作室',
    'nav.aria': '主导航',
    'nav.categories': '分类',
    'nav.security': '数据安全',
    'nav.how': '使用方法',
    'nav.demo': '演示',
    'nav.pricing': '价格',
    'nav.faq': '常见问题',
    'panel.back': '返回分类',
    'panel.demoDesc': '在下方选择互动流程，即可使用示例数据体验表单，不会更改您的表格设置。',
    'header.settings': '表格设置',
    'common.copy': '复制',
    'common.copyLink': '复制链接',
    'common.close': '关闭',
    'common.chooseFile': '选择文件',
    'lang.label': '语言',
    'lang.aria': '选择显示语言',
    'controls.display': '外观',
    'controls.displayAria': '打开外观设置',
    'controls.theme': '界面配色',
    'controls.font': '字体',
    'controls.fontAria': '选择显示字体',
    'theme.silicon': 'Silicon Clean',
    'theme.midnight': 'Midnight Gold',
    'theme.cyber': 'Cyber Neo',
    'theme.terracotta': 'Terracotta',
    'font.jakarta': 'Jakarta Sans（现代）',
    'font.outfit': 'Outfit（科技活泼）',
    'font.space': 'Space Grotesk（潮流）',
    'font.playfair': 'Playfair（优雅衬线）',
    'hero.eyebrow': '精致表单 • 自动数据 • 属于您的表格',
    'hero.title': '今天想创建什么表单？',
    'hero.desc': '把生硬的问题变成精致又愉快的填写体验。每条回答都会直接进入您自己的 Google Sheet 账号。',
    'hero.choose': '选择分类',
    'hero.connect': '连接表格',
    'hero.proofCategories': '<b>7</b> 个现成分类',
    'hero.proofInputs': '<b>7</b> 种交互输入',
    'hero.proofThemes': '<b>4</b> 套高级主题',
    'hero.livePreview': '实时预览',
    'hero.previewKicker': '招聘与求职申请',
    'hero.previewQuestion': '请问您的全名是？',
    'hero.previewAnswer': 'Nadia Utami',
    'hero.previewOptionA': '<b>A</b> 全栈负责人',
    'hero.previewOptionB': '<b>B</b> 人力资源负责人',
    'hero.previewOptionC': '<b>C</b> 增长负责人',
    'hero.previewSaved': '自动保存',
    'hero.chipInteractive': '交互式',
    'hero.chipSheet': 'Google Sheet',
    'categories.eyebrow': '选择分类',
    'categories.title': '一个分类，一套完整表单流程。',
    'categories.desc': '点击卡片打开表单，或使用快速预览先体验流程。也包含“自选分类”。',
    'categories.preview': '快速预览',
    'categories.open': '打开表单',
    'pricing.startFrom': '起价',
    'custom.eyebrow': '定制路径',
    'custom.title': '选择最适合您的定制路径。',
    'custom.desc': '自选定制由您自行完成；定制请求从一开始就锁定范围与工期预估。',
    'custom.options': '查看定制选项',
    'custom.selfLabel': '自选定制',
    'custom.selfTitle': '由用户自行完成',
    'custom.selfDesc': '选择基础版本或更完整的自助容量，无需等待团队处理。',
    'custom.free': '免费（基础）',
    'custom.selfFreeDesc': '标准字段、1 个使用中表单、每月 50 份回复。',
    'custom.paid': '付费',
    'custom.selfPaidDesc': '更多字段、更大容量及自助品牌选项。',
    'custom.requestLabel': '定制请求',
    'custom.requestTitle': '仅付费，范围从一开始即锁定',
    'custom.requestDesc': '适用于需要团队在明确范围内准备数据结构或流程的情况。',
    'custom.light': '轻量',
    'custom.lightDesc': '针对性调整字段与 Google Sheet 列结构。',
    'custom.lightBorder': '范围与轻量修订：1 轮定向调整。',
    'custom.load': '预计工期',
    'custom.loadLight': '1–3 个工作日',
    'custom.complex': '复杂',
    'custom.complexDesc': '更深入的表单逻辑/流程与数据结构。',
    'custom.complexBorder': '范围先行锁定，含 2 轮定向修订。',
    'custom.loadComplex': '3–5 个工作日 / 视排期',
    'custom.bordering': '范围边界',
    'custom.borderNote': '超出约定范围的修改将按单独调整处理。',
    'custom.startSelf': '打开自选定制',
    'custom.preview': '预览表单',
    'hr.builderEyebrow': 'HR 构建器',
    'hr.builderTitle': '设置好要求，候选人门户即刻同步。',
    'hr.builderDesc': '定义职位详情与要求边界。候选人端会自动反映字段、标签与筛选问题。',
    'hr.builderOption': '打开 HR 构建器',
    'hr.companyName': '公司名称',
    'hr.companyLogo': '公司标志 / 照片',
    'hr.logoHint': '留空则使用自动首字母。',
    'hr.logoClear': '清除标志',
    'hr.openWorkspace': '打开 HR 工作区',
    'hr.sideA': 'A 侧 · HR / 构建器',
    'hr.sideB': 'B 侧 · 候选人门户',
    'hr.companyPresetLabel': '公司示例预设',
    'hr.block.identity': '1. 身份与公司资料',
    'hr.block.overview': '2. 职位概览',
    'hr.block.requirement': '3. 任职要求',
    'hr.block.qualification': '4. 资格条件',
    'hr.block.screening': '5. 筛选问题与表单规则',
    'hr.block.benefit': '6. 福利 / 待遇',
    'hr.block.cardbox': '7. 候选人表单卡片列表',
    'hr.industry': '行业 / 业务领域',
    'hr.description': '公司简介',
    'hr.website': '官方网站',
    'hr.banner': '页眉横幅',
    'hr.bannerHint': '留空则使用自动渐变。',
    'hr.bannerClear': '清除横幅',
    'hr.roleSummary': '职位摘要',
    'hr.responsibilities': '主要职责',
    'hr.jobType': '工作类型',
    'hr.jobTypeFullTime': '全职',
    'hr.jobTypeContract': '合同制',
    'hr.jobTypeHybrid': '混合办公',
    'hr.jobTypeOnsite': '现场办公',
    'hr.jobTypePartTime': '兼职',
    'hr.jobTypeInternship': '实习',
    'hr.jobTypeRemote': '远程',
    'hr.mustHave': '必备条件',
    'hr.qualification': '背景资质',
    'hr.certification': '证书',
    'hr.plusPoints': '加分项',
    'hr.cvRequired': '必须上传 PDF 简历',
    'hr.matchThreshold': '匹配分门槛',
    'hr.uiTemplateLabel': 'HR 界面模板',
    'hr.uiPreviewLabel': '实时预览',
    'hr.uiTier': '层级',
    'hr.uiTemplate.clean01': '中性',
    'hr.uiTemplate.clean02': 'Free 2 — 简洁纸张',
    'hr.uiTemplate.softDusk': 'Free 3 — 柔和暗色',
    'hr.uiTemplateSelect': '选择界面模板',
    'hr.uiPreviewLarge': '大图预览',
    'hr.uiPreviewLargeTitle': '界面模板预览',
    'hr.uiApplyPortal': '应用到候选人端',
    'hr.uiPreviewTagline': '候选人门户将跟随所选模板。',
    'hr.uiTemplate.pro01': 'Pro 1 — 暖色编辑蜡染',
    'hr.uiTemplate.pro02': 'Pro 2 — 清晰工作室框线',
    'hr.uiTemplate.pro03': 'Pro 3 — 柔和传承行政风',
    'hr.uiTemplate.business01': 'Business 1 — 黑曜行政风',
    'hr.uiTemplate.business02': 'Business 2 — 象牙香槟工坊',
    'hr.uiTemplate.business03': 'Business 3 — 北欧石板钴蓝',
    'hr.uiTemplate.business04': 'Business 4 — 深林黄铜传承',
    'hr.fontPairLabel': '候选人门户字体搭配',
    'hr.fontPairTemplate': '跟随模板',
    'hr.fontPairEditorial': '编辑衬线 + 清晰无衬线',
    'hr.fontPairStudio': '工作室几何 + 锐利无衬线',
    'hr.fontPairExecutive': '传承衬线 + 利落无衬线',
    'hr.fontPairHeritage': '编辑衬线 + 柔和无衬线',
    'hr.fontPairLocked': '免费版锁定',
    'portal.applyNow': '立即申请',
    'portal.aboutCompany': '关于公司',
    'portal.jobOverview': '职位概览',
    'portal.requirements': '任职要求',
    'portal.qualifications': '资格条件',
    'portal.industryLabel': '行业',
    'portal.websiteLabel': '网站',
    'portal.responsibilitiesLabel': '职责',
    'portal.jobTypeLabel': '工作类型',
    'portal.mustHaveLabel': '必备条件',
    'portal.educationLabel': '学历',
    'portal.certificationLabel': '证书',
    'portal.plusPointsLabel': '加分项',
    'portal.matchThresholdLabel': '最低匹配分',
    'portal.cvDropTitle': '将 PDF 简历拖放到此处',
    'portal.cvDropHint': '或点击选择文件 • 自动填充',
    'portal.cvDragActive': '松开以扫描简历',
    'portal.applicationPanel': '申请表',
    'portal.companyLabel': '公司',
    'portal.companyProfile': '公司简介',
    'portal.positionApplied': '申请职位',
    'portal.workLocation': '地点 / 工作类型',
    'hr.templateLabel': '快速职位模板',
    'hr.templateTech': '技术',
    'hr.templatePeople': 'HR / 人力',
    'hr.templateGrowth': '增长',
    'hr.templateCustom': '自定义',
    'hr.position': '职位名称',
    'hr.location': '现居地 / 工作地点',
    'hr.minYears': '最低工作年限',
    'hr.skills': '主要技能 / 工具',
    'hr.education': '学历 / 证书 / 作品集',
    'hr.salary': '薪资期望',
    'hr.notice': '通知期',
    'hr.screening': '筛选问题',
    'hr.previewTitle': 'HR Google Sheet 汇总预览',
    'hr.previewDesc': '这些列会保存至 HR 表格，包括候选人匹配度与筛选状态。',
    'hr.sheetColumns': '表格列',
    'hr.statusLabel': '筛选状态',
    'hr.statusNew': '新入库',
    'hr.statusShortlist': '候选名单',
    'hr.statusInterview': '面试中',
    'hr.statusAccepted': '已录用',
    'hr.statusRejected': '未通过',
    'hr.matchStatus': '匹配状态',
    'hr.openPortal': '打开候选人门户',
    'hr.demoPortal': '候选人门户演示',
    'hr.priceDesc': '一次性开通构建器 + 候选人门户。',
    'hr.pricingTitle': 'HR 与招聘套餐',
    'hr.freeTry': '免费可用 · 立即试用',
    'hr.freeNote': '免费基础模式仍可体验 A 侧 ↔ B 侧完整流程。',
    'hr.starterName': '入门套餐',
    'hr.benefit': '福利 / 待遇',
    'hr.benefitPlaceholder': '例如：社保、商业保险、弹性办公、学习津贴',
    'hr.benefitHint': '留空即可在候选人门户隐藏福利区块。',
    'hr.noBenefit': '未填写',
    'hr.customFieldsTitle': '候选人附加字段',
    'hr.customFieldsDesc': '添加标准字段以外的项目；会自动显示在 B 侧和 HR Sheet 汇总中。',
    'hr.customFieldNew': '新字段',
    'hr.customFieldLabel': '字段名称',
    'hr.customFieldType': '输入类型',
    'hr.customFieldTypeText': '文本输入',
    'hr.customFieldTypeNote': '长文本',
    'hr.customFieldRequired': '必填',
    'hr.customFieldAdd': '添加字段',
    'hr.customFieldRemove': '删除',
    'hr.customFieldsEmpty': '暂无附加字段。',
    'hr.cardboxReset': '重置显示',
    'hr.cardboxDesc': '候选人在 B 侧填写的所有卡片，包含显示状态、必填/选填、字段来源，以及与 HR Google Sheet 汇总的关联。',
    'hr.cardboxFootnote': '此处的更改会立即应用到 B 侧卡片与 Sheet 数据。简历必填规则仍以第 5 节为准。',
    'hr.cardboxCount': 'B 侧显示 {visible} / {total} 张卡片',
    'hr.cardboxVisible': '在 B 侧显示',
    'hr.cardboxHidden': '已隐藏',
    'hr.cardboxSourceStandard': 'HR 标准字段',
    'hr.cardboxSourceCustom': 'HR 自定义字段',
    'hr.cardboxSheetIncluded': '进入汇总与 Sheet',
    'hr.cardboxSheetExcluded': '不进入 Sheet',
    'hr.cardboxCvRule': '由第 5 节设置',
    'hr.cardboxShow': '显示',
    'hr.cardboxAtLeastOne': 'B 侧至少需要保留一张可见卡片。',
    'hr.cardboxResetDone': '卡片状态已恢复默认',
    'hr.additionalQuestions': '附加信息',
    'hr.customFieldInputPlaceholder': '请输入您的答案',
    'hr.customFieldNotePlaceholder': '请详细描述您的答案',
    'hr.colBenefit': '福利',
    'hr.colCustom': '附加字段',
    'hr.benefitPortal': '启用 B 侧申请门户',
    'hr.benefitCv': 'PDF 简历自动填充 + 高/中/低匹配',
    'hr.benefitSheet': '汇总至 1 个 HR Google Sheet',
    'hr.benefitMultiRole': '多职位与 HR 团队支持',
    'hr.benefitBusinessTemplate': 'Business 级招聘门户模板',
    'hr.benefitFilter': '更灵活的汇总与候选人筛选',
    'hr.noCandidate': '暂无候选人。分享门户链接即可开始接收申请。',
    'hr.colCandidate': '候选人',
    'hr.colMatch': '匹配度',
    'hr.colSelection': '筛选',
    'portal.eyebrow': '候选人门户',
    'portal.title': '您的申请，清晰且有条理。',
    'portal.progress': '申请进度',
    'portal.cvTitle': 'PDF 简历',
    'portal.cvDesc': '自动填写信息并给出简要匹配指标。',
    'portal.cvReady': '简历已读取',
    'portal.cvEmpty': '尚未上传简历',
    'portal.jumpCv': '填写简历',
    'portal.requirementLabel': '职位要求',
    'portal.matchLabel': '匹配度',
    'cv.levelHigh': '高',
    'cv.levelMedium': '中',
    'toast.hrTemplate': '模板已应用',
    'toast.hrStatus': '筛选状态已更新',
    'showcase.hrBuilderTitle': 'HR 构建器流程',
    'showcase.hrBuilderDesc': 'HR 要求会自动反映在候选人门户中。',
    'sync.eyebrow': 'Google 账号与表格同步',
    'sync.title': '您的数据，您自己的表格。',
    'sync.desc': '连接您的 Google 邮箱和 Google Sheet Webhook。每次提交都会以 JSON 直接发送到每位用户自己的表格。',
    'sync.googleEmail': 'Google 邮箱',
    'sync.sheetWebhook': '表格 Webhook',
    'sync.webhookUrl': 'Google Sheet Webhook 地址',
    'sync.gform': 'Google 表单链接',
    'sync.gformOptional': 'Google 表单链接（可选）',
    'sync.emailPlaceholder': 'name@email.com',
    'sync.webhookPlaceholder': 'https://script.google.com/macros/s/.../exec',
    'sync.gformPlaceholder': 'https://docs.google.com/forms/d/e/.../viewform',
    'sync.save': '保存连接',
    'sync.ownership': 'iziForm 不保存您的永久答案副本。表格始终位于您的账号和管控之下。',
    'sync.note': 'iziForm 不会索要 Google 密码。只需邮箱用于身份识别，以及您自己创建的 Apps Script Webhook 地址。',
    'sync.notConnected': '尚未连接',
    'sync.googleFilled': '邮箱已填写',
    'sync.googleEmpty': '未填写',
    'sync.sheetFilled': 'Webhook 已启用',
    'sync.sheetEmpty': '未填写',
    'sync.hintReady': '状态：Webhook 已启用 — 提交内容将发送到您的表格。',
    'sync.hintSimulated': '状态：Webhook 未填写 — 提交内容以本地模拟方式运行。',
    'sync.pasteActive': 'Webhook：已启用',
    'sync.pasteSimulated': 'Webhook：未填写（模拟模式）',
    'sync.headerConnected': 'Google 与表格已连接',
    'sync.headerEmailOnly': 'Google 邮箱已连接',
    'sync.headerSheetOnly': '表格已连接',
    'sync.sendSimulated': 'Webhook 未填写 — 数据保留为本地模拟。',
    'sync.sendOk': 'JSON 数据已发送到 Google Sheet Webhook。',
    'sync.sendHttpError': '发送到 Webhook 失败（HTTP {status}）。',
    'sync.sendUnreachable': '无法访问 Webhook — 请检查链接或 CORS。',
    'security.eyebrow': '数据安全',
    'security.title': '数据从开始到结束都归您所有。',
    'security.desc': '流程简单透明：回答从浏览器直接发送到您自己设置的 Google Sheet Webhook。',
    'security.directTitle': '直达您的表格',
    'security.directDesc': 'JSON 数据会发送到您的 Webhook 地址。iziForm 没有隐藏的中心化答案存储。',
    'security.controlTitle': '访问权限由您掌控',
    'security.controlDesc': '由您决定谁可以查看或修改表格，以及何时撤销访问。',
    'security.clearTitle': '透明且可审计',
    'security.clearDesc': '每次提交都会显示发送状态。如果 Webhook 为空，iziForm 会明确标注为本地模拟。',
    'security.strip': '所有分类遵循同一原则：邮箱用于身份，Webhook 用于存储，完整控制权在您手中。',
    'how.eyebrow': '使用方法',
    'how.title': '从想法到表格填充，只需三步。',
    'how.desc': '无需编程，无需重新设计。选择、连接、分享即可。',
    'how.step1Title': '选择分类',
    'how.step1Desc': '选择招聘、活动、订单、课程、问卷、项目简报，或创建自选分类。',
    'how.step2Title': '连接邮箱与表格',
    'how.step2Desc': '填写 Google 邮箱和 Apps Script Webhook，让答案进入您的账号。',
    'how.step3Title': '分享链接并查看表格',
    'how.step3Desc': '复制分类专属链接，直接在 Google Sheet 中查看每条回答。',
    'showcase.eyebrow': '案例展示',
    'showcase.title': '看到结果，而不只是想象。',
    'showcase.desc': '下方演示卡片会打开带有示例数据的真实表单流程。每个分类卡片也提供快速预览。',
    'showcase.demoLabel': '交互演示',
    'showcase.recruitTitle': '求职申请流程',
    'showcase.recruitDesc': '候选人信息、PDF 简历和匹配度指标。',
    'showcase.eventTitle': '活动报名',
    'showcase.eventDesc': '选择比赛距离并确认电子票。',
    'showcase.surveyTitle': '客户问卷',
    'showcase.surveyDesc': '评分、反馈与自动汇总。',
    'pricing.eyebrow': '价格',
    'pricing.title': '一次付费，立即使用。',
    'pricing.desc': '专注于一次性（Single Pass）套餐。数据仍会写入您自己的 Google Sheet 账号。',
    'pricing.compactNote': '一次性购买，无订阅 · 免费套餐仍可使用',
    'pricing.singlePass': '一次性',
    'pricing.promoBadge': 'PROMO NEW LAUNCHING',
    'pricing.perForm': '/表单',
    'pricing.perProject': '/项目',
    'pricing.freeRibbon': '起步套餐',
    'pricing.free': 'Free',
    'pricing.freeScope': '起步套餐',
    'pricing.freeNote': '用于体验和满足个人需求。',
    'pricing.freeBenefit1': '1 个使用中表单',
    'pricing.freeBenefit2': '每月 50 份回复',
    'pricing.freeBenefit3': '连接 Google Sheet',
    'pricing.freeBenefit4': 'iziForm 水印',
    'pricing.freeCta': '免费开始',
    'pricing.proRibbon': 'Pro',
    'pricing.pro': 'Pro',
    'pricing.proBenefit1': '无限回复',
    'pricing.proBenefit2': '移除 iziForm 水印',
    'pricing.proBenefit3': 'PDF 简历自动填充',
    'pricing.proBenefit4': '所有输入类型',
    'pricing.proBenefit5': '自定义品牌',
    'pricing.choosePro': '选择 Pro',
    'pricing.businessRibbon': 'Business',
    'pricing.business': 'Business',
    'pricing.businessBenefit1': '包含全部 PRO 功能 + AI 候选人匹配评分与排名',
    'pricing.businessBenefit2': '多管理员/团队访问',
    'pricing.businessBenefit3': '1 个项目内多表单',
    'pricing.businessBenefit4': '优先支持',
    'pricing.chooseBusiness': '选择 Business',
    'payment.aria': '选择支付方式和货币',
    'payment.idr': 'QRIS · IDR',
    'payment.usd': 'Global · USD',
    'checkout.eyebrow': '套餐结账',
    'checkout.title': '选择支付方式',
    'checkout.desc': '查看已选套餐及当前币种价格。您可以在此处切换支付方式。',
    'checkout.webDesc': '通过结账页面继续 Global / USD 支付。',
    'checkout.webCta': '前往网页支付 ($)',
    'toast.paymentMethod': '支付方式：{name}',
    'qris.paymentEyebrow': 'QRIS 支付',
    'qris.paymentTitle': '支付 iziForm 套餐',
    'qris.paymentDesc': '扫描 QRIS 码，按金额转账，然后确认。支付凭证为可选项，仅保存在您的浏览器中。',
    'qris.paymentSummary': '支付摘要',
    'qris.paymentMerchant': '商户 / QMID',
    'qris.merchantFallback': 'IZIFORM-QRIS',
    'qris.proofLabel': '支付凭证（可选）',
    'qris.transferHint': '如果尚未设置 QRIS，请先从“支持我们”菜单安装二维码图片。',
    'qris.confirm': '我已转账',
    'toast.qrisPaymentConfirmed': '已收到 {plan} 的确认。付款验证后请查看您的 Google Sheet。',
    'toast.qrisProofSaved': '已选择支付凭证：{name}',
    'toast.qrisMerchantSaved': 'QRIS 商户已保存。',
    'support.aria': '选择支持方式',
    'support.qris': 'QRIS (IDR)',
    'support.web': 'Web / Global ($)',
    'support.webDesc': '通过 Web / Global 页面使用银行卡或国际支付方式支持我们。',
    'support.webCta': '通过 Web 支持 ($)',
    'support.webHint': '该链接为结账占位链接，最终支付链接可用后即可替换。',
    'toast.supportMethod': '支持方式：{name}',
    'faq.eyebrow': '常见问题',
    'faq.title': '大家最常问的问题。',
    'faq.q1': '数据会保存在我自己的 Google Sheet 吗？',
    'faq.a1': '会。您自行设置 Google 邮箱和表格 Webhook。只有受访者提交时，iziForm 才会把 JSON 发送到该 Webhook。',
    'faq.q2': '需要懂编程吗？',
    'faq.a2': '不需要。选择分类，填写邮箱和 Webhook，然后分享链接。表单外观和问题流程已经准备好。',
    'faq.q3': '如果 Webhook 没填写怎么办？',
    'faq.a3': '表单仍可体验。在保存有效的 Google Sheet Webhook 之前，提交会标注为本地模拟。',
    'faq.q4': '可以更换主题和语言吗？',
    'faq.a4': '可以。使用页面顶部的控件切换主题配色，以及印尼语、英语或简体中文。',
    'faq.q5': 'Pro 和 Business 有什么区别？',
    'faq.a5': 'Pro 聚焦一个表单或一次批次。Business 面向团队与更大型活动，支持多表单、团队协作和整齐的运营管理。',
    'faq.q6': 'Free 真的仍然可用吗？',
    'faq.a6': '是的。Free 是免费起步套餐，为 Pro 或 Business 选择一次性套餐时它依然可用。',
    'faq.q7': 'PDF 简历是在我的设备上读取吗？',
    'faq.a7': '是的。文本提取会在浏览器中尝试完成。如果无法读取 PDF，iziForm 会给出明确提示，您仍可手动填写。',
    'sim.badge': '模拟模式',
    'sim.desc': '示例数据已预填。您可以修改，然后运行到结束。',
    'sim.finish': '运行到结束',
    'form.back': '返回仪表盘',
    'form.backShort': '仪表盘',
    'form.active': '当前表单：',
    'form.change': '更换分类',
    'form.bannerAlt': '品牌横幅',
    'form.ribbonTitle': '官方招聘门户',
    'form.ribbonStatus': 'PT Digital Nusantara Indonesia • 2026 人才招聘',
    'form.open': '开放报名',
    'form.verified': '已验证',
    'form.previous': '上一步',
    'form.required': '必填',
    'form.optional': '选填',
    'form.continue': '继续',
    'form.submit': '发送到 Google Sheet',
    'form.hint': '选择卡片或按',
    'form.questionCounter': '第 {current} 题，共 {total} 题',
    'form.ratingSelect': '请选择评分',
    'form.noDocument': '尚未选择文档',
    'form.linkPrefix': '链接：{value}',
    'footer.desc': '精致表单，数据保留在您的 Google Sheet。',
    'footer.copy': '© 2026 iziForm。为更人性化的表单而打造。',
    'modal.eyebrow': '账号与表格设置',
    'modal.title': '连接您的 Google Sheet',
    'modal.desc': '填写 Google 邮箱、表单链接和 Apps Script Webhook。提交数据会发送到此 Webhook。',
    'modal.save': '保存设置',
    'success.title': '表单提交成功！',
    'success.desc': '受访者的 JSON 数据会发送到您保存的 Google Sheet Webhook。如果 Webhook 为空，则状态为本地模拟。',
    'success.summary': '数据摘要：',
    'success.respondent': '受访者：{name} • 表单：{form}',
    'success.sending': '同步状态：正在准备数据...',
    'success.statusPrefix': '同步状态：',
    'success.sent': '已发送',
    'success.simulated': '模拟',
    'success.failed': '失败',
    'qris.supportButton': '支持我们',
    'qris.supportNote': '自愿支持，不影响任何功能。',
    'qris.eyebrow': '自愿支持',
    'qris.title': '支持我们',
    'qris.desc': '如果 iziForm 帮到了您，可以通过 QRIS 或 Web / Global 链接给予支持。完全自愿，不会影响任何功能。',
    'qris.empty': '尚未安装 QRIS。请上传您的二维码图片。',
    'qris.merchant': '商户名称 / QMID',
    'qris.merchantPlaceholder': '示例：IZIFORM-QRIS',
    'qris.image': '安装 QRIS 图片',
    'qris.hint': '图片仅在您的浏览器中预览，不会上传到服务器。',
    'cv.badge': '简历分析',
    'cv.title': '候选人匹配指标',
    'cv.subtitle': '依据所选职位标准生成的简要匹配摘要。',
    'cv.uploadPrompt': '上传 PDF 简历可自动填写信息并查看匹配分数。',
    'cv.unreadable': '无法将 PDF 读取为文本。请手动填写申请人信息。',
    'cv.scoreLabel': '匹配分数',
    'cv.levelExcellent': '非常匹配',
    'cv.levelGood': '比较匹配',
    'cv.levelFair': '部分相关',
    'cv.levelLow': '低',
    'cv.matchedLabel': '匹配关键词',
    'cv.noMatch': '尚未检测到关键词',
    'cv.fieldsFilled': '已自动填写',
    'cv.missingFields': '需手动补充',
    'cv.payloadLabel': '简历匹配度',
    'toast.invalidEmail': 'Google 邮箱格式无效。',
    'toast.invalidUrl': '链接必须以 http:// 或 https:// 开头。',
    'toast.settingsSavedWebhook': '设置已保存。Webhook 已启用 — 提交时会发送数据。',
    'toast.settingsSavedSim': '设置已保存。Webhook 为空 — 提交保持模拟状态。',
    'toast.backDashboard': '返回分类仪表盘',
    'toast.switchCategory': '已切换到分类：{name}',
    'toast.simulationStarted': '模拟模式已开启 — 示例数据已预填。',
    'toast.simulationFinished': '模拟完成。请查看发送摘要。',
    'toast.pdfReading': '正在浏览器中读取 PDF 简历文本...',
    'toast.pdfAutofilled': '简历已读取，申请人信息已自动填写。',
    'toast.pdfUnreadable': '无法读取 PDF 文本，请手动填写信息。',
    'toast.pdfError': 'PDF 处理失败，请手动填写信息。',
    'toast.cvRequired': '继续之前必须上传 PDF 简历。',
    'toast.required': '此项为必填项',
    'toast.requiredFieldsMissing': '提交前请填写所有必填项',
    'toast.hrFreeMode': '免费基础模式已启用 — 已选择中性模板。',
    'toast.theme': '界面主题已更改：{name}',
    'toast.font': '当前字体：{name}',
    'toast.language': '语言已更改：{name}',
    'toast.copied': '链接已复制：{url}',
    'toast.link': '链接：{url}',
    'toast.copyFailed': '无法自动复制，请使用显示的链接。'
  }
};

let advanceTimer = null;

const FONT_STACKS = {
  'Plus Jakarta Sans': "'Plus Jakarta Sans', sans-serif",
  'Outfit': "'Outfit', sans-serif",
  'Space Grotesk': "'Space Grotesk', sans-serif",
  'Playfair Display': "'Playfair Display', Georgia, serif"
};

const FONT_I18N_KEYS = {
  'Plus Jakarta Sans': 'font.jakarta',
  'Outfit': 'font.outfit',
  'Space Grotesk': 'font.space',
  'Playfair Display': 'font.playfair'
};

const LANGUAGE_LABELS = {
  id: 'Bahasa Indonesia',
  en: 'English',
  zh: '简体中文'
};

function t(key, vars) {
  const active = I18N[state.currentLanguage] || I18N.id;
  let value = active[key] !== undefined ? active[key] : (I18N.id[key] !== undefined ? I18N.id[key] : key);
  if (vars) {
    Object.entries(vars).forEach(([name, replacement]) => {
      value = value.split(`{${name}}`).join(String(replacement));
    });
  }
  return value;
}

function escapeHtml(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getPreset(key) {
  const base = state.presets[key] || state.presets.recruit;
  const locale = (PRESET_LOCALE[state.currentLanguage] || {})[key];
  let result = base;
  if (locale) {
    result = {
      ...base,
      ...locale,
      questions: base.questions.map((question, index) => ({
        ...question,
        ...(locale.questions && locale.questions[index] ? locale.questions[index] : {})
      }))
    };
  }
  if (key === 'recruit') {
    const requirement = state.hrRequirement || HR_TEMPLATES.tech[state.currentLanguage] || HR_TEMPLATES.tech.id;
    const buildQuestions = HR_QUESTION_COPY[state.currentLanguage] || HR_QUESTION_COPY.id;
    const fixedQuestions = buildQuestions(requirement);
    const customQuestions = getHrCustomFieldsRaw().map((field, index) => ({
      id: field.id,
      category: `${String(fixedQuestions.length + index + 1).padStart(2, '0')} • ${t('hr.additionalQuestions')}`,
      title: field.label,
      subtitle: field.required ? t('form.required') : t('form.optional'),
      type: field.type,
      placeholder: field.type === 'textarea' ? t('hr.customFieldNotePlaceholder') : t('hr.customFieldInputPlaceholder'),
      defaultValue: '',
      required: field.required
    }));
    const questionMap = new Map([...fixedQuestions, ...customQuestions].map((question) => [question.id, question]));
    const questions = getHrCardboxManifest()
      .filter((item) => item.visible)
      .map((item) => {
        const question = questionMap.get(item.id);
        return question ? { ...question, required: item.required } : null;
      })
      .filter(Boolean);
    result = {
      ...result,
      companyName: state.hrCompanyName || result.companyName,
      companyLogo: state.hrCompanyLogo,
      logo: getHrCompanyInitials(),
      subText: `Official Career Portal • ${requirement.position} • ${requirement.location}`,
      questions
    };
  }
  return result;
}

function applyFontStack() {
  const stack = FONT_STACKS[state.currentFont] || FONT_STACKS['Plus Jakarta Sans'];
  document.body.style.fontFamily = state.currentLanguage === 'zh' ? `'Noto Sans SC', ${stack}` : stack;
}

function updateDisplayTrigger() {
  const value = document.getElementById('display-trigger-value');
  if (value) value.textContent = t(`theme.${state.currentTheme}`);
}

function toggleDisplayMenu() {
  const menu = document.getElementById('display-menu');
  const button = document.getElementById('display-menu-btn');
  if (!menu || !button) return;
  const shouldOpen = menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !shouldOpen);
  button.setAttribute('aria-expanded', String(shouldOpen));
}

function closeDisplayMenu() {
  const menu = document.getElementById('display-menu');
  const button = document.getElementById('display-menu-btn');
  if (menu) menu.classList.add('hidden');
  if (button) button.setAttribute('aria-expanded', 'false');
}

function applyTranslations() {
  document.title = t('meta.title');
  document.documentElement.lang = state.currentLanguage === 'zh' ? 'zh-CN' : state.currentLanguage;
  document.documentElement.dataset.langTheme = state.currentLanguage;
  document.body.dataset.langTheme = state.currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = t(element.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.getAttribute('data-i18n-aria')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.setAttribute('title', t(element.getAttribute('data-i18n-title')));
  });

  ['id', 'en', 'zh'].forEach((lang) => {
    const button = document.getElementById(`lang-${lang}`);
    if (!button) return;
    const active = lang === state.currentLanguage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  applyFontStack();
}

function defaultPaymentMethodForLanguage(lang) {
  return lang === 'id' ? 'idr' : 'usd';
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  state.currentLanguage = lang;
  if (lang === 'zh') {
    state.paymentMethod = 'usd';
    state.paymentMethodManuallySet = false;
  } else if (!state.paymentMethodManuallySet) {
    state.paymentMethod = defaultPaymentMethodForLanguage(lang);
  }
  if (state.hrTemplateKey !== 'custom') applyHrTemplate(state.hrTemplateKey, true);
  applyTranslations();
  renderHrUiTemplateGallery();
  renderHrFontPairControl();
  renderHrUiPreview();
  renderHrCardboxOverview();
  updateDisplayTrigger();
  renderPaymentMethod();
  renderPricing();
  if (state.view === 'form') {
    renderActivePresetHeader();
    renderCurrentQuestion();
    updateFloatingDock();
  } else {
    renderDashboard();
  }
  renderSyncStatus();
  renderCvMatchPanel();
  showToast(t('toast.language', { name: LANGUAGE_LABELS[lang] }));
}

function seedSimulationAnswers(presetKey) {
  const p = getPreset(presetKey);
  p.questions.forEach((question) => {
    if (state.userResponses[question.id] !== undefined) return;
    if (question.type === 'choice') state.userResponses[question.id] = question.defaultIndex !== undefined ? question.defaultIndex : 0;
    else if (question.type === 'rating') state.userResponses[question.id] = question.defaultValue !== undefined ? question.defaultValue : 0;
    else if (question.type === 'file') state.userResponses[question.id] = { kind: 'link', name: '', size: 0, type: 'url', url: question.placeholder || '' };
    else state.userResponses[question.id] = question.defaultValue !== undefined ? question.defaultValue : '';
  });
}

function previewCategory(presetKey) {
  chooseCategory(presetKey, true);
}

function finishSimulation() {
  if (state.view !== 'form') return;
  seedSimulationAnswers(state.activePresetKey);
  const p = getPreset(state.activePresetKey);
  state.currentStepIndex = p.questions.length - 1;
  renderCurrentQuestion();
  showToast(t('toast.simulationFinished'));
  setTimeout(() => triggerFormSubmissionSuccess(), 140);
}

function setSupportMethod(method, silent = false) {
  const nextMethod = method === 'web' ? 'web' : 'qris';
  state.supportMethod = nextMethod;
  [
    ['qris', 'support-tab-qris', 'support-panel-qris'],
    ['web', 'support-tab-web', 'support-panel-web']
  ].forEach(([key, tabId, panelId]) => {
    const tab = document.getElementById(tabId);
    const panel = document.getElementById(panelId);
    const active = key === nextMethod;
    if (tab) {
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    }
    if (panel) panel.classList.toggle('hidden', !active);
  });
  if (!silent) showToast(t('toast.supportMethod', { name: t(nextMethod === 'web' ? 'support.web' : 'support.qris') }));
}

function openSupportModal() {
  clearAdvanceTimer();
  setSupportMethod(state.paymentMethod === 'usd' ? 'web' : 'qris', true);
  const modal = document.getElementById('qris-modal');
  if (modal) modal.classList.remove('hidden');
  updateQrisPreview();
}

function openQrisModal() {
  openSupportModal();
  setSupportMethod('qris', true);
}

function closeQrisModal() {
  const modal = document.getElementById('qris-modal');
  if (modal) modal.classList.add('hidden');
}

function updateQrisPreview(previewId = 'qris-preview') {
  const preview = document.getElementById(previewId);
  if (!preview) return;
  preview.textContent = '';
  if (state.qrisImageUrl) {
    const image = document.createElement('img');
    image.src = state.qrisImageUrl;
    image.alt = 'QRIS';
    preview.appendChild(image);
  } else {
    preview.textContent = t('qris.empty');
  }
}

function previewQrisImage(file) {
  if (!file) return;
  if (state.qrisImageUrl) URL.revokeObjectURL(state.qrisImageUrl);
  state.qrisImageUrl = URL.createObjectURL(file);
  updateQrisPreview();
  updateQrisPreview('payment-qris-preview');
}

async function extractPdfText(file) {
  const buffer = await file.arrayBuffer();
  const raw = new TextDecoder('latin1').decode(buffer);
  const streamRegex = /stream\r?\n([\s\S]*?)endstream/g;
  const streams = [];
  let streamMatch;
  while ((streamMatch = streamRegex.exec(raw)) !== null) {
    streams.push(streamMatch[1].replace(/^\r?\n/, '').replace(/\r?\n$/, ''));
  }

  const decoded = [];
  for (const stream of streams) {
    let content = stream;
    if (typeof DecompressionStream !== 'undefined' && /[\x00-\x08\x0e-\x1f]/.test(content)) {
      try {
        const bytes = new Uint8Array(content.length);
        for (let i = 0; i < content.length; i += 1) bytes[i] = content.charCodeAt(i) & 0xff;
        const decompressor = new DecompressionStream('deflate');
        const writer = decompressor.writable.getWriter();
        writer.write(bytes);
        writer.close();
        const output = await new Response(decompressor.readable).arrayBuffer();
        content = new TextDecoder('latin1').decode(output);
      } catch (err) {
        content = '';
      }
    }
    decoded.push(content);
  }

  const text = decoded.join('\n');
  const values = [];
  const stringRegex = /\((?:\\.|[^\\()])*\)/g;
  let stringMatch;
  while ((stringMatch = stringRegex.exec(text)) !== null) {
    values.push(stringMatch[0].slice(1, -1)
      .replace(/\\([()\\])/g, '$1')
      .replace(/\\n/g, ' ')
      .replace(/\\r/g, ' '));
  }
  return values.join(' ').replace(/\s+/g, ' ').trim();
}

function computeCandidateMatch(text) {
  const requirement = currentHrRequirement();
  const lower = text.toLowerCase();
  const skills = requirement.skills.split(/[,，、|]/).map((item) => item.trim().toLowerCase()).filter(Boolean);
  const matched = skills.filter((keyword) => lower.includes(keyword));
  const hasEmail = /[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(text);
  const hasPhone = /(?:\+?62|0)[\d\s-]{8,16}/.test(text);
  const yearMatch = text.match(/(\d{1,2})\+?\s*(?:tahun|years|年)/i);
  const foundYears = yearMatch ? Number(yearMatch[1]) : 0;
  const minYears = Number(requirement.minYears) || 0;
  const meetsYears = foundYears >= minYears;
  const hasEducation = /s1|bachelor|bootcamp|sertifikasi|certification|本科|训练营|证书/i.test(text);
  const score = Math.min(100, 20 + Math.min(matched.length * 12, 48) + (hasEmail ? 10 : 0) + (hasPhone ? 10 : 0) + (meetsYears ? 12 : 0) + (hasEducation ? 8 : 0));
  const threshold = requirement.matchThreshold === 'high' ? 80 : requirement.matchThreshold === 'low' ? 50 : 70;
  const levelKey = score >= threshold ? 'cv.levelHigh' : score >= threshold - 25 ? 'cv.levelMedium' : 'cv.levelLow';
  return { matched, score, level: t(levelKey), role: requirement.position };
}

function applyCvAutofill(text) {
  const nameMatch = text.match(/(?:nama|name)[\s:]*([A-Za-zÀ-ÿ' .]{3,60})/i);
  const emailMatch = text.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i);
  const phoneMatch = text.match(/(?:\+?62|0)[\d\s-]{8,16}/);
  const cityMatch = text.match(/(?:domisili|location|kota|city)[\s:]*([A-Za-zÀ-ÿ' .]{3,40})/i);
  const educationMatch = text.match(/(?:pendidikan|education|degree|学历)[\s:]*([A-Za-zÀ-ÿ' .0-9]{3,60})/i);
  const yearMatch = text.match(/(\d{1,2})\+?\s*(?:tahun|years|年)/i);
  const match = computeCandidateMatch(text);
  const filled = [];
  const setValue = (id, value) => {
    if (!value) return;
    state.userResponses[id] = String(value).trim().replace(/\s+/g, ' ');
    filled.push(id);
  };

  setValue('recruit_name', nameMatch && nameMatch[1]);
  setValue('recruit_email', emailMatch && emailMatch[0]);
  setValue('recruit_wa', phoneMatch && phoneMatch[0]);
  setValue('recruit_domisili', cityMatch && cityMatch[1]);
  setValue('recruit_education', educationMatch && educationMatch[1]);
  setValue('recruit_experience', yearMatch ? `${yearMatch[1]}+ tahun` : '');
  setValue('recruit_skills', match.matched.join(', '));

  state.cvParse = {
    text,
    filled,
    matched: match.matched,
    score: match.score,
    level: match.level,
    role: match.role,
    requirement: currentHrRequirement()
  };
  renderCurrentQuestion();
}

function renderCvMatchPanel() {
  const panel = document.getElementById('cv-match-panel');
  if (!panel) return;
  const hasUpload = Boolean(state.userResponses['recruit_cv']);
  if (state.activePresetKey !== 'recruit' || !hasUpload || !state.cvParse) {
    panel.classList.add('hidden');
    panel.innerHTML = '';
    return;
  }

  const matched = state.cvParse.matched && state.cvParse.matched.length
    ? state.cvParse.matched.join(' · ')
    : t('cv.noMatch');
  const filled = state.cvParse.filled && state.cvParse.filled.length
    ? state.cvParse.filled.join(', ')
    : '-';
  panel.innerHTML = `
    <span class="cv-badge">${escapeHtml(t('cv.badge'))}</span>
    <strong class="cv-title">${escapeHtml(t('cv.title'))}</strong>
    <span class="cv-subtitle">${escapeHtml(t('cv.subtitle'))}</span>
    <div class="cv-score-row">
      <span class="cv-score">${state.cvParse.score}</span>
      <span class="cv-score-label">${escapeHtml(t('cv.scoreLabel'))} · ${escapeHtml(state.cvParse.level)}</span>
    </div>
    <div class="cv-match-track"><span style="width: ${state.cvParse.score}%"></span></div>
    <p class="cv-meta"><b>${escapeHtml(t('cv.matchedLabel'))}:</b> ${escapeHtml(matched)}</p>
    <p class="cv-meta"><b>${escapeHtml(t('cv.fieldsFilled'))}:</b> ${escapeHtml(filled)}</p>
  `;
  panel.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  state.paymentMethod = defaultPaymentMethodForLanguage(state.currentLanguage);
  applyHrTemplate(state.hrTemplateKey, true);
  applyTranslations();
  updateDisplayTrigger();
  renderDashboard();
  renderSyncStatus();
  renderPaymentMethod();
  renderPricing();
  updateQrisPreview();
  setupKeyboardNavigation();
  document.addEventListener('click', (event) => {
    const control = document.getElementById('display-control');
    if (!control || control.contains(event.target)) return;
    closeDisplayMenu();
  });
});

function toggleViews() {
  const dashboard = document.getElementById('dashboard-view');
  const form = document.getElementById('form-view');
  const ribbon = document.getElementById('hr-career-ribbon');
  const portal = document.getElementById('candidate-portal');
  const stickyHeader = document.getElementById('candidate-company-sticky');
  const careerShell = document.getElementById('career-portal-shell');
  const formSideSwitcher = document.getElementById('recruit-side-switcher-form');
  const ribbonTitle = document.getElementById('hr-ribbon-title');
  const ribbonStatus = document.getElementById('hr-ribbon-status');
  const banner = document.getElementById('simulation-banner');
  const landingNav = document.getElementById('landing-nav');
  const dashboardButton = document.getElementById('header-dashboard-btn');
  const linkPill = document.getElementById('header-link-pill-wrap');
  const isForm = state.view === 'form';

  if (dashboard) dashboard.classList.toggle('hidden', state.view !== 'dashboard');
  if (form) form.classList.toggle('hidden', !isForm);
  if (banner) banner.classList.toggle('hidden', !(isForm && state.isSimulation));
  if (ribbon) ribbon.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (portal) portal.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (stickyHeader) stickyHeader.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (careerShell) careerShell.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (formSideSwitcher) formSideSwitcher.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (landingNav) landingNav.classList.toggle('hidden', isForm);
  if (dashboardButton) dashboardButton.classList.toggle('hidden', !isForm);
  if (linkPill) linkPill.classList.toggle('hidden', !isForm);
  if (ribbonTitle && isForm) ribbonTitle.textContent = t('form.ribbonTitle');
  if (ribbonStatus && isForm) ribbonStatus.textContent = getPreset(state.activePresetKey).subText;
  renderInfoPanels();
  renderHrSideSwitcher();
  renderCompanyIdentity();
  renderCandidatePortal();
}

function renderInfoPanels() {
  const hasPanel = Boolean(state.activePanel) && Object.prototype.hasOwnProperty.call(INFO_PANEL_IDS, state.activePanel);
  MAIN_SECTION_IDS.forEach((id) => {
    const section = document.getElementById(id);
    if (section) section.classList.toggle('hidden', hasPanel);
  });
  Object.entries(INFO_PANEL_IDS).forEach(([key, id]) => {
    const panel = document.getElementById(id);
    if (panel) panel.classList.toggle('hidden', key !== state.activePanel);
  });
}

function openInfoPanel(panelKey) {
  if (!Object.prototype.hasOwnProperty.call(INFO_PANEL_IDS, panelKey)) return;
  clearAdvanceTimer();
  if (panelKey === 'hrBuilder') {
    state.activePresetKey = 'recruit';
    state.hrActiveSide = 'a';
  }
  state.view = 'dashboard';
  state.activePanel = panelKey;
  toggleViews();
  if (panelKey === 'hrBuilder') renderHrBuilder();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeInfoPanel() {
  openMainSection('kategori');
}

function openMainSection(sectionId) {
  state.activePanel = '';
  renderInfoPanels();
  scrollToSection(sectionId);
}

function renderDashboard() {
  clearAdvanceTimer();
  state.hrActiveSide = 'a';
  state.view = 'dashboard';
  state.currentStepIndex = 0;
  state.userResponses = {};
  state.isSimulation = false;
  state.cvParse = null;
  document.body.dataset.preset = 'dashboard';

  const grid = document.getElementById('category-grid');
  if (grid) {
    grid.innerHTML = Object.keys(state.presets).map((key, index) => {
      const p = getPreset(key);
      return `
        <article class="category-card-wrap">
          <button type="button" onclick="chooseCategory('${key}', false)"
                  class="category-card" aria-label="${escapeHtml(t('categories.open'))}: ${escapeHtml(p.categoryLabel)}">
            <span class="category-index">${String(index + 1).padStart(2, '0')}</span>
            <span class="category-icon" aria-hidden="true">${escapeHtml(p.categoryIcon)}</span>
            <span class="category-card-copy">
              <span class="category-card-label">${escapeHtml(p.categoryLabel)}</span>
              <span class="category-card-desc">${escapeHtml(p.categoryDesc)}</span>
            </span>
            <span class="category-arrow" aria-hidden="true">&rarr;</span>
          </button>
          <button type="button" onclick="previewCategory('${key}')" class="simulate-btn">
            ${escapeHtml(t('categories.preview'))}
          </button>
          ${key === 'custom' ? `<button type="button" onclick="openInfoPanel('custom')" class="custom-options-btn">${escapeHtml(t('custom.options'))}</button>` : ''}
          ${key === 'recruit' ? `<button type="button" onclick="openRecruitWorkspace()" class="custom-options-btn">${escapeHtml(t('hr.openWorkspace'))}</button>` : ''}
        </article>
      `;
    }).join('');
  }

  toggleViews();
  renderSyncStatus();
  renderCvMatchPanel();

  const headerPill = document.getElementById('header-link-pill');
  if (headerPill) headerPill.textContent = 'iziform.app';
}

function scrollToSection(sectionId) {
  if (state.activePanel) {
    state.activePanel = '';
    renderInfoPanels();
  }
  const target = document.getElementById(sectionId);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPaymentMethod() {
  [
    ['payment-idr-btn', 'checkout-idr-btn', 'custom-idr-btn', 'idr'],
    ['payment-usd-btn', 'checkout-usd-btn', 'custom-usd-btn', 'usd']
  ].forEach(([headerId, checkoutId, customId, method]) => {
    const active = method === state.paymentMethod;
    [headerId, checkoutId, customId].forEach((id) => {
      const button = document.getElementById(id);
      if (!button) return;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  });
  renderCustomTiers();
  renderHrPricing();
}

function setPaymentMethod(method, manual = true) {
  const nextMethod = method === 'usd' ? 'usd' : 'idr';
  state.paymentMethod = nextMethod;
  if (manual) state.paymentMethodManuallySet = true;
  renderPaymentMethod();
  renderPricing();
  renderCheckoutPayment();
  showToast(t('toast.paymentMethod', { name: t(nextMethod === 'usd' ? 'payment.usd' : 'payment.idr') }));
}

function setCheckoutPaymentMethod(method) {
  setPaymentMethod(method, true);
}

function renderCustomTiers() {
  Object.values(CUSTOM_PRICING).forEach((plan) => {
    const element = document.getElementById(plan.id);
    if (element) element.textContent = plan[state.paymentMethod];
  });
  const lightLoad = document.getElementById('custom-light-load');
  if (lightLoad) lightLoad.textContent = t('custom.loadLight');
  const complexLoad = document.getElementById('custom-complex-load');
  if (complexLoad) complexLoad.textContent = t('custom.loadComplex');
}

function currentHrRequirement() {
  return state.hrRequirement || HR_TEMPLATES.tech[state.currentLanguage] || HR_TEMPLATES.tech.id;
}

function cloneHrRequirement(source = currentHrRequirement()) {
  const base = source || {};
  return {
    ...base,
    customFields: (Array.isArray(base.customFields) ? base.customFields : []).map((field) => ({ ...field }))
  };
}

function getHrCustomFieldsRaw() {
  const fields = currentHrRequirement().customFields;
  if (!Array.isArray(fields)) return [];
  return fields
    .filter((field) => field && typeof field.label === 'string' && field.label.trim() && field.id)
    .map((field) => ({
      id: String(field.id),
      label: field.label.trim(),
      type: field.type === 'textarea' ? 'textarea' : 'text',
      required: Boolean(field.required)
    }));
}

function getHrCardboxSetting(id) {
  return state.hrCardboxSettings[id] || {};
}

function isHrCardboxVisible(id) {
  return getHrCardboxSetting(id).visible !== false;
}

function getHrCardboxManifest() {
  const requirement = currentHrRequirement();
  const buildQuestions = HR_QUESTION_COPY[state.currentLanguage] || HR_QUESTION_COPY.id;
  const fixed = buildQuestions(requirement).map((question) => ({
    id: question.id,
    category: question.category,
    title: question.title,
    source: 'standard',
    required: question.id === 'recruit_cv' ? requirement.cvRequired !== false : Boolean(getHrCardboxSetting(question.id).required),
    customIndex: -1
  }));
  const custom = getHrCustomFieldsRaw().map((field, index) => ({
    id: field.id,
    category: `${String(fixed.length + index + 1).padStart(2, '0')} • ${t('hr.additionalQuestions')}`,
    title: field.label,
    source: 'custom',
    required: field.required,
    customIndex: index
  }));
  return [...fixed, ...custom].map((item) => ({ ...item, visible: isHrCardboxVisible(item.id) }));
}

function getHrCustomFields() {
  return getHrCustomFieldsRaw().filter((field) => isHrCardboxVisible(field.id));
}

function renderHrCardboxOverview() {
  const list = document.getElementById('hr-cardbox-list');
  if (!list) return;
  const manifest = getHrCardboxManifest();
  const visibleCount = manifest.filter((item) => item.visible).length;
  const summary = document.getElementById('hr-cardbox-summary');
  if (summary) {
    summary.innerHTML = `<span class="hr-cardbox-summary-pill">${escapeHtml(t('hr.cardboxCount', { visible: visibleCount, total: manifest.length }))}</span>`;
  }
  list.innerHTML = manifest.map((item) => {
    const requiredLabel = item.required ? t('form.required') : t('form.optional');
    const statusLabel = item.visible ? t('hr.cardboxVisible') : t('hr.cardboxHidden');
    const sourceLabel = item.source === 'custom' ? t('hr.cardboxSourceCustom') : t('hr.cardboxSourceStandard');
    const sheetLabel = item.visible ? t('hr.cardboxSheetIncluded') : t('hr.cardboxSheetExcluded');
    const cvLocked = item.id === 'recruit_cv';
    const visibleChecked = item.visible ? ' checked' : '';
    const requiredChecked = item.required ? ' checked' : '';
    return `
      <div class="hr-cardbox-row ${item.visible ? '' : 'is-hidden'}">
        <div class="hr-cardbox-main">
          <b>${escapeHtml(item.title)}</b>
          <small>${escapeHtml(item.category)} · ${escapeHtml(sourceLabel)}</small>
        </div>
        <div class="hr-cardbox-tags">
          <span class="hr-cardbox-tag ${item.visible ? 'active' : 'muted'}">${escapeHtml(statusLabel)}</span>
          <span class="hr-cardbox-tag">${escapeHtml(requiredLabel)}${cvLocked ? ` · ${escapeHtml(t('hr.cardboxCvRule'))}` : ''}</span>
          <span class="hr-cardbox-tag ${item.visible ? '' : 'muted'}">${escapeHtml(sheetLabel)}</span>
        </div>
        <div class="hr-cardbox-controls">
          <label class="hr-cardbox-control"><input type="checkbox"${visibleChecked} onchange="setHrCardboxVisible('${escapeHtml(item.id)}', this.checked)"> <span>${escapeHtml(t('hr.cardboxShow'))}</span></label>
          <label class="hr-cardbox-control"><input type="checkbox"${requiredChecked}${cvLocked ? ' disabled' : ''} onchange="setHrCardboxRequired('${escapeHtml(item.id)}', this.checked)"> <span>${escapeHtml(t('form.required'))}</span></label>
        </div>
      </div>`;
  }).join('');
}

function setHrCardboxVisible(id, visible) {
  if (!visible) {
    const manifest = getHrCardboxManifest();
    if (manifest.filter((item) => item.visible).length <= 1) {
      renderHrCardboxOverview();
      showToast(t('hr.cardboxAtLeastOne'));
      return;
    }
  }
  if (!state.hrCardboxSettings[id]) state.hrCardboxSettings[id] = {};
  state.hrCardboxSettings[id].visible = Boolean(visible);
  refreshHrRequirementViews();
  updateFloatingDock();
}

function setHrCardboxRequired(id, required) {
  const item = getHrCardboxManifest().find((entry) => entry.id === id);
  if (!item || item.customIndex < 0) {
    if (!state.hrCardboxSettings[id]) state.hrCardboxSettings[id] = {};
    state.hrCardboxSettings[id].required = Boolean(required);
  } else if (state.hrRequirement && Array.isArray(state.hrRequirement.customFields)) {
    const field = state.hrRequirement.customFields[item.customIndex];
    if (field) field.required = Boolean(required);
    renderHrCustomFieldEditor();
  }
  refreshHrRequirementViews();
}

function resetHrCardboxSettings() {
  state.hrCardboxSettings = {};
  renderHrCustomFieldEditor();
  refreshHrRequirementViews();
  updateFloatingDock();
  showToast(t('hr.cardboxResetDone'));
}

function renderBenefitDisplays() {
  const benefit = String(currentHrRequirement().benefit || '').trim();
  document.querySelectorAll('[data-hr-benefit-value]').forEach((node) => {
    node.textContent = benefit || t('hr.noBenefit');
  });
  document.querySelectorAll('[data-hr-benefit-wrap]').forEach((node) => {
    node.classList.toggle('hidden', !benefit);
  });
}

function getHrCompanyInitials(name = state.hrCompanyName) {
  const words = String(name || '').trim().split(/\s+/).filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]).join('').toUpperCase();
  return initials || 'iF';
}

function setCompanyLogoMarkup(element, logo, name) {
  if (!element) return;
  if (logo) {
    element.innerHTML = `<img src="${escapeHtml(logo)}" alt="${escapeHtml(name || 'Company logo')}">`;
    return;
  }
  element.textContent = getHrCompanyInitials(name);
}

function updateHrCompanyName(value) {
  state.hrCompanyName = String(value || '').trim() || state.hrCompanyName;
  renderHrLogoPreview();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') {
    renderActivePresetHeader();
    renderCurrentQuestion();
  }
}

function setHrCompanyLogo(value) {
  state.hrCompanyLogo = String(value || '');
  renderHrLogoPreview();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') renderActivePresetHeader();
}

function handleHrLogoInput(file) {
  if (!file || !/^image\//.test(file.type)) return;
  const reader = new FileReader();
  reader.onload = () => setHrCompanyLogo(reader.result);
  reader.readAsDataURL(file);
}

function clearHrLogo() {
  setHrCompanyLogo('');
  const input = document.getElementById('hr-logo-input');
  if (input) input.value = '';
}

function renderHrLogoPreview() {
  setCompanyLogoMarkup(document.getElementById('hr-logo-preview'), state.hrCompanyLogo, state.hrCompanyName);
  const clearButton = document.getElementById('hr-logo-clear');
  if (clearButton) clearButton.classList.toggle('hidden', !state.hrCompanyLogo);
}

function updateHrCompanyField(field, value) {
  if (!['industry', 'description', 'website'].includes(field)) return;
  state.hrCompanyProfile[field] = String(value || '');
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') renderActivePresetHeader();
}

function setHrCompanyBanner(value) {
  state.hrCompanyBanner = String(value || '');
  renderHrBannerPreview();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') renderActivePresetHeader();
}

function handleHrBannerInput(file) {
  if (!file || !/^image\//.test(file.type)) return;
  const reader = new FileReader();
  reader.onload = () => setHrCompanyBanner(reader.result);
  reader.readAsDataURL(file);
}

function clearHrBanner() {
  setHrCompanyBanner('');
  const input = document.getElementById('hr-banner-input');
  if (input) input.value = '';
}

function renderHrBannerPreview() {
  const preview = document.getElementById('hr-banner-preview');
  if (preview) preview.style.backgroundImage = state.hrCompanyBanner ? `url("${state.hrCompanyBanner}")` : '';
  const clearButton = document.getElementById('hr-banner-clear');
  if (clearButton) clearButton.classList.toggle('hidden', !state.hrCompanyBanner);
}

function applyCompanyPreset(presetKey) {
  const preset = HR_COMPANY_PRESETS[presetKey] || HR_COMPANY_PRESETS.nusantara;
  state.hrCompanyName = preset.name;
  state.hrCompanyProfile = {
    industry: preset.industry[state.currentLanguage] || preset.industry.id,
    description: preset.description[state.currentLanguage] || preset.description.id,
    website: preset.website
  };
  state.hrCompanyLogo = '';
  state.hrCompanyBanner = '';
  renderHrBuilder();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') renderActivePresetHeader();
}

function getHrUiTemplate() {
  return HR_UI_TEMPLATES.find((item) => item.key === state.hrUiTemplate) || HR_UI_TEMPLATES[0];
}

function getHrFontPair() {
  const template = getHrUiTemplate();
  if (template.tier === 'free') return template.fontPair;
  const override = state.hrFontPairOverrides[template.key];
  return HR_FONT_PAIRS[override] ? override : template.fontPair;
}

function applyHrUiTemplate(isRecruitForm = false) {
  const formView = document.getElementById('form-view');
  const shell = document.getElementById('career-portal-shell');
  const sticky = document.getElementById('candidate-company-sticky');
  const template = getHrUiTemplate();
  const theme = template.theme;
  const ornament = template.ornament;
  const fontPair = getHrFontPair();
  const nodes = [formView, shell, sticky].filter(Boolean);
  nodes.forEach((node) => {
    if (isRecruitForm) {
      node.dataset.hrUiTemplate = theme;
      node.dataset.hrUiTier = template.tier;
      node.dataset.ornament = ornament;
      node.dataset.fontPair = fontPair;
    } else {
      node.removeAttribute('data-hr-ui-template');
      node.removeAttribute('data-hr-ui-tier');
      node.removeAttribute('data-ornament');
      node.removeAttribute('data-font-pair');
    }
  });
}

function renderHrFontPairControl() {
  const select = document.getElementById('hr-font-pair-select');
  if (!select) return;
  const template = getHrUiTemplate();
  const locked = template.tier === 'free';
  const value = locked ? 'template' : (state.hrFontPairOverrides[template.key] || 'template');
  select.disabled = locked;
  select.value = value;
  const hint = document.getElementById('hr-font-pair-hint');
  if (hint) {
    const pairLabel = value === 'template' ? t('hr.fontPairTemplate') : t(`hr.fontPair${value.charAt(0).toUpperCase()}${value.slice(1)}`);
    hint.textContent = `${getHrTemplateLabel(template)} · ${locked ? t('hr.fontPairLocked') : pairLabel}`;
  }
}

function setHrFontPair(value) {
  const template = getHrUiTemplate();
  if (template.tier === 'free') return;
  if (value !== 'template' && !HR_FONT_PAIR_KEYS.includes(value)) return;
  if (value === 'template') delete state.hrFontPairOverrides[template.key];
  else state.hrFontPairOverrides[template.key] = value;
  renderHrFontPairControl();
  applyHrUiTemplate(state.view === 'form' && state.activePresetKey === 'recruit');
  renderHrUiPreview();
  const select = document.getElementById('hr-font-pair-select');
  const selectedLabel = select && select.selectedOptions[0] ? select.selectedOptions[0].textContent : value;
  showToast(`${t('hr.fontPairLabel')}: ${selectedLabel}`);
}

function getHrTemplateLabel(template) {
  return template.label || (template.labelKey ? t(template.labelKey) : template.key);
}

function selectHrUiTemplate(templateKey) {
  const template = HR_UI_TEMPLATES.find((item) => item.key === templateKey);
  if (!template) return;
  state.hrUiTemplate = template.key;
  state.hrUiTier = template.tier;
  renderHrUiTemplateGallery();
  renderHrFontPairControl();
  renderHrUiPreview();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') renderActivePresetHeader();
  renderCandidatePortal();
  showToast(`${t('toast.hrTemplate')}: ${getHrTemplateLabel(template)}`);
}

function activateHrFreeMode() {
  setHrActiveSide('a', true);
  delete state.hrFontPairOverrides.clean01;
  selectHrUiTemplate('clean01');
  const target = document.getElementById('hr-ui-template-select') || document.getElementById('hr-ui-preview');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast(t('toast.hrFreeMode'));
}

function renderHrUiTemplateGallery() {
  const select = document.getElementById('hr-ui-template-select');
  if (!select) return;
  select.innerHTML = ['free', 'pro', 'business'].map((tier) => {
    const options = HR_UI_TEMPLATES.filter((template) => template.tier === tier).map((template) => {
      return `<option value="${template.key}" data-template="${template.theme}">${escapeHtml(getHrTemplateLabel(template))}</option>`;
    }).join('');
    return `<optgroup label="${escapeHtml(t(`pricing.${tier}`))}">${options}</optgroup>`;
  }).join('');
  select.value = state.hrUiTemplate;
}

function renderHrUiPreview() {
  const template = getHrUiTemplate();
  const preview = document.getElementById('hr-ui-preview');
  if (preview) {
    preview.dataset.template = template.theme;
    preview.dataset.ornament = template.ornament;
    preview.dataset.fontPair = getHrFontPair();
  }
  setTextById('hr-ui-preview-name', getHrTemplateLabel(template));
  setTextById('hr-ui-preview-tier', t(`pricing.${template.tier}`));
  renderHrTemplatePreviewStage();
}

function renderHrTemplatePreviewStage() {
  const stage = document.getElementById('hr-template-preview-stage');
  if (!stage) return;
  const template = getHrUiTemplate();
  const r = currentHrRequirement();
  const companyName = state.hrCompanyName || getPreset('recruit').companyName;
  stage.dataset.template = template.theme;
  stage.dataset.ornament = template.ornament;
  stage.dataset.fontPair = getHrFontPair();
  stage.innerHTML = `
    <div class="hr-template-stage-hero">
      <span class="hr-template-stage-logo">iF</span>
      <span class="hr-template-stage-hero-copy"><b>${escapeHtml(companyName)}</b><i>${escapeHtml(r.position)}</i></span>
      <span class="hr-template-stage-badge">${escapeHtml(t('portal.applyNow'))}</span>
    </div>
    <div class="hr-template-stage-grid">
      <article>
        <span>${escapeHtml(t('portal.jobOverview'))}</span>
        <b>${escapeHtml(r.position)}</b>
        <i>${escapeHtml(r.jobType)} · ${escapeHtml(r.location)}</i>
      </article>
      <article>
        <span>${escapeHtml(t('portal.requirements'))}</span>
        <b>${escapeHtml(r.skills)}</b>
        <i>${escapeHtml(t('hr.minYears'))}: ${escapeHtml(r.minYears)}</i>
      </article>
    </div>
    <div class="hr-template-stage-form">
      <span>${escapeHtml(t('portal.applicationPanel'))}</span>
      <b>${escapeHtml(t('portal.title'))}</b>
    </div>
  `;
  setTextById('hr-template-preview-title', getHrTemplateLabel(template));
  setTextById('hr-template-preview-tier', t(`pricing.${template.tier}`));
}

function openHrTemplatePreviewModal() {
  renderHrTemplatePreviewStage();
  const modal = document.getElementById('hr-template-preview-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeHrTemplatePreviewModal() {
  const modal = document.getElementById('hr-template-preview-modal');
  if (modal) modal.classList.add('hidden');
}

function applyUiTemplateToCandidate() {
  closeHrTemplatePreviewModal();
  setHrActiveSide('b', true);
  renderCandidatePortal();
  const portal = document.getElementById('candidate-portal');
  if (portal) portal.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast(`${t('toast.hrTemplate')}: ${getHrTemplateLabel(getHrUiTemplate())}`);
}

function setTextById(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function renderCompanyIdentity() {
  const r = currentHrRequirement();
  const profile = state.hrCompanyProfile;
  const name = state.hrCompanyName || getPreset('recruit').companyName;
  const setText = (id, value) => setTextById(id, value);
  setCompanyLogoMarkup(document.getElementById('candidate-company-logo'), state.hrCompanyLogo, name);
  setCompanyLogoMarkup(document.getElementById('company-logo-box'), state.hrCompanyLogo, name);
  setCompanyLogoMarkup(document.getElementById('career-company-logo'), state.hrCompanyLogo, name);
  setText('candidate-company-name', name);
  setText('candidate-company-position', r.position);
  setText('candidate-company-location', r.location);
  setText('company-name-text', name);
  setText('hr-ribbon-status', `${name} • ${r.position} • ${r.location}`);
  setText('showcase-company-name', name);
  setText('showcase-industry', profile.industry);
  setText('showcase-description', profile.description);
  setText('showcase-website', profile.website);
  setText('showcase-role-summary', r.roleSummary);
  setText('showcase-responsibilities', r.responsibilities);
  setText('showcase-job-type', r.jobType);
  setText('showcase-must-have', r.mustHave);
  setText('showcase-qualification', r.qualification);
  setText('showcase-certification', r.certification);
  setText('showcase-plus-points', r.plusPoints);
  setText('showcase-match-threshold', t(`cv.level${r.matchThreshold === 'high' ? 'High' : r.matchThreshold === 'low' ? 'Low' : 'Medium'}`));
  const banner = document.getElementById('career-company-banner');
  if (banner) banner.style.backgroundImage = state.hrCompanyBanner ? `url("${state.hrCompanyBanner}")` : '';
}

function renderHrSideSwitcher() {
  const isSideA = state.hrActiveSide !== 'b';
  [
    ['hr-side-a-btn', 'form-side-a-btn', true],
    ['hr-side-b-btn', 'form-side-b-btn', false]
  ].forEach(([panelId, formId, isA]) => {
    const active = isA ? isSideA : !isSideA;
    [panelId, formId].forEach((id) => {
      const button = document.getElementById(id);
      if (!button) return;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
  });
}

function openRecruitWorkspace() {
  clearAdvanceTimer();
  state.activePresetKey = 'recruit';
  state.currentStepIndex = 0;
  state.userResponses = {};
  state.isSimulation = false;
  state.cvParse = null;
  setHrActiveSide('a');
}

function setHrActiveSide(side, silent = false) {
  state.hrActiveSide = side === 'b' ? 'b' : 'a';
  state.activePresetKey = 'recruit';
  clearAdvanceTimer();
  if (state.hrActiveSide === 'a') {
    state.view = 'dashboard';
    state.activePanel = 'hrBuilder';
    toggleViews();
    renderHrBuilder();
  } else {
    state.view = 'form';
    state.activePanel = '';
    toggleViews();
    renderActivePresetHeader();
    renderCurrentQuestion();
  }
  renderHrSideSwitcher();
  if (!silent) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyHrTemplate(templateKey, silent = false) {
  const template = HR_TEMPLATES[templateKey] || HR_TEMPLATES.tech;
  state.hrTemplateKey = template === HR_TEMPLATES.tech ? 'tech' : template === HR_TEMPLATES.people ? 'people' : template === HR_TEMPLATES.growth ? 'growth' : 'custom';
  state.hrRequirement = cloneHrRequirement(template[state.currentLanguage] || template.id);
  renderHrBuilder();
  if (state.view === 'form' && state.activePresetKey === 'recruit') {
    renderActivePresetHeader();
    renderCurrentQuestion();
  }
  if (!silent) {
    const labels = { tech: 'hr.templateTech', people: 'hr.templatePeople', growth: 'hr.templateGrowth', custom: 'hr.templateCustom' };
    showToast(`${t('toast.hrTemplate')}: ${t(labels[state.hrTemplateKey])}`);
  }
}

function updateHrRequirement(field, value) {
  if (!state.hrRequirement) return;
  state.hrRequirement[field] = value;
  state.hrTemplateKey = 'custom';
  renderHrTemplateButtons();
  renderHrPreview();
  renderBenefitDisplays();
  renderHrCardboxOverview();
  renderHrPricing();
  renderHrRecap();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') {
    renderActivePresetHeader();
    renderCurrentQuestion();
  }
}

function refreshHrRequirementViews() {
  renderHrTemplateButtons();
  renderHrPreview();
  renderBenefitDisplays();
  renderHrCardboxOverview();
  renderHrRecap();
  renderCompanyIdentity();
  if (state.view === 'form' && state.activePresetKey === 'recruit') {
    renderActivePresetHeader();
    renderCurrentQuestion();
  }
}

function renderHrCustomFieldEditor() {
  const list = document.getElementById('hr-custom-fields-list');
  if (!list) return;
  const fields = getHrCustomFieldsRaw();
  if (!fields.length) {
    list.innerHTML = `<p class="hr-custom-fields-empty">${escapeHtml(t('hr.customFieldsEmpty'))}</p>`;
    return;
  }
  list.innerHTML = fields.map((field, index) => {
    const selectedText = field.type === 'text' ? ' selected' : '';
    const selectedNote = field.type === 'textarea' ? ' selected' : '';
    const checked = field.required ? ' checked' : '';
    return `
      <div class="hr-custom-field-row">
        <label class="hr-form-field">
          <span data-i18n="hr.customFieldLabel">Nama label kolom</span>
          <input type="text" value="${escapeHtml(field.label)}" oninput="updateHrCustomField(${index}, 'label', this.value)">
        </label>
        <label class="hr-form-field">
          <span data-i18n="hr.customFieldType">Jenis input</span>
          <select onchange="updateHrCustomField(${index}, 'type', this.value)">
            <option value="text"${selectedText} data-i18n="hr.customFieldTypeText">Input teks</option>
            <option value="textarea"${selectedNote} data-i18n="hr.customFieldTypeNote">Catatan panjang</option>
          </select>
        </label>
        <label class="hr-form-field hr-check-field">
          <span data-i18n="hr.customFieldRequired">Wajib diisi</span>
          <input type="checkbox"${checked} onchange="updateHrCustomField(${index}, 'required', this.checked)">
        </label>
        <button type="button" class="hr-custom-field-remove" onclick="removeHrCustomField(${index})" aria-label="Remove field"><span aria-hidden="true">&times;</span> <span data-i18n="hr.customFieldRemove">Hapus</span></button>
      </div>`;
  }).join('');
  applyTranslations();
}

function addHrCustomField() {
  if (!state.hrRequirement) return;
  if (!Array.isArray(state.hrRequirement.customFields)) state.hrRequirement.customFields = [];
  const index = state.hrRequirement.customFields.length + 1;
  const id = `hr_custom_${Date.now().toString(36)}_${index}`;
  state.hrRequirement.customFields.push({
    id,
    label: `${t('hr.customFieldNew')} ${index}`,
    type: 'text',
    required: false
  });
  state.hrTemplateKey = 'custom';
  state.userResponses[id] = '';
  renderHrCustomFieldEditor();
  refreshHrRequirementViews();
}

function updateHrCustomField(index, field, value) {
  if (!state.hrRequirement || !Array.isArray(state.hrRequirement.customFields)) return;
  const target = state.hrRequirement.customFields[index];
  if (!target || !(field in target)) return;
  target[field] = value;
  state.hrTemplateKey = 'custom';
  refreshHrRequirementViews();
}

function removeHrCustomField(index) {
  if (!state.hrRequirement || !Array.isArray(state.hrRequirement.customFields)) return;
  const [removed] = state.hrRequirement.customFields.splice(index, 1);
  if (removed && removed.id) delete state.userResponses[removed.id];
  state.hrTemplateKey = 'custom';
  renderHrCustomFieldEditor();
  refreshHrRequirementViews();
}

function renderHrTemplateButtons() {
  const labels = { tech: 'hr.templateTech', people: 'hr.templatePeople', growth: 'hr.templateGrowth', custom: 'hr.templateCustom' };
  Object.keys(labels).forEach((key) => {
    const button = document.getElementById(`hr-template-${key}`);
    if (!button) return;
    button.textContent = t(labels[key]);
    button.classList.toggle('active', key === state.hrTemplateKey);
  });
}

function renderHrPreview() {
  const r = currentHrRequirement();
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };
  setText('hr-preview-position', r.position);
  setText('hr-preview-location', r.location);
  setText('hr-preview-years', r.minYears);
  setText('hr-preview-skills', r.skills);
  setText('hr-preview-education', r.education);
  setText('hr-preview-salary', r.salary);
  setText('hr-preview-notice', r.noticePeriod);
  setText('hr-preview-screening', r.screening);
  setText('hr-preview-benefit', r.benefit || t('hr.noBenefit'));
  renderBenefitDisplays();
}

function renderHrPricing() {
  const data = HR_PRICING[state.paymentMethod] || HR_PRICING.idr;
  const prices = [
    ['hr-price-old', data.old],
    ['hr-price-new', data.price],
    ['hr-business-price-old', data.businessOld],
    ['hr-business-price-new', data.businessPrice]
  ];
  prices.forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function renderHrBuilder() {
  const r = currentHrRequirement();
  const fields = [
    ['hr-position-input', 'position'],
    ['hr-location-input', 'location'],
    ['hr-min-years-input', 'minYears'],
    ['hr-salary-input', 'salary'],
    ['hr-notice-input', 'noticePeriod'],
    ['hr-skills-input', 'skills'],
    ['hr-education-input', 'education'],
    ['hr-screening-input', 'screening'],
    ['hr-role-summary-input', 'roleSummary'],
    ['hr-responsibilities-input', 'responsibilities'],
    ['hr-must-have-input', 'mustHave'],
    ['hr-qualification-input', 'qualification'],
    ['hr-certification-input', 'certification'],
    ['hr-plus-points-input', 'plusPoints'],
    ['hr-benefit-input', 'benefit']
  ];
  fields.forEach(([id, key]) => {
    const element = document.getElementById(id);
    if (element) element.value = r[key] || '';
  });
  const companyInput = document.getElementById('hr-company-input');
  if (companyInput) companyInput.value = state.hrCompanyName;
  [
    ['hr-industry-input', 'industry'],
    ['hr-description-input', 'description'],
    ['hr-website-input', 'website']
  ].forEach(([id, key]) => {
    const element = document.getElementById(id);
    if (element) element.value = state.hrCompanyProfile[key] || '';
  });
  const jobType = document.getElementById('hr-job-type-input');
  if (jobType) jobType.value = r.jobType || 'Full-time';
  const matchThreshold = document.getElementById('hr-match-threshold-input');
  if (matchThreshold) matchThreshold.value = r.matchThreshold || 'medium';
  const cvRequired = document.getElementById('hr-cv-required-input');
  if (cvRequired) cvRequired.checked = r.cvRequired !== false;
  renderHrLogoPreview();
  renderHrBannerPreview();
  renderHrTemplateButtons();
  renderHrUiTemplateGallery();
  renderHrFontPairControl();
  renderHrUiPreview();
  renderHrPreview();
  renderHrCustomFieldEditor();
  renderHrCardboxOverview();
  renderHrPricing();
  renderHrStatusList();
  renderHrRecap();
}

function renderHrStatusList() {
  const list = document.getElementById('hr-status-list');
  if (!list) return;
  list.innerHTML = HR_STATUS_KEYS.map((key) => `
    <button type="button" onclick="setHrSelectionStatus('${key}')" class="hr-status-pill ${key === state.hrSelectionStatus ? 'active' : ''}">${escapeHtml(t(`hr.status.${key}`))}</button>
  `).join('');
}

function setHrSelectionStatus(status) {
  if (!HR_STATUS_KEYS.includes(status)) return;
  state.hrSelectionStatus = status;
  if (state.hrLastCandidate) state.hrLastCandidate.status = status;
  renderHrStatusList();
  renderHrRecap();
  showToast(`${t('toast.hrStatus')}: ${t(`hr.status.${status}`)}`);
}

function getHrAnswerValue(id) {
  if (!isHrCardboxVisible(id)) return '';
  const question = getPreset('recruit').questions.find((item) => item.id === id);
  const raw = state.userResponses[id];
  if (raw && typeof raw === 'object') return raw.url || raw.name || '';
  return raw !== undefined ? raw : (question && question.defaultValue) || '';
}

function renderHrRecap() {
  const body = document.getElementById('hr-recap-body');
  if (!body) return;
  const candidate = state.hrLastCandidate;
  if (!candidate) {
    body.innerHTML = `<tr><td colspan="5">${escapeHtml(t('hr.noCandidate'))}</td></tr>`;
    return;
  }
  const score = candidate.score ? ` (${candidate.score})` : '';
  const benefit = String(candidate.benefit || '').trim() || t('hr.noBenefit');
  const answers = Array.isArray(candidate.customAnswers) ? candidate.customAnswers : [];
  const customAnswers = answers.length
    ? answers.map((answer) => {
      const display = answer.display === undefined || answer.display === null || answer.display === '' ? '-' : answer.display;
      return `<b>${escapeHtml(answer.label || '-')}:</b> ${escapeHtml(display)}`;
    }).join('<br>')
    : '-';
  body.innerHTML = `
    <tr>
      <td><b>${escapeHtml(candidate.name || '-')}</b><br><span>${escapeHtml(candidate.email || '-')} · ${escapeHtml(candidate.wa || '-')}</span></td>
      <td>${escapeHtml(candidate.match || t('cv.levelLow'))}${escapeHtml(score)}</td>
      <td>${escapeHtml(t(`hr.status.${candidate.status || 'new'}`))}</td>
      <td>${escapeHtml(benefit)}</td>
      <td>${customAnswers}</td>
    </tr>
  `;
}

function renderCandidatePortal() {
  const portal = document.getElementById('candidate-portal');
  if (!portal) return;
  const isRecruitForm = state.view === 'form' && state.activePresetKey === 'recruit';
  portal.classList.toggle('hidden', !isRecruitForm);
  applyHrUiTemplate(isRecruitForm);
  if (!isRecruitForm) return;

  const r = currentHrRequirement();
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };
  const questions = getPreset('recruit').questions;
  const total = Math.max(questions.length, 1);
  const index = Math.max(0, Math.min(state.currentStepIndex, total - 1));

  setText('candidate-position', r.position);
  setText('candidate-location', r.location);
  setText('candidate-years', `${t('hr.minYears')}: ${r.minYears}`);
  setText('candidate-skills', r.skills);
  setText('candidate-education', r.education);
  setText('candidate-salary', r.salary);
  setText('candidate-notice', r.noticePeriod);
  setText('candidate-screening', r.screening);
  setText('candidate-progress-text', `${index + 1} / ${total}`);

  const progressBar = document.getElementById('candidate-progress-bar');
  if (progressBar) progressBar.style.width = `${Math.round(((index + 1) / total) * 100)}%`;

  const steps = document.getElementById('candidate-step-list');
  if (steps) {
    steps.innerHTML = questions.map((_, stepIndex) => `
      <span class="candidate-step-dot ${stepIndex < index ? 'done' : stepIndex === index ? 'active' : ''}"></span>
    `).join('');
  }

  const cvState = document.getElementById('candidate-cv-state');
  const cvMatch = document.getElementById('candidate-cv-match');
  if (state.cvParse) {
    if (cvState) cvState.textContent = `${t('portal.cvReady')} · ${state.cvParse.level} · ${state.cvParse.score}`;
    if (cvMatch) {
      cvMatch.textContent = `${t('portal.matchLabel')}: ${state.cvParse.level}`;
      cvMatch.classList.add('matched');
    }
  } else {
    if (cvState) cvState.textContent = t('portal.cvEmpty');
    if (cvMatch) {
      cvMatch.textContent = t('portal.matchLabel');
      cvMatch.classList.remove('matched');
    }
  }
}

function jumpToCandidateStep(index) {
  if (state.view !== 'form' || state.activePresetKey !== 'recruit') return;
  const total = Math.max(getPreset('recruit').questions.length, 1);
  clearAdvanceTimer();
  state.currentStepIndex = Math.max(0, Math.min(index, total - 1));
  renderCurrentQuestion();
}

function getRecruitQuestionIndex(id) {
  const questions = getPreset('recruit').questions;
  const index = questions.findIndex((question) => question.id === id);
  return index >= 0 ? index : questions.length - 1;
}

function jumpToQuestionById(id) {
  if (state.view !== 'form' || state.activePresetKey !== 'recruit') return;
  jumpToCandidateStep(getRecruitQuestionIndex(id));
}

function renderPricing() {
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  const setBenefits = (id, benefits) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = '';
    benefits.forEach((benefit) => {
      const item = document.createElement('li');
      item.textContent = benefit;
      element.appendChild(item);
    });
  };

  setText('pricing-payment-note', t('pricing.compactNote'));
  setText('free-amount', state.paymentMethod === 'usd' ? '$0' : 'Rp0');
  setText('free-scope', t('pricing.freeScope'));
  setBenefits('free-benefits', PRICING_PLANS.free.benefitKeys.map((key) => t(key)));

  ['pro', 'business'].forEach((planKey) => {
    const plan = PRICING_PLANS[planKey];
    const data = plan.methods[state.paymentMethod];
    setText(`${planKey}-old-price`, data.oldPrice);
    setText(`${planKey}-price`, data.price);
    setText(`${planKey}-period`, t(data.periodKey));
    setText(`${planKey}-scope`, t('pricing.singlePass'));
    setText(`${planKey}-cta`, t(data.ctaKey));
    setBenefits(`${planKey}-benefits`, plan.benefitKeys.map((key) => t(key)));

    const cta = document.getElementById(`${planKey}-cta`);
    if (!cta) return;
    cta.onclick = () => {
      openCheckoutModal(planKey);
      return false;
    };
  });
}

function renderCheckoutPayment() {
  const planKey = state.qrisPaymentPlan || 'pro';
  const plan = PRICING_PLANS[planKey];
  if (!plan) return;
  const data = plan.methods[state.paymentMethod];
  const isUsd = state.paymentMethod === 'usd';
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  setText('qris-payment-plan', t(`pricing.${planKey}`));
  setText('qris-payment-price', `${data.price} ${t(data.periodKey)}`);
  setText('qris-payment-merchant', state.qrisMerchant || t('qris.merchantFallback'));

  const qrisPanel = document.getElementById('checkout-qris-panel');
  const webPanel = document.getElementById('checkout-web-panel');
  const merchantLabel = document.getElementById('checkout-merchant-label');
  const merchantValue = document.getElementById('qris-payment-merchant');
  const confirmButton = document.getElementById('checkout-confirm-btn');
  const webLink = document.getElementById('checkout-web-link');

  if (qrisPanel) qrisPanel.classList.toggle('hidden', isUsd);
  if (webPanel) webPanel.classList.toggle('hidden', !isUsd);
  if (merchantLabel) merchantLabel.classList.toggle('hidden', isUsd);
  if (merchantValue) merchantValue.classList.toggle('hidden', isUsd);
  if (confirmButton) confirmButton.classList.toggle('hidden', isUsd);
  if (webLink) webLink.setAttribute('href', data.checkoutUrl);
  renderPaymentMethod();
}

function openCheckoutModal(planKey) {
  const plan = PRICING_PLANS[planKey];
  if (!plan) return;
  clearAdvanceTimer();
  state.qrisPaymentPlan = planKey;
  renderCheckoutPayment();
  updateQrisPreview('payment-qris-preview');
  const modal = document.getElementById('payment-qris-modal');
  if (modal) modal.classList.remove('hidden');
}

function openQrisPayment(planKey) {
  openCheckoutModal(planKey);
}

function closeQrisPaymentModal() {
  const modal = document.getElementById('payment-qris-modal');
  if (modal) modal.classList.add('hidden');
}

function confirmQrisPayment() {
  const planKey = state.qrisPaymentPlan || 'pro';
  const input = document.getElementById('payment-proof-input');
  const file = input && input.files ? input.files[0] : null;
  if (file) showToast(t('toast.qrisProofSaved', { name: file.name }));
  showToast(t('toast.qrisPaymentConfirmed', { plan: t(`pricing.${planKey}`) }));
  closeQrisPaymentModal();
}

function saveQrisMerchant(value) {
  state.qrisMerchant = String(value === undefined || value === null ? '' : value).trim();
  updateQrisPreview();
  updateQrisPreview('payment-qris-preview');
  showToast(t('toast.qrisMerchantSaved'));
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidWebhook(value) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (err) {
    return false;
  }
}

function setStatusDot(element, active) {
  if (!element) return;
  element.classList.toggle('active', active);
}

function renderSyncStatus() {
  const emailReady = isValidEmail(state.googleEmail);
  const sheetReady = Boolean(state.webhookUrl);

  const googleText = document.getElementById('google-status-text');
  const sheetText = document.getElementById('sheet-status-text');
  const googleDot = document.getElementById('google-status-dot');
  const sheetDot = document.getElementById('sheet-status-dot');
  const headerText = document.getElementById('header-connection-text');
  const headerDot = document.getElementById('connection-dot');
  const formHint = document.getElementById('sync-form-hint');
  const pasteHint = document.getElementById('paste-sync-status');

  if (googleText) googleText.textContent = emailReady ? state.googleEmail : t('sync.googleEmpty');
  if (sheetText) sheetText.textContent = sheetReady ? t('sync.sheetFilled') : t('sync.sheetEmpty');
  if (formHint) formHint.textContent = sheetReady ? t('sync.hintReady') : t('sync.hintSimulated');
  if (pasteHint) pasteHint.textContent = sheetReady ? t('sync.pasteActive') : t('sync.pasteSimulated');

  setStatusDot(googleDot, emailReady);
  setStatusDot(sheetDot, sheetReady);
  setStatusDot(headerDot, emailReady || sheetReady);

  if (headerText) {
    if (emailReady && sheetReady) headerText.textContent = t('sync.headerConnected');
    else if (sheetReady) headerText.textContent = t('sync.headerSheetOnly');
    else if (emailReady) headerText.textContent = t('sync.headerEmailOnly');
    else headerText.textContent = t('sync.notConnected');
  }

  const emailInput = document.getElementById('sync-email-input');
  const webhookInput = document.getElementById('sync-webhook-input');
  const gformInput = document.getElementById('sync-gform-input');
  if (emailInput && document.activeElement !== emailInput) emailInput.value = state.googleEmail;
  if (webhookInput && document.activeElement !== webhookInput) webhookInput.value = state.webhookUrl;
  if (gformInput && document.activeElement !== gformInput) gformInput.value = state.gformUrl;
}

function saveSyncSettings() {
  const emailInput = document.getElementById('sync-email-input');
  const webhookInput = document.getElementById('sync-webhook-input');
  const gformInput = document.getElementById('sync-gform-input');

  const email = emailInput ? emailInput.value.trim() : '';
  const webhook = webhookInput ? webhookInput.value.trim() : '';
  const gform = gformInput ? gformInput.value.trim() : '';

  if (email && !isValidEmail(email)) {
    showToast(t('toast.invalidEmail'));
    return;
  }
  if (!isValidWebhook(webhook) || !isValidWebhook(gform)) {
    showToast(t('toast.invalidUrl'));
    return;
  }

  state.googleEmail = email;
  state.webhookUrl = webhook;
  state.gformUrl = gform;
  renderSyncStatus();
  triggerConfetti();
  showToast(webhook ? t('toast.settingsSavedWebhook') : t('toast.settingsSavedSim'));
}

function chooseCategory(presetKey, simulation = false) {
  if (!state.presets[presetKey]) return;
  if (presetKey === 'recruit' && !simulation) {
    openRecruitWorkspace();
    return;
  }
  clearAdvanceTimer();
  state.activePresetKey = presetKey;
  if (presetKey === 'recruit') state.hrActiveSide = 'b';
  state.currentStepIndex = 0;
  state.userResponses = {};
  state.isSimulation = Boolean(simulation);
  state.cvParse = null;
  state.view = 'form';
  if (state.isSimulation) seedSimulationAnswers(presetKey);

  toggleViews();
  renderActivePresetHeader();
  renderCurrentQuestion();
  showToast(simulation ? t('toast.simulationStarted') : t('toast.switchCategory', { name: getPreset(presetKey).categoryLabel }));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToDashboard() {
  clearAdvanceTimer();
  state.hrActiveSide = 'a';
  state.activePanel = '';
  renderDashboard();
  showToast(t('toast.backDashboard'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchActivePreset(presetKey) {
  chooseCategory(presetKey, false);
}

// Render Header Banner & Company Profile
function renderActivePresetHeader() {
  const p = getPreset(state.activePresetKey);
  if (!p) return;

  const coverImg = document.getElementById('banner-cover-image');
  const catBadge = document.getElementById('banner-category-badge');
  const logoBox = document.getElementById('company-logo-box');
  const companyName = document.getElementById('company-name-text');
  const companySub = document.getElementById('company-sub-text');
  const headerPill = document.getElementById('header-link-pill');
  const ribbonTitle = document.getElementById('hr-ribbon-title');
  const ribbonStatus = document.getElementById('hr-ribbon-status');

  document.body.dataset.preset = state.activePresetKey;
  if (coverImg) coverImg.src = p.coverImg;
  if (catBadge) catBadge.textContent = p.categoryTag;
  if (logoBox) logoBox.textContent = p.logo;
  if (companyName) companyName.textContent = p.companyName;
  if (companySub) companySub.textContent = p.subText;
  if (headerPill) headerPill.textContent = `iziform.app/f/${p.slug}`;
  if (ribbonTitle) ribbonTitle.textContent = t('form.ribbonTitle');
  if (ribbonStatus) ribbonStatus.textContent = p.subText;
  renderCompanyIdentity();
  renderCandidatePortal();
}

// Render Current Question Card (Breathable & Luxurious)
function renderCurrentQuestion() {
  if (state.view !== 'form') return;

  const p = getPreset(state.activePresetKey);
  const qList = p.questions;
  const idx = state.currentStepIndex;
  const q = qList[idx];
  if (!q) return;

  const formCategory = document.getElementById('form-category-label');
  if (formCategory) formCategory.textContent = p.categoryLabel;

  const catTag = document.getElementById('q-category-tag');
  const counterTag = document.getElementById('q-counter-tag');
  const headline = document.getElementById('q-headline-text');
  const subtitle = document.getElementById('q-subtitle-text');

  if (catTag) catTag.textContent = q.category;
  if (counterTag) counterTag.textContent = t('form.questionCounter', { current: idx + 1, total: qList.length });
  if (headline) headline.textContent = q.required ? `${q.title} *` : q.title;
  if (subtitle) subtitle.textContent = q.subtitle;

  const bodyElem = document.getElementById('q-interactive-body');
  if (!bodyElem) return;

  let bodyHtml = '';
  const requiredAttr = q.required ? ' required aria-required="true"' : '';

  if (q.type === 'text' || q.type === 'tel') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <input type="${q.type}"
               id="large-input-field"
               value="${escapeHtml(val)}"
               placeholder="${escapeHtml(q.placeholder)}"
               oninput="state.userResponses['${q.id}'] = this.value"
               class="large-open-input"${requiredAttr}>
      </div>
    `;
  } else if (q.type === 'textarea') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <textarea id="large-textarea-field" rows="4"
                  placeholder="${escapeHtml(q.placeholder)}"
                  oninput="state.userResponses['${q.id}'] = this.value"
                  class="large-open-input large-textarea"${requiredAttr}>${escapeHtml(val)}</textarea>
      </div>
    `;
  } else if (q.type === 'date') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <input type="date" id="large-date-field" value="${escapeHtml(val)}"
               onchange="state.userResponses['${q.id}'] = this.value"
               class="large-open-input date-input"${requiredAttr}>
      </div>
    `;
  } else if (q.type === 'rating') {
    const selected = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div class="rating-stars">
        ${[1, 2, 3, 4, 5].map(n => `
          <button type="button" onclick="selectRating('${q.id}', ${n})" class="rating-star ${selected >= n ? 'active' : ''}">★</button>
        `).join('')}
        <span class="rating-caption">${selected ? `${escapeHtml(selected)} / 5` : escapeHtml(t('form.ratingSelect'))}</span>
      </div>
    `;
  } else if (q.type === 'file') {
    const val = state.userResponses[q.id];
    const currentLabel = val ? (val.url || val.name) : t('form.noDocument');
    const linkValue = val && val.kind === 'link' ? val.url : '';
    bodyHtml = `
      <div class="file-input-row">
        <input type="file" id="large-file-input" onchange="handleFileInput('${q.id}', this.files[0])" class="file-input-native">
        <input type="url" placeholder="${escapeHtml(q.placeholder)}" value="${escapeHtml(linkValue)}"
               oninput="handleDocLinkInput('${q.id}', this.value)" class="large-open-input doc-link-input">
        <p id="file-link-label" class="file-name-label">${escapeHtml(currentLabel)}</p>
      </div>
    `;
  } else if (q.type === 'choice') {
    const selectedIdx = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultIndex;
    const isMultiCol = q.options.length > 2;

    bodyHtml = `
      <div class="choice-tile-grid ${isMultiCol ? 'multi-col' : ''}">
        ${q.options.map((opt, oIdx) => `
          <div onclick="selectOptionTile('${q.id}', ${oIdx})"
               class="choice-tile ${selectedIdx === oIdx ? 'selected' : ''}">
            <div class="flex items-center gap-3">
              <span class="hotkey-badge">${escapeHtml(opt.hotkey)}</span>
              <div>
                <span class="text-sm font-extrabold text-slate-900 block" style="color: var(--text-headline)">
                  ${escapeHtml(opt.icon)} ${escapeHtml(opt.title)}
                </span>
                <span class="text-xs text-slate-500 block" style="color: var(--text-muted)">
                  ${escapeHtml(opt.desc)}
                </span>
              </div>
            </div>
            <span class="text-sm font-black text-brand-600" style="color: var(--accent-color)">
              ${selectedIdx === oIdx ? '✓' : ''}
            </span>
          </div>
        `).join('')}
      </div>
    `;
  }

  bodyElem.innerHTML = bodyHtml;
  renderCvMatchPanel();
  renderCandidatePortal();

  const card = document.getElementById('active-question-card');
  if (card) {
    card.classList.remove('animate-question-in');
    void card.offsetWidth;
    card.classList.add('animate-question-in');
  }

  updateFloatingDock();

  setTimeout(() => {
    if (document.activeElement && document.activeElement.closest && document.activeElement.closest('.hr-builder-grid')) return;
    const inp = document.getElementById('large-input-field') || document.getElementById('large-textarea-field') || document.getElementById('large-date-field');
    if (inp) inp.focus();
  }, 80);
}

function clearAdvanceTimer() {
  if (advanceTimer !== null) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
  }
}

// Select Option Tile Handler
function selectOptionTile(qId, optIdx) {
  clearAdvanceTimer();
  state.userResponses[qId] = optIdx;
  renderCurrentQuestion();

  // Smoothly auto advance to next question on card selection!
  advanceTimer = setTimeout(() => {
    advanceTimer = null;
    nextStepQuestion();
  }, 260);
}

function selectRating(qId, value) {
  clearAdvanceTimer();
  state.userResponses[qId] = value;
  renderCurrentQuestion();
  advanceTimer = setTimeout(() => {
    advanceTimer = null;
    nextStepQuestion();
  }, 320);
}

function openCandidateCvPicker() {
  if (state.view !== 'form' || state.activePresetKey !== 'recruit') return;
  const input = document.getElementById('candidate-cv-picker');
  if (!input) return;
  input.value = '';
  input.click();
}

function handleCvPickerChange(event) {
  const input = event && event.target;
  const file = input && input.files ? input.files[0] : null;
  if (!file) return;
  jumpToQuestionById('recruit_cv');
  handleFileInput('recruit_cv', file);
}

function handleCvDragOver(event) {
  if (!event) return;
  if (event.preventDefault) event.preventDefault();
  const zone = document.getElementById('candidate-cv-dropzone');
  if (zone) {
    zone.classList.add('is-dragging');
    setTextById('candidate-cv-drop-title', t('portal.cvDragActive'));
  }
}

function handleCvDragLeave(event) {
  if (!event) return;
  if (event.preventDefault) event.preventDefault();
  const zone = document.getElementById('candidate-cv-dropzone');
  if (zone) {
    zone.classList.remove('is-dragging');
    setTextById('candidate-cv-drop-title', t('portal.cvDropTitle'));
  }
}

function handleCvDrop(event) {
  if (!event) return;
  if (event.preventDefault) event.preventDefault();
  handleCvDragLeave(event);
  const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
  if (!file) return;
  jumpToQuestionById('recruit_cv');
  handleFileInput('recruit_cv', file);
}

async function handleFileInput(qId, file) {
  if (!file) return;
  clearAdvanceTimer();
  state.userResponses[qId] = { kind: 'upload', name: file.name, size: file.size, type: file.type, url: '' };
  state.cvParse = null;
  renderCurrentQuestion();

  const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
  if (qId !== 'recruit_cv' || !isPdf) return;

  showToast(t('toast.pdfReading'));
  try {
    const text = await extractPdfText(file);
    if (text.length > 20) {
      applyCvAutofill(text);
      showToast(t('toast.pdfAutofilled'));
    } else {
      state.cvParse = { text: '', filled: [], matched: [], score: 0, level: t('cv.levelLow'), role: '' };
      renderCvMatchPanel();
      showToast(t('toast.pdfUnreadable'));
    }
  } catch (err) {
    state.cvParse = { text: '', filled: [], matched: [], score: 0, level: t('cv.levelLow'), role: '' };
    renderCvMatchPanel();
    showToast(t('toast.pdfError'));
  }
}

function handleDocLinkInput(qId, value) {
  state.userResponses[qId] = { kind: 'link', name: '', size: 0, type: 'url', url: value };
  if (qId === 'recruit_cv') state.cvParse = null;
  const label = document.getElementById('file-link-label');
  if (label) label.textContent = value ? t('form.linkPrefix', { value }) : t('form.noDocument');
  renderCvMatchPanel();
}

function isHrAnswerEmpty(question) {
  const raw = state.userResponses[question.id];
  if (raw === undefined || raw === null) return true;
  if (typeof raw === 'number') return Number.isNaN(raw);
  if (typeof raw === 'boolean') return !raw;
  if (typeof raw === 'object') return !raw.url && !raw.name && !raw.value;
  return String(raw).trim() === '';
}

function isQuestionAnswerValid(question) {
  if (!question) return true;
  if (question.id === 'recruit_cv' && state.activePresetKey === 'recruit' && currentHrRequirement().cvRequired !== false) {
    return !isHrAnswerEmpty(question);
  }
  if (question.required && isHrAnswerEmpty(question)) return false;
  return true;
}

function nextStepQuestion() {
  if (state.view !== 'form') return;
  clearAdvanceTimer();
  const p = getPreset(state.activePresetKey);
  const question = p.questions[state.currentStepIndex];
  if (state.activePresetKey === 'recruit' && !state.isSimulation && !isQuestionAnswerValid(question)) {
    showToast(question && question.id === 'recruit_cv' ? t('toast.cvRequired') : t('toast.required'));
    return;
  }
  if (state.currentStepIndex < p.questions.length - 1) {
    state.currentStepIndex++;
    renderCurrentQuestion();
    return;
  }
  if (state.activePresetKey === 'recruit' && !state.isSimulation) {
    const invalidIndex = p.questions.findIndex((item) => !isQuestionAnswerValid(item));
    if (invalidIndex >= 0) {
      state.currentStepIndex = invalidIndex;
      renderCurrentQuestion();
      showToast(t('toast.requiredFieldsMissing'));
      return;
    }
  }
  triggerFormSubmissionSuccess();
}

function prevStepQuestion() {
  if (state.view !== 'form') return;
  clearAdvanceTimer();
  if (state.currentStepIndex > 0) {
    state.currentStepIndex--;
    renderCurrentQuestion();
  }
}

function updateFloatingDock() {
  const p = getPreset(state.activePresetKey);
  const total = Math.max(p.questions.length, 1);
  const idx = Math.max(0, state.currentStepIndex);
  const percent = Math.round(((idx + 1) / total) * 100);

  const prevBtn = document.getElementById('question-btn-prev');
  const nextLabel = document.getElementById('question-next-label');
  const progressBar = document.getElementById('question-progress-bar');
  const percentText = document.getElementById('question-percent-text');

  if (prevBtn) {
    prevBtn.disabled = idx === 0;
    prevBtn.className = idx === 0
      ? 'dock-btn dock-btn-secondary opacity-50 cursor-not-allowed'
      : 'dock-btn dock-btn-secondary cursor-pointer';
  }

  if (nextLabel) {
    nextLabel.textContent = idx === total - 1 ? t('form.submit') : t('form.continue');
  }

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (percentText) percentText.textContent = `${percent}%`;
}

function buildSubmissionPayload() {
  const p = getPreset(state.activePresetKey);
  const isRecruit = state.activePresetKey === 'recruit';
  const customFields = isRecruit ? getHrCustomFields() : [];
  const customAnswers = customFields.map((field) => {
    const raw = state.userResponses[field.id] !== undefined ? state.userResponses[field.id] : '';
    let display = raw;
    if (raw && typeof raw === 'object') display = raw.url || raw.name || '';
    return { id: field.id, label: field.label, type: field.type, required: field.required, value: raw, display };
  });
  return {
    submittedAt: new Date().toISOString(),
    preset: state.activePresetKey,
    category: p.categoryLabel,
    googleEmail: state.googleEmail,
    formTitle: p.companyName,
    formSlug: p.slug,
    companyName: state.hrCompanyName,
    companyLogoMode: state.hrCompanyLogo ? 'uploaded' : 'initials',
    companyProfile: isRecruit ? { ...state.hrCompanyProfile } : null,
    hrUiTemplate: isRecruit ? state.hrUiTemplate : null,
    hrUiTier: isRecruit ? state.hrUiTier : null,
    benefit: isRecruit ? String(currentHrRequirement().benefit || '').trim() : '',
    customFieldDefinitions: customFields.map((field) => ({ ...field })),
    customAnswers,
    cardbox: isRecruit ? getHrCardboxManifest().map((item) => ({
      id: item.id,
      category: item.category,
      source: item.source,
      visible: item.visible,
      required: item.required,
      includedInSheet: item.visible
    })) : [],
    sourceUrl: state.gformUrl,
    simulation: state.isSimulation,
    hrRequirement: isRecruit ? cloneHrRequirement(currentHrRequirement()) : null,
    selectionStatus: state.activePresetKey === 'recruit' ? state.hrSelectionStatus : null,
    cvMatch: state.cvParse ? {
      score: state.cvParse.score,
      level: state.cvParse.level,
      matched: state.cvParse.matched,
      autofilled: state.cvParse.filled
    } : null,
    answers: p.questions.map(q => {
      const raw = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : null;
      let display = raw;
      if (q.type === 'choice' && Number.isInteger(raw)) display = q.options[raw] ? q.options[raw].title : raw;
      if (q.type === 'rating' && Number.isInteger(raw)) display = `${raw}/5`;
      if (raw && typeof raw === 'object') display = raw.url || raw.name || raw;
      return { id: q.id, type: q.type, question: q.title, value: raw, display: display };
    })
  };
}

async function sendToGoogleSheet(payload, webhookUrl) {
  if (!webhookUrl || !webhookUrl.trim()) {
    return { ok: false, simulated: true, message: t('sync.sendSimulated') };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      return { ok: false, simulated: false, message: t('sync.sendHttpError', { status: res.status }) };
    }
    return { ok: true, simulated: false, message: t('sync.sendOk') };
  } catch (err) {
    return { ok: false, simulated: false, message: t('sync.sendUnreachable') };
  }
}

// Form Submission Success
async function triggerFormSubmissionSuccess() {
  if (state.view !== 'form') return;
  clearAdvanceTimer();
  const p = getPreset(state.activePresetKey);
  if (state.activePresetKey === 'recruit' && !state.isSimulation) {
    const invalidIndex = p.questions.findIndex((item) => !isQuestionAnswerValid(item));
    if (invalidIndex >= 0) {
      state.currentStepIndex = invalidIndex;
      renderCurrentQuestion();
      showToast(invalidIndex === 0 ? t('toast.requiredFieldsMissing') : t('toast.required'));
      return;
    }
  }
  triggerConfetti();
  const modal = document.getElementById('success-submit-modal');
  if (state.activePresetKey === 'recruit') {
    state.hrLastCandidate = {
      name: getHrAnswerValue('recruit_name'),
      email: getHrAnswerValue('recruit_email'),
      wa: getHrAnswerValue('recruit_wa'),
      location: getHrAnswerValue('recruit_domisili'),
      experience: getHrAnswerValue('recruit_experience'),
      education: getHrAnswerValue('recruit_education'),
      skills: getHrAnswerValue('recruit_skills'),
      salary: getHrAnswerValue('recruit_salary'),
      notice: getHrAnswerValue('recruit_notice'),
      screening: getHrAnswerValue('recruit_screening'),
      benefit: String(currentHrRequirement().benefit || '').trim(),
      customAnswers: getHrCustomFields().map((field) => {
        const raw = state.userResponses[field.id] !== undefined ? state.userResponses[field.id] : '';
        let display = raw;
        if (raw && typeof raw === 'object') display = raw.url || raw.name || '';
        return { id: field.id, label: field.label, type: field.type, required: field.required, value: raw, display };
      }),
      match: state.cvParse ? state.cvParse.level : t('cv.levelLow'),
      score: state.cvParse ? state.cvParse.score : 0,
      status: state.hrSelectionStatus
    };
    renderHrRecap();
  }
  const summaryText = document.getElementById('summary-payload-text');
  const statusText = document.getElementById('sync-status-text');
  const firstQuestion = p.questions[0];
  const rawName = state.userResponses[firstQuestion.id];
  const nameVal = rawName && typeof rawName === 'object'
    ? (rawName.url || rawName.name || '')
    : (rawName !== undefined ? rawName : (firstQuestion.defaultValue || ''));

  if (summaryText) {
    summaryText.textContent = t('success.respondent', { name: nameVal, form: p.companyName });
    if (state.activePresetKey === 'recruit') {
      summaryText.textContent += ` • ${t('portal.matchLabel')}: ${state.cvParse ? state.cvParse.level : t('cv.levelLow')}`;
      summaryText.textContent += ` • ${t('hr.statusLabel')}: ${t(`hr.status.${state.hrSelectionStatus}`)}`;
    }
  }
  if (statusText) statusText.textContent = t('success.sending');
  if (modal) modal.classList.remove('hidden');
  showToast(t('success.title'));

  const result = await sendToGoogleSheet(buildSubmissionPayload(), state.webhookUrl);
  const statusLabel = result.ok ? t('success.sent') : result.simulated ? t('success.simulated') : t('success.failed');
  if (statusText) statusText.textContent = `${t('success.statusPrefix')}${result.message}`;
  if (summaryText) summaryText.textContent += ` • ${statusLabel}`;
  showToast(result.message);
}

function closeSuccessModal() {
  clearAdvanceTimer();
  const modal = document.getElementById('success-submit-modal');
  if (modal) modal.classList.add('hidden');
  renderDashboard();
}

// UI Theme Switcher (Silicon, Midnight, Cyber, Terracotta)
function setUITheme(themeKey) {
  state.currentTheme = themeKey;
  document.body.className = `theme-${themeKey} font-${state.currentFont === 'Plus Jakarta Sans' ? 'jakarta' : state.currentFont.toLowerCase().replace(/\s+/g, '-')}`;

  // Update chip active states
  ['silicon', 'midnight', 'cyber', 'terracotta'].forEach(t => {
    const btn = document.getElementById(`theme-btn-${t}`);
    if (btn) {
      if (t === themeKey) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  updateDisplayTrigger();
  applyFontStack();
  showToast(t('toast.theme', { name: t(`theme.${themeKey}`) }));
}

function changeFontFamily(fontName) {
  state.currentFont = fontName;
  document.body.className = `theme-${state.currentTheme} font-${fontName === 'Plus Jakarta Sans' ? 'jakarta' : fontName.toLowerCase().replace(/\s+/g, '-')}`;
  applyFontStack();
  const key = FONT_I18N_KEYS[fontName];
  showToast(t('toast.font', { name: key ? t(key) : fontName }));
}

// Setup Keyboard Hotkeys (A, B, C, D, 1-5 & Enter ↵)
function setupKeyboardNavigation() {
  window.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('#paste-link-modal:not(.hidden), #success-submit-modal:not(.hidden), #qris-modal:not(.hidden), #payment-qris-modal:not(.hidden)');
    if (activeModal) return;
    if (state.view !== 'form') return;

    const p = getPreset(state.activePresetKey);
    const q = p.questions[state.currentStepIndex];

    if (e.key === 'Enter') {
      nextStepQuestion();
    } else if (e.key === 'ArrowUp') {
      prevStepQuestion();
    } else if (q.type === 'choice') {
      const keyUpper = e.key.toUpperCase();
      const matchedIdx = q.options.findIndex(opt => opt.hotkey === keyUpper);
      if (matchedIdx !== -1) selectOptionTile(q.id, matchedIdx);
    } else if (q.type === 'rating') {
      const ratingValue = Number(e.key);
      if (ratingValue >= 1 && ratingValue <= 5) selectRating(q.id, ratingValue);
    }
  });
}

// Paste GForm Modal Handlers
function openPasteModal() {
  clearAdvanceTimer();
  const m = document.getElementById('paste-link-modal');
  if (m) m.classList.remove('hidden');

  const emailInput = document.getElementById('modal-email-input');
  const gformInput = document.getElementById('modal-gform-input');
  const webhookInput = document.getElementById('modal-webhook-input');
  if (emailInput) emailInput.value = state.googleEmail;
  if (gformInput) gformInput.value = state.gformUrl;
  if (webhookInput) webhookInput.value = state.webhookUrl;
  renderSyncStatus();
}

function closePasteModal() {
  const m = document.getElementById('paste-link-modal');
  if (m) m.classList.add('hidden');
}

function applyPastedGForm() {
  const emailInput = document.getElementById('modal-email-input');
  const gformInput = document.getElementById('modal-gform-input');
  const webhookInput = document.getElementById('modal-webhook-input');

  const email = emailInput ? emailInput.value.trim() : '';
  const gform = gformInput ? gformInput.value.trim() : '';
  const webhook = webhookInput ? webhookInput.value.trim() : '';

  if (email && !isValidEmail(email)) {
    showToast(t('toast.invalidEmail'));
    return;
  }
  if (!isValidWebhook(webhook) || !isValidWebhook(gform)) {
    showToast(t('toast.invalidUrl'));
    return;
  }

  state.googleEmail = email;
  state.gformUrl = gform;
  state.webhookUrl = webhook;
  closePasteModal();
  renderSyncStatus();
  triggerConfetti();
  showToast(webhook ? t('toast.settingsSavedWebhook') : t('toast.settingsSavedSim'));
}

function copyFormLink() {
  const p = getPreset(state.activePresetKey);
  const url = `https://iziform.app/f/${p.slug}`;
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    showToast(t('toast.copyFailed'));
    showToast(t('toast.link', { url }));
    return;
  }
  navigator.clipboard.writeText(url).then(() => {
    showToast(t('toast.copied', { url }));
  }).catch(() => {
    showToast(t('toast.link', { url }));
  });
}

// Toast Notification
function showToast(message) {
  const box = document.getElementById('toast-box');
  if (!box) return;

  const toast = document.createElement('div');
  toast.className = 'toast-card';
  const dot = document.createElement('span');
  dot.className = 'toast-dot';
  const text = document.createElement('span');
  text.textContent = message;
  toast.append(dot, text);

  box.appendChild(toast);

  setTimeout(() => toast.classList.add('is-visible'), 10);
  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 320);
  }, 3500);
}

// Confetti Effect
function triggerConfetti() {
  const colors = ['#6366f1', '#f59e0b', '#10b981', '#ec4899', '#3b82f6'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'fixed pointer-events-none z-50';
    el.style.width = `${Math.random() * 8 + 6}px`;
    el.style.height = `${Math.random() * 8 + 6}px`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = '-10px';
    el.style.opacity = '1';
    el.style.transition = `all ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 1, 0.5, 1)`;

    document.body.appendChild(el);

    setTimeout(() => {
      el.style.top = `${window.innerHeight + 20}px`;
      el.style.left = `${parseFloat(el.style.left) + (Math.random() * 200 - 100)}px`;
      el.style.transform = `rotate(${Math.random() * 720}deg)`;
      el.style.opacity = '0';
    }, 20);

    setTimeout(() => el.remove(), 3500);
  }
}
