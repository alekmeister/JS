//https://leetcode.com/problems/valid-palindrome-ii/description

var validPalindrome = function(s) {
    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    let [left, right] = [0, s.length - 1];

    while (left < right) {
        const [leftChar, rightChar] = [s[left], s[right]];

        if (leftChar === rightChar) {
            left++;
            right--;
            continue;
        }

        return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }

    return true;
};
