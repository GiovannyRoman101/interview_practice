/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let jumps = 0
	let max = 0
	let target = 0

	for(let i = 0 ; i < nums.length-1; i++){
		// get longest jump possible
		max = Math.max(max, i + nums[i])

		// travel max jump currently availble
		if( i === target){
			// update distance
			target = max
			jumps++
		}
	}
	return jumps
}

console.log(jump([2,3,1,1,4]))