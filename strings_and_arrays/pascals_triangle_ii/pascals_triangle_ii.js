/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if(rowIndex === 0){
		return [1]
	}
	let result = [1,1]
	let length = result.length -1 
	for(let i = 1; i <rowIndex; i++){
		for(let j = length; j >= 1; j--){
			result[j] += result[j-1]
		}
		result.push(1)
		length = result.length -1
	}
	return result
}

console.log(getRow(3))
