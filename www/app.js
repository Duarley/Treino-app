const baseWeeks = [
  {
    week: 1,
    title: 'Semana 1',
    exercises: [
      {
        id: 'pushup',
        name: 'Flexoes de braco',
        sets: 3,
        reps: '8-10',
        restSec: 75,
        tip: 'Mantenha o core firme e desca controlando.',
        steps: [
          'Maos alinhadas com o peito, cotovelos a 45 graus.',
          'Desca ate o peito quase tocar o chao.',
          'Suba estendendo os bracos sem travar os cotovelos.'
        ]
      },
      {
        id: 'pike',
        name: 'Flexoes Pike',
        sets: 3,
        reps: '8-10',
        restSec: 75,
        tip: 'Quadril alto e cabeca indo em direcao ao chao.',
        steps: [
          'Forme um V invertido com o corpo.',
          'Desca a cabeca entre as maos, cotovelos fechados.',
          'Suba empurrando o chao e mantendo o quadril alto.'
        ]
      },
      {
        id: 'diamond',
        name: 'Flexoes Diamante',
        sets: 3,
        reps: '6-8',
        restSec: 90,
        tip: 'Maos juntas, foco no triceps e peitoral.',
        steps: [
          'Unir polegares e indicadores formando um diamante.',
          'Desca mantendo o tronco alinhado.',
          'Suba controlando e mantendo o core firme.'
        ]
      },
      {
        id: 'squat',
        name: 'Agachamento livre',
        sets: 4,
        reps: '12-15',
        restSec: 90,
        tip: 'Coluna neutra e joelhos alinhados com os pes.',
        steps: [
          'Pes afastados na largura do ombro.',
          'Desca levando o quadril para tras.',
          'Suba empurrando o chao com os calcanhares.'
        ]
      },
      {
        id: 'lunge',
        name: 'Avancos (por perna)',
        sets: 3,
        reps: '8',
        restSec: 90,
        tip: 'Passo firme e joelho de tras quase tocando o chao.',
        steps: [
          'De um passo longo para frente.',
          'Desca ate formar 90 graus nos joelhos.',
          'Retorne e repita alternando as pernas.'
        ]
      },
      {
        id: 'calf',
        name: 'Elevacao de panturrilha',
        sets: 3,
        reps: '25-30',
        restSec: 60,
        tip: 'Suba maximo e desca controlando.',
        steps: [
          'Apoie o peso nos dedos dos pes.',
          'Eleve os calcanhares o maximo possivel.',
          'Desca devagar mantendo o controle.'
        ]
      },
      {
        id: 'glute',
        name: 'Ponte de Gluteos (segure 2s topo)',
        sets: 3,
        reps: '12',
        restSec: 75,
        tip: 'Segure 2 segundos no topo apertando os gluteos.',
        steps: [
          'Deite e apoie os pes no chao.',
          'Eleve o quadril alinhando joelhos e ombros.',
          'Segure 2s e desca controlando.'
        ]
      },
      {
        id: 'superman',
        name: 'Superman',
        sets: 3,
        reps: '10-12',
        restSec: 60,
        tip: 'Contraia gluteos e costas durante o movimento.',
        steps: [
          'Deite de barriga para baixo com bracos estendidos.',
          'Eleve bracos e pernas ao mesmo tempo.',
          'Desca sem relaxar totalmente.'
        ]
      },
      {
        id: 'plank',
        name: 'Prancha',
        sets: 3,
        reps: '30-40s',
        mode: 'time',
        timeSec: 35,
        restSec: 60,
        tip: 'Alinhe cabeca, tronco e quadril.',
        steps: [
          'Apoie os antebracos no chao.',
          'Mantenha o corpo reto e contraia o abdomen.',
          'Respire curto e controlado.'
        ]
      },
      {
        id: 'legraise',
        name: 'Elevacao de pernas deitado',
        sets: 3,
        reps: '10',
        restSec: 60,
        tip: 'Lombar colada no chao, suba e desca lento.',
        steps: [
          'Deite com maos ao lado do corpo.',
          'Eleve as pernas estendidas ate 90 graus.',
          'Desca devagar sem arquear a lombar.'
        ]
      }
    ]
  },
  {
    week: 2,
    title: 'Semana 2',
    exercises: [
      {
        id: 'pushup',
        name: 'Flexoes de braco',
        sets: 3,
        reps: '10-12',
        restSec: 75,
        tip: 'Controle o ritmo e mantenha a linha do corpo.',
        steps: [
          'Maos alinhadas com o peito, cotovelos a 45 graus.',
          'Desca ate o peito quase tocar o chao.',
          'Suba mantendo o core firme.'
        ]
      },
      {
        id: 'pike',
        name: 'Flexoes Pike',
        sets: 3,
        reps: '10-12',
        restSec: 75,
        tip: 'Quadril alto e cabeca indo em direcao ao chao.',
        steps: [
          'Forme um V invertido com o corpo.',
          'Desca a cabeca entre as maos, cotovelos fechados.',
          'Suba empurrando o chao e mantendo o quadril alto.'
        ]
      },
      {
        id: 'diamond',
        name: 'Flexoes Diamante',
        sets: 3,
        reps: '8-10',
        restSec: 90,
        tip: 'Foque no triceps e mantenha o tronco firme.',
        steps: [
          'Unir polegares e indicadores formando um diamante.',
          'Desca mantendo o tronco alinhado.',
          'Suba controlando e mantendo o core firme.'
        ]
      },
      {
        id: 'squat',
        name: 'Agachamento livre',
        sets: 4,
        reps: '15-18',
        restSec: 90,
        tip: 'Mantenha o peito aberto e o peso no calcanhar.',
        steps: [
          'Pes afastados na largura do ombro.',
          'Desca levando o quadril para tras.',
          'Suba empurrando o chao com os calcanhares.'
        ]
      },
      {
        id: 'lunge',
        name: 'Avancos (por perna)',
        sets: 3,
        reps: '10',
        restSec: 90,
        tip: 'Passo firme, joelhos a 90 graus.',
        steps: [
          'De um passo longo para frente.',
          'Desca ate formar 90 graus nos joelhos.',
          'Retorne e repita alternando as pernas.'
        ]
      },
      {
        id: 'calf',
        name: 'Elevacao de panturrilha',
        sets: 3,
        reps: '20-25',
        restSec: 60,
        tip: 'Amplitude maxima e descida controlada.',
        steps: [
          'Apoie o peso nos dedos dos pes.',
          'Eleve os calcanhares o maximo possivel.',
          'Desca devagar mantendo o controle.'
        ]
      },
      {
        id: 'glute',
        name: 'Ponte de Gluteos (segure 3s topo)',
        sets: 3,
        reps: '15',
        restSec: 75,
        tip: 'Segure 3 segundos no topo apertando os gluteos.',
        steps: [
          'Deite e apoie os pes no chao.',
          'Eleve o quadril alinhando joelhos e ombros.',
          'Segure 3s e desca controlando.'
        ]
      },
      {
        id: 'superman',
        name: 'Superman',
        sets: 3,
        reps: '12-15',
        restSec: 60,
        tip: 'Contraia gluteos e costas durante o movimento.',
        steps: [
          'Deite de barriga para baixo com bracos estendidos.',
          'Eleve bracos e pernas ao mesmo tempo.',
          'Desca sem relaxar totalmente.'
        ]
      },
      {
        id: 'plank',
        name: 'Prancha',
        sets: 3,
        reps: '60-75s',
        mode: 'time',
        timeSec: 70,
        restSec: 60,
        tip: 'Mantenha o alinhamento e respire controlado.',
        steps: [
          'Apoie os antebracos no chao.',
          'Mantenha o corpo reto e contraia o abdomen.',
          'Respire curto e controlado.'
        ]
      },
      {
        id: 'legraise',
        name: 'Elevacao de pernas deitado',
        sets: 3,
        reps: '12-15',
        restSec: 60,
        tip: 'Lombar colada no chao, suba e desca lento.',
        steps: [
          'Deite com maos ao lado do corpo.',
          'Eleve as pernas estendidas ate 90 graus.',
          'Desca devagar sem arquear a lombar.'
        ]
      }
    ]
  }
];

