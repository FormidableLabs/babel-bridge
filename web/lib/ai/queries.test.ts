jest.mock('./utils', () => ({
  extractJSON: jest.fn(),
  getPrompt: jest.fn(),
}));
jest.mock('./ai', () => ({
  openai: {
    chat: {
      completions: {
        create: jest.fn(),
      },
    },
  },
}));

const { getTranslation } = require('./queries');
const { extractJSON, getPrompt } = require('./utils');
const { openai } = require('./ai');

describe('getTranslation', () => {
  beforeEach(() => {
    openai.chat.completions.create.mockReset();
    extractJSON.mockReset();
    getPrompt.mockReset();
  });

  it('translates content successfully', async () => {
    const data = { title: 'Hello', text: 'This is a test.' };
    const locale = 'es-ES';
    const mockResponse = {
      choices: [
        {
          message: {
            content: '{"titulo": "Hola", "texto": "Esto es una prueba."}',
          },
        },
      ],
    };

    openai.chat.completions.create.mockResolvedValue(mockResponse);
    extractJSON.mockReturnValue({
      titulo: 'Hola',
      texto: 'Esto es una prueba.',
    });

    const result = await getTranslation(data, locale);

    expect(getPrompt).toHaveBeenCalledWith(locale, JSON.stringify(data));
    expect(openai.chat.completions.create).toHaveBeenCalled();
    expect(extractJSON).toHaveBeenCalledWith(
      mockResponse.choices[0].message.content
    );
    expect(result).toEqual({ titulo: 'Hola', texto: 'Esto es una prueba.' });
  });

  it('returns an empty object for null data input', async () => {
    const locale = 'es-ES';
    const result = await getTranslation(null, locale);
    expect(getPrompt).not.toHaveBeenCalled();
    expect(openai.chat.completions.create).not.toHaveBeenCalled();
    expect(result).toEqual({});
  });

  it('handles API failure with an error', async () => {
    const data = { title: 'Hello', text: 'This is a test.' };
    const locale = 'es-ES';
    openai.chat.completions.create.mockRejectedValue(new Error('API Error'));
    await expect(getTranslation(data, locale)).rejects.toThrow('API Error');
  });

  it('returns an empty object for an empty response from the API', async () => {
    const data = { title: 'Hello', text: 'This is a test.' };
    const locale = 'es-ES';
    openai.chat.completions.create.mockResolvedValue({
      choices: [{ message: { content: '' } }],
    });
    const result = await getTranslation(data, locale);
    expect(result).toEqual({});
  });

  it('returns an empty object when API response contains invalid JSON', async () => {
    const data = { title: 'Hello', text: 'This is a test.' };
    const locale = 'es-ES';
    const invalidJSON = 'This is not JSON';
    openai.chat.completions.create.mockResolvedValue({
      choices: [{ message: { content: invalidJSON } }],
    });
    extractJSON.mockReturnValue(null);
    const result = await getTranslation(data, locale);
    expect(result).toEqual({});
  });

  it('returns an empty object for empty string data', async () => {
    const locale = 'es-ES';
    const result = await getTranslation('', locale);
    expect(getPrompt).not.toHaveBeenCalled();
    expect(openai.chat.completions.create).not.toHaveBeenCalled();
    expect(result).toEqual({});
  });
});
