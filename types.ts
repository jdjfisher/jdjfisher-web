import { z } from 'zod';
import { postValidator, imageFileValidator, projectValidator } from './lib/cms/validators';

export type Post = z.infer<typeof postValidator>;

export type Project = z.infer<typeof projectValidator>;

export type ImageFile = z.infer<typeof imageFileValidator>;
