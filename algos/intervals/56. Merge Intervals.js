var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])

    const result = [intervals[0]]


    for (const interval of intervals) {
        const lastInRes = result.at(-1)

        if(lastInRes[1] >= interval[0]) {
            lastInRes[1] = Math.max(lastInRes[1], interval[1])
        } else {
            result.push(interval)
        }
    }

    return result
};
