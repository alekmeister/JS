

// переписать на On2
var threeSumClosest = function(nums, target) {

    let result = nums[0] + nums[1] + nums[2]

    for(let left = 0; left < nums.length - 2; left++) {
        for(let middle = left + 1; middle < nums.length - 1; middle++) {
            for (let right = middle + 1; right < nums.length; right++) {
                const [firstVal, secondVal, thirdVal] = [nums[left], nums[middle], nums[right]]
                const sum = firstVal + secondVal + thirdVal

                if (Math.abs(target - sum) < Math.abs(target - result)) {
                    result = sum
                }
            }
        }
    }

    return result

};
