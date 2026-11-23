<script lang="ts">
  import { practice } from '$lib/site';
</script>

<svelte:head>
  <title>Privacy · Anavah Institute</title>
</svelte:head>

<article class="wrap narrow legal page-title">
  <p class="eyebrow">Website policies</p>
  <h1 class="h2">Privacy</h1>
  <p class="lead">What this site collects.</p>
  <p>
    This site does not collect messages through a form. Scheduling opens on Calendly. Email links
    open your mail app. Please don’t include health details in email.
  </p>
  <p class="notice">
    If this is an emergency, call 911. For crisis support, call or text 988.
  </p>
  <p>
    Questions about how the practice handles information can go to
    <a href="mailto:{practice.email}">{practice.email}</a>.
  </p>
</article>
