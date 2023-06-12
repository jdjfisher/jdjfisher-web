import { z } from 'zod';
import { cmsClient } from './client';
import { wordsValidator, postValidator, imageFileValidator, projectValidator } from './validators';
import { Document } from '@contentful/rich-text-types';

export const getPosts = async () => {
  const response = await cmsClient.getEntries({ content_type: 'blogPost' });

  return z.array(postValidator).parse(response.items);
};

export const getPost = async (slug: string) => {
  const response = await cmsClient.getEntries({
    'content_type': 'blogPost',
    'fields.slug': slug,
  });

  return z.array(postValidator).length(1).parse(response.items)[0];
};

export const getProjects = async () => {
  const response = await cmsClient.getEntries({ content_type: 'project' });

  return z.array(projectValidator).parse(response.items);
};

export const getProject = async (title: string) => {
  const response = await cmsClient.getEntries({
    'content_type': 'project',
    'fields.title': title,
  });

  return z.array(projectValidator).length(1).parse(response.items)[0];
};

export const getImageAsset = async (id: string) => {
  const asset = await cmsClient.getAsset(id);

  return imageFileValidator.parse(asset.fields.file);
};

export const getWords = async (slug: string): Promise<Document> => {
  const response = await cmsClient.getEntries({
    'content_type': 'words',
    'fields.slug': slug,
  });

  // @ts-ignore
  return z.array(wordsValidator).length(1).parse(response.items)[0].content;
};
