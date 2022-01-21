/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let result = []

    function backtracking(index = 1, curSum = 0, curSet = []) {
        if (curSet.length === k && curSum === n) {
            result.push([...curSet])
        } else if (curSet.length < k) {
            for (let i = index; i <= 9; i++) {
                if (i + curSum <= n) {
					curSet.push(i)
					backtracking(i+1, curSum + i,curSet)
					curSet.pop()
                }else{
					break
				}
            }
        }
    }
	backtracking()
	return result
}

console.log(combinationSum3(3,9))