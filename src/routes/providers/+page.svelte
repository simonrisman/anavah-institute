<script lang="ts">
  import { providerBookingHref, providerBookingUrl } from '$lib/booking';
  import BookingPanel from '$lib/components/BookingPanel.svelte';
  import Cta from '$lib/components/Cta.svelte';
  import { audiences, providerServices } from '$lib/site';
</script>

<svelte:head>
  <title>For providers · Anavah Institute</title>
  <meta
    name="description"
    content="Consultation, care coordination, reports, and education for clinics, attorneys, employers, and organizations. Provider services are available worldwide."
  />
</svelte:head>

<header class="wrap page-header">
  <p class="eyebrow">For providers and organizations</p>
  <h1 class="display wide">Support for patients whose care crosses mind and body.</h1>
  <p class="lede">
    Anavah works with clinics, attorneys, employers, and organizations. Provider services are
    available worldwide.
  </p>
  <div>
    <a class="btn" href={providerBookingHref}>Request a consultation</a>
  </div>
</header>

<section class="band" id="help">
  <div class="wrap section">
    <div class="section-head">
      <h2 class="subhead">How we can help</h2>
    </div>
    <div class="services">
      {#each providerServices as service}
        <article class="service">
          <h3 class="item-title">{service.title}</h3>
          <p class="item-text">{service.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="wrap section" id="who">
  <div class="section-head">
    <h2 class="subhead">Who we work with</h2>
  </div>
  <div class="who">
    {#each audiences as name}
      <div class="who-item">{name}</div>
    {/each}
  </div>
</section>

<section class="band" id="book">
  <div class="wrap section">
    <div class="section-head">
      <p class="eyebrow">Schedule</p>
      <h2 class="subhead">Request a consultation</h2>
      <p class="lede">Pick a time to talk about working together.</p>
    </div>
    <BookingPanel url={providerBookingUrl} />
  </div>
</section>

<Cta title="Let's talk about working together." label="Request a consultation" href={providerBookingHref} />
