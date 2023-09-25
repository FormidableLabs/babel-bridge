export const API_BASE_URL = 'http://localhost:3000';

export const getDocuments = async () =>
  fetch(`${API_BASE_URL}/posts`)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
      return [];
    });

export const getDocumentBySlug = async (slug: string) =>
  fetch(`${API_BASE_URL}/posts/${slug}`)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
      return null;
    });
