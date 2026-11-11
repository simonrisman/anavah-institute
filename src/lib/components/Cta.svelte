<script lang="ts">
  import { patientBookingHref } from '$lib/booking';
  import { practice } from '$lib/site';

  let {
    title = 'Ready to talk? Your first consultation is free.',
    label = 'Book a free consultation',
    href = patientBookingHref
  }: {
    title?: string;
    label?: string;
    href?: string;
  } = $props();
</script>

<section class="cta">
  <div class="wrap">
    <h2>{title}</h2>
    <a class="btn btn-light" {href}>{label}</a>
    <p>
      <a href={practice.phoneHref}>{practice.phoneDisplay}</a>
      ·
      <a href="mailto:{practice.email}">{practice.email}</a>
      · Clinical care in {practice.region}
    </p>
  </div>
</section>
