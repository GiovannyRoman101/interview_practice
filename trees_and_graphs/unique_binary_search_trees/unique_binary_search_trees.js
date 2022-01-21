/**
 * @param {number} n
 * @return {number}
 */

// f(n) = (2n)! / ((n+1)!n!)

function numTrees(n) {
	let memo = [1,1]

	function factorial(num){
		if(memo[num] ){
			return memo[num]
		}else{
			memo[num] = num * factorial(num-1)
			return memo[num]
		}
	}
	
	return factorial(2*n) / (factorial(n+1) * factorial(n))
}

console.log(numTrees(3))