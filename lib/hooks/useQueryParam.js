import { useMemo } from "react";
import { useRouter } from "next/router";

export const useQueryParam = (key) => {
  const { asPath } = useRouter();

  const value = useMemo(() => {
    const match = asPath.match(new RegExp(`[&?]${key}=(.*?)(&|$)`));
    if (!match) return undefined;
    return decodeURIComponent(match[1]);
  }, [asPath, key]);

  return value;
};
