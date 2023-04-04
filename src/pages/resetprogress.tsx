import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ResetProgress() {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();
    router.back();
  });

  return <></>;
}
