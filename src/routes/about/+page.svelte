<script lang="ts">
  import Cta from '$lib/components/Cta.svelte';
  import { wellness } from '$lib/site';
</script>

<svelte:head>
  <title>About · Anavah Institute</title>
  <meta
    name="description"
    content="Anavah Institute connects mental health and physical medicine through whole-person psychiatric care."
  />
</svelte:head>

<header class="wrap page-header">
  <p class="eyebrow">About Anavah</p>
  <h1 class="display wide">The connective tissue between mental health and physical medicine.</h1>
  <p class="lede">
    The aim is to move past fragmented, one-specialty care toward collaboration, humility, and
    whole-person treatment.
  </p>
</header>

<section class="band" id="phillip">
  <div class="wrap section split">
    <div class="portrait">
      <strong>Phillip Scherbakov</strong>
      <span>Portrait to be added</span>
    </div>
    <div class="stack">
      <h2 class="subhead">Meet Phillip Scherbakov</h2>
      <p class="role">Psychiatric nurse practitioner</p>
      <p class="lede">
        Anavah is built so patients can get coordinated care, and so clinicians can work from one
        plan instead of separate silos.
      </p>
      <p class="item-text">
        Symptoms rarely sit in one specialty. Care here is meant to reach further than a
        prescription alone: psychiatry alongside labs, nutrition, movement, and the other parts of
        a life that shape health.
      </p>
    </div>
  </div>
</section>

<section class="wrap section" id="wellness">
  <div class="section-head">
    <h2 class="subhead">Eight areas of wellness</h2>
    <p class="lede">
      Care at Anavah looks at these together. The framework is the one used by SAMHSA, adapted from
      Swarbrick’s wellness approach.
    </p>
  </div>
  <div class="wellness">
    {#each wellness as area}
      <article class="well">
        <strong>{area.name}</strong>
        <span>{area.text}</span>
      </article>
    {/each}
  </div>
</section>

<Cta />
