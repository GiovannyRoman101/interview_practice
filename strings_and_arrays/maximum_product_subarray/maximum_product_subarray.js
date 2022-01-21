/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let positive = nums[0]
	let negative = nums[0]
	let max = nums[0]
	for(let i = 1; i < nums.length; i++){
		let temp_neg = negative
		let temp_pos = positive
		negative = Math.min(nums[i], temp_pos * nums[i], temp_neg * nums[i] )
		positive = Math.max(nums[i], temp_pos * nums[i], temp_neg * nums[i])
		max = Math.max(positive, max)
	}
	return max
}

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))