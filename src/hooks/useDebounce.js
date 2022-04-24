import { useCallback, useRef } from "react";

export function useDebouncedFunction(func, delay) {
  const ref = useRef(null);

  return (...args) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => func(...args), delay);
  };
}

export function useDebouncedFunction2(func, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function useDebounce(callback, delay) {
  const timer = useRef(null);

  const deboundecCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
  return deboundecCallback;
}
