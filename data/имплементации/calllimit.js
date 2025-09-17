/**
 * Написать декоратор для функции, который ограничивает число вызовов.
 *
 * calllimit(fn, limit, callback), принимает следующие аргументы:
 * fn - функция, которую декорируем;
 * limit - максимальное число вызовов;
 * callback - вызывается, когда совершен последний вызов. Опционально.
 * У вызываемой функции должен быть метод для перезагрузки счётчика в начальное положение.
 */



function calllimit(fn, limit, callback) {
    let count = 1


    const limitedFunction = (...args) => {
        if(count > limit ) return
            fn(...args)
        if(limit === count) {
            callback && callback()
        }
        count++
    }

    limitedFunction.reset = () => {
        count = 0
    }

    return limitedFunction

}

function log(title, message) {
    console.log(title + ': ' + message);
}

var loglimited = calllimit(log, 3);

loglimited('title', 'desc');
// Console output:
// title: desc

loglimited('title2', 'desc');
// Console output:
// title2: desc

loglimited('title3', 'desc');
// Console output:
// title3: desc

loglimited('title4', 'desc'); // Этот не сработает
// В консоль ничего не вывелось

loglimited.reset(); // Перезагрузили счётчик
// Можно еще 3 раза вызвать

loglimited('title5', 'desc');
// Console output:
// title5: desc

loglimited('title6', 'desc');
// Console output:
// title6: desc

loglimited('title7', 'desc');
// Console output:
// title7: desc

// var loglimited2 = calllimit(log, 2, () => console.log('finish'));
// loglimited2('foo', 'bar');
// // Console output:
// // foo: bar
//
// loglimited2('foo2', 'bar');
// // Console output:
// // foo2: bar
// // finish
