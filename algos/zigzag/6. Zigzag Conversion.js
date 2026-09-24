var convert = function(s, numRows) {

    if(numRows === 1) return s

    const result =  Array(numRows).fill('')


    let isUpOrder = false
    let currentRow = 0

    for (let char of s) {
        result[currentRow] += char

        if(numRows - 1 === currentRow) {
            isUpOrder = false
        }
        if (currentRow === 0) {
            isUpOrder = true
        }

        isUpOrder ? currentRow++ : currentRow--
    }

    return result.join('')

};
