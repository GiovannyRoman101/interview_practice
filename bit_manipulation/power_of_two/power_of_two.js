/**
 * @param {number} n
 * @return {boolean}
 */
// Time exceeded
var isPowerOfTwo = function (n) {
	let num = 1
	while(num <= n){
		if(num === n){
			return true
		}
		num = num << 1
	}
	return false
}
// constant time
var isPowerOfTwo = function (n) {
	// log operations take time
	let num = Math.log10(n) / Math.log10(2)
	return Number.isInteger(num)
}

var isPowerOfTwo = function (n) {
	if(n <= 0){
		return false
	}
	return (n & (n-1)) === 0
}



console.log(isPowerOfTwo(3))