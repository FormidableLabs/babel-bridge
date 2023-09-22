import { Link } from "react-router-dom";
import { type Posts } from "../groqd/post/getPosts";

export type BlogListItemProps = Posts[number];

export const BlogListItem = (props: BlogListItemProps) => {
  const { title, slug } = props;
  return (
    <li className="mb-4 border-b pb-4">
      <Link to={`/${slug}`}>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      </Link>
    </li>
  );
};
