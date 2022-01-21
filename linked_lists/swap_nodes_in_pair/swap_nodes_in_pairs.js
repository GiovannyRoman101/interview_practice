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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head
    }
	let even = head.next
	let odd = head
	head = even
	prev = null
	while(odd !== null && even !== null){
		let temp = even.next
		even.next = odd
		odd.next = temp
		prev = odd
		odd = odd.next
		if(odd !== null){
			even = odd.next
			prev.next = even
		}
	}
	if(odd !== null && even == null){
		prev.next = odd
	}
	return head
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
// list.next.next.next = new ListNode(4)

console.log(swapPairs(list))
