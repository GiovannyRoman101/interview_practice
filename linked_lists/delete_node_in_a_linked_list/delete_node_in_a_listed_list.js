/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    if (node === null) {
        return
    }
	let prev = null
    let curr = node
    let next = node.next
    while (next !== null) {
        curr.val = next.val
        prev = curr
		curr = curr.next
        next = next.next
    }
    prev.next = null
}

let list = new ListNode(4)
list.next = new ListNode(5)
list.next.next = new ListNode(1)
list.next.next.next = new ListNode(9)
deleteNode(list.next)
console.log(list)