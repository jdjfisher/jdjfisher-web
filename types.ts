import { z } from 'zod';
import { blogPostValidator } from './lib/cms/validators';

export type BlogPost = z.infer<typeof blogPostValidator>;
