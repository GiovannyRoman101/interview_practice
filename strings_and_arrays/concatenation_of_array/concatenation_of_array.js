// problem 1929. Concatenation of Array


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i])
    }
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i])
    }
    return result
}

function getConcatenation1 (nums){
	return [...nums, ...nums]
}

export default getConcatenation