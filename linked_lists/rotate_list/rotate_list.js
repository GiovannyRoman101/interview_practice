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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) {
        return head
    }
	// get the length of list
	// curr will be the end of the list
    let length = 1
	let curr = head
	while(curr !== null && curr.next !== null){
		length++
		curr = curr.next
	}
	// find how many position to shift
	k = k % length
	if(k === 0){
		return head
	}
	// find new tail
	let tail = head
	let space = length - k
	while( space > 1){
		space --
		tail = tail.next
	}

	// get new head
	// attach head with tail
	let newhead = tail.next
	tail.next = null
	curr.next = head
	return newhead
}
let list = new ListNode(0)
list.next = new ListNode(1)
list.next.next = new ListNode(2)

console.log(rotateRight(list,4))
