import {MinHeap} from "@datastructures-js/heap";

var mergeKLists = function (lists) {
    const dummy = new ListNode()
    let current = dummy
    const minHeap = new MinHeap(node => node.val)

    for(const head of lists) {
        if(head) minHeap.push(head);
    }

    while(minHeap.size()) {
        const node = minHeap.pop()
        current.next = node
        current = current.next

        if (node.next) minHeap.push(node.next)
    }

    return dummy.next
};
