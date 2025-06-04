import { z } from 'zod';
import { cmsClient } from './client';
import { projectValidator } from './validators';

export const getProjects = async () => {
  const params = {
    content_type: 'project',
    order: 'fields.order',
  } as const;

  const response = await cmsClient.getEntries(params);

  return z.array(projectValidator).parse(response.items);
};

export const getProject = async (title: string) => {
  const response = await cmsClient.getEntries({
    'content_type': 'project',
    'fields.title': title,
  });

  return z.array(projectValidator).length(1).parse(response.items)[0]!;
};
