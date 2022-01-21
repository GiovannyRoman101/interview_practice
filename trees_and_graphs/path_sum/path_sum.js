/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false
    }
    function dfs(node, curSum = 0) {
        if (node === null) {
            return curSum === targetSum
        }
        if (node.left !== null && node.right !== null) {
            return (
                dfs(node.left, node.val + curSum) ||
                dfs(node.right, node.val + curSum)
            )
        } else if (node.left !== null) {
            return dfs(node.left, node.val + curSum)
        } else {
            return dfs(node.right, node.val + curSum)
        }
    }
    return dfs(root)
}
