import { defineCollection } from 'astro:content';

import { file } from 'astro/loaders';
import { projectValidator } from './lib/validators';

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: projectValidator,
});

export const collections = {
  projects,
};