const TOTAL_WEEKS = 12;
const DAYS_PER_WEEK = 7;
const TOTAL_DAYS = TOTAL_WEEKS * DAYS_PER_WEEK;
const REP_SECONDS = 2.5;
const MOTIVATION_LINES = [
  'Boa cadencia. Continue firme.',
  'Respire e mantenha o controle.',
  'Otimo ritmo. Voce esta indo bem.',
  'Foco na postura e no movimento.',
  'Forca e controle. Mais uma.'
];
const REST_HINTS = [
  'Respire fundo e solte os ombros.',
  'Hidrate e prepare o proximo movimento.',
  'Recupere o folego e mantenha a postura.'
];

const ICONS = {
  pushup: `<svg viewBox="0 0 24 24"><path d="M3 16h18"/><path d="M6 16l3-6h6l3 6"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/></svg>`,
  pike: `<svg viewBox="0 0 24 24"><path d="M4 16h16"/><path d="M8 16l4-8 4 8"/><path d="M12 8l-2 4h4"/></svg>`,
  diamond: `<svg viewBox="0 0 24 24"><path d="M3 16h18"/><path d="M7 16l5-6 5 6"/><path d="M12 9l-2 2 2 2 2-2-2-2"/></svg>`,
  squat: `<svg viewBox="0 0 24 24"><path d="M5 5h14"/><path d="M8 5v6l4 4 4-4V5"/><path d="M6 19h12"/></svg>`,
  lunge: `<svg viewBox="0 0 24 24"><path d="M4 19h16"/><path d="M8 5v7l4 3 4-3V5"/><path d="M8 12l-3 3"/></svg>`,
  calf: `<svg viewBox="0 0 24 24"><path d="M6 19h12"/><path d="M10 5v10l2 2 2-2V5"/><path d="M9 17h6"/></svg>`,
  glute: `<svg viewBox="0 0 24 24"><path d="M4 16h16"/><path d="M7 16l5-7 5 7"/><path d="M9 9h6"/></svg>`,
  superman: `<svg viewBox="0 0 24 24"><path d="M3 12h18"/><path d="M6 9l3 3-3 3"/><path d="M18 9l-3 3 3 3"/></svg>`,
  plank: `<svg viewBox="0 0 24 24"><path d="M3 16h18"/><path d="M6 16l3-6h6l3 6"/><path d="M9 10h6"/></svg>`,
  legraise: `<svg viewBox="0 0 24 24"><path d="M4 18h16"/><path d="M10 6v12"/><path d="M14 10l4 4"/></svg>`
};

const defaultSettings = {
  restMultiplier: 1,
  voiceEnabled: false,
  soundEnabled: true,
  autoAdvance: true,
  simEnabled: true,
  darkMode: false,
  reminders: {
    enabled: false,
    time: '18:00',
    days: [1, 3, 5]
  }
};

const state = {
  dayIndex: 0,
  route: 'list',
  coach: {
    exIndex: 0,
    setIndex: 1,
    status: 'idle',
    restRemaining: 0,
    repCount: 0,
    pausedFrom: null,
    nextAction: 'nextSet',
    startCountdown: 0,
    autoStartRemaining: 0
  },
  timers: {
    rest: null,
    rep: null,
    sim: null,
    webReminder: null,
    webReminderTick: null,
    startCountdown: null,
    autoStart: null
  },
  simCounter: 0,
  simFrame: 0,
  simExerciseId: null,
  simStatus: null,
  voice: {
    halfAnnounced: false,
    seventyFiveAnnounced: false,
    ninetyAnnounced: false,
    lastCountdown: {},
    tipSpoken: {},
    prepSpoken: {},
    lastMotivationAt: 0,
    motivationIndex: 0
  },
  nextReminderAt: null,
  lastReminderKey: localStorage.getItem('treino-last-reminder') || null,
  reminderConfig: null
};

const els = {
  dayLabel: document.getElementById('day-label'),
  weekLabel: document.getElementById('week-label'),
  monthLabel: document.getElementById('month-label'),
  navButtons: document.querySelectorAll('.bottom-nav [data-route]'),
  screenList: document.getElementById('screen-list'),
  screenCoach: document.getElementById('screen-coach'),
  screenCalendar: document.getElementById('screen-calendar'),
  screenReminders: document.getElementById('screen-reminders'),
  screenSettings: document.getElementById('screen-settings'),
  exerciseList: document.getElementById('exercise-list'),
  startWorkout: document.getElementById('start-workout'),
  resetProgress: document.getElementById('reset-progress'),
  coachExName: document.getElementById('coach-ex-name'),
  coachSet: document.getElementById('coach-set'),
  coachReps: document.getElementById('coach-reps'),
  repProgress: document.getElementById('rep-progress'),
  coachStatus: document.getElementById('coach-status'),
  coachTip: document.getElementById('coach-tip'),
  coachSteps: document.getElementById('coach-steps'),
  coachStart: document.getElementById('coach-start'),
  coachSkip: document.getElementById('coach-skip'),
  coachNext: document.getElementById('coach-next'),
  restOverlay: document.getElementById('rest-overlay'),
  restOverlayLabel: document.getElementById('rest-overlay-label'),
  restOverlayTime: document.getElementById('rest-overlay-time'),
  restOverlayNext: document.getElementById('rest-overlay-next'),
  restOverlaySkip: document.getElementById('rest-overlay-skip'),
  simCounter: document.getElementById('sim-counter'),
  simBar: document.getElementById('sim-bar'),
  simFigure: document.getElementById('sim-figure'),
  simCaption: document.getElementById('sim-caption'),
  progressBar: document.getElementById('progress-bar'),
  progressText: document.getElementById('progress-text'),
  remindersEnabled: document.getElementById('reminders-enabled'),
  remindersTime: document.getElementById('reminders-time'),
  remindersDays: document.getElementById('reminders-days'),
  remindersSave: document.getElementById('reminders-save'),
  remindersTest: document.getElementById('reminders-test'),
  remindersStatus: document.getElementById('reminders-status'),
  remindersNext: document.getElementById('reminders-next'),
  restMult: document.getElementById('rest-mult'),
  restMultValue: document.getElementById('rest-mult-value'),
  voiceEnabled: document.getElementById('voice-enabled'),
  soundEnabled: document.getElementById('sound-enabled'),
  autoAdvance: document.getElementById('auto-advance'),
  simEnabled: document.getElementById('sim-enabled'),
  darkMode: document.getElementById('dark-mode'),
  saveSettings: document.getElementById('save-settings'),
  resetSettings: document.getElementById('reset-settings'),
  testVoice: document.getElementById('test-voice'),
  testSound: document.getElementById('test-sound'),
  settingsStatus: document.getElementById('settings-status'),
  calendarGrid: document.getElementById('calendar-grid'),
  calendarStatus: document.getElementById('calendar-status')
};

