
var rightSideView = function (root) {
    if (!root) return [];

    const queue = [root]
    const result = []

    while (queue.length) {
        const levelSize = queue.length
        let lastNodeVal = null

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            lastNodeVal = node.val

            if (node?.left) queue.push(node.left)
            if (node?.right) queue.push(node.right)
        }
        result.push(lastNodeVal)
    }
    return result
};

