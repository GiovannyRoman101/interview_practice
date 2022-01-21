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
var insertionSortList = function (head) {
    if (head === null || head.next === null) {
        return head
    }
	let sorted = head
	let curr = head.next
	sorted.next = null
	while(curr !== null){
		let next = curr.next
		if(curr.val <= sorted.val){
			curr.next = sorted
			sorted = curr
			curr = next
		}else{
			let prev = sorted
			let curr_sorted = sorted.next
			while(curr_sorted !== null){
				if(curr.val < curr_sorted.val ){
					prev.next = curr
					curr.next = curr_sorted
					break
				}else{
					prev = curr_sorted
					curr_sorted = curr_sorted.next
				}
			}
			if(curr_sorted === null){
				curr.next = null
				prev.next = curr
			}
			curr = next
		}
	}

	return sorted
}

let list = new ListNode(-1)
list.next = new ListNode(5)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next = new ListNode(0)

console.log(insertionSortList(list).next.next)