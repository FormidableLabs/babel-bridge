import { getDocumentCount } from '../lib/sanity';
import { getLocale } from '../util';

export async function GET(request: Request) {
  console.info('GET /api');
  const locale = getLocale(request.headers.get('Accept-Language'));
  const count = await getDocumentCount();

  return new Response(
    `Locale: ${locale}\nThere are ${count.published} published documents and ${count.drafts} drafts available.`,
    {
      headers: {
        'content-type': 'text/plain;charset=UTF-8',
      },
    }
  );
}
