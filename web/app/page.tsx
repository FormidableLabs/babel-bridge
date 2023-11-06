'use client';

import { useEffect, useState } from 'react';
import { Container, PostError, PostList, PostListSkeleton } from './components';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetch('http://localhost:3000/api/posts', {
          method: 'GET',
        })
          .then((res) => res.json())
          .catch(() => null);

        setPosts(posts);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    getPosts();
  }, []);

  if (loading && posts.length === 0)
    return (
      <Container>
        <PostListSkeleton />
      </Container>
    );

  if (error) {
    return (
      <Container>
        <PostError />
      </Container>
    );
  }

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
