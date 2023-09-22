import { Elysia } from 'elysia';

import { getDocumentCount, getPost, getPosts } from './contentQueries';
import { getLocale } from './utils';
import { translate } from './translation';

const router = new Elysia()
  .get('/', async req => {
    console.info('GET /api');

    const locale = getLocale(req.headers);
    const count = await getDocumentCount();

    return `Locale: ${locale}\nThere are ${count} documents available.`;
  })
  .get('/posts', async () => {
    console.info('GET /api/posts');

    return await getPosts();
  })
  .get('/posts/:slug', async req => {
    const { slug } = req.params;
    const locale = getLocale(req.headers);

    console.info(`GET /api/posts/${slug}`);

    const post = await getPost(slug);
    return await translate(post, locale);
  });

export default router;
