import { useCallback, useEffect, useRef } from 'react';

type SomeFunction = (...args: any[]) => void;
type Timer = ReturnType<typeof setTimeout>;

function useDebounce<T extends SomeFunction>(func: T, delay: number) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (...args: Parameters<T>) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };

  return useCallback(debouncedFunction, [func, delay]);
}
