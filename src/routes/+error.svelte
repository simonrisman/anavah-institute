<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<article class="wrap prose">
  <p class="eyebrow">{$page.status}</p>
  <h1 class="display">That page isn’t here.</h1>
  <p><a href="{base}/">Back to the homepage</a></p>
</article>
