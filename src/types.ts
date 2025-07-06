import { z } from 'zod';
import { projectValidator, collaboratorValidator, mediaValidator } from './lib/validators';

export type Project = z.infer<typeof projectValidator>;

export type Collaborator = z.infer<typeof collaboratorValidator>;

export type Media = z.infer<typeof mediaValidator>;
