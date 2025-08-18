/* eslint-disable */
const func1 = async () => {
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  Promise.resolve().then(() => console.log('3'));
};

const func2 = async () => {
  setTimeout(() => console.log('4'), 1);
  console.log('5');
  Promise.resolve().then(() => setTimeout(() => console.log('6'), 0));
};

const importValue = new Promise((res) => {
  console.log('7');
  Promise.resolve().then(() => console.log('8'));
  setTimeout(() => {
    res();
    console.log('13');
  }, 5);
});

await importValue;
console.log('9');

Promise.resolve().then(() => console.log('10'));

await func2();
console.log('11');

func1();

console.log('12');

// 7 8 13 9 5 10 11 1 12 3 6 2 4
