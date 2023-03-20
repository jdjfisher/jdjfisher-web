import { z } from 'zod';

export const blogPostValidator = z.object({
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
});

export const assetValidator = z.object({
  fields: z.object({
    title: z.string(),
    description: z.string(),
    file: z.object({
      fileName: z.string(),
      url: z.string(),
      details: z.object({
        size: z.number().positive(),
      }),
    }),
  }),
});

export const imageFileValidator = z.object({
  fileName: z.string(),
  contentType: z.string(),
  url: z.string(),
  details: z.object({
    size: z.number().positive(),
    image: z.object({
      width: z.number().positive(),
      height: z.number().positive(),
    }),
  }),
});
