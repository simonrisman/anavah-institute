<script lang="ts">
  import { base } from '$app/paths';
  import { patientBookingHref, providerBookingHref } from '$lib/booking';
  import { serviceGroups } from '$lib/site';
</script>

<svelte:head>
  <title>Services · Anavah Institute</title>
  <meta
    name="description"
    content="Integrative psychiatric care, care navigation, and professional education in one coordinated ecosystem."
  />
</svelte:head>

<section class="wrap" id="offerings">
  <p class="eyebrow">Services &amp; offerings</p>
  <h1 class="h2">Expertise, connected.</h1>
  <p class="lead">
    Anavah Institute brings integrative psychiatric care, care navigation, and professional
    education into one coordinated ecosystem.
  </p>
  <div class="grid">
    {#each serviceGroups as group}
      <article class="card" id={group.id}>
        <span class="pill">{group.pill}</span>
        <h2 class="card-title">{group.title}</h2>
        {#if group.intro}
          <p>{group.intro}</p>
        {/if}
        <ul class="list">
          {#each group.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
  <div class="actions">
    <a class="btn dark" href="{base}/contact">Discuss services</a>
    <a class="btn" href={patientBookingHref}>Request a free consultation</a>
    <a class="btn outline" href={providerBookingHref}>Provider consultation</a>
  </div>
</section>
