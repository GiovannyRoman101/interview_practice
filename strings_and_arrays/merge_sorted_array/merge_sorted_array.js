/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let ind = 0
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[ind]
        ind++
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums1[i] < nums1[j]) {
                let temp = nums1[i]
                nums1[i] = nums1[j]
                nums1[j] = temp
            }
        }
    }
}
