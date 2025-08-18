
declare global {
  interface Array<T> {
    myFilter(cb: (el: T, index: number, arr: T[]) => boolean): T[];
  }
}

Array.prototype.myFilter = function <T>(
  this: T[],
  cb: (el: T, index: number, arr: T[]) => boolean,
): T[] {
  if (typeof cb !== 'function') {
    throw new TypeError('Callback must be a function');
  }
  const result: T[] = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
export const a = 1;
