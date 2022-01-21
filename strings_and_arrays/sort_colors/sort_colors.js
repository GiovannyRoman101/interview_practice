/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	if(nums.length <= 1){
		return nums
	}
	let index_0 = 0
	let index_1 = 0
	for(let i = 0; i < nums.length; i++){
		if(nums[i] === 2){
			continue
		}else if(nums[i] === 1){
			let temp = nums[i]
			nums[i] = nums[index_1]
			nums[index_1] = temp
			index_1++
			
		}else if(nums[i] === 0){
			let temp = nums[i]
			nums[i] = nums[index_1]
			nums[index_1] = nums[index_0]
			nums[index_0] = temp
			index_0++
			index_1++
			
		}
	}
	return nums
}
console.log(sortColors([0]))
console.log(sortColors([2,0,1]))
console.log(sortColors([2,0,2,1,1,0]))