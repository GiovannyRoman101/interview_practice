/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next){
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}
// run time is N logk
// k is all the division
// n for merging all parts
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
	if(lists === null || lists.length === 0){
		return null
	}
	function splitList(llists){
		if(llists.length <= 1){
			return llists
		}
		let left = splitList(llists.slice(0, Math.floor(llists.length/2)))
		let right = splitList(llists.slice( Math.floor(llists.length/2)))
		return [merge(left.pop(), right.pop())]
	}
	return splitList(lists).pop()
}


function merge(list1, list2){
	if(list1 === null && list2 === null){
		return list1
	}else if(list1 === null && list2 !== null){
		return list2
	}else if(list1 !== null && list2 ===null){
		return list1
	}
	let sorted = null
	if(list1.val <= list2.val){
		sorted = list1
		list1 = list1.next
	}else{
		sorted = list2
		list2 = list2.next
	}
	let pointer = sorted
	while(list1 !== null && list2 !== null){
		if(list1.val <= list2.val){
			pointer.next = list1
			pointer = pointer.next
			list1 = list1.next
		}else{
			pointer.next = list2
			pointer = pointer.next
			list2 = list2.next
		}
	}
	if(list1 !== null && list2 === null){
		pointer.next = list1
	}else if(list1 === null && list2 !== null){
		pointer.next = list2
	}
	return sorted
}
