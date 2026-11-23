<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<article class="wrap narrow page-title">
  <p class="eyebrow">{$page.status}</p>
  <h1 class="h2">That page isn’t here.</h1>
  <a class="btn dark" href="{base}/">Back to the homepage</a>
</article>
