/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
	let one = Infinity
	let two = Infinity

	for(let i = 0; i < nums.length; i++){
		// get the smallest number
		if(one  >= nums[i]){
			one = nums[i]
		// bigger than the smallest number
		}else if(two >= nums[i] ){
			two = nums[i]
		// biggest number
		}else{
			return true
		}
	}
	return false
}

console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([2,1,5,0,4,6]))