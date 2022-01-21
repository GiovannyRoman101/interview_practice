/**
 * Initialize your data structure here.
 */

 function TrieNode(){
	this.isEnd = false
	this.children = new Map()

}

class Trie {
    constructor() {
		this.root = new TrieNode()
	}
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
		if(word.length === 0){
			return
		}
		let curr = this.root
		for(let i = 0; i < word.length; i++){
			if(curr.children.has(word[i])){
				curr = curr.children.get(word[i])
			}else{
				curr.children.set(word[i], new TrieNode())
				curr = curr.children.get(word[i])
			}
			if(i === word.length -1){
				curr.isEnd = true
			}
		}

	}
    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
		let curr = this.root
		for(let i = 0; i < word.length; i++){
			if(curr.children.has(word[i])){
				curr = curr.children.get(word[i])
			}else{
				return false
			}
		}
		return curr.isEnd
	}
    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
		let curr = this.root

		for(let i = 0; i < prefix.length; i++){
			if(curr.children.has(prefix[i])){
				curr = curr.children.get(prefix[i])
			}else{
				return false
			}
		}

		function dfs(root, currword){
			if(root.isEnd){
				return true
			}
			for(let key of root.children.keys()){
				return dfs(root.children.get(key), currword+key)
			}
			return false
		}
		return dfs(curr,prefix)
	}
}