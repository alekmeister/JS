/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isBackspace = (str) => str === '#'


var backspaceCompare = function (firstSt, secondSt) {
    let firstPointer = firstSt.length - 1 //7, 6
    let secondPointer = secondSt.length - 1


    let [firstCounter, secondCounter] = [0, 0]

    while (firstPointer >= 0 || secondPointer >= 0) {

        if (isBackspace(firstSt[firstPointer]) || isBackspace(secondSt[secondPointer])) {
            if (isBackspace(firstSt[firstPointer])) {
                firstCounter++
                firstPointer--
            }
            if (isBackspace(secondSt[secondPointer])) {
                secondCounter++
                secondPointer--
            }
            continue

        }


        if (firstCounter > 0 || secondCounter > 0) {
            if (firstCounter > 0) {
                firstPointer--
                firstCounter--
            }

            if (secondCounter > 0) {
                secondPointer--
                secondCounter--
            }
            continue
        }


        if (firstSt[firstPointer] !== secondSt[secondPointer]) return false;

        firstPointer--
        secondPointer--

    }
    return true

};


const getNextValid = (str, index) => {
    let skip = 0;
    while (index >= 0) {
        if (str[index] === '#') { skip++; index--; }
        else if (skip > 0)      { skip--; index--; }
        else break;
    }
    return index;
};

var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = getNextValid(s, i);
        j = getNextValid(t, j);

        if (i < 0 && j < 0) return true;
        if (i < 0 || j < 0) return false;
        if (s[i] !== t[j])   return false;

        i--;
        j--;
    }

    return true;
};
