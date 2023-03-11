import { z } from 'zod';
import { cmsClient } from './client';
import { blogPostValidator } from './validators';

export const getBlogPosts = async () => {
  const response = await cmsClient.getEntries('blogPost');

  return z.array(blogPostValidator).parse(response.items);
};

export const getBlogPost = async (slug: string) => {
  const response = await cmsClient.getEntries({ content_type: 'blogPost', 'fields.slug': slug });

  return z.array(blogPostValidator).length(1).parse(response.items)[0];
};
