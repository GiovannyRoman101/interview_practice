/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if(nums === null || nums.length === 0){
		return 0
	}
	for(let i = 0; i < nums.length; i++){
		if(i === 0){
			continue
		}else if ( i === 1){
			nums[i] = Math.max(nums[i], nums[i-1])
		}else{
			nums[i] = Math.max(nums[i-1], nums[i-2] + nums[i])
		}
	}
	return nums[nums.length-1]
}
console.log(rob([1,2]))
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))