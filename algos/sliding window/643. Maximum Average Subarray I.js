// https://leetcode.com/problems/maximum-average-subarray-i/description

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //  *
    // [1,12,-5,-6,50,3]
    //           *
    let result = -Infinity
    let begin = 0
    let windowState = 0 //2


    for(let end = 0; end < nums.length; end++) {

        windowState += nums[end]

        if(end - begin + 1 === k) {
            result = Math.max(result, windowState)
            windowState -= nums[begin]
            begin++
        }

    }
    return result / k
};
