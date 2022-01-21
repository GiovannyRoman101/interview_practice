/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0

	while(row < matrix.length){
		let first_val = matrix[row][0]
		let last_val = matrix[row][matrix[row].length -1]

		if(first_val <= target && target <= last_val){
			let left = 0
			let right = matrix[row].length -1
			while(left <= right){
				let mid = Math.floor( (left + right) /2)
				if(matrix[row][mid] === target){
					return true
				}else if(matrix[row][mid] < target){
					left = mid+1
				}else{
					right = mid-1
				}
			}
		}
		row++
	}
	return false
}

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5))
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))