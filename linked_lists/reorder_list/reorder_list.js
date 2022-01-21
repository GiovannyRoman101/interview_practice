/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if(head === null || head.next === null){
		return
	}
	let list = []
	let curr = head
	while(curr !== null){
		list.push(curr)
		curr = curr.next
	}
	curr = head
	let prev = null
	for(let i = list.length-1; i >= Math.floor(list.length /2); i--){
		let temp = curr.next
		curr.next = list[i]
		list[i].next = temp
		prev = list[i]
		curr = temp
	}
	prev.next = null
}

let list =  new ListNode(1)
// list.next = new ListNode(2)
// list.next.next = new ListNode(3)
// list.next.next.next = new ListNode(4)
reorderList(list)
console.log(list)