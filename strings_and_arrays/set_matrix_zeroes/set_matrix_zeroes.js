/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	let zeroes = []

	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j<  matrix[i].length; j++){
			if(matrix[i][j] === 0){
				zeroes.push([i,j])
			}
		}
	}
	while(zeroes.length !== 0){
		let index = zeroes.pop()
		for(let i = 0; i < matrix.length; i++){
			matrix[i][index[1]] = 0
		}
		for(let i = 0; i < matrix[index[0]].length; i++){
			matrix[index[0]][i] = 0
		}
	}
	return matrix
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))