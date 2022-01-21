/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
	let slow = 0
	let fast = 1
	while(fast < nums.length){
		if(fast <= slow){
			fast++
			slow = fast - k > 0 ? fast - k : 0
		}else{
			if(Math.abs(fast -slow) <= k && Math.abs(nums[fast] - nums[slow]) <= t){
				return true
			}
			slow++
		}
	}
	return false
}

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3 ,0))
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2,3))
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1,2))
console.log(containsNearbyAlmostDuplicate([1,2,1,1],1,0))