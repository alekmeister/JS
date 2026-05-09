// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    //                 b
    // [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1]
    //                       e
    let begin = 0
    let windowSize = 0 // 1
    let result = 0

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0)  windowSize++;

        while (windowSize > 1) {
            if (nums[begin] === 0) windowSize--;
            begin++
        }

        result = Math.max(result, end - begin)
    }
    return result

};

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
