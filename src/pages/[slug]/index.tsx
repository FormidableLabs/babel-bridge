import { useLoaderData, Link } from 'react-router-dom';

import { BlogListItem, PortableText } from '../../components';

export default function PostPage() {
  const data = useLoaderData() as {
    post: BlogListItem;
  };
  const { post } = data;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="block mb-4">
        🔙
      </Link>
      <article>
        <header>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <h2 className="text-xl font-semibold italic">
            Author: {post.author}
          </h2>
          <h3 className="text-sm font-semibold mb-4 italic">
            Published:{' '}
            <time dateTime={post._createdAt}>
              {new Date(post._createdAt).toDateString()}
            </time>
          </h3>
        </header>
        <section>
          <PortableText value={post.body} />
        </section>
      </article>
    </div>
  );
}
