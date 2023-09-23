import { useLoaderData } from 'react-router-dom';
import { BlogList } from '../components/BlogList';

export default function HomePage() {
  const data = useLoaderData() as {
    posts: any[];
  };
  const posts = data.posts;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Sanity Translation Experiment</h1>
      <BlogList items={posts} />
    </div>
  );
}