const store = {
  loadSettings() {
    const saved = localStorage.getItem('treino-settings');
    if (!saved) return { ...defaultSettings };
    try {
      const parsed = JSON.parse(saved);
      return { ...defaultSettings, ...parsed, reminders: { ...defaultSettings.reminders, ...parsed.reminders } };
    } catch {
      return { ...defaultSettings };
    }
  },
  saveSettings(next) {
    localStorage.setItem('treino-settings', JSON.stringify(next));
  },
  loadProgress() {
    const saved = localStorage.getItem('treino-progress');
    if (!saved) return null;
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  },
  saveProgress(progress) {
    localStorage.setItem('treino-progress', JSON.stringify(progress));
  },
  clearProgress() {
    localStorage.removeItem('treino-progress');
  },
  loadSchedule() {
    const saved = localStorage.getItem('treino-schedule');
    if (!saved) return null;
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  },
  saveSchedule(schedule) {
    localStorage.setItem('treino-schedule', JSON.stringify(schedule));
  }
};

let settings = store.loadSettings();
let audioContext = null;
let routeTimer = null;
const days = [
  { id: 1, label: 'Seg' },
  { id: 2, label: 'Ter' },
  { id: 3, label: 'Qua' },
  { id: 4, label: 'Qui' },
  { id: 5, label: 'Sex' },
  { id: 6, label: 'Sab' },
  { id: 0, label: 'Dom' }
];

function init() {
  setupDays();
  bindEvents();
  applySettingsToUI();
  initSchedule();
  renderExercises();
  initCoachFromProgress();
  initRouter();
  renderCalendar();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      checkAndFireReminder();
    }
  });
}

function bindEvents() {
  els.navButtons.forEach((btn) => {
    btn.addEventListener('click', () => navigate(btn.dataset.route));
  });
  els.startWorkout.addEventListener('click', () => startWorkout());
  els.resetProgress.addEventListener('click', () => resetProgress());
  els.coachStart.addEventListener('click', () => startSet());
  els.coachSkip.addEventListener('click', () => skipExercise());
  els.restOverlaySkip.addEventListener('click', () => finishRest());
  els.remindersSave.addEventListener('click', () => saveReminders());
  els.remindersTest.addEventListener('click', () => testNotification());
  els.restMult.addEventListener('input', () => {
    els.restMultValue.textContent = `${Number(els.restMult.value).toFixed(2)}x`;
  });
  els.saveSettings.addEventListener('click', () => saveSettings());
  els.resetSettings.addEventListener('click', () => resetSettings());
  els.testVoice.addEventListener('click', () => testVoice());
  els.testSound.addEventListener('click', () => testSound());
}

function initSchedule() {
  const saved = store.loadSchedule();
  const fallback = { currentDay: 0, completedDays: [] };
  const next = saved || fallback;
  state.dayIndex = Math.min(next.currentDay, TOTAL_DAYS - 1);
  store.saveSchedule(next);
  updateDayLabels();
}

function updateDayLabels() {
  const weekNumber = getWeekNumber();
  const monthNumber = getMonthNumber();
  els.dayLabel.textContent = `${state.dayIndex + 1}/${TOTAL_DAYS}`;
  els.weekLabel.textContent = String(weekNumber);
  els.monthLabel.textContent = String(monthNumber);
}

function completeDay() {
  const schedule = store.loadSchedule() || { currentDay: 0, completedDays: [] };
  if (!schedule.completedDays.includes(state.dayIndex)) {
    schedule.completedDays.push(state.dayIndex);
  }
  if (schedule.currentDay < TOTAL_DAYS - 1) {
    schedule.currentDay += 1;
  }
  state.dayIndex = schedule.currentDay;
  store.saveSchedule(schedule);
  updateDayLabels();
  renderCalendar();
  renderExercises();
  state.coach.exIndex = 0;
  state.coach.setIndex = 1;
  state.coach.status = 'ready';
  state.coach.repCount = 0;
  state.coach.restRemaining = 0;
}

function renderCalendar() {
  const schedule = store.loadSchedule() || { currentDay: 0, completedDays: [] };
  const completed = new Set(schedule.completedDays);
  els.calendarGrid.innerHTML = Array.from({ length: TOTAL_DAYS }, (_, i) => {
    const classes = ['cal-day'];
    if (completed.has(i)) classes.push('is-complete');
    if (i === state.dayIndex) classes.push('is-today');
    if (i > state.dayIndex) classes.push('is-future');
    return `<div class="${classes.join(' ')}">Dia ${i + 1}</div>`;
  }).join('');
  els.calendarStatus.textContent = `Concluidos: ${completed.size}/${TOTAL_DAYS}`;
}

function getWeekNumber() {
  return Math.floor(state.dayIndex / DAYS_PER_WEEK) + 1;
}

function getMonthNumber() {
  return Math.floor((getWeekNumber() - 1) / 4) + 1;
}

function getCurrentWeekPlan() {
  const weekNumber = getWeekNumber();
  const baseIndex = (weekNumber - 1) % baseWeeks.length;
  return baseWeeks[baseIndex];
}

function getExercises() {
  return getCurrentWeekPlan().exercises;
}

const ROUTES = ['list', 'coach', 'calendar', 'reminders', 'settings'];

function initRouter() {
  const hash = location.hash.replace('#', '');
  const initial = ROUTES.includes(hash) ? hash : 'list';
  navigate(initial, { replace: true, fromPop: true });
  window.addEventListener('popstate', (event) => {
    const route = (event.state && event.state.route) || location.hash.replace('#', '') || 'list';
    navigate(route, { replace: true, fromPop: true });
  });
}

