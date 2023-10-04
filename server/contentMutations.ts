import { client } from './sanityConfig';

export const createSupportedLanguage = async (data: {
  _type: string;
  id: string;
  title: string;
  default: boolean;
}) => {
  return client
    .create(data)
    .then(res => {
      console.log(`Language ${data.id} created`);
      return res;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

export const createLocalePost = async (
  data: {
    _type: string;
  } & Record<string, unknown>
) => {
  return client
    .create(data)
    .then(res => {
      console.log(`Locale post ${data.title} created`);
      return res;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};
