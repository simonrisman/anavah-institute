import { dimensions, siteOrigin } from '$lib/site';

export const prerender = true;

const paths = [
  '/',
  '/about',
  '/patients',
  '/providers',
  '/services',
  '/wellness',
  '/contact',
  '/accessibility',
  '/privacy',
  '/terms',
  ...dimensions.map((dimension) => `/wellness/${dimension.slug}`)
];

export function GET() {
  const urls = paths
    .map(
      (path) =>
        `  <url><loc>${siteOrigin}${path}</loc></url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
