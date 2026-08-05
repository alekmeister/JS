const canAttendMeetings = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0])


    for (let i = 0; i < intervals.length - 1; i++) {
        const current = intervals[i]
        const next = intervals[i + 1]

        if(current[1] > next[0]) return false;
    }
    return true
}






console.log(canAttendMeetings([[0, 30], [5,10], [15, 20]]))
console.log(canAttendMeetings([[7,10 ], [2,4]]))
