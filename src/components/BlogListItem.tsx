import { TypedObject } from '@portabletext/types';
import { Link } from 'react-router-dom';

export type BlogListItem = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
  body: TypedObject;
};

type BlogListItemProps = BlogListItem;

export const BlogListItem = (props: BlogListItemProps) => {
  const { title, slug } = props;

  return (
    <li className="mb-4 border-b pb-4">
      <Link to={`/${slug?.current}`}>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      </Link>
    </li>
  );
};
