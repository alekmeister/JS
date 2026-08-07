var insert = function (intervals, newInterval) {
    const sorted = [];
    let inserted = false;

    for (const interval of intervals) {
        if (!inserted && newInterval[0] <= interval[0]) {
            sorted.push(newInterval);
            inserted = true;
        }
        sorted.push(interval);
    }
    if (!inserted) sorted.push(newInterval);

    const result = [];
    let current = [...sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const [start, end] = sorted[i];

        if (start <= current[1]) {
            current[1] = Math.max(current[1], end);
        } else {
            result.push(current);
            current = [start, end];
        }
    }
    result.push(current);

    return result;
};
