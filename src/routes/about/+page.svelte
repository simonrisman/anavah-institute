<script lang="ts">
  import { base } from '$app/paths';
  import Cta from '$lib/components/Cta.svelte';
  import { practice } from '$lib/site';
</script>

<svelte:head>
  <title>Phillip Scherbakov · Anavah Institute</title>
  <meta
    name="description"
    content="Phillip Scherbakov is a psychiatric nurse practitioner at Anavah Institute, an integrative psychiatry practice in Ohio and New York."
  />
</svelte:head>

<section class="wrap narrow page-title" id="humility">
  <p class="eyebrow">About Anavah</p>
  <h1 class="h2">Humility is where meaningful change begins.</h1>
  <p class="lead">Anavah is the Hebrew word for humility.</p>
  <p>
    Humility is not about shrinking yourself, it’s about accepting your strengths, your weaknesses,
    and your circumstances. It’s about taking radical responsibility for your life and pursuing
    your highest potential.
  </p>
  <p>
    This is the founding principle of Anavah Institute: that lasting health — for patients and
    providers alike — begins not with a prescription or a protocol, but with radical
    responsibility.
  </p>
  <p>
    Mental health does not exist in isolation. It is one of eight dimensions of wellness, each
    critically important on its own and essential as part of an integrated whole.
  </p>
  <p>
    Anavah Institute bridges the gaps between these disciplines. We equip professionals in every
    domain with the training and resources to understand how these dimensions shape one another
    and to work together in support of their patients’ lives. We also work directly with patients
    to provide truly integrative care.
  </p>
  <a class="btn dark" href="{base}/wellness">Explore the eight dimensions</a>
</section>

<section class="section-gold" id="in-practice" aria-labelledby="in-practice-title">
  <div class="wrap split">
    <h2 class="h2" id="in-practice-title">Humility in practice.<br />Excellence in care.</h2>
    <p class="lead">
      We aren’t trying to create a practice where one person does everything. We’re creating a
      system where everyone does what they do best.
    </p>
  </div>
</section>

<section class="wrap narrow profile" id="phillip" aria-labelledby="phillip-title">
  <!-- Headshot goes here as the first child of .profile, e.g. <img class="profile-photo" ...>. -->
  <div class="profile-body">
    <p class="eyebrow">Meet Phillip</p>
    <h2 class="h2" id="phillip-title">Phillip Scherbakov</h2>
    <p class="role">Psychiatric nurse practitioner</p>
    <p class="lead">
      Anavah is built so patients can get coordinated care, and so clinicians can work from one
      plan instead of separate silos.
    </p>
    <p class="muted">
      Clinical care in {practice.region}. Provider services are available {practice.providerReach}.
    </p>
    <div class="actions">
      <a class="btn outline" href={practice.linkedin} rel="noopener">LinkedIn</a>
      <a class="btn outline" href={practice.headway} rel="noopener">Headway profile</a>
    </div>
  </div>
</section>

<Cta />
