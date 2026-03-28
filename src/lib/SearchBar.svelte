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
    type="text"
    class="search-input"
    placeholder="Search simulations... (e.g. gravity, circuits, DNA)"
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
    border-radius: var(--radius-md);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .search-bar:focus-within {
    border-color: var(--color-accent-purple);
    box-shadow: 0 0 0 3px rgba(83, 74, 183, 0.15);
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
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .clear-btn:hover {
    background: var(--color-surface-hover);
    color: var(--color-text);
  }
</style>
