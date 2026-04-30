/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //         *
    // [1,3,12,0,0]
    //           *
    // *
    // [0,1,0,3,12]
    //    *
    let [left, right] = [0, 0]

    while(right < nums.length) {
        if(nums[right] !==0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
};
