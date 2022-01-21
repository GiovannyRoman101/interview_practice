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
 * @return {number[]}
 */
var findMode = function (root) {
    let freq = 0
    let result = []
    let map = new Map()
    if (root === null) {
        return result
    } else {
        let queue = [root]
        while (queue.length !== 0) {
            let curr = queue.shift()
            if (!map.has(curr.val)) {
                map.set(curr.val, 0)
            }
            let temp = map.get(curr.val)
            temp++
            map.set(curr.val, temp)
            if (curr.left !== null) {
                queue.push(curr.left)
            }
            if (curr.right !== null) {
                queue.push(curr.right)
            }
        }

        for (let key of map.keys()) {
            if (map.get(key) === freq) {
                result.push(key)
            } else if (map.get(key) > freq) {
                result = [key]
                freq = map.get(key)
            }
        }
        return result
    }
}
