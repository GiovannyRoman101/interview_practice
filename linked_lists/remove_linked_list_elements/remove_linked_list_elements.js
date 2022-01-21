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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        return head
    }
    let prev = null
    let curr = head
    while (curr !== null) {
        if (curr.val === val) {
            if (prev === null) {
                head = head.next
            } else {
                prev.next = curr.next
            }
        } else {
            prev = curr
        }
        curr = curr.next
    }
    return head
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(6)

console.log(removeElements(list, 6))
