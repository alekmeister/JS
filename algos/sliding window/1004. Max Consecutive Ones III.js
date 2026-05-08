//https://leetcode.com/problems/max-consecutive-ones-iii/description/

var longestOnes = function(nums, k) {
    let begin = 0,
        windowSize = 0,  //2
        result = 0

    for (let end = 0; end < nums.length; end++) {

        if(nums[end] === 0) {
            windowSize += 1
        }

        while(windowSize > k) {
            if(nums[begin] === 0) {
                windowSize--
            }
            begin++
        }
        result = Math.max(result, end - begin + 1)
    }
    return result
};





console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
