// Given a binary array nums, you should delete one element from it.
//
// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
//
//
//
// Example 1:
//
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:
//
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:
//
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    //              6
    // [0,1,1,1,0,1,1,0,1]
    //    1

    let begin = 0,
        windowSize = 0, // 2 1
        result = 0

    for (let end = 0; end < nums.length; end++) {
        if(nums[end] === 0) windowSize++

        while(windowSize > 1) {
            if(nums[begin] === 0) windowSize--
            begin++
        }
        result = Math.max(result, end - begin + 1)
    }
    return result - 1 // удаляем 1 т.к. 0 входит в результат, а он может быть только один.
};
