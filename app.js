/**
 * iziForm 2.0 — Google Form Transformer & Multi-Layout Interactive Engine
 */

const state = {
  darkMode: false,
  layoutMode: 'focus', // 'focus' | 'card' | 'chat'
  selectedFont: 'Plus Jakarta Sans',
  selectedTheme: 'sunset',
  currentFormPreset: 'hr',
  focusCurrentIndex: 0,
  chatStepIndex: 0,
  userResponses: {},
  chatHistory: [],
  formsData: {
    hr: {
      title: '💼 Rekrutmen Talenta — PT Digital Nusantara',
      slug: 'rekrutmen-digital-2026',
      questions: [
        {
          id: 'q_name',
          tag: 'IDENTITAS',
          title: 'Siapa nama lengkap Anda?',
          subtitle: 'Masukkan nama resmi sesuai kartu identitas.',
          type: 'text',
          placeholder: 'contoh: Nadia Utami',
          defaultValue: 'Nadia Utami'
        },
        {
          id: 'q_wa',
          tag: 'KONTAK',
          title: 'Berapa nomor WhatsApp aktif Anda?',
          subtitle: 'Tim People Operations akan menghubungi Anda via WhatsApp.',
          type: 'tel',
          placeholder: '0812-xxxx-xxxx',
          defaultValue: '0812-3456-7890'
        },
        {
          id: 'q_role',
          tag: 'SPESIALISASI',
          title: 'Pilih posisi yang ingin Anda lamar:',
          subtitle: 'Pilih salah satu spesialisasi utama Anda.',
          type: 'choice',
          options: [
            { label: 'Lead Fullstack Developer', icon: '💻', desc: 'React, Node, Go & Microservices' },
            { label: 'HR & Talent Acquisition Lead', icon: '👩‍💼', desc: 'Recruitment, KPI & People Culture' },
            { label: 'Growth Marketing Specialist', icon: '🚀', desc: 'Performance Ads & Funnel Optimization' }
          ],
          defaultSelected: 0
        },
        {
          id: 'q_salary',
          tag: 'KOMPENSASI',
          title: 'Berapa ekspektasi gaji bulanan Anda?',
          subtitle: 'Rentang gaji yang diharapkan (Gross).',
          type: 'text',
          placeholder: 'contoh: Rp 15.000.000 - Rp 20.000.000',
          defaultValue: 'Rp 18.000.000 - Rp 22.000.000'
        }
      ]
    },

    marathon: {
      title: '🏃 Merdeka 10K Sunset Fun Run 2026',
      slug: 'sunset-run-jakarta',
      questions: [
        {
          id: 'q_name',
          tag: 'DATA PELARI',
          title: 'Siapa nama lengkap Anda?',
          subtitle: 'Nama ini akan tercetak resmi di E-Sertifikat Finisher.',
          type: 'text',
          placeholder: 'contoh: Budi Pratama',
          defaultValue: 'Budi Pratama'
        },
        {
          id: 'q_wa',
          tag: 'E-TIKET',
          title: 'Nomor WhatsApp untuk konfirmasi tiket:',
          subtitle: 'E-Bib dan QR Code pengambilan racepack akan dikirim via WA.',
          type: 'tel',
          placeholder: '0813-xxxx-xxxx',
          defaultValue: '0813-4455-6677'
        },
        {
          id: 'q_category',
          tag: 'KATEGORI LARI',
          title: 'Pilih jarak tantangan lari Anda:',
          subtitle: 'Semua kategori mendapatkan medali finisher resmi!',
          type: 'choice',
          options: [
            { label: '5K Fun Run', icon: '👟', desc: 'Rute santai & ramah pemula' },
            { label: '10K Challenge Run', icon: '🏅', desc: 'Rute kompetitif dengan cutoff time 90 menit' },
            { label: '21K Half Marathon', icon: '⚡', desc: 'Tantangan jarak menengah pelari tangguh' }
          ],
          defaultSelected: 1
        },
        {
          id: 'q_jersey',
          tag: 'RACE PACK',
          title: 'Pilih ukuran Jersey Finisher Anda:',
          subtitle: 'Bahan dry-fit premium berstandar internasional.',
          type: 'choice',
          options: [
            { label: 'Ukuran M (Lebar 50cm)', icon: '👕', desc: 'Pas untuk berat badan 55 - 68 kg' },
            { label: 'Ukuran L (Lebar 53cm)', icon: '👕', desc: 'Pas untuk berat badan 68 - 78 kg' },
            { label: 'Ukuran XL (Lebar 56cm)', icon: '👕', desc: 'Pas untuk berat badan 78 - 88 kg' }
          ],
          defaultSelected: 1
        }
      ]
    },

    cafe: {
      title: '☕ Kopi Senja — Menu Digital & Order Cepat',
      slug: 'kopi-senja-order',
      questions: [
        {
          id: 'q_name',
          tag: 'PEMESAN',
          title: 'Siapa nama Anda untuk panggilan pesanan?',
          subtitle: 'Barista akan memanggil nama Anda saat minuman siap.',
          type: 'text',
          placeholder: 'contoh: Kak Dimas',
          defaultValue: 'Kak Dimas'
        },
        {
          id: 'q_menu',
          tag: 'MENU UTAMA',
          title: 'Pilih kopi favorit Anda hari ini:',
          subtitle: 'Biji kopi arabika segar pilihan Nusantara.',
          type: 'choice',
          options: [
            { label: 'Kopi Susu Gula Aren', icon: '🥤', desc: 'Rp 22.000 • Signature best seller' },
            { label: 'Caramel Macchiato Ice', icon: '☕', desc: 'Rp 28.000 • Creamy & manis vanila' },
            { label: 'Manual Brew V60 Gayo', icon: '✨', desc: 'Rp 26.000 • Floral & fruity note' }
          ],
          defaultSelected: 0
        },
        {
          id: 'q_sugar',
          tag: 'CUSTOM RASA',
          title: 'Tingkat kemanisan (Sugar Level):',
          subtitle: 'Bebas atur sesuai selera Anda.',
          type: 'choice',
          options: [
            { label: 'Normal Sweet (100%)', icon: '🍯', desc: 'Rasa standar resep barista' },
            { label: 'Less Sweet (50%)', icon: '🍃', desc: 'Paling diminati, tidak terlalu manis' },
            { label: 'No Sugar (0%)', icon: '☕', desc: 'Tanpa pemanis sama sekali' }
          ],
          defaultSelected: 1
        },
        {
          id: 'q_notes',
          tag: 'CATATAN',
          title: 'Catatan tambahan untuk Barista (Opsional):',
          subtitle: 'Misal: Banyakin es, pisah es, atau takeaway.',
          type: 'text',
          placeholder: 'contoh: Less ice ya kak',
          defaultValue: 'Banyakin es batu ya kak'
        }
      ]
    }
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderActiveLayout();
  setupKeyboardListener();
});

