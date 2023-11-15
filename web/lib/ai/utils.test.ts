import { getPrompt, extractJSON } from './utils';

describe('extractJSON', () => {
  it('should handle JSON-only strings', () => {
    const input = `{"key": "value"}`;
    const result = extractJSON(input);
    expect(result).toEqual({ key: 'value' });
  });

  it('should handle JSON at the start of the string', () => {
    const input = `{"key": "value"} Please review the data above.`;
    const result = extractJSON(input);
    expect(result).toEqual({ key: 'value' });
  });

  it('should handle JSON at the end of the string', () => {
    const input = `Data incoming: {"key": "value"}`;
    const result = extractJSON(input);
    expect(result).toEqual({ key: 'value' });
  });

  it('should handle JSON in the middle of the string', () => {
    const input = `Data incoming: {"key": "value"} Please review the data above.`;
    const result = extractJSON(input);
    expect(result).toEqual({ key: 'value' });
  });

  it('should handle nested JSON', () => {
    const input = `Here's some nested JSON: {"outer": {"inner": "value"}}. Thank you!`;
    const result = extractJSON(input);
    expect(result).toEqual({ outer: { inner: 'value' } });
  });

  it('should handle arrays', () => {
    const input = `Here's an array: {"array": [1, 2, 3]}. Enjoy!`;
    const result = extractJSON(input);
    expect(result).toEqual({ array: [1, 2, 3] });
  });

  it('should handle empty objects and arrays', () => {
    const input = `Empty objects and arrays: {"obj": {}, "arr": []}`;
    const result = extractJSON(input);
    expect(result).toEqual({ obj: {}, arr: [] });
  });

  it('should handle numbers and booleans', () => {
    const input = `Here's JSON with numbers and booleans: {"int": 123, "float": 123.45, "bool": true}`;
    const result = extractJSON(input);
    expect(result).toEqual({ int: 123, float: 123.45, bool: true });
  });

  it('should return null if no JSON is found', () => {
    const input = `Hello, no JSON here. Thank you!`;
    const result = extractJSON(input);
    expect(result).toBeNull();
  });

  it('should return null for invalid JSON', () => {
    const text = `{"key": "value"`;
    const result = extractJSON(text);
    expect(result).toBeNull();
  });
});

describe('getPrompt', () => {
  it('creates a correct prompt for a valid locale and document', () => {
    const locale = 'fr-FR';
    const document = JSON.stringify({
      title: 'Hello',
      text: 'This is a test.',
    });
    const expected = `The following JSON represents a document in Sanity, written in en-US.\nTranslate all of the text content (i.e. the values for 'text' and 'title') into ${locale}, so that the translated document is valid JSON with the same structure (and keys) as the original.\nReturn just the JSON string in plain text - no formatting, no introductory message or explanation.\n${document}`;
    expect(getPrompt(locale, document)).toBe(expected);
  });

  it('handles different locales', () => {
    const locales = ['es-ES', 'de-DE', 'invalid-locale', ''];
    const document = JSON.stringify({ title: 'Test', text: 'Sample text.' });
    locales.forEach((locale) => {
      const expected = `The following JSON represents a document in Sanity, written in en-US.\nTranslate all of the text content (i.e. the values for 'text' and 'title') into ${locale}, so that the translated document is valid JSON with the same structure (and keys) as the original.\nReturn just the JSON string in plain text - no formatting, no introductory message or explanation.\n${document}`;
      expect(getPrompt(locale, document)).toBe(expected);
    });
  });

  it('handles different documents', () => {
    const locale = 'it-IT';
    const documents = [
      JSON.stringify({ title: 'Hello', text: 'This is a test.' }),
      JSON.stringify({}),
      '',
    ];
    documents.forEach((document) => {
      const expected = `The following JSON represents a document in Sanity, written in en-US.\nTranslate all of the text content (i.e. the values for 'text' and 'title') into ${locale}, so that the translated document is valid JSON with the same structure (and keys) as the original.\nReturn just the JSON string in plain text - no formatting, no introductory message or explanation.\n${document}`;
      expect(getPrompt(locale, document)).toBe(expected);
    });
  });
});
