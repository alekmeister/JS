class TrieNode {
    constructor () {
        this.children = {}
        this.words = []
    }
}

class Trie {
    constructor () {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for(let char of word) {
            if(!Object.hasOwn(node.children, char)) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
            node.words.push(word)
        }
    }

    search(word) {
        let node = this.root
        for(let char of word) {
            if(!Object.hasOwn(node.children, char)) {
                return false
            }
            node = node.children[char]
        }
        return node.words
    }
}

var suggestedProducts = function(products, searchWord) {
    const trie = new Trie()

    for(let product of products) {
        trie.insert(product)
    }

    const result = []

    for (let i = 1; i < searchWord.length + 1; i++) {
        const substr = searchWord.slice(0, i)
        const searchRes = trie.search(substr)
        if(searchRes) {
            result.push(searchRes.sort().slice(0,3))
        } else {
            result.push([])
        }
    }

    return result
};

