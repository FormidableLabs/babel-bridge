import { Elysia } from 'elysia';

import { getDocumentCount, getPost, getPosts } from './contentQueries';
import {
  createSupportedLanguageIfNeeded,
  getLocale,
  handleLocalePostAndMetadata,
} from './utils';
import { translate } from './translation';
import { updatePostTranslationProcessing } from './contentMutations';

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
        const locale = getLocale(context.headers);
        if (locale.startsWith('en')) {
          console.log("Don't translate English");
          return;
        }
        await createSupportedLanguageIfNeeded(locale);
        await handleLocalePostAndMetadata(
          context.response,
          originalPostId,
          locale
        );
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
    // Translate the post
    const translatedPost = await translate(post, locale);
    await createSupportedLanguageIfNeeded(locale);
    await handleLocalePostAndMetadata(translatedPost, post._id, locale);
    await updatePostTranslationProcessing({
      _id: post._id,
      translationProcessing: false,
    });
    set.status = 200;
  });

export default router;
