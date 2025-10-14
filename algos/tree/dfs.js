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


function bfs(root) {
    if(!root) return [];


    const result = []
    const queue = [root]

    while(queue.length) {
        let levelSize = queue.length

        while(levelSize) {
            const node = queue.shift()
            result.push(node.val)

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);

            levelSize--
        }
    }
    return result
}


console.log(bfs(root))
