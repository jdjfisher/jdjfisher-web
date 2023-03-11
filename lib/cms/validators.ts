import { z } from 'zod';

export const blogPostValidator = z.object({
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
});
