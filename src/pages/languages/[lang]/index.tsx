import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "../../404";
import Gradient from "@/css/gradient";
import CourseLink from "@/components/CourseLink";

export default function Home() {
  const [links, setLinks] = useState<string[]>([]);

  const router = useRouter();
  let { lang } = router.query;

  const valid = ["html", "css", "js"].includes((lang || "") as string);

  useEffect(() => {
    if (!valid) return;
    (async () =>
      setLinks(
        (await (await fetch(`/api/links?lang=${lang}`)).json()).links
      ))();
  }, [lang]);

  if (!valid) return <NotFound error="Invalid Language page." />;

  lang = lang as string;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: "fade-in 1.5s ease",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          ...Gradient({ from: `var(--${lang}-from)`, to: `var(--${lang}-to)` }),
        }}
      >
        {lang.charAt(0).toUpperCase() + lang.slice(1)}
      </h1>
      <Link href="/" style={{ color: "var(--text)" }}>
        <h3 style={{ marginBottom: "1rem" }}>Go Home</h3>
      </Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minMax(150px, 1fr))",
          width: "calc(100vw - var(--margin) * 2)",
          gap: "0.5rem",
        }}
      >
        {links.map((link) => {
          return (
            <CourseLink link={link} lang={lang as "html" | "css" | "js"} />
          );
        })}
      </div>
    </div>
  );
}
