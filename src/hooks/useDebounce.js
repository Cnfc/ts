import { useCallback, useRef } from "react";

// ===================  v1  ===================================
export function useDebouncedFunction(func, delay) {
  const ref = useRef(null);

  return (...args) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => func(...args), delay);
  };
}

// ===================== v2 ==================================
export function useDebouncedFunction2(func, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// ===================   v3    ===========================
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

//  ======================  v4  =====================
