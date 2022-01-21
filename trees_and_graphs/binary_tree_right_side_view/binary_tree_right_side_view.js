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
 * @return {number[]}
 */
var rightSideView = function (root) {
	let result = []
	if(root === null){
		return result
	}

	let queue = [root]
	let children = []

	while(queue.length !== 0){
		let node = queue.shift()
		if(node.left !== null){
			children.push(node.left)
		}
		if(node.right !== null){
			children.push(node.right)
		}
		if(queue.length === 0){
			result.push(node.val)
			queue = children
			children = []
		}
	}
	return result

}
