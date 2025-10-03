// https://leetcode.com/problems/number-of-recent-calls/


class RecentCounter {
    constructor () {
        this.queue = [] // 1, 100 , 3001 , 3002
    }

    ping (t) {
        const window = t - 3000 // 2
        while(this.queue.length && this.queue[0] < window) {
            this.queue.shift()
        }

        this.queue.push(t);

        return this.queue.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
