/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
	if(s === null || s.length === 0){
		return ''
	}
	let maxWord = ''
	for(let i = 0; i < s.length; i++){
		let odd = expand(s, i,i)
		let even = expand(s,i,i+1)

		if(odd.length > even.length){
			if(maxWord.length < odd.length){
				maxWord = odd
			}
		}else{
			if(maxWord.length < even.length){
				maxWord = even
			}
		}
	}

	return maxWord

	function expand(str, left, right){
		while(left >= 0 && right < str.length && str[left] === str[right] ){
			left--
			right++
		}
		return str.slice(left+1, right)
	}
}


console.log(longestPalindrome('baba'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('cb'))