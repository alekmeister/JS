var minInsertions = function (s) {

    let open = 0
    let result = 0


    let i = 0

    while (i < s.length) {
        const bracket = s[i]

        if (bracket === '(') {
            open++
            i++
        }

        if (bracket === ')') {
            if (s[i + 1] === ')') {
                i += 2
            }
            else {
                result++
                i++
            }


            if(open > 0) {
                open--
            } else {
                result++
            }
        }
    }

    return result + 2 * open
};
