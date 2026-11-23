<script lang="ts">
  import { providerBookingHref, providerBookingUrl } from '$lib/booking';
  import BookingPanel from '$lib/components/BookingPanel.svelte';
  import { audiences, practice, providerBenefits, providerPillars } from '$lib/site';
</script>

<svelte:head>
  <title>For Providers · Anavah Institute</title>
  <meta
    name="description"
    content="Anavah equips professionals across disciplines with the relationships, tools, and shared frameworks to deliver coordinated whole-person care. Provider services are available worldwide."
  />
</svelte:head>

<section class="wrap" id="partner">
  <p class="eyebrow">For Providers</p>
  <h1 class="h2">Better-connected clinicians.<br />Stronger care.</h1>
  <p class="lead">
    Anavah equips professionals across disciplines with the relationships, tools, and shared
    frameworks to deliver coordinated whole-person care.
  </p>
  <a class="btn" href={providerBookingHref}
    >Schedule a provider consultation <span aria-hidden="true">↗</span></a
  >

  <h2 class="h2 spaced" id="why-partner">Why partner</h2>
  <div class="grid">
    {#each providerBenefits as benefit, index}
      <article class="card">
        <span class="num">{String(index + 1).padStart(2, '0')}</span>
        <h3>{benefit.title}</h3>
        <p>{benefit.text}</p>
      </article>
    {/each}
  </div>

  <h2 class="h2 spaced" id="who-joins">Who joins</h2>
  <p class="lead">Built for every discipline in the integrative care ecosystem.</p>
  <p>
    Anavah’s provider network welcomes clinicians across the full spectrum of mental and physical
    health disciplines, including mental health clinicians, physical therapists, occupational
    therapists, and physiatrists.
  </p>
  <p>
    We also work with clinics, attorneys, employers, and organizations. Provider services are
    available {practice.providerReach}.
  </p>
  <ul class="tags" aria-label="Who we work with">
    {#each audiences as name}
      <li class="pill">{name}</li>
    {/each}
  </ul>
  <a class="btn" href={providerBookingHref}>Interested in joining as a provider</a>
</section>

<section class="section-dark" id="the-gap" aria-labelledby="gap-title">
  <div class="wrap">
    <p class="eyebrow">The gap we’re closing</p>
    <h2 class="h2" id="gap-title">
      Mental and physical health are treated as separate worlds. They aren’t.
    </h2>
    <p class="lead">
      Most patients with complex needs move between providers who never speak to each other. Anavah
      exists to close that gap — aligning context, treatment goals, and communication across
      disciplines.
    </p>
    <p class="quote">
      Anavah acts as the connective tissue between your care team — ensuring every clinician has
      the context they need, treatment goals are aligned, and nothing falls through the cracks.
    </p>
    <div class="grid">
      {#each providerPillars as pillar}
        <article class="card">
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="wrap" id="book" aria-labelledby="book-title">
  <p class="eyebrow">Schedule</p>
  <h2 class="h2" id="book-title">Request a provider consultation.</h2>
  <p class="lead">Pick a time to talk about referrals, coordination, education, or consulting.</p>
  <BookingPanel url={providerBookingUrl} />
</section>
