/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0)
        }
        let temp = map.get(nums[i])
        temp++
        map.set(nums[i], temp)
    }
    let result = []
    for(let [key, freq] of map.entries()){
		result.push([key,freq])
	}
	result.sort((a,b)=>{ return b[1]- a[1] })
	result = result.slice(0,k)
	for(let i = 0; i < k; i++){
		result[i] = result[i][0]
	}
	return result
}

console.log(topKFrequent([1,1,1,2,2,3],2))