/**
 * Decisão Brasil 2026 - Lógica da Aplicação
 * Gerenciamento de fluxo, cálculo de afinidade, renderização editorial e busca no TSE.
 */

// Estado da Aplicação
const appState = {
  currentStep: 0,
  userAnswers: {}, // Mapeia { [themeId]: optionObject }
  activeAuditTab: 'user-choices',
  explorerFilter: 'all',
  explorerSearchTerm: ''
};

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const btnStart = document.getElementById('btnStartQuiz');
  if (btnStart) {
    btnStart.addEventListener('click', startQuiz);
  }

  // Atalhos de teclado acessíveis (1-4 ou A-D para responder)
  document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Iniciar o Quiz
function startQuiz() {
  appState.currentStep = 0;
  appState.userAnswers = {};
  showScreen('screenQuiz');
  renderStep(appState.currentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Transição de Telas
function showScreen(screenId) {
  const screens = ['screenWelcome', 'screenQuiz', 'screenResults'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (id === screenId) ? 'block' : 'none';
    }
  });
}

// Renderizar Pergunta Atual
function renderStep(stepIndex) {
  const theme = quizThemes[stepIndex];
  if (!theme) return;

  const totalSteps = quizThemes.length;
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);

  // Atualiza indicadores de progresso
  document.getElementById('stepCounter').textContent = `Dilema ${stepIndex + 1} de ${totalSteps}`;
  document.getElementById('themeKicker').textContent = theme.tag;
  document.getElementById('progressFill').style.width = `${progressPercent}%`;

  // Atualiza enunciado
  document.getElementById('questionTitle').textContent = theme.question;
  document.getElementById('questionContext').textContent = theme.context;

  // Renderiza opções
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';

  const currentSelection = appState.userAnswers[theme.id];

  theme.options.forEach(option => {
    const isSelected = currentSelection && currentSelection.id === option.id;
    const card = document.createElement('div');
    card.className = `option-card ${isSelected ? 'selected' : ''}`;
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="option-badge">${option.letter}</div>
      <div class="option-text">${option.text}</div>
    `;

    card.addEventListener('click', () => selectOption(theme.id, option));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectOption(theme.id, option);
      }
    });

    optionsContainer.appendChild(card);
  });

  // Atualiza botões de navegação
  const btnPrev = document.getElementById('btnPrevStep');
  const btnNext = document.getElementById('btnNextStep');

  btnPrev.disabled = (stepIndex === 0);
  btnNext.disabled = !currentSelection;

  if (stepIndex === totalSteps - 1) {
    btnNext.innerHTML = `Ver Meu Resultado & Análise <span>→</span>`;
  } else {
    btnNext.innerHTML = `Confirmar e Avançar <span>→</span>`;
  }
}

// Selecionar Opção
function selectOption(themeId, option) {
  appState.userAnswers[themeId] = option;
  renderStep(appState.currentStep);
}

// Navegação Próximo
function nextStep() {
  const theme = quizThemes[appState.currentStep];
  if (!appState.userAnswers[theme.id]) return;

  if (appState.currentStep < quizThemes.length - 1) {
    appState.currentStep++;
    renderStep(appState.currentStep);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  } else {
    finishQuiz();
  }
}

// Navegação Anterior
function prevStep() {
  if (appState.currentStep > 0) {
    appState.currentStep--;
    renderStep(appState.currentStep);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  }
}

// Finalizar Quiz e Calcular Resultados
function finishQuiz() {
  let lulaCount = 0;
  let flavioCount = 0;
  const total = quizThemes.length;

  quizThemes.forEach(theme => {
    const choice = appState.userAnswers[theme.id];
    if (choice) {
      if (choice.party === 'PT') {
        lulaCount++;
      } else if (choice.party === 'PL') {
        flavioCount++;
      }
    }
  });

  const lulaPercent = Math.round((lulaCount / total) * 100);
  const flavioPercent = 100 - lulaPercent;

  renderResults(lulaPercent, flavioPercent, lulaCount, flavioCount, total);
  showScreen('screenResults');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Renderizar Tela de Resultados
function renderResults(lulaPercent, flavioPercent, lulaCount, flavioCount, total) {
  // Atualiza cartões de pontuação
  document.getElementById('lulaPercent').textContent = `${lulaPercent}%`;
  document.getElementById('flavioPercent').textContent = `${flavioPercent}%`;

  document.getElementById('lulaFill').style.width = `${lulaPercent}%`;
  document.getElementById('flavioFill').style.width = `${flavioPercent}%`;

  document.getElementById('lulaCount').textContent = `${lulaCount} de ${total} escolhas`;
  document.getElementById('flavioCount').textContent = `${flavioCount} de ${total} escolhas`;

  const lulaCard = document.getElementById('cardLula');
  const flavioCard = document.getElementById('cardFlavio');

  lulaCard.classList.toggle('winner', lulaPercent >= flavioPercent);
  flavioCard.classList.toggle('winner', flavioPercent > lulaPercent);

  // Renderiza Síntese Editorial personalizada
  renderEditorialSynthesis(lulaPercent, flavioPercent);

  // Configura Botões de Compartilhamento
  setupShareButtons(lulaPercent, flavioPercent);

  // Renderiza a auditoria das escolhas do eleitor
  renderUserAudit();

  // Renderiza o explorador completo do TSE
  renderTSEExplorer();
}

// Renderizar o Bloco Editorial Aprofundado
function renderEditorialSynthesis(lulaPercent, flavioPercent) {
  const container = document.getElementById('editorialSynthesisContent');
  if (!container) return;

  const isLulaAligned = lulaPercent >= 50;

  let leadText = '';
  if (isLulaAligned) {
    leadText = `Você demonstrou forte alinhamento com a <strong>visão popular e desenvolvimentista representada por Lula (PT)</strong>. Suas prioridades convergem para o papel insubstituível do Estado em garantir direitos sociais, fortalecer o poder de compra da maioria trabalhadora e impulsionar a infraestrutura e a transição ecológica do país.`;
  } else {
    leadText = `Suas respostas indicaram maior proximidade com proposições de corte de gastos e desregulamentação da direita. Contudo, a análise pormenorizada dos planos protocolados no TSE revela um contraponto crítico crucial entre os modelos de país em disputa.`;
  }

  container.innerHTML = `
    <p class="synthesis-intro">${leadText}</p>
    
    <div class="editorial-columns">
      <!-- Coluna Lula -->
      <div class="editorial-pillar pillar-lula">
        <h4 class="pillar-title">
          <span>🚩</span> ${editorialAnalysis.lula.title}
        </h4>
        <ul class="pillar-bullets">
          ${editorialAnalysis.lula.bulletPoints.map(item => `
            <li><strong>${item.heading}</strong> ${item.text}</li>
          `).join('')}
        </ul>
      </div>

      <!-- Coluna Flávio / Direita -->
      <div class="editorial-pillar pillar-flavio">
        <h4 class="pillar-title">
          <span>⚖️</span> ${editorialAnalysis.flavio.title}
        </h4>
        <ul class="pillar-bullets">
          ${editorialAnalysis.flavio.bulletPoints.map(item => `
            <li><strong>${item.heading}</strong> ${item.text}</li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Configurar Botões de Compartilhamento
function setupShareButtons(lulaPercent, flavioPercent) {
  const currentUrl = window.location.origin + window.location.pathname;
  
  let shareText = '';
  if (lulaPercent >= 50) {
    shareText = `Fiz o Teste Cego de Prioridades Eleitorais 2026 com base nos planos oficiais do TSE e meu alinhamento deu ${lulaPercent}% com o projeto de Lula! Compare suas prioridades sem rótulos partidários: ${currentUrl}`;
  } else {
    shareText = `Fiz o Teste Cego de Prioridades Eleitorais 2026 baseado nos dados oficiais do TSE. Descubra com qual proposta de país suas escolhas reais se alinham: ${currentUrl}`;
  }

  const whatsappBtn = document.getElementById('btnShareWhatsapp');
  if (whatsappBtn) {
    whatsappBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  }

  const copyBtn = document.getElementById('btnCopyLink');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(currentUrl).then(() => {
        showToast('Link do Quiz copiado com sucesso!');
      }).catch(() => {
        // Fallback
        showToast('Link: ' + currentUrl);
      });
    };
  }

  const restartBtn = document.getElementById('btnRestartQuiz');
  if (restartBtn) {
    restartBtn.onclick = startQuiz;
  }
}

// Renderizar Auditoria das Escolhas do Usuário (Aba 1)
function renderUserAudit() {
  const listContainer = document.getElementById('userAuditList');
  if (!listContainer) return;

  listContainer.innerHTML = '';

  quizThemes.forEach(theme => {
    const choice = appState.userAnswers[theme.id];
    if (!choice) return;

    const isLula = choice.party === 'PT';
    const card = document.createElement('div');
    card.className = 'audit-card';

    card.innerHTML = `
      <div class="audit-card-head">
        <span class="audit-theme-tag">${theme.title}</span>
        <span class="audit-badge ${isLula ? 'badge-lula' : 'badge-flavio'}">
          ${choice.candidate} (${choice.party})
        </span>
      </div>
      <div class="audit-choice-text">"${choice.text}"</div>
      <div class="audit-tse-citation">
        <span class="audit-pages-tag">📍 Plano TSE: ${choice.pages}</span>
        <span>•</span>
        <span>${choice.tseSummary}</span>
      </div>
    `;

    listContainer.appendChild(card);
  });
}

// Renderizar Explorador Completo do TSE (Aba 2)
function renderTSEExplorer() {
  const container = document.getElementById('tseAllList');
  if (!container) return;

  const query = appState.explorerSearchTerm.toLowerCase();
  container.innerHTML = '';

  let matchFound = false;

  quizThemes.forEach(theme => {
    const matchingOptions = theme.options.filter(opt => {
      const matchCandidate = (appState.explorerFilter === 'all') ||
        (appState.explorerFilter === 'Lula' && opt.party === 'PT') ||
        (appState.explorerFilter === 'Flávio' && opt.party === 'PL');

      const matchSearch = !query ||
        theme.title.toLowerCase().includes(query) ||
        theme.question.toLowerCase().includes(query) ||
        opt.text.toLowerCase().includes(query) ||
        opt.tseSummary.toLowerCase().includes(query) ||
        opt.pages.toLowerCase().includes(query);

      return matchCandidate && matchSearch;
    });

    if (matchingOptions.length > 0) {
      matchFound = true;
      const themeBlock = document.createElement('div');
      themeBlock.className = 'audit-card';
      themeBlock.style.marginBottom = '20px';

      let optionsHtml = '';
      matchingOptions.forEach(opt => {
        const isLula = opt.party === 'PT';
        optionsHtml += `
          <div style="border-top: 1px solid var(--border-light); padding: 14px 0 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
              <strong style="font-size: 13px; color: var(--text-main);">Opção ${opt.letter}</strong>
              <span class="audit-badge ${isLula ? 'badge-lula' : 'badge-flavio'}">
                ${opt.candidate} (${opt.party})
              </span>
            </div>
            <p style="font-size: 14px; color: var(--text-body); margin-bottom: 8px;">"${opt.text}"</p>
            <div class="audit-tse-citation">
              <span class="audit-pages-tag">📍 ${opt.pages}</span>
              <span>•</span>
              <span>${opt.tseSummary}</span>
            </div>
          </div>
        `;
      });

      themeBlock.innerHTML = `
        <div style="margin-bottom: 12px;">
          <span class="audit-theme-tag">${theme.title}</span>
          <div style="font-size: 14px; font-weight: 600; color: var(--text-main); margin-top: 4px;">${theme.question}</div>
        </div>
        <div>${optionsHtml}</div>
      `;

      container.appendChild(themeBlock);
    }
  });

  if (!matchFound) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; color: var(--text-muted); font-size: 14px;">
        Nenhuma proposta encontrada para o termo pesquisado. Tente palavras como "SUS", "salário", "agro", "impostos" ou "polícia".
      </div>
    `;
  }
}

// Controle de Abas no Gabarito
function switchAuditTab(tabId) {
  appState.activeAuditTab = tabId;

  const btnUser = document.getElementById('tabBtnUser');
  const btnAll = document.getElementById('tabBtnAll');
  const panelUser = document.getElementById('tabPanelUser');
  const panelAll = document.getElementById('tabPanelAll');

  if (tabId === 'user-choices') {
    btnUser.classList.add('active');
    btnAll.classList.remove('active');
    panelUser.style.display = 'block';
    panelAll.style.display = 'none';
  } else {
    btnUser.classList.remove('active');
    btnAll.classList.add('active');
    panelUser.style.display = 'none';
    panelAll.style.display = 'block';
    renderTSEExplorer();
  }
}

// Filtro por Candidato no Explorador TSE
function setExplorerFilter(filterType, btnEl) {
  appState.explorerFilter = filterType;
  document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.remove('active'));
  btnEl.classList.add('active');
  renderTSEExplorer();
}

// Busca em Tempo Real no Explorador TSE
function handleExplorerSearch(inputEl) {
  appState.explorerSearchTerm = inputEl.value;
  renderTSEExplorer();
}

// Toast de Notificação
function showToast(msg) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

// Atalhos de Teclado
function handleKeyboardShortcuts(e) {
  const quizScreen = document.getElementById('screenQuiz');
  if (!quizScreen || quizScreen.style.display !== 'block') return;

  const theme = quizThemes[appState.currentStep];
  if (!theme) return;

  // Teclas 1 a 4 ou A a D
  const key = e.key.toUpperCase();
  let selectedIndex = -1;

  if (key === '1' || key === 'A') selectedIndex = 0;
  if (key === '2' || key === 'B') selectedIndex = 1;
  if (key === '3' || key === 'C') selectedIndex = 2;
  if (key === '4' || key === 'D') selectedIndex = 3;

  if (selectedIndex >= 0 && selectedIndex < theme.options.length) {
    selectOption(theme.id, theme.options[selectedIndex]);
  } else if (e.key === 'Enter') {
    if (appState.userAnswers[theme.id]) {
      nextStep();
    }
  }
}
