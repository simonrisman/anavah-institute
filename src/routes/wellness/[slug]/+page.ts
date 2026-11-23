import { error } from '@sveltejs/kit';
import { dimensions } from '$lib/site';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => dimensions.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
  const index = dimensions.findIndex((d) => d.slug === params.slug);
  if (index === -1) error(404, 'Not found');
  return {
    index,
    dimension: dimensions[index],
    previous: dimensions[index - 1] ?? null,
    next: dimensions[index + 1] ?? null
  };
};
