import { MouseEventHandler, ReactNode } from "react";

interface ExternalLink {
  link: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode | ReactNode[];
}

export default function ExternalLink({
  link,
  children,
  onClick,
}: ExternalLink) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}
