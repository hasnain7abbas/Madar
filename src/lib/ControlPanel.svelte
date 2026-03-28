<script lang="ts">
  import { CATEGORIES, SOURCES } from "./simulations";

  let {
    selectedCategory,
    selectedSource,
    selectedGrade,
    favoritesCount,
    onCategoryChange,
    onSourceChange,
    onGradeChange,
    onShowFavorites,
  } = $props<{
    selectedCategory: string | null;
    selectedSource: string | null;
    selectedGrade: string | null;
    favoritesCount: number;
    onCategoryChange: (category: string | null) => void;
    onSourceChange: (source: string | null) => void;
    onGradeChange: (grade: string | null) => void;
    onShowFavorites: () => void;
  }>();

  const grades = ["Middle School", "High School", "College"];

  function handleCategoryClick(key: string | null) {
    onCategoryChange(key);
  }

  function handleSourceClick(source: string | null) {
    onSourceChange(source === selectedSource ? null : source);
  }

  function handleGradeClick(grade: string | null) {
    onGradeChange(grade === selectedGrade ? null : grade);
  }
</script>

<aside class="sidebar">
  <!-- Header with full SVG Logo -->
  <div class="sidebar-header">
    <svg class="logo-svg" viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="orb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#534AB7"/><stop offset="100%" stop-color="#1D9E75"/></linearGradient>
        <linearGradient id="orb2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1D9E75"/><stop offset="100%" stop-color="#378ADD"/></linearGradient>
        <linearGradient id="orb3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#378ADD"/><stop offset="100%" stop-color="#534AB7"/></linearGradient>
        <linearGradient id="core" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EF9F27"/><stop offset="100%" stop-color="#E24B4A"/></linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EF9F27" stop-opacity="0.3"/><stop offset="100%" stop-color="#E24B4A" stop-opacity="0"/></linearGradient>
      </defs>
      <circle cx="340" cy="180" r="60" fill="url(#glow)"/>
      <ellipse cx="340" cy="180" rx="130" ry="55" fill="none" stroke="url(#orb1)" stroke-width="1.2" opacity="0.5" transform="rotate(-20 340 180)"/>
      <ellipse cx="340" cy="180" rx="130" ry="55" fill="none" stroke="url(#orb2)" stroke-width="1.2" opacity="0.5" transform="rotate(40 340 180)"/>
      <ellipse cx="340" cy="180" rx="130" ry="55" fill="none" stroke="url(#orb3)" stroke-width="1.2" opacity="0.5" transform="rotate(100 340 180)"/>
      <circle cx="340" cy="180" r="28" fill="url(#core)"/>
      <circle cx="332" cy="172" r="8" fill="white" opacity="0.2"/>
      <circle cx="218" cy="145" r="7" fill="#7F77DD"/><circle cx="216" cy="143" r="2" fill="white" opacity="0.35"/>
      <circle cx="445" cy="130" r="5.5" fill="#1D9E75"/><circle cx="443.5" cy="128.5" r="1.5" fill="white" opacity="0.35"/>
      <circle cx="280" cy="245" r="6" fill="#378ADD"/><circle cx="278.5" cy="243.5" r="1.8" fill="white" opacity="0.35"/>
      <circle cx="470" cy="195" r="3" fill="#534AB7" opacity="0.5"/>
      <circle cx="205" cy="200" r="2.5" fill="#1D9E75" opacity="0.4"/>
      <circle cx="400" cy="250" r="2" fill="#378ADD" opacity="0.35"/>
      <circle cx="310" cy="110" r="2.5" fill="#7F77DD" opacity="0.4"/>
      <circle cx="390" cy="100" r="1.8" fill="#EF9F27" opacity="0.3"/>
      <text x="340" y="310" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="42" font-weight="500" letter-spacing="10" fill="#e8e8e8">MADAR</text>
      <text x="340" y="345" text-anchor="middle" font-family="'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif" font-size="18" fill="#a0a0b0" opacity="0.7">مدار</text>
      <text x="340" y="375" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="12" font-weight="400" letter-spacing="3" fill="#a0a0b0">INTERACTIVE STEM PHYSICS</text>
    </svg>
  </div>

  <div class="sidebar-scroll">
    <!-- All button -->
    <section class="section">
      <button
        class="category-btn"
        class:active={selectedCategory === null && selectedSource === null && selectedGrade === null}
        onclick={() => { onCategoryChange(null); onSourceChange(null); onGradeChange(null); }}
      >
        <span class="cat-emoji">🌐</span>
        <span class="cat-label">
          <span class="cat-en">All Simulations</span>
          <span class="cat-ur">تمام سمولیشنز</span>
        </span>
      </button>
    </section>

    <!-- Categories -->
    <section class="section">
      <h2 class="section-title">Categories</h2>
      <div class="category-list">
        {#each CATEGORIES as cat}
          <button
            class="category-btn"
            class:active={selectedCategory === cat.id}
            onclick={() => handleCategoryClick(selectedCategory === cat.id ? null : cat.id)}
          >
            <span class="cat-emoji">{cat.emoji}</span>
            <span class="cat-label">
              <span class="cat-en">{cat.name}</span>
              <span class="cat-ur">{cat.urdu}</span>
            </span>
          </button>
        {/each}
      </div>
    </section>

    <!-- Sources -->
    <section class="section">
      <h2 class="section-title">Sources</h2>
      <div class="pill-group">
        {#each SOURCES as source}
          <button
            class="pill"
            class:active={selectedSource === source}
            onclick={() => handleSourceClick(source)}
          >
            {source}
          </button>
        {/each}
      </div>
    </section>

    <!-- Grade Level -->
    <section class="section">
      <h2 class="section-title">Grade Level</h2>
      <div class="pill-group">
        {#each grades as grade}
          <button
            class="pill"
            class:active={selectedGrade === grade}
            onclick={() => handleGradeClick(grade)}
          >
            {grade}
          </button>
        {/each}
      </div>
    </section>

    <!-- Favorites -->
    <section class="section favorites-section">
      <button class="favorites-btn" onclick={onShowFavorites}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--color-accent-red)" stroke="none">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span>Favorites</span>
        {#if favoritesCount > 0}
          <span class="fav-count">{favoritesCount}</span>
        {/if}
      </button>
    </section>

    <!-- Keyboard shortcuts hint -->
    <div class="shortcuts-hint">
      <span>/</span> search &nbsp;
      <span>Esc</span> back
    </div>
  </div>

  <!-- Developer attribution -->
  <div class="sidebar-footer">
    <div class="attribution">
      <span class="made-by">Made with &#10084; in Skardu, Pakistan</span>
      <a class="dev-link" href="https://github.com/hasnain7abbas" target="_blank" rel="noopener">
        by Hasnain Abbas
      </a>
    </div>
  </div>
</aside>

<style>
  .sidebar {
    width: 280px;
    min-width: 280px;
    height: 100%;
    background: var(--color-surface);
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    user-select: none;
  }

  .sidebar-header {
    padding: 10px 12px;
    border-bottom: 1px solid var(--color-border);
    text-align: center;
  }

  .logo-svg {
    width: 100%;
    height: auto;
    max-height: 160px;
    filter: drop-shadow(0 2px 10px rgba(239, 159, 39, 0.15));
  }

  .sidebar-scroll {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;
  }

  /* Section */
  .section {
    padding: 10px 12px;
    border-bottom: 1px solid rgba(42, 42, 69, 0.3);
  }

  .section-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--color-text-dim);
    margin-bottom: 8px;
  }

  /* Categories */
  .category-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .category-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    background: transparent;
    border-radius: var(--radius-sm);
    border: 1px solid transparent;
    transition: all 0.15s ease;
    text-align: left;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  .category-btn:hover {
    background: var(--color-surface-hover);
  }

  .category-btn.active {
    background: rgba(83, 74, 183, 0.15);
    border-color: var(--color-accent-purple);
  }

  .cat-emoji {
    font-size: 18px;
    flex-shrink: 0;
    width: 24px;
    text-align: center;
  }

  .cat-label {
    display: flex;
    flex-direction: column;
    gap: 0;
    min-width: 0;
  }

  .cat-en {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text);
    line-height: 1.3;
  }

  .cat-ur {
    font-family: var(--font-urdu);
    font-size: 14px;
    color: var(--color-text-dim);
    direction: rtl;
    text-align: left;
    line-height: 1.4;
  }

  /* Pills (source / grade) */
  .pill-group {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .pill {
    padding: 5px 12px;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-dim);
    background: var(--color-bg);
    border-radius: 12px;
    border: 1px solid transparent;
    transition: all 0.15s ease;
    cursor: pointer;
    font-family: inherit;
  }

  .pill:hover {
    color: var(--color-text);
    background: var(--color-surface-hover);
  }

  .pill.active {
    color: white;
    background: var(--color-accent-purple);
    border-color: var(--color-accent-purple);
  }

  /* Favorites */
  .favorites-section {
    border-bottom: none;
  }

  .favorites-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 12px;
    background: var(--color-bg);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
  }

  .favorites-btn:hover {
    background: var(--color-surface-hover);
    border-color: var(--color-accent-red);
  }

  .fav-count {
    margin-left: auto;
    font-size: 11px;
    font-weight: 600;
    color: var(--color-accent-red);
    background: rgba(226, 75, 74, 0.15);
    padding: 1px 7px;
    border-radius: 8px;
  }

  /* Shortcuts hint */
  .shortcuts-hint {
    padding: 10px 16px;
    font-size: 10px;
    color: var(--color-text-muted);
    text-align: center;
    line-height: 1.8;
  }

  .shortcuts-hint span {
    display: inline-block;
    padding: 2px 6px;
    background: var(--color-bg);
    border-radius: 3px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-text-dim);
    border: 1px solid var(--color-border);
  }

  /* Developer Attribution Footer */
  .sidebar-footer {
    padding: 12px 16px;
    border-top: 1px solid var(--color-border);
    text-align: center;
    flex-shrink: 0;
  }

  .attribution {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .made-by {
    font-size: 12px;
    color: var(--color-text-dim);
  }

  .dev-link {
    font-size: 13px;
    font-weight: 600;
    color: var(--color-accent-orange);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .dev-link:hover {
    color: var(--color-accent-red);
    text-decoration: underline;
  }
</style>
