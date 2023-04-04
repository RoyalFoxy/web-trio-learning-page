import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        animation: "fade-in 1.5s ease",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          background:
            "linear-gradient(to right, var(--html-to) 0%, var(--css-to) 50%, var(--js-to) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Web Trio
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minMax(300px, 1fr))",
          gap: "1rem",
          width: "calc(100vw - var(--margin) * 2)",
        }}
      >
        <FLink link="html" name="HTML" />
        <FLink link="css" name="CSS" />
        <FLink link="js" name="JavaScript" />
      </div>
    </div>
  );
}

interface FLink {
  link: string;
  name: string;
}

function FLink({ link, name }: FLink) {
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
          // textAlign: "center",
          background: `linear-gradient(to right, var(--${link}-from) 0%, var(--${link}-to) 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {name}
      </h2>
    </Link>
  );
}
