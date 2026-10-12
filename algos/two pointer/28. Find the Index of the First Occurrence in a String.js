var strStr = function (haystack, needle) {

    let needlePointer = 0 // 1 // 2

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[needlePointer]) {
            needlePointer++
        } else {
            i = i - needlePointer
            needlePointer = 0
        }

        if (needlePointer === needle.length) {
            return i - needlePointer + 1
        }
    }

    return -1

};

console.log(strStr('sadbutsad', 'sad'))
