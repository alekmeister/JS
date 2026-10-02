const digitsMap = {
    2: ['a','b','c'],
    3: ['d','e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w','x', 'y', 'z'],

}


var letterCombinations = function(digits) {


    let result = ['']

    for(const digit of digits) {
        const letters = digitsMap[digit] // ['a','b','c'],

        const currentResult = []

        for (const oldChar of result) { // ['']
            for(const newChar of letters) { // [a]
                currentResult.push(oldChar + newChar)
            }
        }
        result = currentResult
    }

    return result
};
