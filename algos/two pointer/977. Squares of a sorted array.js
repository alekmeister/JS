//https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // *
    // [-4,-1,0,3,10]
    //           *

    let left = 0
    let right = nums.length - 1
    const res = Array.from({length: nums.length})

    for(let i = nums.length - 1; i>= 0; i-- ) {
        const [leftSqua, rightSqua] = [nums[left]**2, nums[right]**2]

        if(rightSqua > leftSqua) {
            res[i] = rightSqua
            right--
        } else {
            res[i] = leftSqua
            left++
        }
    }
    return res
};

var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = new Array(nums.length);
    let pos = nums.length - 1; // заполняем с конца

    while (left <= right) {
        const [leftSq, rightSq] = [nums[left] ** 2, nums[right] ** 2];

        if (rightSq > leftSq) {
            result[pos--] = rightSq;
            right--;
        } else {
            result[pos--] = leftSq;
            left++;
        }
    }

    return result;
};
