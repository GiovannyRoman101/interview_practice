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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
	if(root === null){
		return false
	}
	let queue = []
	queue.push(root)
	let children = []
	let xval = false
	let yval = false
	while(queue.length !== 0){
		let node = queue.shift()
		if(node.left !== null && node.right !== null){
			if((node.left.val === x && node.right.val === y) ||(node.left.val === y && node.right.val === x)){
				return false
			}
		}
		if(node.left !== null){
			children.push(node.left)
		}
		if(node.right !== null){
			children.push(node.right)
		}


		if(node.val === x){
			xval = true
		}
		if(node.val === y){
			yval = true
		}

		if(xval && yval ){
			return true
		}
		if(queue.length === 0){
			queue = children
			children = []
			xval = false
			yval = false
		}
	}
	return false
}

console.log(isCousins([1,2,3,4], 4,3))
console.log(isCousins([1,2,3,null,4,null,5], 5,4))