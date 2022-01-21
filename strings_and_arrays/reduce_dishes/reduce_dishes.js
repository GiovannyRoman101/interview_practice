/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
	satisfaction.sort((a,b)=>{ return a-b})
	let result = []
	for(let i = 0; i < satisfaction.length; i++){
		let rating = 0

		for(let j = i, time = 1; j < satisfaction.length; j++, time++){
			rating += satisfaction[j]*time
		}
		result.push(rating)
	}
	let max = 0
	for(let i = 0; i< result.length;i++){
		max = Math.max(max,result[i])
	}
	return max
}
console.log(maxSatisfaction([-1,-8,0,5,-9]))
console.log(maxSatisfaction([4,3,2]))
console.log(maxSatisfaction([-1,-4,-5]))
console.log(maxSatisfaction([-2,5,-1,0,3,-3]))