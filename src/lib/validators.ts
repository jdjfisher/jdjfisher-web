import { z } from 'zod';

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
  description: z.string(),
});
