//https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const result = new Set()

    const numsLength = nums.length
    for (let i = 0; i < numsLength; i++) {
        const target = nums[i]
        let [left, right] = [i+1, numsLength - 1]
        while (left < right) {
            const currSum = nums[left] + nums[right] + target
            if(currSum === 0) {
                result.add(String([target, nums[left], nums[right]]))
                left++
                right--
            }

            if(currSum < 0) {
                left++
            }

            if(currSum > 0) {
                right--
            }
        }
    }
    return Array.from(result).map(el => el.split(',').map(Number))

};

