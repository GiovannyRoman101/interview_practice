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

// TODO: fix
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
	let result = []
	if(root === null){
		return result
	}
	let queue = [root]
	let level = []
	let isLeft = true
	let children = []
	while(queue.length !== 0){
		if(isLeft){
			let node = queue.shift()
			level.push(node.val)
			if(node.left !== null){
				children.push(node.left)
			}
			if(node.right !== null){
				children.push(node.right)
			}
		}else{
			let node = queue.pop()
			level.push(node.val)
			if(node.right !== null){
				children.unshift(node.right)
			}
			if(node.left !== null){
				children.unshift(node.left)
			}
			
		}
		if(queue.length === 0){
			isLeft = !isLeft
			result.push(level)
			level = []
			queue = children
			children = []
		}
	}
	return result
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(zigzagLevelOrder(root))