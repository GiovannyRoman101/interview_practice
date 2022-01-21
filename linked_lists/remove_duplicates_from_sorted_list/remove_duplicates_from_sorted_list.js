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
function deleteDuplicates(head) {
	if(head === null || head.next === null){
		return head
	}
	let prev = head
	let next = head.next
	while(next !== null){
		if(prev.val === next.val){
			prev.next = next.next
			next = next.next
		}else{
			prev = prev.next
			next = next.next
		}
	}
	return head
}
