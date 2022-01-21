/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
	let odd = 0
	let even = 0

	for(let i = 0; i < position.length;i++){
		if( position[i] % 2 === 0){
			even++
		}else{
			odd++
		}
	}
	return Math.min(odd,even)
}

console.log(minCostToMoveChips([1,1000000000]))