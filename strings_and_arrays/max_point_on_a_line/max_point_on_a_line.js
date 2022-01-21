/**
 * @param {number[][]} points
 * @return {number}
 */

// TODO: probably precision error

var maxPoints = function (points) {
	if(points.length < 3){
		return points.length
	}
	let maxline = 0

	for(let i = 0; i < points.length; i++){
		let map = new Map()
		for(let j = i+1; j < points.length; j++){
			let point1 = points[i]
			let point2 = points[j]
			let slope = (point2[1] - point1[1])/(point2[0] - point1[0])
			if(map.has(slope)){
				let temp = map.get(slope)

				map.set(slope,++temp)
			}else{
				map.set(slope, 2)
			}
			maxline = Math.max(maxline, map.get(slope))
		}
	}
	return maxline
}

console.log(maxPoints([[1,1],[2,2],[3,3]]))
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))
// needs to be 7 instead of 5
console.log(maxPoints([[0,1],[0,0],[0,4],[0,-2],[0,-1],[0,3],[0,-4]]))