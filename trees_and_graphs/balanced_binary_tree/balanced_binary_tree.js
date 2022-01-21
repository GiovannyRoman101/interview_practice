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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) {
        return true
    }

    function dfs(node) {
        if (node === null) {
            return 0
        }
        let left = 1 + dfs(node.left)
        let right = 1 + dfs(node.right)
        if (right > left) {
            return right
        } else {
            return left
        }
    }

    let left = dfs(root.left)
    let right = dfs(root.right)

    return (
        Math.abs(left - right) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    )
}
