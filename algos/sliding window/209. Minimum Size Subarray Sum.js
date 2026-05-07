//https://leetcode.com/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {

    let windowState = 0
    let begin = 0
    let result = Infinity

    for (let end = 0; end < nums.length; end++) {
        windowState += nums[end]
        while(windowState >= target) {
            result = Math.min(result, end - begin + 1)
            windowState -=nums[begin]
            begin++
        }
    }
    return result === Infinity ? 0 : result

};
minSubArrayLen(11, [1,2,3,4,5])

//    s
// [2,3,1,2,4,3]
//        e
