<script lang="ts">
  import { base } from '$app/paths';
  import { dimensions, research } from '$lib/site';
</script>

<svelte:head>
  <title>The Eight Dimensions of Wellness · Anavah Institute</title>
  <meta
    name="description"
    content="Emotional, environmental, financial, intellectual, social, physical, spiritual, and occupational wellness — and how Anavah approaches each."
  />
</svelte:head>

<section class="wrap" id="dimensions">
  <p class="eyebrow">Whole-person care</p>
  <h1 class="h2">The eight dimensions of wellness.</h1>
  <p class="lead">
    Symptoms rarely exist in isolation. Real healing has to reach further than a single specialty
    and a prescription.
  </p>
  <p>
    At Anavah, we believe health is about more than the absence of illness. True well-being comes
    from nurturing the different areas of life that influence how we think, feel, function,
    connect, and find meaning.
  </p>
  <p>
    The Eight Dimensions of Wellness, a framework adopted by SAMHSA, provide a foundation for
    understanding and supporting whole-person health. Each dimension is interconnected, and
    strengthening one can positively influence the others.
  </p>

  <ul class="dimension-grid plain">
    {#each dimensions as dimension, index}
      <li>
        <a class="dimension" href="{base}/wellness/{dimension.slug}">
          <span>{String(index + 1).padStart(2, '0')} / Explore</span>
          <b>{dimension.name}</b>
        </a>
      </li>
    {/each}
  </ul>
  <p class="notice">
    Select any dimension to explore what it means and how Anavah approaches it. These pages
    describe a care philosophy and are not a substitute for individualized clinical advice.
  </p>

  <h2 class="h2 spaced" id="research">Research &amp; further reading</h2>
  <p>
    The following peer-reviewed publications provide a scientific foundation for understanding
    multidimensional wellness and whole-person healthcare.
  </p>
  <div class="research">
    <ol>
      {#each research as item}
        <li>
          <a href={item.href} target="_blank" rel="noopener"
            >{item.title}<span class="sr-only"> (opens in a new tab)</span></a
          >
          — {item.note}
        </li>
      {/each}
    </ol>
  </div>
</section>
