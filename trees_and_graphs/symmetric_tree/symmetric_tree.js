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
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if(root === null){
		return true
	}else{
		function dfs_tree(left, right){
			if(left === null && right === null){
				return true
			}else if((left !== null && right === null) ||(left === null && right !== null)){
				return false
			}else if(left.val === right.val){
				return dfs_tree(left.left, right.right) && dfs_tree(left.right, right.left)
			}
			return false
		}
		return dfs_tree(root.left, root.right)
	}
}
