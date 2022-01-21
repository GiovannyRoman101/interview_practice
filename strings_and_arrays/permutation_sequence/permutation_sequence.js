/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
	let numbers = []
	for(let i = 1; i <= n; i++){
		numbers.push(i)
	}
	let result = []
	function backtracking(list, curPer = []){
		if(list.length === 0){
			result.push([...curPer])
			return
		}else if(result.length === k){
			return
		}else{
			for(let i = 0; i < list.length; i++){
				curPer.push(list[i])
				backtracking([...list.slice(0,i), ...list.slice(i+1)], curPer)
				curPer.pop()
			}
		}
	}
	backtracking(numbers)
	return result[k-1].join('')
}

console.log(getPermutation(3,3))