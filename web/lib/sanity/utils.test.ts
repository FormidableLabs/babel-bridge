import { createSupportedLanguageIfNeeded } from './utils';

jest.mock('./mutations', () => ({
  createSupportedLanguage: jest.fn(),
}));
jest.mock('./queries', () => ({
  getLanguage: jest.fn(),
}));

const { createSupportedLanguage } = require('./mutations');
const { getLanguage } = require('./queries');

describe('createSupportedLanguageIfNeeded', () => {
  it('does not create language if it already exists', async () => {
    const locale = 'en-US';
    getLanguage.mockResolvedValue({ id: locale, title: locale });

    await createSupportedLanguageIfNeeded(locale);

    expect(getLanguage).toHaveBeenCalledWith(locale);
    expect(createSupportedLanguage).not.toHaveBeenCalled();
  });

  it('creates language if it does not exist', async () => {
    const locale = 'new-locale';
    getLanguage.mockResolvedValue(null);

    await createSupportedLanguageIfNeeded(locale);

    expect(getLanguage).toHaveBeenCalledWith(locale);
    expect(createSupportedLanguage).toHaveBeenCalledWith({
      _type: 'supportedLanguages',
      title: locale,
      id: locale,
      default: false,
    });
  });
});
