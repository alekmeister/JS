// https://leetcode.com/problems/same-tree/

var isSameTree = function (p, q) {

    const stack = [[p, q]]

    while (stack.length) {
        const [pNode, qNode] = stack.pop()

        if (!pNode && !qNode) continue;
        if (pNode?.val !== qNode?.val) return false;

        stack.push([pNode.left, qNode.left])
        stack.push([pNode.right, qNode.right])


    }
    return true
};
