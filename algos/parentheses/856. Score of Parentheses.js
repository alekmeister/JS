// символ:   (  (  )  (  (  (  )  )  )  )
// счётчик:  1  2  1  2  3  4  3  2  1  0


var scoreOfParentheses = function(s) {
    let depth = 0
    let result = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            depth++
            continue
        }
        depth--
        if (s[i - 1] === '(') result += 2 ** depth
    }

    return result
};
