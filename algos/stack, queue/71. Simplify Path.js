// https://leetcode.com/problems/simplify-path/description/

var simplifyPath = function(path) {
    const stack = []
    for (let dir of path.split('/')) {
        if(dir === '.' || dir === '') continue
        if(dir === '..') {
            stack.pop()
        } else {
            stack.push(dir)
        }
    }
    return '/' + stack.join('/')
};
