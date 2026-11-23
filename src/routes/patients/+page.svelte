<script lang="ts">
  import { base } from '$app/paths';
  import { patientBookingHref } from '$lib/booking';
  import { patientSteps, practice } from '$lib/site';
</script>

<svelte:head>
  <title>For Patients · Anavah Institute</title>
  <meta
    name="description"
    content="Integrative psychiatric services that see the whole person. Clinical care in Ohio and New York. The first consultation is free."
  />
</svelte:head>

<section class="wrap" id="care">
  <p class="eyebrow">For Patients</p>
  <h1 class="h2">Care that sees the whole person.</h1>
  <p class="lead">
    We offer integrative psychiatric services with specialists in a broad array of disorders. We
    strive to see you for who you are — a human being, not just a myriad of symptoms. If we are not
    what you are looking for, we will help find someone who is.
  </p>
  <a class="btn" href={patientBookingHref}
    >Request a free consultation <span aria-hidden="true">↗</span></a
  >

  <h2 class="sr-only" id="steps">How care works</h2>
  <ol class="grid four plain" aria-labelledby="steps">
    {#each patientSteps as step}
      <li class="card">
        <span class="num">{step.tag.toUpperCase()}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </li>
    {/each}
  </ol>
</section>

<section class="section-gold" id="insurance" aria-labelledby="insurance-title">
  <div class="wrap">
    <p class="eyebrow">Insurance &amp; getting started</p>
    <h2 class="h2" id="insurance-title">Clear options for getting started.</h2>
    <p class="lead">
      The first consultation is free. We offer private pay and insurance options. If we are not
      in-network, we can help you send superbills to your insurance provider for potential
      reimbursement. Coverage and reimbursement vary by plan.
    </p>
    <p>
      Insurance visits can also be booked through <a href={practice.headway}>Headway</a>. Clinical
      care is offered in {practice.region}.
    </p>
    <p class="notice">
      Medical and legal documentation services must occur during a scheduled session. Confirm
      availability and insurance details directly before booking. This is not emergency care: in an
      emergency, call 911; for crisis support, call or text 988. Please don’t send health details
      ahead of the visit.
    </p>
    <div class="actions">
      <a class="btn dark" href={patientBookingHref}>Request a free consultation</a>
      <a class="btn outline" href="{base}/services">See all services</a>
    </div>
  </div>
</section>
