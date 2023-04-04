import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "../404";

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
      style={{ display: "flex", flexDirection: "column", alignItems: "center", animation: "fade-in 1.5s ease" }}
    >
      <h1 style={{ fontSize: "3rem" }}>
        {lang.charAt(0).toUpperCase() + lang.slice(1)}
      </h1>
      <Link href="/">
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
          return <FLink link={link} lang={lang as "html" | "css" | "js"} />;
        })}
      </div>
    </div>
  );
}

interface FLink {
  link: string;
  lang: "html" | "css" | "js";
}

function FLink({ link, lang }: FLink) {
  const name = link
    .replace(
      /(https:\/\/www\.w3schools\.com\/(html|css|js)\/((html|css|js)_)?(.*)\.asp)/,
      "$5"
    )
    .replace("_", " ");

  const [visited, setVisited] = useLocalStorage(
    `${lang}-${name}`,
    (key) => {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : false;
    },
    (key, value) => localStorage.setItem(key, JSON.stringify(value))
  );

  return (
    <div
      key={link}
      style={{
        background: "var(--surface0)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          setVisited(true);
        }}
      >
        <h4
          style={{
            textAlign: "center",
            color: visited ? "var(--green)" : "var(--red)",
            transition: "all 0.5s ease",
          }}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h4>
      </a>
    </div>
  );
}

export function useLocalStorage<T>(
  key: string,
  getter: (key: string) => T,
  setter: (key: string, value: T) => void
) {
  const [value, setValue] = useState(getter(key));
  useEffect(() => setValue(getter(key)), [key]);
  useEffect(() => setter(key, value), [key, value]);

  return [value, setValue] as const;
}
