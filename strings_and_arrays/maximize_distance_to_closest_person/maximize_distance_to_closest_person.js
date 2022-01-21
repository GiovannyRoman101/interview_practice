/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {

	let prev = -1
	let next = 0
	let result = 0

	for(let i = 0; i < seats.length; i++){
		if(seat[i] === 1){
			prev = i
		}else{
			while(next < seats.length && seats[next] === 0 || next < i){
				next++
			}
			let left = prev === -1 ? seats.length: (i - prev)
			let right = next === seats.length ? seats.length : next -i
			result = Math.max(result, Math.min(left,right))
		}
	}
	return result
}
