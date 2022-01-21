/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	if(height === null || height.length === 0){
		return 0
	} 
	let left = 0
	let right = height.length -1
	let area = 0
	while(left < right){
		let width = right - left
		let length = Math.min(height[left], height[right])
		area = Math.max(area, (width * length))
		if(height[left] > height[right]){
			right --
		}else{
			left++
		}
	}
	return area
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))