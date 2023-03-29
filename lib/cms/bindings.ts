import { z } from 'zod';
import { cmsClient } from './client';
import { blogPostValidator, imageFileValidator, projectValidator } from './validators';

export const getBlogPosts = async () => {
  const response = await cmsClient.getEntries({ content_type: 'blogPost' });

  return z.array(blogPostValidator).parse(response.items);
};

export const getBlogPost = async (slug: string) => {
  const response = await cmsClient.getEntries({
    'content_type': 'blogPost',
    'fields.slug': slug,
  });

  return z.array(blogPostValidator).length(1).parse(response.items)[0];
};

export const getProjects = async () => {
  const response = await cmsClient.getEntries({ content_type: 'project' });

  return z.array(projectValidator).parse(response.items);
};

export const getImageAsset = async (id: string) => {
  const asset = await cmsClient.getAsset(id);

  return imageFileValidator.parse(asset.fields.file);
};
