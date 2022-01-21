/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let result = [-1,-1]
	if(nums === null || nums.length === 0){
		return result
	}
	let left = 0
	let right = nums.length -1
	while(left <= right){
		let middle = Math.floor((left+right)/2)
		if(nums[middle] === target){
			result[0] = middle
			result[1] = middle
			while(result[0] >= 0){
				let lindex = result[0]-1
				if(nums[lindex] === target){
					result[0] = lindex
				}else{
					break
				}
			}

			while(result[1] < nums.length){
				let rindex = result[1]+1
				if(nums[rindex] === target){
					result[1] = rindex
				}else{
					break
				}
			}

			return result
		}else if(nums[middle] > target){
			right = middle -1
		}else{
			left = middle + 1
		}
	}
	return result
}

// can be improved by doing two binary seaches and if it is equal, move left over for one and right for the other search

console.log(searchRange([5,7,7,8,8,10], 6))