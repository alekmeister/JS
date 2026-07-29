import {MaxHeap} from "@datastructures-js/heap";

var frequencySort = function (s) {

    const counts = new Map();

    for (const char of s) {
        counts.set(char, (counts.get(char) ?? 0) + 1);
    }

    const heap = new MaxHeap(([, count]) => count);
    for (const entry of counts) {
        heap.push(entry);
    }

    let result = ""

    while(heap.size()) {
        const [char, count] = heap.pop()
        result += char.repeat(count)
    }

    return result
};

