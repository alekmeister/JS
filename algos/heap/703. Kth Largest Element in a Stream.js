import {MinHeap} from "@datastructures-js/heap";

class KthLargest {
    constructor(k, nums) {
        this.k = k
        this.heap = new MinHeap()

        for (const num of nums) this.add(num)
    }

    add(val) {
        this.heap.push(val)
        if (this.heap.size() > this.k) this.heap.pop()

        return this.heap.root()
    }
}