function navigate(route, options = {}) {
  if (!ROUTES.includes(route)) return;
  if (!options.fromPop) {
    const method = options.replace ? 'replaceState' : 'pushState';
    history[method]({ route }, '', `#${route}`);
  }
  setScreen(route);
}

function setScreen(route) {
  const prev = state.route;
  const screens = [els.screenList, els.screenCoach, els.screenCalendar, els.screenReminders, els.screenSettings];
  const map = {
    list: els.screenList,
    coach: els.screenCoach,
    calendar: els.screenCalendar,
    reminders: els.screenReminders,
    settings: els.screenSettings
  };
  const nextEl = map[route] || els.screenList;
  const nextRoute = map[route] ? route : 'list';
  state.route = nextRoute;
  document.body.classList.toggle('route-coach', nextRoute === 'coach');
  const prevEl = map[prev];
  if (routeTimer) {
    clearTimeout(routeTimer);
    routeTimer = null;
  }
  if (prevEl && prevEl !== nextEl) {
    prevEl.classList.add('is-prev');
  }
  screens.forEach((screen) => {
    if (screen === nextEl) {
      screen.classList.add('is-active');
      screen.classList.remove('is-prev');
    }
  });
  routeTimer = setTimeout(() => {
    screens.forEach((screen) => {
      if (screen !== nextEl) {
        screen.classList.remove('is-active');
        screen.classList.remove('is-prev');
      }
    });
  }, 350);
  els.navButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.route === nextRoute);
  });
}

function renderExercises() {
  const list = getExercises();
  els.exerciseList.innerHTML = list
    .map((ex) => {
      const rest = formatSeconds(applyRestMultiplier(ex.restSec));
      const icon = ICONS[ex.id] || ICONS.pushup;
      return `
        <article class="card">
          <div class="card-header">
            <div class="card-icon">${icon}</div>
            <h3>${ex.name}</h3>
          </div>
          <div class="meta">
            <span>${ex.sets} x ${ex.reps}</span>
            <span>${rest} intervalo</span>
          </div>
          <div class="tags">
            <span class="tag">Coach</span>
            <span class="tag">${ex.tip}</span>
          </div>
        </article>
      `;
    })
    .join('');
}

function initCoachFromProgress() {
  const progress = store.loadProgress();
  if (!progress) {
    updateCoachUI();
    return;
  }
  const schedule = store.loadSchedule() || { currentDay: 0, completedDays: [] };
  const nextDay = typeof progress.dayIndex === 'number' ? progress.dayIndex : schedule.currentDay;
  state.dayIndex = Math.min(nextDay, TOTAL_DAYS - 1);
  schedule.currentDay = state.dayIndex;
  store.saveSchedule(schedule);
  updateDayLabels();
  renderCalendar();
  state.coach.exIndex = progress.exIndex ?? 0;
  state.coach.setIndex = progress.setIndex ?? 1;
  state.coach.status = state.coach.exIndex >= getExercises().length ? 'finished' : 'ready';
  renderExercises();
  updateCoachUI();
}

function startWorkout() {
  clearTimers();
  state.coach.exIndex = 0;
  state.coach.setIndex = 1;
  state.coach.status = 'ready';
  state.coach.restRemaining = 0;
  state.coach.repCount = 0;
  state.coach.pausedFrom = null;
  state.coach.nextAction = 'nextSet';
  state.coach.startCountdown = 0;
  state.coach.autoStartRemaining = 0;
  state.voice.halfAnnounced = false;
  state.voice.seventyFiveAnnounced = false;
  state.voice.ninetyAnnounced = false;
  state.voice.lastCountdown = {};
  state.voice.tipSpoken = {};
  state.voice.prepSpoken = {};
  state.voice.lastMotivationAt = 0;
  state.voice.motivationIndex = 0;
  updateCoachUI();
  navigate('coach');
  ensureAudio();
  speak('Treino iniciado. Vamos com foco total.');
}

function resetProgress() {
  store.clearProgress();
  stopWorkout();
}

function stopWorkout() {
  clearTimers();
  state.coach.exIndex = 0;
  state.coach.setIndex = 1;
  state.coach.status = 'idle';
  state.coach.restRemaining = 0;
  state.coach.repCount = 0;
  state.coach.pausedFrom = null;
  state.coach.startCountdown = 0;
  state.coach.autoStartRemaining = 0;
  updateCoachUI();
}

function updateCoachUI() {
  const ex = getCurrentExercise();
  if (!ex) {
    els.coachExName.textContent = 'Treino concluido';
    els.coachSet.textContent = '-';
    els.coachReps.textContent = '-';
    els.coachStatus.textContent = 'Finalizado';
    els.coachTip.textContent = 'Excelente trabalho. Alongue e hidrate.';
    els.coachSteps.innerHTML = '';
    els.simFigure.className = 'sim-figure';
    els.coachNext.textContent = '-';
    els.repProgress.textContent = '-';
    els.simCounter.textContent = '-';
    updateProgress();
    updateControls();
    return;
  }

  els.coachExName.textContent = ex.name;
  els.coachSet.textContent = `Serie ${state.coach.setIndex} / ${ex.sets}`;
  const target = getTargetReps(ex);
  const current = Math.min(state.coach.repCount, target);
  els.coachReps.textContent = `${current}/${target}`;
  els.repProgress.textContent = `${current}/${target}`;
  els.simCounter.textContent = `${current}/${target}`;
  els.coachStatus.textContent = getStatusLabel();
  els.coachTip.textContent = ex.tip;
  els.coachSteps.innerHTML = ex.steps.map((step) => `<li>${step}</li>`).join('');
  updateSimPose();
  els.coachNext.textContent = getNextExercise() ? getNextExercise().name : 'Fim';
  updateSim();
  updateRestTimer();
  updateStartCountdown();
  updateAutoStartCountdown();
  updateProgress();
  updateControls();
  persistProgress();
}

function startSet() {
  const ex = getCurrentExercise();
  if (!ex) return;
  if (state.coach.status !== 'ready') return;
  cancelAutoStart();
  clearInterval(state.timers.rep);
  state.coach.status = 'starting';
  state.voice.lastCountdown.start = null;
  state.coach.startCountdown = 3;
  updateStartCountdown();
  clearInterval(state.timers.startCountdown);
  state.timers.startCountdown = setInterval(() => {
    state.coach.startCountdown -= 1;
    updateStartCountdown();
    if (state.coach.startCountdown <= 0) {
      clearInterval(state.timers.startCountdown);
      state.timers.startCountdown = null;
      beginSet();
    }
  }, 1000);
  ensureAudio();
  speak(`Iniciar serie de ${ex.name} em 3 segundos.`);
  updateCoachUI();
}

