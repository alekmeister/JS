//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let queue = [root]
    const res = []
    let isReverse = false

    while(queue.length) {
        let levelSize = queue.length
        const lvlResult = []
        while(levelSize) {
            const node = queue.shift()
            lvlResult.push(node.val)
            if(node?.left) queue.push(node.left)
            if(node?.right) queue.push(node.right)

            levelSize--
        }
        if(isReverse) lvlResult.reverse();
        res.push(lvlResult)
        isReverse = !isReverse
    }
    return res
};
// получше
var zigzagLevelOrder2 = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];
    let isReverse = true;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = new Array(levelSize);

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            const index = isReverse ? i : levelSize - 1 - i;
            currentLevel[index] = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
        isReverse = !isReverse;
    }

    return result;
};

