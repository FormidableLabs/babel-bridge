import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Container, PostList } from 'components';
import { getLocale } from '../../util';

export const meta: MetaFunction = () => {
  return [
    { title: 'Sanity Translation Experiment' },
    { name: 'description', content: 'Welcome to our experiment!' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = getLocale(request.headers.get('Accept-Language'));
  const posts = await fetch(`http://localhost:3000/posts`, {
    method: 'GET',
    headers: {
      'Accept-Language': locale,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  return json(posts);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();
  if (posts.length === 0) {
    return (
      <Container>
        <h1 className="text-4xl font-bold mb-6">
          Sanity Translation Experiment
        </h1>
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
