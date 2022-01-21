/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
	let val = 1
	while(true){
		let sum = val
		for(let i = 0; i < nums.length; i++){
			sum += nums[i]
			if(sum < 1){
				break
			}
		}
		if(sum >= 1){
			return val
		}
		val++
	}
}

console.log(minStartValue([1,2]))