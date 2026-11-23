<script lang="ts">
  import { practice } from '$lib/site';
</script>

<svelte:head>
  <title>Accessibility · Anavah Institute</title>
</svelte:head>

<article class="wrap narrow legal page-title">
  <p class="eyebrow">Website policies</p>
  <h1 class="h2">Accessibility</h1>
  <p class="lead">Using this site.</p>
  <p>
    Pages are built as text, with a skip link and visible keyboard focus. If something gets in the
    way, email <a href="mailto:{practice.email}">{practice.email}</a> or call
    <a href={practice.phoneHref}>{practice.phoneDisplay}</a> and we will help.
  </p>
</article>
