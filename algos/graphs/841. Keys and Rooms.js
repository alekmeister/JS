/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set([0]);
    const stack = [0];

    while (stack.length) {
        const roomIndex = stack.pop();
        for (const key of rooms[roomIndex]) {
            if (!visited.has(key)) {
                visited.add(key);
                stack.push(key);
            }
        }
    }

    return visited.size === rooms.length;
};
