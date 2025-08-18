const foo = {
    item: 1,
    func1: function() {
        console.log(this.item);
    },
    func2() { // просто сокращение, тоже самое что и 1
        console.log(this.item);
    },
    func3: () => {
        console.log(this.item);
    },
    func4: function() {
        return () => {
            console.log(this.item);
        };
    }
};

foo.func1();
foo.func2();
foo.func3();
foo.func4()();
const func5 = foo.func2
func5()
foo.func6 = foo.func2
foo.func6()

const x = {
    foo: '10'
}

const y = {
    foo: '20'
}

const func7 = function () {
    console.log(this.foo)
}

const binded = func7.bind(x)
binded()

//1
//1
//undefined стрелочная функция смотрит на скоуп выше (в родительскую, в данном случае window)
//1
//undefined
//1
