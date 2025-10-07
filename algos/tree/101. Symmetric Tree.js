// https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function(root) {
    if(!root) return true

    const stack = [root.right, root.left]

    while(stack.length) {
        let left = stack.pop()
        let right = stack.pop()
        if(!left && !right) continue

        if(left?.val !== right?.val) return false;


        stack.push(left.left)
        stack.push(right.right)

        stack.push(left.right)
        stack.push(right.left)

        // аналогично
        // stack.push(right.right)
        // stack.push(left.left)
        //
        // stack.push(right.left)
        // stack.push(left.right)

    }
    return true
};
