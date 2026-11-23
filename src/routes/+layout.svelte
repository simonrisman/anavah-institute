<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { practice, siteOrigin, structuredData } from '$lib/site';

  let { children } = $props();

  let canonical = $derived.by(() => {
    const path = $page.url.pathname.startsWith(base)
      ? $page.url.pathname.slice(base.length) || '/'
      : $page.url.pathname;
    return siteOrigin + (path.startsWith('/') ? path : `/${path}`);
  });

  const jsonLd = JSON.stringify(structuredData).replaceAll('<', '\\u003c');
</script>

<svelte:head>
  <link rel="canonical" href={canonical} />
  <meta property="og:site_name" content="{practice.name} · {practice.clinician}" />
  <meta property="og:url" content={canonical} />
  <meta property="og:type" content="website" />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<Nav />
<main id="content">
  {@render children()}
</main>
<Footer />
