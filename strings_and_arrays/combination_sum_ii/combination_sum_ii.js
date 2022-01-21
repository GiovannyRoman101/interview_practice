/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	let result = []
	if(candidates === null || candidates.length === 0){
		return result
	}
	candidates.sort((a,b) =>{return a-b})

	function backtracking(posCan, curSet = [], curSum = 0){
		if(curSum === target && curSet.length !== 0){
			result.push([...curSet])
		}else{
			for(let i = 0; i < posCan.length; i++){
				if(i > 0 && posCan[i] === posCan[i-1]){
					continue
				}
				if((curSum + posCan[i]) > target){
					continue
				}
				curSet.push(posCan[i])
				backtracking([...posCan.slice(i+1)], curSet, curSum + posCan[i])
				curSet.pop()
			}
		}
	}
	backtracking(candidates)
	return result
}
console.log(combinationSum2([10,1,2,7,6,1,5], 8))
console.log(combinationSum2([2,5,2,1,2], 5))