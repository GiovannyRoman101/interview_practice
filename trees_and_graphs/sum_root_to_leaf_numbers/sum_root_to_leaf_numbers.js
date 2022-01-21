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
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0
    if (root === null) {
        return root
    }

    function dfs(node, currSum = 0) {
        if (node === null) {
            sum += currSum
        }else{
			if(node.left !== null){
				dfs(node.left, node.val + (currSum * 10))
			}
			if(node.right !== null){
				dfs(node.right, node.val +(currSum * 10))
			}
			if(node.left === null && node.right === null){
				sum += (currSum * 10) + node.val
			}
		}
    }
    dfs(root)
    return sum
}

let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(3)

console.log(sumNumbers(root))
