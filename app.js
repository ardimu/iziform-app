/**
 * iziForm 3.0 — Luxury Open-Canvas Interactive Engine
 * Bespoke corporate landing form experience with hotkeys & multi-themes.
 */

const state = {
  currentTheme: 'silicon',
  currentFont: 'Plus Jakarta Sans',
  activePresetKey: 'hr',
  currentStepIndex: 0,
  userResponses: {},
  presets: {
    hr: {
      companyName: 'PT Digital Nusantara Indonesia',
      subText: 'Portal Rekrutmen Resmi Talenta Teknologi 2026 • Tersambung ke Google Sheet',
      logo: '🏢',
      categoryTag: 'OFFICIAL RECRUITMENT',
      coverImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      slug: 'rekrutmen-digital-2026',
      questions: [
        {
          id: 'q_name',
          category: '01 • IDENTITAS KANDIDAT',
          title: 'Siapa nama lengkap Anda?',
          subtitle: 'Masukkan nama resmi Anda sesuai yang tertera pada resume atau KTP.',
          type: 'text',
          placeholder: 'Ketik nama lengkap Anda di sini...',
          defaultValue: 'Nadia Utami'
        },
        {
          id: 'q_wa',
          category: '02 • KONTAK LANGSUNG',
          title: 'Berapa nomor WhatsApp aktif Anda?',
          subtitle: 'Tim People & Culture kami akan mengabari jadwal interview via WhatsApp.',
          type: 'tel',
          placeholder: '0812-xxxx-xxxx',
          defaultValue: '0812-3456-7890'
        },
        {
          id: 'q_role',
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
          id: 'q_salary',
          category: '04 • EKSPEKTASI KOMPENSASI',
          title: 'Berapa perkiraan rentang gaji bulanan yang Anda harapkan?',
          subtitle: 'Ekspektasi gaji kotor (Gross) yang diharapkan per bulan.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '💵', title: 'Rp 10.000.000 - Rp 15.000.000', desc: 'Mid-Level Specialist Tier' },
            { hotkey: 'B', icon: '💎', title: 'Rp 16.000.000 - Rp 25.000.000', desc: 'Senior / Lead Specialist Tier' },
            { hotkey: 'C', icon: '👑', title: 'Di atas Rp 25.000.000', desc: 'Principal / Department Lead Tier' }
          ],
          defaultIndex: 1
        }
      ]
    },

    marathon: {
      companyName: 'Jakarta Sunset 10K Marathon 2026',
      subText: 'Official Race Registration Portal • Terhubung ke Google Sheet Panitia',
      logo: '🏃‍♂️',
      categoryTag: 'RACE REGISTRATION 2026',
      coverImg: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
      slug: 'sunset-run-jakarta',
      questions: [
        {
          id: 'q_name',
          category: '01 • DATA PELARI',
          title: 'Siapa nama lengkap Anda untuk sertifikat?',
          subtitle: 'Nama ini akan dicetak resmi pada Nomor Dada (BIB) dan E-Finisher Medal.',
          type: 'text',
          placeholder: 'Nama lengkap pelari...',
          defaultValue: 'Budi Pratama'
        },
        {
          id: 'q_wa',
          category: '02 • KONFIRMASI E-TIKET',
          title: 'Nomor WhatsApp untuk pengiriman tiket lari:',
          subtitle: 'QR Code pengambilan Race Pack Finisher akan dikirimkan langsung ke nomor ini.',
          type: 'tel',
          placeholder: '0813-xxxx-xxxx',
          defaultValue: '0813-9988-7766'
        },
        {
          id: 'q_category',
          category: '03 • KATEGORI TANTANGAN',
          title: 'Pilih jarak tantangan lari Anda:',
          subtitle: 'Semua pelari yang finish sebelum Cut-Off Time berhak atas Medali Resmi.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '👟', title: '5K Fun Run', desc: 'Rute santai & ramah pemula (COT: 60 Menit)' },
            { hotkey: 'B', icon: '🏅', title: '10K Challenge Run', desc: 'Rute kompetitif resmi (COT: 120 Menit)' },
            { hotkey: 'C', icon: '⚡', title: '21K Half Marathon', desc: 'Tantangan endurance pelari terlatih (COT: 3 Jam)' }
          ],
          defaultIndex: 1
        },
        {
          id: 'q_jersey',
          category: '04 • UKURAN JERSEY',
          title: 'Pilih ukuran Jersey Finisher Dry-Fit Anda:',
          subtitle: 'Bahan dry-fit premium berstandar internasional.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '👕', title: 'Ukuran S (Lebar 47 cm)', desc: 'Ideal untuk berat badan 45 - 55 kg' },
            { hotkey: 'B', icon: '👕', title: 'Ukuran M (Lebar 50 cm)', desc: 'Ideal untuk berat badan 56 - 68 kg' },
            { hotkey: 'C', icon: '👕', title: 'Ukuran L (Lebar 53 cm)', desc: 'Ideal untuk berat badan 69 - 80 kg' },
            { hotkey: 'D', icon: '👕', title: 'Ukuran XL (Lebar 56 cm)', desc: 'Ideal untuk berat badan 81 - 92 kg' }
          ],
          defaultIndex: 2
        }
      ]
    },

    cafe: {
      companyName: 'Kopi Senja Roastery & Bistro',
      subText: 'Menu Digital & Order Cepat • Langsung Tercatat di Google Sheet Kasir',
      logo: '☕',
      categoryTag: 'DIGITAL ORDER MENU',
      coverImg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      slug: 'kopi-senja-order',
      questions: [
        {
          id: 'q_name',
          category: '01 • NAMA PEMESAN',
          title: 'Siapa nama panggilan Anda untuk antrean?',
          subtitle: 'Barista kami akan memanggil nama Anda begitu pesanan siap dinikmati.',
          type: 'text',
          placeholder: 'contoh: Kak Dimas',
          defaultValue: 'Kak Dimas'
        },
        {
          id: 'q_coffee',
          category: '02 • PILIHAN KOPI',
          title: 'Pilih minuman favorit Anda hari ini:',
          subtitle: 'Biji kopi arabika segar pilihan yang digiling sesaat sebelum diseduh.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '🥤', title: 'Kopi Susu Aren Signature (Ice)', desc: 'Rp 22.000 • Creamy, manis legit aren asli' },
            { hotkey: 'B', icon: '☕', title: 'Caramel Macchiato (Hot/Ice)', desc: 'Rp 28.000 • Espresso kaya rasa dengan drizzle karamel' },
            { hotkey: 'C', icon: '✨', title: 'Manual Brew V60 Single Origin', desc: 'Rp 26.000 • Biji Gayo / Toraja dengan rasa floral buah' }
          ],
          defaultIndex: 0
        },
        {
          id: 'q_sugar',
          category: '03 • LEVEL KEMANISAN',
          title: 'Pilih tingkat kemanisan (Sugar Level):',
          subtitle: 'Atur takaran pemanis sesuai selera kesehatan Anda.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '🍯', title: 'Normal Sweet (100%)', desc: 'Resep standar racikan barista' },
            { hotkey: 'B', icon: '🍃', title: 'Less Sweet (50%)', desc: 'Paling favorit! Rasa kopi lebih menonjol' },
            { hotkey: 'C', icon: '☕', title: 'Zero Sugar (0%)', desc: 'Murni tanpa tambahan pemanis' }
          ],
          defaultIndex: 1
        },
        {
          id: 'q_payment',
          category: '04 • METODE BAYAR',
          title: 'Pilih cara pembayaran Anda:',
          subtitle: 'Pesanan akan otomatis tercatat di Google Sheet dapur.',
          type: 'choice',
          options: [
            { hotkey: 'A', icon: '💳', title: 'QRIS Instan', desc: 'BCA, GoPay, OVO, ShopeePay, DANA' },
            { hotkey: 'B', icon: '💵', title: 'Bayar Tunai / EDC di Kasir', desc: 'Selesaikan transaksi langsung saat ambil pesanan' }
          ],
          defaultIndex: 0
        }
      ]
    }
  }
};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderActivePresetHeader();
  renderCurrentQuestion();
  setupKeyboardNavigation();
});

