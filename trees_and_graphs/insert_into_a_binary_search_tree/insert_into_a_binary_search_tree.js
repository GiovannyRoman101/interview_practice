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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
	
	function dfs(node, val){
		if(node === null){
			return new TreeNode(val)
		}
		if(node.val < val){
			node.right = dfs(node.right, val)
		}
		if(node.val > val){
			node.left = dfs(node.left, val)
		}
		return node
	}
	return dfs(root,val)
}
