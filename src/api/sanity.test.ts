import { getDocuments, getDocumentBySlug } from './sanity'; // Update the path

// Mock the global fetch function
(window as any).fetch = jest.fn();

describe('API functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getDocuments', () => {
    it('should fetch documents successfully', async () => {
      const mockData = [{ id: 1, title: 'Test Post' }];

      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockData),
      });

      const result = await getDocuments();
      expect(result).toEqual(mockData);
    });

    it('should handle errors gracefully', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(
        new Error('Something went wrong')
      );

      const result = await getDocuments();
      expect(result).toEqual([]);
    });
  });

  describe('getDocumentBySlug', () => {
    it('should fetch a document by slug successfully', async () => {
      const mockData = { id: 1, title: 'Test Post', slug: 'test-post' };

      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockData),
      });

      const result = await getDocumentBySlug('test-post');
      expect(result).toEqual(mockData);
    });

    it('should handle errors gracefully', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(
        new Error('Something went wrong')
      );

      const result = await getDocumentBySlug('test-post');
      expect(result).toBeNull();
    });
  });
});
