<script lang="ts">
  import { base } from '$app/paths';
  import { patientBookingUrl } from '$lib/booking';
  import BookingPanel from '$lib/components/BookingPanel.svelte';
  import { practice } from '$lib/site';
</script>

<svelte:head>
  <title>Connect · Anavah Institute</title>
  <meta
    name="description"
    content="Book a free consultation with Anavah Institute, or get in touch by phone or email. Clinical care in Ohio and New York."
  />
</svelte:head>

<section class="wrap split page-title" id="connect">
  <div>
    <p class="eyebrow">Start a conversation</p>
    <h1 class="h2">Let’s find the right next step.</h1>
    <p class="lead">
      Tell us whether you’re seeking care, interested in joining the provider network, or would
      like to learn more about Anavah.
    </p>
  </div>
  <div class="contact-lines">
    <p><b>Email</b><br /><a href="mailto:{practice.email}">{practice.email}</a></p>
    <p><b>Phone</b><br /><a href={practice.phoneHref}>{practice.phoneDisplay}</a></p>
    <p><b>Fax</b><br />{practice.faxDisplay}</p>
    <p class="muted">
      Clinicians and organizations: <a href="{base}/providers#book">schedule a provider consultation</a>.
    </p>
  </div>
</section>

<section class="section-gold" id="book" aria-labelledby="book-title">
  <div class="wrap">
    <p class="eyebrow">For patients</p>
    <h2 class="h2" id="book-title">Book a free consultation.</h2>
    <p class="lead">Pick a time that works for you. The first call is free.</p>
    <BookingPanel url={patientBookingUrl} />
  </div>
</section>
