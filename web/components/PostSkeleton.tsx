export const PostSkeleton = () => {
  return (
    <article>
      <header>
        <div className="bg-gray-200 animate-pulse rounded mb-6 w-1/2 h-8"></div>
        <div className="bg-gray-200 animate-pulse rounded mb-4 w-1/4 h-6"></div>
        <div className="bg-gray-200 animate-pulse rounded mb-4 w-1/3 h-5"></div>
      </header>
      <section>
        <div className="bg-gray-200 animate-pulse rounded h-6 mb-4"></div>
        <div className="bg-gray-200 animate-pulse rounded h-6 mb-4"></div>
        <div className="bg-gray-200 animate-pulse rounded h-6 mb-4"></div>
      </section>
    </article>
  );
};
