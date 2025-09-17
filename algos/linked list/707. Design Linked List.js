function Node(value, next) {
    this.value = value;
    this.next = next;
}

var MyLinkedList = function() {
    this.head = null
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength()) return -1;

    let current = this.head
    for(let i = 0; i < index; i++) {
        current = current.next
    }
    return current.value
};


MyLinkedList.prototype.addAtHead = function(val) {
    this.head = new Node(val, this.head)
};


MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head === null) {
        this.addAtHead(val);
        return;
    }

    let current = this.head
    while(current.next !== null) {
        current = current.next
    }
    current.next = new Node(val, null)
};


MyLinkedList.prototype.addAtIndex = function(index, val) {
    const length = this.getLength()
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === length) {
        this.addAtTail(val);
        return;
    }
    if (index > length) return;

    let current = this.head
    for(let i = 0; i < index - 1; i++) {
        current = current.next
    }
    current.next = new Node(val, current.next)

};


MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let current = this.head
    for(let i = 0; i < index - 1; i++) {
        current = current.next
    }
    current.next = current.next.next

};

MyLinkedList.prototype.getLength = function() {
    let length = 0,
        curr = this.head
    while(curr !== null) {
        length++
        curr = curr.next
    }
    return length
};

const nodes = new Node(1, null)
const list = new MyLinkedList();
list.head = nodes
list.addAtHead(0)
list.addAtTail(3)
list.addAtTail(4)
list.addAtIndex(2, 2)
list.deleteAtIndex(2)
console.dir(list, { depth: null })
