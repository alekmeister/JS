let name = "Bacя";

function sayHi() {
    console.log(name);
}

setTimeout(function() {
    let name = "Петя";
    sayHi();
}, 1000);

// Вася

// ---------------------

const obj = {
    "0": 1,
    0: 2,
}

console.log(obj["0"], obj[0]) //2, 2


let y = 5
console.log( y++)
console.log(y)

