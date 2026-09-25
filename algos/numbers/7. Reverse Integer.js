
// вылазит за 32 бита по условию
var reverse = function (x) {
    const minBorder = -(2 ** 31)
    const maxBorder = 2 ** 31 - 1

    const isMinus = x < 0

    const absString = Math.abs(x).toString()

    let arr = [...absString]

    while (arr.at(-1) === '0') {
        arr.pop()
    }

    const absResult = Number(arr.reverse().join(''))
    const currentResult = isMinus ? -absResult : absResult

    if (currentResult < minBorder || currentResult > maxBorder) return 0;

    return currentResult

};

// правильное решение
var reverse2 = function (x) {
    const LIMIT = 214748364 // 2 147 483 647 без последней цифры

    let result = 0

    while (x !== 0) {
        const digit = x % 10    // последняя цифра; для -123 это -3
        x = Math.trunc(x / 10)  // отрезаем её: -123 → -12 (Math.floor дал бы -13)

        // проверяем ДО умножения, поместится ли result * 10 + digit
        if (result > LIMIT || (result === LIMIT && digit > 7)) return 0
        if (result < -LIMIT || (result === -LIMIT && digit < -8)) return 0

        result = result * 10 + digit
    }

    return result
}
