// problem 21. Merge Two Sorted Lists


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val,next){
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	let newlist = null
	if(l1 === null && l2 !== null){
		newlist = l2
		return newlist
	}else if( l1 !== null && l2 === null){
		newlist = l1
		return newlist
	}else if(l1 === null && l2 === null){
		return newlist
	}
	let curr = null
	if(l1.val <= l2.val){
		newlist = l1
		curr = l1
		l1 = l1.next
	}else{
		newlist = l2
		curr = l2
		l2 = l2.next
	}
	while(l1 !== null && l2 !== null){
		if(l1.val <= l2.val){
			
			curr.next = l1
			l1 = l1.next
			curr = curr.next
		}else{
			curr.next = l2
			l2 = l2.next
			curr = curr.next
		}
	}
	if(l1 !== null && l2 === null){
		curr.next = l1
	}else if (l1 === null && l2 !== null){
		curr.next = l2
	}
	return newlist
}
