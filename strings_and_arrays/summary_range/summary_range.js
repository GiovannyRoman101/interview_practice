/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	if(nums.length === 0){
		return []
	}
	let result = []
	let first = nums[0]

	for(let i = 1; i < nums.length; i++){
		if(nums[i] - nums[i-1] !== 1){
			if(first !== nums[i-1]){
				result.push(`${first}->${nums[i-1]}`)
				first = nums[i]
			}else{
				result.push(`${first}`)
			}
			first = nums[i]
		}
	}

	if(first !== nums[nums.length -1]){
		result.push(`${first}->${nums[nums.length -1]}`)
	}else{
		result.push(`${first}`)
	}
	return result
}

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
console.log(summaryRanges([]))