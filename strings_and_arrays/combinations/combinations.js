/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let result = []
	function backtracking(index, curArr = []){
		if(curArr.length === k){
			result.push([...curArr])
		}else{
			for(let i = index; i <= n; i++){
				curArr.push(i)
				backtracking(i+1,curArr)
				curArr.pop()
			}
		}
	}
	backtracking(1)
	return result
}

console.log(combine(4,2))