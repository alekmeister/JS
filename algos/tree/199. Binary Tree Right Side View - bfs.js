
var rightSideView = function(root) {
    if(!root) return [];

    const queue = [root]
    const result = []

    while(queue.length) {
        const lvlResult = []
        let lvlLength = queue.length

        while(lvlLength) {
            const node = queue.shift()

            lvlResult.push(node.val)

            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);

            lvlLength--
        }

        result.push(lvlResult.at(-1))
    }
    return result
};


