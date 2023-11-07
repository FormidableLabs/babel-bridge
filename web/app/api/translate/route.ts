import { getTranslation } from '@/app/lib/ai/queries';
import { client } from '@/app/lib/sanity';
import { updatePostTranslationProcessing } from '@/app/lib/sanity/mutations';
import { createSupportedLanguageIfNeeded } from '@/app/util';

export async function POST(request: Request) {
  const body = await request.json();
  const { locale, post } = body;
  // TODO: Investigate if this is actually needed
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
