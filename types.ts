import { z } from 'zod';
import { blogPostValidator, imageFileValidator } from './lib/cms/validators';

export type BlogPost = z.infer<typeof blogPostValidator>;

export type ImageFile = z.infer<typeof imageFileValidator>;
