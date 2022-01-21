/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
	let arr = [0]
	for(let i = 0 ; i < n; i++){
		// adds a 1 to the begin to each number
		for(let j = arr.length-1; j >=0; j--){
			arr.push(arr[j] | 1 << i)
		}
	}
	return arr
}
console.log(grayCode(2))