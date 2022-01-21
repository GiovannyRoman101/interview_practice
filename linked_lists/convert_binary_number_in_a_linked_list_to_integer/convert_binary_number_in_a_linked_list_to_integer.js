/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let str = ''
    let curr = head
    while (curr !== null) {
        str += curr.val
        curr = curr.next
    }
    return parseInt(str, 2)
}
let list = new ListNode(1)
list.next = new ListNode(0)
list.next.next = new ListNode(1)

console.log(getDecimalValue(list))
