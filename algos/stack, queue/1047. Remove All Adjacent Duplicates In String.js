// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []

    for (char of s) {
        if(char === stack.at(-1)) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};
