// https://leetcode.com/problems/diameter-of-binary-tree/



var diameterOfBinaryTree = function(root) {
    let result = 0

    function maxDepth(root){
        if(!root) return 0;

        let l = maxDepth(root.left)
        let r = maxDepth(root.right)

        result = Math.max(result, l+r)
        return Math.max(l,r) + 1

    }
    maxDepth(root)
    return result
};
