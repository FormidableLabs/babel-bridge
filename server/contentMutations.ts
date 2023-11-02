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

export const updatePostTranslationProcessing = async (data: {
  _id: string;
  translationProcessing: boolean;
}) => {
  return client
    .patch(data._id)
    .set({ translationProcessing: data.translationProcessing })
    .commit();
};
