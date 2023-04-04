import Gradient from "@/css/gradient";

interface NotFound {
  error?: string;
}

export default function NotFound({ error }: NotFound) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        animation: "fade-in 1.5s ease",
      }}
    >
      <h1
        style={{
          fontSize: "10rem",
          ...Gradient({ from: "#ff8a00", to: "#dd4c4f" }),
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Invalid route</h2>
      <p style={{ fontSize: "1.2rem" }}>
        {error || "Something unexpected happened..."}
      </p>
    </div>
  );
}
