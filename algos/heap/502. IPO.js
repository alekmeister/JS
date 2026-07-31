import {MaxHeap} from "@datastructures-js/heap";

var findMaximizedCapital = function(k, w, profits, capital) {

    let projectsLength = profits.length

    const projects = Array.from({ length: projectsLength}, (_, i) => [capital[i], profits[i]]);

    projects.sort((a, b) => a[0] - b[0]);

    const canAfford = new MaxHeap()

    let rightBorder = 0

    for(let i = 0; i < k; i++) {
        while( rightBorder < projectsLength && projects[rightBorder][0] <= w) {
            canAfford.push(projects[rightBorder][1])
            rightBorder++
        }

        if(!canAfford.size()) break;

        w += canAfford.pop()
    }
    return w
};

