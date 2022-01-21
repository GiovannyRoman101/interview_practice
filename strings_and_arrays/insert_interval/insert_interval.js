/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if(intervals.length ===0){
		intervals.push(newInterval)
		return intervals
	}
	let stack = [newInterval]
	while(intervals.length !== 0){
		let prev = stack.pop()
		let next = intervals.shift()
		if((prev[0] <= next[0] && next[0] <= prev[1])|| (next[0] <= prev[0] && prev[0] <= next[1])){
			prev[0] = Math.min(prev[0], next[0])
			prev[1] = Math.max(prev[1], next[1])
			stack.push(prev)
		}else if(prev[1] < next[0]){
			stack.push(prev)
			stack.push(next)
		}else{
			stack.push(next)
			stack.push(prev)
		}
	}
	return stack
}

console.log(insert([[1,3],[6,9]],[2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))