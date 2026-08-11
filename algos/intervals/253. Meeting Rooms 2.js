import {MinHeap} from "@datastructures-js/heap";

const minMeetingRooms = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    const intervalsHeap = new MinHeap()
    intervalsHeap.push(intervals[0][1]);

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];

        if(current[0] >= intervalsHeap.root()) {
            intervalsHeap.pop()
        }

        intervalsHeap.push(current[1])
    }

    return intervalsHeap.size()
}


console.log(minMeetingRooms([[0,30], [5,10], [15,20]]))
