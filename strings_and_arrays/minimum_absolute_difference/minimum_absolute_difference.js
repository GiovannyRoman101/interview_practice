/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	let result = []
	if(arr.length <= 1){
		return result
	}
	arr.sort((a,b) =>{return a -b})
	let minDiff = Infinity
	for(let i = 1; i < arr.length; i++){
		let diff = Math.abs(arr[i] - arr[i-1])
		if(minDiff === diff){
			result.push([arr[i-1],arr[i]])
		}else if(minDiff > diff){
			minDiff = diff
			result = []
			result.push([arr[i-1],arr[i]])
		}
	}
	return result
}

console.log(minimumAbsDifference([4,2,1,3]))
console.log(minimumAbsDifference([1,3,6,10,15]))
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]))