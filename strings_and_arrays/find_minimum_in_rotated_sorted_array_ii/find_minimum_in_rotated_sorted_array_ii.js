/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	if(nums === null || nums.length === 0){
		return -1
	}
	let left = 0
	let right = nums.length -1
	while(left < right){
		let mid = Math.floor(left + (right -left)/ 2)
		if(nums[mid] > nums[right]){
			left = mid +1
		}else if( nums[mid] < nums[right]){
			right = mid
		}else{
			right--
		}
	}
	return nums[left]
}

console.log(findMin([1,3,5]))
console.log(findMin([2,2,2,0,1]))
console.log(findMin([3,1,1]))
