/**
 * @param {number[]} heights
 * @return {number[]}
 */

// monotonic stack
// a stack with an order
// like ascending order

var canSeePersonsCount = function (heights) {
	let visible = []
	let stack = []
	for(let i = heights.length-1; i >=0; i--){
		let sight = 0
		while(stack.length !== 0){
			if(heights[i] >stack[stack.length-1]){
				sight++
				stack.pop()
			}else{
				sight++
				break
			}
		}
		stack.push(heights[i])
		visible[i] = sight
	}
	return visible
}

console.log(canSeePersonsCount([10,6,8,5,11,9]))
console.log(canSeePersonsCount([5,1,2,3,10]))
console.log(canSeePersonsCount([3,1,5,8,6]))