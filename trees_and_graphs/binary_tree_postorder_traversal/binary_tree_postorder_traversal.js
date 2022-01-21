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
var postorderTraversal = function(root) {
    let result = []
	if(root === null){
		return result
	}
    function dfs(node){
		if(node.left !== null){
			dfs(node.left)
		}
		
		if(node.right !== null){
			dfs(node.right)
		}
		result.push(node.val)
	}
	dfs(node)
	return result
}