function beginSet() {
  const ex = getCurrentExercise();
  if (!ex) return;
  state.coach.status = 'running';
  startRepTimer(ex);
  if (state.coach.setIndex === 1) {
    speakExerciseTip(ex);
  }
  const target = getTargetReps(ex);
  if (state.coach.setIndex === 1) {
    speak(`Exercicio: ${ex.name}.`);
  }
  if (state.coach.setIndex === ex.sets) {
    speak('Ultima serie do exercicio.');
  }
  if (isTimeExercise(ex)) {
    speak(`Valendo. Segure por ${target} segundos.`);
  } else {
    speak(`Valendo. Serie ${state.coach.setIndex} de ${ex.sets}.`);
  }
  updateCoachUI();
}

function finishSet() {
  const ex = getCurrentExercise();
  if (!ex) return;
  if (state.coach.status !== 'running') return;
  clearInterval(state.timers.rep);
  state.timers.rep = null;
  state.coach.repCount = 0;
  const isLastSet = state.coach.setIndex >= ex.sets;
  const completedSets = getCompletedSets() + 1;
  const totalSets = getTotalSets();
  if (totalSets - completedSets === 1) {
    speak('Ultima serie do treino.');
  }
  if (isLastSet) {
    state.coach.nextAction = 'nextExercise';
  } else {
    state.coach.setIndex += 1;
    state.coach.nextAction = 'nextSet';
  }
  startRest(applyRestMultiplier(ex.restSec));
  speak(`Serie concluida. Intervalo de ${applyRestMultiplier(ex.restSec)} segundos.`);
  announceProgressMilestones(completedSets, totalSets);
  speakMotivation(completedSets);
}

function startRest(seconds) {
  state.coach.status = 'rest';
  state.coach.restRemaining = seconds;
  state.voice.lastCountdown.rest = null;
  updateRestTimer();
  speakRestHint();
  clearInterval(state.timers.rest);
  state.timers.rest = setInterval(() => {
    state.coach.restRemaining -= 1;
    updateRestTimer();
  }, 1000);
  updateCoachUI();
}

function finishRest() {
  clearInterval(state.timers.rest);
  state.timers.rest = null;
  state.coach.restRemaining = 0;
  if (settings.soundEnabled) {
    beep();
  }
  const wasNextExercise = state.coach.nextAction === 'nextExercise';
  if (state.coach.nextAction === 'nextSet') {
    state.coach.status = 'ready';
  } else {
    state.coach.exIndex += 1;
    state.coach.setIndex = 1;
    if (state.coach.exIndex >= getExercises().length) {
      state.coach.status = 'finished';
      completeDay();
      speak('Treino concluido. Excelente trabalho.');
      updateCoachUI();
      return;
    } else {
      state.coach.status = 'ready';
    }
  }
  state.coach.nextAction = 'nextSet';
  if (state.coach.status === 'ready') {
    beginAutoStart(5);
    const ex = getCurrentExercise();
    if (wasNextExercise && ex) {
      speak(`Proximo exercicio: ${ex.name}.`);
      speakNextExercisePrep(ex);
    } else if (ex) {
      speak('Proxima serie em 5 segundos.');
    }
  }
  updateCoachUI();
}

// Pause/Resume removidos por simplicidade do fluxo solicitado.

function skipExercise() {
  clearTimers();
  state.coach.exIndex += 1;
  state.coach.setIndex = 1;
  state.coach.status = state.coach.exIndex >= getExercises().length ? 'finished' : 'ready';
  if (state.coach.status === 'ready') {
    beginAutoStart(5);
  }
  updateCoachUI();
}

function updateRestTimer() {
  if (state.coach.status === 'rest') {
    if (state.coach.restRemaining <= 0) {
      finishRest();
      return;
    }
    speakCountdown(state.coach.restRemaining, 'rest');
  }
  updateRestOverlay();
}

function updateStartCountdown() {
  if (state.coach.status === 'starting') {
    els.coachStatus.textContent = `Inicia em ${state.coach.startCountdown}s`;
    speakCountdown(state.coach.startCountdown, 'start');
  }
  updateRestOverlay();
}

function updateAutoStartCountdown() {
  if (state.coach.status === 'auto') {
    els.coachStatus.textContent = `Proxima serie em ${state.coach.autoStartRemaining}s`;
    speakCountdown(state.coach.autoStartRemaining, 'auto');
  }
  updateRestOverlay();
}

function updateRestOverlay() {
  if (!els.restOverlay) return;
  const isRest = state.coach.status === 'rest';
  const isAuto = state.coach.status === 'auto';
  const isStarting = state.coach.status === 'starting';
  if (!isRest && !isAuto && !isStarting) {
    els.restOverlay.classList.remove('is-visible');
    return;
  }
  const ex = getCurrentExercise();
  const next = getNextExercise();
  els.restOverlay.classList.add('is-visible');
  if (isRest) {
    els.restOverlayLabel.textContent = 'Intervalo';
    els.restOverlayTime.textContent = formatSeconds(Math.max(0, state.coach.restRemaining));
    els.restOverlayNext.textContent = state.coach.nextAction === 'nextExercise'
      ? `Proximo: ${next ? next.name : 'Fim'}`
      : `Proxima serie: ${state.coach.setIndex}/${ex ? ex.sets : '-'}`;
    els.restOverlaySkip.style.display = 'inline-flex';
  } else if (isAuto) {
    els.restOverlayLabel.textContent = 'Preparar';
    els.restOverlayTime.textContent = `${Math.max(0, state.coach.autoStartRemaining)}s`;
    els.restOverlayNext.textContent = `Exercicio: ${ex ? ex.name : '-'}`;
    els.restOverlaySkip.style.display = 'none';
  } else {
    els.restOverlayLabel.textContent = 'Iniciando';
    els.restOverlayTime.textContent = `${Math.max(0, state.coach.startCountdown)}s`;
    els.restOverlayNext.textContent = `Exercicio: ${ex ? ex.name : '-'}`;
    els.restOverlaySkip.style.display = 'none';
  }
}


function startRepTimer(ex) {
  clearInterval(state.timers.rep);
  state.coach.repCount = 0;
  const target = getTargetReps(ex);
  if (target <= 0) {
    finishSet();
    return;
  }
  const cadence = getRepCadence(ex);
  state.timers.rep = setInterval(() => {
    state.coach.repCount += 1;
    if (isTimeExercise(ex) && state.coach.repCount === Math.floor(target / 2)) {
      speak('Metade do tempo. Mantenha firme.');
    }
    if (!isTimeExercise(ex) && state.coach.repCount === target - 1) {
      speak('Ultima repeticao.');
    }
    if (state.coach.repCount >= target) {
      state.coach.repCount = target;
      updateCoachUI();
      finishSet();
      return;
    }
    updateCoachUI();
  }, cadence);
  updateCoachUI();
}

