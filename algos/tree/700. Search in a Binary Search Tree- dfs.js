// https://leetcode.com/problems/search-in-a-binary-search-tree/description/

var searchBST = function(root, val) {
    if(!root) return null;

    if(root.val === val) return root;

    if(val < root.val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};

var searchBST2 = function (root, val) {

    const stack = [root]

    while (stack.length) {
        const lastEl = stack.pop()

        if (!lastEl) return null;

        if (lastEl.val === val) return lastEl;

        if (val < lastEl.val) {
            stack.push(lastEl.left)
        } else {
            stack.push(lastEl.right)
        }
    }
};
