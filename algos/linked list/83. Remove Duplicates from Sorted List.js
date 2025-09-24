var deleteDuplicates = function(head) {
    let firstPointer = head
    let secondPointer = head
    if(!head?.next) {
        return head
    }
    while(secondPointer) {
        if(firstPointer.val === secondPointer.val) {
            secondPointer = secondPointer.next
        } else {
            firstPointer.next = secondPointer
            firstPointer = secondPointer
        }
    }
    firstPointer.next = null
    return head
};

var deleteDuplicates2 = function(head) {
    let current = head

    while(current && current.next) {
        if(current.val === current.next.val) {
            current.next = current.next.next
            continue
        }
        current = current.next
    }
    return head
};
