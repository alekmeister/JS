// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var maxDepth = function(root) {
    if(!root) {
        return 0
    }

    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    return Math.max(left, right) + 1

};

//stack
var maxDepth2 = function(root) {
    if(!root) {
        return 0
    }

    const stack = [[root, 1]]
    let result = 0

    while(stack.length > 0) {
        const [node, depth] = stack.pop()

        if(node) {
            result = Math.max(result, depth)
            stack.push([node.left, depth + 1])
            stack.push([node.right, depth + 1])
        }
    }
    return result
};
