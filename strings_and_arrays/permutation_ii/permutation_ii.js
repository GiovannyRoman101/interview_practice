/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let result = []
	nums.sort((a,b)=>{return a-b})
	function backtracking( list,curr = [],){
		if(curr.length === nums.length){
			result.push([...curr])
		}else{
			for(let i = 0; i < list.length; i++){
				if(i > 0 && (list[i] === list[i-1]) ){
					continue
				}
				curr.push(list[i])
				backtracking([...list.slice(0,i), ...list.slice(i+1)] ,curr )
				curr.pop()
			}
		}
	}
	backtracking(nums)
	return result
}

console.log(permuteUnique([1,1,2]))
console.log(permuteUnique([1,2,3]))