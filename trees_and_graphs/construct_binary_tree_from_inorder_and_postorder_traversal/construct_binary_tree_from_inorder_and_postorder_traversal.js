/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// TODO: fix
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	if(inorder.length === 0 || postorder.length === 0){
		return null
	}
	// root = end of postorder
	// inorder = [...leftinorder,root,...rightinorder]
	// postorder = [...leftpostorder, ...rightpostorder, root]
	let val = postorder[postorder.length-1]
	let pivot = inorder.indexOf(val)
	let node = new TreeNode(val)
	node.left = buildTree(inorder.slice(0, pivot),postorder.slice(0,pivot))
	node.right = buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
	return node
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))

console.log(buildTree([2,3,1], [3,2,1]))