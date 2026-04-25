<script lang="ts">
  let {
    value = "",
    onInput,
  } = $props<{
    value?: string;
    onInput: (query: string) => void;
  }>();

  let inputEl: HTMLInputElement | undefined = $state(undefined);
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  function handleInput(e: Event) {
    const newValue = (e.target as HTMLInputElement).value;
    value = newValue;

    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onInput(newValue);
    }, 300);
  }

  function clearSearch() {
    value = "";
    if (debounceTimer) clearTimeout(debounceTimer);
    onInput("");
    inputEl?.focus();
  }

  export function focus() {
    inputEl?.focus();
  }
</script>

<div class="search-bar">
  <!-- Search icon -->
  <svg class="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>

  <input
    bind:this={inputEl}
    type="search"
    inputmode="search"
    enterkeyhint="search"
    autocomplete="off"
    autocapitalize="off"
    autocorrect="off"
    spellcheck="false"
    class="search-input"
    placeholder="Search simulations…"
    {value}
    oninput={handleInput}
  />

  <!-- Clear button -->
  {#if value.length > 0}
    <button class="clear-btn" onclick={clearSearch} aria-label="Clear search">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  {/if}
</div>

<style>
  .search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
  }

  .search-bar:focus-within {
    border-color: transparent;
    background-image: linear-gradient(var(--color-surface), var(--color-surface)),
                      linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-teal), var(--color-accent-orange));
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-shadow: 0 0 0 3px rgba(83, 74, 183, 0.1);
    transform: translateY(-1px);
  }

  .search-icon {
    color: var(--color-text-muted);
    flex-shrink: 0;
  }

  .search-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: var(--color-text);
    font-size: 16px;
    font-family: var(--font-sans);
    min-width: 0;
  }

  .search-input::placeholder {
    color: var(--color-text-muted);
  }

  .clear-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: var(--color-text-muted);
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
  }

  .clear-btn:hover {
    background: var(--color-surface-hover);
    color: var(--color-text);
    transform: rotate(90deg) scale(1.1);
  }

  .clear-btn:active {
    transform: scale(0.85);
  }

  /* iOS Safari adds a ✕ button to type="search". Hide it — we have our own. */
  .search-input::-webkit-search-cancel-button,
  .search-input::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  @media (max-width: 768px) {
    .search-bar {
      padding: 10px 14px;
      gap: 8px;
    }

    .search-input {
      /* keep 16px to prevent iOS auto-zoom */
      font-size: 16px;
    }
  }

  @media (max-width: 380px) {
    .search-bar {
      padding: 9px 12px;
    }
  }
</style>
