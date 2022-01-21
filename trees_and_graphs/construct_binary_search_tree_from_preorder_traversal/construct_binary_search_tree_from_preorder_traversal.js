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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
	let root = null 
	if(preorder === null || preorder.length === 0 ){
		return root
	}
	for(let i = 0; i < preorder.length; i++){
		let newNode = new TreeNode(preorder[i])
		if(root === null){
			root = newNode
		}else{
			let curr = root
			while(curr !== null){
				if(newNode.val > curr.val){
					if(curr.right === null){
						curr.right = newNode
						break
					}else{
						curr = curr.right
					}
				}else{
					if(curr.left === null){
						curr.left = newNode
						break
					}else{
						curr = curr.left
					}
				}
			}
		}
	}
	return root

}
console.log(bstFromPreorder([8,5,1,7,10,12]))