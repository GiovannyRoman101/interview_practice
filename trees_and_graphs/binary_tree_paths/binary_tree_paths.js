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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = []
    if (root === null) {
        return result
    }

    function dfs(node, currPath = []) {
        if (node === null) {
            result.push(currPath.join('->'))
        } else {
            currPath.push(node.val)
			if (node.left === null && node.right === null) {
                result.push(currPath.join('->'))
                
            }
			if (node.left !== null) {
                dfs(node.left, currPath)
            }
            if (node.right !== null) {
                dfs(node.right, currPath)
            }
            currPath.pop()
        }
    }
    dfs(root)
    return result
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(5)
console.log(binaryTreePaths(root))