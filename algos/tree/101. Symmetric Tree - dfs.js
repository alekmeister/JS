// https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function (root) {
    const stack = [[root.right, root.left]]

    while (stack.length) {
        const [left, right] = stack.pop()

        if(!left && !right) continue;
        if(left?.val !== right?.val) return false;

        stack.push([left.left, right.right], [left.right, right.left])
    }
    return true
};
