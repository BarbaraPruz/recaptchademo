import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  additionalClasses?: string;
};

export const Subtitle = ({ additionalClasses, children }: Props) => (
  <h2 className={`text-2xl mb-5 ${additionalClasses}`}>{children}</h2>
);

export default Subtitle;
