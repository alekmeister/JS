/* eslint-disable */
import { type DependencyList, useCallback, useRef } from 'react';

type AnyFunc = (...args: any[]) => void;

export const useThrottle = <T extends AnyFunc>(
  fn: T,
  delay: number,
  dependency: DependencyList = [],
) => {
  let lastTime = 0;

  return useCallback((...arg: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime > delay) {
      fn(...arg);

      lastTime = now;
    }
  }, dependency);
};
