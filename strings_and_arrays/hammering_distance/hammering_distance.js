/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function (x, y) {
// 	let binary_x = x.toString(2)
// 	let binary_y = y.toString(2)
// 	let distance = 0
// 	let length = Math.max(binary_x.length, binary_y.length)
// 	for(let i = 0; i < length; i++ ){
// 		let tempx = binary_x[binary_x.length -1-i] === undefined ? '0': binary_x[binary_x.length -1-i]
// 		let tempy = binary_y[binary_y.length -1-i] === undefined ? '0': binary_y[binary_y.length -1-i]
// 		if(tempx !== tempy){
// 			distance++
// 		}
// 	}

// 	return distance
// }

var hammingDistance = function (x, y) {
	let num = x ^ y
	num = num.toString(2)
	let distance = 0
	for(let i = 0; i < num.length; i++){
		if(num[i] === '1'){
			distance++
		}
	}
	return distance
}

console.log(hammingDistance(1,4))