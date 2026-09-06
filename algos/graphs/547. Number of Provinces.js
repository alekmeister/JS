    var findCircleNum = function(isConnected) {
        const n = isConnected.length;
        const graph = Array.from({ length: n }, () => []);

        // формально верхняя часть квадрата без учета диагонали т.к. там всегда будет 1
        //  [1,1,0]
        //  [1,1,0]
        //  [0,0,1]
        // => [ [ 1 ], [ 0 ], [] ]


        for (let i = 0; i < n; i++) { // 0
            for (let j = i + 1; j < n; j++) { // 1
                if (isConnected[i][j]) {
                    graph[i].push(j);
                    graph[j].push(i);
                }
            }
        }

        const visited = new Set();
        let province = 0

        for (let i = 0; i < n; i++) { // здесь и несвязанные графы, от которых не можем дойти через соседей
            if(!visited.has(i)) {
                province++
                visited.add(i);

                const stack = [i]

                while(stack.length) {
                    const node = stack.pop();
                    for(const neigh of graph[node]) {
                        if(!visited.has(neigh)) {
                            visited.add(neigh);
                            stack.push(neigh)
                        }
                    }
                }

            }
        }
        return province

    };


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))

