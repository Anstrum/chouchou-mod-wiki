// ChouChou Mod Wiki Web Application

let enchantmentsData = [];
let lootData = [];

// State
let currentTab = 'enchantments';
let activeCategory = 'all';
let onlyTranscended = false;
let searchQuery = '';

// DOM Ready
document.addEventListener('DOMContentLoaded', async () => {
  initTabs();
  initSearchAndFilters();

  await loadData();

  renderEnchantments();
  renderLootTables();
  renderBackpacks();
  initCalculator();
});

// Load JSON data
async function loadData() {
  try {
    const [enchantsRes, lootRes] = await Promise.all([
      fetch('data/enchantments.json'),
      fetch('data/loot_tables.json')
    ]);

    if (enchantsRes.ok && lootRes.ok) {
      enchantmentsData = await enchantsRes.json();
      lootData = await lootRes.json();
      return;
    }
  } catch (err) {
    console.warn('Fetch fallback triggered:', err);
  }
}

// Tab Navigation
function initTabs() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    currentTab = tabId;
    navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === 'tab-' + tabId);
    });
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('tab-' + hash)) {
    switchTab(hash);
  }
}

// Search & Category Filters
function initSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderEnchantments();
    });
  }

  const categoryPills = document.querySelectorAll('.cat-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category;
      renderEnchantments();
    });
  });

  const transcendedToggle = document.getElementById('toggle-transcended');
  if (transcendedToggle) {
    transcendedToggle.addEventListener('click', () => {
      onlyTranscended = !onlyTranscended;
      transcendedToggle.classList.toggle('active', onlyTranscended);
      renderEnchantments();
    });
  }
}

