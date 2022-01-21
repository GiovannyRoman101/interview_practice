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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
	let result = []
	if(root === null){
		return result
	}

	function dfs(node,curSum = 0, curNodes = []){
		if(node === null){
			if(curSum === targetSum){
				result.push([...curNodes])

			}
			return
		}
		curNodes.push(node.val)
		if(node.left !== null && node.right !== null){
			dfs(node.left, curSum + node.val, curNodes)
			dfs(node.right, curSum + node.val, curNodes)
		}else if(node.left !== null){
			dfs(node.left, curSum + node.val, curNodes)
		}else{
			dfs(node.right, curSum + node.val, curNodes)
		}
		curNodes.pop()
	}
	dfs(root)
	return result
}