function updateProgress() {
  const total = getExercises().length;
  const current = Math.min(state.coach.exIndex + 1, total);
  const pct = total ? Math.round((current / total) * 100) : 0;
  const ex = getCurrentExercise();
  const setText = ex ? `${state.coach.setIndex}/${ex.sets}` : '-';
  els.progressBar.style.width = `${pct}%`;
  els.progressText.textContent = `Exercicio ${current}/${total} - Serie ${setText}`;
}

function updateSimPose() {
  const ex = getCurrentExercise();
  if (!ex) return;
  const frameClass = state.simFrame === 0 ? 'pose-a' : 'pose-b';
  els.simFigure.className = `sim-figure ex-${ex.id} ${frameClass}`;
  const steps = getSimSteps(ex.id);
  els.simCaption.textContent = steps[state.simFrame] || 'Movimento controlado.';
}

function getSimSteps(id) {
  const map = {
    pushup: ['Desca controlando o peito.', 'Empurre o chao e suba.'],
    diamond: ['Mantenha maos em diamante.', 'Suba focando no triceps.'],
    pike: ['Quadril alto, desca a cabeca.', 'Suba empurrando o chao.'],
    squat: ['Desca com o quadril para tras.', 'Suba estendendo as pernas.'],
    lunge: ['Desca com joelhos a 90 graus.', 'Volte e troque a perna.'],
    calf: ['Suba na ponta dos pes.', 'Desca controlando.'],
    glute: ['Eleve o quadril e segure.', 'Desca devagar.'],
    superman: ['Eleve bracos e pernas.', 'Segure e desca.'],
    plank: ['Corpo alinhado e firme.', 'Respire sem perder a postura.'],
    legraise: ['Eleve as pernas estendidas.', 'Desca sem arquear a lombar.']
  };
  return map[id] || ['Movimento controlado.', 'Respire e mantenha a postura.'];
}

function updateControls() {
  const status = state.coach.status;
  const isReady = status === 'ready';
  const isFinished = status === 'finished';
  els.coachStart.disabled = !isReady;
  els.coachStart.style.display = isReady ? 'inline-flex' : 'none';
  els.coachSkip.style.display = isFinished ? 'none' : 'inline-flex';
}

function getStatusLabel() {
  switch (state.coach.status) {
    case 'ready':
      return 'Pronto para iniciar';
    case 'starting':
      return 'Iniciando';
    case 'running':
      return 'Serie em andamento';
    case 'rest':
      return 'Descanso';
    case 'auto':
      return 'Auto inicio';
    case 'finished':
      return 'Finalizado';
    default:
      return 'Aguardando';
  }
}

function getNextExercise() {
  return getExercises()[state.coach.exIndex + 1] || null;
}

function isTimeExercise(ex) {
  return ex && ex.mode === 'time' && Number.isFinite(ex.timeSec);
}

function getTargetReps(ex) {
  if (!ex) return 0;
  const match = ex.reps.match(/\d+/g);
  if (!match) return 0;
  const nums = match.map(Number);
  if (nums.length === 1) return nums[0];
  return Math.round((nums[0] + nums[1]) / 2);
}

function speakCountdown(value, key) {
  if (value > 3 || value <= 0) return;
  const last = state.voice.lastCountdown[key];
  if (last === value) return;
  state.voice.lastCountdown[key] = value;
  speak(String(value));
}

function getTotalSets() {
  return getExercises().reduce((sum, ex) => sum + ex.sets, 0);
}

function getCompletedSets() {
  let completed = 0;
  const list = getExercises();
  for (let i = 0; i < state.coach.exIndex; i += 1) {
    completed += list[i]?.sets || 0;
  }
  completed += Math.max(0, state.coach.setIndex - 1);
  return completed;
}

function announceProgressMilestones(completedSets, totalSets) {
  if (!totalSets) return;
  const pct = completedSets / totalSets;
  if (!state.voice.halfAnnounced && pct >= 0.5) {
    state.voice.halfAnnounced = true;
    speak('Metade do treino concluida. Continue firme.');
  }
  if (!state.voice.seventyFiveAnnounced && pct >= 0.75) {
    state.voice.seventyFiveAnnounced = true;
    speak('Voce passou de setenta e cinco por cento.');
  }
  if (!state.voice.ninetyAnnounced && pct >= 0.9) {
    state.voice.ninetyAnnounced = true;
    speak('Noventa por cento do treino. Falta pouco.');
  }
}

function speakExerciseTip(ex) {
  if (!ex || state.voice.tipSpoken[ex.id]) return;
  const tip = ex.steps?.[0] || ex.tip;
  if (tip) {
    state.voice.tipSpoken[ex.id] = true;
    speak(`Dica: ${tip}`);
  }
}

function speakNextExercisePrep(ex) {
  if (!ex || state.voice.prepSpoken[ex.id]) return;
  const tip = ex.steps?.[0] || ex.tip;
  state.voice.prepSpoken[ex.id] = true;
  if (tip) {
    speak(`Prepare a postura. ${tip}`);
  } else {
    speak('Prepare a postura e foque na tecnica.');
  }
}

function speakMotivation(completedSets) {
  if (completedSets - state.voice.lastMotivationAt < 2) return;
  const line = MOTIVATION_LINES[state.voice.motivationIndex % MOTIVATION_LINES.length];
  state.voice.motivationIndex += 1;
  state.voice.lastMotivationAt = completedSets;
  speak(line);
}

function speakRestHint() {
  const line = REST_HINTS[state.voice.motivationIndex % REST_HINTS.length];
  speak(line);
}

function getRepCadence(ex) {
  if (!ex) return REP_SECONDS * 1000;
  if (isTimeExercise(ex) || /s/i.test(ex.reps)) {
    return 1000;
  }
  return REP_SECONDS * 1000;
}


function beginAutoStart(seconds) {
  cancelAutoStart();
  state.coach.status = 'auto';
  state.coach.autoStartRemaining = seconds;
  state.voice.lastCountdown.auto = null;
  updateCoachUI();
  state.timers.autoStart = setInterval(() => {
    state.coach.autoStartRemaining -= 1;
    updateCoachUI();
    if (state.coach.autoStartRemaining <= 0) {
      cancelAutoStart();
      beginSet();
    }
  }, 1000);
}

function cancelAutoStart() {
  clearInterval(state.timers.autoStart);
  state.timers.autoStart = null;
  state.coach.autoStartRemaining = 0;
}

function beginStartCountdownResume() {
  clearInterval(state.timers.startCountdown);
  state.timers.startCountdown = setInterval(() => {
    state.coach.startCountdown -= 1;
    updateCoachUI();
    if (state.coach.startCountdown <= 0) {
      clearInterval(state.timers.startCountdown);
      state.timers.startCountdown = null;
      beginSet();
    }
  }, 1000);
}

