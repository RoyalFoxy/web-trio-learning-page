import LangLink from "@/components/LangLink";
import Gradient, { CustomGradient } from "@/css/gradient";
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
          ...CustomGradient(
            "linear-gradient(to right, var(--html-to) 0%, var(--css-to) 50%, var(--js-to) 100%)"
          ),
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
        <LangLink link="html" name="HTML" />
        <LangLink link="css" name="CSS" />
        <LangLink link="js" name="JavaScript" />
      </div>
    </div>
  );
}
