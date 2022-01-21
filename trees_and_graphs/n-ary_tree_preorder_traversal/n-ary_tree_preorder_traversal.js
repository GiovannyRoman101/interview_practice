/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	let result = []
	if(root === null){
		return result
	}
	function dfs(node){
		if(node !== null){
			result.push(node.val)
			for(let child of node.children){
				dfs(child)
			}
		}
	}
	dfs(root)
	return result
}
