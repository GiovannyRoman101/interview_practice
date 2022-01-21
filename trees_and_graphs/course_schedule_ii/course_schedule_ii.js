/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder (numCourses, prerequisites) {
    let graph = new Map()
	let result = []

	// build graph
    for (const [course, prereq] of prerequisites) {
        if (!graph.has(course)) {
			graph.set(course, [])
		}
        graph.get(course).push(prereq)
    }

    let visited = new Set()

    function dfs(course, visiting = new Set()) {
		// if already visited
        if (visiting.has(course)) return false
        // course was safely added
		if (visited.has(course)) return true

        if (graph.has(course)) {
			// check if course has prequisties
            visiting.add(course)
            for (let pre of graph.get(course)) {
                if (!dfs(pre, visiting)) return false
            }
            visiting.delete(course)
        }
		// passed all requisites
        result.push(course)
        visited.add(course)
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return []
    }

    return result
}

console.log(findOrder(4, [[1, 0],[2, 0],[3, 1],[3, 2]]))
console.log(findOrder(1, []))
