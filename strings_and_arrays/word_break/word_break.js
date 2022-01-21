/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	if(s.length === 0){
		return true
	}
	function backtracking(wordDict, str){
		if(str.length === 0){
			return true
		}
		let flag = false
		for(let word of wordDict){
			let temp = str.slice(0, word.length)
			if(temp === word){
				flag = backtracking(wordDict, str.slice(word.length)) || flag
			}
		}
		return flag
	}
	return backtracking(wordDict, s)
}
console.log(wordBreak('leetcode', ["leet","code"]))
console.log(wordBreak("applepenapple", ["apple","pen"]))
console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"]))