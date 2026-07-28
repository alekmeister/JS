import {MinHeap} from "@datastructures-js/heap";

var topKFrequent = function(nums, k) {
    const counts = new Map()

    for (const num of nums) {
        counts.set(num, (counts.get(num) ?? 0) + 1)
    }

    const heap = new MinHeap(([, count]) => count)

    for (const entry of counts) {
        heap.push(entry)
        if (heap.size() > k) heap.pop()
    }

    return heap.toArray().map(([num]) => num)
}
