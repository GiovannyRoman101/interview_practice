/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// TODO: 
var search = function (nums, target) {
	if(nums === null || nums.length === 0){
		return false
	}
	let left = 0
	let right = nums.length -1
	while(left <= right){
		let mid = Math.floor((left + right)/2)
		if(nums[left] <= nums[mid] && nums[mid] > nums[mid+1]){
			
		}
	}
	return false
}
console.log(search([2,5,6,0,0,1,2],0))
console.log(search([2,5,6,0,0,1,2],3))