// https://leetcode.com/problems/diameter-of-binary-tree/



import {buildTree} from "./utils.js";

var diameterOfBinaryTree = function (root) {
    let d = 0

    function maxDepth(root) {
        if (!root) return 0;

        let l = maxDepth(root.left)
        let r = maxDepth(root.right)


        d = Math.max(l+r, d)
        return Math.max(l,r) + 1
    }

    maxDepth(root)
    return d
};


diameterOfBinaryTree(buildTree([1,2,3,4,5]))


