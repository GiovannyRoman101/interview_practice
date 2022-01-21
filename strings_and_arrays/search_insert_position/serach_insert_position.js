/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	if(nums === null || nums.length === 0){
		return 0
	}
	let left = 0
	let right = nums.length -1
	while (left <= right){
		let mid = Math.floor((left+right)/2)
		if(nums[mid] === target){
			return mid
		}else if(nums[mid] < target){
			left = mid+1
		}else{
			right = mid -1
		}
	}
	return left
}

function searchInsert1 (nums, target){
	if(nums === null || nums.length === 0){
		return 0
	}

	for(let i = 0; i < nums.length; i++){
		if(target === nums[i]){
			return i
		}else if(target <= nums[i]){
			return i
		}
	}
	return nums.length
}
