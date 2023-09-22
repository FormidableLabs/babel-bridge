import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages";
import PostPage from "./pages/[slug]";
import { runQuery } from "./groqd/runQuery";
import { getPostsQuery } from "./groqd/post/getPosts";
import { getPostBySlug } from "./groqd/post/getPostBySlug";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const posts = await runQuery(getPostsQuery);
      return { posts };
    },
    Component: HomePage,
  },
  {
    path: "/:slug",
    loader: async ({ params }) => {
      const post = await runQuery(getPostBySlug, { slug: params.slug });
      return { post };
    },
    Component: PostPage,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
