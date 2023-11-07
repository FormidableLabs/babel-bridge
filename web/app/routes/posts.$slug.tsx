import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node'; // or cloudflare/deno
import { getLocale } from '../../util';
import {
  client,
  createSupportedLanguageIfNeeded,
  getPost,
  updatePostTranslationProcessing,
} from 'lib/sanity';
import { getTranslation } from 'lib/ai';

type AfterHandleOpts = {
  post: any;
  locale: string;
};

const afterHandle = async ({ post, locale }: AfterHandleOpts) => {
  const postId = post._id;
  // Set the translationProcessing flag to true
  await updatePostTranslationProcessing({
    _id: postId,
    translationProcessing: true,
  });

  await createSupportedLanguageIfNeeded(locale);

  // Patch localeTitle and localeBody with the translated data
  const {
    title: translatedTitle,
    body: translatedBody,
    localeBody,
    localeTitle,
  } = post;

  await client
    .patch(postId)
    .set({
      localeTitle: {
        ...localeTitle,
        [locale]: translatedTitle,
      },
      localeBody: {
        ...localeBody,
        [locale]: translatedBody,
      },
    })
    .commit();

  // Set the translationProcessing flag to false
  await updatePostTranslationProcessing({
    _id: postId,
    translationProcessing: false,
  });
};

export async function loader({ request }: LoaderFunctionArgs) {
  console.info('GET /posts/:slug');
  const locale = getLocale(request.headers.get('Accept-Language'));
  const slug = new URL(request.url).pathname.split('/').pop() ?? '';
  const post = await getPost({
    slug,
    locale,
  });
  const hasTranslationForLocale =
    !!post.localeTitle[locale] && !!post.localeBody[locale];
  if (locale.startsWith('en') || hasTranslationForLocale) {
    return json(post);
  }
  const contentToTranslate = {
    localeTitle: {
      [locale]: post.localeTitle['en_US'],
    },
    localeBody: {
      [locale]: post.localeBody['en_US'],
    },
  };

  const content = await getTranslation(contentToTranslate, locale);

  const translatedPost = {
    ...post,
    title: content.localeTitle[locale],
    body: content.localeBody[locale],
  };

  afterHandle({
    post: translatedPost,
    locale,
  });

  return json(translatedPost);
}
