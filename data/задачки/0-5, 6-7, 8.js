const compressRanges = (arr) => {
    if (arr.length === 0) return '';

    // 1. Копируем и сортируем входной массив
    const sorted = [...arr].sort((a, b) => a - b);

    const tuples = [];
    // 2. Инициализируем текущий «кортеж» первым числом
    let currentTuple = [sorted[0]];

    // 3. Проходим по остальным числам
    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];
        const last = currentTuple[currentTuple.length - 1];

        if (current === last + 1) {
            // — если подряд → добавляем в тот же кортеж
            currentTuple.push(current);
        } else {
            // — иначе: фиксируем старый и начинаем новый
            tuples.push(currentTuple);
            currentTuple = [current];
        }
    }

    // 4. Не забываем добавить последний кортеж
    tuples.push(currentTuple);

    // 5. Преобразуем каждый кортеж в строку «start-end» или «single»
    return tuples
        .map(t =>
            t.length > 1
                ? `${t[0]}-${t[t.length - 1]}`
                : `${t[0]}`
        )
        .join(',');
};

// Проверка:
console.log(compressRanges([1,4,5,2,3,9,8,11,0])); // "0-5,8-9,11"
console.log(compressRanges([1,4,3,2]));             // "1-4"
console.log(compressRanges([1,4]));                 // "1,4"
