import { z } from 'zod';

export const richTextValidator = z.object({
  nodeType: z.literal('document'),
  content: z.array(z.any()),
  data: z.record(z.string(), z.any()),
});

export const projectValidator = z.object({
  fields: z.object({
    title: z.string(),
    repositoryUrl: z.string().optional(),
    status: z.enum(['closed', 'paused', 'prototyping', 'active']),
    content: richTextValidator,
  }),
});

export const wordsValidator = z.object({
  fields: z.object({
    content: richTextValidator,
  }),
});

export const blogPostValidator = z.object({
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    content: richTextValidator,
    postedAt: z.coerce.date().transform((d) => d.toISOString()),
    updatedAt: z.coerce.date().transform((d) => d.toISOString()),
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
