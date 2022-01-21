/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let result = []
	
	for(let i = 0; i < n; i++){
		result.push([])
	}
	let counter = 1
	let left = 0
	let top = 0
	let right = n-1
	let bottom = n-1
	while(left < right && top < bottom){
		for(let i = left; i <= right; i++){
			result[top][i] = counter++
		}
		top++
		for(let i = top; i <= bottom; i++){
			result[i][right] = counter++
		}
		right--
		for(let i = right; i >= left; i--){
			result[bottom][i] = counter++
		}
		bottom--
		for(let i = bottom; i >= top; i--){
			result[i][left] = counter++
		}
		left++
	}

	if(left === right){
		// if there is a vertical column remaining
		for(let i = top; i <= bottom; i++){
			result[i][left] = counter++
		}
	}else if (bottom === top){
		// if there is a horizonal row remaining
		for(let i = left; i <= right; i++){
			result[top][i] = counter++
		}
	}

	return result

}

console.log(generateMatrix(3))