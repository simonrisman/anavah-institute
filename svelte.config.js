import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    paths: {
      // GitHub Pages project sites live under /<repo>; leave unset for a custom domain.
      base: /** @type {'' | `/${string}`} */ (process.env.BASE_PATH ?? '')
    }
  }
};

export default config;
