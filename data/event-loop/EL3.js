setTimeout(() => {
  console.log('timeOut');
}, 0);

console.log(1);

new Promise((resolve, reject) => {
  console.log('Promise');
    setTimeout(() => {
    console.log('777');
    resolve();
  }, 0);
})
  .then(() =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('then1');
          resolve();
        }, 0);
      }),
  )
  .then(() => {
    console.log('then2');
  });

console.log(4);

setTimeout(() => {
  console.log('timeOut2');
}, 0);





// 1, Promise, 4, timeOut, 777, timeOut2, then1, then2
