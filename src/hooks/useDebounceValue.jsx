import { useEffect, useState } from "react";

export const useDebounceValue = (input) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return {
    debouncedValue,
  };
};
