/*
Необходимо написать функцию, которая принимает два аргумента - асинхронную функцию и временной лимит в миллисекундах.
Функция должна возвращать новую версию асинхронной функции, выполнение которой ограничено временным лимитом. Должны выполняться следующие условия:
- Если время выполнение исходной функции меньше временного лимита, то новая функция должна вернуть результат выполнения асинхронной функции.
- Если время выполнение исходной функции больше временного лимита, то новая функция вернуть сообщение "Превышен лимит времени исполнения".
*/

const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));

    return n * n;
}

asyncLimit(fn, 50)(5).catch(console.log)  // rejected: Превышен лимит времени исполнения
asyncLimit(fn, 150)(5).then(console.log) // resolved: 25


const fn2 = async (a, b) => {
    await new Promise(res => setTimeout(res, 120));

    return a + b;
}

asyncLimit(fn2, 100)(1, 2).catch(console.log); // rejected: Превышен лимит времени исполнения
asyncLimit(fn2, 150)(1, 2).then(console.log); // resolved: 3

function asyncLimit (fn, limit) {
    return (...args) => {
        return Promise.race([
            new Promise((res, rej) => setTimeout(() => rej('Превышен лимит времени исполнения'), limit)),
            fn(...args)
        ])
    }
}
