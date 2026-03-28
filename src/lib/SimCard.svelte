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
  <button
    class="fav-btn"
    class:favorited={isFavorite}
    onclick={handleFavoriteClick}
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
  >
    <svg viewBox="0 0 24 24" width="18" height="18" fill={isFavorite ? "var(--color-accent-red)" : "none"} stroke={isFavorite ? "var(--color-accent-red)" : "currentColor"} stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </button>

  <div class="card-emoji">{simulation.thumbnailEmoji}</div>
  <h3 class="card-name">{simulation.name}</h3>
  <span class="card-source">{simulation.source}</span>
</div>

<style>
  .sim-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 22px 14px 16px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    user-select: none;
    width: 100%;
    gap: 8px;
  }

  .sim-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: var(--color-accent-purple);
    background: var(--color-surface-hover);
  }

  .sim-card:active {
    transform: translateY(-1px);
  }

  .fav-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
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

  .card-emoji {
    font-size: 48px;
    line-height: 1;
  }

  .card-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.3;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .card-source {
    font-size: 13px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 10px;
    background: rgba(83, 74, 183, 0.15);
    color: var(--color-accent-purple);
  }
</style>
