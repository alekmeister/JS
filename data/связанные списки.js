// Односвязанный список
// Вставка и удаление элементов в начале или середине списка выполняются за O(1) (если известен указатель на узел).
// Медленный доступ к элементам:
//     Доступ к элементу по индексу требует обхода от головы до нужного узла (сложность O(n)). В массиве доступ по индексу выполняется за O(1).
//     Сложный в реализации по сравнению с массивом

// Двусвязанный список
// Хранит ссылку на предыдущий элемент. Можем эффективно перемещаться в обоих направлениях
//



class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function length(node) {
    let count = 0;
    while (node) {
        count++;
        node = node.next;
    }
    return count;
}

const head = new Node(1, new Node(2, new Node(3, null)));
console.log(length(head)); // Ожидаемый результат: 3

// Вставка по индексу
function getNodeByIndex(node, index) {
  while (index) {
    node = node.next;
    index -= 1;
  }
  return node;
}

function insertNode(head, index, value) {
  const newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  const previousNode = getNodeByIndex(head, index - 1);
  newNode.next = previousNode.next;
  previousNode.next = newNode;
  return head;
}

function deleteNode(head, idx) {
    // Если индекс 0, удаляем первую ноду
    if (idx === 0) {
        return head.next;  // просто возвращаем следующий элемент как новый head
    }

    let current = head;
    let currentIndex = 0;

    // Идем по списку до нужной ноды
    while (current && currentIndex < idx - 1) {
        current = current.next;
        currentIndex++;
    }

    // Если current.next существует, это значит, что мы нашли нужную ноду
    if (current && current.next) {
        current.next = current.next.next;  // пропускаем ноду, которую нужно удалить
    }

    return head;
}
