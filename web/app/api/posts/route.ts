import { getPosts } from '@/app/lib/sanity';
import { getLocale } from '@/app/util';

export async function GET(request: Request) {
  console.info('GET /api/posts');
  const locale = getLocale(request.headers.get('Accept-Language'));
  const posts = await getPosts({
    locale,
  });

  return new Response(JSON.stringify(posts), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}
