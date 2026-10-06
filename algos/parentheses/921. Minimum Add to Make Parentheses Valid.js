var minAddToMakeValid = function(s) {

    let open = 0
    let adds = 0

    for (const char of s) {
        if(char === '(') {
            open++
            continue
        }

        if(char === ')' && open > 0) {
            open--
        } else {
            adds++
        }
    }
    return open + adds

};
