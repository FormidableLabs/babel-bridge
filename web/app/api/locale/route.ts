import { getLocale } from '@/app/util';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const locale = getLocale(request.headers.get('Accept-Language'));
  console.log('GET /api/locale');
  return new Response(
    JSON.stringify({
      locale,
    }),
    {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }
  );
}
