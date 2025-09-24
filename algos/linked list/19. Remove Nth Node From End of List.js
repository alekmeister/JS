
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }



var removeNthFromEnd = function(head, n) {
    //           *
    // d 1 2 3 4 5
    //       *
    const dummy = new ListNode(0, head) // используется, если мы хотим удалить голову, чтобы не писать условия

    let leftPointer = dummy
    let rightPointer = dummy

    for (let i = 0; i < n + 1; i++) { // двигаем правый указатель, чтобы при нахождении хвоста левый стоял за 1 элемент для удаления
        rightPointer = rightPointer.next
    }

    while(rightPointer) {
        leftPointer = leftPointer.next
        rightPointer = rightPointer.next
    }

    leftPointer.next = leftPointer.next.next

    return dummy.next
};

const data = new ListNode(1, null)

removeNthFromEnd(data,1)
console.log(removeNthFromEnd(data,1)  )
