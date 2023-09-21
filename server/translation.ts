import OpenAI from 'openai';
import { extractJSON } from './utils';

const DEFAULT_CLIENT_LANGUAGE = 'mi-NZ';
const PROMPT_TEMPLATE = `The following JSON represents a document in Sanity, written in en-US.
Translate all of the text content (i.e. the values for 'text' and 'title') into ${DEFAULT_CLIENT_LANGUAGE}, so that the translated document is valid JSON with the same structure (and keys) as the original.
Return just the JSON string in plain text - no formatting, no introductory message or explanation.`;

// Uses process.env.OPENAI_API_KEY
const openai = new OpenAI();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translate = async (document: any) => {
  const prompt = `${PROMPT_TEMPLATE}\n${JSON.stringify(document)}`;

  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });

  return extractJSON(response.choices[0].message.content);
};
