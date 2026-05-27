/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(listHead) {

    function findMiddle(head) {
        let slow = head
        let fast = head

        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    function reverseList(head) {
        let prev = null
        let current = head

        while(current) {
            let tmp = current.next
            current.next = prev
            prev = current
            current = tmp
        }

        return prev
    }

    let secondHalf = findMiddle(listHead)
    let reversedSecondHalf = reverseList(secondHalf)

    let firstPointer = listHead
    let secondPointer = reversedSecondHalf

    while(secondPointer) {
        if(firstPointer.val !== secondPointer.val) return false
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }
    return true
};

var isPalindrome = function (listHead) {

    let slow = listHead
    let fast = listHead

    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let current = slow
    let prev = null
    let tmp = null

    while(current) {
        tmp = current.next
        current.next = prev
        prev = current
        current = tmp
    }


    let leftP = listHead
    let rightP = prev

    while(leftP && rightP) {
        if(leftP.val !== rightP.val) return false;
        leftP = leftP.next
        rightP = rightP.next
    }

    return true

};
