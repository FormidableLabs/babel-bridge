import { json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { defer } from '@remix-run/node'; // or cloudflare/deno
import { Await, Link, useLoaderData } from '@remix-run/react';
import { Container, Post as PostComponent, type Post, PostSkeleton } from 'components';
import { client, getLocale } from 'lib/sanity';
import { Suspense } from 'react';

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = getLocale(request.headers.get('Accept-Language'));
  const slug = new URL(request.url).pathname.split('/').pop();
  const sanityConfig = client.config();
  const fetchUrl = `http://localhost:8080/api/document/post?dataset=${sanityConfig.dataset}&projectId=${sanityConfig.projectId}&matcher=slug.current=${slug}`;
  const postPromise = fetch(fetchUrl, {
    method: 'GET',
    headers: {
      'Accept-Language': locale,
      'sanity-access-token': process.env.SANITY_STUDIO_TOKEN as string,
      'Open-Ai-Api-Key': process.env.OPENAI_API_KEY as string,
    },
  })
    .then(res => res.json())
    .catch(err => {
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
                <span className="block sm:inline ml-2">This post is being translated to {locale}.</span>
              </div>
              <PostSkeleton />
            </div>
          </Container>
        }
      >
        <Await resolve={post}>
          {resolvedPost => {
            return <PostComponent post={resolvedPost} />;
          }}
        </Await>
      </Suspense>
    </Container>
  );
}
