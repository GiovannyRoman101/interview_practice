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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }
	let sum = null
	let ptr = null
	let carry = 0
	while (l1 !== null && l2 !== null){
		let total = l1.val + l2.val + carry
		if(total > 9){
			carry = Math.floor(total/10)
			total = Math.floor(total %10)
		}else{
			carry = 0
		}
		if(ptr === null){
			sum = new ListNode(total)
			ptr = sum
		}else{
			ptr.next = new ListNode(total)
			ptr = ptr.next
		}
		l1 = l1.next
		l2 = l2.next
	}
	while(l1 !== null && l2 === null){
		let total = l1.val + carry
		if(total > 9){
			carry = Math.floor(total/10)
			total = Math.floor(total %10)
		}else{
			carry = 0
		}
		if(ptr === null){
			sum = new ListNode(total)
			ptr = sum
		}else{
			ptr.next = new ListNode(total)
			ptr = ptr.next
		}
		l1 = l1.next
	}
	while(l1 === null && l2 !== null){
		let total = l2.val + carry
		if(total > 9){
			carry = Math.floor(total/10)
			total = Math.floor(total %10)
		}else{
			carry = 0
		}
		if(ptr === null){
			sum = new ListNode(total)
			ptr = sum
		}else{
			ptr.next = new ListNode(total)
			ptr = ptr.next
		}
		l2 = l2.next
	}
	if(carry > 0){
		ptr.next = new ListNode(carry)
	}

	return sum
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1,l2))