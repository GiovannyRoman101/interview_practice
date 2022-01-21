/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if(nums.length === 0){
		return 0
	}else if(nums.length <=2){
		return Math.max(...nums)
	}
	

	function travel(houses){
		let memo = []
		memo[0] = houses[0]
		memo[1] = Math.max(houses[0], houses[1])

		for(let i = 2; i < houses.length; i++){
			memo[i] = Math.max(houses[i] + memo[i-2], memo[i-1])
		}
		return memo[memo.length-1]
	}
	
	return Math.max(travel(nums.slice(1)), travel(nums.slice(0, nums.length -1)))
}

console.log(rob([2,3,2]))
console.log(rob([0]))
console.log(rob([1,2,3,1]))