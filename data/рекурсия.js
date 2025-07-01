// Рекурсия - это метод использования функции для решения задачи через сведение
// её к самой себе в более простых условиях


const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

function letterCombinations(digits) {
    if (!digits.length) return [];

    const result = [];

    const backtrack = (index, currentCombination) => {
        if(index === digits.length) {
            result.push(currentCombination)
            return
        }
        const lettersByMap = phoneMap[digits[index]] //
        for(let letter of lettersByMap) {
            backtrack(index + 1, currentCombination + letter)
        }
    }

    backtrack(0, '');
    return result.join(' ');
}

//letterCombinations(23)
