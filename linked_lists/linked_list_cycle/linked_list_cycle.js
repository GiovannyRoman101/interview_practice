/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if(head === null || head.next === null){
		return false
	}
	let curr = head
	let next = head.next
	while(next !== null){
		curr = curr.next
		next = next.next
		if(next !== null){
			next = next.next
		}
		if(curr === next){
			return true
		}
	}
	return false
}
