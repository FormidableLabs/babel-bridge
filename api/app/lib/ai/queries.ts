import { openai } from './ai';
import { extractJSON, getPrompt } from './utils';

export const getTranslation = async (
  data: any,
  locale: string
): Promise<Record<string, any>> => {
  // Handle null or empty data input
  if (!data || (typeof data === 'string' && data.trim() === '')) {
    console.log(`No content to translate to ${locale}.`);
    return {};
  }

  // Handle invalid data format (non-serializable data)
  let jsonData;
  try {
    jsonData = JSON.stringify(data);
  } catch (error) {
    throw new Error('Invalid data format');
  }

  // Constructing the prompt
  const prompt = getPrompt(locale, jsonData);

  try {
    // Making the API call
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });

    // Extracting and returning the JSON response
    return extractJSON(response.choices[0].message.content) ?? {};
  } catch (error) {
    throw error;
  }
};
