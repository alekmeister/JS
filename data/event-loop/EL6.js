const promise = new Promise((res) => {
    console.log('foo');

    setTimeout(() => {
        console.log('bar');
        res();
    }, 0);
});

console.log('baz');

promise.then(() => console.log('jazz'));


//foo
//baz
//bar
//jazz
