// https://leetcode.com/problems/path-sum/

var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

// TODO через стэк, https://leetcode.com/problems/same-tree/ - эту задачу

