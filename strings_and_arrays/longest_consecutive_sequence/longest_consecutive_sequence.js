/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	nums.sort((a,b)=> {return a-b})
	let maxLength = 0
	let count = 0
	for(let i = 0; i < nums.length; i++){
		if(i === 0){
			count++
			maxLength = Math.max(maxLength, count)
			continue
		}
		if(nums[i] === (nums[i-1]+1) ){
			count++
			maxLength = Math.max(maxLength, count)
		}else if(nums[i] === nums[i-1]){
			continue
		}else{
			maxLength = Math.max(maxLength, count)
			count = 1
		}
	}
	return maxLength
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([1,2,0,1]))
console.log(longestConsecutive([0,0]))