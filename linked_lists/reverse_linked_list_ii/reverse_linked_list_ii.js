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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (head === null || head.next === null || left === right) {
        return head
    }
    let prev = null
	let curr = head
	while( left > 1){
		prev = curr
		curr = curr.next
		left--
		right--
	}
	let con = prev
	let tail = curr
	while(right > 0){
		let temp = curr.next
		curr.next = prev
		prev = curr
		curr = temp
		right--
	}
	if(con !== null){
		con.next = prev
	}else {
		head = prev
	}
	tail.next = curr
	return head
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)

console.log(reverseBetween(list, 2,4))
