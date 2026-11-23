<script lang="ts">
  import { patientBookingHref } from '$lib/booking';
  import { practice } from '$lib/site';

  let {
    eyebrow = 'Start a conversation',
    title = 'Your first consultation is free.',
    label = 'Request a free consultation',
    href = patientBookingHref
  }: {
    eyebrow?: string;
    title?: string;
    label?: string;
    href?: string;
  } = $props();
</script>

<section class="section-gold" aria-labelledby="cta-title">
  <div class="wrap split">
    <div>
      <p class="eyebrow">{eyebrow}</p>
      <h2 class="h2" id="cta-title">{title}</h2>
    </div>
    <div>
      <p class="muted">
        <a href={practice.phoneHref}>{practice.phoneDisplay}</a> ·
        <a href="mailto:{practice.email}">{practice.email}</a> · Clinical care in {practice.region}
      </p>
      <a class="btn dark" {href}>{label} <span aria-hidden="true">↗</span></a>
      <p class="fine">Not for emergencies: call 911, or call or text 988 for crisis support.</p>
    </div>
  </div>
</section>
