var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1



    while (left <= right) {
        const [leftVal, rightVal] = [nums[left], nums[right]]

        if(rightVal === val) {
            right--
            continue
        }

        if(leftVal === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            right--

        }
        left++
    }

    return left //т.к. в условии <= то left покажет длину списка без val
};
