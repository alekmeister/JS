/* eslint-disable */

declare global {
  interface Array<T> {
    myMap<U>(callback: (el: T, i: number, arr: T[]) => U): U[];
  }
}

// Реализация метода myMap
Array.prototype.myMap = function <T, U>(
  cb: (el: T, i: number, arr: T[]) => U,
): U[] {
  const result: U[] = [];

  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      // ✅ Самая быстрая проверка sparse-массивов
      result.push(cb(this[i], i, this));
    }
  }

  return result;
};

export const x: number[] = [1, 2, 3, 4]; //Без экспорта будет ругаться на declare global

console.log(x.myMap((el, i) => el * 2)); // [0, 2, 4, 6]
