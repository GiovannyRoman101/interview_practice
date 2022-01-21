// problem 442. Find All Duplicates in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	let map = new Map()
	for(let i = 0; i < nums.length;i++){
		if(map.has(nums[i])){
			map.set(nums[i], map.get(nums[i])+1)
		}else{
			map.set(nums[i], 1)
		}
	}
	let result =[]
	for(let num of map.keys()){
		
		if(map.get(num) !==1){
			result.push(num)
		}
	}
	return result
}

console.log(findDuplicates([1,1,2,4,3]))