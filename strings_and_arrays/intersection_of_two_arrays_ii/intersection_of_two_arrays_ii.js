/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let result = []
	let longer = nums1
	let shorter = nums2
	if(longer.length < shorter.length){
		longer = nums2
		shorter = nums1
	}

	let left = 0
	while(left < shorter.length){
		for(let i = 0; i < longer.length; i++){
			if(shorter[left] === longer[i]){
				result.push(shorter[left])
				longer.splice(i,1)
				break
			}
		}
		left++
	}
	return result
}

console.log(intersect([4,9,5],[9,4,9,8,4]))