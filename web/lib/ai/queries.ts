import { openai } from './ai';
import { extractJSON, getPrompt } from './utils';

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
