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

  let searchBar: SearchBar | undefined = $state(undefined);

  /* ── Derived: filtered simulations ── */
  let filteredSims = $derived.by(() => {
    let sims = SIMULATIONS;

    // Filter by category
    if (selectedCategory) {
      sims = sims.filter((s) => s.category === selectedCategory);
    }

    // Filter by source
    if (selectedSource) {
      sims = sims.filter((s) => s.source === selectedSource);
    }

    // Filter by grade
    if (selectedGrade) {
      sims = sims.filter((s) => s.gradeLevel === selectedGrade);
    }

    // Filter by favorites
    if (showFavoritesOnly) {
      sims = sims.filter((s) => favorites.has(s.id));
    }

    // Filter by search
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
  $effect(() => {
    loadFavorites();
  });

  async function loadFavorites() {
    if (isTauri()) {
      try {
        const ids: string[] = await invoke("get_favorites");
        favorites = new Set(ids);
        return;
      } catch {
        // Tauri backend not ready — fall through to localStorage
      }
    }
    // Fallback to localStorage
    try {
      const stored = localStorage.getItem("madar-favorites");
      if (stored) {
        favorites = new Set(JSON.parse(stored));
      }
    } catch {
      favorites = new Set();
    }
  }

  function saveFavoritesToStorage(favSet: Set<string>) {
    if (!isTauri()) {
      localStorage.setItem("madar-favorites", JSON.stringify([...favSet]));
    }
  }

  /* ── Favorite toggling ── */
  async function toggleFavorite(simId: string) {
    const newFavs = new Set(favorites);
    if (newFavs.has(simId)) {
      newFavs.delete(simId);
      if (isTauri()) {
        try {
          await invoke("remove_favorite", { id: simId });
        } catch {
          // Silently fail if backend not ready
        }
      }
    } else {
      newFavs.add(simId);
      if (isTauri()) {
        try {
          await invoke("add_favorite", { id: simId });
        } catch {
          // Silently fail if backend not ready
        }
      }
    }
    favorites = newFavs;
    saveFavoritesToStorage(newFavs);
  }

  /* ── Sim selection ── */
  function selectSim(sim: Simulation) {
    selectedSim = sim;
    viewMode = "playing";
  }

  function goBack() {
    viewMode = "browse";
    selectedSim = null;
  }

  /* ── Filter handlers ── */
  function handleCategoryChange(category: string | null) {
    selectedCategory = category;
    showFavoritesOnly = false;
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
  }

  function handleSearchInput(query: string) {
    searchQuery = query;
  }

  /* ── Keyboard shortcuts ── */
  function handleKeydown(e: KeyboardEvent) {
    // Escape: go back from player
    if (e.key === "Escape" && viewMode === "playing") {
      e.preventDefault();
      goBack();
      return;
    }

    // / to focus search (only in browse mode, and not when typing in an input)
    if (
      e.key === "/" &&
      viewMode === "browse" &&
      document.activeElement?.tagName !== "INPUT"
    ) {
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
    <ControlPanel
      {selectedCategory}
      {selectedSource}
      {selectedGrade}
      {favoritesCount}
      onCategoryChange={handleCategoryChange}
      onSourceChange={handleSourceChange}
      onGradeChange={handleGradeChange}
      onShowFavorites={handleShowFavorites}
    />

    <main class="main-content">
      <div class="main-header">
        <SearchBar
          bind:this={searchBar}
          value={searchQuery}
          onInput={handleSearchInput}
        />

        <!-- Active filters info -->
        {#if selectedCategory || selectedSource || selectedGrade || showFavoritesOnly}
          <div class="filter-info">
            <span class="filter-label">
              {#if showFavoritesOnly}
                Showing favorites
              {:else}
                Filtered
              {/if}
            </span>
            <span class="filter-count">{filteredSims.length} simulation{filteredSims.length !== 1 ? "s" : ""}</span>
            <button
              class="clear-filters"
              onclick={() => { selectedCategory = null; selectedSource = null; selectedGrade = null; showFavoritesOnly = false; }}
            >
              Clear filters
            </button>
          </div>
        {:else}
          <div class="filter-info">
            <span class="filter-count">{filteredSims.length} simulation{filteredSims.length !== 1 ? "s" : ""}</span>
          </div>
        {/if}
      </div>

      <!-- Simulation grid -->
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

  .filter-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 2px;
  }

  .filter-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-accent-purple);
  }

  .filter-count {
    font-size: 14px;
    color: var(--color-text-dim);
  }

  .clear-filters {
    font-size: 13px;
    color: var(--color-text-muted);
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
    text-decoration: underline;
    transition: color 0.15s ease;
    margin-left: auto;
  }

  .clear-filters:hover {
    color: var(--color-text);
  }

  /* Grid */
  .sim-grid-container {
    flex: 1;
    overflow-y: auto;
    padding: 16px 20px 20px;
  }

  .sim-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
  }

  /* Empty state */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
  }

  .empty-emoji {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .empty-state h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 8px;
  }

  .empty-state p {
    font-size: 15px;
    color: var(--color-text-dim);
  }
</style>
