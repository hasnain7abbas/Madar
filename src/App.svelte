<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import ControlPanel from "./lib/ControlPanel.svelte";
  import HeroSection from "./lib/HeroSection.svelte";
  import SearchBar from "./lib/SearchBar.svelte";
  import SimCard from "./lib/SimCard.svelte";
  import SimPlayer from "./lib/SimPlayer.svelte";
  import TutorialModal from "./lib/TutorialModal.svelte";
  import { simulations as SIMULATIONS, type Simulation } from "./lib/simulations";
  import type { ViewMode } from "./lib/types";

  /* ── State ── */
  let viewMode: ViewMode = $state("browse");
  let selectedSim: Simulation | null = $state(null);
  let searchQuery = $state("");
  let selectedCategory: string | null = $state(null);
  let selectedSource: string | null = $state(null);
  let selectedGrade: string | null = $state(null);
  let showFavoritesOnly = $state(false);
  let favorites: Set<string> = $state(new Set());
  let sidebarOpen = $state(false);
  let darkMode = $state(true);

  let searchBar: SearchBar | undefined = $state(undefined);

  /* ── Theme ── */
  $effect(() => {
    const saved = localStorage.getItem("madar-theme");
    if (saved === "light") {
      darkMode = false;
      document.documentElement.classList.add("light");
    }
  });

  function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("madar-theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("madar-theme", "light");
    }
  }

  /* ── Derived: filtered simulations ── */
  let filteredSims = $derived.by(() => {
    let sims = SIMULATIONS;
    if (selectedCategory) sims = sims.filter((s) => s.category === selectedCategory);
    if (selectedSource) sims = sims.filter((s) => s.source === selectedSource);
    if (selectedGrade) sims = sims.filter((s) => s.gradeLevel === selectedGrade);
    if (showFavoritesOnly) sims = sims.filter((s) => favorites.has(s.id));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      sims = sims.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.source.toLowerCase().includes(q) ||
          (s.tags && s.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }
    return sims;
  });

  let favoritesCount = $derived(favorites.size);

  /* ── Tauri detection ── */
  function isTauri(): boolean {
    return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
  }

  /* ── Load favorites on mount ── */
  $effect(() => { loadFavorites(); });

  async function loadFavorites() {
    if (isTauri()) {
      try {
        const ids: string[] = await invoke("get_favorites");
        favorites = new Set(ids);
        return;
      } catch {}
    }
    try {
      const stored = localStorage.getItem("madar-favorites");
      if (stored) favorites = new Set(JSON.parse(stored));
    } catch {
      favorites = new Set();
    }
  }

  function saveFavoritesToStorage(favSet: Set<string>) {
    if (!isTauri()) {
      localStorage.setItem("madar-favorites", JSON.stringify([...favSet]));
    }
  }

  async function toggleFavorite(simId: string) {
    const newFavs = new Set(favorites);
    if (newFavs.has(simId)) {
      newFavs.delete(simId);
      if (isTauri()) { try { await invoke("remove_favorite", { id: simId }); } catch {} }
    } else {
      newFavs.add(simId);
      if (isTauri()) { try { await invoke("add_favorite", { id: simId }); } catch {} }
    }
    favorites = newFavs;
    saveFavoritesToStorage(newFavs);
  }

  function selectSim(sim: Simulation) {
    selectedSim = sim;
    viewMode = "playing";
    sidebarOpen = false;
  }

  function goBack() {
    viewMode = "browse";
    selectedSim = null;
  }

  function handleCategoryChange(category: string | null) {
    selectedCategory = category;
    showFavoritesOnly = false;
    sidebarOpen = false;
  }

  function handleSourceChange(source: string | null) {
    selectedSource = source;
    showFavoritesOnly = false;
  }

  function handleGradeChange(grade: string | null) {
    selectedGrade = grade;
    showFavoritesOnly = false;
  }

  function handleShowFavorites() {
    showFavoritesOnly = !showFavoritesOnly;
    if (showFavoritesOnly) {
      selectedCategory = null;
      selectedSource = null;
      selectedGrade = null;
    }
    sidebarOpen = false;
  }

  function handleSearchInput(query: string) {
    searchQuery = query;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      if (sidebarOpen) { sidebarOpen = false; return; }
      if (viewMode === "playing") { e.preventDefault(); goBack(); return; }
    }
    if (e.key === "/" && viewMode === "browse" && document.activeElement?.tagName !== "INPUT") {
      e.preventDefault();
      searchBar?.focus();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<TutorialModal />

{#if viewMode === "playing" && selectedSim}
  <div class="player-view">
    <SimPlayer
      simulation={selectedSim}
      onBack={goBack}
      isFavorite={favorites.has(selectedSim.id)}
      onToggleFavorite={() => toggleFavorite(selectedSim!.id)}
    />
  </div>
{:else}
  <div class="browse-layout">
    <!-- Mobile backdrop -->
    {#if sidebarOpen}
      <div class="sidebar-backdrop" onclick={() => sidebarOpen = false} role="presentation"></div>
    {/if}

    <!-- Sidebar (drawer on mobile) -->
    <div class="sidebar-wrapper" class:open={sidebarOpen}>
      <ControlPanel
        {selectedCategory}
        {selectedSource}
        {selectedGrade}
        {favoritesCount}
        onCategoryChange={handleCategoryChange}
        onSourceChange={handleSourceChange}
        onGradeChange={handleGradeChange}
        onShowFavorites={handleShowFavorites}
        onClose={() => sidebarOpen = false}
      />
    </div>

    <main class="main-content">
      <div class="main-header">
        <div class="header-row">
          <!-- Hamburger button (mobile only) -->
          <button class="hamburger" onclick={() => sidebarOpen = true} aria-label="Open menu">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="16" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <div class="search-wrapper">
            <SearchBar
              bind:this={searchBar}
              value={searchQuery}
              onInput={handleSearchInput}
            />
          </div>

          <button class="theme-toggle" onclick={toggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {#if darkMode}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            {/if}
          </button>
        </div>

        {#if selectedCategory || selectedSource || selectedGrade || showFavoritesOnly}
          <div class="filter-info">
            <span class="filter-label">
              {#if showFavoritesOnly}Showing favorites{:else}Filtered{/if}
            </span>
            <span class="filter-count">{filteredSims.length} sim{filteredSims.length !== 1 ? "s" : ""}</span>
            <button
              class="clear-filters"
              onclick={() => { selectedCategory = null; selectedSource = null; selectedGrade = null; showFavoritesOnly = false; }}
            >
              Clear
            </button>
          </div>
        {:else}
          <div class="filter-info">
            <span class="filter-count">{filteredSims.length} simulation{filteredSims.length !== 1 ? "s" : ""}</span>
          </div>
        {/if}
      </div>

      <div class="sim-grid-container">
        {#if !searchQuery && !selectedCategory && !selectedSource && !selectedGrade && !showFavoritesOnly}
          <HeroSection
            {selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        {/if}

        {#if filteredSims.length === 0}
          <div class="empty-state">
            <span class="empty-emoji">🔍</span>
            <h3>No simulations found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        {:else}
          <div class="sim-grid">
            {#each filteredSims as sim, i (sim.id)}
              <SimCard
                simulation={sim}
                isFavorite={favorites.has(sim.id)}
                index={i}
                onClick={() => selectSim(sim)}
                onToggleFavorite={() => toggleFavorite(sim.id)}
              />
            {/each}
          </div>
        {/if}
      </div>

      <!-- Mobile bottom bar -->
      <nav class="mobile-bottom-bar">
        <button class="bottom-tab" class:active={!selectedCategory && !showFavoritesOnly} onclick={() => { handleCategoryChange(null); }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span>All</span>
        </button>
        <button class="bottom-tab" class:active={selectedCategory === 'physics'} onclick={() => handleCategoryChange(selectedCategory === 'physics' ? null : 'physics')}>
          <span class="tab-emoji">⚡</span>
          <span>Physics</span>
        </button>
        <button class="bottom-tab" class:active={selectedCategory === 'chemistry'} onclick={() => handleCategoryChange(selectedCategory === 'chemistry' ? null : 'chemistry')}>
          <span class="tab-emoji">🧪</span>
          <span>Chem</span>
        </button>
        <button class="bottom-tab" class:active={selectedCategory === 'biology'} onclick={() => handleCategoryChange(selectedCategory === 'biology' ? null : 'biology')}>
          <span class="tab-emoji">🧬</span>
          <span>Bio</span>
        </button>
        <button class="bottom-tab" class:active={showFavoritesOnly} onclick={handleShowFavorites}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill={showFavoritesOnly ? "var(--color-accent-red)" : "none"} stroke={showFavoritesOnly ? "var(--color-accent-red)" : "currentColor"} stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>Favs</span>
        </button>
      </nav>
    </main>
  </div>
{/if}

<style>
  .player-view {
    width: 100%;
    height: 100%;
  }

  .browse-layout {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* Sidebar wrapper — desktop: static, mobile: slide-out drawer */
  .sidebar-wrapper {
    flex-shrink: 0;
  }

  .sidebar-backdrop {
    display: none;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
  }

  .main-header {
    padding: 16px 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
  }

  .header-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    color: var(--color-text);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .hamburger:hover {
    background: var(--color-surface-hover);
  }

  .hamburger:active {
    transform: scale(0.9);
    transition-duration: 0.08s;
  }

  .search-wrapper {
    flex: 1;
    min-width: 0;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    color: var(--color-text-dim);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .theme-toggle:hover {
    background: var(--color-surface-hover);
    color: var(--color-accent-orange);
    border-color: var(--color-accent-orange);
    transform: rotate(15deg);
  }

  .theme-toggle:active {
    transform: scale(0.92) rotate(15deg);
  }

  .filter-info {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 2px;
    flex-wrap: wrap;
  }

  .filter-label {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-accent-purple);
  }

  .filter-count {
    font-size: 15px;
    color: var(--color-text-dim);
  }

  .clear-filters {
    font-size: 14px;
    color: var(--color-accent-red);
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
    font-weight: 500;
    transition: opacity 0.15s ease;
    margin-left: auto;
  }

  .clear-filters:hover {
    opacity: 0.8;
  }

  .sim-grid-container {
    flex: 1;
    overflow-y: auto;
    padding: 16px 20px 24px;
  }

  .sim-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 14px;
    animation: gridFadeIn 0.35s ease;
  }

  @keyframes gridFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
  }

  .empty-emoji {
    font-size: 56px;
    margin-bottom: 16px;
    animation: emptyBounce 2s ease-in-out infinite;
  }

  @keyframes emptyBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .empty-state h3 { font-size: 20px; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
  .empty-state p { font-size: 15px; color: var(--color-text-dim); }

  /* ── Mobile bottom bar (hidden on desktop) ── */
  .mobile-bottom-bar {
    display: none;
  }

  /* ======= MOBILE (<768px) ======= */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .sidebar-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 100;
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
      width: 300px;
      max-width: 85vw;
    }

    .sidebar-wrapper.open {
      transform: translateX(0);
    }

    .sidebar-backdrop {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 99;
      background: var(--backdrop-blur);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      animation: fadeIn 0.2s ease;
    }

    .main-header {
      padding: 12px 14px 0;
    }

    .sim-grid-container {
      padding: 12px 14px 0;
      padding-bottom: 80px;
    }

    .sim-grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 10px;
    }

    .filter-info {
      gap: 6px;
    }

    .filter-label, .filter-count {
      font-size: 14px;
    }

    /* Mobile bottom bar */
    .mobile-bottom-bar {
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background: var(--color-surface);
      border-top: 1px solid var(--color-border);
      padding: 6px 4px;
      padding-bottom: max(6px, env(safe-area-inset-bottom));
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .bottom-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 6px 8px;
      border-radius: 10px;
      color: var(--color-text-muted);
      font-size: 10px;
      font-weight: 500;
      font-family: inherit;
      background: none;
      border: none;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      min-width: 52px;
    }

    .bottom-tab:active {
      transform: scale(0.88);
      transition-duration: 0.08s;
    }

    .bottom-tab.active {
      color: var(--color-accent-purple);
    }

    .bottom-tab.active .tab-emoji {
      transform: scale(1.15);
    }

    .tab-emoji {
      font-size: 18px;
      line-height: 1;
      transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }

  /* Very small phones */
  @media (max-width: 400px) {
    .sim-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    .main-header {
      padding: 10px 10px 0;
    }

    .sim-grid-container {
      padding: 10px 10px 0;
      padding-bottom: 80px;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
