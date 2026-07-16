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
var zigzagLevelOrder2 = function (root) {
    if (!root) return [];

    const queue = [root];
    const result = [];

    let isDefaultOrder = true;

    while (queue.length) {
        const lvlSize = queue.length;
        const lvlResult = new Array(lvlSize);

        for (let i = 0; i < lvlSize; i++) {
            const node = queue.shift();

            const index = isDefaultOrder ? i : lvlSize - i - 1;
            lvlResult[index] = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        isDefaultOrder = !isDefaultOrder;
        result.push(lvlResult);
    }

    return result;
};
