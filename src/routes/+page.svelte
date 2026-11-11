<script lang="ts">
  import { base } from '$app/paths';
  import { patientBookingHref } from '$lib/booking';
  import Cta from '$lib/components/Cta.svelte';
  import { patientSteps } from '$lib/site';
</script>

<svelte:head>
  <title>Anavah Institute | Integrative psychiatry in Ohio and New York</title>
  <meta
    name="description"
    content="Holistic psychiatric care that connects mental health and physical medicine. Clinical care in Ohio and New York. The first consultation is free."
  />
</svelte:head>

<section class="wrap hero" id="top">
  <div class="hero-copy">
    <p class="eyebrow">Integrative psychiatry · Ohio & New York</p>
    <h1 class="display">Holistic psychiatric care for your mind and body.</h1>
    <p class="motto">Empowering radical responsibility.</p>
    <p class="lede">
      Anavah connects mental health and physical medicine: psychiatry, lab work, nutrition, and
      fitness, coordinated in one plan.
    </p>
    <div class="actions">
      <a class="btn" href={patientBookingHref}>Book a free consultation</a>
      <a class="link-quiet" href="{base}/patients#practical">Insurance and fees</a>
    </div>
    <p class="fine">Seeing patients in Ohio and New York. Provider services worldwide.</p>
  </div>
  <div class="hero-photo">
    <img
      src="{base}/hero-clouds.jpg"
      alt="Sunrise over a wide bank of clouds, the photograph used on the Anavah Institute site."
    />
  </div>
</section>

<section class="band" id="expect">
  <div class="wrap section">
    <div class="section-head">
      <h2 class="subhead">What to expect as a patient</h2>
      <p class="lede">Four steps, from first conversation to ongoing care.</p>
    </div>
    <div class="steps">
      {#each patientSteps as step, index}
        <article class="step">
          <div class="step-num">{String(index + 1).padStart(2, '0')}</div>
          <h3 class="item-title">{step.title}</h3>
          <p class="item-text">{step.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="wrap doors" id="paths">
  <article class="door door-navy">
    <h3>For patients</h3>
    <p>
      Psychiatric intake and follow-up, medication management, blood work analysis, nutrition, and
      fitness guidance.
    </p>
    <a class="btn btn-light" href="{base}/patients">See patient care</a>
  </article>
  <article class="door door-paper" id="providers">
    <h3>For providers and organizations</h3>
    <p class="item-text">
      Consultation calls, referrals, care coordination, and lunch-and-learns for clinics, attorneys,
      and employers. Available worldwide.
    </p>
    <a class="btn" href="{base}/providers">See provider services</a>
  </article>
</section>

<section class="band" id="about">
  <div class="wrap section split">
    <div class="portrait">
      <strong>Phillip Scherbakov</strong>
      <span>Portrait to be added</span>
    </div>
    <div class="stack">
      <h2 class="subhead">Meet Phillip Scherbakov</h2>
      <p class="role">Psychiatric nurse practitioner</p>
      <p class="lede">
        Anavah is more than a private practice. It is a way for patients to get the care they need,
        and for wellness providers to work together toward better outcomes.
      </p>
      <p class="item-text">
        Care looks across eight areas of wellness: emotional, environmental, financial,
        intellectual, social, physical, spiritual, and occupational.
      </p>
      <a class="link-quiet" href="{base}/about">More about the institute</a>
    </div>
  </div>
</section>

<Cta />
