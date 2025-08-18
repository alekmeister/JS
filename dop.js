

// Функция tryAuth() использует auth(), и в случае ошибки совершает N дополнительных попыток.
// В случае, если все попытки провалились — возвращает последнюю ошибку.

function asyncAuth(callback) {
    // Симуляция асинхронного процесса (например, запрос к серверу)
    setTimeout(() => {
        const success = false; // Условие успеха/неудачи (например, результат проверки)
        if (success) {
            callback(null, { message: "Authentication successful!" }); // В случае успеха передаем null (ошибки) и данные
        } else {
            callback("Authentication failed", null); // В случае ошибки передаем ошибку и null в данных
        }
    }, 100); // Задержка 1 секунда
}

function auth() {
    return new Promise((resolve, reject) => {
        asyncAuth((err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}



async function tryAuth(n) {
        if (n >= 0) {
            auth().then(data => {
                return data
            }).catch((err) => {
                if(n === 0) {
                    throw err
                }
                tryAuth(n - 1)
            })
        }
}


// Попытка выполнить `tryAuth(10)` и обработать ошибку:
tryAuth(10)
    .then(console.log)
    .catch(console.log);

// Пример с несколькими попытками:
// tryAuth(2)
//     .then(() => tryAuth(1))
//     .then(() => tryAuth(0))
//     .then(() => tryAuth(-1));





