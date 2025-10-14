// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

var levelOrder = function(root) {
    if(!root) return []

    const queue = [root]
    const result = []
    while(queue.length) {
        const levelResult = []
        const levelSize = queue.length

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            levelResult.push(node.val)

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);
        }
        result.push(levelResult)
    }

    return result
};

