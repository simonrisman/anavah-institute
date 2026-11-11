<script lang="ts">
  import { onMount } from 'svelte';
  import { isCalendlyEventUrl } from '$lib/booking';
  import { practice } from '$lib/site';

  let { url }: { url: string } = $props();

  const widgetSrc = 'https://assets.calendly.com/assets/external/widget.js';
  const eventUrl = $derived(
    url.trim() ? `${url.trim()}${url.includes('?') ? '&' : '?'}hide_gdpr_banner=1` : ''
  );
  const ready = $derived(isCalendlyEventUrl(eventUrl));

  let widget = $state<HTMLDivElement | undefined>(undefined);

  type CalendlyApi = {
    initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
  };

  onMount(() => {
    if (!ready) return;
    const parent = widget;
    if (!parent) return;

    const calendlyWindow = window as Window & { Calendly?: CalendlyApi };

    const initIfNeeded = () => {
      const calendly = calendlyWindow.Calendly;
      if (!calendly || parent.querySelector('iframe')) return;
      calendly.initInlineWidget({ url: eventUrl, parentElement: parent });
    };

    if (calendlyWindow.Calendly) {
      initIfNeeded();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${widgetSrc}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = widgetSrc;
      script.async = true;
      document.head.appendChild(script);
    }

    script.addEventListener('load', initIfNeeded, { once: true });
  });
</script>

<svelte:head>
  {#if ready}
    <script src={widgetSrc} async></script>
  {/if}
</svelte:head>

{#if ready}
  <div
    class="calendly-inline-widget"
    bind:this={widget}
    data-url={eventUrl}
  ></div>
{:else}
  <div class="schedule-pending">
    <p class="eyebrow">Scheduling</p>
    <p>Scheduling will appear here once the link is added.</p>
    <p>
      <a href={practice.phoneHref}>{practice.phoneDisplay}</a>
      ·
      <a href="mailto:{practice.email}">{practice.email}</a>
    </p>
  </div>
{/if}
