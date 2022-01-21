// problem 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let result = []
	if(intervals === null || intervals.length === 0){
		return result
	}
	intervals.sort((a,b)=>{return a[0] - b[0]})
	result.push(intervals.shift())
	while(intervals.length !== 0){
		let endInterval = result.pop()
		let nextInterval = intervals.shift()
		if(endInterval[0] <= nextInterval[0] && nextInterval[0] <= endInterval[1]){
			endInterval[1] = Math.max(endInterval[1], nextInterval[1])
			result.push(endInterval)
		}else{
			result.push(endInterval)
			result.push(nextInterval)
		}
	}
	return result
}
