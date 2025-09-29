// https://leetcode.com/problems/lru-cache/

class ListNode {
    constructor (prev, next, key = null, value = null) {
        this.prev = prev
        this.next = next
        this.value = value
        this.key = key
    }
}


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hashTable = new Map()
        this.head = new ListNode()
        this.tail = new ListNode()
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    /**
     * @param {number} key
     * @return {number}
     */

    delete(key) {
        const node = this.hashTable.get(key)
        if(!node) return
        const prev = node.prev
        const next = node.next
        prev.next = next
        next.prev = prev
    }

    addToHead(node) {
        const firstNode = this.head.next

        this.head.next = node
        node.prev = this.head

        node.next = firstNode
        firstNode.prev = node
    }

    get(key) {
        const node = this.hashTable.get(key)

        if(!node) {
            return -1
        }
        this.delete(key)
        this.addToHead(node)

        return node.value
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = new ListNode(null, null, key, value)

        this.delete(key)
        this.addToHead(node)
        this.hashTable.set(key, this.head.next)

        if(this.capacity < this.hashTable.size) {
            const lastNode = this.tail.prev
            this.delete(lastNode.key)
            this.hashTable.delete(lastNode.key)
        }
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
