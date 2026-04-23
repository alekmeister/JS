//https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} str
 * @return {boolean}
 */


var isPalindrome = function (str) {

    const s = str.replace(/[^a-zA-Z0-9]/g, '')

    let [left, right] = [0, s.length - 1]
    console.log(left, right)
    while (left < right) {
        const [leftChar, rightChar] = [s[left].toLowerCase(), s[right].toLowerCase()]

        if(leftChar === rightChar) {
            left++
            right--
            continue
        }
        return false
    }
    return true
};




