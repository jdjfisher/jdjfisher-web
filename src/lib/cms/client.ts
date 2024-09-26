import * as contentful from 'contentful';

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw 'Missing CMS environment configuration';
}

export const cmsClient = contentful.createClient({
  space,
  accessToken,
});
