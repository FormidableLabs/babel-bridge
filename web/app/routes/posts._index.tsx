import type { LoaderFunctionArgs } from '@remix-run/node'; // or cloudflare/deno
import { json } from '@remix-run/node'; // or cloudflare/deno
import { getLocale } from '../../util';
import { getPosts } from 'lib/sanity';

export async function loader({ request }: LoaderFunctionArgs) {
  console.info('GET /posts');
  const locale = getLocale(request.headers.get('Accept-Language'));
  const posts = await getPosts({
    locale,
  });
  return json(posts);
}
