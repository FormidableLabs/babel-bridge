import {
  createSupportedLanguage,
  createLocalePost,
  updatePostTranslationMetadata,
} from './contentMutations';
import {
  getLanguage,
  getLocalePost,
  getPostTranslationMetadata,
} from './contentQueries';

/** Gets the locale from the Accept-Language header or defaults to 'en-US' .*/
export const getLocale = (headers: Record<string, string | null>) =>
  headers['accept-language']?.split(',')[0].split(';')[0] ?? 'en-US';

/** Naively extracts JSON from a plain text string. It assumes that the JSON
 * represents an object, and that the object is the only JSON in the string.
 * It will return null if valid JSON is not found. */
export const extractJSON = (input: string | null): object | null => {
  if (!input) return null;

  const start = input.indexOf('{');
  const end = input.lastIndexOf('}') + 1;

  const jsonString = input.substring(start, end);

  // Return null if JSON is invalid
  try {
    const json = JSON.parse(jsonString);
    return json;
  } catch (err) {
    return null;
  }
};

// Helper function to create supported language if not exists
export async function createSupportedLanguageIfNeeded(locale: string) {
  const language = await getLanguage(locale);
  if (!language) {
    await createSupportedLanguage({
      _type: 'supportedLanguages',
      title: locale,
      id: locale,
      default: false,
    });
  }
}

// Helper function to create locale post and update translation metadata
export async function handleLocalePostAndMetadata(
  translatedPost: any,
  originalPostId: string,
  locale: string
) {
  const localePost = await getLocalePost(translatedPost.slug.current, locale);
  if (!localePost) {
    console.log('No translation found, creating one');
    const createdLocalePost = await createLocalePost({
      _type: 'post',
      body: translatedPost.body,
      language: translatedPost.language,
      slug: {
        current: translatedPost.slug.current,
      },
      title: translatedPost.title,
    });

    const translationMetadata = await getPostTranslationMetadata(
      originalPostId
    );
    if (translationMetadata) {
      console.log('Updating translation metadata');
      const translationKeys = translationMetadata.translations.map(t => t._key);
      if (!translationKeys.includes(locale)) {
        console.log('Adding translation key');
        await updatePostTranslationMetadata({
          _id: translationMetadata._id,
          translation: {
            _type: 'internationalizedArrayReferenceValue',
            _key: locale,
            value: {
              _weak: true,
              _ref: createdLocalePost!._id,
              _type: 'reference',
            },
          },
        });
        console.log('Translation metadata updated');
      }
    }
  }
}
