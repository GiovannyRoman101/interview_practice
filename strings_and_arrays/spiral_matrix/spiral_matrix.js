/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let result = []
	let left = 0
	let right = matrix[0].length-1
	let top = 0
	let bottom = matrix.length-1
	while(left < right && bottom > top){
		for(let i = left; i <= right; i++){
			result.push(matrix[top][i])
		}
		top++
		for(let i = top; i <= bottom; i++){
			result.push(matrix[i][right])
		}
		right--
		for(let i = right; i >= left; i--){
			result.push(matrix[bottom][i])
		}
		bottom--
		for(let i = bottom; i >= top; i--){
			result.push(matrix[i][left])
		}
		left++
	}

	if(left === right){
		// if there is a vertical column remaining
		for(let i = top; i <= bottom; i++){
			result.push(matrix[i][left])
		}
	}else if (bottom === top){
		// if there is a horizonal row remaining
		for(let i = left; i <= right; i++){
			result.push(matrix[top][i])
		}
	}
	return result
}
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))