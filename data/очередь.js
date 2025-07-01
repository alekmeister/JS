//Работает по принципу FIFO First In First Out, «первым вошёл — первым вышел».
// push(item) — добавляет элемент в конец очереди;
// pop() — берёт элемент из начала очереди и удаляет его;
// peek() — берёт элемент из начала очереди без удаления;
// size() — возвращает количество элементов в очереди.

// Очередь на массиве
// Удаление/Добавление в начало O(n)

// Очередь на связанном списке
// Добавление в конец O(1), в начало O(1)

// Очередь на кольцевом буфере ( ограничение на количество элементов )
class Queue {
    constructor(n) {
        this.queue = new Array(n).fill(null);
        this.headIndex = 0;
        this.tailIndex = 0;
        this.maxN = Number(n);
        this.sizeN = 0;
    }

    isEmpty() {
        return this.sizeN === 0
    }
    push(el) {
        // очередь ограничена по размеру, позволяет эффективно контролировать память
        // если захотим добавить слишком много элементов, условие не выполнится и push не отработает
        if (this.sizeN < this.maxN) {
            this.queue[this.tailIndex] = el; // записываем элемент в очередь
            // если очередь заполнена, то индекс будет равен 0: (4+1) % 5 = 0
            this.tailIndex = (this.tailIndex + 1) % this.maxN;
            // увеличиваем размер
            this.sizeN += 1;
        } else {
            return 'error'
        }
    }

    pop() {
        if (this.isEmpty()) {
            return 'None';
        }
        let el = this.queue[this.headIndex];
        this.queue[this.headIndex] = null;
        this.headIndex = (this.headIndex + 1) % this.maxN;
        this.sizeN -= 1;
        return el
    }

    peek() {
        if (this.isEmpty()) {
            return 'None';
        }
        return this.queue[this.headIndex]
    }
    size() {
        return this.sizeN
    }
}


// Очередь на списке
// Операции выполняются за O(1)
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedNodeList {
    constructor() {
        this.head = null;   // Указатель на начало очереди (голова)
        this.tail = null;   // Указатель на конец очереди (хвост)
        this.maxSize = 0;   // Текущий размер очереди
    }

    put(x) {
        const newNode = new Node(x); // Создаем новый узел с переданным значением
        if (this.tail) {
            this.tail.next = newNode; // Если хвост существует, связываем его с новым узлом
        }
        this.tail = newNode;         // Обновляем указатель хвоста на новый узел
        if (!this.head) {
            this.head = newNode;     // Если голова отсутствует (очередь пуста), она становится новым узлом
        }
        this.maxSize += 1;           // Увеличиваем размер очереди
    }

    get() {
        if (this.head === null) return 'error'; // Если очередь пуста, возвращаем "error"
        const value = this.head.value;          // Сохраняем значение головы
        this.head = this.head.next;             // Перемещаем голову на следующий узел
        if (this.head === null) {
            this.tail = null;                   // Если очередь стала пустой, обнуляем хвост
        }
        this.maxSize -= 1;                      // Уменьшаем размер очереди
        return value;                           // Возвращаем значение удаленного элемента
    }


    size() {
        return this.maxSize;
    }
}

// Очередь на двух стэках
// Элементы всегда добавляем в первый стек.
// Элементы всегда вынимаем из второго стека.
// Если второй стек пуст, перекладываем все элементы, пока первый стек не станет пустым.


class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(x) {
        this.pushStack.push(x);
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Очередь пуста");
        }

        if (this.popStack.size() === 0) {
            while (this.pushStack.size() > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }

        const result = this.popStack.pop();
        this.size--;
        return result;
    }
}
