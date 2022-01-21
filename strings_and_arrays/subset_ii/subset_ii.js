/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	let result = []
	result.push([])
	if(nums === null || nums.length === 0){
		return result
	}
	nums.sort((a,b) =>{return a-b})

	function backtracking(set, curSet = []){
		if(set === null || set.length === 0){
			return
		}
		for(let i = 0; i < set.length; i++){
			if( i > 0 && set[i] === set[i-1]){
				continue
			}
			curSet.push(set[i])
			result.push([...curSet])
			backtracking([...set.slice(i+1)], curSet)
			curSet.pop()
		}
	}

	backtracking(nums)
	return result

}

console.log(subsetsWithDup([1,2,2]))