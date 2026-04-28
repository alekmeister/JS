//https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
    let left = 0
    let right = arr.length - 1 //1

    let maxVol = 0

    while (left < right) {
        const [leftVal, rightVal] = [arr[left], arr[right]]
        const currentVol = (right - left) * Math.min(leftVal, rightVal)

        maxVol = Math.max(maxVol, currentVol)

        if (leftVal < rightVal) {
            left++
            continue
        }

        right--


    }
    return maxVol

};
