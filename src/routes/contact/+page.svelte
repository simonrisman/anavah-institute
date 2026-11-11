<script lang="ts">
  import { patientBookingUrl } from '$lib/booking';
  import BookingPanel from '$lib/components/BookingPanel.svelte';
</script>

<svelte:head>
  <title>Book a free consultation · Anavah Institute</title>
  <meta
    name="description"
    content="Book a free consultation with Anavah Institute. Clinical care in Ohio and New York."
  />
</svelte:head>

<header class="wrap page-header">
  <p class="eyebrow">Contact</p>
  <h1 class="display">Book a free consultation.</h1>
  <p class="lede">Pick a time that works for you. The first call is free.</p>
</header>

<section class="wrap booking-section" id="book">
  <BookingPanel url={patientBookingUrl} />
</section>
