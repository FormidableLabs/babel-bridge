import { PortableText } from './PortableText';
import type { TypedObject } from '@portabletext/types';

export type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
  body: TypedObject;
  _createdAt: string;
} | null;

export const Post = (props: { post: Post }) => {
  const { post } = props;
  if (!post) {
    return (
      <div className="space-y-6">
        <div
          className="yellow-red-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Post not found</strong>
        </div>
      </div>
    );
  }
  return (
    <article>
      <header>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <h2 className="text-xl font-semibold italic">Author: {post.author}</h2>
        <h3 className="text-sm font-semibold mb-4 italic">
          Published:{' '}
          <time dateTime={post._createdAt}>
            {new Date(post._createdAt).toDateString()}
          </time>
        </h3>
      </header>
      <section>
        <PortableText value={post.body} />
      </section>
    </article>
  );
};
