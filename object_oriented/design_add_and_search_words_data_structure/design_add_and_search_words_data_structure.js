
function TrieNode(){
	this.isEnd = false
	this.children = new Map()
}

class WordDictionary{
	constructor(){
		this.root = new TrieNode()
	}
	/** 
	* @param {string} word
	* @return {void}
	*/
	addWord(word){
		if(word.length === 0){
			return
		}
		let curr = this.root
		while(word.length !==0){
			if(!curr.children.has(word[0])){
				curr.children.set(word[0], new TrieNode())
			}
			curr = curr.children.get(word[0])
			word = word.slice(1)
		}
		curr.isEnd = true
	}

	/** 
	* @param {string} word
	* @return {boolean}
	*/
	search(word){
		let curr = this.root
		function dfs(node, remaining){
			if(remaining.length === 0){
				return node.isEnd
			}else{
				if(node.children.has(remaining[0])){
					return dfs(node.children.get(remaining[0]), remaining.slice(1))
				}else if(remaining[0] === '.'){
					let flag = false
					for(let key of node.children.keys()){
						flag = dfs(node.children.get(key), remaining.slice(1)) ||flag
					}
					return flag
				}
				return false
			}
		}
		return dfs(curr, word)
	}
	
}

let dictionary = new WordDictionary()
dictionary.addWord('bad')
dictionary.addWord('dad')
dictionary.addWord('mad')
console.log(dictionary.search('pad'))
console.log(dictionary.search('bad'))
console.log(dictionary.search('.ad'))
console.log(dictionary.search('b..'))