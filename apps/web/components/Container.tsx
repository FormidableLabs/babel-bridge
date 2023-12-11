import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <div className="max-w-4xl mx-auto p-4">{children}</div>;
};
