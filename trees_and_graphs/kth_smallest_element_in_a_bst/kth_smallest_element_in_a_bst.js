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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	let nums = []
	
	function dfs(node){
		if(node === null){
			return
		}
		if(node.left !== null){
			dfs(node.left)
		}
		nums.push(node.val)
		if(node.right !== null){
			dfs(node.right)
		}
	}
	dfs(root)
	if(nums.length !== 0 && nums.length >= k){
		return nums[k-1]
	}
	return Infinity
}

