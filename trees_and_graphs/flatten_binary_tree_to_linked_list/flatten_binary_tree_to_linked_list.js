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
var flatten = function (root) {
	if(root === null){
		return null
	}else if(root.left === null && root.right === null){
		return root
	}
	let left = flatten(root.left)
	let right = flatten(root.right)
	root.left = null
	if(left !== null && right !== null){
		root.right = left
		let temp = left
		while(temp !== null){
			if(temp.right === null){
				temp.right = right
				break
			}
			temp = temp.right
		}
	}else if(left !== null && right === null){
		root.right = left
	}

	return root

}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right = new TreeNode(5)
root.right.right = new TreeNode(6)

console.log(flatten(root).right)