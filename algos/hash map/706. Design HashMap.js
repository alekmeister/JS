// Хэш мапа на связанном списке.
// TODO Хеш-таблица на основе открытой адресации (Open Addressing)

class ListNode {
    constructor(key, val, next) {
        this.key = key
        this.val = val
        this.next = next
    }
}
class MyHashMap {
    constructor() {
        this.size = 19997
        this.data = new Array(this.size)
    }
    hash(key) {
        return key % this.size
    }
    put(key, val) {
        this.remove(key)
        const hash = this.hash(key)
        this.data[hash] = new ListNode(key, val, this.data[hash])
    }
    get(key) {
        const hash = this.hash(key)
        let current = this.data[hash]

        while(current) {
            if(current.key === key) return current.val
            current = current.next
        }
        return -1
    }
    remove(key) {
        const hash = this.hash(key)
        let current = this.data[hash]
        if(!current) return
        if(current.key === key) {
            this.data[hash] = current.next
            return
        }
        while(current && current.next) {
            if(current.next.key === key) {
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }
};


/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
