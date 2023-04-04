export interface Gradient {
  from: string;
  to: string;
}

export default function Gradient({ from, to }: Gradient) {
  return {
    background: `linear-gradient(to right, ${from} 0%, ${to} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}

export function CustomGradient(gradient: string) {
  return {
    background: gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}
