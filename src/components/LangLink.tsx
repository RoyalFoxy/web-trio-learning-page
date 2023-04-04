import Gradient from "@/css/gradient";
import Link from "next/link";

export interface LangLink {
  link: string;
  name: string;
}

export default function LangLink({ link, name }: LangLink) {
  return (
    <Link
      href={`/languages/${link}`}
      style={{
        background: "var(--surface0)",
        padding: "0.5rem",
        borderRadius: "var(--border-radius)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          ...Gradient({ from: `var(--${link}-from)`, to: `var(--${link}-to)` }),
        }}
      >
        {name}
      </h2>
    </Link>
  );
}
