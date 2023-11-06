import { openai } from './ai';
import { extractJSON } from './utils';

export const getPrompt = (
  locale: string,
  document: string
) => `The following JSON represents a document in Sanity, written in en-US.
Translate all of the text content (i.e. the values for 'text' and 'title') into ${locale}, so that the translated document is valid JSON with the same structure (and keys) as the original.
Return just the JSON string in plain text - no formatting, no introductory message or explanation.\n${document}`;

export const getTranslation = async (
  data: any,
  locale: string
): Promise<Record<string, any>> => {
  console.log(`Translating content to ${locale}...`);

  const prompt = getPrompt(locale, JSON.stringify(data));

  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });

  return extractJSON(response.choices[0].message.content) ?? {};
};
