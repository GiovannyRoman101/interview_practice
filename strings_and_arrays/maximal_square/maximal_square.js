/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	let dp = []
	let max = 0
	for(let i = 0; i < matrix.length; i++){
		if(matrix[i][0] === '1'){
			dp.push([1])
			max = 1
		}else{
			dp.push([0])
		}
	}
	for(let i = 0; i < matrix[0].length; i++){
		if(matrix[0][i] === '1'){
			dp[0][i] = 1
			max = 1
		}else{
			dp[0][i] = 0
		}
	}
	
	for(let i = 1; i < matrix.length; i++){
		for(let j = 1;j < matrix[i].length; j++ ){
			if(matrix[i][j] === '1'){
				dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1])+1
				max = Math.max(max, dp[i][j])
			}else{
				dp[i][j] = 0
			}
		}
	}
	return max * max
}
console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))
console.log(maximalSquare([["0","1"],["1","0"]]))
console.log(maximalSquare(['0']))