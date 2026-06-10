// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []

    for (let char of s) {
        const lastStackEl = stack.at(-1)

        if(lastStackEl === char) {
            stack.pop()
            continue
        }
        stack.push(char)
    }

    return stack.join("")
};
