// Тестовые данные: массив чисел от 0 до 4
const test: number[] = Array.from(Array(5), (_, index) => index);

// Создаем массив промисов с задержкой
const promises = test.map((item, index) => {
    return new Promise((resolve) =>
        setTimeout(() => resolve(index), index * 100)
    );
});

// Добавляем промис, который завершается с ошибкой
promises.push(new Promise((_, reject) => reject('MyError')));

// Реализация функции promiseAll ПОСМОТРЕТЬ
const promiseAll = <T>(promises: Promise<T>[]): Promise<T[]> => {
    const result: T[] = [];
    let counter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((pr, idx) => {
            pr.then((res) => {
                result[idx] = res as T;
                counter += 1;
                if (counter === promises.length) resolve(result);
            }).catch(reject);
        });
    });
};

// Использование функции
promiseAll(promises)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

const promiseAny = function(promisesArray) {
    const promiseErrors = new Array(promisesArray.length);
    let counter = 0;

    return new Promise((resolve, reject) => {
        promisesArray.forEach((promise, index) => {
            promise
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


function promiseWithResolvers() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve,
        reject
    };
}

const getResult = (id) =>
    new Promise((resolve) => {
        console.log('Fetching result for ', id);
        setTimeout(() => resolve(`Result - ${id}`), 500);
    });

const memoize = (fn) => {
    const cache = new Map();

    return async (...args) => {
        const stringArgs = JSON.stringify(args);
        if (cache.has(stringArgs)) {
            console.log('from cache');
            return cache.get(stringArgs);
        }

        const res = fn(...args).then
        cache.set(stringArgs, res);

        return res;
    };
};

const memoizedGetResult = memoize(getResult);

memoizedGetResult(1).then((r) => console.log(1, r));
memoizedGetResult(1).then((r) => console.log(1, r));
memoizedGetResult(2).then((r) => console.log(2, r));
memoizedGetResult(2).then((r) => console.log(2, r));

// Extra question
// setTimeout(() => {
//   memoizedGetResult(3).then((r) => console.log(3, r));
//   memoizedGetResult(1).then((r) => console.log(1, r));
// }, 1000);
