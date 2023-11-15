import { updatePostTranslationProcessing } from './mutations';

jest.mock('./sanity', () => ({
  client: {
    create: jest.fn(),
    patch: jest.fn().mockReturnThis(), // patch returns an object with a set method
    set: jest.fn().mockReturnThis(), // set returns an object with a commit method
    commit: jest.fn(),
  },
}));

const { createSupportedLanguage } = require('./mutations');
const { client } = require('./sanity');

describe('createSupportedLanguage', () => {
  // HELP: ??
  let consoleLogSpy: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]],
    any
  >;
  let consoleErrorSpy: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]],
    any
  >;

  beforeEach(() => {
    client.create.mockReset();
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('successfully creates a supported language', async () => {
    const mockData = {
      _type: 'language',
      id: 'en',
      title: 'English',
      default: true,
    };
    const mockResponse = { ...mockData, _id: 'language-en' };
    client.create.mockResolvedValue(mockResponse);

    const result = await createSupportedLanguage(mockData);

    expect(client.create).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(mockResponse);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `Language ${mockData.id} created`
    );
  });

  it('handles errors during language creation', async () => {
    const mockData = {
      _type: 'language',
      id: 'fr',
      title: 'French',
      default: false,
    };
    client.create.mockRejectedValue(new Error('Creation failed'));

    const result = await createSupportedLanguage(mockData);

    expect(client.create).toHaveBeenCalledWith(mockData);
    expect(result).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});

describe('updatePostTranslationProcessing', () => {
  it('updates post translation processing status', async () => {
    const mockData = { _id: 'post-123', translationProcessing: true };
    const mockResponse = { ...mockData, updated: true };
    client.commit.mockResolvedValue(mockResponse);

    const result = await updatePostTranslationProcessing(mockData);

    expect(client.patch).toHaveBeenCalledWith(mockData._id);
    expect(client.set).toHaveBeenCalledWith({
      translationProcessing: mockData.translationProcessing,
    });
    expect(client.commit).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });
});
