console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch((res) => console.log(res));

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);





















// Ожидаемый вывод:
// 1
// 6
// 3
// 5
// 2
// 4
// 7
