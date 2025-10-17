// https://leetcode.com/problems/deepest-leaves-sum/

var deepestLeavesSum = function(root) {

    const queue = [root]
    let resultSum = 0 //5
    while(queue.length) {
        let lvlLength = queue.length
        resultSum = 0
        while(lvlLength) {//2 1
            const node = queue.shift()

            resultSum += node.val

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);

            lvlLength--
        }

    }

    return resultSum
};
