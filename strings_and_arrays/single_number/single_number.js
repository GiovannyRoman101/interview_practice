/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let map = new Map()
	for(let i = 0; i < nums.length ; i++){
		if(!map.has(nums[i])){
			map.set(nums[i], 0)
		}
		let temp = map.get(nums[i])
		temp++
		map.set(nums[i], temp)
	}

	for(let key of map.keys()){
		if(map.get(key) === 1){
			return key
		}
	}
	return -1
}
