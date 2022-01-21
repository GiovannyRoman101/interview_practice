/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	let connections = 0
	let visited = new Set()

	function dfs(node, visited){
		visited.add(node)
		for(let i = 0; i < isConnected[node].length; i++){
			if(!visited.has(i) && isConnected[node][i] === 1){
				dfs(i, visited)
			}
		}
	}

	for(let node = 0; node < isConnected.length; node++){
		if(!visited.has(node)){
			connections++
			dfs(node,visited)
		}
	}
	return connections
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))
