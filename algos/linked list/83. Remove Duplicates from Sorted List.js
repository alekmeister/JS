var deleteDuplicates = function (head) {
    if (!head) return head;

    let leftP = head
    let rightP = head.next
    while (rightP) {
        if (rightP.val !== leftP.val) {
            leftP.next = rightP
            leftP = rightP
        }
        rightP = rightP.next
    }
    leftP.next = null
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
