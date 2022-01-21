/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	let result = []
	for(let i = 0; i < temperatures.length; i++){
		result.push(0)
	}

	let stack = []
	for(let i = 0; i < temperatures.length; i++){
		let currTemp = temperatures[i]
		while(stack.length !== 0 && temperatures[stack[stack.length-1]] < currTemp){
			let prevTemp = stack.pop()
			result[prevTemp] = i - prevTemp
		}
		stack.push(i)
	}
	return result
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))