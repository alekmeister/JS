// https://leetcode.com/problems/delete-leaves-with-a-given-value/

var removeLeafNodes = function(root, target) {
    if(!root) return null

    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)

    if(!root.left && !root.right && root.val === target) {
        return null
    }
    return root
};


import {buildTree} from "./utils.js";

const checkTargetLeaf = (node, target) => {
    return node.val === target && !node.left && !node.right
}

var removeLeafNodes2 = function (root, target) {
    // node side  parent, isVisited
    const stack = [[root, null, null, false]]

    while (stack.length) {
        const [node, side, parent, isVisited] = stack.pop()
        if (!isVisited) {
            stack.push([node, side, parent, true])
            if (node?.left) stack.push([node.left, 'left', node, false])
            if (node?.right) stack.push([node.right, 'right', node, false])
            continue
        }
        if (checkTargetLeaf(node, target) && parent) {
            parent[side] = null
        }
    }

    return checkTargetLeaf(root, target) ? null : root
};


const tree = buildTree([1,2,3,2,null,2,4])

removeLeafNodes2(tree)
