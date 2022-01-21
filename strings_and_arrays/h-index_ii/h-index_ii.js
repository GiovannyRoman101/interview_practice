/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	let left = 0
	let right = citations.length-1

	while(left <= right){
		let mid = Math.floor((left + right) /2)

		if(citations[mid] === citations.length - mid){
			return citations[mid]
		}else if(citations[mid] < citations.length - mid){
			left = mid +1
		}else{
			right = mid -1
		}
	}

	return citations.length - left 
}

console.log(hIndex([0,1,3,5,6]))
console.log(hIndex([1,2,100]))
console.log(hIndex([100]))