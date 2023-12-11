export const getPrompt = (
  locale: string,
  document: string
) => `The following JSON represents a document in Sanity, written in en-US.
Translate all of the text content (i.e. the values for 'text' and 'title') into ${locale}, so that the translated document is valid JSON with the same structure (and keys) as the original.
Return just the JSON string in plain text - no formatting, no introductory message or explanation.\n${document}`;

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
