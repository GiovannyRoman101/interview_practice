/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if(nums === null || nums.length === 0){
		return -1
	}

	let left = 0
	let right = nums.length-1

	while(left <= right){
		let mid = Math.floor((left + right)/2)
		// found target
		if(nums[mid] === target){
			return mid

			// 
		}else if(nums[left] <= nums[mid]){
			// if target is in first half 
			if(nums[left] <= target && target <= nums[mid]){
				right = mid-1
			}else{
				left = mid+1
			}

		}else if(nums[mid] <= nums[right]){
			// if target is in second half
			if(nums[mid] <= target && target <= nums[right]){
				left = mid+1
			}else{
				right = mid-1
			}
		}
	}
	return -1
}

console.log(search([4,5,6,7,0,1,2],0))
console.log(search([4,5,6,7,0,1,2],3))
console.log(search([1],0))