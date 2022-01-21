/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let result = []
    nums.sort((a, b) => { return a-b})
	for(let i = 0; i < nums.length -2; i++){
		if( i > 0 && nums[i] === nums[i-1]){
			continue
		}
		let left = i+1
		let right = nums.length -1
		while(left < right){
			let sum = nums[i]+ nums[left] + nums[right]
			if(sum === 0){
				result.push([nums[i], nums[left], nums[right]])
				left++
				right--
				while(nums[left] === nums[left-1] && left < nums.length){
					left++
				}
				while(nums[right] === nums[right+1] && right > i){
					right--
				}

			}else if(sum > 0){
				right --
			}else{
				left++
			}
		}
	}

	return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))