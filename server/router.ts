import { Elysia } from 'elysia';

import {
  getDocumentCount,
  getLanguage,
  getLocalePost,
  getPost,
  getPostTranslationMetadata,
  getPosts,
} from './contentQueries';
import { getLocale } from './utils';
import { translate } from './translation';
import {
  createLocalePost,
  createSupportedLanguage,
  updatePostTranslationMetadata,
} from './contentMutations';

const router = new Elysia()
  .get('/', async req => {
    console.info('GET /api');

    const locale = getLocale(req.headers);
    const count = await getDocumentCount();

    return `Locale: ${locale}\nThere are ${count.published} published documents and ${count.drafts} drafts available.`;
  })
  .get('/posts', async () => {
    console.info('GET /api/posts');

    return await getPosts();
  })
  .get(
    '/posts/:slug',
    async req => {
      const { slug } = req.params;
      const locale = getLocale(req.headers);

      console.info(`GET /api/posts/${slug}`);

      const post = await getPost(slug);
      if (locale.startsWith('en')) {
        return post;
      }
      return await translate(post, locale);
    },
    {
      async afterHandle(context) {
        const originalPostId = context.response._id;
        // Get Locale
        const locale = getLocale(context.headers);
        if (locale.startsWith('en')) {
          console.log("Don't translate English");
          return;
        }
        // Check if we support this language in sanity
        const language = await getLanguage(locale);
        // If we don't create it
        if (!language) {
          await createSupportedLanguage({
            _type: 'supportedLanguages',
            title: locale,
            id: locale,
            default: false,
          });
        }

        // The response body should return the translated post
        // So we need to check if sanity has this translation saved
        // if it doesnt we need to save it

        // Check if we have the translation in sanity
        const post = await getLocalePost(context.params.slug, locale);

        if (!post) {
          console.log('No translation found, creating one');
          const response = context.response;
          const localePost = await createLocalePost({
            _type: 'post',
            body: response.body,
            language: response.language,
            slug: {
              current: response.slug.current,
            },
            title: response.title,
          });

          // Now we need to patch the translation.metadata document for the original post
          const translationMetadata = await getPostTranslationMetadata(
            originalPostId
          );
          if (translationMetadata) {
            const translationKeys = translationMetadata.translations.map(
              t => t._key
            );
            if (!translationKeys.includes(locale)) {
              await updatePostTranslationMetadata({
                _id: originalPostId,
                translation: {
                  _type: 'internationalizedArrayReferenceValue',
                  _key: locale,
                  value: {
                    _weak: true,
                    _ref: localePost!._id,
                    _type: 'reference',
                  },
                },
              });
            }
          }
        }
      },
    }
  );

export default router;
