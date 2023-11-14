import type { LoaderFunctionArgs } from '@remix-run/node'; // or cloudflare/deno
import { defer } from '@remix-run/node'; // or cloudflare/deno
import { Await, Link, useLoaderData } from '@remix-run/react';
import {
  Container,
  Post as PostComponent,
  type Post,
  PostSkeleton,
} from 'components';
import { getLocale } from '../../util';
import { Suspense } from 'react';

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = getLocale(request.headers.get('Accept-Language'));
  const slug = new URL(request.url).pathname.split('/').pop();
  const postPromise = fetch(`http://localhost:3000/posts/${slug}`, {
    method: 'GET',
    headers: {
      'Accept-Language': locale,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return null;
    });

  return defer({
    post: postPromise,
    locale,
  });
}

export default function Page() {
  const { post, locale } = useLoaderData<typeof loader>();

  if (!post) {
    return (
      <Container>
        <Link to="/" className="block mb-4">
          🔙
        </Link>
        <h1 className="text-4xl font-bold mb-6">Post not found</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Link to="/" className="block mb-4">
        🔙
      </Link>
      <Suspense
        fallback={
          <Container>
            <div className="space-y-6">
              <div
                className="yellow-red-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Were working on it!</strong>
                <span className="block sm:inline ml-2">
                  This post is being translated to {locale}.
                </span>
              </div>
              <PostSkeleton />
            </div>
          </Container>
        }
      >
        <Await resolve={post}>
          {(resolvedPost) => <PostComponent post={resolvedPost as Post} />}
        </Await>
      </Suspense>
    </Container>
  );
}
