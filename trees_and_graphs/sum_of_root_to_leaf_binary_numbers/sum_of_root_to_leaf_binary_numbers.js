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
var sumRootToLeaf = function (root) {
	if(root === null){
		return 0
	}
	let result = 0

	function dfs(node, str = ''){
		if(node === null){
			if(str !== ''){
				result += parseInt(str,2)
			}
		}
		if(node.left !== null){
			dfs(node.left, str + node.val)
		}
		if(node.right !== null){
			dfs(node.right, str + node.val)
		}
		if(node.left === null && node.right === null){
			result += parseInt(str + node.val,2)
		}
	}

	dfs(root)
	return result
}
