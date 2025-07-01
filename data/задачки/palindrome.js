function isPalindrome(str) {
    str = str.toString().toLowerCase().replace(/[^a-zа-я0-9]/g, '');

    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
