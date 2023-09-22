import { q } from "groqd";
import type { Selection } from "groqd";

export const postSlice = {
  _id: q.string(),
  title: q.string(),
  slug: q.slug("slug"),
  body: q.array(q.contentBlock()),
} satisfies Selection;
