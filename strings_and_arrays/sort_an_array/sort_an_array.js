/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	if(nums === null){
		return []
	}else if(nums.length <= 1){
		return nums
	}
	let mid = Math.floor(nums.length /2)
	let left = sortArray(nums.slice(0,mid))
	let right = sortArray(nums.slice(mid))
	return merge(left,right)

}

function merge(arr1,arr2){
	if(arr1.length !==0 && arr2.length ===0){
		return arr1
	}else if(arr1.length ===0 && arr2.length !==0){
		return arr2
	}else{
		let result = []
		while(arr1.length !== 0 && arr2.length !== 0){
			if(arr1[0] >= arr2[0]){
				result.push(arr2.shift())
			}else{
				result.push(arr1.shift())
			}
		}
		if(arr1.length !== 0){
			result.push(...arr1)
		}
		if(arr2.length !== 0){
			result.push(...arr2)
		}
		return result
	}
}

console.log(sortArray([5,1,1,2,0,0]))