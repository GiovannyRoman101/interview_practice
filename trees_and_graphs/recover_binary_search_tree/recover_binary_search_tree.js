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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
	let prev = null
	let err1 = null
	let err2 = null
	
	function dfs(node){
		if(node === null){
			return
		}
		dfs(node.left)
		// check if left node is greater than root
		if(prev !== null && node.val < prev.val){
			// mark first error
			if(err1 === null){
				err1 = prev
			}
			// else root will be swapped
			err2 = node
		}
		prev = node
		dfs(node.right)
	}
	dfs(root)
	let temp = err1.val
	err1.val = err2.val
	err2.val = temp
}

let root = new TreeNode(3)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.right.left = new TreeNode(2)
recoverTree(root)
console.log(root)
