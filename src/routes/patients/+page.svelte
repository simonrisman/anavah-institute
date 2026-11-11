<script lang="ts">
  import { patientBookingHref } from '$lib/booking';
  import Cta from '$lib/components/Cta.svelte';
  import { patientServices, practice } from '$lib/site';
</script>

<svelte:head>
  <title>For patients · Anavah Institute</title>
  <meta
    name="description"
    content="Psychiatric care at Anavah includes intake, medication, labs, nutrition, fitness, and care coordination in Ohio and New York."
  />
</svelte:head>

<header class="wrap page-header">
  <p class="eyebrow">For patients</p>
  <h1 class="display wide">Care that connects your mind and your body.</h1>
  <p class="lede">
    Psychiatric care at Anavah goes beyond a medication check. We look at your labs, nutrition, and
    movement too, and bring it together in one plan.
  </p>
  <div>
    <a class="btn" href={patientBookingHref}>Book a free consultation</a>
  </div>
</header>

<section class="band" id="services">
  <div class="wrap section">
    <div class="section-head">
      <h2 class="subhead">What we offer</h2>
    </div>
    <div class="services">
      {#each patientServices as service}
        <article class="service">
          <h3 class="item-title">{service.title}</h3>
          <p class="item-text">{service.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="wrap section" id="practical">
  <div class="section-head">
    <h2 class="subhead">The practical details</h2>
  </div>
  <div class="services">
    <article class="service">
      <h3 class="item-title">Insurance</h3>
      <p class="item-text">
        Some insurance plans are accepted. Contact the practice for the current list. Insurance
        visits can also be booked through
        <a href={practice.headway}>Headway</a>.
      </p>
    </article>
    <article class="service">
      <h3 class="item-title">Fees</h3>
      <p class="item-text">
        The first consultation is free for now. Fees for ongoing care are discussed at that visit.
      </p>
    </article>
    <article class="service">
      <h3 class="item-title">Where we practice</h3>
      <p class="item-text">
        Clinical care in {practice.region}. Provider services are available {practice.providerReach}.
      </p>
    </article>
  </div>
</section>

<Cta />
