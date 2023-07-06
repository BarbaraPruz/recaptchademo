import { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}
const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    className="px-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
  >
    {children}
  </a>
);

export default ExternalLink;
