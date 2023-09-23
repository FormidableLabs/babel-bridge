import { BlogListItem } from './BlogListItem';

type BlogListProps = {
  items: any[];
};

export const BlogList = (props: BlogListProps) => {
  const { items } = props;
  if (!items || items.length === 0) return null;
  return (
    <ul>
      {items.map((item) => {
        return <BlogListItem key={item._id} {...item} />;
      })}
    </ul>
  );
};
