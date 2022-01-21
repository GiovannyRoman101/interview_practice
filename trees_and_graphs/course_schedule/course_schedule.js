/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
	let graph = new Map()
	let visited = new Set()
	for(let i = 0; i < prerequisites.length; i++){

		if(!graph.has(prerequisites[i][0])){
			graph.set(prerequisites[i][0], [])
		}
		if(!graph.has(prerequisites[i][1])){
			graph.set(prerequisites[i][1], [])
		}
		let connections = graph.get(prerequisites[i][0])
		connections.push(prerequisites[i][1])
		graph.set(prerequisites[i][0], connections)
	}
	
	function dfs(node, currvisited = new Set()){
		if(!graph.has(node)){
			return true
		}
		if(currvisited.has(node)){
			return false
		}
		currvisited.add(node)
		let flag = true
		for(let edge of graph.get(node)){
			if(visited.has(edge)){
				continue
			}
			flag = flag && dfs(edge, currvisited)
			currvisited.delete(edge)
		}
		visited.add(node)
		return flag
	}

	for(let i = 0; i < numCourses; i++){
		if(!dfs(i)){
			return false
		}
	}
	return true

}

console.log(canFinish( 2,[[1,0]]))
console.log(canFinish( 2,[[1,0],[0,1]]))
console.log(canFinish(5,[[1,4],[2,4],[3,1],[3,2]]))