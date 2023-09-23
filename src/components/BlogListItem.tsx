import { Link } from 'react-router-dom';

export type BlogListItemProps = any;

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
