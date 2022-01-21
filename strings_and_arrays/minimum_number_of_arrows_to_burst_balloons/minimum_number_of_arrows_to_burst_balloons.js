/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
	points.sort((a,b)=>{return a[0] - b[0]})

	if(points.length === 0){
		return 0
	}
	let arr = [points[0]]

	while(points.length !== 0){
		let first = arr.pop()
		let second = points.shift()
		if(first[0] <= second[0] && second[0] <= first[1]){
			first[0] = Math.max(first[0], second[0])
			first[1] = Math.min(first[1], second[1])
			arr.push(first)
		}else if(second[0] <= first[0] && first[0] <= second[1]){
			second[0] = Math.max(first[0], second[0])
			second[1] = Math.min(first[1], second[1])
			arr.push(second)
		}else{
			arr.push(first)
			arr.push(second)
		}
	}
	return arr.length

}

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))

console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))

console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))
