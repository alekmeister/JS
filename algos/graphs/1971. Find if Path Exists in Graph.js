var validPath = function (n, edges, source, destination) {
    const graph = Array.from({ length: n }, () => [])

    for (const [u, v] of edges) { // [2, 0]
        graph[u].push(v)
        graph[v].push(u)
    }

    const visited = new Set([source])
    const stack = [source]

    while (stack.length) {
        const v = stack.pop()
        if (v === destination) return true;

        for (const ngbh of graph[v]) {
            if (!visited.has(ngbh)) {
                visited.add(ngbh)
                stack.push(ngbh)
            }
        }
    }
    return false
};
