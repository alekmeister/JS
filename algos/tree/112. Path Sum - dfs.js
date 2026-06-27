// https://leetcode.com/problems/path-sum/

var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

var hasPathSum2 = function (root, targetSum) {
    if (!root) return false;

    const stack = [[root, targetSum - root.val]];

    while (stack.length) {
        const [node, remaining] = stack.pop();

        if (!node.left && !node.right && remaining === 0) return true;

        if (node.left) stack.push([node.left, remaining - node.left.val]);
        if (node.right) stack.push([node.right, remaining - node.right.val]);
    }

    return false;
};

