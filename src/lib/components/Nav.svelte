<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { patientBookingHref } from '$lib/booking';
  import { nav } from '$lib/site';

  let open = $state(false);

  function close() {
    open = false;
  }

  function current(href: string, path: string) {
    return path === href || path.startsWith(`${href}/`);
  }
</script>

<header class="site-header">
  <a class="skip" href="#content">Skip to content</a>
  <div class="wrap bar">
    <a class="brand" href="{base}/" onclick={close}>
      <img src="{base}/logo.png" alt="" width="48" height="40" />
      <span>
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
      {open ? 'Close' : 'Menu'}
    </button>
    <nav id="site-nav" class="site-nav" class:open aria-label="Main">
      {#each nav as item}
        <a
          href={item.href}
          class:active={current(item.href, $page.url.pathname)}
          onclick={close}>{item.label}</a
        >
      {/each}
      <a class="btn" href={patientBookingHref} onclick={close}>Book a free consultation</a>
    </nav>
  </div>
</header>
