/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = []
    if (head === null || head.next === null) {
        return true
    }
    let cur = head
    while (cur !== null) {
        arr.push(cur.val)
        cur = cur.next
    }
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
