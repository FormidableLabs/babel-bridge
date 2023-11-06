'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Post, PostSkeleton, PostError, Container } from '../components';

type PostPageProps = {
  params: { slug: string };
};

export default function PostPage(props: PostPageProps) {
  const { params } = props;
  const slug = params.slug;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const post = await fetch(`http://localhost:3000/api/posts/${slug}`, {
          method: 'GET',
        })
          .then((res) => res.json())
          .catch(() => null);

        setPost(post);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    getPost();
  }, [slug]);

  if (loading || !post) {
    return (
      <Container>
        <PostSkeleton />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <PostError />
      </Container>
    );
  }

  return (
    <Container>
      <Link href="/" className="block mb-4">
        🔙
      </Link>
      <Post post={post} />
    </Container>
  );
}
