// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    if(!root) return null;

    [root.left, root.right] = [root.right, root.left]

    invertTree(root.left)
    invertTree(root.right)


    return root
};

var invertTree2 = function (root) {

    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (!node) continue;

        [node.left, node.right] = [node.right, node.left];

        stack.push(node.left, node.right);
    }

    return root;
};
