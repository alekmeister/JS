var cloneGraph = function(node) {
    if(!node) return null

    const visited = new Map()
    visited.set(node, new Node(node.val, []))

    const stack = [node]

    while(stack.length) {
        const currentNode = stack.pop()

        for (const n of currentNode.neighbors) {
            if(!visited.has(n)) {
                visited.set(n, new Node(n.val, []))
                stack.push(n)
            }
            visited.get(currentNode).neighbors.push(visited.get(n))
        }
    }
    return visited.get(node)
};
