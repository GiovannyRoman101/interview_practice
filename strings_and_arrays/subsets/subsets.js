/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
	let result = []
	result.push([])
	if(nums === null || nums.length === 0){
		return result
	}

	function backtracking(set,curSet = []){
		if(set === null || set.length === 0 ){
			return
		}
		for(let i = 0; i < set.length; i++){
			curSet.push(set[i])
			result.push([...curSet])
			backtracking([... set.slice(i+1)], curSet)
			curSet.pop()
		}
	}
	backtracking(nums)
	return result
}

console.log(subsets([1,2,3]))