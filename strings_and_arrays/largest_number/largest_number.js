/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
	nums.sort((a,b)=>{
		let ab = a.toString() + b.toString()
		let ba = b.toString() + a.toString()
		return ba - ab 
	})
	if(nums.length > 1 && nums[0] === 0){
		return '0'
	}
	return nums.join('')
}
console.log(largestNumber([10,2]))
console.log(largestNumber([3,30,34,5,9]))