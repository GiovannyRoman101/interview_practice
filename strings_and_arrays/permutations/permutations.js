/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let result = []

	function backtracking(arr,currPer = []){
		if(arr.length === 0){
			result.push([...currPer])
		}else{
			for(let i = 0 ; i < arr.length; i ++){
				currPer.push(arr[i])
				backtracking([...arr.slice(0,i), ...arr.slice(i+1)], currPer)
				currPer.pop()
			}
		}
	}

	backtracking(nums)
	return result
}
console.log(permute([1,2,3]))