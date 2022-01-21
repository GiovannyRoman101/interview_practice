// problem 17. Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	let map = new Map()
	map.set('2', ['a','b','c'])
	map.set('3', ['d','e','f'])
	map.set('4', ['g','h','i'])
	map.set('5', ['j','k','l'])
	map.set('6', ['m','n','o'])
	map.set('7', ['p','q','r','s'])
	map.set('8', ['t','u','v'])
	map.set('9', ['w','x','y','z'])

	let result = []
	if(digits.length === 0){
		return result
	}

	function backtracking(str, currStr = ''){
		if(str.length === 0){
			result.push(currStr)
		}else{
			let letters = map.get(str[0])
			for(let i = 0; i < letters.length; i++){
				backtracking(str.slice(1),currStr + letters[i])
			}
		}
	}
	backtracking(digits)
	return result
}
