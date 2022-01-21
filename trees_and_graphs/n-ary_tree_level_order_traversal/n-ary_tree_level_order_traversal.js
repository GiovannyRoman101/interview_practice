// problem 429. N-ary Tree Level Order Traversal

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let result = []
	if(root === null){
		return result
	}
	let queue = []
	queue.push(root)
	let branches = []
	let arr = []
	while(queue.length !== 0){
		let node = queue.shift()
		arr.push(node.val)
		for(let kid of node.children){
			if(kid !== null){
				branches.push(kid)
			}
			
		}
		if(queue.length === 0){
			result.push(arr)
			arr = []
			queue = branches
			branches = []
		}
	}
	return result
}
