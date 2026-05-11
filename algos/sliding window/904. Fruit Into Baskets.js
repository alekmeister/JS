//https://leetcode.com/problems/fruit-into-baskets



/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {

    // *
    // [3,3,3,1,2,1,1,2,3,3,4] //5
    //  *


    let begin = 0,
        windowSize = new Map(),
        result = 0


    for (let end = 0; end < fruits.length; end++ ) {
        const currentVal = windowSize.has(fruits[end]) ? windowSize.get(fruits[end]) : 0

        windowSize.set(fruits[end], currentVal + 1)

        while(windowSize.size > 2) {
            const winVal = windowSize.get(fruits[begin])
            windowSize.set(fruits[begin], winVal - 1)
            if(windowSize.get(fruits[begin]) === 0) {
                windowSize.delete(fruits[begin])
            }
            begin++
        }
        result = Math.max(result, end - begin + 1)

    }
    return result
};
