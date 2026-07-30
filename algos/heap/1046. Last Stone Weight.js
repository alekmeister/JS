import {MaxHeap} from "@datastructures-js/heap";

var lastStoneWeight = function (stones) {

    const heap = new MaxHeap(null, stones);

    while (heap.size() > 1) {

        const firstStone = heap.pop()
        const secondStone = heap.pop()

        if (firstStone !== secondStone) heap.push(firstStone - secondStone);
    }

    if (heap.size() === 0) return 0;
    return heap.pop()
};
