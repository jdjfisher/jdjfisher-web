import { z } from 'zod';
import { projectValidator, collaboratorValidator } from './lib/validators';

export type Project = z.infer<typeof projectValidator>;

export type Collaborator = z.infer<typeof collaboratorValidator>;
