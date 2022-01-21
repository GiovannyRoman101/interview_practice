/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	// if s is empty or starts with a zero
	if(s === null ||s.length === 0 || s[0] === '0'){
		return 0
	}

	let memo = new Array(s.length+1).fill(0)
	// base case 1
	memo[0] = 1
	// it is a possible value
	memo[1] = 1

	for(let i = 2; i <= s.length; i++){

		let single = parseInt(s.slice(i-1, i))
		// if single is a valid number
		if( 0 < single && single < 10){
			memo[i] += memo[i-1]
		}

		let double = parseInt(s.slice(i-2, i))
		// if double is a valid number
		if( 9 < double && double < 27){
			memo[i] += memo[i-2]
		}
	}
	return memo[s.length]
}

console.log(numDecodings('12'))
console.log(numDecodings('226'))
console.log(numDecodings('0'))
console.log(numDecodings('06'))
