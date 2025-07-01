const promiseAny = function(promisesArray) {
    const promiseErrors = new Array(promisesArray.length);
    let counter = 0;

    //return a new promise
    return new Promise((resolve, reject) => {
        promisesArray.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch((error) => {
                    promiseErrors[index] = error;
                    counter = counter + 1;
                    if (counter === promisesArray.length) {

                        reject(promiseErrors);
                    }
                });
        });
    });
};
