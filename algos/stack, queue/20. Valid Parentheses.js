// https://leetcode.com/problems/valid-parentheses/description/


const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']'
}


var isValid = function (s) {
    const stack = []

    for (let char of s) { // )
        if(char in bracketsMap) {
            stack.push(char)
        } else {
            const lastStackEl = stack.pop() // (
            if(bracketsMap[lastStackEl] !== char) return false;
        }
    }

    return !stack.length

};

isValid('()')
