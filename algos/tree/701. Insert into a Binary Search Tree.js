var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val)
    }

    if(val < root.val) {
        root.left = insertIntoBST(root.left, val)
    } else {
        root.right = insertIntoBST(root.right, val)
    }
    return root
};


var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val)
    }
    let current = root
    const newNode = new TreeNode(val)
    while(current) {
        if(val < current.val ) {
            if(!current.left) {
                current.left = newNode
                break
            }
            current = current.left
        } else {
            if(!current.right) {
                current.right = newNode
                break
            }
            current = current.right
        }
    }
    return root
};
