
function _Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}



var connect = function(root) {
    if(!root) return null

    const queue = [root]

    while(queue.length) {
        let levelSize = queue.length //
        let prev = null
        while(levelSize) {
            const node = queue.shift() //2
            if(prev) prev.next = node;
            prev = node

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);

            levelSize--
        }
        prev = null
    }

};

const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);
const node5 = new _Node(5);
const node6 = new _Node(6);
const node7 = new _Node(7);

// Строим бинарное дерево:
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

connect
