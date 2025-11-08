// https://leetcode.com/problems/kth-largest-element-in-an-array/description/



var findKthLargest = function (nums, k) {
    const heap = new Heap((a, b) => b - a, nums).fix()
    while(k - 1) {
        heap.extractRoot()
        k--
    }

    return heap.root()
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


