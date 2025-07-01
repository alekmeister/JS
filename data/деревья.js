// В сбалансированном дереве операции добавления, удаления и поиска выполняются за O(log n)
// Бинарное дерево поиска (BST) - дерево, в котором левые значения <= текущего, а правые >=.

// Вершина дерева — объект, который может хранить информацию и ссылаться на другие вершины.
// Синонимы: узел, нода.

// Ребро дерева — направленная, то есть иерархическая, связь между двумя вершинами.

// Путь в дереве — набор вершин, в котором следующие друг за другом узлы соединены рёбрами.
// Синоним: маршрут.

// Дерево — совокупность вершин и рёбер без циклов, где у каждой вершины есть не более одного родителя.

// Виды обхода:
// Прямой обход - сначала мы смотрим на корень дерева, потом переводим взгляд на поддерево.
// В поддеревьях рекурсивно повторяем тот же алгоритм: сначала изучаем корень, потом — поддеревья.

function printForward(vertex) {
    console.log(vertex.value);
    vertex.children.forEach(child => printForward(child));
}
// Обратный обход. Он очень похож на прямой.
// При обратном обходе сначала рассматриваются все поддеревья в любом порядке и только потом — корень поддерева.
// Например подзадачи. Если все подзадачи выполнены, то и главная задача тоже
function printReversed(vertex) {
    vertex.children.forEach(child => printReversed(child));
    console.log(vertex.value);
}

//Центрированный обход
//  Центрированный метод обхода подходит только для бинарных деревьев.
// В этом методе есть два варианта:
// сначала выводить левое поддерево, центр, потом правое LMR (left-middle-right) - отсортированы по возрастанию
// сначала правое поддерево, потом центр, потом левое — RML(right-middle-left) - по убыванию

function print_LMR(vertex) {
    if (vertex.left !== null) {
        print_LMR(vertex.left);
    }
    console.log(vertex.value);
    if (vertex.right !== null) {
        print_LMR(vertex.right);
    }
}

// Вставка в двоичное дерево
function insertNode(root, key) {
    if (root === null) {
        return new Node(key);
    }

    if (key < root.key) {
        root.left = insertNode(root.left, key);
    } else if (key >= root.key) {
        root.right = insertNode(root.right, key);
    }

    return root;
}


// Поиск в диапазоне [left, right]
function printRange(root, left, right) {
    if (root === null) {
        return;
    }
    if (left <= root.value) {
        printRange(root.left, left, right);
    }
    if (left <= root.value && right >= root.value) {
        console.log(root.value);
    }
    if (right >= root.value) {
        printRange(root.right, left, right);
    }
}

function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
// удаление
function remove(node, key) {
    if (node === null) {
        return null; // Базовый случай: пустое дерево
    }

    if (key < node.value) {
        node.left = remove(node.left, key); // Ищем в левом поддереве
    } else if (key > node.value) {
        node.right = remove(node.right, key); // Ищем в правом поддереве
    } else {
        // Нашли узел, который нужно удалить

        // 1️⃣ Узел без детей
        if (node.left === null && node.right === null) {
            return null; // Просто удаляем узел
        }

        // 2️⃣ Узел с одним ребёнком
        if (node.left === null) {
            return node.right; // Заменяем узел его правым поддеревом
        }
        if (node.right === null) {
            return node.left; // Заменяем узел его левым поддеревом
        }

        // 3️⃣ Узел с двумя детьми
        let minNode = findMin(node.right); // Ищем минимальный узел справа
        node.value = minNode.value; // Заменяем значение
        node.right = remove(node.right, minNode.value); // Удаляем минимальный узел
    }
}


