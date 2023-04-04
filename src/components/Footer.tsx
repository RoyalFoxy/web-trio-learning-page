import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <div
          style={{
            background: "var(--surface0)",
            padding: "1rem",
            borderRadius: "var(--border-radius)",
          }}
        >
          <p style={{ fontSize: "1.15rem" }}>
            Created by{" "}
            <ExternalLink link="https://royalfoxy.xyz/">
              Manuel Oesch
            </ExternalLink>{" "}
            at <ExternalLink link="https://liip.ch">Liip</ExternalLink> under
            the{" "}
            <ExternalLink link="https://creativecommons.org/licenses/by-sa/2.0/">
              creative commons (CC BY-SA 2.0)
            </ExternalLink>{" "}
            License.
          </p>
        </div>
        <div
          style={{
            background: "var(--surface0)",
            padding: "1rem",
            borderRadius: "var(--border-radius)",
          }}
        >
          <p style={{ fontSize: "1.15rem" }}>
            Hackable on{" "}
            <ExternalLink link="https://github.com/RoyalFoxy/web-trio-learning-page">
              Github
            </ExternalLink>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
