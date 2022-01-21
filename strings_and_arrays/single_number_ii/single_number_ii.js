/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let freq = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (freq.has(nums[i])) {
            freq.set(nums[i], freq.get(nums[i]) + 1)
        } else {
            freq.set(nums[i], 1)
        }
    }
    for (let key of freq.keys()) {
        if (freq.get(key) === 1) {
            return key
        }
    }
    return -Infinity
}
