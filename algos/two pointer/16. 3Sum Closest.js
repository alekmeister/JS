

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


var threeSumClosest2 = function(nums, target) {

    nums.sort((a,b) => a - b)

    let result = nums[0] + nums[1] + nums[2]

    for(let left = 0; left < nums.length - 2; left++) {
        let [middle, right] = [left + 1, nums.length - 1]

        while(middle < right) {
            const sum = nums[left] + nums[middle] + nums[right]

            if(Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum
            }

            if (sum < target) {
                middle++
            } else if (sum > target) {
                right--
            } else {
                return sum
            }

        }
    }

    return result

};
