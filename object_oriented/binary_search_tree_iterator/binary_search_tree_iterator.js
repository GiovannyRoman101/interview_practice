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

class BSTIterator {
    /**
     * @param {TreeNode} root
     */
    constructor(root) {
        this.arr = []
        this.convertToArray(root)
    }
    /**
     * @return {number}
     */
    next() {
        if (this.hasNext()) {
            return this.arr.shift()
        }
    }
    /**
     * @return {boolean}
     */
    hasNext() {
        return this.arr.length !== 0 ? true : false
    }

    convertToArray(root) {
		if(root === null){
			return
		}
		if(root.left !== null){
			this.convertToArray(root.left)
		}
		this.arr.push(root.val)

		if(root.right !== null){
			this.convertToArray(root.right)
		}
    }
}

let root = new TreeNode(7)
root.left = new TreeNode(3)
root.right = new TreeNode(15)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(20)

let iterator = new BSTIterator(root)

console.log(iterator.next())