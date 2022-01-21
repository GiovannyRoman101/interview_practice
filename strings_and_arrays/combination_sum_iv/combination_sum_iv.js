/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    if (target === 0 || nums.length === 0) {
        return 0
    }

	// can be improved with memo array
    function backtracking(curSum = 0) {
        if (curSum === target) {
            return 1
        }
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] + curSum > target) {
                continue
            }
            count += backtracking(nums[i] + curSum)
        }
        return count
    }
	return backtracking()
}

console.log(combinationSum4([1,2,3],4))
console.log(combinationSum4([9],3))