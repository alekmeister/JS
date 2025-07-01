// Работает по принципу LIFO. Last In First Out
// Добавление и удаление происходит в конец за O(1)
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}


const OPEN_BRACKETS = ['(', '{', '[']

const BRACKET_MAP = {
    ')' : '(',
    '}' : '{',
    ']' : '['
}
// скобочная последовательность
const isCorrectBracketSeq = (sequence) => {
    const stack = []
    if(!sequence.length) return "True"

    for (const bracket of sequence) {
        if(OPEN_BRACKETS.includes(bracket)) {
            stack.push(bracket)
        } else {
            if( stack.pop() !== BRACKET_MAP[bracket]) {
                return 'False'
            }
        }

    }
    return  stack.length ? 'False' : 'True'
}
