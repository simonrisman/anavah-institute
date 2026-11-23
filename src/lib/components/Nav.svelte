<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { nav } from '$lib/site';

  let open = $state(false);

  function close() {
    open = false;
  }

  function current(href: string, path: string) {
    return path === href || path.startsWith(`${href}/`);
  }
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && close()} />

<header class="topbar">
  <a class="skip" href="#content">Skip to content</a>
  <div class="nav">
    <a class="brand" href="{base}/" onclick={close}>
      <img src="{base}/logo.png" alt="" width="48" height="48" />
      <span class="brand-text">
        <span class="brand-name">Anavah</span>
        <span class="brand-sub">Institute</span>
      </span>
    </a>
    <button
      class="menu"
      type="button"
      aria-expanded={open}
      aria-controls="site-nav"
      onclick={() => (open = !open)}
    >
      <span aria-hidden="true">{open ? '✕' : '☰'}</span>
      <span class="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
    </button>
    <nav id="site-nav" class="navlinks" class:open aria-label="Main">
      {#each nav as item}
        <a
          href={item.href}
          aria-current={current(item.href, $page.url.pathname) ? 'page' : undefined}
          onclick={close}>{item.label}</a
        >
      {/each}
      <a
        class="cta"
        href="{base}/contact"
        aria-current={current(`${base}/contact`, $page.url.pathname) ? 'page' : undefined}
        onclick={close}>Connect</a
      >
    </nav>
  </div>
</header>
