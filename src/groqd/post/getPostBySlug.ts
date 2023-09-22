import { q } from "groqd";
import { postSlice } from "./slices";

export const getPostBySlug = q(
  "*[_type == 'post' && slug.current == $slug][0]"
).grab$(postSlice);
