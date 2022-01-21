/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	let result = []
	nums.sort((a,b)=>{ return a-b})

	for(let i = 0 ; i < nums.length - 3; i++){
		if(i >0 && nums[i] === nums[i-1]){
			continue
		}
		for(let j = i+1; j < nums.length; j++){
			if(j > i+1 && nums[j] === nums[j-1]){
				continue
			}
			let left = j+1
			let right = nums.length-1
			while(left < right){
				let sum = nums[i] + nums[j] + nums[left] + nums[right]
				if(sum === target){
					result.push([nums[i], nums[j], nums[left], nums[right]])
					left++
					while(left < right && nums[left] === nums[left -1]){
						left++
					}
				}else if(sum > target){
					right--
					while(left < right && nums[right] === nums[right +1]){
						right--
					}
				}else{
					left++
					while(left < right && nums[left] === nums[left -1]){
						left++
					}
				}
			}
		}
	}
	return result
}

console.log(fourSum([1,0,-1,0,-2,2], 0))
console.log(fourSum([2,2,2,2,2], 8))