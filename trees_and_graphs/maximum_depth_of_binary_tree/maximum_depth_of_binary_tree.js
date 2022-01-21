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
 var maxDepth = function(root) {
    let depth = 0
	if(root === null){
		return depth
	}
	function dfs(node, currDepth = 0){
		if(node === null){
			return currDepth
		}
		return Math.max(dfs(node.left, currDepth + 1), dfs(node.right, currDepth + 1))
	}
	return dfs(root)
}