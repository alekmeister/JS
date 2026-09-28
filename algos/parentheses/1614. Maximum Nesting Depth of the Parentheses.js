var maxDepth = function(s) {


    let maxResult = 0
    let currentResult = 0

    for(const char of s) {
        if(char === '(') {
            currentResult++
            maxResult = Math.max(maxResult, currentResult)
        }

        if(char === ')') {
            currentResult--
        }
    }

    return maxResult
};
