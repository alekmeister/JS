// https://leetcode.com/problems/validate-binary-search-tree/description/


var isValidBST = function (root) {

    const stack = [[root, -Infinity, Infinity]]

    while(stack.length) {
        const [node, minRange, maxRange] = stack.pop()

        if(!node) continue;

        if(node.val <= minRange || node.val >= maxRange) return false;


        stack.push([node.left, minRange, node.val])
        stack.push([node.right, node.val, maxRange])

    }


    return true
};
