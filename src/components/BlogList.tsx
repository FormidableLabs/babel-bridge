import {
  BlogListItem as BlogListItemComponent,
  type BlogListItem,
} from './BlogListItem';

type BlogListProps = {
  items: BlogListItem[];
};

export const BlogList = (props: BlogListProps) => {
  const { items } = props;
  if (!items || items.length === 0) return null;
  return (
    <ul>
      {items.map(item => {
        return <BlogListItemComponent key={item._id} {...item} />;
      })}
    </ul>
  );
};
