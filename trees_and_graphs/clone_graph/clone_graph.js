/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
}

var cloneGraph = function (node) {
    let visited = new Map()

	function dfs(input_node){
		if(input_node === null){
			return null
		}
		if(visited.has(input_node.val)){
			return visited.get(input_node.val)
		}
		let new_node = new Node(input_node.val)
		visited.set(input_node.val, new_node)
		for(let neighbor of input_node.neighbors){
			new_node.neighbors.push(visited.has(neighbor.val) ? visited.get(neighbor.val) : dfs(neighbor))
		}
        return new_node
	}
	return dfs(node)
}


