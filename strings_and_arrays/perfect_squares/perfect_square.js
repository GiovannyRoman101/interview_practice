/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	let memo = []
	for(let i = 0; i <= n; i++){
		memo[i] = i
		for(let j = 1; (j*j)<=i ; j++){
			//
			memo[i] = Math.min(memo[i],memo[i - (j*j)]+1 )
		}
	}
	return memo[memo.length-1]
}

console.log(numSquares(33))