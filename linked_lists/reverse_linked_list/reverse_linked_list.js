// problem 206. Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode (val, next){
	this.val = (val === undefined ? 0: val)
	this.next = (next === undefined ? null: next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if(head === null){
		return head
	}
	let end = head
	let curr = head.next
	end.next = null
	while(curr !== null){
		let temp = curr.next
		curr.next = end
		end = curr
		curr = temp
	}
	return end

}
