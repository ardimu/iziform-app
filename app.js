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
  gformUrl: '',
  webhookUrl: '',
  presets: {
    hr: {
      companyName: 'PT Digital Nusantara Indonesia',
      subText: 'Official Career Portal • Talenta Teknologi 2026 • Data tersambung aman ke Google Sheet',
      logo: '🏢',
      categoryTag: 'OFFICIAL CAREER PORTAL',
      coverImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      slug: 'rekrutmen-digital-2026',
      questions: [
        {
          id: 'hr_name',
          category: '01 • IDENTITAS KANDIDAT',
          title: 'Siapa nama lengkap Anda?',
          subtitle: 'Masukkan nama resmi Anda sesuai yang tertera pada resume atau KTP.',
          type: 'text',
          placeholder: 'Ketik nama lengkap Anda di sini...',
          defaultValue: 'Nadia Utami'
        },
        {
          id: 'hr_wa',
          category: '02 • KONTAK LANGSUNG',
          title: 'Berapa nomor WhatsApp aktif Anda?',
          subtitle: 'Tim People & Culture kami akan mengabari jadwal interview via WhatsApp.',
          type: 'tel',
          placeholder: '0812-xxxx-xxxx',
          defaultValue: '0812-3456-7890'
        },
        {
          id: 'hr_role',
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
          id: 'hr_start_date',
          category: '04 • KESIAPAN BERGABUNG',
          title: 'Kapan tanggal mulai Anda tersedia?',
          subtitle: 'Tanggal awal kerja atau tanggal Anda siap bergabung dengan tim.',
          type: 'date',
          defaultValue: '2026-12-01'
        },
        {
          id: 'hr_cv',
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

    preorder: {
      companyName: 'Ruang Kreasi Pre-Order & Client Brief',
      subText: 'Portal Pre-Order & Brief Klien • Langsung Tercatat di Google Sheet',
      logo: '🛍️',
      categoryTag: 'PRE-ORDER & CLIENT BRIEF',
      coverImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      slug: 'pre-order-client-brief',
      questions: [
        {
          id: 'order_name',
          category: '01 • IDENTITAS KLIEN',
          title: 'Siapa nama klien atau bisnis Anda?',
          subtitle: 'Nama ini akan dipakai sebagai identitas pada brief dan invoice.',
          type: 'text',
          placeholder: 'contoh: Nadia Creative Studio',
          defaultValue: 'Nadia Creative Studio'
        },
        {
          id: 'order_item',
          category: '02 • JENIS PESANAN',
          title: 'Pilih layanan yang ingin dipesan:',
          subtitle: 'Pilih satu layanan utama yang paling sesuai dengan kebutuhan Anda.',
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
          category: '03 • BRIEF SINGKAT',
          title: 'Ceritakan kebutuhan dan target pesanan Anda:',
          subtitle: 'Jelaskan tujuan, audiens, gaya yang disukai, dan hal yang harus dihindari.',
          type: 'textarea',
          placeholder: 'Contoh: ingin kemasan ramah lingkungan untuk kopi specialty, target anak muda 20-35 tahun...',
          defaultValue: 'Ingin kemasan ramah lingkungan untuk produk kopi specialty dengan kesan modern dan hangat.'
        },
        {
          id: 'order_deadline',
          category: '04 • TARGET PENGIRIMAN',
          title: 'Kapan tanggal target pengiriman desain?',
          subtitle: 'Kami akan menyesuaikan jadwal produksi berdasarkan tanggal ini.',
          type: 'date',
          defaultValue: '2026-12-15'
        },
        {
          id: 'order_reference',
          category: '05 • REFERENSI DOKUMEN',
          title: 'Unggah moodboard atau tempel link referensi:',
          subtitle: 'Boleh file gambar/PDF atau linkDrive/Figma yang sudah Anda siapkan.',
          type: 'file',
          placeholder: 'https://drive.google.com/...'
        }
      ]
    }
  }
};

let advanceTimer = null;

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderActivePresetHeader();
  renderCurrentQuestion();
  setupKeyboardNavigation();
});

// Switch Active Preset (HR, Event, Pre-Order)
function switchActivePreset(presetKey) {
  if (!state.presets[presetKey]) return;
  clearAdvanceTimer();
  state.activePresetKey = presetKey;
  state.currentStepIndex = 0;
  state.userResponses = {};

  // Update demo buttons
  ['hr', 'event', 'preorder'].forEach(k => {
    const btn = document.getElementById(`demo-btn-${k}`);
    if (btn) btn.classList.toggle('active', k === presetKey);
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
  state.currentStepIndex = 0;
  state.userResponses = {};
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
  document.body.className = `theme-${state.currentTheme} font-${fontName === 'Plus Jakarta Sans' ? 'jakarta' : fontName.toLowerCase().replace(/\s+/g, '-')}`;
  document.body.style.fontFamily = `'${fontName}', sans-serif`;
  showToast(`Font aktif: ${fontName}`);
}

// Setup Keyboard Hotkeys (A, B, C, D, 1-5 & Enter ↵)
function setupKeyboardNavigation() {
  window.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('#paste-link-modal:not(.hidden), #success-submit-modal:not(.hidden)');
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

  const gformInput = document.getElementById('modal-gform-input');
  if (gformInput) gformInput.value = state.gformUrl;
  const webhookInput = document.getElementById('modal-webhook-input');
  if (webhookInput) webhookInput.value = state.webhookUrl;
  const syncStatus = document.getElementById('paste-sync-status');
  if (syncStatus) syncStatus.innerText = state.webhookUrl ? 'Webhook: aktif' : 'Webhook: belum diisi (mode simulasi)';
}

function closePasteModal() {
  const m = document.getElementById('paste-link-modal');
  if (m) m.classList.add('hidden');
}

function applyPastedGForm() {
  const inp = document.getElementById('modal-gform-input');
  const hook = document.getElementById('modal-webhook-input');
  if (!inp || !inp.value.trim()) {
    showToast('Mohon masukkan tautan Google Form.');
    return;
  }

  state.gformUrl = inp.value.trim();
  state.webhookUrl = hook && hook.value.trim() ? hook.value.trim() : '';
  closePasteModal();
  triggerConfetti();
  showToast(state.webhookUrl
    ? '✨ Link tersimpan. Webhook aktif — data dikirim saat submit.'
    : '✨ Link tersimpan. Webhook belum diisi — submission berstatus simulasi.');
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
