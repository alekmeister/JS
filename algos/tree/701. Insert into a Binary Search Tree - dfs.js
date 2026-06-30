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


var insertIntoBST2 = function (root, val) {
    const newNode = new TreeNode(val)

    if (!root) return newNode;

    let currentNode = root
    while (true) {
        if (val  < currentNode.val) {
            if (currentNode?.left) {
                currentNode = currentNode.left
            } else {
                currentNode.left = newNode
                break
            }
        }

        if (val >= currentNode.val) {
            if (currentNode?.right) {
                currentNode = currentNode.right
            } else {
                currentNode.right = newNode
                break
            }
        }
    }
    return root
};
