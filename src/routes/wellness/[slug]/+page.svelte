<script lang="ts">
  import { base } from '$app/paths';
  import { patientBookingHref, providerBookingHref } from '$lib/booking';
  import type { CtaKind } from '$lib/site';

  let { data } = $props();

  const d = $derived(data.dimension);
  const number = $derived(String(data.index + 1).padStart(2, '0'));

  const ctaHref: Record<CtaKind, string> = {
    patients: `${base}/patients`,
    'patient-booking': patientBookingHref,
    'provider-booking': providerBookingHref,
    collective: `${base}/collective`,
    insurance: `${base}/patients#insurance`
  };
</script>

<svelte:head>
  <title>{d.name} Wellness · Anavah Institute</title>
  <meta name="description" content={d.lead} />
</svelte:head>

<section class="detail-head" id="overview">
  <div class="wrap">
    <a class="crumb" href="{base}/wellness">← All dimensions</a>
    <p class="eyebrow">{number} / {d.name} wellness</p>
    <h1 class="display">{d.headline}</h1>
    <p class="lead">{d.lead}</p>
  </div>
</section>

<section class="wrap detail-body" id="approach">
  <h2>What is {d.name.toLowerCase()} wellness?</h2>
  {#each d.what as paragraph}
    <p>{paragraph}</p>
  {/each}

  <h2>How Anavah supports {d.name.toLowerCase()} wellness</h2>
  {#if d.supportIntro}
    <p>{d.supportIntro}</p>
  {/if}
  {#if d.support.length}
    <ul>
      {#each d.support as item}
        <li>{item}</li>
      {/each}
    </ul>
  {/if}

  <div class="actions">
    {#each d.ctas as cta, i}
      <a class="btn" class:outline={i > 0} href={ctaHref[cta.kind]}>{cta.label}</a>
    {/each}
  </div>

  <nav class="dimension-pager" aria-label="Other dimensions">
    {#if data.previous}
      <a href="{base}/wellness/{data.previous.slug}">← {data.previous.name}</a>
    {:else}
      <span></span>
    {/if}
    {#if data.next}
      <a href="{base}/wellness/{data.next.slug}">{data.next.name} →</a>
    {/if}
  </nav>
</section>
