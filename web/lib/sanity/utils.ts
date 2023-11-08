import { createSupportedLanguage } from './mutations';
import { getLanguage } from './queries';

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
