/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let right = 0
	let result =[]
	let max = 0
	while(right < s.length){
		while(result.includes(s[right])){
			result.shift()
		}
		result.push(s[right])
		max = Math.max(result.length, max)
		right++
	}
	return max
}

console.log(lengthOfLongestSubstring("bbbbb"))