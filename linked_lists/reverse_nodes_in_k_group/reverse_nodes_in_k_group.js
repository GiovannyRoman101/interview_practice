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
var reverseKGroup = function (head, k) {
    if (head === null || head.next === null || k === 1) {
        return head
    }
    let stack = [head]
    let count = 1
    let prev = null
    let newhead = null
    head = head.next
    while (head !== null) {
        stack.push(head)
        head = head.next
        count++
        if (count === k) {
            if (prev === null) {
                newhead = stack[stack.length - 1]
            } else {
                prev.next = stack[stack.length - 1]
            }
            while (count !== 0) {
                let node = stack.pop()
                node.next = stack[stack.length - 1]
                count--
                if (stack.length === 1) {
                    prev = stack.pop()
                    count--
                }
            }
        }
    }
	prev.next = null
	if(stack.length !==0){
		prev.next = stack[0]
	}
    return newhead
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)

console.log(reverseKGroup(list,2).next.next)