import { useLoaderData, Link, Await } from 'react-router-dom';

import { BlogListItem, PortableText } from '../../components';
import { Suspense } from 'react';

function Post(props: { post: BlogListItem }) {
  const { post } = props;
  return (
    <article>
      <header>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <h2 className="text-xl font-semibold italic">Author: {post.author}</h2>
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
  );
}

function PostSkeleton() {
  return (
    <article>
      <header>
        <div className="bg-gray-200 animate-pulse rounded mb-6 w-1/2 h-8"></div>
        <div className="bg-gray-200 animate-pulse rounded mb-4 w-1/4 h-6"></div>
        <div className="bg-gray-200 animate-pulse rounded mb-4 w-1/3 h-5"></div>
      </header>
      <section>
        <div className="bg-gray-200 animate-pulse rounded h-6 mb-4"></div>
        <div className="bg-gray-200 animate-pulse rounded h-6 mb-4"></div>
        <div className="bg-gray-200 animate-pulse rounded h-6 mb-4"></div>
      </section>
    </article>
  );
}

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
      {/* Suspense provides the placeholder fallback */}
      <Suspense fallback={<PostSkeleton />}>
        {/* Await manages the deferred data (promise) */}
        <Await resolve={post}>
          {/* this calls back when the data is resolved */}
          {resolvedPost => {
            return <Post post={resolvedPost} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
