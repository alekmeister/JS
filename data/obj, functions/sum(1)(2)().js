

function sum (a) {
    let counter = a
    const innerSum = (b) => {
        if(typeof b === 'undefined') { // отличие typeof b === 'undefined' и b === undefined в том, что если переменная не объявлена, то в первом случае сравнение будет корректное, во втором нет
            return counter
        }
        counter += b
        return innerSum
    }
    return innerSum
}



console.log(sum(1)(2)(3)())
console.log(sum(1)(2)())
