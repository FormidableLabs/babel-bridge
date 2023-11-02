import { client } from './sanityConfig';
import { getDocumentCount, getPosts, getPost } from './contentQueries';

jest.mock('./sanityConfig', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

afterEach(() => (client.fetch as jest.Mock).mockClear());

describe('getDocumentCount', () => {
  it('gets published and draft document counts', async () => {
    const expected = { published: 10, drafts: 5 };
    const expectedTotal = expected.published + expected.drafts;

    (client.fetch as jest.Mock)
      .mockResolvedValueOnce(expectedTotal)
      .mockResolvedValueOnce(expected.published);

    const actual = await getDocumentCount();

    expect(actual).toEqual(expected);
  });

  it('throws error if no documents found', async () => {
    const expectedError = 'No documents found';
    (client.fetch as jest.Mock).mockResolvedValueOnce(null);

    const actual = getDocumentCount();

    await expect(actual).rejects.toThrow(expectedError);
  });
});

describe('getPosts', () => {
  it('gets all posts', async () => {
    const expected = [{ _type: 'post', title: 'test' }];
    (client.fetch as jest.Mock).mockResolvedValueOnce(expected);

    const actual = await getPosts({
      locale: 'en_US',
    });

    expect(actual).toEqual(expected);
  });

  it('throws error if no posts found', async () => {
    const expectedError = 'No posts found';
    (client.fetch as jest.Mock).mockResolvedValueOnce(null);

    const actual = getPosts({
      locale: 'en_US',
    });

    await expect(actual).rejects.toThrow(expectedError);
  });
});

describe('getPost', () => {
  it('gets a post by slug', async () => {
    const slug = 'test-slug';
    const expected = { _type: 'post', title: 'test', slug: { current: slug } };
    (client.fetch as jest.Mock).mockResolvedValueOnce(expected);

    const actual = await getPost({
      slug,
      locale: 'en_US',
    });

    expect(actual).toEqual(expected);
  });

  it('throws error if post not found by slug', async () => {
    const slug = 'invalid-slug';
    const expectedError = `Post not found for slug: ${slug}`;
    (client.fetch as jest.Mock).mockResolvedValueOnce(null);

    const actual = getPost({
      slug,
      locale: 'en_US',
    });

    await expect(actual).rejects.toThrow(expectedError);
  });
});
