/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// bad runtime o(n^2)
// var containsNearbyDuplicate = function (nums, k) {
// 	for(let i = 0; i < nums.length; i++){
// 		for(let j = i+1; j <nums.length; j++){
// 			if(nums[i] === nums[j] && Math.abs(i-j) <= k){
// 				return true
// 			}
// 		}
// 	}
// 	return false
// }
// o(n) run time
var containsNearbyDuplicate = function (nums, k) {
	let map = new Map()
	for(let i = 0; i < nums.length; i++){
		if(!map.has(nums[i])){
			map.set(nums[i], i)
		}else{
			if( Math.abs(map.get(nums[i]) - i) <= k){
				return true
			}
			map.set(nums[i], i)
		}
	}
	return false
}
console.log(containsNearbyDuplicate([1,0,1,1],1))