// Toggle Dark Mode
function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  const htmlElem = document.documentElement;
  const iconElem = document.getElementById('theme-toggle-icon');

  if (state.darkMode) {
    htmlElem.classList.add('dark');
    htmlElem.classList.remove('light');
    if (iconElem) iconElem.innerText = '☀️';
    showToast('Mode Malam Aktif');
  } else {
    htmlElem.classList.remove('dark');
    htmlElem.classList.add('light');
    if (iconElem) iconElem.innerText = '🌙';
    showToast('Mode Terang Aktif');
  }
}

// Preset Loader
function loadPresetGForm(presetKey) {
  const dummyUrls = {
    hr: 'https://docs.google.com/forms/d/e/1FAIpQLSc8qZ9_HrRecruit2026/viewform',
    marathon: 'https://docs.google.com/forms/d/e/1FAIpQLSe3kM4_SunsetRun10K/viewform',
    cafe: 'https://docs.google.com/forms/d/e/1FAIpQLSd9yO1_CafeKopiOrder/viewform'
  };

  const input = document.getElementById('gform-link-input');
  if (input) input.value = dummyUrls[presetKey];

  state.currentFormPreset = presetKey;
  handleTransformClick();
}

// Handle Transform Click with Magic Stepper Animation
function handleTransformClick() {
  const input = document.getElementById('gform-link-input');
  const urlVal = input ? input.value.trim() : '';

  if (!urlVal) {
    // If empty, auto load HR preset
    loadPresetGForm('hr');
    return;
  }

  const overlay = document.getElementById('transform-animation-overlay');
  const statusText = document.getElementById('transform-step-status');
  const s1 = document.getElementById('trans-step-1');
  const s2 = document.getElementById('trans-step-2');
  const s3 = document.getElementById('trans-step-3');

  if (overlay) overlay.classList.remove('hidden');

  // Animation Sequence
  setTimeout(() => {
    if (statusText) statusText.innerText = 'Membaca struktur pertanyaan dari Google Form...';
    if (s1) s1.className = 'flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400';
  }, 400);

  setTimeout(() => {
    if (statusText) statusText.innerText = 'Mengganti radio button kaku menjadi kartu interaktif...';
    if (s2) s2.className = 'flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400';
  }, 800);

  setTimeout(() => {
    if (statusText) statusText.innerText = 'Menyematkan tipografi modern & fluid transition...';
    if (s3) s3.className = 'flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400';
  }, 1200);

  setTimeout(() => {
    if (overlay) overlay.classList.add('hidden');

    // Update header info
    const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;
    const titleElem = document.getElementById('current-form-title');
    const linkElem = document.getElementById('generated-link-display');

    if (titleElem) titleElem.innerText = curData.title;
    if (linkElem) linkElem.innerText = `iziform.app/f/${curData.slug}`;

    state.focusCurrentIndex = 0;
    state.chatStepIndex = 0;
    state.chatHistory = [];

    renderActiveLayout();

    // Scroll smoothly to studio section
    const studioSection = document.getElementById('section-studio');
    if (studioSection) studioSection.scrollIntoView({ behavior: 'smooth' });

    triggerConfetti();
    showToast('✨ Google Form Berhasil Ditransformasikan Jadi Estetik!');
  }, 1600);
}