// Switch Active Preset (HR, Marathon, Cafe)
function switchActivePreset(presetKey) {
  if (!state.presets[presetKey]) return;
  state.activePresetKey = presetKey;
  state.currentStepIndex = 0;

  // Update demo buttons
  ['hr', 'marathon', 'cafe'].forEach(k => {
    const btn = document.getElementById(`demo-btn-${k}`);
    if (btn) {
      if (k === presetKey) {
        btn.className = 'px-2.5 py-1 rounded-lg bg-brand-600 text-white font-bold text-xs shadow-sm';
      } else {
        btn.className = 'px-2.5 py-1 rounded-lg bg-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-300';
      }
    }
  });

  renderActivePresetHeader();
  renderCurrentQuestion();
  showToast(`Beralih ke template: ${state.presets[presetKey].companyName}`);
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

  if (coverImg) coverImg.src = p.coverImg;
  if (catBadge) catBadge.innerText = p.categoryTag;
  if (logoBox) logoBox.innerText = p.logo;
  if (companyName) companyName.innerText = p.companyName;
  if (companySub) companySub.innerText = p.subText;
  if (headerPill) headerPill.innerText = `iziform.app/f/${p.slug}`;
}

// Render Current Question Card (Breathable & Luxurious)
function renderCurrentQuestion() {
  const p = state.presets[state.activePresetKey];
  const qList = p.questions;
  const idx = state.currentStepIndex;
  const q = qList[idx];

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
    const inp = document.getElementById('large-input-field');
    if (inp) inp.focus();
  }, 80);
}

