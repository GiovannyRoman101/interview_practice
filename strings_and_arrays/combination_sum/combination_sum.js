/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	let result = []
	if(candidates.length === 0){
		return result
	}

	candidates.sort((a,b) =>{ return a - b})
	function backtracking(index = 0, currSum = 0, currPath = []){
		if(currSum === target){
			result.push([...currPath])
		}else{
			for(let i = index; i < candidates.length; i++){
				if(currSum + candidates[i] > target){
					continue
				}else{
					currPath.push(candidates[i])
					backtracking(i,currSum +candidates[i], currPath)
					currPath.pop()
				}
			}
		}
	}
	backtracking()
	return result
}

console.log(combinationSum([2,3,6,7],7))