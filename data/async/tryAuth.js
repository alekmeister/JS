// Функция tryAuth() использует auth() и, в случае ошибки, совершает N дополнительных попыток.
// В случае, если все попытки провалились - вернуть последнюю ошибку.


const auth = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('res')
        }, 100)
    })
}

async function tryAuth(n) {
    if(n < 1) throw new Error('invalid value')
    try {
        return await auth()
    } catch (err) {
        if (n === 1) {
            throw new Error(err)
        }
        return tryAuth( n - 1)
    }
}

tryAuth(3).then(console.log)

