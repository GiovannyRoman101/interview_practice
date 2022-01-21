// problem 62. Unique Paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	if(m < 1 || n < 1){
		return 0
	}
	let result = []
	for(let i = 0; i < m; i++){
		result.push([])
	}
	for(let i = 0; i < m; i++){
		result[i][0] = 1
	}
	for(let i = 0; i < n; i++){
		result[0][i] = 1
	}

	for(let i = 1; i < m; i++){
		for(let j = 1; j < n; j++){
			result[i][j] = result[i][j-1] + result[i-1][j]
		}
	}
	return result[m-1][n-1]
}
