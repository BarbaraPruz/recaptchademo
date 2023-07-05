import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => (
  <h1 className="text-4xl font-semibold text-center mb-10">{children}</h1>
);

export default Title;
