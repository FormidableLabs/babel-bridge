import { getLanguage, getPost } from './queries';

jest.mock('./sanity', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

const { client } = require('./sanity');

const { getDocumentCount, getPosts } = require('./queries');

describe('getDocumentCount', () => {
  it('returns the count of published and draft documents', async () => {
    client.fetch.mockResolvedValueOnce(5); // Total posts
    client.fetch.mockResolvedValueOnce(3); // Published posts

    const result = await getDocumentCount();

    expect(client.fetch).toHaveBeenCalledTimes(2);
    expect(result).toEqual({ published: 3, drafts: 2 });
  });

  it('throws an error when no documents are found', async () => {
    client.fetch.mockResolvedValueOnce(0);

    await expect(getDocumentCount()).rejects.toThrow('No documents found');
  });
});

describe('getPosts', () => {
  let consoleWarnSpy: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]],
    any
  >;

  beforeEach(() => {
    client.fetch.mockReset();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  it('fetches posts for a given locale', async () => {
    const mockPosts = [{ title: 'Post 1' }, { title: 'Post 2' }];
    client.fetch.mockResolvedValue(mockPosts);

    const result = await getPosts({ locale: 'en_US' });

    expect(client.fetch).toHaveBeenCalled();
    expect(result).toEqual(mockPosts);
  });

  it('returns an empty array if no posts are found', async () => {
    client.fetch.mockResolvedValue([]);

    const result = await getPosts({ locale: 'en_US' });

    expect(console.warn).toHaveBeenCalledWith('No Posts found');
    expect(result).toEqual([]);
  });
});

describe('getPost', () => {
  let consoleWarnSpy: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]],
    any
  >;

  beforeEach(() => {
    client.fetch.mockReset();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  it('fetches a post by slug and locale', async () => {
    const mockPost = { title: 'Sample Post' };
    client.fetch.mockResolvedValue(mockPost);

    const result = await getPost({ slug: 'sample-post', locale: 'en-US' });

    expect(client.fetch).toHaveBeenCalled();
    expect(result).toEqual(mockPost);
  });

  it('returns null if the post is not found', async () => {
    client.fetch.mockResolvedValue(null);

    const result = await getPost({ slug: 'nonexistent-post', locale: 'en-US' });

    expect(console.warn).toHaveBeenCalledWith('No Post found');
    expect(result).toBeNull();
  });
});

describe('getLanguage', () => {
  it('fetches a language by its identifier', async () => {
    const mockLanguage = { id: 'en', title: 'English' };
    client.fetch.mockResolvedValue(mockLanguage);

    const result = await getLanguage('en');

    expect(client.fetch).toHaveBeenCalled();
    expect(result).toEqual(mockLanguage);
  });

  it('returns null if the language is not found', async () => {
    client.fetch.mockResolvedValue(null);

    const result = await getLanguage('nonexistent-language');

    expect(result).toBeNull();
  });
});
