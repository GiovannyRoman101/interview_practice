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
var findTilt = function (root) {
    let result = 0
    function dfs(node) {
        if (node === null) {
            return 0
        } else {
            let left = dfs(node.left)
            let right = dfs(node.right)
            result += Math.abs(left - right)
            return node.val + left + right
        }
    }
    dfs(root)
    return result
}

let tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(9)
tree.right.right = new TreeNode(7)

console.log(findTilt(tree))
console.log(tree)