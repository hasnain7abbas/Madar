<script lang="ts">
  import type { Simulation } from "./simulations";

  let {
    simulation,
    isFavorite,
    index = 0,
    onClick,
    onToggleFavorite,
  } = $props<{
    simulation: Simulation;
    isFavorite: boolean;
    index?: number;
    onClick: () => void;
    onToggleFavorite: () => void;
  }>();

  const catColors: Record<string, string> = {
    physics: "#378add",
    chemistry: "#1d9e75",
    biology: "#534ab7",
    math: "#ef9f27",
    "earth-science": "#2dd681",
    engineering: "#e24b4a",
  };

  let catColor = $derived(catColors[simulation.category] || "#534ab7");
  let shortDesc = $derived(
    simulation.description.length > 60
      ? simulation.description.slice(0, 60) + "…"
      : simulation.description
  );

  const gradeShort: Record<string, string> = {
    "Elementary School": "Elem",
    "Middle School": "MS",
    "High School": "HS",
    "College": "Col",
  };
  let gradeBadge = $derived(gradeShort[simulation.gradeLevel] ?? simulation.gradeLevel);

  function handleFavoriteClick(e: MouseEvent) {
    e.stopPropagation();
    onToggleFavorite();
  }
</script>

<div class="sim-card" role="button" tabindex="0" onclick={onClick} onkeydown={(e) => e.key === 'Enter' && onClick()} style="--cat-color: {catColor}; --i: {Math.min(index, 20)}">
  <div class="card-shine"></div>
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
  <div class="card-meta">
    <span class="card-subcat" title={simulation.subcategory}>{simulation.subcategory}</span>
    <span class="card-grade" title={simulation.gradeLevel}>{gradeBadge}</span>
  </div>
  <span class="card-source">{simulation.source}</span>
  <span class="card-desc">{shortDesc}</span>
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
    border-top: 3px solid var(--cat-color);
    border-radius: 14px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 0.3s ease,
                border-color 0.25s ease,
                background 0.25s ease;
    user-select: none;
    width: 100%;
    gap: 8px;
    overflow: hidden;
    animation: cardIn 0.3s ease both;
    animation-delay: calc(var(--i) * 30ms);
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(12px) scale(0.97); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Subtle shine overlay on hover */
  .card-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 40%, var(--card-glow, rgba(83,74,183,0.08)) 50%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 0;
  }

  .sim-card:hover .card-shine {
    opacity: 1;
  }

  .sim-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 32px rgba(83, 74, 183, 0.18), 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--color-accent-purple);
    background: var(--color-surface-hover);
  }

  .sim-card:active {
    transform: translateY(-2px) scale(1.0);
    transition-duration: 0.1s;
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
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    z-index: 2;
  }

  .sim-card:hover .fav-btn,
  .fav-btn.favorited {
    opacity: 1;
  }

  .fav-btn:hover {
    background: rgba(226, 75, 74, 0.15);
    color: var(--color-accent-red);
    transform: scale(1.2);
  }

  .fav-btn:active {
    transform: scale(0.85);
    transition-duration: 0.08s;
  }

  .fav-btn.favorited {
    color: var(--color-accent-red);
  }

  .card-emoji {
    font-size: 48px;
    line-height: 1;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 1;
  }

  .sim-card:hover .card-emoji {
    transform: scale(1.15) rotate(-3deg);
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
    line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
    z-index: 1;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    line-height: 1;
  }

  .card-subcat {
    font-size: 11px;
    font-weight: 500;
    color: var(--cat-color);
    background: rgba(83, 74, 183, 0.0);
    border: 1px solid color-mix(in srgb, var(--cat-color) 35%, transparent);
    padding: 2px 8px;
    border-radius: 8px;
    text-transform: capitalize;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-grade {
    font-size: 11px;
    font-weight: 600;
    color: var(--color-text-dim);
    background: var(--color-bg);
    padding: 2px 7px;
    border-radius: 8px;
    letter-spacing: 0.3px;
  }

  .card-source {
    font-size: 13px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 10px;
    background: rgba(83, 74, 183, 0.15);
    color: var(--color-accent-purple);
    transition: all 0.25s ease;
    position: relative;
    z-index: 1;
  }

  .sim-card:hover .card-source {
    background: var(--color-accent-purple);
    color: white;
  }

  .card-desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 12px;
    background: linear-gradient(transparent, var(--color-surface) 30%);
    font-size: 12px;
    color: var(--color-text-dim);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.25s ease, transform 0.25s ease;
    pointer-events: none;
    z-index: 3;
  }

  .sim-card:hover .card-desc {
    opacity: 1;
    transform: translateY(0);
  }

  /* ====== MOBILE ====== */
  @media (max-width: 768px) {
    .sim-card {
      padding: 16px 10px 12px;
      gap: 6px;
      border-radius: 12px;
    }

    .sim-card:hover {
      transform: none;
      box-shadow: none;
    }

    .sim-card:active {
      background: var(--color-surface-hover);
      transform: scale(0.96);
      transition-duration: 0.1s;
    }

    .sim-card:hover .card-emoji {
      transform: none;
    }

    .sim-card:hover .card-source {
      background: rgba(83, 74, 183, 0.15);
      color: var(--color-accent-purple);
    }

    .card-desc {
      display: none;
    }

    .fav-btn {
      opacity: 1;
      top: 6px;
      right: 6px;
      width: 28px;
      height: 28px;
    }

    .card-emoji {
      font-size: 36px;
    }

    .card-name {
      font-size: 14px;
    }

    .card-meta {
      gap: 4px;
    }

    .card-subcat {
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 6px;
      max-width: 90%;
    }

    .card-grade {
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 6px;
    }

    .card-source {
      display: none;
    }
  }
</style>
