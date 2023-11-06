import { getTranslation } from '@/app/lib/ai/queries';
import { client, getPost } from '@/app/lib/sanity';
import { updatePostTranslationProcessing } from '@/app/lib/sanity/mutations';
import { createSupportedLanguageIfNeeded, getLocale } from '@/app/util';

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

export async function GET(request: Request) {
  console.info('GET /api/posts/:slug');
  const locale = getLocale(request.headers.get('Accept-Language'));
  const slug = request.url.split('/').pop() ?? '';
  const post = await getPost({
    slug,
    locale,
  });
  const hasTranslationForLocale =
    !!post.localeTitle[locale] && !!post.localeBody[locale];

  if (locale.startsWith('en') || hasTranslationForLocale) {
    return new Response(JSON.stringify(post), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      status: 200,
    });
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
  return new Response(JSON.stringify(translatedPost), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    status: 200,
  });
}
