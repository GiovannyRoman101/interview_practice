/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	if(k > nums.length){
		k = k % nums.length
	}
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
}
