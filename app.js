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
  custom: 'panel-custom'
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
    'cv.levelLow': 'Perlu ditinjau',
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
    'cv.levelLow': 'Needs review',
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
    'cv.levelLow': '需要复核',
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
  if (!locale) return base;
  return {
    ...base,
    ...locale,
    questions: base.questions.map((question, index) => ({
      ...question,
      ...(locale.questions && locale.questions[index] ? locale.questions[index] : {})
    }))
  };
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
  return lang === 'en' ? 'usd' : 'idr';
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  state.currentLanguage = lang;
  if (!state.paymentMethodManuallySet) state.paymentMethod = defaultPaymentMethodForLanguage(lang);
  applyTranslations();
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

function computeCandidateMatch(text, roleKey) {
  const lower = text.toLowerCase();
  const keywords = ROLE_KEYWORDS[roleKey] || Object.values(ROLE_KEYWORDS).flat();
  const matched = keywords.filter((keyword) => lower.includes(keyword));
  const hasEmail = /[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(text);
  const hasPhone = /(?:\+?62|0)[\d\s-]{8,16}/.test(text);
  const score = Math.min(100, 18 + matched.length * 13 + (hasEmail ? 14 : 0) + (hasPhone ? 12 : 0));
  const levelKey = score >= 75 ? 'cv.levelExcellent' : score >= 55 ? 'cv.levelGood' : score >= 35 ? 'cv.levelFair' : 'cv.levelLow';
  return { matched, score, level: t(levelKey) };
}

function applyCvAutofill(text) {
  const nameMatch = text.match(/(?:nama|name)[\s:]*([A-Za-zÀ-ÿ' .]{3,60})/i);
  const phoneMatch = text.match(/(?:\+?62|0)[\d\s-]{8,16}/);
  const roleQuestion = getPreset('recruit').questions[2];
  const roleIndex = state.userResponses['recruit_role'] !== undefined
    ? state.userResponses['recruit_role']
    : (roleQuestion.defaultIndex !== undefined ? roleQuestion.defaultIndex : 0);
  const roleOption = roleQuestion.options && roleQuestion.options[roleIndex];
  const match = computeCandidateMatch(text, roleOption ? roleOption.hotkey : 'A');
  const filled = [];

  if (nameMatch && nameMatch[1].trim()) {
    state.userResponses['recruit_name'] = nameMatch[1].trim().replace(/\s+/g, ' ');
    filled.push('recruit_name');
  }
  if (phoneMatch && phoneMatch[0].trim()) {
    state.userResponses['recruit_wa'] = phoneMatch[0].trim();
    filled.push('recruit_wa');
  }

  state.cvParse = {
    text,
    filled,
    matched: match.matched,
    score: match.score,
    level: match.level,
    role: roleOption ? roleOption.title : ''
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
  const dock = document.getElementById('form-dock');
  const ribbon = document.getElementById('hr-career-ribbon');
  const ribbonTitle = document.getElementById('hr-ribbon-title');
  const ribbonStatus = document.getElementById('hr-ribbon-status');
  const banner = document.getElementById('simulation-banner');
  const landingNav = document.getElementById('landing-nav');
  const dashboardButton = document.getElementById('header-dashboard-btn');
  const linkPill = document.getElementById('header-link-pill-wrap');
  const isForm = state.view === 'form';

  if (dashboard) dashboard.classList.toggle('hidden', state.view !== 'dashboard');
  if (form) form.classList.toggle('hidden', !isForm);
  if (dock) dock.classList.toggle('hidden', !isForm);
  if (banner) banner.classList.toggle('hidden', !(isForm && state.isSimulation));
  if (ribbon) ribbon.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (landingNav) landingNav.classList.toggle('hidden', isForm);
  if (dashboardButton) dashboardButton.classList.toggle('hidden', !isForm);
  if (linkPill) linkPill.classList.toggle('hidden', !isForm);
  if (ribbonTitle && isForm) ribbonTitle.textContent = t('form.ribbonTitle');
  if (ribbonStatus && isForm) ribbonStatus.textContent = getPreset(state.activePresetKey).subText;
  renderInfoPanels();
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
  state.view = 'dashboard';
  state.activePanel = panelKey;
  toggleViews();
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
  clearAdvanceTimer();
  state.activePresetKey = presetKey;
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
  if (headline) headline.textContent = q.title;
  if (subtitle) subtitle.textContent = q.subtitle;

  const bodyElem = document.getElementById('q-interactive-body');
  if (!bodyElem) return;

  let bodyHtml = '';

  if (q.type === 'text' || q.type === 'tel') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <input type="${q.type}"
               id="large-input-field"
               value="${escapeHtml(val)}"
               placeholder="${escapeHtml(q.placeholder)}"
               oninput="state.userResponses['${q.id}'] = this.value"
               class="large-open-input">
      </div>
    `;
  } else if (q.type === 'textarea') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <textarea id="large-textarea-field" rows="4"
                  placeholder="${escapeHtml(q.placeholder)}"
                  oninput="state.userResponses['${q.id}'] = this.value"
                  class="large-open-input large-textarea">${escapeHtml(val)}</textarea>
      </div>
    `;
  } else if (q.type === 'date') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <input type="date" id="large-date-field" value="${escapeHtml(val)}"
               onchange="state.userResponses['${q.id}'] = this.value"
               class="large-open-input date-input">
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

  const card = document.getElementById('active-question-card');
  if (card) {
    card.classList.remove('animate-question-in');
    void card.offsetWidth;
    card.classList.add('animate-question-in');
  }

  updateFloatingDock();

  setTimeout(() => {
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

// Dock Navigation
function nextStepQuestion() {
  if (state.view !== 'form') return;
  clearAdvanceTimer();
  const p = getPreset(state.activePresetKey);
  if (state.currentStepIndex < p.questions.length - 1) {
    state.currentStepIndex++;
    renderCurrentQuestion();
  } else {
    triggerFormSubmissionSuccess();
  }
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
  const total = p.questions.length;
  const idx = state.currentStepIndex;
  const percent = Math.round(((idx + 1) / total) * 100);

  const prevBtn = document.getElementById('dock-btn-prev');
  const nextLabel = document.getElementById('dock-next-label');
  const progressBar = document.getElementById('dock-progress-bar');
  const percentText = document.getElementById('dock-percent-text');

  if (prevBtn) {
    if (idx === 0) {
      prevBtn.className = 'dock-btn dock-btn-secondary opacity-50 cursor-not-allowed';
    } else {
      prevBtn.className = 'dock-btn dock-btn-secondary cursor-pointer';
    }
  }

  if (nextLabel) {
    nextLabel.textContent = idx === total - 1 ? t('form.submit') : t('form.continue');
  }

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (percentText) percentText.textContent = `${percent}%`;
}

function buildSubmissionPayload() {
  const p = getPreset(state.activePresetKey);
  return {
    submittedAt: new Date().toISOString(),
    preset: state.activePresetKey,
    category: p.categoryLabel,
    googleEmail: state.googleEmail,
    formTitle: p.companyName,
    formSlug: p.slug,
    sourceUrl: state.gformUrl,
    simulation: state.isSimulation,
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
  triggerConfetti();
  const modal = document.getElementById('success-submit-modal');
  const p = getPreset(state.activePresetKey);
  const summaryText = document.getElementById('summary-payload-text');
  const statusText = document.getElementById('sync-status-text');
  const firstQuestion = p.questions[0];
  const rawName = state.userResponses[firstQuestion.id];
  const nameVal = rawName && typeof rawName === 'object'
    ? (rawName.url || rawName.name || '')
    : (rawName !== undefined ? rawName : (firstQuestion.defaultValue || ''));

  if (summaryText) summaryText.textContent = t('success.respondent', { name: nameVal, form: p.companyName });
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
