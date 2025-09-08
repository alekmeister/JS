(function () {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    Promise.resolve(5).then(console.log);
    new Promise(resolve => {
        console.log(6);
        resolve(7);
    }).then(console.log);
    console.log(4);
})();
























//1 6 4 5 7 3 2
