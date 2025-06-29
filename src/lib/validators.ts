import { z } from 'zod';

export const richTextValidator = z.object({
  nodeType: z.literal('document'),
  content: z.array(z.any()),
  data: z.record(z.string(), z.any()),
});

export const collaboratorValidator = z.object({
  handle: z.string(),
  referenceUrl: z.string().url(),
  imageUrl: z.string().url(),
});

export const projectValidator = z.object({
  title: z.string(),
  slug: z.string(),
  repositoryUrl: z.string().optional(),
  draft: z.boolean().optional().default(false),
  status: z.enum(['closed', 'paused', 'prototyping', 'active']),
  collaborators: z.array(collaboratorValidator).optional(),
  order: z.number().int(),
  description: richTextValidator,
});

export const wordsValidator = z
  .object({
    fields: z.object({
      content: richTextValidator,
    }),
  })
  .transform((o) => o.fields);

export const assetValidator = z
  .object({
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
  })
  .transform((o) => o.fields);
