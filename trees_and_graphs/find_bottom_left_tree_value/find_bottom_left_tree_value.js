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
var findBottomLeftValue = function (root) {
	if( root === null){
		return root
	}else{
		let maxDepth = 0
		let leftmost = root.val
		function dfs(node, level = 0){
			if(node.left === null && node.right === null && level > maxDepth){
				maxDepth = level
				leftmost = node.val
				return
			}
			// finds the max depth which will be left
			if(node.left !== null){
				dfs(node.left, level +1)
			}
			if(node.right !== null){
				dfs(node.right, level +1)
			}
		}

		dfs(root)
		return leftmost
	}
}
