// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description


var removeDuplicates = function(nums) {

    let [left, right] = [0,0]
    for (; right < nums.length; right++) {
        if(nums[left] !== nums[right]) {
            left++
            nums[left] = nums[right]
        }
    }

    return left + 1
};

