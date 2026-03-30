<script lang="ts">
  import type { Simulation } from "./simulations";

  let {
    simulation,
    onBack,
    isFavorite,
    onToggleFavorite,
  } = $props<{
    simulation: Simulation;
    onBack: () => void;
    isFavorite: boolean;
    onToggleFavorite: () => void;
  }>();

  let loading = $state(true);
  let error = $state(false);

  function handleIframeLoad() {
    loading = false;
  }

  function handleIframeError() {
    loading = false;
    error = true;
  }

  function openInBrowser() {
    window.open(simulation.embedUrl, "_blank");
  }
</script>

<div class="player-container">
  <!-- Top overlay bar -->
  <div class="player-bar">
    <button class="bar-btn back-btn" onclick={onBack} aria-label="Go back">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
      <span class="back-label">Back</span>
    </button>

    <div class="bar-center">
      <span class="sim-emoji">{simulation.thumbnailEmoji}</span>
      <span class="sim-name">{simulation.name}</span>
      <span class="sim-source">{simulation.source}</span>
    </div>

    <div class="bar-actions">
      <button
        class="bar-btn heart-btn"
        class:favorited={isFavorite}
        onclick={onToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill={isFavorite ? "var(--color-accent-red)" : "none"} stroke={isFavorite ? "var(--color-accent-red)" : "currentColor"} stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <button class="bar-btn open-btn" onclick={openInBrowser} aria-label="Open in browser">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
        </svg>
        <span class="open-label">Open in Browser</span>
      </button>
    </div>
  </div>

  <!-- Loading state -->
  {#if loading}
    <div class="loading-overlay">
      <div class="loader">
        <div class="loader-spinner"></div>
        <p class="loader-text">Loading {simulation.name}...</p>
        <p class="loader-hint">From {simulation.source}</p>
      </div>
    </div>
  {/if}

  <!-- Error state -->
  {#if error}
    <div class="error-overlay">
      <div class="error-content">
        <span class="error-emoji">⚠</span>
        <h3>Could not load simulation</h3>
        <p>This simulation may not support embedding. Try opening it directly in your browser.</p>
        <button class="error-btn" onclick={openInBrowser}>
          Open in Browser
        </button>
      </div>
    </div>
  {:else}
    <iframe
      src={simulation.embedUrl}
      title={simulation.name}
      class="player-iframe"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      allow="fullscreen"
      onload={handleIframeLoad}
      onerror={handleIframeError}
    ></iframe>
  {/if}
</div>

<style>
  .player-container {
    width: 100%;
    height: 100%;
    position: relative;
    background: var(--color-bg);
    display: flex;
    flex-direction: column;
  }

  .player-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    gap: 12px;
    flex-shrink: 0;
  }

  .bar-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    color: var(--color-text-dim);
    font-size: 13px;
    font-weight: 500;
    transition: all 0.15s ease;
    white-space: nowrap;
    cursor: pointer;
    border: none;
    background: none;
  }

  .bar-btn:hover {
    background: var(--color-surface-hover);
    color: var(--color-text);
  }

  .back-btn {
    color: var(--color-text);
  }

  .bar-center {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    overflow: hidden;
  }

  .sim-emoji {
    font-size: 20px;
    flex-shrink: 0;
  }

  .sim-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sim-source {
    font-size: 10px;
    padding: 2px 7px;
    background: var(--color-surface-hover);
    border-radius: 8px;
    color: var(--color-text-dim);
    flex-shrink: 0;
  }

  .bar-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .heart-btn.favorited {
    color: var(--color-accent-red);
  }

  .open-btn {
    background: var(--color-surface-hover);
    border: 1px solid var(--color-border);
  }

  .open-btn:hover {
    background: var(--color-surface-active);
    border-color: var(--color-text-muted);
  }

  .player-iframe {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background: #fff;
  }

  /* Loading */
  .loading-overlay {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
    z-index: 5;
  }

  .loader {
    text-align: center;
  }

  .loader-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-accent-purple);
    border-radius: 50%;
    margin: 0 auto 16px;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .loader-text {
    font-size: 15px;
    font-weight: 500;
    color: var(--color-text);
    margin-bottom: 4px;
  }

  .loader-hint {
    font-size: 12px;
    color: var(--color-text-dim);
  }

  /* Error */
  .error-overlay {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .error-content {
    text-align: center;
    max-width: 360px;
  }

  .error-emoji {
    font-size: 48px;
    display: block;
    margin-bottom: 16px;
  }

  .error-content h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 8px;
  }

  .error-content p {
    font-size: 13px;
    color: var(--color-text-dim);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .error-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    background: var(--color-accent-purple);
    color: white;
    border-radius: var(--radius-md);
    font-size: 13px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .error-btn:hover {
    filter: brightness(1.15);
    box-shadow: 0 4px 12px rgba(83, 74, 183, 0.4);
  }

  @media (max-width: 768px) {
    .player-bar {
      padding: 8px 10px;
      gap: 6px;
    }

    .back-label,
    .open-label {
      display: none;
    }

    .bar-btn {
      padding: 10px;
      min-width: 44px;
      min-height: 44px;
      border-radius: 10px;
    }

    .sim-name {
      font-size: 13px;
    }

    .sim-source {
      display: none;
    }

    .bar-center {
      gap: 6px;
    }

    .sim-emoji {
      font-size: 16px;
    }

    .back-btn {
      background: var(--color-surface-hover);
    }
  }

  @media (max-width: 400px) {
    .bar-center {
      display: none;
    }
  }
</style>