// Select Option Tile Handler
function selectOptionTile(qId, optIdx) {
  state.userResponses[qId] = optIdx;
  renderCurrentQuestion();
  
  // Smoothly auto advance to next question on card selection!
  setTimeout(() => {
    nextStepQuestion();
  }, 260);
}

// Dock Navigation
function nextStepQuestion() {
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

// Form Submission Success
function triggerFormSubmissionSuccess() {
  triggerConfetti();
  const modal = document.getElementById('success-submit-modal');
  const p = state.presets[state.activePresetKey];
  const summaryText = document.getElementById('summary-payload-text');

  if (summaryText) {
    const nameVal = state.userResponses['q_name'] || p.questions[0].defaultValue;
    summaryText.innerText = `Responden: ${nameVal} • Form: ${p.companyName} • Status: Terkirim`;
  }

  if (modal) modal.classList.remove('hidden');
  showToast('🎉 Data responden berhasil dikirim langsung ke Google Sheet!');
}

function closeSuccessModal() {
  const modal = document.getElementById('success-submit-modal');
  if (modal) modal.classList.add('hidden');
  state.currentStepIndex = 0;
  renderCurrentQuestion();
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
  document.body.style.fontFamily = `'${fontName}', sans-serif`;
  showToast(`Font aktif: ${fontName}`);
}

// Setup Keyboard Hotkeys (A, B, C, D & Enter ↵)
function setupKeyboardNavigation() {
  window.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('#paste-link-modal:not(.hidden)');
    if (activeModal) return;

    const p = state.presets[state.activePresetKey];
    const q = p.questions[state.currentStepIndex];

    if (e.key === 'Enter') {
      nextStepQuestion();
    } else if (e.key === 'ArrowUp') {
      prevStepQuestion();
    } else if (q.type === 'choice') {
      const keyUpper = e.key.toUpperCase();
      const matchedIdx = q.options.findIndex(opt => opt.hotkey === keyUpper);
      if (matchedIdx !== -1) {
        selectOptionTile(q.id, matchedIdx);
      }
    }
  });
}

// Paste GForm Modal Handlers
function openPasteModal() {
  const m = document.getElementById('paste-link-modal');
  if (m) m.classList.remove('hidden');
}

function closePasteModal() {
  const m = document.getElementById('paste-link-modal');
  if (m) m.classList.add('hidden');
}

function applyPastedGForm() {
  const inp = document.getElementById('modal-gform-input');
  if (!inp || !inp.value.trim()) {
    showToast('Mohon masukkan tautan Google Form.');
    return;
  }

  closePasteModal();
  triggerConfetti();
  showToast('✨ Berhasil membaca Google Form! Tampilan telah disulap.');
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
  toast.className = 'p-3.5 px-4 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-2xl flex items-center gap-2.5 transform transition-all duration-300 translate-y-2 opacity-0 border border-slate-700';
  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
    <span>${message}</span>
  `;

  box.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
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
