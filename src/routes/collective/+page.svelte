<script lang="ts">
  import { collectiveFeatures, practice } from '$lib/site';

  const askHref = `mailto:${practice.email}?subject=${encodeURIComponent('Anavah Collective')}`;
</script>

<svelte:head>
  <title>Anavah Collective · Anavah Institute</title>
  <meta
    name="description"
    content="The Anavah Collective: a place for patients, providers, and interested minds to find community and learn from one another."
  />
</svelte:head>

<section class="wrap" id="community">
  <p class="eyebrow">Anavah Collective</p>
  <h1 class="h2">A place for patients, providers, and interested minds.</h1>
  <p class="lead">
    Healing happens not only through professional care, but also through connection,
    understanding, and belonging.
  </p>
  <p>
    The Anavah Collective creates space for people to find community, share experiences, learn from
    one another, and recognize that they are not alone.
  </p>
  <div class="grid">
    {#each collectiveFeatures as feature}
      <article class="card">
        <h2 class="card-title">{feature.title}</h2>
        <p>{feature.text}</p>
      </article>
    {/each}
  </div>
</section>

<section class="section-gold" id="join" aria-labelledby="join-title">
  <div class="wrap split">
    <div>
      <p class="eyebrow">Join the Collective</p>
      <h2 class="h2" id="join-title">Connection, at your own pace.</h2>
      <p>
        Participation is voluntary, and choosing not to participate never affects your care. The
        Collective is a supplemental resource, not a substitute for treatment, and it does not
        create a provider-patient relationship.
      </p>
    </div>
    <div>
      <p class="muted">
        Email us to ask about the Collective and to review the community participation agreement
        before joining. Please don’t include health details.
      </p>
      <a class="btn dark" href={askHref}>Ask about the Collective <span aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>
