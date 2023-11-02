import { Elysia } from 'elysia';

import { getDocumentCount, getPost, getPosts } from './contentQueries';
import {
  createSupportedLanguageIfNeeded,
  formatLocale,
  getLocale,
} from './utils';
import { translate } from './translation';
import { updatePostTranslationProcessing } from './contentMutations';
import { client } from './sanityConfig';

const router = new Elysia()
  .get('/', async req => {
    console.info('GET /api');
    const locale = getLocale(req.headers);
    const count = await getDocumentCount();

    return `Locale: ${locale}\nThere are ${count.published} published documents and ${count.drafts} drafts available.`;
  })
  .get('/posts', async req => {
    const locale = getLocale(req.headers);
    const formattedLocale = formatLocale(locale);
    console.info('GET /api/posts');

    return await getPosts({
      locale: formattedLocale,
    });
  })
  .get(
    '/posts/:slug',
    async req => {
      const { slug } = req.params;
      console.info(`GET /api/posts/${slug}`);
      const locale = getLocale(req.headers);
      const formattedLocale = formatLocale(locale);
      const post = await getPost({
        slug,
        locale: formattedLocale,
      });
      if (formattedLocale.startsWith('en')) {
        return post;
      }
      const contentToTranslate = {
        localeTitle: {
          [formattedLocale]: post.localeTitle['en_US'],
        },
        localeBody: {
          [formattedLocale]: post.localeBody['en_US'],
        },
      };
      const translatedData = await translate(
        contentToTranslate,
        formattedLocale
      );
      const translatedPost = {
        ...post,
        title: translatedData.localeTitle[formattedLocale],
        body: translatedData.localeBody[formattedLocale],
      };
      return translatedPost;
    },
    {
      async afterHandle(context) {
        console.log('Do Something ');
        const originalPostId = context.response._id;
        const locale = getLocale(context.headers);
        const formattedLocale = formatLocale(locale);
        if (formattedLocale.startsWith('en')) {
          console.log("Don't translate English");
          return;
        }
        // Set the translationProcessing flag to true
        await updatePostTranslationProcessing({
          _id: originalPostId,
          translationProcessing: true,
        });

        await createSupportedLanguageIfNeeded(formattedLocale);

        // Patch localeTitle and localeBody with the translated data
        const {
          title: translatedTitle,
          body: translatedBody,
          localeBody,
          localeTitle,
        } = context.response;

        await client
          .patch(originalPostId)
          .set({
            localeTitle: {
              ...localeTitle,
              [formattedLocale]: translatedTitle,
            },
            localeBody: {
              ...localeBody,
              [formattedLocale]: translatedBody,
            },
          })
          .commit();

        // Set the translationProcessing flag to false
        await updatePostTranslationProcessing({
          _id: originalPostId,
          translationProcessing: false,
        });
      },
    }
  )
  .post('/translate', async req => {
    const { body, set } = req;
    console.info(`POST /api/translate`);
    const { locale, post } = body;
    if (locale.startsWith('en')) {
      set.status = 200;
      return;
    }

    const contentToTranslate = {
      localeTitle: {
        [locale]: post.localeTitle['en_US'],
      },
      localeBody: {
        [locale]: post.localeBody['en_US'],
      },
    };

    // Translate the post
    const translatedContent = await translate(contentToTranslate, locale);
    await createSupportedLanguageIfNeeded(locale);

    // Patch localeTitle and localeBody with the translated data
    await client
      .patch(post._id)
      .set({
        localeTitle: {
          ...post.localeTitle,
          [locale]: translatedContent.localeTitle[locale],
        },
        localeBody: {
          ...post.localeBody,
          [locale]: translatedContent.localeBody[locale],
        },
      })
      .commit();

    await updatePostTranslationProcessing({
      _id: post._id,
      translationProcessing: false,
    });
    set.status = 200;
  });

export default router;
