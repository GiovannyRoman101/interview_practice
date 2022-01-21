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
// var sumOfLeftLeaves = function (root) {
//     // dfs
// 	function dfs( node, isLeft = false){
// 		if(node === null){
// 			return 0
// 		}else{
// 			let sum = 0
// 			if(isLeft && node.left === null && node.right === null){
// 				sum = node.val
// 			}
// 			return dfs(node.left, true) + dfs(node.right, false)+ sum
			
// 		}
// 	}
// 	return dfs(root)
// }

var sumOfLeftLeaves = function (root) {
    let result = 0
	if(root === null){
		return result
	}

	let queue = [root]
	while(queue.length !== 0 ){
		let node = queue.shift()
		if(node.left !== null){
			let left = node.left
			if(left.left === null && left.right === null){
				result += left.val
			}else{
				queue.push(left)
			}
		}
		if(node.right !== null){
			queue.push(node.right)
		}
	}
	return result
	
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(sumOfLeftLeaves(root))
