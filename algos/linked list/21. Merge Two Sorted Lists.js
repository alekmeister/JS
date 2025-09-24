var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-1)

    let current = dummy

    let p1 = list1,
        p2 = list2

    while (p1 && p2) {
        if (p1.val < p2.val) {
            current.next = p1
            p1 = p1.next
        } else {
            current.next = p2
            p2 = p2.next
        }

        current = current.next
    }

    if(p1) current.next = p1
    if(p2) current.next = p2

    return dummy.next
};
