// https://leetcode.com/problems/validate-binary-search-tree/description/

var isValidBST = function (root) {

    const stack = [[root, -Infinity, Infinity]]

    while (stack.length) {
        const [node, minR, maxR] = stack.pop()

        if (!node) continue;

        if (node.val <= minR || node.val >= maxR) return false;

        stack.push([node.left, minR, node.val])
        stack.push([node.right, node.val, maxR])
    }

    return true
};
