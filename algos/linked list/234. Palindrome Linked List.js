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
