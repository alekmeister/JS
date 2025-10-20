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
        let node = this.root
        for(let char of word) {
            if(char in node.children) {
                node = node.children[char]
            } else {
                node.children[char] = new TrieNode()
                node = node.children[char]
            }

        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root
        for(let char of word) {
            if(char in node.children) {
                node = node.children[char]
            } else {
                return false
            }
        }
        return node.isEnd
    }

    startsWith(prefix) {
        let node = this.root
        for(let char of prefix) {
            if(char in node.children) {
                node = node.children[char]
            } else {
                return false
            }
        }
        return true
    }
}
