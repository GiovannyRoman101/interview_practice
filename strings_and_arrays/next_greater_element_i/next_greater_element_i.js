/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	let result = []
	for(let i = 0; i < nums1.length; i++){
		let num = nums1[i]
		let index = nums2.indexOf(num)
		if(index === nums2.length -1){
			result.push(-1)
		}else{
			let max = -1
			while(index+1 !== nums2.length){
				if(num < nums2[index+1] && max < nums2[index+1] ){
					max = nums2[index+1]
					break
				}
				index++
			}
			result.push(max)
		}
	}
	return result
}

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
console.log(nextGreaterElement([2,4], [1,2,3,4]))