function updateSim() {
  if (!settings.simEnabled || !['running', 'ready'].includes(state.coach.status)) {
    stopSim();
    return;
  }
  const ex = getCurrentExercise();
  const nextId = ex ? ex.id : null;
  if (state.timers.sim && state.simExerciseId === nextId && state.simStatus === state.coach.status) {
    updateSimPose();
    return;
  }
  startSim(nextId, state.coach.status);
}

function startSim(exId, status) {
  stopSim();
  state.simCounter = 0;
  state.simFrame = 0;
  state.simExerciseId = exId;
  state.simStatus = status;
  els.simBar.style.width = '0%';
  state.timers.sim = setInterval(() => {
    state.simCounter = (state.simCounter + 1) % 12;
    state.simFrame = (state.simFrame + 1) % 2;
    const pct = Math.min(100, (state.simCounter / 12) * 100);
    els.simBar.style.width = `${pct}%`;
    updateSimPose();
  }, 1200);
  updateSimPose();
}

function stopSim() {
  clearInterval(state.timers.sim);
  state.timers.sim = null;
  els.simBar.style.width = '0%';
  els.simCaption.textContent = 'Prepare o movimento.';
  state.simExerciseId = null;
  state.simStatus = null;
}

function applyRestMultiplier(seconds) {
  return Math.round(seconds * settings.restMultiplier);
}

function formatSeconds(total) {
  const mins = String(Math.floor(total / 60)).padStart(2, '0');
  const secs = String(total % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function persistProgress() {
  store.saveProgress({
    dayIndex: state.dayIndex,
    exIndex: state.coach.exIndex,
    setIndex: state.coach.setIndex
  });
}

function speak(text, force = false) {
  if (!force && !settings.voiceEnabled) return false;
  if (!('speechSynthesis' in window)) return false;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'pt-BR';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
  return true;
}

function ensureAudio() {
  if (!('AudioContext' in window || 'webkitAudioContext' in window)) {
    return null;
  }
  if (!audioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioContext = new Ctx();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

function beep() {
  try {
    const ctx = ensureAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 880;
    gain.gain.value = 0.08;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch {
    // Ignore audio errors
  }
}

function testVoice() {
  if (!('speechSynthesis' in window)) {
    setSettingsStatus('Voz nao suportada neste dispositivo.');
    return;
  }
  ensureAudio();
  const ok = speak('Voz ativa. Treino pronto para iniciar.', true);
  setSettingsStatus(ok ? 'Teste de voz enviado.' : 'Falha ao usar voz.');
}

function testSound() {
  ensureAudio();
  if (!audioContext) {
    setSettingsStatus('Som nao suportado neste dispositivo.');
    return;
  }
  beep();
  setSettingsStatus('Teste de som enviado.');
}

function setSettingsStatus(text) {
  els.settingsStatus.textContent = text;
}

function setNextReminderLabel(date) {
  if (!els.remindersNext) return;
  if (!date) {
    els.remindersNext.textContent = '';
    return;
  }
  els.remindersNext.textContent = `Proximo lembrete: ${formatDateTime(date)}`;
}

function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const mins = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${mins}`;
}

function startWebReminderTicker(hour, minute, dayList) {
  state.reminderConfig = { hour, minute, dayList };
  if (state.timers.webReminderTick) {
    clearInterval(state.timers.webReminderTick);
  }
  state.timers.webReminderTick = setInterval(() => {
    checkAndFireReminder();
  }, 15000);
  checkAndFireReminder();
}

function checkAndFireReminder() {
  if (!state.reminderConfig) return;
  const { hour, minute, dayList } = state.reminderConfig;
  const now = new Date();
  if (!dayList.includes(now.getDay())) return;
  if (now.getHours() !== hour || now.getMinutes() !== minute) return;
  const key = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${hour}-${minute}`;
  if (state.lastReminderKey === key) return;
  state.lastReminderKey = key;
  localStorage.setItem('treino-last-reminder', key);
  void showWebNotification();
}

function applySettingsToUI() {
  els.restMult.value = settings.restMultiplier;
  els.restMultValue.textContent = `${settings.restMultiplier.toFixed(2)}x`;
  els.voiceEnabled.checked = settings.voiceEnabled;
  els.soundEnabled.checked = settings.soundEnabled;
  els.autoAdvance.checked = settings.autoAdvance;
  els.simEnabled.checked = settings.simEnabled;
  els.darkMode.checked = settings.darkMode;
  els.remindersEnabled.checked = settings.reminders.enabled;
  els.remindersTime.value = settings.reminders.time;
  setActiveDays(settings.reminders.days);
  setTheme(settings.darkMode);
}

function saveSettings() {
  settings = {
    ...settings,
    restMultiplier: Number(els.restMult.value),
    voiceEnabled: els.voiceEnabled.checked,
    soundEnabled: els.soundEnabled.checked,
    autoAdvance: els.autoAdvance.checked,
    simEnabled: els.simEnabled.checked,
    darkMode: els.darkMode.checked
  };
  store.saveSettings(settings);
  renderExercises();
  updateCoachUI();
  setTheme(settings.darkMode);
  setSettingsStatus('Configuracoes salvas.');
}

function resetSettings() {
  settings = { ...defaultSettings };
  store.saveSettings(settings);
  applySettingsToUI();
  renderExercises();
  updateCoachUI();
  setTheme(settings.darkMode);
  setSettingsStatus('Configuracoes restauradas.');
}

function setTheme(isDark) {
  document.body.classList.toggle('theme-dark', !!isDark);
}

function setupDays() {
  els.remindersDays.innerHTML = days
    .map((day) => `<button class="day-btn" data-day="${day.id}">${day.label}</button>`)
    .join('');
  els.remindersDays.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-active');
    });
  });
}

function setActiveDays(list) {
  els.remindersDays.querySelectorAll('button').forEach((btn) => {
    const day = Number(btn.dataset.day);
    btn.classList.toggle('is-active', list.includes(day));
  });
}

function getSelectedDays() {
  const selected = [];
  els.remindersDays.querySelectorAll('button').forEach((btn) => {
    if (btn.classList.contains('is-active')) {
      selected.push(Number(btn.dataset.day));
    }
  });
  return selected;
}

async function saveReminders() {
  settings.reminders = {
    enabled: els.remindersEnabled.checked,
    time: els.remindersTime.value,
    days: getSelectedDays()
  };
  store.saveSettings(settings);
  await scheduleReminders();
}

