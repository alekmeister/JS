//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
//
//
//
// Example 1:
//
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:
//
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


var longestOnes = function(nums, k) {
    //            *
    // [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
    // *

    //        *
    // [0,0,0,1]
    // *

    let begin = 0,
        windowSize = 0,
        result = 0

    for (let end = 0; end < nums.length; end++) {
        if(nums[end] === 0) windowSize++
        while(windowSize > k) {
            if(nums[begin] === 0) windowSize--
            begin++
        }
        result = Math.max(result, end - begin + 1)
    }
    return result
};
