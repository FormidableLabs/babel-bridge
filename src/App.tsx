import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import PostPage from './pages/[slug]';
import { getDocuments, getDocumentBySlug } from './api/sanity';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      const posts = await getDocuments();
      return { posts };
    },
    Component: HomePage,
  },
  {
    path: '/:slug',
    loader: async ({ params }) => {
      const post = getDocumentBySlug(params.slug as string);
      return defer({ post });
    },
    Component: PostPage,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
