//https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} string
 * @return {string}
 */
//  *
//  IceCreAm
//         *

var reverseVowels = function(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u']
    const s = string.split('')

    let [left, right] = [0, s.length - 1]

    while (left < right) {

        const [leftCurrent, rightCurrent] = [s[left].toLowerCase(), s[right].toLowerCase()]

        const leftIsVowel = VOWELS.includes(leftCurrent);
        const rightIsVowel = VOWELS.includes(rightCurrent);

        if(leftIsVowel && rightIsVowel) {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
            continue
        }

        if(!rightIsVowel) {
            right--
            continue
        }

        if(!leftIsVowel) {
            left++
        }

    }

    return s.join('')
};
