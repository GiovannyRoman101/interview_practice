/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0]
	let currSum = nums[0]
	for(let i = 1; i < nums.length; i++){
		let num = nums[i]
		currSum = Math.max(num, currSum + num)
		max = Math.max(max, currSum)
	}
	return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))