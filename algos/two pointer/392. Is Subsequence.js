//https://leetcode.com/problems/is-subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (sub, orig) {
    let [subP, origP] = [0, 0]
    //  *
    // "abc"
    // "ahbgdc"
    //  *

    for (; origP < orig.length; origP++) {
        const [subVal, origVal] = [sub[subP], orig[origP]]

        if(subVal === origVal) {
            subP++
        }
    }

    return subP === sub.length
};
