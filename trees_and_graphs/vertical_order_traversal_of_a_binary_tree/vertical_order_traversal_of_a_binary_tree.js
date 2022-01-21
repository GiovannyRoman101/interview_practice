/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// TODO:

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
	let map = new Map()
	

	function dfs(node, curIndex = 0, curLevel = 0){
		if(node === null){
			return
		}
		if(!map.has(curIndex)){
			map.set(curIndex, [])
		}
		let nums = map.get(curIndex)
		nums.push(node.val)
		if(node.left !== null){
			dfs(node.left, curIndex -1, curIndex +1)
		}

		if(node.right !== null){
			dfs(node.right, curIndex +1, curIndex +1)
		}
	}
	dfs(root)
	let arr = Array.from(map.entries())
	arr.sort(((a,b)=>{return a[0]- b[0]}))
	let result = []
	for(let i = 0; i < arr.length; i++){
		result.push(arr[i][1])
	}
	return result
}

let tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(verticalTraversal(tree))
