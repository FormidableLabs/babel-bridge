import type { LoaderFunctionArgs } from '@remix-run/node';
import { getTranslation } from 'lib/ai';
import {
  client,
  createSupportedLanguageIfNeeded,
  updatePostTranslationProcessing,
} from 'lib/sanity';

export async function loader({ request }: LoaderFunctionArgs) {
  const body = await request.json();
  const { locale, post } = body;

  // TODO: Might not need this.
  if (locale.startsWith('en')) {
    return new Response(null, {
      status: 200,
    });
  }

  await updatePostTranslationProcessing({
    _id: post._id,
    translationProcessing: true,
  });

  const contentToTranslate = {
    localeTitle: {
      [locale]: post.localeTitle['en_US'],
    },
    localeBody: {
      [locale]: post.localeBody['en_US'],
    },
  };
  const translatedContent = await getTranslation(contentToTranslate, locale);
  await createSupportedLanguageIfNeeded(locale);

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

  return new Response(null, {
    status: 200,
  });
}
