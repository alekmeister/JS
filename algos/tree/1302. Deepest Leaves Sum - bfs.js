// https://leetcode.com/problems/deepest-leaves-sum/

var deepestLeavesSum = function (root) {

    const queue = [root]
    let result = 0
    while (queue.length) {
        const lvlSize = queue.length
        let levelSum = 0

        for (let i = 0; i < lvlSize; i++) {
            const node = queue.shift()

            levelSum +=node.val

            if (node?.left) queue.push(node.left)
            if (node?.right) queue.push(node.right)
        }

        result = levelSum
    }
    return result
}
