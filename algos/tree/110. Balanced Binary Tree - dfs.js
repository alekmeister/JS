// https://leetcode.com/problems/balanced-binary-tree/

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
         }

const root = new TreeNode(1,
    null,
    new TreeNode(2,
        null,
        new TreeNode(3)
    )
);

function height (node) {
    if(!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right))
}


var isBalanced = function(root) {
    if(!root) return true;

    const leftH = height(root.left)
    const rightH = height(root.right)

    if(Math.abs(leftH - rightH) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right)

};

isBalanced(root)





function takeHeight(node) {
    const stack = [[node, 0]]
    let maxHeight = 0

    while (stack.length) {
        const [currentNode, depth] = stack.pop()

        maxHeight = Math.max(maxHeight, depth)

        if (!currentNode) continue;

        stack.push([currentNode.left, depth + 1], [currentNode.right, depth + 1])

    }

    return maxHeight
}


var isBalanced1 = function (root) {
    if (!root) return true;

    const stack = [root]


    while (stack.length) {

        const currentNode = stack.pop()
        if (!currentNode) continue;

        const leftH = takeHeight(currentNode.left)
        const rightH = takeHeight(currentNode.right)

        if(Math.abs(leftH - rightH) > 1) return false;

        stack.push(currentNode.left, currentNode.right)

    }

    return true

};

isBalanced1(root)
