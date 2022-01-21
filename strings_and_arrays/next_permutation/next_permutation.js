/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// TODO:
var nextPermutation = function (nums) {
	if(nums === null || nums.length === 1){
		return nums
	}
	for(let i = nums.length -1; i >=0; i-- ){
		if(i === (nums.length -1)){
			continue
		}
		if(nums[i] < nums[i+1]){
			for(let j = i+1; j < nums.length; j++){
				if(j == nums.length -1){
					let temp = nums[i]
					nums[i] = nums[j]
					nums[j] = temp
					break
				}else if(nums[i] < nums[j] && nums[i] > nums[j+1]){
					let temp = nums[i]
					nums[i] = nums[j]
					nums[j] = temp
					break
				}
			}
			// reverse
			for(let j = 0; j < Math.floor((nums.length-i-1)/2); j++){
				let temp = nums[i+j]
				nums[i+j] = nums[nums.length -1 - j]
				nums[nums.length -1 - j] = temp
			}
			return nums
		}
	}
	let temp = nums[0]
	nums[0] = nums[nums.length -1 ]
	nums[nums.length -1 ] = temp
	return nums
}

console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))
console.log(nextPermutation([1,1,5]))
console.log(nextPermutation([1]))