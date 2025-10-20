// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;

    let l = lowestCommonAncestor(root.left, p, q)
    let r  = lowestCommonAncestor(root.right, p, q)

    if(l && r) return root;

    if (root === p || root === q) return root;

    return l || r


};
