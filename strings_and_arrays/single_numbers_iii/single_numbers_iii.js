/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	let map = new Map()

	for(let i = 0; i < nums.length; i++){
		if(!map.has(nums[i])){
			map.set(nums[i],1)
		}else{
			let temp = map.get(nums[i])
			temp++
			map.set(nums[i], temp)
		}
	}
	let result = []
	for(let key of map.keys()){
		if(map.get(key) === 1){
			result.push(key)
		}
	}
	return result
}

console.log(singleNumber([1,2,1,3,2,5]))