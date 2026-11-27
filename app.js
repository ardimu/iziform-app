/**
 * iziForm 3.0 — Luxury Open-Canvas Interactive Engine
 * Bespoke corporate landing form experience with hotkeys & multi-themes.
 */

const state = {
  currentTheme: 'silicon',
  currentFont: 'Plus Jakarta Sans',
  view: 'dashboard',
  activePresetKey: 'recruit',
  currentStepIndex: 0,
  userResponses: {},
  googleEmail: '',
  gformUrl: '',
  webhookUrl: '',
  pricingMode: 'monthly',
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
    }
  }
};

const PRICING_PLANS = {
  monthly: {
    note: 'Tagihan bulanan, bisa dibatalkan kapan saja. Free tetap tersedia sebagai paket awal tanpa biaya.',
    pro: {
      price: 'Rp49rb',
      period: '/bulan',
      scope: 'Fokus: 1 form aktif',
      note: 'Untuk individu, UMKM, atau satu event/batch tunggal.',
      cta: 'Pilih Pro Bulanan',
      benefits: [
        '1 form aktif dengan kategori pilihan',
        'Tampilan premium & semua tipe input lengkap',
        'Sheet webhook aktif + link form unik',
        'Cocok untuk UMKM dan event tunggal'
      ]
    },
    business: {
      price: 'Rp149rb',
      period: '/bulan',
      scope: 'Fokus: tim & kampanye besar',
      note: 'Untuk tim, perusahaan, dan kampanye/event berulang.',
      cta: 'Konsultasi Tim',
      benefits: [
        'Semua fitur Pro + multi-form & multi-kategori',
        'Akses dan kolaborasi tim (admin/editor)',
        'Ringkasan submission & kerapian data Sheet',
        'Prioritas kustomisasi & pendampingan integrasi'
      ]
    }
  },
  onetime: {
    note: 'Bayar sekali untuk satu form, batch, atau proyek tanpa langganan. Free tetap tersedia sebagai paket awal tanpa biaya.',
    pro: {
      price: 'Rp99rb',
      period: '/form',
      scope: 'Fokus: 1 form sekali pakai',
      note: 'Untuk satu kebutuhan individu, UMKM, atau event/batch tunggal.',
      cta: 'Pilih Pro Sekali Pakai',
      benefits: [
        '1 form sekali pakai tanpa langganan',
        'Tampilan premium & semua tipe input lengkap',
        'Sheet webhook aktif + link form unik',
        'Cocok untuk pendaftaran dan event tunggal'
      ]
    },
    business: {
      price: 'Rp349rb',
      period: '/proyek',
      scope: 'Fokus: proyek/event besar',
      note: 'Untuk tim yang menjalankan satu kampanye atau event besar.',
      cta: 'Konsultasi Proyek',
      benefits: [
        '1 proyek besar tanpa langganan',
        'Multi-form & multi-kategori dalam satu proyek',
        'Akses dan kolaborasi tim (admin/editor)',
        'Kerapian operasional & struktur Sheet rapi'
      ]
    }
  }
};

let advanceTimer = null;

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderSyncStatus();
  setPricingMode(state.pricingMode);
  setupKeyboardNavigation();
});

function toggleViews() {
  const dashboard = document.getElementById('dashboard-view');
  const form = document.getElementById('form-view');
  const dock = document.getElementById('form-dock');
  const ribbon = document.getElementById('hr-career-ribbon');
  const landingNav = document.getElementById('landing-nav');
  const dashboardButton = document.getElementById('header-dashboard-btn');
  const linkPill = document.getElementById('header-link-pill-wrap');
  const isForm = state.view === 'form';

  if (dashboard) dashboard.classList.toggle('hidden', state.view !== 'dashboard');
  if (form) form.classList.toggle('hidden', !isForm);
  if (dock) dock.classList.toggle('hidden', !isForm);
  if (ribbon) ribbon.classList.toggle('hidden', !(isForm && state.activePresetKey === 'recruit'));
  if (landingNav) landingNav.classList.toggle('hidden', isForm);
  if (dashboardButton) dashboardButton.classList.toggle('hidden', !isForm);
  if (linkPill) linkPill.classList.toggle('hidden', !isForm);
}

