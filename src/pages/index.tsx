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
          background: "linear-gradient(to right, #ff8a00 0%, #dd4c4f 100%)",
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
        <FLink
          link="html"
          name="HTML"
          gradient={{ from: "#d55a36", to: "#f06429" }}
        />
        <FLink
          link="css"
          name="CSS"
          gradient={{ from: "#0170bb", to: "#27a8de" }}
        />
        <FLink
          link="js"
          name="JavaScript"
          gradient={{ from: "#e4a126", to: "#f0be25" }}
        />
      </div>
    </div>
  );
}

interface FLink {
  link: string;
  name: string;
  gradient: {
    from: string;
    to: string;
  };
}

function FLink({ link, name, gradient: { from, to } }: FLink) {
  return (
    <Link
      href={`/${link}`}
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
          background: `linear-gradient(to right, ${from} 0%, ${to} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {name}
      </h2>
    </Link>
  );
}
