function ConstructorA(a, b) {
    this.a = a;
    this.b = b;
    return {
        h: 3,
        r: 5
    }
}

var c = new ConstructorA(1, 2);

console.log(c); // {h: 3, r: 5}

function ConstructorB(a, b) {
    this.a = a;
    this.b = b;
    return 1
}

var d = new ConstructorB(1, 2);

console.log(d); // {a: 1, b: 2}
