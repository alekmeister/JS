class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currentNode = this.root

        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode()
            }
            currentNode = currentNode.children[char]
        }
        currentNode.isEnd = true

    }

    search(word) {
        let currentNode = this.root
        for (let char of word) {
            if (!currentNode.children[char]) return false;
            currentNode = currentNode.children[char]
        }
        return currentNode.isEnd

    }

    startsWith(prefix) {
        let currentNode = this.root
        for (let char of prefix) {
            if (!currentNode.children[char]) return false;
            currentNode = currentNode.children[char]
        }
        return true
    }

}


const trie = new Trie();
trie.insert("app");
trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
console.dir(trie, {depth:null})
trie.search("app");     // return True

//console.log(obj.search('word'), obj.search('work'))
//console.dir(obj, {depth:null})
