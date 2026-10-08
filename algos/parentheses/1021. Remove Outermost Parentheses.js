var removeOuterParentheses = function (s) {
    let counter = 0
    let closedBracketsIndexes = []

    const result = []
    for (let i = 0; i < s.length; i++) {


        if (s[i] === '(') {
            counter++
        } else {
            counter--
        }

        if (counter === 0) closedBracketsIndexes.push(i);
    }

    let prev = 1
    for(let closeIdx of closedBracketsIndexes) {
        result.push(s.slice(prev, closeIdx))
        prev = closeIdx + 2
    }

    return result.join('')
};


removeOuterParentheses("(()())(())")

var removeOuterParentheses2 = function (s) {
    let counter = 0
    let result = ''

    for (const ch of s) {
        if (ch === ')') counter--
        if (counter > 0) result += ch
        if (ch === '(') counter++
    }

    return result
}

