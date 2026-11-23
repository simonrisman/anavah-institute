<script lang="ts">
  import { base } from '$app/paths';
  import { footerExplore, footerInfo, practice } from '$lib/site';
</script>

<footer class="footer">
  <div class="footer-inner">
    <div>
      <a class="brand brand-light" href="{base}/">
        <img src="{base}/logo.png" alt="" width="44" height="44" />
        <span class="brand-text">
          <span class="brand-name">Anavah</span>
          <span class="brand-sub">Institute</span>
        </span>
      </a>
      <p class="footer-motto">{practice.motto}</p>
      <p class="footer-contact">
        <a href="mailto:{practice.email}">{practice.email}</a>
        <a href={practice.phoneHref}>Phone {practice.phoneDisplay}</a>
        <span>Fax {practice.faxDisplay}</span>
        <span>Clinical care in {practice.region}</span>
      </p>
    </div>
    <nav aria-label="Explore">
      <h2 class="footer-head">Explore</h2>
      {#each footerExplore as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>
    <nav aria-label="Information">
      <h2 class="footer-head">Information</h2>
      {#each footerInfo as link}
        <a href={link.href}>{link.label}</a>
      {/each}
      <a href="mailto:{practice.email}">Email Anavah</a>
    </nav>
  </div>
  <div class="footer-base">
    <small>© {new Date().getFullYear()} Anavah Institute. All rights reserved.</small>
    <small>Not for emergencies. Call 911, or call or text 988 for crisis support.</small>
  </div>
</footer>
