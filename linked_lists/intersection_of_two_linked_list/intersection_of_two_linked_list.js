/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

	while(headA !== null){
		let currb = headB
		while(currb !== null){
			if(headA.val === currb.val){
				return currb
			}
			currb = currb.next
		}
		headA = headA.next
	}
	return null
}
