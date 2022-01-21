// problem 94. Binary Tree Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let result = []
	if(root === null){
		return result
	}else{
		function df(node){
			if(node.left !== null){
				df(node.left)
			}
			result.push(node.val)
			if(node.right !== null){
				df(node.right)
			}
		}
		df(root)
		return result
	}
}
