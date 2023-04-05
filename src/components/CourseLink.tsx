import { useLocalStorage } from "@/hooks/useLocalStorage";
import ExternalLink from "./ExternalLink";

export interface CourseLink {
  link: string;
  lang: "html" | "css" | "js";
}

export default function CourseLink({ link, lang }: CourseLink) {
  const name =
    link
      .match(
        /https:\/\/www\.w3schools\.com\/(html|css|js)\/((html|css|js)[0-9]?_)?(.*)\.asp/
      )
      ?.slice(-1)[0]
      .replaceAll("_", " ") || "";

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
      <ExternalLink link={link} onClick={() => setVisited(true)}>
        <h4
          style={{
            textAlign: "center",
            color: visited ? "var(--green)" : "var(--red)",
            transition: "all 0.5s ease",
          }}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h4>
      </ExternalLink>
    </div>
  );
}
