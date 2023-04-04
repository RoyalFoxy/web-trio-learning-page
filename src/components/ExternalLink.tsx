import { ReactNode } from "react";

interface ExternalLink {
  link: string;
  children: ReactNode | ReactNode[];
}

export default function ExternalLink({ link, children }: ExternalLink) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
