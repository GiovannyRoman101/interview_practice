/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return head
    }
    let map = new Map()
    let curr = head
    while (curr) {
        map.set(curr, new Node(curr.val, null, null))
        curr = curr.next
    }
    curr = head
    while (curr) {
        let temp = map.get(curr)
        if (map.get(curr.next)) {
            temp.next = map.get(curr.next)
        }
        if (map.get(curr.random)) {
            temp.random = map.get(curr.random)
        }

        curr = curr.next
    }
    return map.get(head)
}

let list = new Node()
