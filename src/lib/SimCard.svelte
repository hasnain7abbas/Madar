<script lang="ts">
  import type { Simulation } from "./simulations";

  let {
    simulation,
    isFavorite,
    onClick,
    onToggleFavorite,
  } = $props<{
    simulation: Simulation;
    isFavorite: boolean;
    onClick: () => void;
    onToggleFavorite: () => void;
  }>();

  function handleFavoriteClick(e: MouseEvent) {
    e.stopPropagation();
    onToggleFavorite();
  }
</script>

<div class="sim-card" role="button" tabindex="0" onclick={onClick} onkeydown={(e) => e.key === 'Enter' && onClick()}>
  <!-- Favorite heart -->
  <button
    class="fav-btn"
    class:favorited={isFavorite}
    onclick={handleFavoriteClick}
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
  >
    <svg viewBox="0 0 24 24" width="16" height="16" fill={isFavorite ? "var(--color-accent-red)" : "none"} stroke={isFavorite ? "var(--color-accent-red)" : "currentColor"} stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </button>

  <!-- Emoji thumbnail -->
  <div class="card-emoji">{simulation.thumbnailEmoji}</div>

  <!-- Card content -->
  <div class="card-body">
    <h3 class="card-name">{simulation.name}</h3>
    <p class="card-desc">{simulation.description}</p>
    <div class="card-meta">
      <span class="badge source-badge">{simulation.source}</span>
      <span class="badge grade-badge">{simulation.gradeLevel}</span>
    </div>
  </div>
</div>

<style>
  .sim-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px 14px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    user-select: none;
    width: 100%;
  }

  .sim-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    border-color: var(--color-accent-purple);
  }

  .sim-card:active {
    transform: translateY(-1px);
  }

  /* Favorite button */
  .fav-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--color-text-muted);
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.15s ease;
    opacity: 0;
    z-index: 1;
  }

  .sim-card:hover .fav-btn,
  .fav-btn.favorited {
    opacity: 1;
  }

  .fav-btn:hover {
    background: rgba(226, 75, 74, 0.15);
    color: var(--color-accent-red);
  }

  .fav-btn.favorited {
    color: var(--color-accent-red);
  }

  /* Emoji */
  .card-emoji {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 10px;
  }

  /* Body */
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 0;
    width: 100%;
  }

  .card-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.3;
  }

  .card-desc {
    font-size: 13px;
    color: var(--color-text-dim);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Meta badges */
  .card-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .badge {
    font-size: 12px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 8px;
    white-space: nowrap;
  }

  .source-badge {
    background: rgba(83, 74, 183, 0.2);
    color: var(--color-accent-purple);
  }

  .grade-badge {
    background: rgba(55, 138, 221, 0.15);
    color: var(--color-accent-blue);
  }
</style>
