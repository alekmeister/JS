var searchInsert = function(nums, target) {

    let [left, right] = [0, nums.length]

    while (left < right) {
        const mid = Math.floor((right + left) / 2)

        if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }

    }
    return left

};
