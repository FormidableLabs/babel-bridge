import {
  PostListItem as PostListItemComponent,
  type PostListItem,
} from './PostListItem';

type PostListProps = {
  items: PostListItem[];
};

export const PostList = (props: PostListProps) => {
  const { items } = props;
  if (!items || items.length === 0) return null;
  return (
    <ul>
      {items.map(item => {
        return <PostListItemComponent key={item._id} {...item} />;
      })}
    </ul>
  );
};
