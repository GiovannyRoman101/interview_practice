/**
 * @param {number[]} target
 * @return {number}
 */
// var minNumberOperations = function (target) {
// 	let result = []
// 	let min_op = 0
// 	for(let i = 0; i < target.length; i++){
// 		result[i] = 0
// 	}
// 	let isTarget = false
// 	while(!isTarget){
// 		let hasAdded = false
// 		isTarget = true
// 		for(let i = 0; i < target.length; i++){
// 			if(result[i] === target[i] && !hasAdded){
// 				continue
// 			}else if(result[i] === target[i] && hasAdded){
// 				break
// 			}
// 			if(result[i] !== target[i]){
// 				result[i]++
// 				isTarget = false
// 				hasAdded = true
// 			}
// 		}

// 		if(!isTarget){
// 			min_op++
// 		}
// 	}
// 	return min_op
// }

/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
	let result = target[0]
	for(let i = 1; i < target.length;i++){
		result += Math.max(target[i] - target[i-1],0)
	}
	return result
}

console.log(minNumberOperations([1, 2, 3, 2, 1]))
console.log(minNumberOperations([3, 1, 1, 2]))
console.log(minNumberOperations([3, 1, 5, 4, 2]))
console.log(minNumberOperations([1, 1, 1, 1, 1]))
