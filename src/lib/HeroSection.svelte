<script lang="ts">
  import { CATEGORIES, simulations } from "./simulations";

  let {
    selectedCategory,
    onCategoryChange,
  } = $props<{
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
  }>();

  const categoryColors: Record<string, string> = {
    physics: "#378add",
    chemistry: "#1d9e75",
    biology: "#534ab7",
    math: "#ef9f27",
    "earth-science": "#2dd681",
    engineering: "#e24b4a",
  };

  const counts: Record<string, number> = {};
  for (const sim of simulations) {
    counts[sim.category] = (counts[sim.category] ?? 0) + 1;
  }
</script>

<div class="hero">
  <svg class="hero-logo" viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="h-orb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#534AB7"/><stop offset="100%" stop-color="#1D9E75"/></linearGradient>
      <linearGradient id="h-orb2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1D9E75"/><stop offset="100%" stop-color="#378ADD"/></linearGradient>
      <linearGradient id="h-orb3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#378ADD"/><stop offset="100%" stop-color="#534AB7"/></linearGradient>
      <linearGradient id="h-core" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EF9F27"/><stop offset="100%" stop-color="#E24B4A"/></linearGradient>
      <linearGradient id="h-glow" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EF9F27" stop-opacity="0.3"/><stop offset="100%" stop-color="#E24B4A" stop-opacity="0"/></linearGradient>
    </defs>
    <circle cx="340" cy="180" r="60" fill="url(#h-glow)"/>
    <ellipse cx="340" cy="180" rx="130" ry="55" fill="none" stroke="url(#h-orb1)" stroke-width="1.2" opacity="0.5" transform="rotate(-20 340 180)"/>
    <ellipse cx="340" cy="180" rx="130" ry="55" fill="none" stroke="url(#h-orb2)" stroke-width="1.2" opacity="0.5" transform="rotate(40 340 180)"/>
    <ellipse cx="340" cy="180" rx="130" ry="55" fill="none" stroke="url(#h-orb3)" stroke-width="1.2" opacity="0.5" transform="rotate(100 340 180)"/>
    <circle cx="340" cy="180" r="28" fill="url(#h-core)"/>
    <circle cx="332" cy="172" r="8" fill="white" opacity="0.2"/>
    <circle cx="218" cy="145" r="7" fill="#7F77DD"/><circle cx="216" cy="143" r="2" fill="white" opacity="0.35"/>
    <circle cx="445" cy="130" r="5.5" fill="#1D9E75"/><circle cx="443.5" cy="128.5" r="1.5" fill="white" opacity="0.35"/>
    <circle cx="280" cy="245" r="6" fill="#378ADD"/><circle cx="278.5" cy="243.5" r="1.8" fill="white" opacity="0.35"/>
  </svg>

  <h1 class="hero-tagline">Explore. Play. Learn.</h1>
  <p class="hero-subtitle">{simulations.length}+ interactive simulations — tap a subject to start</p>

  <div class="hero-grid">
    {#each CATEGORIES as cat}
      <button
        class="hero-card"
        class:active={selectedCategory === cat.id}
        style="--card-color: {categoryColors[cat.id]}"
        onclick={() => onCategoryChange(selectedCategory === cat.id ? null : cat.id)}
      >
        <span class="hero-card-emoji">{cat.emoji}</span>
        <span class="hero-card-text">
          <span class="hero-card-name">{cat.name}</span>
          <span class="hero-card-count">{counts[cat.id] ?? 0} sims</span>
        </span>
      </button>
    {/each}
  </div>
</div>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 32px 20px 24px;
    margin-bottom: 8px;
    background: radial-gradient(ellipse at center, rgba(83,74,183,0.06) 0%, transparent 70%);
    animation: heroFadeIn 0.5s ease;
  }

  @keyframes heroFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-logo {
    height: 80px;
    width: auto;
    margin-bottom: 12px;
    filter: drop-shadow(0 2px 10px rgba(239, 159, 39, 0.15));
  }

  .hero-tagline {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--color-text);
    margin-bottom: 6px;
  }

  .hero-subtitle {
    font-size: 15px;
    color: var(--color-text-dim);
    margin-bottom: 22px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    width: 100%;
    max-width: 720px;
  }

  .hero-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-left: 3px solid var(--card-color);
    border-radius: 14px;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    -webkit-tap-highlight-color: transparent;
  }

  .hero-card:hover {
    background: var(--color-surface-hover);
    border-color: var(--card-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  }

  .hero-card:active {
    transform: scale(0.97);
    transition-duration: 0.08s;
  }

  .hero-card.active {
    background: color-mix(in srgb, var(--card-color) 15%, var(--color-surface));
    border-color: var(--card-color);
  }

  .hero-card-emoji {
    font-size: 28px;
    line-height: 1;
    flex-shrink: 0;
  }

  .hero-card-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.2;
  }

  .hero-card-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text);
  }

  .hero-card-count {
    font-size: 12px;
    color: var(--color-text-dim);
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 14px 14px 14px;
    }

    .hero-logo {
      height: 56px;
      margin-bottom: 8px;
    }

    .hero-tagline {
      font-size: 20px;
      margin-bottom: 4px;
    }

    .hero-subtitle {
      font-size: 13px;
      margin-bottom: 14px;
    }

    .hero-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    .hero-card {
      padding: 11px 12px;
      gap: 10px;
      border-radius: 12px;
    }

    .hero-card-emoji {
      font-size: 22px;
    }

    .hero-card-name {
      font-size: 13px;
    }

    .hero-card-count {
      font-size: 11px;
    }
  }

  @media (max-width: 360px) {
    .hero-card {
      padding: 10px;
      gap: 8px;
    }

    .hero-card-emoji {
      font-size: 20px;
    }
  }
</style>
