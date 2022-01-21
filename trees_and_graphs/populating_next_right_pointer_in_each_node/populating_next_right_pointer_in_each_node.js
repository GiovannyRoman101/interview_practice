/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if(root === null){
		return root
	}
	let queue = [root]
	let children = []
	while(queue.length !== 0){
		let node = queue.shift()
		if(queue.length !== 0){
			node.next = queue[0]
		}else {
			node.next = null
		}
		if(node.left !== null){
			children.push(node.left)
		}
		if(node.right !== null){
			children.push(node.right)
		}
		if(queue.length === 0){
			queue = children
			children = []
		}
	}
	return root
}
