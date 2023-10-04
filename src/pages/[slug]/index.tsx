import { useLoaderData, Link, Await } from 'react-router-dom';

import {
  type Post as PostListItem,
  Post,
  PostSkeleton,
} from '../../components';
import { Suspense } from 'react';

export default function PostPage() {
  const data = useLoaderData() as {
    post: PostListItem;
  };
  const { post } = data;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="block mb-4">
        🔙
      </Link>
      <Suspense fallback={<PostSkeleton />}>
        <Await resolve={post}>
          {resolvedPost => {
            console.log('resolvedPost', resolvedPost);
            return <Post post={resolvedPost} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
