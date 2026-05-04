//https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */



var merge = function (nums1, m, nums2, n) {
    //      *
    // [1,2,3,0,0,0]
    //      *
    // [2,5,6]

    let [p1, p2] = [m - 1, n - 1]
    let position = nums1.length - 1


    while (p1 >= 0 && p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[position] = nums2[p2]
            p2--
        } else {
            nums1[position] = nums1[p1]
            p1--
        }
        position--
    }

    while (p2 >= 0) {
        nums1[position] = nums2[p2]
        p2--
        position--
    }

};
