/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

	let start = 0
	let sum = 0
	let diff = 0
	for(let i = 0; i < gas.length; i++){
		// has gas to travel
		sum += gas[i] - cost[i]
		if(sum < 0){
			// move index
			start = i + 1
			// deficit
			diff = diff + sum
			sum = 0
		}
	}
	// if total travel and dificit is positive it can make a circle
	return sum + diff >= 0 ? start : -1
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
console.log(canCompleteCircuit([2,3,4],[3,4,3]))
