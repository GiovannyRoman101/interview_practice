/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var networkDelayTime = function (times, n, k) {
	let graph = new Map()
	for(let i = 0; i < times.length; i++){
		if(!graph.has(times[i][0])){
			graph.set(times[i][0], [])
		}
		let temp = graph.get(times[i][0])
		temp.push({weight: times[i][2], node: times[i][1]})
	}
	// Initial distance
	let distances = new Map()
	for(let i = 1; i <= n; i++){
		distances.set(i, Infinity)
	}

	function dfs( node, elapsed = 0){
		if(elapsed >= distances.get(node)){
			return
		}
		distances.set(node, elapsed)
		if(graph.has(node)){
			for(let obj of graph.get(node)){
				dfs(obj.node, elapsed + obj.weight)
			}
		}
	}

	dfs(k)

	// find the longest delay thats not Infinity
	let max = -1
	for(let i = 1; i <= n; i++){
		// no possible way to reach node
		if(distances.get(i) === Infinity){
			return -1
		}
		max = Math.max(max, distances.get(i))
	}
	return max
}

// var networkDelayTime = function (times, n, k) {
// 	let distances = new Array(n).fill(Infinity)
// 	// starting point is 0
// 	distances[k-1] = 0
// 	let change = true
// 	while(change){
// 		change = false
// 		for(let [node1, node2, delay] of times){
// 			node1--
// 			node2--
// 			if(distances[node1] === Infinity){
// 				continue
// 			}
// 			if(distances[node2] > distances[node1] + delay){
// 				distances[node2] = distances[node1] + delay
// 				change = true
// 			}
// 		}
// 	}

// 	let res = Math.max(...distances)
// 	return res === Infinity ? -1: res
// }

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4 , 2))

console.log(networkDelayTime([[1,2,1]],2,1))
console.log(networkDelayTime([[1,2,1]],2,2))