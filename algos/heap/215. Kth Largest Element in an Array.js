// https://leetcode.com/problems/kth-largest-element-in-an-array/description/



import {MinHeap} from "@datastructures-js/heap";

var findKthLargest = function(nums, k) {
    const heap = new MinHeap();

    for (const n of nums) {
        heap.insert(n);
        if (heap.size() > k) heap.extractRoot();
    }
    return heap.root();
};



// оптимальнее
var findKthLargest2 = function(nums, k) {
    const heap = new Heap((a,b) => a - b)

    for(let i = 0; i < nums.length; i++) {
        heap.insert(nums[i])
        if(heap.size() > k) {
            heap.extractRoot()
        }
    }
    return heap.root()
};


