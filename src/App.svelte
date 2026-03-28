<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import ControlPanel from "./lib/ControlPanel.svelte";
  import SearchBar from "./lib/SearchBar.svelte";
  import SimCard from "./lib/SimCard.svelte";
  import SimPlayer from "./lib/SimPlayer.svelte";
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

  let searchBar: SearchBar | undefined = $state(undefined);

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
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
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
        {#if filteredSims.length === 0}
          <div class="empty-state">
            <span class="empty-emoji">🔍</span>
            <h3>No simulations found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        {:else}
          <div class="sim-grid">
            {#each filteredSims as sim (sim.id)}
              <SimCard
                simulation={sim}
                isFavorite={favorites.has(sim.id)}
                onClick={() => selectSim(sim)}
                onToggleFavorite={() => toggleFavorite(sim.id)}
              />
            {/each}
          </div>
        {/if}
      </div>
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
    border-radius: 10px;
    color: var(--color-text);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    flex-shrink: 0;
    cursor: pointer;
    transition: background 0.15s;
  }

  .hamburger:hover {
    background: var(--color-surface-hover);
  }

  .search-wrapper {
    flex: 1;
    min-width: 0;
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
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 14px;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
  }

  .empty-emoji { font-size: 56px; margin-bottom: 16px; }
  .empty-state h3 { font-size: 20px; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
  .empty-state p { font-size: 15px; color: var(--color-text-dim); }

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
      transition: transform 0.25s ease;
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
      background: rgba(0, 0, 0, 0.5);
      animation: fadeIn 0.2s ease;
    }

    .main-header {
      padding: 12px 14px 0;
    }

    .sim-grid-container {
      padding: 12px 14px 20px;
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
      padding: 10px 10px 16px;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
