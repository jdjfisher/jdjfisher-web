import { defineCollection } from 'astro:content';

import { file } from 'astro/loaders';
import { mediaValidator, projectValidator } from './lib/validators';

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: projectValidator,
});

const media = defineCollection({
  loader: file('src/content/media.json'),
  schema: mediaValidator,
});

export const collections = {
  projects,
  media,
};
