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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	if(root === null){
		return 0
	}else{
		let sum = 0
		function dfs(node){
			if(node == null){
				return 0
			}
			if(node.left !== null){
				dfs(node.left)
			}
			if(low <= node.val && node.val <= high ){
				sum += node.val
			}
			if(node.right !== null){
				dfs(node.right)
			}
		}
		dfs(root)
		return sum
	}
}
