/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// space O(n)
// time O(2n* k)
var minSpaceWastedKResizing = function (nums, k) {
	
	let dp = new Array(nums.length+1).fill(0)
	let itr = k

	while(itr >=0){

		for(let i = nums.length -1 ; i >= 0; i--){
			let waste = 0
			// assuming last number is largest
			let max = nums[i]
			// 
			let min = dp[i+1]

			for(let j = i; j >= 0; j--){
				// num fits in memory
				if(nums[j] <= max){
					waste += max - nums[j]
				}else{
					// number does not fit in memory 
					// remove some waste
					waste += (i-j) * (nums[j] - max)
					max = nums[j]
				}

				if(itr != k){
					min = Math.min(min, waste + dp[j])
				}else{
					min = waste
				}
			}
			dp[i+1] = min
		}
		itr--
	}
	return dp[nums.length]
}

console.log(minSpaceWastedKResizing([10,20], 0))
console.log(minSpaceWastedKResizing([10,20,30], 1))
console.log(minSpaceWastedKResizing([10,20,15,30,20], 2))