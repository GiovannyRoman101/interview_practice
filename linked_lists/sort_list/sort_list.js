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
var sortList = function (head) {
	// return list if has one or no elements
    if (head === null || head.next === null) {
        return head
    }
    let prev = null
    let slow = head
    let fast = head
	// find the half of the list
    while (fast !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next
        if (fast !== null) {
            fast = fast.next
        }
    }
	// break list
    prev.next = null
    let left = sortList(head)
    let right = sortList(slow)
    
	// merge left and right
	return merge(left, right)
}

function merge(l1, l2) {
	// return no list
    if (l1 === null && l2 === null) {
        return l1
		// only has one list
    } else if (l1 !== null && l2 === null) {
        return l1
		// only has one list
    } else if (l1 === null && l2 !== null) {
        return l2
    } else {
		// find the smallest value and it will be the sorted list
        let sort = null
        if (l1.val > l2.val) {
            sort = l2
            l2 = l2.next
        } else {
            sort = l1
            l1 = l1.next
        }
        let head = sort
        while (l1 !== null && l2 !== null) {
            if (l1.val > l2.val) {
                sort.next = l2
                l2 = l2.next
            } else {
                sort.next = l1
                l1 = l1.next
            }
            sort = sort.next
        }
        if (l1 === null && l2 !== null) {
            sort.next = l2
        } else if (l1 !== null && l2 === null) {
            sort.next = l1
        }
        return head
    }
}
