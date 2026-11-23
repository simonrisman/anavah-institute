<script lang="ts">
  import { base } from '$app/paths';
  import { patientBookingHref } from '$lib/booking';
  import Cta from '$lib/components/Cta.svelte';
</script>

<svelte:head>
  <title>Anavah Institute | Phillip Scherbakov</title>
  <meta
    name="description"
    content="Anavah Institute is Phillip Scherbakov’s integrative psychiatry practice. Clinical care in Ohio and New York, with provider services worldwide."
  />
</svelte:head>

<section
  class="hero"
  id="top"
  style="background-image: linear-gradient(90deg, rgba(10, 12, 14, 0.82), rgba(10, 12, 14, 0.24)), url('{base}/hero-clouds.jpg')"
>
  <div class="wrap">
    <p class="eyebrow">Anavah Institute</p>
    <h1 class="display">Empowering<br /><i>Radical Responsibility</i></h1>
    <p class="lead">
      A more connected approach to health — where humility, collaboration, and whole-person care
      move us forward.
    </p>
    <div class="actions">
      <a class="btn" href="{base}/about">Discover Anavah <span aria-hidden="true">↗</span></a>
      <a class="btn outline hero-outline" href={patientBookingHref}>Request a free consultation</a>
    </div>
    <p class="fine">Clinical care in Ohio and New York. Provider services worldwide.</p>
  </div>
</section>

<section class="wrap split" id="care-system" aria-labelledby="care-system-title">
  <div>
    <p class="eyebrow">A different kind of care system</p>
    <h2 class="h2" id="care-system-title">Health is never just one thing.</h2>
  </div>
  <div>
    <p class="lead">
      Anavah is more than a private psychiatric practice. It is an interconnected care system built
      around one fundamental belief: patients deserve access to the best possible care in every
      dimension of their well-being.
    </p>
    <a class="btn dark" href="{base}/patients">Explore patient care</a>
  </div>
</section>

<section class="section-dark" id="vision" aria-labelledby="vision-title">
  <div class="wrap">
    <h2 class="eyebrow" id="vision-title">Our vision</h2>
    <p class="quote">
      Move beyond fragmented, one-dimensional healthcare — and make collaboration, humility, and
      whole-person care the norm.
    </p>
    <a class="btn" href="{base}/providers">Partner with Anavah</a>
  </div>
</section>

<Cta />
