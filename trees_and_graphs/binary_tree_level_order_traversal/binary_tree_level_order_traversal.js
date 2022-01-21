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
var levelOrder = function (root) {
	let result = []
	if(root === null){
		return result
	}
	let queue = []

	queue.push(root)

	let branches = []
	let level_val =[]
	while(queue.length !==0){
		let node = queue.shift()
		level_val.push(node.val)

		if(node.left !== null){
			branches.push(node.left)
		}
		if(node.right !== null){
			branches.push(node.right)
		}
		if(queue.length === 0){
			result.push(level_val)
			queue = branches
			branches = []
			level_val = []
		}
	}
	return result
}
