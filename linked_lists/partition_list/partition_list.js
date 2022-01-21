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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head === null || head.next === null) {
        return head
    }

    let curr = head
    let less = null
    let less_index = null
    let eq_greater = null
    let eq_greater_index = null
    while (curr !== null) {
        if (curr.val < x) {
            if (less === null) {
                less = curr
                less_index = curr
            } else {
                less_index.next = curr
                less_index = less_index.next
            }
        } else {
            if (eq_greater === null) {
                eq_greater = curr
                eq_greater_index = curr
            } else {
                eq_greater_index.next = curr
                eq_greater_index = eq_greater_index.next
            }
        }
        curr = curr.next
    }
    if (less === null && eq_greater !== null) {
        return eq_greater
    }else if(less !== null && eq_greater === null){
		return less
	}
	eq_greater_index.next = null
    less_index.next = eq_greater
    return less
}

let list = new ListNode(1)
list.next = new ListNode(4)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(2)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(2)

console.log(partition(list, 3))
