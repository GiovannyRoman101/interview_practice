/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0
    let zeroes = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        } else {
            zeroes++
        }
    }
    for (let i = 0; i < zeroes; i++) {
        nums[nums.length - 1 - i] = 0
    }
}
let arr = [0, 1, 0, 3, 12]
moveZeroes(arr)
console.log(arr)
