// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/

var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a - b)


    const result = []

    for(let spell of spells) {
        const minSuccessValue = Math.ceil(success / spell)

        let left = 0,
            right = potions.length - 1

        while(left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (potions[mid] < minSuccessValue) {
                left = mid + 1
            } else {
                right = mid - 1
            }

        }
        result.push(potions.length - left)
    }

    return result
};
