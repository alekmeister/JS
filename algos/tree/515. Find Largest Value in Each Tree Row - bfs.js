//https://leetcode.com/problems/find-largest-value-in-each-tree-row/
import {buildTree} from "./utils.js";

const tree = buildTree([1,2,3]);

var largestValues = function (root) {
    if (!root) return []

    const queue = [root]
    const result = []

    while(queue.length) {
        let levelMax = -Infinity
        const levelSize = queue.length

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            levelMax = Math.max(node.val, levelMax)

            if(node?.left) queue.push(node.left)
            if(node?.right) queue.push(node.right)
        }
        result.push(levelMax)
    }

    return result
};

