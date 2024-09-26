import { z } from 'zod';

export const richTextValidator = z.object({
  nodeType: z.literal('document'),
  content: z.array(z.any()),
  data: z.record(z.string(), z.any()),
});

export const collaboratorValidator = z
  .object({
    fields: z.object({
      handle: z.string(),
      referenceUrl: z.string().url(),
      imageUrl: z.string().url(),
    }),
  })
  .transform((f) => f.fields);

export const projectValidator = z
  .object({
    fields: z.object({
      title: z.string(),
      repositoryUrl: z.string().optional(),
      status: z.enum(['closed', 'paused', 'prototyping', 'active']),
      collaborators: z.array(collaboratorValidator).optional(),
      order: z.number().int(),
      description: richTextValidator,
      content: richTextValidator.optional(),
    }),
  })
  .transform((o) => o.fields);

export const wordsValidator = z
  .object({
    fields: z.object({
      content: richTextValidator,
    }),
  })
  .transform((o) => o.fields);

export const postValidator = z
  .object({
    fields: z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      content: richTextValidator,
      postedAt: z.coerce.date().transform((d) => d.toISOString()),
      updatedAt: z.coerce.date().transform((d) => d.toISOString()),
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
