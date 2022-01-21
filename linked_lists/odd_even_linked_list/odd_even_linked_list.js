/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head === null || head.next === null) {
        return head
    }

    let oddhead = null
    let evenhead = null
    let curr_odd = null
    let curr_even = null

    let curr = head
    let counter = 1
    while (curr !== null) {
        if (counter % 2 === 0) {
            if (evenhead === null) {
                evenhead = curr
                curr_even = evenhead
            } else {
                curr_even.next = curr
                curr_even = curr_even.next
            }
        } else {
            if (oddhead === null) {
                oddhead = curr
                curr_odd = oddhead
            } else {
                curr_odd.next = curr
                curr_odd = curr_odd.next
            }
        }
        curr = curr.next
        counter++
    }
    curr_even.next = null
    curr_odd.next = evenhead
    return oddhead
}
