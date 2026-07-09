var connect = function (root) {
    if (!root) return root

    const queue = [root]

    while (queue.length) {
        const lvlSize = queue.length
        let prevNode = null

        for (let i = 0; i < lvlSize; i++) {
            const node = queue.shift()

            if(prevNode) prevNode.next = node;

            prevNode = node

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);
        }
        prevNode = null
    }
    return root
};