// Layout Switcher
function setLayoutMode(mode) {
  state.layoutMode = mode;

  // Update button active state
  ['focus', 'card', 'chat'].forEach(m => {
    const btn = document.getElementById(`btn-layout-${m}`);
    if (btn) {
      if (m === mode) {
        btn.className = 'w-full p-3 rounded-2xl border-2 border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-left transition flex items-start gap-3';
      } else {
        btn.className = 'w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-left transition hover:border-slate-300 flex items-start gap-3';
      }
    }
  });

  const badge = document.getElementById('layout-indicator-badge');
  if (badge) {
    if (mode === 'focus') badge.innerText = 'Mode: Typeform Focus (1-by-1)';
    if (mode === 'card') badge.innerText = 'Mode: Modern Card Stepper';
    if (mode === 'chat') badge.innerText = 'Mode: Percakapan Chat Interaktif';
  }

  renderActiveLayout();
  showToast(`Tampilan diubah ke mode: ${mode.toUpperCase()}`);
}

// Master Render Router
function renderActiveLayout() {
  const vFocus = document.getElementById('view-mode-focus');
  const vCard = document.getElementById('view-mode-card');
  const vChat = document.getElementById('view-mode-chat');

  if (vFocus) vFocus.classList.add('hidden');
  if (vCard) vCard.classList.add('hidden');
  if (vChat) vChat.classList.add('hidden');

  if (state.layoutMode === 'focus') {
    if (vFocus) vFocus.classList.remove('hidden');
    renderFocusMode();
  } else if (state.layoutMode === 'card') {
    if (vCard) vCard.classList.remove('hidden');
    renderCardMode();
  } else if (state.layoutMode === 'chat') {
    if (vChat) vChat.classList.remove('hidden');
    renderChatMode();
  }
}

/* ==========================================================================
   MODE 1: TYPEFORM FOCUS SLIDE (ONE-BY-ONE INTERACTIVE)
   ========================================================================== */
