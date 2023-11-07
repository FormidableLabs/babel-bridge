export const PostListSkeleton = () => {
  return (
    <ul>
      {/* Render 5 skeleton items */}
      {[...Array(5)].map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </ul>
  );
};

// Define the SkeletonItem component
const SkeletonItem = () => {
  return (
    <li className="mb-4 border-b pb-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-6 bg-gray-300 rounded-md w-5/6"></div>
    </li>
  );
};
