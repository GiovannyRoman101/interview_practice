/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
	
	while(matrix.length >1){
		let arr1 = matrix.shift()
		let arr2 = matrix.shift()
		matrix.push(merge(arr1,arr2))
	}
	return matrix[0][k-1]
}

function merge(arr1,arr2){
	let result = []
	if(arr1 !== null && arr2 === null){
		return arr1
	}else if(arr1 === null && arr2 !== null){
		return arr2
	}
	else{
		let count1 = 0
		let count2 = 0
		while(count1 < arr1.length && count2 < arr2.length){
			if(arr1[count1]<= arr2[count2]){
				result.push(arr1[count1])
				count1++
			}else{
				result.push(arr2[count2])
				count2++
			}
		}
		if(count1 === arr1.length && count2 < arr2.length){
			for(;count2 < arr2.length; count2++){
				result.push(arr2[count2])
			}
		}
		if(count1 < arr1.length && count2 === arr2.length){
			for(;count1 < arr1.length; count1++){
				result.push(arr1[count1])
			}
		}
		return result
	}
}

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))
console.log(kthSmallest([[-5]], 1))