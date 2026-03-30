<script lang="ts">
  let visible = $state(false);
  let activeVideo: "howto" | "install" | null = $state(null);

  $effect(() => {
    visible = true;
  });

  function dismiss() {
    visible = false;
    activeVideo = null;
  }

  function playVideo(type: "howto" | "install") {
    activeVideo = type;
  }

  function backToMenu() {
    activeVideo = null;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
</script>

{#if visible}
  <div class="modal-backdrop" onclick={dismiss} role="presentation">
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      {#if activeVideo}
        <!-- Video player -->
        <div class="video-view">
          <div class="video-header">
            <button class="back-btn" onclick={backToMenu}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              Back
            </button>
            <span class="video-title">
              {activeVideo === "howto" ? "How Madar Works" : "How to Install on PC"}
            </span>
            <button class="close-btn" onclick={dismiss} aria-label="Close">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="video-container">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video
              controls
              autoplay
              playsinline
              src={activeVideo === "howto"
                ? `${baseUrl}tutorial-how-it-works.mp4`
                : `${baseUrl}tutorial-install-pc.mp4`}
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      {:else}
        <!-- Welcome menu -->
        <button class="close-corner" onclick={dismiss} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div class="welcome-icon">🔬</div>
        <h2 class="welcome-title">Welcome to Madar!</h2>
        <p class="welcome-desc">360+ interactive STEM simulations in one place. Want a quick tour?</p>

        <div class="btn-group">
          <button class="tutorial-btn primary" onclick={() => playVideo("howto")}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            How It Works
          </button>
          <button class="tutorial-btn secondary" onclick={() => playVideo("install")}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            Install on PC
          </button>
        </div>

        <button class="skip-btn" onclick={dismiss}>Skip, I'll explore on my own</button>
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.2s ease;
  }

  .modal {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    max-width: 520px;
    width: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  /* Welcome menu */
  .close-corner {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: var(--color-text-muted);
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.15s;
  }

  .close-corner:hover {
    background: var(--color-surface-hover);
    color: var(--color-text);
  }

  .welcome-icon {
    text-align: center;
    font-size: 48px;
    margin: 32px 0 12px;
  }

  .welcome-title {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 6px;
  }

  .welcome-desc {
    text-align: center;
    font-size: 15px;
    color: var(--color-text-dim);
    padding: 0 24px;
    margin-bottom: 24px;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 24px;
  }

  .tutorial-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 20px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
  }

  .tutorial-btn.primary {
    background: linear-gradient(135deg, var(--color-accent-orange), var(--color-accent-red));
    color: white;
  }

  .tutorial-btn.primary:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  .tutorial-btn.secondary {
    background: var(--color-surface-hover);
    color: var(--color-text);
    border: 1px solid var(--color-border);
  }

  .tutorial-btn.secondary:hover {
    background: var(--color-surface-active);
    border-color: var(--color-accent-purple);
  }

  .skip-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 16px;
    font-size: 14px;
    color: var(--color-text-muted);
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.15s;
  }

  .skip-btn:hover {
    color: var(--color-text);
  }

  /* Video view */
  .video-view {
    display: flex;
    flex-direction: column;
  }

  .video-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--color-border);
  }

  .back-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 10px;
    border-radius: 6px;
    color: var(--color-text);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    transition: background 0.15s;
  }

  .back-btn:hover { background: var(--color-surface-hover); }

  .video-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text);
    text-align: center;
  }

  .close-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: var(--color-text-muted);
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.15s;
  }

  .close-btn:hover { background: var(--color-surface-hover); color: var(--color-text); }

  .video-container {
    padding: 0;
  }

  .video-container video {
    width: 100%;
    display: block;
    border-radius: 0 0 16px 16px;
    max-height: 70vh;
    background: black;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 768px) {
    .modal {
      max-width: 100%;
      border-radius: 12px;
    }

    .tutorial-btn {
      padding: 12px 16px;
      font-size: 15px;
    }

    .welcome-title {
      font-size: 20px;
    }
  }
</style>
