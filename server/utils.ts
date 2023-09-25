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
