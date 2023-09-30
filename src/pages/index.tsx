import { useLoaderData } from 'react-router-dom';

import { type Post, PostList } from '../components';

export default function HomePage() {
  const data = useLoaderData() as {
    posts: Post[];
  };
  const posts = data.posts;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Sanity Translation Experiment</h1>
      <PostList items={posts} />
    </div>
  );
}
