<script lang="ts">
  import { base } from '$app/paths';
  import BookingEmbed from '$lib/components/BookingEmbed.svelte';
  import { practice } from '$lib/site';

  let { url }: { url: string } = $props();
</script>

<div class="booking">
  <div class="booking-embed">
    <BookingEmbed {url} />
  </div>

  <aside class="booking-details" aria-label="Contact details">
    <div class="detail">
      <h2 class="detail-label">Phone</h2>
      <p><a href={practice.phoneHref}>{practice.phoneDisplay}</a></p>
      <p class="fine">Fax {practice.faxDisplay}</p>
    </div>
    <div class="detail">
      <h2 class="detail-label">Email</h2>
      <p><a href="mailto:{practice.email}">{practice.email}</a></p>
    </div>
    <div class="detail">
      <h2 class="detail-label">Insurance visits</h2>
      <p>Booked through <a href={practice.headway}>Headway</a>.</p>
      <p class="fine"><a href="{base}/patients#practical">See insurance and fees</a></p>
    </div>
    <div class="detail">
      <h2 class="detail-label">Where we practice</h2>
      <p>Clinical care in {practice.region}.</p>
      <p class="fine">Provider services are available {practice.providerReach}.</p>
    </div>
    <p class="booking-note">
      This is not emergency care. In an emergency, call 911. For crisis support, call or text 988.
      Please don’t send health details ahead of the visit.
    </p>
  </aside>
</div>
