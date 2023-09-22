import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

type PortableTextProps = {
  value: TypedObject;
};

export const PortableText = (props: PortableTextProps) => {
  const { value } = props;
  return <PortableTextReact value={value} />;
};
