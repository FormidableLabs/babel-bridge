import OpenAI from 'openai'; // Uses process.env.OPENAI_API_KEY

import { extractJSON, getPrompt } from './utils';

type GetTranslationOpts = {
  payload: {
    data: any;
    locale: string;
  };
  aiConfig: {
    apiKey: string;
  };
};

export const getTranslation = async (
  opts: GetTranslationOpts
): Promise<Record<string, any>> => {
  const { payload, aiConfig } = opts;
  // Handle null or empty data input
  if (
    !payload.data ||
    (typeof payload.data === 'string' && payload.data.trim() === '')
  ) {
    console.log(`No content to translate to ${payload.locale}.`);
    return {};
  }

  // Handle invalid data format (non-serializable data)
  let jsonData;
  try {
    jsonData = JSON.stringify(payload.data);
  } catch (error) {
    throw new Error('Invalid data format');
  }

  // Constructing the prompt
  const prompt = getPrompt(payload.locale, jsonData);

  try {
    const openai = new OpenAI(aiConfig);
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
