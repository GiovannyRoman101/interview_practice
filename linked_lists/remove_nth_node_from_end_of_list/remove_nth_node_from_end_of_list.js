/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next){
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	if(n === 0 || head === null){
		return head
	}
	let length = 0
	let curr = head
	while(curr !== null){
		curr = curr.next
		length++
	}
	let prev = null
	curr = head
	let i = 0
	if(length -n === 0){
		return curr.next
	}
	while( i < length -n ){
		prev = curr
		curr = curr.next
		i++
	}
	prev.next = curr.next
	return head
}

let list1 = new ListNode(1)
let list2 = new ListNode(1)
list2.next = new ListNode(2)
list2.next.next = new ListNode(3)
list2.next.next.next = new ListNode(4)
list2.next.next.next.next = new ListNode(5)

console.log(removeNthFromEnd(list1, 1))

console.log(removeNthFromEnd(list2, 2).next)