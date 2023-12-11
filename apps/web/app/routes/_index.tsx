import { json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Container, PostList } from 'components';
import { client, getLocale } from 'lib/sanity';

export const meta: MetaFunction = () => {
  return [{ title: 'Sanity Translation Experiment' }, { name: 'description', content: 'Welcome to our experiment!' }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = getLocale(request.headers.get('Accept-Language'));
  const posts = await client.fetch(
    `*[_type == 'post']{
    ...,
    "title": coalesce(localeTitle[$locale], localeTitle['en_US']),
    "body": coalesce(localeBody[$locale], localeBody['en_US'])
  }`,
    {
      locale,
    },
  );
  return json(posts);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();
  if (posts.length === 0) {
    return (
      <Container>
        <h1 className="text-4xl font-bold mb-6">Sanity Translation Experiment</h1>
        <p className="text-xl">No posts found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-6">Sanity Translation Experiment</h1>
      <PostList items={posts} />
    </Container>
  );
}
