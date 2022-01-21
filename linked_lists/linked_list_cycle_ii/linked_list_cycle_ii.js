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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null || head.next === null) {
        return null
    }
    let slow = head
    let fast = head

	while(fast !== null ){
		slow = slow.next
		fast = fast.next
		if(fast !== null){
			fast = fast.next
		}
		// loop detected
		if(slow === fast){

			fast = head
			// it should be the same distance
			while(slow !== fast){
				slow = slow.next
				fast = fast.next
			}
			return slow
		}
	}

    return null
}

let list = new ListNode(3)
list.next = new ListNode(2)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(4)

list.next.next.next.next = list.next

console.log(detectCycle(list))