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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (head === null) {
        return null
    } else if (head !== null && head.next === null) {
        return new TreeNode(head.val)
    } else {
        let prev = null
        let slow = head
        let fast = head.next
        while (fast !== null) {
            prev = slow
            slow = slow.next
            fast = fast.next
            if (fast !== null) {
                fast = fast.next
            }
        }
        prev.next = null
        let root = new TreeNode(slow.val)
        root.right = sortedListToBST(slow.next)
        root.left = sortedListToBST(head)
        return root
    }
}

let list = new ListNode(-10)
list.next = new ListNode(-3)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(9)

console.log(sortedListToBST(list))