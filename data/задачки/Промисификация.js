/**
 * Функция `asyncAuth(callback)` принимает callback, в который
 * должна быть передана ошибка (первым аргументом) и данные
 * с бэкэнда (вторым аргументом).
 *
 * Вам нужно реализовать функцию `auth()`,
 * которая вызывает `asyncAuth()`, но возвращает Promise.
 *
 * @returns {Promise}
 */
function asyncAuth(callback) {
    // Симуляция асинхронного процесса (например, запрос к серверу)
    setTimeout(() => {
        const success = false; // Условие успеха/неудачи (например, результат проверки)
        if (success) {
            callback(null, { message: "Authentication successful!" }); // В случае успеха передаем null (ошибки) и данные
        } else {
            callback(new Error("Authentication failed"), null); // В случае ошибки передаем ошибку и null в данных
        }
    }, 1000); // Задержка 1 секунда
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

auth().then(console.log).catch(console.log);
// await auth();