// Render Enchantment Cards
function renderEnchantments() {
  const container = document.getElementById('enchantments-grid');
  const countEl = document.getElementById('enchantments-count');
  if (!container) return;

  const filtered = enchantmentsData.filter(item => {
    // Search
    if (searchQuery) {
      const matchName = item.name.toLowerCase().includes(searchQuery);
      const matchId = item.id.toLowerCase().includes(searchQuery);
      const matchTarget = item.target.toLowerCase().includes(searchQuery);
      const matchEffect = item.effect.toLowerCase().includes(searchQuery);
      if (!matchName && !matchId && !matchTarget && !matchEffect) return false;
    }

    // Category
    if (activeCategory !== 'all') {
      if (activeCategory === 'mining' && !item.category.includes('Outils')) return false;
      if (activeCategory === 'melee' && !item.category.includes('Combat')) return false;
      if (activeCategory === 'armor' && !item.category.includes('Armures')) return false;
      if (activeCategory === 'bow' && !item.category.includes('Tir')) return false;
      if (activeCategory === 'trident' && !item.category.includes('Tridents')) return false;
      if (activeCategory === 'utility' && !item.category.includes('Boucliers') && !item.category.includes('Pêche')) return false;
    }

    // Transcended only
    if (onlyTranscended && (item.level !== '10 (5 / 10)' || item.isDeleted)) {
      return false;
    }

    return true;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} enchantement(s) sur 89`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.3rem; margin-bottom: 0.5rem;">🔍 Aucun enchantement correspondant</p>
        <p style="font-size: 0.95rem;">Modifiez vos mots-clés ou réinitialisez les filtres.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isMax10 = item.level && item.level.includes('10');
    const isDel = item.isDeleted;
    const cardClass = isDel ? 'enchant-card deleted' : (isMax10 ? 'enchant-card transcended' : 'enchant-card');
    const levelClass = isMax10 ? 'level-badge transcended' : 'level-badge';

    return `
      <div class="${cardClass}">
        <div class="card-top">
          <div class="card-title-wrap">
            <span class="card-title">
              ${isDel ? '❌' : (isMax10 ? '✨' : '🔹')} ${escapeHtml(item.name)}
            </span>
            <span class="card-id">${escapeHtml(item.id)}</span>
          </div>
          <span class="${levelClass}">${isDel ? 'SUPPRIMÉ' : 'NIV ' + escapeHtml(item.level)}</span>
        </div>
        
        <div class="card-target">
          <span>🎯</span>
          <span>${escapeHtml(item.target)}</span>
        </div>

        <p class="card-effect">${escapeHtml(item.effect)}</p>

        <div class="card-footer">
          <span>📂 ${escapeHtml(item.category)}</span>
          <span>${isDel ? '🚫 Retiré du jeu' : (isMax10 ? '🔮 Transcendance X' : '⚖️ Standard')}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Interactive Transcendence Calculator
function initCalculator() {
  const selectEnchant = document.getElementById('calc-enchant-select');
  const selectFrom = document.getElementById('calc-from-lvl');
  const selectTo = document.getElementById('calc-to-lvl');

  if (!selectEnchant || !selectFrom || !selectTo) return;

  const validTrans = enchantmentsData.filter(e => !e.isDeleted && e.level.includes('10'));
  if (validTrans.length > 0) {
    selectEnchant.innerHTML = validTrans.map(e => `<option value="${e.id}">${e.name} (${e.id})</option>`).join('');
  }

  function updateCalc() {
    const fromLvl = parseInt(selectFrom.value, 10);
    const toLvl = parseInt(selectTo.value, 10);

    const etherEl = document.getElementById('cost-ether');
    const transcEl = document.getElementById('cost-transc');
    const xpEl = document.getElementById('cost-xp');
    const hintEl = document.getElementById('calc-hint');

    if (toLvl <= fromLvl) {
      if (etherEl) etherEl.textContent = '0';
      if (transcEl) transcEl.textContent = '0';
      if (xpEl) xpEl.textContent = '0 Niv';
      if (hintEl) hintEl.textContent = '⚠️ Le niveau visé doit être strictement supérieur au niveau actuel.';
      return;
    }

    let etherTotal = 0;
    let transcTotal = 0;
    let xpTotal = 0;

    const stepCosts = [
      { from: 5, to: 6, ether: 2, transc: 0, xp: 5 },
      { from: 6, to: 7, ether: 4, transc: 0, xp: 8 },
      { from: 7, to: 8, ether: 6, transc: 0, xp: 12 },
      { from: 8, to: 9, ether: 8, transc: 0, xp: 15 },
      { from: 9, to: 10, ether: 0, transc: 1, xp: 25 }
    ];

    stepCosts.forEach(step => {
      if (step.from >= fromLvl && step.to <= toLvl) {
        etherTotal += step.ether;
        transcTotal += step.transc;
        xpTotal += step.xp;
      }
    });

    if (etherEl) etherEl.textContent = etherTotal.toString();
    if (transcEl) transcEl.textContent = transcTotal.toString();
    if (xpEl) xpEl.textContent = xpTotal + ' Niveaux';
    if (hintEl) hintEl.textContent = `✅ Passage prêt de Niveau ${fromLvl} à Niveau ${toLvl} dans la Table de Transcendance.`;
  }

  selectEnchant.addEventListener('change', updateCalc);
  selectFrom.addEventListener('change', updateCalc);
  selectTo.addEventListener('change', updateCalc);

  updateCalc();
}

// Render Loot Tables
function renderLootTables() {
  const container = document.getElementById('loot-container');
  if (!container) return;

  container.innerHTML = lootData.map(struct => {
    return `
      <div class="loot-structure-card">
        <div class="loot-structure-header">
          <div class="loot-structure-title">
            <span>${struct.icon}</span>
            <span>${escapeHtml(struct.name)}</span>
            <span class="badge-version">${escapeHtml(struct.version)}</span>
          </div>
          <span style="color: var(--text-secondary); font-size: 0.9rem;">📍 ${escapeHtml(struct.category)}</span>
        </div>
        <div style="padding: 1.25rem; font-size: 0.95rem; color: var(--text-secondary); border-bottom: 1px solid var(--border-color);">
          ${escapeHtml(struct.description)}
        </div>
        ${struct.image ? `<div style="padding: 1.25rem; text-align: center;"><img src="${struct.image}" style="max-height: 380px; width: 100%; object-fit: cover; border-radius: 10px;" alt="${struct.name}" /></div>` : ''}
        <table class="loot-table">
          <thead>
            <tr>
              <th>Trésor / Butin</th>
              <th>Probabilité</th>
              <th>Utilité & Rareté</th>
            </tr>
          </thead>
          <tbody>
            ${struct.items.map(item => `
              <tr>
                <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(item.name)}</td>
                <td><span class="rate-badge ${item.rarity}">${escapeHtml(item.rate)}</span></td>
                <td style="color: #cbd5e1;">${escapeHtml(item.note)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }).join('');
}

// Render Backpacks
function renderBackpacks() {
  const container = document.getElementById('backpacks-content');
  if (!container) return;

  container.innerHTML = `
    <div class="hero-banner" style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">🎒 Équilibrage des Sacs à Dos des Monstres</h2>
      <p style="color: var(--text-secondary);">
        Système de butin thématique et progressif sur les monstres porteurs de sacs. Les monstres courants ont des butins utilitaires, tandis que les Endermen possèdent les récompenses magiques rares.
      </p>
    </div>

    <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
      <div class="enchant-card transcended">
        <div class="card-top">
          <span class="card-title">👁️ Enderman à Sac</span>
          <span class="level-badge transcended">RARE</span>
        </div>
        <div class="card-target"><span>🎒 Sacs Diamant / Cuivre</span></div>
        <p class="card-effect">
          <strong>Butin magique garanti :</strong> Livres précieux de haut rang, équipements diamant sur-enchantés, perles de l'Ender et lingots rares.
        </p>
      </div>

      <div class="enchant-card">
        <div class="card-top">
          <span class="card-title">🧟 Zombie & Squelette</span>
          <span class="level-badge">COMMUN</span>
        </div>
        <div class="card-target"><span>🎒 Sacs Cuir / Fer</span></div>
        <p class="card-effect">
          <strong>Butin de survie :</strong> Flèches, torches, charbon, nourriture cuite et minerais bruts. Les taux d'objets enchantés sont drastiquement abaissés pour préserver l'équilibre de départ.
        </p>
      </div>

      <div class="enchant-card">
        <div class="card-top">
          <span class="card-title">🐷 Piglin du Nether</span>
          <span class="level-badge">THÉMATIQUE</span>
        </div>
        <div class="card-target"><span>🎒 Sacs Or</span></div>
        <p class="card-effect">
          <strong>Ressources du Nether :</strong> Pépites et lingots d'or, quartz, briques du Nether et consommables de survie infernale.
        </p>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
