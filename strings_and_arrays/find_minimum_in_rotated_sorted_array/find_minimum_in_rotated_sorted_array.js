/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let left = 0
	let right = nums.length -1
	
	
	while(left < right){
		let mid = Math.floor((left + right)/2)
		// if mid point greater than end point
		// move left to second half
		if(nums[mid] > nums[right]){
			left = mid+1
		// move endpoint to first half
		}else{
			right = mid
		}
	}
	return nums[left]
}
console.log(findMin([3,4,5,1,2]))
