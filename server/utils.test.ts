import { describe, it, expect } from 'bun:test';

import { extractJSON } from './utils';

describe('extractJSON', () => {
  it('should handle JSON-only strings', () => {
    const input = `{"key": "value"}`;
    const result = extractJSON(input);
    expect(result).toBe('{"key": "value"}');
  });

  it('should handle JSON at the start of the string', () => {
    const input = `{"key": "value"} Please review the data above.`;
    const result = extractJSON(input);
    expect(result).toBe('{"key": "value"}');
  });

  it('should handle JSON at the end of the string', () => {
    const input = `Data incoming: {"key": "value"}`;
    const result = extractJSON(input);
    expect(result).toBe('{"key": "value"}');
  });

  it('should handle JSON in the middle of the string', () => {
    const input = `Data incoming: {"key": "value"} Please review the data above.`;
    const result = extractJSON(input);
    expect(result).toBe('{"key": "value"}');
  });

  it('should handle nested JSON', () => {
    const input = `Here's some nested JSON: {"outer": {"inner": "value"}}. Thank you!`;
    const result = extractJSON(input);
    expect(result).toBe('{"outer": {"inner": "value"}}');
  });

  it('should handle arrays', () => {
    const input = `Here's an array: {"array": [1, 2, 3]}. Enjoy!`;
    const result = extractJSON(input);
    expect(result).toBe('{"array": [1, 2, 3]}');
  });

  it('should handle empty objects and arrays', () => {
    const input = `Empty objects and arrays: {"obj": {}, "arr": []}`;
    const result = extractJSON(input);
    expect(result).toBe('{"obj": {}, "arr": []}');
  });

  it('should handle numbers and booleans', () => {
    const input = `Here's JSON with numbers and booleans: {"int": 123, "float": 123.45, "bool": true}`;
    const result = extractJSON(input);
    expect(result).toBe('{"int": 123, "float": 123.45, "bool": true}');
  });

  it('should return null if no JSON is found', () => {
    const input = `Hello, no JSON here. Thank you!`;
    const result = extractJSON(input);
    expect(result).toBe(null);
  });

  it('should return null for invalid JSON', () => {
    const text = `{"key": "value"`;
    const result = extractJSON(text);
    expect(result).toBeNull();
  });
});
