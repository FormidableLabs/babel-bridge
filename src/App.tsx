import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import PostPage from './pages/[slug]';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      const posts = await fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .catch(error => {
          console.log(error);
          return [];
        });
      console.log('posts', posts);
      return { posts };
    },
    Component: HomePage,
  },
  {
    path: '/:slug',
    loader: async ({ params }) => {
      const post = await fetch(`http://localhost:3000/posts/${params.slug}`)
        .then(res => res.json())
        .catch(error => {
          console.log(error);
          return null;
        });
      return { post };
    },
    Component: PostPage,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
