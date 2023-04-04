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
      <div
        style={{
          background: "var(--surface0)",
          padding: "1rem",
          borderRadius: "var(--border-radius)",
        }}
      >
        <p style={{ fontSize: "1.15rem" }}>
          Created by{" "}
          <a
            href="https://royalfoxy.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manuel Oesch
          </a>{" "}
          at{" "}
          <a href="https://liip.ch" target="_blank" rel="noopener noreferrer">
            Liip
          </a>{" "}
          under the{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/2.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            creative commons (CC BY-SA 2.0)
          </a>{" "}
          License.
        </p>
      </div>
    </footer>
  );
}