function renderDashboard() {
  clearAdvanceTimer();
  state.view = 'dashboard';
  state.currentStepIndex = 0;
  state.userResponses = {};
  document.body.dataset.preset = 'dashboard';

  const grid = document.getElementById('category-grid');
  if (grid) {
    grid.innerHTML = Object.entries(state.presets).map(([key, p], index) => `
      <button type="button" onclick="chooseCategory('${key}')"
              class="category-card" aria-label="Buat form ${p.categoryLabel}">
        <span class="category-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="category-icon" aria-hidden="true">${p.categoryIcon}</span>
        <span class="category-card-copy">
          <span class="category-card-label">${p.categoryLabel}</span>
          <span class="category-card-desc">${p.categoryDesc}</span>
        </span>
        <span class="category-arrow" aria-hidden="true">&rarr;</span>
      </button>
    `).join('');
  }

  toggleViews();
  renderSyncStatus();

  const headerPill = document.getElementById('header-link-pill');
  if (headerPill) headerPill.innerText = 'iziform.app';
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setPricingMode(mode) {
  state.pricingMode = mode === 'onetime' ? 'onetime' : 'monthly';
  const plans = PRICING_PLANS[state.pricingMode];
  const monthlyActive = state.pricingMode === 'monthly';

  [
    [document.getElementById('pricing-monthly-btn'), monthlyActive],
    [document.getElementById('pricing-onetime-btn'), !monthlyActive]
  ].forEach(([button, active]) => {
    if (!button) return;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  const setPrice = (id, price, period) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = '';
    element.appendChild(document.createTextNode(price));
    const periodLabel = document.createElement('small');
    periodLabel.className = 'price-period';
    periodLabel.textContent = period;
    element.appendChild(periodLabel);
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

  setText('pricing-mode-note', plans.note);
  setPrice('pro-price', plans.pro.price, plans.pro.period);
  setText('pro-scope', plans.pro.scope);
  setText('pro-note', plans.pro.note);
  setText('pro-cta', plans.pro.cta);
  setBenefits('pro-benefits', plans.pro.benefits);
  setPrice('business-price', plans.business.price, plans.business.period);
  setText('business-scope', plans.business.scope);
  setText('business-note', plans.business.note);
  setText('business-cta', plans.business.cta);
  setBenefits('business-benefits', plans.business.benefits);
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

  if (googleText) googleText.innerText = emailReady ? state.googleEmail : 'Belum diisi';
  if (sheetText) sheetText.innerText = sheetReady ? 'Webhook aktif' : 'Belum diisi';
  if (formHint) formHint.innerText = sheetReady
    ? 'Status: webhook aktif — jawaban dikirim otomatis saat submit.'
    : 'Status: webhook belum diisi — submission berjalan dalam mode simulasi lokal.';
  if (pasteHint) pasteHint.innerText = sheetReady ? 'Webhook: aktif' : 'Webhook: belum diisi (mode simulasi)';

  setStatusDot(googleDot, emailReady);
  setStatusDot(sheetDot, sheetReady);
  setStatusDot(headerDot, emailReady || sheetReady);

  if (headerText) {
    if (emailReady && sheetReady) headerText.innerText = 'Google & Sheet terhubung';
    else if (sheetReady) headerText.innerText = 'Sheet webhook aktif';
    else if (emailReady) headerText.innerText = 'Email Google tersimpan';
    else headerText.innerText = 'Belum terhubung';
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
    showToast('Format email Google belum valid.');
    return;
  }
  if (!isValidWebhook(webhook)) {
    showToast('URL webhook harus diawali http:// atau https://.');
    return;
  }
  if (!isValidWebhook(gform)) {
    showToast('URL Google Form harus diawali http:// atau https://.');
    return;
  }

  state.googleEmail = email;
  state.webhookUrl = webhook;
  state.gformUrl = gform;
  renderSyncStatus();
  triggerConfetti();
  showToast(webhook ? 'Koneksi Sheet tersimpan. Submission siap dikirim otomatis.' : 'Email tersimpan. Webhook masih kosong — mode simulasi aktif.');
}

function chooseCategory(presetKey) {
  if (!state.presets[presetKey]) return;
  clearAdvanceTimer();
  state.activePresetKey = presetKey;
  state.currentStepIndex = 0;
  state.userResponses = {};
  state.view = 'form';

  toggleViews();
  renderActivePresetHeader();
  renderCurrentQuestion();
  showToast(`Kategori dipilih: ${state.presets[presetKey].categoryLabel}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToDashboard() {
  clearAdvanceTimer();
  renderDashboard();
  showToast('Kembali ke dashboard kategori');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchActivePreset(presetKey) {
  if (!state.presets[presetKey]) return;
  clearAdvanceTimer();
  state.activePresetKey = presetKey;
  state.currentStepIndex = 0;
  state.userResponses = {};
  state.view = 'form';

  toggleViews();
  renderActivePresetHeader();
  renderCurrentQuestion();
  showToast(`Beralih ke kategori: ${state.presets[presetKey].categoryLabel}`);
}

// Render Header Banner & Company Profile
function renderActivePresetHeader() {
  const p = state.presets[state.activePresetKey];
  if (!p) return;

  const coverImg = document.getElementById('banner-cover-image');
  const catBadge = document.getElementById('banner-category-badge');
  const logoBox = document.getElementById('company-logo-box');
  const companyName = document.getElementById('company-name-text');
  const companySub = document.getElementById('company-sub-text');
  const headerPill = document.getElementById('header-link-pill');

  document.body.dataset.preset = state.activePresetKey;
  if (coverImg) coverImg.src = p.coverImg;
  if (catBadge) catBadge.innerText = p.categoryTag;
  if (logoBox) logoBox.innerText = p.logo;
  if (companyName) companyName.innerText = p.companyName;
  if (companySub) companySub.innerText = p.subText;
  if (headerPill) headerPill.innerText = `iziform.app/f/${p.slug}`;
}

// Render Current Question Card (Breathable & Luxurious)
function renderCurrentQuestion() {
  if (state.view !== 'form') return;

  const p = state.presets[state.activePresetKey];
  const qList = p.questions;
  const idx = state.currentStepIndex;
  const q = qList[idx];

  const formCategory = document.getElementById('form-category-label');
  if (formCategory) formCategory.innerText = p.categoryLabel;

  // Update question header tags
  const catTag = document.getElementById('q-category-tag');
  const counterTag = document.getElementById('q-counter-tag');
  const headline = document.getElementById('q-headline-text');
  const subtitle = document.getElementById('q-subtitle-text');

  if (catTag) catTag.innerText = q.category;
  if (counterTag) counterTag.innerText = `Pertanyaan ${idx + 1} dari ${qList.length}`;
  if (headline) headline.innerText = q.title;
  if (subtitle) subtitle.innerText = q.subtitle;

  // Render question interactive body
  const bodyElem = document.getElementById('q-interactive-body');
  if (!bodyElem) return;

  let bodyHtml = '';

  if (q.type === 'text' || q.type === 'tel') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <input type="${q.type}" 
               id="large-input-field" 
               value="${val}" 
               placeholder="${q.placeholder}" 
               oninput="state.userResponses['${q.id}'] = this.value"
               class="large-open-input">
      </div>
    `;
  } else if (q.type === 'textarea') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <textarea id="large-textarea-field" rows="4"
                  placeholder="${q.placeholder}"
                  oninput="state.userResponses['${q.id}'] = this.value"
                  class="large-open-input large-textarea">${val}</textarea>
      </div>
    `;
  } else if (q.type === 'date') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    bodyHtml = `
      <div>
        <input type="date" id="large-date-field" value="${val}"
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
        <span class="rating-caption">${selected ? `${selected} / 5` : 'Pilih rating'}</span>
      </div>
    `;
  } else if (q.type === 'file') {
    const val = state.userResponses[q.id];
    const currentLabel = val ? (val.url || val.name) : 'Belum ada dokumen dipilih';
    const linkValue = val && val.kind === 'link' ? val.url : '';
    bodyHtml = `
      <div class="file-input-row">
        <input type="file" id="large-file-input" onchange="handleFileInput('${q.id}', this.files[0])" class="file-input-native">
        <input type="url" placeholder="${q.placeholder}" value="${linkValue}"
               oninput="handleDocLinkInput('${q.id}', this.value)" class="large-open-input doc-link-input">
        <p id="file-link-label" class="file-name-label">${currentLabel}</p>
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
              <span class="hotkey-badge">${opt.hotkey}</span>
              <div>
                <span class="text-sm font-extrabold text-slate-900 block" style="color: var(--text-headline)">
                  ${opt.icon} ${opt.title}
                </span>
                <span class="text-xs text-slate-500 block" style="color: var(--text-muted)">
                  ${opt.desc}
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

  // Re-trigger subtle card entrance animation
  const card = document.getElementById('active-question-card');
  if (card) {
    card.classList.remove('animate-question-in');
    void card.offsetWidth; // Force reflow
    card.classList.add('animate-question-in');
  }

  // Update floating dock status
  updateFloatingDock();

  // Auto focus input
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

function handleFileInput(qId, file) {
  if (!file) return;
  clearAdvanceTimer();
  state.userResponses[qId] = { kind: 'upload', name: file.name, size: file.size, type: file.type, url: '' };
  renderCurrentQuestion();
}

function handleDocLinkInput(qId, value) {
  state.userResponses[qId] = { kind: 'link', name: '', size: 0, type: 'url', url: value };
  const label = document.getElementById('file-link-label');
  if (label) label.innerText = value ? `Link: ${value}` : 'Belum ada dokumen dipilih';
}

// Dock Navigation
function nextStepQuestion() {
  if (state.view !== 'form') return;
  clearAdvanceTimer();
  const p = state.presets[state.activePresetKey];
  if (state.currentStepIndex < p.questions.length - 1) {
    state.currentStepIndex++;
    renderCurrentQuestion();
  } else {
    // Submit form!
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
  const p = state.presets[state.activePresetKey];
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
    if (idx === total - 1) {
      nextLabel.innerText = 'Kirim ke Google Sheet ✨';
    } else {
      nextLabel.innerText = 'Lanjutkan';
    }
  }

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (percentText) percentText.innerText = `${percent}%`;
}

function buildSubmissionPayload() {
  const p = state.presets[state.activePresetKey];
  return {
    submittedAt: new Date().toISOString(),
    preset: state.activePresetKey,
    category: p.categoryLabel,
    googleEmail: state.googleEmail,
    formTitle: p.companyName,
    formSlug: p.slug,
    sourceUrl: state.gformUrl,
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
    return { ok: false, simulated: true, message: 'Webhook belum diisi — data tersimpan sebagai simulasi lokal.' };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      return { ok: false, simulated: false, message: `Gagal mengirim ke webhook (HTTP ${res.status}).` };
    }
    return { ok: true, simulated: false, message: 'Data JSON berhasil dikirim ke webhook Google Sheet.' };
  } catch (err) {
    return { ok: false, simulated: false, message: 'Webhook tidak dapat dijangkau — periksa URL atau CORS.' };
  }
}

// Form Submission Success
async function triggerFormSubmissionSuccess() {
  if (state.view !== 'form') return;
  clearAdvanceTimer();
  triggerConfetti();
  const modal = document.getElementById('success-submit-modal');
  const p = state.presets[state.activePresetKey];
  const summaryText = document.getElementById('summary-payload-text');
  const statusText = document.getElementById('sync-status-text');
  const nameKey = `${state.activePresetKey}_name`;
  const nameVal = state.userResponses[nameKey] || p.questions[0].defaultValue;

  if (summaryText) summaryText.innerText = `Responden: ${nameVal} • Form: ${p.companyName}`;
  if (statusText) statusText.innerText = 'Status sync: menyiapkan payload...';
  if (modal) modal.classList.remove('hidden');
  showToast('🎉 Form selesai. Menyiapkan pengiriman data...');

  const result = await sendToGoogleSheet(buildSubmissionPayload(), state.webhookUrl);
  if (statusText) statusText.innerText = `Status sync: ${result.message}`;
  if (summaryText) summaryText.innerText += ` • ${result.ok ? 'Terkirim' : result.simulated ? 'Simulasi' : 'Gagal'}`;
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

  showToast(`Tema UI diubah: ${themeKey.toUpperCase()}`);
}

// Font Family Switcher
function changeFontFamily(fontName) {
  state.currentFont = fontName;
  document.body.className = `theme-${state.currentTheme} font-${fontName === 'Plus Jakarta Sans' ? 'jakarta' : fontName.toLowerCase().replace(/\s+/g, '-')}`;
  document.body.style.fontFamily = `'${fontName}', sans-serif`;
  showToast(`Font aktif: ${fontName}`);
}

// Setup Keyboard Hotkeys (A, B, C, D, 1-5 & Enter ↵)
function setupKeyboardNavigation() {
  window.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('#paste-link-modal:not(.hidden), #success-submit-modal:not(.hidden)');
    if (activeModal) return;
    if (state.view !== 'form') return;

    const p = state.presets[state.activePresetKey];
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
    showToast('Format email Google belum valid.');
    return;
  }
  if (!isValidWebhook(webhook) || !isValidWebhook(gform)) {
    showToast('URL harus diawali http:// atau https://.');
    return;
  }

  state.googleEmail = email;
  state.gformUrl = gform;
  state.webhookUrl = webhook;
  closePasteModal();
  renderSyncStatus();
  triggerConfetti();
  showToast(webhook
    ? 'Pengaturan tersimpan. Webhook aktif — data dikirim saat submit.'
    : 'Pengaturan tersimpan. Webhook kosong — submission berstatus simulasi.');
}

function copyFormLink() {
  const p = state.presets[state.activePresetKey];
  const url = `https://iziform.app/f/${p.slug}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast(`Link tersalin: ${url}`);
  }).catch(() => {
    showToast(`Link: ${url}`);
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
