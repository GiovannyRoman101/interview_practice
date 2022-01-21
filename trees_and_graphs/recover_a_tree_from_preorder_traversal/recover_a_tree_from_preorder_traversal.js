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
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    let arr = traversal.split('-')
    let root = null
    if (arr.length !== 0) {
		root = new TreeNode(arr.pop())
    }
    while (arr.length !== 0) {
		let curr = root
		let val = arr.pop()
	}
    return root
}

console.log(recoverFromPreorder('1-2--3--4-5--6--7'))
