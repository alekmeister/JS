// https://leetcode.com/problems/valid-parentheses/description/


const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']'
}

var isValid = function (s) {
    const stack = []

    for (char of s) {
        if(char in bracketsMap) { // открывающая
            stack.push(char)
            continue
        }
        const last = stack.pop()
        if(char !== bracketsMap[last]) { // закрывающая
            return false
        }
    }

    return stack.length === 0
};