async function scheduleReminders() {
  if (!settings.reminders.enabled) {
    clearWebReminder();
    els.remindersStatus.textContent = 'Lembretes desativados.';
    setNextReminderLabel(null);
    return;
  }
  if (settings.reminders.days.length === 0) {
    els.remindersStatus.textContent = 'Selecione ao menos um dia.';
    setNextReminderLabel(null);
    return;
  }
  const [hour, minute] = settings.reminders.time.split(':').map(Number);
  if (isNative()) {
    try {
      const LocalNotifications = getLocalNotifications();
      if (!LocalNotifications) {
        els.remindersStatus.textContent = 'Plugin de notificacoes nao encontrado no Android.';
        return;
      }
      const permission = await LocalNotifications.requestPermissions();
      if (permission.display && permission.display !== 'granted') {
        els.remindersStatus.textContent = 'Permissao de notificacao negada.';
        return;
      }
      await clearNativeNotifications(LocalNotifications);
      const notifications = settings.reminders.days.map((day, index) => ({
        id: 1000 + index,
        title: 'Treino do dia',
        body: 'Hora de fazer seu treino guiado.',
        schedule: {
          on: { weekday: day, hour, minute },
          repeats: true
        }
      }));
      await LocalNotifications.schedule({ notifications });
      els.remindersStatus.textContent = 'Lembretes Android configurados.';
      setNextReminderLabel(null);
    } catch (err) {
      els.remindersStatus.textContent = 'Falha ao configurar notificacoes no Android.';
      console.error(err);
    }
  } else {
    const permission = await requestWebNotificationPermission();
    if (!permission.ok) {
      els.remindersStatus.textContent = permission.reason;
      return;
    }
    const reg = await ensureNotificationServiceWorker();
    if (!reg) {
      els.remindersStatus.textContent = 'Service Worker nao disponivel no navegador.';
      setNextReminderLabel(null);
      return;
    }
    if (!reg.active) {
      els.remindersStatus.textContent = 'Service Worker instalando. Recarregue a pagina e tente novamente.';
      setNextReminderLabel(null);
      return;
    }
    scheduleWebReminder(hour, minute, settings.reminders.days);
    els.remindersStatus.textContent = 'Lembretes web ativos (aba aberta).';
  }
}

function scheduleWebReminder(hour, minute, dayList) {
  clearWebReminder();
  const next = computeNextReminderDate(hour, minute, dayList);
  if (!next) return;
  state.nextReminderAt = next;
  setNextReminderLabel(next);
  startWebReminderTicker(hour, minute, dayList);
}

function computeNextReminderDate(hour, minute, dayList) {
  const now = new Date();
  let best = null;
  for (const day of dayList) {
    const candidate = new Date(now);
    candidate.setHours(hour, minute, 0, 0);
    const delta = (day - candidate.getDay() + 7) % 7;
    candidate.setDate(candidate.getDate() + delta);
    if (delta === 0 && candidate <= now) {
      candidate.setDate(candidate.getDate() + 7);
    }
    if (!best || candidate < best) best = candidate;
  }
  return best;
}

async function requestWebNotificationPermission() {
  if (!('Notification' in window)) {
    return { ok: false, reason: 'Seu navegador nao suporta notificacoes.' };
  }
  const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
  if (!isSecure) {
    return { ok: false, reason: 'Notificacoes web exigem HTTPS ou localhost.' };
  }
  if (Notification.permission === 'granted') return { ok: true };
  const permission = await Notification.requestPermission();
  return {
    ok: permission === 'granted',
    reason: permission === 'granted' ? '' : 'Permissao de notificacao negada no navegador.'
  };
}

async function showWebNotification() {
  if (!('Notification' in window)) return false;
  if (Notification.permission !== 'granted') return false;
  if ('serviceWorker' in navigator) {
    const reg = await ensureNotificationServiceWorker();
    if (reg && reg.active && reg.showNotification) {
      await reg.showNotification('Treino do dia', { body: 'Hora de fazer seu treino guiado.' });
      return true;
    }
  }
  return false;
}

async function testNotification() {
  if (isNative()) {
    try {
      const LocalNotifications = getLocalNotifications();
      if (!LocalNotifications) {
        els.remindersStatus.textContent = 'Plugin de notificacoes nao encontrado no Android.';
        return;
      }
      const permission = await LocalNotifications.requestPermissions();
      if (permission.display && permission.display !== 'granted') {
        els.remindersStatus.textContent = 'Permissao de notificacao negada.';
        return;
      }
      await LocalNotifications.schedule({
        notifications: [{
          id: 999,
          title: 'Teste de treino',
          body: 'Notificacao de teste enviada agora.',
          schedule: { at: new Date(Date.now() + 1000) }
        }]
      });
      els.remindersStatus.textContent = 'Teste enviado para o Android.';
    } catch {
      els.remindersStatus.textContent = 'Nao foi possivel enviar teste no Android.';
    }
  } else {
    const permission = await requestWebNotificationPermission();
    if (!permission.ok) {
      els.remindersStatus.textContent = permission.reason;
      return;
    }
    const reg = await ensureNotificationServiceWorker();
    if (!reg) {
      els.remindersStatus.textContent = 'Service Worker nao disponivel no navegador.';
      return;
    }
    if (!reg.active) {
      els.remindersStatus.textContent = 'Service Worker instalando. Recarregue a pagina e tente novamente.';
      return;
    }
    const ok = await showWebNotification();
    els.remindersStatus.textContent = ok
      ? 'Teste enviado no web.'
      : 'Nao foi possivel criar a notificacao. Verifique permissao.';
  }
}

function clearWebReminder() {
  if (state.timers.webReminder) {
    clearTimeout(state.timers.webReminder);
    state.timers.webReminder = null;
  }
  if (state.timers.webReminderTick) {
    clearInterval(state.timers.webReminderTick);
    state.timers.webReminderTick = null;
  }
  state.nextReminderAt = null;
  state.reminderConfig = null;
  setNextReminderLabel(null);
}

function isNative() {
  return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
}

function getLocalNotifications() {
  return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications
    ? window.Capacitor.Plugins.LocalNotifications
    : null;
}

async function clearNativeNotifications(LocalNotifications) {
  if (LocalNotifications.cancelAll) {
    await LocalNotifications.cancelAll();
    return;
  }
  if (LocalNotifications.getPending) {
    const pending = await LocalNotifications.getPending();
    if (pending && pending.notifications && pending.notifications.length) {
      await LocalNotifications.cancel({ notifications: pending.notifications });
    }
  }
}

function clearTimers() {
  clearInterval(state.timers.rest);
  clearInterval(state.timers.rep);
  clearInterval(state.timers.sim);
  clearInterval(state.timers.startCountdown);
  clearInterval(state.timers.autoStart);
  clearWebReminder();
}

async function ensureNotificationServiceWorker() {
  if (!('serviceWorker' in navigator)) return null;
  let reg = await navigator.serviceWorker.getRegistration();
  if (!reg) {
    reg = await navigator.serviceWorker.register('sw-notifications.js');
  }
  await navigator.serviceWorker.ready;
  const readyReg = await navigator.serviceWorker.getRegistration();
  return readyReg || reg;
}

function getCurrentExercise() {
  return getExercises()[state.coach.exIndex];
}

init();
