/* eslint-disable */

declare global {
  interface Array<T> {
    myReduce(
      callbackfn: (
        previousValue: T,
        currentValue: T,
        currentIndex: number,
        array: T[],
      ) => T,
    ): T;
    myReduce(
      callbackfn: (
        previousValue: T,
        currentValue: T,
        currentIndex: number,
        array: T[],
      ) => T,
      initialValue: T,
    ): T;
    myReduce<U>(
      callbackfn: (
        previousValue: U,
        currentValue: T,
        currentIndex: number,
        array: T[],
      ) => U,
      initialValue: U,
    ): U;
  }
}

Array.prototype.myReduce = function <T, U>(
  cb:
    | ((prev: U, el: T, i: number, arr: T[]) => U)
    | ((prev: T, el: T, i: number, arr: T[]) => T),
  accum?: U | T,
): U | T {
  const length = this.length;
  let i = 0;
  let acc: U | T;

  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }
  if (length === 0 && accum === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  if (accum === undefined) {
    acc = this[0];
    i++;
  } else {
    acc = accum;
  }

  for (; i < length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = cb(acc as any, this[i], i, this); // 👈 Приводим acc к `any`, так как TypeScript не может вывести его тип однозначно
    }
  }

  return acc;
};

//tests
export const testArr = [5, 10, 15];
console.log(testArr.myReduce((acc, el) => acc + el, 10)); // 40
console.log(testArr.myReduce((acc, el) => acc + el)); // 30
console.log([].myReduce((acc, el) => acc + el, 1)); // 1
console.log([].myReduce((acc, el) => acc + el)); // Err
console.log([].reduce((acc, el) => acc + el)); // Err
