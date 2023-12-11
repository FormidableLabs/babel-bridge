import { Link } from '@remix-run/react';
import { type Post } from './Post';

export const PostList = (props: { items: Post[] }) => {
  const { items } = props;
  if (!items || items.length === 0) return null;
  return (
    <ul>
      {items.map(item => {
        return <Item key={item._id} {...item} />;
      })}
    </ul>
  );
};

const Item = (props: Post) => {
  const { title, slug } = props;
  return (
    <li className="mb-4 border-b pb-4">
      <Link to={`/${slug?.current}`}>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      </Link>
    </li>
  );
};
