import { useEffect, useState } from "react";

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
