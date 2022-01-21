// problem 41. First Missing Positive

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	nums.sort((a,b)=> { 
		return a - b
	})
	let result = 1
	for(let i = 0; i < nums.length; i++){
		if(nums[i] === result ){
			result++
		}else if(nums[i]> result){
			return result
		}
	}
	return result
}
