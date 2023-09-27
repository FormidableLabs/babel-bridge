export const defaultTemplates = [
  {
    id: 'post-by-language',
    title: 'Post by language',
    schemaType: 'post',
    parameters: [{ name: 'language', type: 'string' }],
    value: (params: { language: string }) => {
      return {
        language: params.language,
      }
    },
  }
]