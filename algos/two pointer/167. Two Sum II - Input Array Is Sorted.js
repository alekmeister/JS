//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while ( left < right ) {
        const sum = numbers[left] + numbers[right]

        if(sum > target) right--
        if(sum < target) left++
        if(sum === target) return [left + 1, right + 1];

    }

};

var twoSum = function (numbers, target) {

    const hashMap = new Map()


    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]

        if(hashMap.has(target - num)) return [hashMap.get(target - num), i + 1];

        hashMap.set(num, i+1)

    }

};


console.log(twoSum([2,3,4], 9))
