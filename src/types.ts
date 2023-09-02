import { z } from 'zod';
import {
  postValidator,
  imageFileValidator,
  projectValidator,
  collaboratorValidator,
} from './lib/cms/validators';

export type Post = z.infer<typeof postValidator>;

export type Project = z.infer<typeof projectValidator>;

export type Collaborator = z.infer<typeof collaboratorValidator>;

export type ImageFile = z.infer<typeof imageFileValidator>;