function renderFocusMode() {
  const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;
  const questions = curData.questions;
  const idx = state.focusCurrentIndex;
  const q = questions[idx];

  // Update indicators
  const stepNum = document.getElementById('focus-step-num');
  const percentNum = document.getElementById('focus-percent-num');
  const progressLine = document.getElementById('focus-progress-line');
  const prevBtn = document.getElementById('btn-focus-prev');
  const nextBtn = document.getElementById('btn-focus-next');

  const percent = Math.round(((idx + 1) / questions.length) * 100);

  if (stepNum) stepNum.innerText = `Pertanyaan ${idx + 1} dari ${questions.length}`;
  if (percentNum) percentNum.innerText = `${percent}% Selesai`;
  if (progressLine) progressLine.style.width = `${percent}%`;

  if (prevBtn) {
    if (idx > 0) prevBtn.classList.remove('hidden');
    else prevBtn.classList.add('hidden');
  }

  if (nextBtn) {
    if (idx === questions.length - 1) {
      nextBtn.innerHTML = `<span>Kirim ke Google Sheet</span> <span>✨</span>`;
    } else {
      nextBtn.innerHTML = `<span>Lanjut</span> <span>&rarr;</span>`;
    }
  }

  // Render question card
  const box = document.getElementById('focus-question-box');
  if (!box) return;

  let contentHtml = `
    <div>
      <span class="text-[10px] font-black text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-800 uppercase tracking-wider">
        ${q.tag}
      </span>
      <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-2 leading-snug">
        ${idx + 1}. ${q.title}
      </h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${q.subtitle}</p>
    </div>
  `;

  if (q.type === 'text' || q.type === 'tel') {
    const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
    contentHtml += `
      <div class="pt-2">
        <input type="${q.type}" 
               id="focus-input-field" 
               value="${val}" 
               placeholder="${q.placeholder}" 
               oninput="state.userResponses['${q.id}'] = this.value"
               class="form-input text-sm py-3 px-4 font-semibold">
      </div>
    `;
  } else if (q.type === 'choice') {
    const selectedIdx = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultSelected;
    contentHtml += `
      <div class="space-y-2 pt-2">
        ${q.options.map((opt, optIdx) => `
          <div onclick="selectFocusChoice('${q.id}', ${optIdx})" 
               class="choice-card ${selectedIdx === optIdx ? 'selected' : ''}">
            <div class="flex items-center gap-3">
              <span class="text-xl">${opt.icon}</span>
              <div>
                <span class="text-xs font-bold text-slate-900 dark:text-white block">${opt.label}</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 block">${opt.desc}</span>
              </div>
            </div>
            <span class="w-5 h-5 rounded-full border-2 ${selectedIdx === optIdx ? 'border-brand-600 bg-brand-600' : 'border-slate-300'} flex items-center justify-center text-white text-[10px]">
              ${selectedIdx === optIdx ? '✓' : ''}
            </span>
          </div>
        `).join('')}
      </div>
    `;
  }

  box.innerHTML = contentHtml;

  // Focus input automatically
  setTimeout(() => {
    const inp = document.getElementById('focus-input-field');
    if (inp) inp.focus();
  }, 100);
}

function selectFocusChoice(qId, optIdx) {
  state.userResponses[qId] = optIdx;
  renderFocusMode();
  // Auto advance on choice selection!
  setTimeout(() => {
    focusNextQuestion();
  }, 300);
}

function focusNextQuestion() {
  const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;
  if (state.focusCurrentIndex < curData.questions.length - 1) {
    state.focusCurrentIndex++;
    renderFocusMode();
  } else {
    // Form Completed!
    submitFormSuccess();
  }
}

function focusPrevQuestion() {
  if (state.focusCurrentIndex > 0) {
    state.focusCurrentIndex--;
    renderFocusMode();
  }
}

/* ==========================================================================
   MODE 2: MODERN MULTI-STEP CARD
   ========================================================================== */
