/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let left = 0
	let right = height.length -1
	let left_max = 0
	let right_max = 0
	
	let water = 0
	while(left <right){

		if(height[left]< height[right]){
			// if left is higher than left_max
			if(height[left] >= left_max){
				left_max = height[left]
			}else{
				// there is a dip for water
				water += left_max - height[left]
			}
			left++
		}else{

			if(height[right] >= right_max){
				// if right is higher than right_max
				right_max = height[right]
			}else{
				// there is a dip for water
				water += right_max - height[right]
			}
			right--
		}
	}
	return water
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))