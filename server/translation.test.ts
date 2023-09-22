import OpenAI from 'openai';

import { translate } from './translation';

// jest.mock('openai', () => ({
//   OpenAI: jest.fn().mockImplementation(() => ({
//     chat: {
//       completions: {
//         create: jest.fn().mockResolvedValue({
//           choices: [{ message: { content: 'mocked_translation' } }],
//         }),
//       },
//     },
//   })),
// }));

// These tests are skipped because bun doesn't support module mocking yet
describe.skip('translate function', () => {
  let openaiInstance: OpenAI;

  beforeEach(() => {
    openaiInstance = new OpenAI();
  });

  it('should translate a document correctly', async () => {
    const document = {
      title: 'Hello',
      text: 'World',
    };

    const result = await translate(document);

    expect(openaiInstance.chat.completions.create).toHaveBeenCalled();
    expect(result).toEqual('mocked_translation'); // Update this to match what you expect from a mocked API call
  });

  it('should handle API errors gracefully', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (openaiInstance.chat.completions.create as any).mockRejectedValue(
      new Error('API Error')
    );

    await expect(translate({})).rejects.toThrow('API Error');
  });
});
