/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	let result = []
	if(root === null){
		return result
	}
	let queue = []
	let children = []
	let level = []
	queue.push(root)
	while(queue.length !== 0){
		let node = queue.shift()
		level.push(node.val)
		if(node.left !== null){
			children.push(node.left)
		}
		if(node.right !== null){
			children.push(node.right)
		}
		if(queue.length === 0){
			result.unshift(level)
			level = []
			queue = children
			children = []
		}
	}
	return result
}
