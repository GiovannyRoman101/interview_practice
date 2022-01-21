/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
	let graph = new Map()
	let redundant = null

	function dfs(from, to, visited = []){
		if(visited.includes(from)){
			return false
		}else{
			if(graph.has(from)){
				let connections = graph.get(from)
				if(connections.includes(to)){
					return true
				}else{
					visited.push(from)
					for(let node of connections){
						if(!visited.includes(node)){
							if(dfs(node,to,visited)){
								return true
							}
						}
					}
				}
			}
		}
		return false
	}

	// create graph
	for(let i = 0; i < edges.length; i ++){

		if(dfs(edges[i][0], edges[i][1])){
			redundant = edges[i]
		}

		if(!graph.has(edges[i][0])){
			graph.set(edges[i][0], [])
		}
		if(!graph.has(edges[i][1])){
			graph.set(edges[i][1], [])
		}
		let temp1 = graph.get(edges[i][0])
		temp1.push(edges[i][1])
		graph.set(edges[i][0],temp1 )

		let temp2 = graph.get(edges[i][1])
		temp2.push(edges[i][0])
		graph.set(edges[i][1], temp2)
	}
	return redundant
}

console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]))