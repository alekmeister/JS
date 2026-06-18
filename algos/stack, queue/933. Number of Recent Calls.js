// https://leetcode.com/problems/number-of-recent-calls/

// TODO переписать на двухсвзяанный список, чтобы работало за o(1) ?

// class RecentCounter {
//     constructor () {
//         this.queue = [] // 1, 100 , 3001 , 3002
//     }
//
//     ping (t) {
//         const window = t - 3000 // 2
//         while(this.queue.length && this.queue[0] < window) {
//             this.queue.shift()
//         }
//
//         this.queue.push(t);
//
//         return this.queue.length
//     }
// }

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var RecentCounter = function() {
    this.state = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.state.push(t)

    const window = t - 3000

    while (this.state[0] < window) {
        this.state.shift();
    }

    return this.state.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
var obj = new RecentCounter()
obj.ping(642)
obj.ping(1849)
console.log(obj.ping(4921))


