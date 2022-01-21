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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    let nondup = null
    let ptr_nd = null
    let slow = head
    let fast = head.next
    while (fast !== null) {
        if (slow.val === fast.val) {
            while (fast !== null && fast.val === slow.val) {
                fast = fast.next
            }
            slow = fast
            if (fast !== null) {
                fast = fast.next
            }
        } else {
            if (nondup === null) {
                nondup = slow
                ptr_nd = nondup
            } else {
                ptr_nd.next = slow
                ptr_nd = ptr_nd.next
            }
            fast = fast.next
            slow = slow.next
        }
    }
    if (nondup === null) {
        nondup = slow
    } else {
        ptr_nd.next = slow
    }
    return nondup
}
let list = new ListNode(1)
list.next = new ListNode(1)
list.next.next = new ListNode(1)
list.next.next.next = new ListNode(2)
list.next.next.next.next = new ListNode(2)

console.log(deleteDuplicates(list))
