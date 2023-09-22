import { q } from "groqd";
import type { InferType } from "groqd";
import { postSlice } from "./slices";

export const getPostsQuery = q("*[_type == 'post']", {
  isArray: true,
}).grab$(postSlice);

export type Posts = InferType<typeof getPostsQuery>;
export type Post = Posts[number];
