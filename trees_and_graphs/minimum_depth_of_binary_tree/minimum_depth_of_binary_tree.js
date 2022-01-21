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
 * @return {number}
 */
var minDepth = function (root) {
	if(root === null){
		return 0
	}
	let depth = 0
	let stack = [root]
	let children = []
	while(stack.length !== 0){
		let node = stack.pop()
		if(node.left === null && node.right === null){
			return depth+1
		}
		if(node.left !== null){
			children.push(node.left)
		}
		if(node.right !== null){
			children.push(node.right)
		}
		if(stack.length === 0){
			depth++
			stack = children
			children = []
		}
	}
	return depth
}
