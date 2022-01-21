/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if(root == null || p === null || q === null){
		return root
	}
	let result = null
	function dfs(node){
		// hits the bottom
		if(node === null){
			return false
		}
		// checks if left or right has value
		let left = dfs(node.left)
		let right = dfs(node.right)

		// checks if current node is one of the values
		let mid = (node === p || node === q) ? true : false

		// only 2 values need to be true
		if(left + right + mid >= 2){
			result = node
		}
		
		return mid || left || right
	}
	dfs(root)
	return  result
}

let tree = new TreeNode(3)
tree.left = new TreeNode(5)
tree.left.left = new TreeNode(6)
tree.left.right = new TreeNode(2)
tree.left.right.left = new TreeNode(7)
tree.left.right.right = new TreeNode(4)
tree.right = new TreeNode(1)
tree.right.left = new TreeNode(0)
tree.right.right = new TreeNode(8)

console.log(lowestCommonAncestor(tree, tree.left ,tree.right))