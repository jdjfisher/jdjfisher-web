import { z } from 'zod';
import { blogPostValidator, imageFileValidator, projectValidator } from './lib/cms/validators';

export type BlogPost = z.infer<typeof blogPostValidator>;

export type Project = z.infer<typeof projectValidator>;

export type ImageFile = z.infer<typeof imageFileValidator>;
