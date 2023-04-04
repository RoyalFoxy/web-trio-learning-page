import { useLocalStorage } from "@/hooks/useLocalStorage";

export interface CourseLink {
  link: string;
  lang: "html" | "css" | "js";
}

export default function CourseLink({ link, lang }: CourseLink) {
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
