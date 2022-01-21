/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let left = 0
	let right = 0
	let min = Infinity
	let curSum = 0
	while(right < nums.length){
		curSum += nums[right]
		right++
		if(curSum > target){
			while(curSum > target){
				curSum -= nums[left]
				left++
				min = Math.min(min , (right - left) +1 )
			}
		}
		if(curSum >= target){
			min = Math.min(min , (right - left)  )
		}
		
	}

	return min === Infinity ? 0 : min
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(11 ,[1,2,3,4,5]))