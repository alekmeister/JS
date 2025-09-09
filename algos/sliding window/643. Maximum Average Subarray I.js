// You are given an integer array nums consisting of n elements, and an integer k.
//
//Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
//Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
//
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:
//
// Input: nums = [5], k = 1
// Output: 5.00000


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    //        *
    //  [1,12,-5,-6,50,3]
    //                 *


    let result = -Infinity //2, 51
    let begin = 0 //1, 2
    let windowState = 0 //2 - 1 = 1, 1+50 = 51, 51-12 = 39, 39+3=42,

    for (let end = 0; end < nums.length; end++) {
        windowState = windowState + nums[end]
        if(end - begin + 1 === k) {
            result = Math.max(result, windowState)
            windowState -= nums[begin]
            begin++
        }

    }
    return result / k
};