function renderCardMode() {
  const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;
  const container = document.getElementById('card-mode-content');
  if (!container) return;

  let html = `
    <div class="border-b border-slate-200 dark:border-slate-800 pb-3">
      <span class="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">Formulir Interaktif</span>
      <h3 class="text-lg font-black text-slate-900 dark:text-white">${curData.title}</h3>
    </div>
  `;

  curData.questions.forEach((q, idx) => {
    html += `
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
        <label class="block text-xs font-bold text-slate-900 dark:text-white">
          ${idx + 1}. ${q.title}
        </label>
    `;

    if (q.type === 'text' || q.type === 'tel') {
      const val = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultValue;
      html += `
        <input type="${q.type}" 
               value="${val}" 
               placeholder="${q.placeholder}" 
               oninput="state.userResponses['${q.id}'] = this.value"
               class="form-input">
      `;
    } else if (q.type === 'choice') {
      const selectedIdx = state.userResponses[q.id] !== undefined ? state.userResponses[q.id] : q.defaultSelected;
      html += `
        <div class="space-y-1.5">
          ${q.options.map((opt, oIdx) => `
            <div onclick="state.userResponses['${q.id}'] = ${oIdx}; renderCardMode();" 
                 class="choice-card p-2.5 ${selectedIdx === oIdx ? 'selected' : ''}">
              <div class="flex items-center gap-2">
                <span>${opt.icon}</span>
                <span class="text-xs font-semibold">${opt.label}</span>
              </div>
              <span class="text-xs font-bold">${selectedIdx === oIdx ? '✓' : ''}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    html += `</div>`;
  });

  html += `
    <button onclick="submitFormSuccess()" class="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition">
      Kirim Jawaban ke Google Sheet &rarr;
    </button>
  `;

  container.innerHTML = html;
}

/* ==========================================================================
   MODE 3: CHAT CONVERSATIONAL STYLE (WHATSAPP VIBE)
   ========================================================================== */
function renderChatMode() {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;

  // Initialize bot greeting if empty
  if (state.chatHistory.length === 0) {
    state.chatHistory.push({
      sender: 'bot',
      text: `Halo! Selamat datang di ${curData.title} 👋`
    });
    const firstQ = curData.questions[0];
    state.chatHistory.push({
      sender: 'bot',
      text: `${firstQ.title} (${firstQ.subtitle})`
    });
  }

  container.innerHTML = state.chatHistory.map(m => `
    <div class="flex items-start gap-2 ${m.sender === 'user' ? 'justify-end' : ''}">
      ${m.sender === 'bot' ? `<span class="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold">iF</span>` : ''}
      <div class="${m.sender === 'bot' ? 'chat-bubble-bot' : 'chat-bubble-user'}">
        <p class="text-xs font-medium">${m.text}</p>
      </div>
    </div>
  `).join('');

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

function handleChatSend() {
  const input = document.getElementById('chat-response-input');
  if (!input) return;

  const val = input.value.trim();
  if (!val) return;

  const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;
  const questions = curData.questions;

  // Record user message
  state.chatHistory.push({ sender: 'user', text: val });
  input.value = '';

  state.chatStepIndex++;

  if (state.chatStepIndex < questions.length) {
    const nextQ = questions[state.chatStepIndex];
    setTimeout(() => {
      state.chatHistory.push({
        sender: 'bot',
        text: `Terima kasih! Sekarang: ${nextQ.title}`
      });
      renderChatMode();
    }, 400);
  } else {
    setTimeout(() => {
      state.chatHistory.push({
        sender: 'bot',
        text: 'Semua pertanyaan selesai dijawab! Mengirim data langsung ke Google Sheet pemilik...'
      });
      renderChatMode();
      submitFormSuccess();
    }, 500);
  }

  renderChatMode();
}

/* ==========================================================================
   SUBMISSION CONFIRMATION (DIRECT TO GSHEET EMULATION)
   ========================================================================== */
function submitFormSuccess() {
  triggerConfetti();
  const modal = document.getElementById('submission-success-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.scrollIntoView({ behavior: 'smooth' });
  }
  showToast('🎉 Data Berhasil Masuk ke Google Sheet Akun Gmail Anda!');
}

function resetSubmissionExperience() {
  state.focusCurrentIndex = 0;
  state.chatStepIndex = 0;
  state.chatHistory = [];
  const modal = document.getElementById('submission-success-modal');
  if (modal) modal.classList.add('hidden');
  renderActiveLayout();
}

// Customizer Handlers
function applyFont(fontName) {
  state.selectedFont = fontName;
  const container = document.getElementById('interactive-canvas-container');
  if (container) container.style.fontFamily = `'${fontName}', sans-serif`;
  showToast(`Font: ${fontName}`);
}

function applyTheme(themeKey) {
  state.selectedTheme = themeKey;
  showToast(`Tema warna: ${themeKey}`);
}

function copyGeneratedLink() {
  const curData = state.formsData[state.currentFormPreset] || state.formsData.hr;
  const fullUrl = `https://iziform.app/f/${curData.slug}`;
  navigator.clipboard.writeText(fullUrl).then(() => {
    showToast(`Link disalin: ${fullUrl}`);
  }).catch(() => {
    showToast(`Link: ${fullUrl}`);
  });
}

// Setup Keyboard Enter Navigation for Focus Mode
function setupKeyboardListener() {
  window.addEventListener('keydown', (e) => {
    if (state.layoutMode === 'focus') {
      if (e.key === 'Enter') {
        focusNextQuestion();
      }
    } else if (state.layoutMode === 'chat') {
      if (e.key === 'Enter') {
        handleChatSend();
      }
    }
  });
}

// Modals & Toasts
function openPricingModal() {
  const modal = document.getElementById('pricing-modal');
  if (modal) modal.classList.remove('hidden');
}

function closePricingModal() {
  const modal = document.getElementById('pricing-modal');
  if (modal) modal.classList.add('hidden');
}

function simulateSuccessfulPayment() {
  closePricingModal();
  triggerConfetti();
  const wm = document.getElementById('focus-watermark');
  if (wm) wm.style.display = 'none';
  showToast('🎉 Pembayaran QRIS Sukses! Watermark Berhasil Dihapus.');
}

function showToast(message) {
  const box = document.getElementById('toast-box');
  if (!box) return;

  const toast = document.createElement('div');
  toast.className = 'p-3.5 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-brand-200 dark:border-brand-800 text-slate-900 dark:text-white text-xs font-bold shadow-2xl flex items-center gap-2.5 transform transition-all duration-300 translate-y-2 opacity-0';
  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
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
