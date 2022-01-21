/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
		if(i === 0){
			result.push([1])
		}else {
			let level = [...result[i-1]]
			for(let j = 1; j < level.length; j++){
				level[j] = result[i-1][j] + result[i-1][j-1]
			}
			level.push(1)
			result.push(level)
		}
	}
	return result
}

console.log(generate(5))
