class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const dfs = (root) => {
    if(!root) return null
    //pre order
    dfs(root.left)
    //in - между обходом левого и правого. Для BST вернет элементы по возрастанию
    dfs(root.right)
    console.log(root.val)
    //post - обработка на всплытии
    return root
}
// Пример дерева:
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6

dfs(root)
