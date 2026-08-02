import {MaxHeap, MinHeap} from "@datastructures-js/heap";

class MedianFinder {
    constructor() {
        this.low =  new MaxHeap()
        this.high = new MinHeap()
    }

    addNum(num) {
        this.low.push(num)

        if(this.high.size() && this.low.root() > this.high.root()) {
            const fromLowHalf = this.low.pop()
            const fromHighHalf = this.high.pop()

            this.low.push(fromHighHalf)
            this.high.push(fromLowHalf)
        }

        if(this.low.size() - this.high.size() > 1) {
            this.high.push(this.low.pop())
        }

    }

    findMedian() {
        if(this.low.size() > this.high.size()) return this.low.root()
        return (this.low.top() + this.high.top()) / 2
    }
}


 var obj = new MedianFinder()
 obj.addNum(1)
 obj.addNum(2)
 console.log(obj.findMedian())
obj.addNum(3)
 console.log(obj.findMedian())

