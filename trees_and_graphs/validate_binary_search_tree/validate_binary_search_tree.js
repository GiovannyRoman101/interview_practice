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
 * @return {boolean}
 */
 var isValidBST = function (root) {
    function dfs(node, min = Infinity, max = -Infinity) {
        if (node === null) {
            return true
        } else if ((node.val >= min) || (node.val <= max)) {
            return false
        } else {
            return (
                dfs(node.left, node.val, max) && dfs(node.right, min, node.val)
            )
        }
    }
    return dfs(root)
}

let root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)
console.log(isValidBST(root))