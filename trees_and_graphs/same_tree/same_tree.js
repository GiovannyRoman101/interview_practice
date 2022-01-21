/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	if(q === null && p === null){
		return true
	}
	let queue1 = []
	let queue2 = []
	queue1.push(p)
	queue2.push(q)
	while(queue1.length !== 0 && queue2.length !== 0){
		let node1 = queue1.shift()
		let node2 = queue2.shift()
		if(node1 === null && node2 === null){
			continue
		}else if((node1 === null && node2 !== null) || (node1 !== null && node2 === null)){
			return false
		}else if(node1.val === node2.val){
			queue1.push(node1.left)
			queue1.push(node1.right)
			queue2.push(node2.left)
			queue2.push(node2.right)
		}else{
			return false
		}
	}
	if(queue1.length === 0 && queue2.length === 0){
		return true
	}
	return false
}
