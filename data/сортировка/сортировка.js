// Могут быть устойчивые и неустойчивые
// Устойчивые - при сортировке элементы с одинаковыми значениями сохраняют свой относительный порядок
// Неустойчивые - не сохраняют
// Эффективные

// Сортировка слиянием (merge sort)
// Массив делится на 2 части, затем рекурсивно на части по 1 элементу
// Далее объденяется за линейное время Сложность O(nlogn), требует O(n) памяти

// Быстрая сортировка (quick sort)
// Массив делится на 3 части, меньше опорного числа (выбирается рандомно) равные
// опорному числу, больше опорного числа и так рекурсивно. Сложность зависит от
// выбора опорного элемента, в среднем O(nlogn), но быстрее чем слиянием

// Сортировка подсчётом
// Работает за O(n+k), где k — количество различных элементов. Работает с числами.
// При малом разбросе сильно эффективнее остальных, при большом проигрывает.



const data = [8,6,4,2,3,5]
function bubbleSort(arr) {
    const swapPositions = (stepArr) => {
        let isComplete = true
        for(let i = 0; i < stepArr.length; i++) {
            if(stepArr[i] > stepArr[i+1]) {
                const largestEl = stepArr[i]
                stepArr[i] = stepArr[i+1]
                stepArr[i+1] = largestEl
                isComplete = false
            }
        }
        return isComplete ? stepArr : swapPositions(stepArr)

    }
    return swapPositions(arr)
}

const data2 = [10, 32, 5]
function largestNumber(nums) {
    return nums.map(el => el.toString()).sort((a,b) => a + b > b + a ? -1 : 1).join('')
}
