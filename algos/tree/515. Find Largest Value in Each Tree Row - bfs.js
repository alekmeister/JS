//https://leetcode.com/problems/find-largest-value-in-each-tree-row/

var largestValues = function (root) {
    if (!root) return []

    const queue = [root]
    const result = []
    while (queue.length) {

        let levelSize = queue.length
        let levelResult = -Infinity

        while (levelSize) {
            const node = queue.shift()
            levelResult = Math.max(node.val, levelResult)

            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);

            levelSize--
        }

        result.push(levelResult)

    }
    return result
};
