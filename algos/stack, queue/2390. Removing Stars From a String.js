// https://leetcode.com/problems/removing-stars-from-a-string/description/

var removeStars = function(s) {
    const stack = []
    for (char of s) {
        if(char === '*') {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};
