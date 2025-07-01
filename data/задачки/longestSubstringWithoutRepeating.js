function longestSubstringWithoutRepeating(s) {
    let leftPointer = 0; // Левый указатель начала подстроки
    let maxLength = 0; // Максимальная длина подстроки
    const charIndexMap = {}; // Хранит индексы символов в текущей подстроке
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        const currentChar = s[rightPointer];
        // Если символ уже встречался в текущей подстроке, обновляем левый указатель
        if (
            charIndexMap[currentChar] !== undefined &&
            charIndexMap[currentChar] >= leftPointer
        ) {
            leftPointer = charIndexMap[currentChar] + 1;
        }
        // Обновляем индекс символа в текущей подстроке
        charIndexMap[currentChar] = rightPointer;
        // Обновляем максимальную длину подстроки
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    }
    return maxLength;
}
// Пример использования:
const strExample = 'abcabcbb';
console.log(longestSubstringWithoutRepeating(strExample)); // Вернет 3

