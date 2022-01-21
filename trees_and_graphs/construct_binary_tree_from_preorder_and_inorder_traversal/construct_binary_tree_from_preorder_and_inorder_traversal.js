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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	if(preorder.length === 0 || inorder.length === 0){
		return null
	}
	let val = preorder.shift()
	let inorderIndex = inorder.indexOf(val)
	let node = new TreeNode(val)
	node.left = buildTree(preorder,inorder.slice(0,inorderIndex),)
	node.right = buildTree(preorder,inorder.slice(inorderIndex+1))
	return node
}

console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))