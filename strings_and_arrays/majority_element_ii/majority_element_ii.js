/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
	let map = new Map()
	let results = []
	let majority = (nums.length /3)

	for(let i = 0; i < nums.length; i++){
		if(!map.has(nums[i])){
			map.set(nums[i],0)
		}
		let freq = map.get(nums[i])
		freq++
		map.set(nums[i],freq)
	}
	for(let key of map.keys()){
		if(map.get(key) > majority){
			results.push(key)
		}
	}
	return results
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([1]))
console.log(majorityElement([1,2]))