/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	let left = 0
	let right = citations.length -1
	citations.sort((a,b)=>{return b-a})
	while(left <= right){
		let mid = Math.floor((left + right) /2)
		if(citations[mid] > mid){
			left = mid+1
		}else{
			right = mid-1
		}
	}
	return left
}



console.log(hIndex([3,0,6,1,5]))

console.log(hIndex([1,3,1]))
console.log(hIndex([1]))
console.log(hIndex([100]))