import { useLoaderData } from 'react-router-dom';

import { PortableText } from '../../components';
import type { TypedObject } from '@portabletext/types';

export default function PostPage() {
  const data = useLoaderData() as {
    post: any;
  };
  const post = data.post;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">{post?.title}</h1>
      <PortableText value={post?.body as unknown as TypedObject} />
    </div>
  );
}
